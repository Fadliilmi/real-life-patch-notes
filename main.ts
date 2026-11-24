import { mkdirSync, writeFileSync } from "node:fs";

// One-line patch note: the universal bug of walking into a room and
// forgetting why you went in, fixed with a dry engineering workaround.
const line =
  "v4.2.0: fixed a bug where walking into a room deleted the reason you came in. Workaround: stand in the doorway until your brain reboots.";

if (line.length < 1 || line.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${line.length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
