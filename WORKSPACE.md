# Athena Workspace

This repository is the durable operational home and coordination spine for Athena.

## Purpose
Any agent/session should recover current state, authority, ownership, work, evidence, and next actions from GitHub without reconstructing old chats.

## Canonical information map
- Agent rules: `AGENTS.md` → `AGENT_OPERATIONS.md`
- Current state: `CURRENT_STATE.md`
- Live work/ownership: `WORK_COORDINATION.md` + GitHub Issues/PRs
- Long horizon: `ROADMAP.md`
- Decisions: `DECISION_LOG.md`
- Evidence: `EVIDENCE_PROTOCOL.md` + `evidence/`
- History: `TASK_HISTORY.md`
- Procedures: `PLAYBOOK.md`, `playbooks/`, `skills/`
- Lessons: `LESSONS_LEARNED.md`, `lessons/`
- Tools/integrations: `TOOLING.md`, `EXTERNAL_SYSTEMS.md`, `integrations/`
- Experiment definitions: `athena-experiment-system/experiments/`
- Scientific authority: `athena-experiment-system/constitution/` plus the current canonical SSOT/manifest

Do not duplicate one record type into another. Link to the canonical record instead.

## Authority
1. Current explicit decision in canonical Athena SSOT.
2. Current canonical experiment specification/manifest.
3. Repository constitution/governance.
4. Current implementation, tests, evidence and operational state.
5. Historical material.

GitHub is the durable engineering/coordination workspace. An external SSOT remains authoritative for decisions it still owns until explicit cutover.

## Mandatory synchronization
Every agent, including Codespaces/Antigravity/sub-agents and deployment workers, must:
- synchronize/reconcile with the current GitHub state before substantive work;
- publish durable changes/evidence back to GitHub;
- update claims/state/handoff before ending;
- never treat private local context as durable project state.

See `AGENT_OPERATIONS.md` for the complete protocol.

## State boundaries
- CURRENT_STATE = where we are now.
- WORK_COORDINATION = who owns what now.
- Issues/PRs = actionable work and review.
- TASK_HISTORY = what happened.
- DECISION_LOG = why material choices happened.
- EVIDENCE = what actually happened/proves it.
- ROADMAP = destination and decision gates.

## Publication
Substantive work uses an isolated branch, validation, provenance/handoff, PR and merge when checks/policy permit. Consequential project/scientific decisions remain subject to the project owner's authority.
