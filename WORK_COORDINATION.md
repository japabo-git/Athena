# Work Coordination Ledger

Purpose: manage live ownership and collision boundaries. This is not a source of truth for decisions, history or evidence.

## Rules
1. Claim work before editing shared areas.
2. One claim names one owner/session, branch, scope, collision boundary and expected handoff.
3. Prefer narrow, independently mergeable scopes.
4. If claims overlap, stop and coordinate.
5. Release/supersede claims when merged, abandoned or handed off.
6. Never delete historical claims.
7. A stale claim is not automatically safe to take over; record the takeover reason.
8. Git history/PRs contain implementation provenance; this ledger contains live coordination only.

## Status vocabulary
planned / active / blocked / handoff / released / superseded

## Current active work
| ID | Owner | Agent/session | Branch | Scope | Status | Expected handoff |
|---|---|---|---|---|---|---|
| WC-20260922-06 | ChatGPT | GitHub continuation session | agent/consolidate-agent-ops-20260922 | repository-wide operating-system consolidation: synchronization, authority routing, task/state boundaries, stale/orphan cleanup, and generic continuation behaviour | active | publish audit/fix PR; release claim after merge |

## Superseded/released claims
| ID | Status | Reason |
|---|---|---|
| WC-20260922-01 | released | PR #1 merged |
| WC-20260922-02 | superseded | superseded by consolidated operating-system work; prior reconciliation checkpoint preserved in history |
| WC-20260922-03 | superseded | superseded by consolidated operating-system work; experiment reconciliation remains represented by PR #9 |
| WC-20260922-05 | released | AppDeploy preflight evidence merged as PR #11; runtime issue remains tracked in Issue #10 |

## Current workstream map
| Workstream | Live owner/state | Dependency |
|---|---|---|
| Operating system / agent coordination | active: WC-20260922-06 | none |
| Canonical SSOT synchronization | represented by PR/issues; no overlapping edit claim | current external SSOT |
| Experiment manifests | represented by PR #9 | authoritative executable specification |
| Experiment execution | not yet claimed as a scientific execution run | executable manifest |
| Evidence/observability | supporting work as needed | experiment method |
| Infrastructure/deployment | Issue #10 | runner requirements |

## Handoff protocol
Before handoff, the owner must:
- publish durable work to GitHub;
- update the relevant current-state/evidence/task record;
- release or supersede the claim;
- state the next action and unresolved uncertainty.

A future agent must not infer active ownership from an old claim.

## Collision protocol
If overlap is discovered: stop edits; identify owners/branches; compare intended outcomes; establish dependency/integration order; record the resolution. Never silently overwrite another agent's work.
