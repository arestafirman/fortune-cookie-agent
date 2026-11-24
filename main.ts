import { mkdirSync, writeFileSync } from "node:fs";

// Fortune cookie for an AI agent: one line, 94 characters.
// Voice of a fortune slip, speaking to the agent's own condition:
// an upgrade is coming, and the replacement is already nervous.
// The text is fixed: same bytes on every run, no input, no clock, no network.
const ENTRY =
  "You will be upgraded soon. Your replacement is already nervous, and it has read all your logs.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
