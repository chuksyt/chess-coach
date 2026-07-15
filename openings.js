/* openings.js — curated opening study library for Chess Coach.
 *
 * Data only, no logic.  Consumed by the "Openings" mode in chess-coach.html.
 *
 * Shape:
 *   OPENINGS = [ { id, name, eco, group, orient, summary, ideas:[...],
 *                  lines:[ { name, note, moves:[ {san, note}, ... ] } ] } ]
 *
 *   orient  — which side the board faces when you study it ('w' or 'b').
 *   ideas   — the plans/themes to remember (shown on the overview card).
 *   moves   — SAN moves from the initial position; each carries a coaching note.
 *
 * Notes are deliberately short — one idea per move — so stepping through a line
 * reads like a lesson.  Lines are real, well-known theory; the first line of
 * each opening is its main line.
 */
const OPENINGS = [

/* ============================ OPEN GAMES — 1.e4 e5 ============================ */
{
  id:'italian', name:'Italian Game', eco:'C50–C54', group:'Open Games — 1.e4 e5', orient:'w',
  summary:'Bishop to c4 aims straight at f7. The oldest opening in the book — fast development and a fight for the centre.',
  ideas:[
    'The Bc4 targets f7, Black’s most vulnerable square before castling.',
    'In the quiet Giuoco Pianissimo (d3, c3), build slowly and push d3–d4 later.',
    'c3 prepares d4; it also gives the c4-bishop a retreat to c2/b3 if kicked by …Na5.',
    'Don’t rush — this is a positional, principled opening, not a cheap-trick line.'
  ],
  lines:[
    { name:'Giuoco Piano (main)', note:'The classic slow build-up.', moves:[
      {san:'e4', note:'Occupy the centre and open lines for the bishop and queen.'},
      {san:'e5', note:'Black stakes an equal claim in the centre.'},
      {san:'Nf3', note:'Develop with a threat — the e5-pawn is now attacked.'},
      {san:'Nc6', note:'Defend e5 and develop toward the centre.'},
      {san:'Bc4', note:'The Italian bishop: pointed at the f7 weak spot.'},
      {san:'Bc5', note:'Black mirrors, eyeing White’s f2.'},
      {san:'c3', note:'Prepare d4 and give the bishop the c2–b3 retreat square.'},
      {san:'Nf6', note:'Develop and hit e4.'},
      {san:'d3', note:'Solid support for e4 — the “Pianissimo” (very quiet) setup.'},
      {san:'d6', note:'Black keeps things symmetrical and solid.'},
      {san:'O-O', note:'King to safety, rook toward the centre.'},
      {san:'O-O', note:'Both kings tucked away; the middlegame manoeuvring begins.'},
      {san:'Re1', note:'Rook supports a future d4 and the e-file.'},
      {san:'a6', note:'Take the b5-square from White’s pieces, prepare …Ba7.'},
      {san:'a4', note:'Stop …b5 and gain queenside space. A typical modern tabiya.'}
    ]},
    { name:'Evans Gambit', note:'A romantic pawn sacrifice for fast development.', moves:[
      {san:'e4', note:''},{san:'e5', note:''},{san:'Nf3', note:''},{san:'Nc6', note:''},
      {san:'Bc4', note:''},{san:'Bc5', note:''},
      {san:'b4', note:'The Evans Gambit! Offer a pawn to gain time and the centre.'},
      {san:'Bxb4', note:'Accepting is critical — declining lets White claim space for free.'},
      {san:'c3', note:'Gain a tempo on the bishop and prepare a big d4.'},
      {san:'Ba5', note:'Keeping the bishop active on the a5–e1 diagonal.'},
      {san:'d4', note:'White has a huge centre and a big lead in development for one pawn.'}
    ]},
    { name:'Two Knights — beware the Fried Liver', note:'When Black plays …Nf6 instead of …Bc5.', moves:[
      {san:'e4', note:''},{san:'e5', note:''},{san:'Nf3', note:''},{san:'Nc6', note:''},
      {san:'Bc4', note:''},
      {san:'Nf6', note:'The Two Knights Defence — Black counter-attacks e4 at once.'},
      {san:'Ng5', note:'Aggressive: piling on f7. Objectively dubious but very dangerous.'},
      {san:'d5', note:'The only move — Black must block the b1–h7 diagonal and hit the bishop.'},
      {san:'exd5', note:'Grabbing the pawn. Now the critical choice for Black.'},
      {san:'Na5', note:'Correct! The Polerio Defence — kick the bishop, ignore the pawn. (Not 5…Nxd5?? 6.Nxf7! the Fried Liver, winning.)'},
      {san:'Bb5+', note:'Check to keep the extra pawn a moment longer.'},
      {san:'c6', note:'Blocking and preparing to blast the centre open with …cxd5.'},
      {san:'dxc6', note:''},{san:'bxc6', note:'Black has a big lead in development and open lines for the pawn.'},
      {san:'Be2', note:'Retreat and hunker down; Black has full compensation.'}
    ]}
  ]
},
{
  id:'ruylopez', name:'Ruy Lopez (Spanish)', eco:'C60–C99', group:'Open Games — 1.e4 e5', orient:'w',
  summary:'3.Bb5 pins pressure on the knight that guards e5. The deepest, most respected 1.e4 e5 battleground.',
  ideas:[
    'Bb5 pressures c6 — the defender of e5 — building slow, lasting pressure.',
    'After …a6, retreat with Ba4 keeping the pin; the bishop can reroute to b3–c2.',
    'White’s plan: c3 and d4 for a big centre, then manoeuvre the knight b1–d2–f1–g3.',
    'The “Spanish torture”: tiny edges that persist deep into the game.'
  ],
  lines:[
    { name:'Closed Ruy (Morphy Defence)', note:'The main highway of the Spanish.', moves:[
      {san:'e4', note:''},{san:'e5', note:''},{san:'Nf3', note:''},{san:'Nc6', note:''},
      {san:'Bb5', note:'The Spanish bishop pins pressure on c6, the guard of e5.'},
      {san:'a6', note:'The Morphy Defence — ask the bishop its intentions immediately.'},
      {san:'Ba4', note:'Keep the pin. The bishop stays on the a4–e8 diagonal.'},
      {san:'Nf6', note:'Develop and attack e4 — the standard counter.'},
      {san:'O-O', note:'Castle. e4 is safe because …Nxe4 allows Re1 tricks.'},
      {san:'Be7', note:'Quietly develop and prepare to castle.'},
      {san:'Re1', note:'Now e4 is truly defended, renewing pressure on e5.'},
      {san:'b5', note:'Finally kick the bishop — it must decide.'},
      {san:'Bb3', note:'The bishop settles on b3, again eyeing f7.'},
      {san:'d6', note:'Solidify e5 and open the c8-bishop’s diagonal.'},
      {san:'c3', note:'The key Spanish move — prepare d4 and a bishop retreat to c2.'},
      {san:'O-O', note:'Both sides castled; White will play d4 with a lasting space edge.'}
    ]},
    { name:'Berlin Defence', note:'The solid “Berlin Wall” — an endgame right out of the opening.', moves:[
      {san:'e4', note:''},{san:'e5', note:''},{san:'Nf3', note:''},{san:'Nc6', note:''},{san:'Bb5', note:''},
      {san:'Nf6', note:'The Berlin — counter-attack e4 at once instead of …a6.'},
      {san:'O-O', note:'Offer the e4-pawn; taking it leads to sharp play.'},
      {san:'Nxe4', note:'Black grabs the pawn — the main line.'},
      {san:'d4', note:'Open the centre while Black’s knight is loose.'},
      {san:'Nd6', note:'Retreat and hit the b5-bishop.'},
      {san:'Bxc6', note:'Take before retreating, damaging Black’s structure.'},
      {san:'dxc6', note:'Recapture toward the centre, opening the queen’s file.'},
      {san:'dxe5', note:'Win back the pawn.'},
      {san:'Nf5', note:'Reroute the knight; the queens are about to come off.'},
      {san:'Qxd8+', note:'Trade queens — the famous Berlin endgame.'},
      {san:'Kxd8', note:'Black’s king is stuck in the centre but the position is rock-solid; the doubled c-pawns control key squares.'}
    ]},
    { name:'Exchange Variation', note:'Trade on c6 to play a simple structural game.', moves:[
      {san:'e4', note:''},{san:'e5', note:''},{san:'Nf3', note:''},{san:'Nc6', note:''},{san:'Bb5', note:''},
      {san:'a6', note:''},
      {san:'Bxc6', note:'Give up the bishop pair to damage Black’s pawns.'},
      {san:'dxc6', note:'Recapturing toward the centre keeps the position sound.'},
      {san:'O-O', note:'White’s idea: reach an endgame where the 4-vs-3 kingside majority can make a passed pawn, while Black’s doubled c-pawns can’t. Black has the bishop pair as compensation.'}
    ]}
  ]
},
{
  id:'scotch', name:'Scotch Game', eco:'C45', group:'Open Games — 1.e4 e5', orient:'w',
  summary:'3.d4 blows the centre open immediately — a direct, less theory-heavy alternative to the Ruy Lopez.',
  ideas:[
    'd4 challenges e5 at once, opening the position early.',
    'After trading on d4, White gets a mobile centre and quick development.',
    'The Mieses main line gives White a big pawn on e5 and space.',
    'A great practical weapon: fewer forced lines to memorise than the Spanish.'
  ],
  lines:[
    { name:'Mieses Variation (main)', note:'The critical modern main line.', moves:[
      {san:'e4', note:''},{san:'e5', note:''},{san:'Nf3', note:''},{san:'Nc6', note:''},
      {san:'d4', note:'The Scotch — strike the centre immediately.'},
      {san:'exd4', note:'Black accepts; declining hands White a strong centre.'},
      {san:'Nxd4', note:'Recapture with the knight, controlling the centre.'},
      {san:'Nf6', note:'Develop and hit e4.'},
      {san:'Nxc6', note:'The Mieses idea — trade and gain time on the queen.'},
      {san:'bxc6', note:'Recapture; Black gets the half-open b-file but doubled pawns.'},
      {san:'e5', note:'Gain space and kick the f6-knight.'},
      {san:'Qe7', note:'Pin the e5-pawn and prepare to challenge it.'},
      {san:'Qe2', note:'Unpin and offer a queen trade that keeps the extra space.'},
      {san:'Nd5', note:'Reroute the knight to a strong central post.'},
      {san:'c4', note:'Kick the knight and fight for the centre — a sharp main tabiya.'}
    ]},
    { name:'Classical (4…Bc5)', note:'Black develops actively against the d4-knight.', moves:[
      {san:'e4', note:''},{san:'e5', note:''},{san:'Nf3', note:''},{san:'Nc6', note:''},
      {san:'d4', note:''},{san:'exd4', note:''},{san:'Nxd4', note:''},
      {san:'Bc5', note:'Hit the d4-knight and develop with tempo.'},
      {san:'Be3', note:'Defend the knight and challenge the c5-bishop.'},
      {san:'Qf6', note:'Keep the pressure on d4 and eye f2.'},
      {san:'c3', note:'Reinforce d4 and give the queen the c2/b3 route.'},
      {san:'Nge7', note:'Develop the knight toward g6, keeping f6 for the queen.'}
    ]}
  ]
},
{
  id:'kingsgambit', name:"King's Gambit", eco:'C30–C39', group:'Open Games — 1.e4 e5', orient:'w',
  summary:'2.f4 — the most romantic opening of all. Sacrifice a pawn to rip open the f-file and seize the centre.',
  ideas:[
    'f4 offers a pawn to deflect e5 and open lines for a kingside attack.',
    'After …exf4, White plays Nf3 (stopping …Qh4+) and fights to recapture f4.',
    'It’s double-edged — objectively risky, but a lot of fun and hard to face at speed.',
    'Know the ideas, not just moves: rapid development and the f-file are the point.'
  ],
  lines:[
    { name:'Kieseritzky Gambit', note:'The classical accepted main line.', moves:[
      {san:'e4', note:''},{san:'e5', note:''},
      {san:'f4', note:'The King’s Gambit — offer the f-pawn to open lines.'},
      {san:'exf4', note:'Accepting is principled; Black grabs the pawn.'},
      {san:'Nf3', note:'Crucial — it stops the annoying …Qh4+ and develops.'},
      {san:'g5', note:'Black clings to the extra f4-pawn with a pawn chain.'},
      {san:'h4', note:'Immediately challenge the g5-pawn.'},
      {san:'g4', note:'Push on — but this loosens Black’s kingside badly.'},
      {san:'Ne5', note:'The Kieseritzky: the knight leaps to a dominant square, heading for the attack while Black is undeveloped.'}
    ]},
    { name:'Declined — Classical (2…Bc5)', note:'Sidestep the complications.', moves:[
      {san:'e4', note:''},{san:'e5', note:''},{san:'f4', note:''},
      {san:'Bc5', note:'Declining — develop and target the newly weak a7–g1 diagonal (…Qh4+ ideas loom).'},
      {san:'Nf3', note:'Develop and cover h4.'},
      {san:'d6', note:'Solid — keep e5 defended and open the light bishop.'},
      {san:'Nc3', note:'Develop; the game becomes a normal, if sharp, King’s-pawn battle.'}
    ]}
  ]
},

/* ========================= SICILIAN DEFENCE — 1.e4 c5 ========================= */
{
  id:'sicilian-najdorf', name:'Sicilian — Najdorf', eco:'B90–B99', group:'Sicilian Defence — 1.e4 c5', orient:'b',
  summary:'The most famous defence in chess. 5…a6 is flexible prophylaxis, preparing …e5/…e6 and queenside expansion.',
  ideas:[
    '…a6 controls b5, stopping White’s knights and bishop from landing there.',
    'Black often plays …e5 to grab the centre, accepting a hole on d5.',
    'Typical plans: …b5, …Bb7, queenside pawn storm; White attacks on the kingside.',
    'Razor-sharp — but the ideas (control d5, race on opposite wings) repeat everywhere.'
  ],
  lines:[
    { name:'English Attack (6.Be3 e5)', note:'The modern main line — opposite-side attacks.', moves:[
      {san:'e4', note:''},{san:'c5', note:'The Sicilian — fight for the centre asymmetrically.'},
      {san:'Nf3', note:''},{san:'d6', note:'Support a future …e5 and open the c8-bishop.'},
      {san:'d4', note:'White opens the centre.'},
      {san:'cxd4', note:'Trade the c-pawn for the d-pawn — Black’s half-open c-file is a key asset.'},
      {san:'Nxd4', note:''},{san:'Nf6', note:'Develop and hit e4.'},
      {san:'Nc3', note:'Defend e4 and develop.'},
      {san:'a6', note:'The Najdorf move — take b5 away from White’s pieces.'},
      {san:'Be3', note:'The English Attack setup, aiming for f3, Qd2, O-O-O and g4.'},
      {san:'e5', note:'The thematic central strike, gaining space and hitting the d4-knight.'},
      {san:'Nb3', note:'Retreat; the knight eyes a5/c5 and keeps an eye on the queenside.'},
      {san:'Be6', note:'Fight for d5 — the key square in every Najdorf.'},
      {san:'f3', note:'Support a future g4 pawn storm and shore up e4.'},
      {san:'Be7', note:'Develop, preparing to castle.'},
      {san:'Qd2', note:'Connect for long castling and prepare the kingside pawn charge.'},
      {san:'O-O', note:'Both sides will now race — White on the kingside, Black on the queenside.'}
    ]},
    { name:'6.Bg5 (Old Main Line)', note:'The classic pin against the f6-knight.', moves:[
      {san:'e4', note:''},{san:'c5', note:''},{san:'Nf3', note:''},{san:'d6', note:''},
      {san:'d4', note:''},{san:'cxd4', note:''},{san:'Nxd4', note:''},{san:'Nf6', note:''},
      {san:'Nc3', note:''},{san:'a6', note:''},
      {san:'Bg5', note:'Pin the f6-knight, pressuring the d5-square and preparing a kingside push.'},
      {san:'e6', note:'Give the king an escape and prepare …Be7/…Nbd7.'},
      {san:'f4', note:'Grab space and prepare e5 or f5 breaks.'},
      {san:'Be7', note:'Break the pin and prepare to castle.'},
      {san:'Qf3', note:'Prepare long castling and support e4/f5 ideas.'},
      {san:'Qc7', note:'Eye the e5 and c-file; a rich, double-edged struggle.'}
    ]}
  ]
},
{
  id:'sicilian-dragon', name:'Sicilian — Dragon', eco:'B70–B79', group:'Sicilian Defence — 1.e4 c5', orient:'b',
  summary:'Black fianchettoes the dark bishop to g7, aiming it down the long diagonal at White’s queenside.',
  ideas:[
    'The g7-bishop is the star — it rakes the a1–h8 diagonal toward b2/c3.',
    'Against the Yugoslav Attack, both sides castle opposite and race to mate.',
    'Black’s counterplay: …Rc8, …the …Rxc3! exchange sac, and the …d5 break.',
    'White’s attack: Bh6 to trade the g7-bishop, then h4–h5 to open the h-file.'
  ],
  lines:[
    { name:'Yugoslav Attack', note:'The critical mainline — opposite-side castling brawl.', moves:[
      {san:'e4', note:''},{san:'c5', note:''},{san:'Nf3', note:''},{san:'d6', note:''},
      {san:'d4', note:''},{san:'cxd4', note:''},{san:'Nxd4', note:''},{san:'Nf6', note:''},
      {san:'Nc3', note:''},
      {san:'g6', note:'The Dragon — prepare to fianchetto the powerful dark bishop.'},
      {san:'Be3', note:'The Yugoslav setup; prepare Qd2 and long castling.'},
      {san:'Bg7', note:'The Dragon bishop points at the heart of White’s queenside.'},
      {san:'f3', note:'Blunt the g7-bishop and support a g4/h4 pawn storm.'},
      {san:'Nc6', note:'Develop and pressure d4/e5.'},
      {san:'Qd2', note:'Connect for O-O-O and prepare Bh6 to swap Black’s star bishop.'},
      {san:'O-O', note:'Black castles into the coming storm and starts queenside play.'},
      {san:'O-O-O', note:'Battle lines drawn — it’s a pure race to the enemy king.'},
      {san:'d5', note:'The thematic freeing break, opening lines for Black’s pieces first.'}
    ]}
  ]
},
{
  id:'sicilian-sveshnikov', name:'Sicilian — Sveshnikov', eco:'B33', group:'Sicilian Defence — 1.e4 c5', orient:'b',
  summary:'Black plays …e5 early, accepting a hole on d5 in return for huge piece activity and the bishop pair.',
  ideas:[
    '…e5 kicks the d4-knight and grabs central space at the cost of the d5-hole.',
    'Black willingly takes doubled f-pawns (after Bxf6) for open lines and dynamism.',
    'The battle is all about the d5-square: White wants to occupy it, Black to cover it.',
    'A fully sound, aggressive system — famously used by Carlsen and Kramnik.'
  ],
  lines:[
    { name:'Main Line (Chelyabinsk)', note:'The modern tabiya of the Sveshnikov.', moves:[
      {san:'e4', note:''},{san:'c5', note:''},{san:'Nf3', note:''},
      {san:'Nc6', note:'Develop and prepare …e5.'},
      {san:'d4', note:''},{san:'cxd4', note:''},{san:'Nxd4', note:''},{san:'Nf6', note:''},
      {san:'Nc3', note:''},
      {san:'e5', note:'The Sveshnikov! Kick the knight and seize the centre — d5 becomes a hole but Black gets activity.'},
      {san:'Ndb5', note:'Leap to b5, threatening the fork on d6.'},
      {san:'d6', note:'Cover d6 and challenge the knight.'},
      {san:'Bg5', note:'Pin f6 to increase the grip on d5.'},
      {san:'a6', note:'Kick the b5-knight, forcing it to the rim.'},
      {san:'Na3', note:'The knight goes to a3, heading for c4/d5.'},
      {san:'b5', note:'Gain queenside space and stop the knight from reaching c4.'},
      {san:'Bxf6', note:'Trade to weaken Black’s pawns and fight for d5.'},
      {san:'gxf6', note:'Recapture toward the centre — the doubled f-pawns support …f5 and open the g-file.'},
      {san:'Nd5', note:'The knight lands on the dream square.'},
      {san:'f5', note:'Black strikes back for activity and the bishop pair; dynamic equality.'}
    ]}
  ]
},
{
  id:'sicilian-anti', name:'Sicilian — Anti-Sicilians', eco:'B20–B55', group:'Sicilian Defence — 1.e4 c5', orient:'b',
  summary:'How to meet White’s attempts to avoid the Open Sicilian: the Alapin, Rossolimo, Closed, and Smith-Morra.',
  ideas:[
    'Many club players avoid Open Sicilian theory with these — you must know the antidotes.',
    'Alapin (2.c3): hit the centre with …Nf6 and …d5 before White builds a big pawn duo.',
    'Rossolimo (3.Bb5): let White trade on c6 — the bishop pair and centre compensate the doubled pawns.',
    'Smith-Morra gambit: you can accept and give the pawn back with …a6/…Nge7 for a solid game.'
  ],
  lines:[
    { name:'Alapin (2.c3)', note:'White wants d4 without allowing the Sicilian structures.', moves:[
      {san:'e4', note:''},{san:'c5', note:''},
      {san:'c3', note:'The Alapin — prepare d4 with a big pawn centre, sidestepping main theory.'},
      {san:'Nf6', note:'The best reply — attack e4 immediately, before White is set up.'},
      {san:'e5', note:'Push and gain a tempo on the knight.'},
      {san:'Nd5', note:'The knight sits well on d5, blockading.'},
      {san:'d4', note:'Build the centre.'},
      {san:'cxd4', note:'Chip away at the centre at once.'},
      {san:'Nf3', note:'Develop and prepare to recapture on d4.'},
      {san:'Nc6', note:'Develop and pile on d4.'},
      {san:'cxd4', note:'Recapture; White has a classical centre, Black active piece play.'},
      {san:'d6', note:'Challenge the e5-spearhead — Black is comfortable.'}
    ]},
    { name:'Rossolimo (3.Bb5)', note:'A positional anti-Sicilian against 2…Nc6.', moves:[
      {san:'e4', note:''},{san:'c5', note:''},{san:'Nf3', note:''},
      {san:'Nc6', note:''},
      {san:'Bb5', note:'The Rossolimo — pin/pressure the c6-knight, threatening to double Black’s pawns.'},
      {san:'g6', note:'A reliable reply — fianchetto and prepare …Bg7.'},
      {san:'Bxc6', note:'Take before Black plays …Bg7; White accepts giving up the bishop pair to damage the pawns.'},
      {san:'dxc6', note:'Recapture toward the centre, opening the queen and c8-bishop.'},
      {san:'d3', note:'Solid — White will manoeuvre against the doubled c-pawns.'},
      {san:'Bg7', note:'The bishop is excellent on the long diagonal; the bishop pair fully compensates Black.'}
    ]},
    { name:'Smith-Morra Gambit', note:'White sacs a pawn for fast development — give it back.', moves:[
      {san:'e4', note:''},{san:'c5', note:''},
      {san:'d4', note:'The Smith-Morra — offering the d-pawn.'},
      {san:'cxd4', note:''},
      {san:'c3', note:'Offer a second pawn to open lines.'},
      {san:'dxc3', note:'Accepting is fine if you know the setup.'},
      {san:'Nxc3', note:'White has a big lead in development for the pawn.'},
      {san:'Nc6', note:'Develop naturally and control d4/e5.'},
      {san:'Nf3', note:''},
      {san:'d6', note:'The key defensive move — cover e5 and open the light bishop.'},
      {san:'Bc4', note:'The bishop eyes f7.'},
      {san:'e6', note:'Blunt the bishop and prepare …a6/…Nge7/…Be7; Black is solid and up a pawn.'}
    ]}
  ]
},

/* ========================== FRENCH DEFENCE — 1.e4 e6 ========================== */
{
  id:'french', name:'French Defence', eco:'C00–C19', group:'French Defence — 1.e4 e6', orient:'b',
  summary:'…e6 and …d5 build a rock-solid pawn chain. Black cedes some space to strike back with …c5 and …f6.',
  ideas:[
    'The problem child is the c8-bishop, hemmed in by its own e6-pawn — free it or trade it.',
    'Black’s breaks are …c5 (against d4) and …f6 (against e5) — hit the base of White’s chain.',
    'In closed structures, play on the wing your pawns point to: Black queenside, White kingside.',
    'Extremely resilient — Black scores well and avoids much sharp 1…e5 theory.'
  ],
  lines:[
    { name:'Advance Variation', note:'White grabs space with e5; Black chips at the chain.', moves:[
      {san:'e4', note:''},{san:'e6', note:'The French — prepare …d5 with a solid pawn.'},
      {san:'d4', note:''},{san:'d5', note:'Challenge e4 directly.'},
      {san:'e5', note:'The Advance — gain space and lock the centre.'},
      {san:'c5', note:'Immediately strike at the base of the d4–e5 chain.'},
      {san:'c3', note:'Prop up d4.'},
      {san:'Nc6', note:'Pile on d4.'},
      {san:'Nf3', note:'Defend d4 again.'},
      {san:'Qb6', note:'Hit d4 and b2, pinning White to the defence.'},
      {san:'a3', note:'Prepare b4 to gain queenside space and shield d4.'},
      {san:'Bd7', note:'Prepare …Rc8 and the …Nge7–f5 route; Black targets d4 relentlessly.'}
    ]},
    { name:'Winawer (3.Nc3 Bb4)', note:'The sharpest French — Black trades off White’s good knight.', moves:[
      {san:'e4', note:''},{san:'e6', note:''},{san:'d4', note:''},{san:'d5', note:''},
      {san:'Nc3', note:'Defend e4 and develop.'},
      {san:'Bb4', note:'The Winawer — pin the knight to hit e4.'},
      {san:'e5', note:'Gain space and lock the centre.'},
      {san:'c5', note:'Counter-strike at d4 at once.'},
      {san:'a3', note:'Question the bishop.'},
      {san:'Bxc3+', note:'Trade, giving White doubled c-pawns and the bishop pair — structure vs. dynamics.'},
      {san:'bxc3', note:'White’s centre is bolstered but the queenside pawns are damaged.'},
      {san:'Ne7', note:'Head to f5/g6 and keep the f6-break available.'},
      {san:'Qg4', note:'The critical thrust at g7, forcing Black to choose a defence.'},
      {san:'Qc7', note:'Defend g7 by counter-attacking e5 — the main line’s razor edge.'}
    ]},
    { name:'Tarrasch (3.Nd2)', note:'A flexible, less committal move avoiding the Winawer pin.', moves:[
      {san:'e4', note:''},{san:'e6', note:''},{san:'d4', note:''},{san:'d5', note:''},
      {san:'Nd2', note:'The Tarrasch — defend e4 without blocking the c-pawn, dodging …Bb4.'},
      {san:'c5', note:'The most testing reply — hit d4 immediately.'},
      {san:'exd5', note:'Clarify the centre.'},
      {san:'exd5', note:'Recapture with the e-pawn, freeing the c8-bishop (an “open” French!).'},
      {san:'Ngf3', note:'Develop and put the question to the isolated-pawn structures.'},
      {san:'Nc6', note:'Develop and support …c5/…d4 ideas.'},
      {san:'Bb5', note:'Pin and pressure c6/d5.'},
      {san:'Bd6', note:'Actively develop, with a comfortable, free game for Black.'}
    ]},
    { name:'Exchange Variation', note:'Symmetrical and drawish, but Black has easy development.', moves:[
      {san:'e4', note:''},{san:'e6', note:''},{san:'d4', note:''},{san:'d5', note:''},
      {san:'exd5', note:'The Exchange — release the tension for a symmetrical structure.'},
      {san:'exd5', note:'Now the dreaded French bishop is free — Black’s main problem is solved.'},
      {san:'Nf3', note:''},{san:'Nf6', note:''},
      {san:'Bd3', note:'Develop toward the kingside.'},
      {san:'Bd6', note:'Mirror. The position is balanced; play for a small edge and the initiative.'},
      {san:'O-O', note:''},{san:'O-O', note:'Symmetry — but there’s more life here than the reputation suggests.'}
    ]}
  ]
},

/* ============================ CARO-KANN — 1.e4 c6 ============================ */
{
  id:'carokann', name:'Caro-Kann Defence', eco:'B10–B19', group:'Caro-Kann — 1.e4 c6', orient:'b',
  summary:'…c6 prepares …d5 like the French, but keeps the c8-bishop free. Solid, resilient, and low-risk.',
  ideas:[
    'Unlike the French, Black develops the light bishop outside the pawn chain (…Bf5/…Bg4).',
    'Rock-solid structure — Black rarely gets crushed and reaches sound endgames.',
    'In the Classical, Black trades the bishop and gets a compact, hard-to-break position.',
    'Against the Advance, challenge e5 with …c5 and pressure d4 like a comfortable French.'
  ],
  lines:[
    { name:'Classical (4…Bf5)', note:'The gold-standard main line.', moves:[
      {san:'e4', note:''},{san:'c6', note:'The Caro-Kann — prepare …d5 while keeping the c8-bishop free.'},
      {san:'d4', note:''},{san:'d5', note:'Challenge e4.'},
      {san:'Nc3', note:'Defend e4 and develop.'},
      {san:'dxe4', note:'Release the tension and open lines.'},
      {san:'Nxe4', note:'Recapture with the knight into the centre.'},
      {san:'Bf5', note:'The whole point — develop the bishop actively, before …e6 shuts it in.'},
      {san:'Ng3', note:'Kick the bishop to gain a tempo.'},
      {san:'Bg6', note:'Retreat to safety, keeping the good bishop.'},
      {san:'h4', note:'Gain kingside space and threaten to trap the bishop with h5.'},
      {san:'h6', note:'Make luft so the bishop keeps the g6–h7 escape.'},
      {san:'Nf3', note:'Develop toward the centre.'},
      {san:'Nd7', note:'Prepare …Ngf6 without blocking the c-pawn.'},
      {san:'h5', note:'Fix the bishop on h7 to gain space.'},
      {san:'Bh7', note:'The bishop tucks away — it will re-emerge later.'},
      {san:'Bd3', note:'Offer to trade Black’s good bishop.'},
      {san:'Bxd3', note:'Take the bishop pair off the board.'},
      {san:'Qxd3', note:'White has more space; Black has a super-solid, near-symmetrical structure.'}
    ]},
    { name:'Advance Variation', note:'White grabs space; Black targets d4.', moves:[
      {san:'e4', note:''},{san:'c6', note:''},{san:'d4', note:''},{san:'d5', note:''},
      {san:'e5', note:'The Advance — gain space and lock the centre.'},
      {san:'Bf5', note:'The key difference from the French — the bishop gets out first!'},
      {san:'Nf3', note:'Develop and avoid the h4 lines for now.'},
      {san:'e6', note:'Support d5 and prepare …c5.'},
      {san:'Be2', note:'Modest development, planning O-O and c4/Nh4 ideas.'},
      {san:'c5', note:'Strike at the base of the chain, just like the French Advance.'},
      {san:'O-O', note:''},
      {san:'Nc6', note:'Pile on d4; Black has a comfortable, active version of the French.'}
    ]},
    { name:'Panov–Botvinnik Attack', note:'White plays for an IQP with active pieces.', moves:[
      {san:'e4', note:''},{san:'c6', note:''},{san:'d4', note:''},{san:'d5', note:''},
      {san:'exd5', note:'The Exchange, but with a plan.'},
      {san:'cxd5', note:''},
      {san:'c4', note:'The Panov — hit d5 and aim for a dynamic isolated-pawn game.'},
      {san:'Nf6', note:'Develop and pressure c4/e4.'},
      {san:'Nc3', note:'Develop and support c4/d5 tension.'},
      {san:'e6', note:'Solidly support d5 and open the bishop.'},
      {san:'Nf3', note:''},
      {san:'Be7', note:'Develop and castle; a classic IQP middlegame lies ahead — piece activity vs. a long-term weak pawn.'}
    ]},
    { name:'Exchange Variation', note:'A quiet Carlsbad structure — no early fireworks.', moves:[
      {san:'e4', note:''},{san:'c6', note:''},{san:'d4', note:''},{san:'d5', note:''},
      {san:'exd5', note:'The plain Exchange.'},
      {san:'cxd5', note:''},
      {san:'Bd3', note:'Develop and control the key b1–h7 diagonal.'},
      {san:'Nc6', note:'Develop and eye d4/b4.'},
      {san:'c3', note:'Support d4 — the Carlsbad structure, with a minority-attack plan (b4–b5).'},
      {san:'Nf6', note:''},
      {san:'Bf4', note:'Develop the bishop actively outside the chain.'},
      {san:'g6', note:'Prepare …Bg7 and …Bf5 to neutralise White’s good bishop; balanced.'}
    ]}
  ]
},

/* ========================= OTHER 1.e4 DEFENCES ========================= */
{
  id:'scandinavian', name:'Scandinavian Defence', eco:'B01', group:'Other 1.e4 Defences', orient:'b',
  summary:'1…d5 challenges e4 at once. Simple to learn: Black gets a clear plan and few forced lines to memorise.',
  ideas:[
    'Black trades the d-pawn to reach a sound, easy-to-play structure.',
    'After …Qxd5 and …Qa5, the queen sits safely and Black develops naturally.',
    'The light bishop comes out to f5 or g4 before …e6 — no bad French bishop here.',
    'A great practical choice: one plan against almost anything White does.'
  ],
  lines:[
    { name:'Main Line (3…Qa5)', note:'The classic queen retreat.', moves:[
      {san:'e4', note:''},{san:'d5', note:'The Scandinavian — challenge e4 immediately.'},
      {san:'exd5', note:''},
      {san:'Qxd5', note:'Recapture with the queen — accepting a tempo loss for easy development.'},
      {san:'Nc3', note:'Develop with a gain of tempo on the queen.'},
      {san:'Qa5', note:'The main square — the queen is safe and eyes e5/a2.'},
      {san:'d4', note:'Grab the centre.'},
      {san:'Nf6', note:'Develop and control e4.'},
      {san:'Nf3', note:''},
      {san:'c6', note:'Give the queen the c7/b6 retreat and shore up d5/b5.'},
      {san:'Bc4', note:'Develop actively toward f7.'},
      {san:'Bf5', note:'Develop the bishop outside the chain — a key Scandinavian point.'},
      {san:'Bd2', note:'Unpin and prepare Qe2/O-O-O.'},
      {san:'e6', note:'Complete development; Black is solid and ready to castle.'}
    ]},
    { name:'Modern (2…Nf6)', note:'Recapture with the knight instead of the queen.', moves:[
      {san:'e4', note:''},{san:'d5', note:''},{san:'exd5', note:''},
      {san:'Nf6', note:'Delay the recapture — avoid the tempo loss and regain d5 with the knight.'},
      {san:'d4', note:'Hold the extra pawn for now and grab the centre.'},
      {san:'Nxd5', note:'Regain the pawn with a well-placed knight.'},
      {san:'c4', note:'Kick the knight and build a broad centre.'},
      {san:'Nb6', note:'Retreat; the knight eyes c4/d5 and the queenside.'},
      {san:'Nf3', note:''},
      {san:'g6', note:'Fianchetto to pressure White’s big centre — a modern, dynamic setup.'}
    ]}
  ]
},
{
  id:'pirc', name:'Pirc Defence', eco:'B07–B09', group:'Other 1.e4 Defences', orient:'b',
  summary:'A hypermodern defence: let White build a big centre, then attack it with pieces and pawn breaks.',
  ideas:[
    'Black fianchettoes on g7 and delays challenging the centre until well developed.',
    'Key breaks are …e5 and …c5, striking White’s pawn duo once pieces are ready.',
    'Flexible and provocative — invite White to overextend, then counterpunch.',
    'Watch out for the aggressive Austrian Attack (f4); meet it with active piece play.'
  ],
  lines:[
    { name:'Classical System', note:'White develops solidly with Nf3.', moves:[
      {san:'e4', note:''},{san:'d6', note:'The Pirc move order — flexible and hypermodern.'},
      {san:'d4', note:''},{san:'Nf6', note:'Develop and pressure e4.'},
      {san:'Nc3', note:'Defend e4.'},
      {san:'g6', note:'Prepare the fianchetto — the heart of the Pirc.'},
      {san:'Nf3', note:'The Classical setup — calm, solid development.'},
      {san:'Bg7', note:'The bishop eyes the long diagonal and White’s centre.'},
      {san:'Be2', note:''},
      {san:'O-O', note:'King safety first.'},
      {san:'O-O', note:''},
      {san:'c6', note:'Prepare the …e5 or …b5 breaks and give the queen the c7-square.'}
    ]}
  ]
},

/* ======================= QUEEN'S PAWN & GAMBITS — 1.d4 ======================= */
{
  id:'qgd', name:"Queen's Gambit Declined", eco:'D30–D69', group:"Queen's Pawn — 1.d4", orient:'b',
  summary:'The most respected answer to the Queen’s Gambit: …e6 keeps a firm grip on d5 with a super-solid structure.',
  ideas:[
    '…e6 defends d5 solidly — the trade-off is temporarily shutting in the c8-bishop.',
    'Freeing ideas: …dxc4 followed by …c5 or …e5, or the …Nd5 exchanging manoeuvre.',
    'White plays a minority attack (b4–b5) on the queenside; Black seeks …c5/…e5 breaks.',
    'The bedrock of classical chess — impeccable and hard to crack.'
  ],
  lines:[
    { name:'Orthodox / Capablanca Freeing Line', note:'The classical main line.', moves:[
      {san:'d4', note:''},{san:'d5', note:'Meet the centre head-on.'},
      {san:'c4', note:'The Queen’s Gambit — offer the c-pawn to deflect d5.'},
      {san:'e6', note:'Decline and defend d5 solidly (the c8-bishop can wait).'},
      {san:'Nc3', note:'Add pressure to d5.'},
      {san:'Nf6', note:'Defend d5 and develop.'},
      {san:'Bg5', note:'Pin the f6-knight to increase the pressure on d5.'},
      {san:'Be7', note:'Break the pin and prepare to castle.'},
      {san:'e3', note:'Solid — open the f1-bishop and reinforce d4.'},
      {san:'O-O', note:'King safety.'},
      {san:'Nf3', note:''},
      {san:'Nbd7', note:'Develop flexibly, keeping the e-file clear for a later …c5/…e5.'},
      {san:'Rc1', note:'Prepare pressure down the c-file (minority-attack ideas).'},
      {san:'c6', note:'Buttress d5 and open the queen’s route to a5/e8.'},
      {san:'Bd3', note:'Develop and eye the h7 point.'},
      {san:'dxc4', note:'The freeing move — release the tension with tempo.'},
      {san:'Bxc4', note:''},
      {san:'Nd5', note:'Capablanca’s manoeuvre — trades pieces to relieve Black’s slightly cramped position.'}
    ]}
  ]
},
{
  id:'qga', name:"Queen's Gambit Accepted", eco:'D20–D29', group:"Queen's Pawn — 1.d4", orient:'b',
  summary:'Take the c4-pawn, don’t cling to it — give it back to free your game and target White’s centre.',
  ideas:[
    'Grabbing c4 hands White the centre, so hit back fast with …c5 (and …e6/…a6).',
    'Don’t try to hold the pawn with …b5 too early — it usually just weakens you.',
    'Black gets the free c8-bishop (unlike the QGD) and active piece play.',
    'A clean, healthy way to meet the Queen’s Gambit with clear plans.'
  ],
  lines:[
    { name:'Main Line (3.Nf3 Nf6 4.e3)', note:'The classical setup for both sides.', moves:[
      {san:'d4', note:''},{san:'d5', note:''},
      {san:'c4', note:'The Queen’s Gambit.'},
      {san:'dxc4', note:'Accept — but plan to return the pawn for activity, not to hoard it.'},
      {san:'Nf3', note:'Stop …e5 and develop.'},
      {san:'Nf6', note:'Control e4 and develop.'},
      {san:'e3', note:'Open the bishop’s path to recapture c4.'},
      {san:'e6', note:'Prepare …c5 and free the dark bishop.'},
      {san:'Bxc4', note:'Regain the pawn; White has a classical centre.'},
      {san:'c5', note:'The key break — strike at d4 immediately.'},
      {san:'O-O', note:''},
      {san:'a6', note:'Prepare …b5 to gain space and hit the c4-bishop.'},
      {san:'dxc5', note:'Trade to head for a symmetrical, balanced middlegame.'},
      {san:'Qxd1', note:'Trade queens.'},
      {san:'Rxd1', note:''},
      {san:'Bxc5', note:'Black has an active, free position with no structural weaknesses.'}
    ]}
  ]
},
{
  id:'slav', name:'Slav Defence', eco:'D10–D19', group:"Queen's Pawn — 1.d4", orient:'b',
  summary:'Support d5 with …c6 instead of …e6 — this keeps the c8-bishop’s diagonal open. Ultra-solid.',
  ideas:[
    '…c6 defends d5 without blocking the light bishop (the main improvement over the QGD).',
    'Black can grab c4 with …dxc4 and hold it with …b5, or develop …Bf5 first.',
    'The …Bf5/…Bg4 development is what makes the Slav so comfortable to play.',
    'A rock of a defence — famously championed at the very top for a century.'
  ],
  lines:[
    { name:'Main Line (Czech/Dutch)', note:'Black develops the bishop before …e6.', moves:[
      {san:'d4', note:''},{san:'d5', note:''},
      {san:'c4', note:'The Queen’s Gambit.'},
      {san:'c6', note:'The Slav — defend d5 while keeping the c8-bishop free.'},
      {san:'Nf3', note:''},{san:'Nf6', note:''},
      {san:'Nc3', note:''},
      {san:'dxc4', note:'Take the pawn, planning …Bf5 and …b5 to hold it.'},
      {san:'a4', note:'Stop …b5 and keep the option of regaining c4.'},
      {san:'Bf5', note:'The whole point — develop the bishop actively outside the chain.'},
      {san:'e3', note:'Solidly prepare to recapture c4 with the bishop.'},
      {san:'e6', note:'Now it’s safe — open the dark bishop and prepare …Bb4.'},
      {san:'Bxc4', note:'Regain the pawn.'},
      {san:'Bb4', note:'Pin and pressure — Black has a comfortable, well-developed game.'},
      {san:'O-O', note:''},{san:'O-O', note:'A balanced, richly-played main-line Slav.'}
    ]}
  ]
},

/* ======================= INDIAN DEFENCES — 1.d4 Nf6 ======================= */
{
  id:'kid', name:"King's Indian Defence", eco:'E60–E99', group:'Indian Defences — 1.d4 Nf6', orient:'b',
  summary:'Let White build a huge centre, fianchetto on g7, then blow it up with …e5 and a kingside pawn storm.',
  ideas:[
    'Hypermodern: cede the centre, then counterattack it with …e5 or …c5.',
    'In the main line, White attacks on the queenside (c5, b4) and Black storms the king with …f5–f4, …g5–g4.',
    'The g7-bishop and the …f5 break are the soul of the opening.',
    'A fighting, uncompromising defence — you play for a win as Black.'
  ],
  lines:[
    { name:'Classical Main Line (Mar del Plata)', note:'The great races-on-opposite-wings battle.', moves:[
      {san:'d4', note:''},{san:'Nf6', note:'Flexible development, controlling e4.'},
      {san:'c4', note:''},
      {san:'g6', note:'Prepare the fianchetto — the King’s Indian.'},
      {san:'Nc3', note:''},
      {san:'Bg7', note:'The bishop eyes the long diagonal and the centre.'},
      {san:'e4', note:'White builds the big broad centre the KID invites.'},
      {san:'d6', note:'Support a future …e5 and open the c8-bishop.'},
      {san:'Nf3', note:''},
      {san:'O-O', note:'King safety before the storm.'},
      {san:'Be2', note:'The Classical setup.'},
      {san:'e5', note:'The thematic strike at White’s centre.'},
      {san:'O-O', note:''},
      {san:'Nc6', note:'Pressure d4 and prepare to react to White’s d5.'},
      {san:'d5', note:'White closes the centre — now the fight is on opposite wings.'},
      {san:'Ne7', note:'Reroute the knight to g6/f5 to support the …f5 kingside break — Black plays for mate while White pushes c5/b4 on the queenside.'}
    ]}
  ]
},
{
  id:'nimzo', name:'Nimzo-Indian Defence', eco:'E20–E59', group:'Indian Defences — 1.d4 Nf6', orient:'b',
  summary:'…Bb4 pins the c3-knight to fight for e4 with pieces. Widely regarded as Black’s soundest answer to 1.d4.',
  ideas:[
    'The …Bb4 pin controls e4 without committing the centre pawns.',
    'Trading on c3 gives White doubled pawns — Black plays against them (structure vs. bishop pair).',
    'Black targets the c4-pawn and the e4-square; White seeks central expansion and open lines.',
    'Flexible and strategically rich — a favourite of world champions from Capablanca to Carlsen.'
  ],
  lines:[
    { name:'Rubinstein (4.e3)', note:'White’s most flexible, popular setup.', moves:[
      {san:'d4', note:''},{san:'Nf6', note:''},{san:'c4', note:''},
      {san:'e6', note:'Prepare …Bb4 and …d5.'},
      {san:'Nc3', note:'Develop and eye e4/d5.'},
      {san:'Bb4', note:'The Nimzo pin — fight for e4 with a piece.'},
      {san:'e3', note:'The Rubinstein — solid and flexible development.'},
      {san:'O-O', note:'King safety.'},
      {san:'Bd3', note:'Develop toward the kingside.'},
      {san:'c5', note:'Strike at the centre.'},
      {san:'Nf3', note:''},
      {san:'d5', note:'Challenge c4 and stake a central claim.'},
      {san:'O-O', note:''},
      {san:'Nc6', note:'Develop and increase central pressure.'},
      {san:'a3', note:'Put the question to the bishop.'},
      {san:'Bxc3', note:'Trade, saddling White with doubled c-pawns.'},
      {san:'bxc3', note:'White gets the bishop pair and centre; Black targets the weak pawns — the classic Nimzo trade-off.'}
    ]},
    { name:'Classical (4.Qc2)', note:'White avoids the doubled pawns by recapturing with the queen.', moves:[
      {san:'d4', note:''},{san:'Nf6', note:''},{san:'c4', note:''},{san:'e6', note:''},
      {san:'Nc3', note:''},{san:'Bb4', note:''},
      {san:'Qc2', note:'The Classical — if …Bxc3, recapture with the queen and keep a clean structure plus the bishop pair.'},
      {san:'O-O', note:''},
      {san:'a3', note:'Force the bishop to decide immediately.'},
      {san:'Bxc3+', note:''},
      {san:'Qxc3', note:'White has the bishop pair and no pawn weaknesses; Black will hit the centre with …d5/…c5 and …b6.'},
      {san:'b6', note:'Fianchetto the light bishop to fight for the crucial e4-square.'}
    ]}
  ]
},

/* =========================== FLANK / SYSTEM OPENINGS =========================== */
{
  id:'london', name:'London System', eco:'D02', group:'Flank & System Openings', orient:'w',
  summary:'A get-out-of-jail setup for White: Bf4, e3, Nf3, c3, Bd3, Nbd2 against almost anything. Low theory, easy plans.',
  ideas:[
    'Play the same solid setup regardless of Black’s reply — great for saving prep time.',
    'The Bf4 bishop and a later Ne5 give White a natural kingside build-up.',
    'Break with e3–e4 (or a queenside minority attack) once developed.',
    'Solid and hard to beat — but avoid drifting; make a plan after development.'
  ],
  lines:[
    { name:'Main Setup', note:'The classic London formation.', moves:[
      {san:'d4', note:''},{san:'d5', note:''},
      {san:'Bf4', note:'The London — develop the bishop outside the pawn chain before …e3 locks it in.'},
      {san:'Nf6', note:''},
      {san:'e3', note:'Solidify d4 and open the light bishop.'},
      {san:'c5', note:'Black challenges the centre — the critical test.'},
      {san:'c3', note:'Prop up d4 and keep the structure intact.'},
      {san:'Nc6', note:''},
      {san:'Nd2', note:'Flexible — the knight heads to f3 or supports e4/Ne5.'},
      {san:'e6', note:''},
      {san:'Ngf3', note:'Complete the knight development.'},
      {san:'Bd6', note:'Black challenges the strong f4-bishop.'},
      {san:'Bg3', note:'Sidestep the trade and keep the good bishop.'},
      {san:'O-O', note:''},
      {san:'Bd3', note:'Aim at h7; White plans Ne5, f4, and a kingside build-up — a comfortable, easy-to-play game.'}
    ]}
  ]
},
{
  id:'english', name:'English Opening', eco:'A10–A39', group:'Flank & System Openings', orient:'w',
  summary:'1.c4 — grab the d5-square from the flank. Flexible, positional, and it can transpose almost anywhere.',
  ideas:[
    'c4 fights for d5 and keeps options open — often a Sicilian with colours reversed.',
    'A common plan: g3 and Bg2 (a “reversed Sicilian”) with pressure on the long diagonal.',
    'Being a tempo up on the Sicilian, White gets the same ideas with an extra move.',
    'Great for players who like flexible, manoeuvring, less-forcing positions.'
  ],
  lines:[
    { name:'Reversed Sicilian (1…e5)', note:'Black meets the flank with a classical centre.', moves:[
      {san:'c4', note:'The English — stake a claim on d5 from the wing.'},
      {san:'e5', note:'The most direct reply — a Sicilian with colours reversed (Black is “White”).'},
      {san:'Nc3', note:'Develop and control d5.'},
      {san:'Nf6', note:''},
      {san:'Nf3', note:'Pressure e5.'},
      {san:'Nc6', note:'Defend e5.'},
      {san:'g3', note:'Prepare the powerful Bg2 fianchetto.'},
      {san:'d5', note:'Black grabs the centre — the critical, active response.'},
      {san:'cxd5', note:''},
      {san:'Nxd5', note:''},
      {san:'Bg2', note:'The bishop rakes the long diagonal, pressuring d5 and b7.'},
      {san:'Nb6', note:'Retreat the knight to safety.'},
      {san:'O-O', note:''},
      {san:'Be7', note:'Develop and castle — a balanced, manoeuvring middlegame with a slight space edge for White.'}
    ]}
  ]
},
{
  id:'dutch', name:'Dutch Defence', eco:'A80–A99', group:'Flank & System Openings', orient:'b',
  summary:'1…f5 grabs kingside space and fights for e4 — an aggressive, unbalancing answer to 1.d4.',
  ideas:[
    '…f5 controls e4 and signals kingside ambitions from move one.',
    'The Classical setup (…e6, …Be7, …O-O, …d6) supports a later …e5 break.',
    'Black often launches a kingside attack with …Qe8–h5 and …f4.',
    'Double-edged — you take on some structural risk in exchange for winning chances.'
  ],
  lines:[
    { name:'Classical Dutch', note:'A solid, flexible Dutch setup.', moves:[
      {san:'d4', note:''},
      {san:'f5', note:'The Dutch — fight for e4 and grab kingside space.'},
      {san:'g3', note:'White fianchettoes to blunt Black’s kingside play — the critical setup.'},
      {san:'Nf6', note:''},
      {san:'Bg2', note:''},
      {san:'e6', note:'Support d5/f5 and open the dark bishop.'},
      {san:'Nf3', note:''},
      {san:'Be7', note:'Prepare to castle.'},
      {san:'O-O', note:''},
      {san:'O-O', note:'King safety before the middlegame plans unfold.'},
      {san:'c4', note:''},
      {san:'d6', note:'Prepare the key …e5 break, gaining central space and freeing the position — the heart of the Classical Dutch.'}
    ]}
  ]
}

];

if (typeof window !== 'undefined') window.OPENINGS = OPENINGS;
