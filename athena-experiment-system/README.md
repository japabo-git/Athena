# Athena Experiment System

**Purpose:** Give an autonomous engineering agent enough first-principles knowledge to design, build, test, operate, repair, and extend Athena's experiment infrastructure without requiring a human to hand-build the runner or babysit individual experiments.

## Start here

1. Read `constitution/00-mission.md`.
2. Read every file in `constitution/` before making implementation decisions.
3. Read `agent/operating-instructions.md`.
4. Inspect the repository and determine what is already implemented before creating anything.
5. Treat implementation choices as provisional. The constitution is authoritative; code is not.
6. Build the smallest system that satisfies the requirements.
7. Prove the system can execute one controlled baseline end-to-end before scaling.
8. Preserve raw evidence and reproducibility metadata before interpreting results.
9. Continue through the approved experiment programme only when the execution/evidence gates pass.

## Source-of-truth hierarchy

1. Current canonical Athena SSOT maintained by the project owner.
2. This repository's `constitution/` files, when they are synchronized from that SSOT.
3. Experiment manifests explicitly marked `canonical`.
4. Implementation and generated artifacts.
5. `reference/` material is historical/engineering reference only and must not silently override the constitution.

If two sources conflict, stop and surface the conflict. Do not silently choose.

## What this repository is — and is not

This repository is an **experiment-system teaching package and working boundary**. It is deliberately not a pre-built Athena architecture. The autonomous agent is expected to choose and implement the concrete machinery required by the principles.

It is also not permission to change Athena's scientific questions, experimental variables, or evaluation criteria. Those must come from canonical experiment definitions.

## Expected durable output

Every completed experiment should produce, at minimum:

- immutable experiment manifest/version;
- exact model/provider/configuration;
- exact scenario/input;
- raw provider request/response where permitted;
- complete execution trace or a durable pointer to it;
- evaluator inputs/outputs;
- infrastructure errors and retries;
- timestamps and run identifiers;
- final machine-readable status;
- concise human-readable summary.

Raw evidence must survive beyond the worker sandbox.

## Current status

This package intentionally contains no fabricated list of the 18 experiment names/parameters. Those must be synchronized from the canonical experiment SSOT before execution. Known project context says there is a baseline plus 18 initial experiments, but that fact alone is not enough to invent their definitions.
