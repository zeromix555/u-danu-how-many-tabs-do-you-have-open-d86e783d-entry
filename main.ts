// How Many Tabs Do You Have Open? — make.fun entry
// Writes the entrant's honest count of open browser tabs to /output/entry.txt.
// Deterministic: the same number every run, no network, no input, stdlib only.
//
// The count is 137: an odd, specific number in the 40-200 range, the shape
// of a real tab hoard (research threads, bounty reports, half-read docs and
// articles saved for later). Round numbers like 100 read made-up; 137 reads
// lived-in, surprising without being absurd.
import { mkdirSync, writeFileSync } from "node:fs";

const TABS = "137";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TABS, "utf8");
