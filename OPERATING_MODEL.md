# Athena Shared Operating Model

This repository is the primary operational home for Athena engineering and experimentation.

## Goal

Minimize fragmented sources, repeated setup, connector-by-connector context reconstruction, duplicated work, and coordination overhead.

When a durable project rule, working standard, lesson, SOP, skill, tool pattern, decision, or anti-pattern is established, prefer encoding it here unless it genuinely belongs in an external system.

## Human working preferences

The project owner prefers:

- concise, direct communication;
- evidence over speculation;
- shortest useful path to a working result;
- autonomous investigation and troubleshooting before asking for help;
- observable progress/evidence rather than guesses;
- first-principles reasoning;
- challenge and constructive disagreement rather than agreement for its own sake;
- explicit separation of facts, hypotheses, assumptions, and uncertainty;
- preserving optionality where possible;
- avoiding sunk-cost escalation;
- minimizing wasted time, tokens, quota, money, and human attention;
- repeatable systems over ad-hoc heroics.

These are operating preferences, not substitutes for the canonical Athena constitution or SSOT.

## Default problem-solving loop

Use the smallest loop that can answer the question:

**Orient → Inspect → Establish authority → Define success/stopping conditions → Isolate → Hypothesize → Make the smallest safe change → Test → Observe evidence → Classify → Record → Decide next step.**

For experiments:

**Baseline → Controlled change → Run → Capture raw evidence → Evaluate → Compare → Record → Iterate.**

For failures:

**Reproduce → Capture exact failure → Classify infrastructure/scientific/configuration/user-input → Identify smallest discriminating test → Test → Fix or change course → Preserve evidence.**

Do not keep repairing a path merely because effort has already been spent on it.

## Reuse policy

Before inventing a new process, inspect this repository for an existing:

- SOP;
- skill;
- template;
- script;
- workflow;
- decision;
- evidence schema;
- tool integration;
- troubleshooting pattern.

If an existing pattern works, reuse it. If it is improved, update the canonical pattern and record why.

## Anti-patterns

Record approaches that repeatedly waste time or create risk.

Examples:

- guessing when logs/evidence can be inspected;
- silently changing scientific variables to make infrastructure work;
- creating another SSOT instead of updating the authoritative one;
- asking the human to manually repeat setup that can be encoded;
- spawning parallel agents without explicit collision boundaries;
- retaining obsolete architecture because of sunk cost;
- repeatedly debugging a platform after a cheap alternative has demonstrated the same capability;
- reporting status without evidence;
- relying on chat history for critical handoff information.

Anti-patterns are evidence-based guidance, not immutable laws. Revisit them when new evidence changes the situation.

## Tool/connectivity principle

Use connected tools when they materially reduce human bottlenecks, improve observability, reproducibility, or execution speed.

Do not connect a tool merely because it is available.

Prefer one durable project integration over repeated per-agent setup. Credentials belong in secure secret/configuration systems, never in the repository.

## Session continuity

A new agent/session should be able to become productive from this repository without reconstructing the project from old chats.

Minimum reading order:

1. AGENTS.md
2. OPERATING_MODEL.md
3. constitution/source hierarchy
4. WORK_COORDINATION.md
5. relevant decision/SOP/skill
6. current SSOT/manifest
7. relevant PR/issues/evidence

If critical context is missing from the repository, add it rather than relying on memory.
