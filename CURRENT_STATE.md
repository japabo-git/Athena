# Athena Current State

Last updated: 2026-09-22 UTC

## Project direction
Athena is a tenant-agnostic self-improvement system. Its intended role is inquiry-first: understand current and desired states, test assumptions, identify likely future problems, and help the person make better decisions rather than merely agreeing.

GitHub is now the primary durable operational workspace. The current external canonical SSOT has not yet been formally cut over, so its owned decisions remain authoritative until migration is explicitly completed.

## Current status
- Repository-first governance/workspace layer is published on main.
- Operating-layer SOTA audit and hardening are published on main via PR #2 (merge 7e3d84cd0e6848bc8a80f82523d0b7b7c4532850).
- Agentic security threat model, integrity CI and SOTA gap audit are published via PR #3 (merge 205d347c594a49a38d23b7b7c4532850).
- No finished experiment runner is established in this repository.
- Baseline and initial experiment cohort remain the scientific workstream; do not invent or silently alter definitions.
- Repository integrity CI was repaired in PR #5 and verified successful on main in Actions run #39.
- App/deployment infrastructure remains separate from scientific experiment changes.
- Runtime/user memory remains an application concern; MEMORY_SYSTEM.md defines the boundary.

## Workstreams
| Workstream | Status | Next action |
|---|---|---|
| Workspace consolidation | complete for operating layer | use workspace as default bootstrap |
| Canonical SSOT migration | pending | inspect/export/reconcile, then explicitly cut over |
| Experiment manifests | pending | synchronize canonical definitions |
| Experiment runner | pending | implement after manifests/execution contract |
| Evidence/observability | active | durable raw evidence and run records |
| Infrastructure/deployment | pending | verify current AppDeploy/Hatchable state separately |
| Agent operating system | active | reuse and improve published playbooks/lessons |

## Constraints
- No secrets in GitHub source, logs, issues, artifacts or commits.
- Do not change scientific variables to solve infrastructure problems.
- Preserve raw errors and failed evidence.
- Avoid duplicate/overlapping work.
- Prefer shortest useful path and observable evidence.
- Promote proven methods to SOPs/playbooks/skills; record failed approaches as anti-patterns.
