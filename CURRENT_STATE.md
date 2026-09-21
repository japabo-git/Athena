# Athena Current State

Last updated: 2026-09-22 UTC

## Project direction
Athena is a tenant-agnostic self-improvement system. Its intended role is inquiry-first: understand current and desired states, test assumptions, identify likely future problems, and help the person make better decisions rather than merely agreeing.

The repository is being established as the primary durable operational workspace.

## Current status
- Experiment-system repository boundary exists.
- Governance, coordination and evidence controls are being added.
- No finished experiment runner is established in this repository.
- Baseline and initial experiment cohort remain the scientific workstream; do not invent or silently alter definitions.
- Current external canonical SSOT has not yet been formally cut over to GitHub.
- App/deployment infrastructure is separate from scientific experiment changes.

## Workstreams
| Workstream | Status | Next action |
|---|---|---|
| Workspace consolidation | active | complete registry and migration plan |
| Canonical SSOT migration | pending | inspect/export/reconcile, then explicitly cut over |
| Experiment manifests | pending | synchronize canonical definitions |
| Experiment runner | pending | implement after manifests/execution contract |
| Evidence/observability | active | durable raw evidence and run records |
| Infrastructure/deployment | pending | verify current AppDeploy/Hatchable state separately |
| Agent operating system | active | institutionalize proven workflows and anti-patterns |

## Recent governance change
PR #1 establishes the repository-level agent contract, coordination, provenance, evidence, session-start and integrity controls.

## Constraints
- No secrets in GitHub source, logs, issues, artifacts or commits.
- Do not change scientific variables to solve infrastructure problems.
- Preserve raw errors and failed evidence.
- Avoid duplicate/overlapping work.
- Prefer shortest useful path and observable evidence.
- Promote proven methods to SOPs/playbooks/skills; record failed approaches as anti-patterns.
