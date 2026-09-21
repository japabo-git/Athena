# Work Coordination Ledger

Purpose: prevent collisions, duplicated work, contradictory assumptions, and lost handoffs between humans and agents.

This is a lightweight coordination control plane. It is not a source of truth for Athena decisions; it records who is doing what and what happened.

## Operating rules

1. Claim work before editing a shared area.
2. Claims must name the owner, branch, scope, start time, expected handoff, and collision boundary.
3. Prefer narrow scopes. Avoid claiming the whole repository.
4. If two claims overlap, stop and coordinate; do not race.
5. A claim becomes released when the work is merged, abandoned, or explicitly handed off.
6. Never delete another agent historical claim. Mark it released or superseded.
7. A stale claim over 24h is not automatically safe to take over. Record the takeover reason and preserve prior owner/branch information.
8. Git history and PRs contain implementation provenance; this ledger contains operational coordination.

## Status vocabulary

- planned — identified but not started.
- active — owner is currently working.
- blocked — cannot continue; record blocker and evidence.
- handoff — intentionally transferred.
- released — no longer reserved.
- superseded — replaced by a later decision/change.

## Active claims

| ID | Owner | Agent/session | Branch | Scope | Status | Started (UTC) | Expected handoff | Collision boundary |
|---|---|---|---|---|---|---|---|---|
| WC-20260922-01 | ChatGPT | current session | agent/governance-and-coordination-20260922 | repository coordination, provenance, agent handoff controls | active | 2026-09-21/22 | after PR review | governance/control-plane files |

## Handoff record

| ID | From | To | Time (UTC) | What changed | Evidence | Next action |
|---|---|---|---|---|---|---|
| HO-20260922-01 | ChatGPT | next Athena agent/session | 2026-09-21/22 | Added repository-wide agent contract, coordination protocol, decision/evidence protocol, and CI integrity checks | PR associated with this branch | Review/merge; then use protocol for substantive work |

## Collision protocol

If overlap is discovered:

1. Stop edits in the overlapping area.
2. Identify both branches/owners.
3. Compare intended outcomes, not just filenames.
4. Determine whether one is a dependency of the other.
5. If compatible, agree an integration order.
6. If conflict involves SSOT or constitution, escalate to the higher-authority source.
7. Record the resolution in the decision log.

## Current workstreams

| Workstream | Owner | Status | Canonical dependency |
|---|---|---|---|
| Canonical SSOT synchronization | project owner / delegated agent | pending | Athena Notion SSOT |
| Experiment manifests | project owner / delegated agent | pending | current SSOT |
| Experiment runner | unassigned | pending | manifests + constitution |
| Evidence/observability | unassigned | pending | experiment method |
| Infrastructure/deployment | unassigned | pending | runner requirements |
