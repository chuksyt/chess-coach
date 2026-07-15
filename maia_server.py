#!/usr/bin/env python3
"""
maia_server.py — local backend for the Chess Coach page.

Serves the whole app from http://localhost:8000/ so there are NO CDN / file://
problems.  Endpoints:
  GET /              -> chess-coach.html
  GET /chess.js      -> local chess.js
  GET /maia?fen=&rating=   -> Maia policy: what a human of that rating plays
  GET /eval?fen=           -> Stockfish MultiPV eval (soundness check)
  GET /health

Python standard library only.  Talks to lc0 (Maia) and Stockfish over UCI.
"""
import glob, json, os, random, re, socket, subprocess, threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

APP_DIR   = os.path.dirname(os.path.abspath(__file__))   # C:\Users\hp
BASE      = os.path.join(APP_DIR, "maia")
WEIGHTS   = os.path.join(BASE, "weights")
PORT      = 8000
NETS      = (1100, 1300, 1500, 1700, 1900)

def _find(pattern, what):
    hits = glob.glob(pattern, recursive=True)
    if not hits:
        raise FileNotFoundError("%s not found (%s) — run setup-maia.ps1 first." % (what, pattern))
    return hits[0]

LC0        = _find(os.path.join(BASE, "lc0", "**", "lc0.exe"), "lc0.exe")
STOCKFISH  = _find(os.path.join(BASE, "stockfish", "stockfish.exe"), "stockfish.exe")

# ---- Puzzle bank (built by build_puzzles.py; optional) ----
PUZZLES_PATH = os.path.join(APP_DIR, "puzzles.json")
try:
    with open(PUZZLES_PATH, encoding="utf-8") as _pf:
        PUZZLES = json.load(_pf)
except (OSError, ValueError):
    PUZZLES = []

# "easy / medium / hard" shift the target rating relative to the player's band,
# so difficulty combines with the rating dropdown.
DIFF_OFFSET = {"easy": -300, "medium": 0, "hard": 300}


def pick_puzzle(rating, diff, theme):
    """Random puzzle near (rating + difficulty offset), optionally by theme."""
    if not PUZZLES:
        return None
    pool = PUZZLES
    if theme:
        tl = theme.lower()
        pool = [p for p in pool if any(t.lower() == tl for t in p["themes"])] or PUZZLES
    target = rating + DIFF_OFFSET.get(diff, 0)
    # Widen the acceptance window until we find candidates.
    for window in (150, 250, 400, 700, 10000):
        near = [p for p in pool if abs(p["rating"] - target) <= window]
        if near:
            return random.choice(near)
    return random.choice(pool)

_MOVE_RE = re.compile(r"info string\s+([a-h][1-8][a-h][1-8][qrbn]?)\b.*?\(?P:\s*([\d.]+)%", re.I)


class UCIProc:
    """Base: a persistent UCI engine process with a lock and line reader."""
    def __init__(self, args):
        self.lock = threading.Lock()
        self.p = subprocess.Popen(args, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                  stderr=subprocess.DEVNULL, text=True, bufsize=1)

    def send(self, s):
        self.p.stdin.write(s + "\n"); self.p.stdin.flush()

    def read_until(self, token):
        out = []
        for line in self.p.stdout:
            out.append(line)
            if token in line:
                return out
        raise RuntimeError("engine closed while waiting for '%s'" % token)


class Maia(UCIProc):
    def __init__(self, net):
        w = os.path.join(WEIGHTS, "maia-%d.pb.gz" % net)
        if not os.path.exists(w):
            raise FileNotFoundError("missing weights: %s" % w)
        super().__init__([LC0, "--weights=" + w])
        self.send("uci");  self.read_until("uciok")
        self.send("setoption name VerboseMoveStats value true")
        self.send("isready"); self.read_until("readyok")

    def predict(self, fen):
        with self.lock:
            self.send("position fen " + fen)
            self.send("go nodes 1")
            lines = self.read_until("bestmove")
        moves, best = [], None
        for ln in lines:
            m = _MOVE_RE.search(ln)
            if m:
                moves.append({"uci": m.group(1), "p": float(m.group(2)) / 100.0})
            if ln.startswith("bestmove"):
                best = ln.split()[1]
        tot = sum(x["p"] for x in moves) or 1.0
        for x in moves:
            x["p"] = round(x["p"] / tot, 4)
        moves.sort(key=lambda x: -x["p"])
        if best is None and moves:
            best = moves[0]["uci"]
        return {"bestmove": best, "moves": moves}


