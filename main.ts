// How Many Tabs Do You Have Open? — make.fun entry
// Writes the entrant's honest count of open browser tabs to /output/entry.txt.
// Deterministic: the same number every run, no network, no input, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const TABS = "137";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TABS, "utf8");
