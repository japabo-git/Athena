# Athena Reusable Playbook

This is the index for repeatable methods that have proved useful.

## Canonical operating workflow
Repository-wide agent operation is defined once in `AGENTS.md` → `AGENT_OPERATIONS.md`.

Specialized procedures should be loaded only when their task requires them.

## Process
**Sync → Orient → Establish authority → Check ownership → Define done → Execute → Verify → Record → Publish → Reassess.**

## When a pattern proves useful
Promote it from chat into a reusable artifact:
- SOP for an operational process;
- skill for an agent capability;
- template for repeated documentation;
- workflow for automated checks;
- script/tool for deterministic repeated work;
- decision record for a durable choice;
- anti-pattern for a failed/rejected approach.

## Evidence standard
Do not call a pattern "proven" because it worked once. Record context, attempts, observed result, limitations, suitable/unsuitable conditions and confidence.

## Current reusable artifacts
| Artifact | Purpose | Status |
|---|---|---|
| AGENT_OPERATIONS.md | canonical repository-wide agent workflow | active |
| AGENT_RUNTIME_PROTOCOL.md | compatibility route to canonical workflow | compatibility |
| WORK_COORDINATION.md | live collision/handoff control | active |
| EVIDENCE_PROTOCOL.md | provenance/raw evidence | active |
| DECISION_LOG.md | durable decisions | active |
| repository-integrity.yml | machine-checkable repository hygiene | active |
