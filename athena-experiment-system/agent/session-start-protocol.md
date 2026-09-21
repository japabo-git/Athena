# Session Start Protocol

Use this at the beginning of every Athena engineering or experiment session.

## 1. Establish identity

Record:

- agent/session name;
- current UTC timestamp;
- branch;
- intended workstream;
- task/issue/PR if one exists.

## 2. Establish authority

Read:

- repository AGENTS.md;
- athena-experiment-system/constitution/*;
- athena-experiment-system/agent/operating-instructions.md;
- WORK_COORDINATION.md;
- relevant current SSOT revision;
- relevant experiment manifest/version.

## 3. Establish current state

Inspect:

- recent commits;
- open PRs/issues relevant to the work;
- active coordination claims;
- tests/CI status;
- existing artifacts/evidence.

## 4. Establish collision boundary

Write down the files and decisions you intend to change.

If another active claim overlaps, coordinate before editing.

## 5. Establish stopping conditions

Before implementation, state:

- what success means;
- what evidence is required;
- what must not change;
- what conditions cause a stop or escalation.

## 6. Handoff

At the end, update the coordination ledger and leave a concise handoff containing:

- completed;
- not completed;
- evidence;
- changed files;
- decisions;
- blockers;
- exact next step.
