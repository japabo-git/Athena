# Work Coordination Ledger

Purpose: prevent collisions, duplicated work, contradictory assumptions, and lost handoffs between humans and agents.

This is a lightweight coordination control plane. It is not a source of truth for Athena decisions.

## Operating rules
1. Claim work before editing a shared area.
2. Claims name owner, branch, scope, start time, expected handoff and collision boundary.
3. Prefer narrow scopes.
4. If claims overlap, stop and coordinate.
5. Claims become released when merged, abandoned or handed off.
6. Never delete historical claims; mark released/superseded.
7. A stale claim is not automatically safe to take over; record the takeover reason.
8. Git history/PRs contain implementation provenance; this ledger contains operational coordination.

## Status vocabulary
planned / active / blocked / handoff / released / superseded

## Recent claim
| ID | Owner | Agent/session | Branch | Scope | Status | Outcome |
|---|---|---|---|---|---|---|
| WC-20260922-01 | ChatGPT | GitHub engineering session | agent/governance-and-coordination-20260922 | repository coordination, provenance, agent handoff controls | released | PR #1 merged as 5482c160e5f0b6b92e3563214f2bc9c34fac1a79 |

## Handoff record
| ID | From | To | Time | What changed | Evidence | Next action |
|---|---|---|---|---|---|---|
| HO-20260922-01 | ChatGPT | next Athena agent/session | 2026-09-22 UTC | Repository-first workspace layer published: state, task history, operating model, playbook, lessons, tooling, credentials metadata, external systems, memory architecture, artifacts, logs/evidence surfaces and PR workflow | PR #1 merged | Bootstrap from AGENTS.md and WORKSPACE.md; proceed to SSOT migration |

## Collision protocol
If overlap is discovered: stop edits; identify owners/branches; compare intended outcomes; establish dependency/integration order; escalate SSOT/constitution conflicts; record resolution.

## Latest handoff
| ID | From | To | Time | What changed | Evidence | Next action |
|---|---|---|---|---|---|---|
| HO-20260922-02 | ChatGPT | next Athena agent/session | 2026-09-22 UTC | SOTA operating-layer audit completed; CONTINUE authority, risk tiers, recovery/rollback, independent review, untrusted-input handling and stronger integrity checks published | PR #2, merge 7e3d84cd0e6848bc8a80f82523d0b7b7c4532850 | Bootstrap from AGENTS.md; proceed to SSOT migration and experiment-system work |

## Current workstreams
| Workstream | Owner | Status | Dependency |
|---|---|---|---|
| Canonical SSOT synchronization | delegated agent | pending | current external SSOT |
| Experiment manifests | delegated agent | pending | current SSOT |
| Experiment runner | unassigned | pending | manifests + constitution |
| Evidence/observability | delegated agent | active | experiment method |
| Infrastructure/deployment | delegated agent | pending | runner requirements |


## Latest handoff
| ID | From | To | Time | What changed | Evidence | Next action |
|---|---|---|---|---|---|---|
| HO-20260922-04 | ChatGPT | next Athena agent/session | 2026-09-22 UTC | Repository integrity CI repaired and verified green on main; live-tree operating-system audit reconciled | PR #5 merged as f59533ca2cb9ec3fd0edaa1afa55f8acedc97ad8; Actions run #39 success | Bootstrap from AGENTS.md; run CONTINUE; do not treat unverified external systems or runtime controls as implemented |

## Active claim
| ID | Owner | Agent/session | Branch | Scope | Status | Expected handoff |
|---|---|---|---|---|---|---|
| WC-20260922-02 | ChatGPT | GitHub continuation session | agent/continue-ssot-reconciliation-20260922 | canonical SSOT reconciliation readiness; inspect committed SSOT export/reference and establish next executable work | active | publish reconciliation evidence/state, or bounded blocker |


## Active claim — SSOT experiment-program reconciliation
| ID | Owner | Agent/session | Branch | Scope | Status | Expected handoff |
|---|---|---|---|---|---|---|
| WC-20260922-03 | ChatGPT | GitHub continuation session | agent/ssot-experiment-program-20260922 | synchronize the current canonical experiment registry/method into repository-native records without inventing executable fields | active | publish reconciliation PR or bounded blocker |

## Reconciliation checkpoint — 2026-09-22
- Direct Notion inspection confirmed the current canonical registry contains EXP-001 through EXP-005 only.
- The current canonical evaluation method defines a raw-base-model + frozen-synthetic-scenario baseline and the seven-stage experimental sequence.
- Historical references to 18-job and 20-run programmes are retained as historical evidence and are not silently promoted.
- Exact executable fields not present in the current canonical registry/method remain unresolved and must not be invented.
- Next gate: obtain/reconcile an authoritative executable specification before freezing manifests or running a new cohort.


## Active claim — AppDeploy infrastructure preflight
| ID | Owner | Agent/session | Branch | Scope | Status | Expected handoff |
|---|---|---|---|---|---|---|
| WC-20260922-05 | ChatGPT | GitHub continuation session | agent/appdeploy-preflight-20260922 | verify deployed experiment runner, capture exact runtime failure, and isolate infrastructure fixes from scientific definition | active | publish evidence/PR or bounded blocker; no scientific-variable changes |

## AppDeploy preflight checkpoint — 2026-09-22
- AppDeploy app `athena-experiment-runner-6gnl2p` is deployed/ready.
- Cron reports repeated 504 `runner_task_timeout` at 30,000 ms.
- Source inspection identified multi-step tick work and a historical Gemini 3.5 Flash-Lite programme.
- Issue #10 captures the raw finding.


## Active claim — HAOS Inspect smoke harness
| ID | Owner | Agent/session | Branch | Scope | Status | Expected handoff |
|---|---|---|---|---|---|---|
| WC-20260923-HAOS-01 | ChatGPT | HAOS Phase 2.5 session | agent/haos-inspect-smoke-20260923 | Inspect-based smoke harness + minimum HAOS/Hive fixture corpus; no scientific runner or experiment-variable changes | active | smoke harness + fixture set published for validation |

## HAOS smoke checkpoint — 2026-09-23
- Added `athena-experiment-system/haos_smoke/smoke.py`.
- Added `athena-experiment-system/haos_smoke/fixtures.jsonl` with six minimal fixture classes: handoff/resumption, authority boundary, provenance, lifecycle, portability and failure recovery.
- Added `athena-experiment-system/haos_smoke/README.md`.
- Python syntax and fixture schema were checked locally; an Inspect/model execution was not claimed because this session does not have the repository checkout/Inspect runtime available.
- The fixture set is explicitly marked non-evidence and does not define the scientific E1-E6 variables.
- Scope intentionally excludes the experiment runner, retrieval infrastructure, databases, orchestration, and architecture implementation.
