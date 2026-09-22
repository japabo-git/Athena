# Athena Agent Operations Contract

This is the canonical repository-wide operating procedure for all agents and agentic execution environments. `AGENTS.md` is the entry point; this file contains the reusable workflow so other documents do not duplicate it.

## 1. Repository synchronization is mandatory

At session start, before substantive work:
1. Fetch/sync the latest `main` and inspect repository status.
2. Read `AGENTS.md`, `WORKSPACE.md`, `CURRENT_STATE.md`, `WORK_COORDINATION.md`, and `CONTINUE.md`.
3. Inspect open PRs/issues and active claims.
4. If working from a clone/worktree, update it from the current remote state before editing. Never assume the local checkout is current.
5. If an external agent environment (Codespace, Antigravity, sandbox, deployment platform, etc.) has local work, reconcile it with GitHub before treating it as project state.

At meaningful checkpoints and before handoff:
- commit/publish durable work to the appropriate branch;
- update the appropriate state/claim/evidence record;
- re-check main and active claims for collisions.

At session end:
- leave no important state only in the agent workspace or chat;
- publish or explicitly hand off uncommitted work;
- record the exact next action/blocker.

**Rule:** GitHub is the coordination spine. An agent's local filesystem, sandbox, memory, or external runtime is not durable project state until reconciled to GitHub.

## 2. One source for each kind of information

Do not create competing records.

| Information | Canonical home |
|---|---|
| Durable agent rules | `AGENTS.md` + this file |
| Current project state | `CURRENT_STATE.md` |
| Current live ownership/claims | `WORK_COORDINATION.md` |
| Live actionable work | GitHub Issues/PRs |
| Long-horizon direction | `ROADMAP.md` |
| Why a material decision was made | `DECISION_LOG.md` |
| What actually happened/proves it | `evidence/` + `EVIDENCE_PROTOCOL.md` |
| Historical task narrative | `TASK_HISTORY.md` |
| Repeatable procedures | `PLAYBOOK.md`, `playbooks/`, `skills/` |
| Lessons/anti-patterns | `LESSONS_LEARNED.md`, `lessons/` |
| Connected capabilities | `TOOLING.md`, `EXTERNAL_SYSTEMS.md`, `integrations/` |
| Scientific authority | constitution + current canonical SSOT/manifest |

Use links/routes rather than copying the same rule into multiple files. Volatile state does not belong in always-loaded instruction files.

## 3. Bootstrap, orient, then act

Use this compact loop:

**Sync → Orient → Establish authority → Check ownership → Define done/stopping condition → Inspect → Plan only as much as needed → Execute → Verify → Record → Publish → Reassess.**

Do not spend the session repeatedly rebuilding context once the repository establishes it.

When a task is already clearly authorized, do not create a governance task instead of doing the work. Governance exists to enable execution, not replace it.

When blocked by missing information:
- first inspect authoritative sources and existing evidence;
- perform the smallest discriminating test;
- if still blocked, record the exact missing authority and continue with independent work that does not depend on it.

## 4. Claims and concurrency

Before editing a shared decision area or substantial file set:
- create/refresh one active claim in `WORK_COORDINATION.md`;
- name owner, agent/session, branch, scope, collision boundary and expected handoff;
- keep the scope narrow enough that another agent can work elsewhere.

If another active claim overlaps:
- do not silently edit;
- coordinate or choose a non-overlapping slice;
- record the resolution.

Merged/abandoned/handoff work must have its claim released or superseded. Never leave completed claims looking active.

## 5. External agents and sub-agents

External execution environments are workers, not parallel sources of truth.

Every worker must:
- bootstrap from the current GitHub repository;
- state its claimed scope;
- publish durable changes/evidence back to GitHub;
- leave a machine-readable/reviewable handoff;
- never rely on private local context for future continuation.

Use sub-agents when they materially improve speed, independence, or verification. Do not spawn agents merely because the platform supports them.

Parallel work must have explicit non-overlapping scopes and a defined integration owner.

## 6. Scientific/experimental work

Scientific authority comes from the constitution and current canonical SSOT/manifest, not from an old runner, deployment, branch, or remembered chat.

Never alter scientific variables to make infrastructure pass.

Separate:
- scientific definition;
- execution infrastructure;
- evidence capture;
- derived evaluation;
- decision.

A missing executable field is a real blocker for the affected run, but not necessarily a blocker for unrelated engineering, deterministic tests, evidence infrastructure, or source reconciliation.

Use non-scarce/deterministic checks before scarce model execution.

## 7. Evidence and failure handling

For material work preserve:
- actor;
- timestamp;
- commit/branch;
- authority/source;
- action;
- result;
- raw failure/evidence where applicable;
- uncertainty;
- next action.

Use:

**Observe → Classify → Isolate → Hypothesize → Minimal change → Test → Record → Continue or stop.**

Never hide, overwrite, or silently normalize failures. A failed execution is evidence.

## 8. Definition of done

A task is not complete merely because files changed.

The agent must verify the intended behavior at the appropriate level, inspect the final diff, record evidence, and publish a recoverable handoff.

If validation cannot be performed, state exactly what remains unverified.

## 9. Self-maintenance

When changing a workflow, command, boundary, architecture, integration, or invariant, update the single canonical documentation route in the same change.

When a rule becomes obsolete, remove or supersede it rather than adding another exception.

When a repeated failure is discovered, prefer converting the lesson into a test, validator, script, SOP, or durable invariant rather than repeatedly telling agents about it in prompts.

The goal is failure-resistant operation through structure and verification, not a claim of literal impossibility.