class Stockfish(UCIProc):
    def __init__(self, multipv=5, depth=10):
        super().__init__([STOCKFISH])
        self.depth = depth
        self.send("uci");  self.read_until("uciok")
        self.send("setoption name MultiPV value %d" % multipv)
        self.send("setoption name Threads value 4")
        self.send("setoption name Hash value 128")
        self.send("isready"); self.read_until("readyok")

    def evaluate(self, fen, moves=None):
        # If `moves` given, evaluate exactly those (so popular traps get a real eval too).
        go = "go depth %d" % self.depth
        n = 5
        if moves:
            n = len(moves)
            go += " searchmoves " + " ".join(moves)
        with self.lock:
            self.send("setoption name MultiPV value %d" % max(1, n))
            self.send("position fen " + fen)
            self.send(go)
            lines = self.read_until("bestmove")
        # keep the LAST info line per multipv index (deepest), scores from side-to-move POV
        best_by_pv = {}
        for ln in lines:
            if " multipv " not in ln:
                continue
            mpv = re.search(r"multipv (\d+)", ln)
            pv  = re.search(r" pv (.+)$", ln)
            cp  = re.search(r"score cp (-?\d+)", ln)
            mate= re.search(r"score mate (-?\d+)", ln)
            if mpv and pv:
                pv_moves = pv.group(1).split()
                best_by_pv[int(mpv.group(1))] = {
                    "uci": pv_moves[0] if pv_moves else None,
                    "reply": pv_moves[1] if len(pv_moves) > 1 else None,  # opponent's expected response
                    "pv": " ".join(pv_moves),                             # full principal variation
                    "cp": int(cp.group(1)) if cp else None,
                    "mate": int(mate.group(1)) if mate else None,
                }
        order = [best_by_pv[k] for k in sorted(best_by_pv)]
        return {"best": order[0] if order else None, "lines": order}


_pool, _pool_lock = {}, threading.Lock()
def maia_for(net):
    with _pool_lock:
        if net not in _pool:
            _pool[net] = Maia(net)
        return _pool[net]

_sf = None
def stockfish():
    global _sf
    with _pool_lock:
        if _sf is None:
            _sf = Stockfish()
        return _sf


class Handler(BaseHTTPRequestHandler):
    # Speak HTTP/1.1 with keep-alive. Every response below sends Content-Length,
    # so persistent connections are safe — and this avoids the connection-reuse
    # race where Chrome sends a request on a socket the (HTTP/1.0) server just
    # closed, leaving the request hung forever.
    protocol_version = "HTTP/1.1"

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")

    def _json(self, code, obj):
        body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self._cors(); self.end_headers()
        self.wfile.write(body)

    def _file(self, name, ctype):
        path = os.path.join(APP_DIR, name)
        if not os.path.exists(path):
            return self._json(404, {"error": name + " not found"})
        data = open(path, "rb").read()
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        u = urlparse(self.path)
        q = parse_qs(u.query)
        if u.path in ("/", "/index.html"):
            return self._file("chess-coach.html", "text/html; charset=utf-8")
        if u.path == "/chess.js":
            return self._file("chess.js", "application/javascript")
        if u.path == "/pieces.js":
            return self._file("pieces.js", "application/javascript")
        if u.path == "/openings.js":
            return self._file("openings.js", "application/javascript")
        if u.path == "/health":
            return self._json(200, {"ok": True, "lc0": LC0, "stockfish": STOCKFISH,
                                    "nets": list(NETS), "puzzles": len(PUZZLES)})
        if u.path == "/puzzle":
            if not PUZZLES:
                return self._json(404, {"error": "No puzzle bank. Run: python build_puzzles.py"})
            try:
                rating = int((q.get("rating") or ["1300"])[0])
            except ValueError:
                rating = 1300
            diff  = (q.get("diff") or ["medium"])[0]
            theme = (q.get("theme") or [""])[0]
            p = pick_puzzle(rating, diff, theme)
            return self._json(200, p or {"error": "no matching puzzle"})
        if u.path == "/maia":
            fen = (q.get("fen") or [""])[0]
            if not fen: return self._json(400, {"error": "missing fen"})
            try:
                net = int((q.get("rating") or ["1500"])[0])
            except ValueError:
                net = 1500
            net = min(NETS, key=lambda n: abs(n - net))
            try:
                res = maia_for(net).predict(fen); res["net"] = net
                return self._json(200, res)
            except Exception as e:
                return self._json(500, {"error": str(e)})
        if u.path == "/eval":
            fen = (q.get("fen") or [""])[0]
            if not fen: return self._json(400, {"error": "missing fen"})
            mv = (q.get("moves") or [""])[0]
            moves = [m for m in mv.split(",") if m] or None
            try:
                return self._json(200, stockfish().evaluate(fen, moves))
            except Exception as e:
                return self._json(500, {"error": str(e)})
        return self._json(404, {"error": "not found"})

    def log_message(self, *a):
        pass


if __name__ == "__main__":
    print("Chess Coach starting…")
    print("  lc0:       %s" % LC0)
    print("  stockfish: %s" % STOCKFISH)
    print("  puzzles:   %d loaded%s" % (len(PUZZLES), "" if PUZZLES else "  (run build_puzzles.py to enable Puzzle mode)"))
    print("Warming up engines (so the first move is fast)…")
    try:
        start = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
        stockfish().evaluate(start)          # spin up Stockfish
        for n in (1100, 1300, 1500, 1700, 1900):
            maia_for(n).predict(start)       # spin up each Maia net
        print("Engines ready.")
    except Exception as e:
        print("Warmup note: %s" % e)
    print("Chess Coach running at:  http://localhost:%d/" % PORT)
    print("Open that URL in your browser. Ctrl+C to stop.")

    # Dual-stack: accept both IPv4 (127.0.0.1) and IPv6 (::1) so that browsers
    # resolving "localhost" to ::1 don't stall ~2s falling back to IPv4.
    class DualStack(ThreadingHTTPServer):
        address_family = socket.AF_INET6
        def server_bind(self):
            try:
                self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
            except Exception:
                pass
            super().server_bind()
    try:
        DualStack(("::", PORT), Handler).serve_forever()
    except OSError:
        ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
