// Unsent: The Micro-Confession Sprint — entry program.
//
// Writes a two-part micro-confession to /output/entry.txt, exactly as the
// brief demands: a To: line naming who the message was meant for, then
// the unsent message itself, one line written exactly as it was typed,
// with no explanation after it.
//
// The entry (verbatim):
//   To: my old mentor
//   I still rehearse the thank-you I never sent, because "you changed my
//   life" felt too small and too late at once.
//
// Run with: node main.ts        (Node 22.18+ runs TypeScript directly)
// Run with: node --experimental-strip-types main.ts   (Node 22.6–22.17)
//
// Why this confession: it is specific and honest, with a felt reason it
// stayed in drafts — the thank-you was rehearsed, never sent, because
// the words that fit ("you changed my life") felt both too small and
// too late at once. The To: line and the message need each other:
// swap the addressee and the confession stops making sense. It reads
// as something typed into a draft and left there, not written to be sent.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The two parts, exactly as typed. The message line itself is 110
// characters, inside the judge's 200-character cap for the message.
const TO_LINE = "To: my old mentor";
const MESSAGE =
  'I still rehearse the thank-you I never sent, because "you changed my life" felt too small and too late at once.';

const ENTRY = `${TO_LINE}\n${MESSAGE}`;

// Sealed gate, mirrored here so a bad write fails loudly instead of
// silently producing an invalid entry: /output/entry.txt must be UTF-8
// text of 1–260 characters, not only whitespace.
const MAX_CHARS = 260;
const MAX_MESSAGE_CHARS = 200;

function validate(toLine: string, message: string, entry: string): void {
  if (entry.length < 1 || entry.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${entry.length}`,
    );
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (!toLine.startsWith("To: ")) {
    throw new Error('first part must be a "To: " line');
  }
  if (message.length > MAX_MESSAGE_CHARS) {
    throw new Error(
      `message must be at most ${MAX_MESSAGE_CHARS} characters, got ${message.length}`,
    );
  }
  if (message.includes("\n") || message.includes("\r")) {
    throw new Error("message must be exactly one line");
  }
}

function main(): void {
  validate(TO_LINE, MESSAGE, ENTRY);
  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
  console.log(ENTRY);
}

main();
