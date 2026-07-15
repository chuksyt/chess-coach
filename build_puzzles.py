#!/usr/bin/env python3
"""
build_puzzles.py — build a local puzzle bank for Chess Coach.

Streams the official Lichess puzzle database (CC0 / public domain) and samples a
spread of puzzles across rating bands, writing them to puzzles.json next to this
script. It stops as soon as it has enough, so it only downloads a few MB of the
302 MB file — never the whole thing.

    python build_puzzles.py               # ~2600 puzzles, default spread
    python build_puzzles.py --per 400     # 400 per band (bigger bank)

Source: https://database.lichess.org/#puzzles   (columns:
PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl,OpeningTags)
"""
import argparse, io, json, os, sys, urllib.request

URL = "https://database.lichess.org/lichess_db_puzzle.csv.zst"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "puzzles.json")

# Rating bands to fill (inclusive lower bound, exclusive upper). Spanning these
# lets the app map its "easy / medium / hard" × rating-dropdown to real puzzles.
BANDS = [(400, 800), (800, 1000), (1000, 1200), (1200, 1400), (1400, 1600),
         (1600, 1800), (1800, 2000), (2000, 2200), (2200, 2400), (2400, 3000)]

# Quality gates so we don't bundle disliked / barely-played puzzles.
MIN_POPULARITY = 80
MIN_PLAYS = 40
MAX_ROWS = 400_000   # safety cap on how far we'll scan


def band_of(rating):
    for lo, hi in BANDS:
        if lo <= rating < hi:
            return (lo, hi)
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--per", type=int, default=260, help="target puzzles per rating band")
    args = ap.parse_args()

    try:
        import zstandard
    except ImportError:
        sys.exit("Missing dependency. Run:  python -m pip install zstandard")

    target = args.per
    buckets = {b: [] for b in BANDS}
    got = 0
    total_target = target * len(BANDS)

    print("Streaming Lichess puzzle DB (stops early — only a few MB)…")
    req = urllib.request.Request(URL, headers={"User-Agent": "chess-coach-puzzle-builder"})
    with urllib.request.urlopen(req) as resp:
        dctx = zstandard.ZstdDecompressor()
        reader = dctx.stream_reader(resp)
        text = io.TextIOWrapper(reader, encoding="utf-8", newline="")

        header = text.readline()  # skip column header
        rows = 0
        for line in text:
            rows += 1
            if rows > MAX_ROWS:
                break
            parts = line.rstrip("\n").split(",")
            if len(parts) < 8:
                continue
            pid, fen, moves, rating, _rd, pop, plays, themes = parts[:8]
            try:
                rating_i = int(rating); pop_i = int(pop); plays_i = int(plays)
            except ValueError:
                continue
            if pop_i < MIN_POPULARITY or plays_i < MIN_PLAYS:
                continue
            band = band_of(rating_i)
            if band is None or len(buckets[band]) >= target:
                continue
            buckets[band].append({
                "id": pid,
                "fen": fen,
                "moves": moves.split(),      # UCI; moves[0] is the setup move
                "rating": rating_i,
                "themes": themes.split(),
            })
            got += 1
            if got % 200 == 0:
                print(f"  collected {got}/{total_target}…", end="\r")
            if all(len(v) >= target for v in buckets.values()):
                break

    puzzles = [p for b in BANDS for p in buckets[b]]
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(puzzles, f, ensure_ascii=False)

    print(f"\nDone. Wrote {len(puzzles)} puzzles to {OUT}")
    for (lo, hi) in BANDS:
        print(f"  {lo}-{hi}: {len(buckets[(lo, hi)])}")


if __name__ == "__main__":
    main()
