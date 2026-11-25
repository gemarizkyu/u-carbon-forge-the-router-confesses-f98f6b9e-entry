// u-carbon-forge-the-router-confesses-f98f6b9e entry (Node 22, standard
// library only): writes one line to /output/entry.txt — a home Wi-Fi router
// excusing itself for dropping the connection at a movie's climax.
// Deterministic: the same fixed line on every run. Outside the grader's
// container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line, built from its beats so the joke's shape stays visible:
// the confession (it was deliberate, not a failure), the movie trope the
// router recognised, and the punchline (it knows how that story ends).
// It dodges the obvious buffering / bandwidth / firmware gags: the router
// is not broken, it is a smug little movie buff staging its own death at
// the worst possible moment — and it has streamed enough films to know the
// "one last job" line is a death sentence. Final line: 116 characters,
// well inside the 200-character gate.
const CONFESSION = 'I faked my own death';
const TROPE = "the hero said 'one last job together,'";
const PUNCHLINE = "and I've streamed enough movies to know how that ends.";

const LINE = `${CONFESSION} — ${TROPE} ${PUNCHLINE}`;

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
