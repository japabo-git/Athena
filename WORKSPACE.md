# Athena Workspace

This repository is the durable operational home for Athena.

## Purpose
A new agent/session should be able to recover Athena's current state, history, decisions, working methods, evidence, integrations, and next actions from this repository without depending on an old chat or a particular connector.

## Authority
1. Current explicit decision in the canonical Athena SSOT.
2. Current canonical experiment specification/manifest.
3. Repository constitution and governance.
4. Current implementation, tests, evidence, and operational state.
5. Historical material.

Migration rule: the project is moving toward GitHub as the primary operational home. Until the canonical SSOT is explicitly migrated/cut over, the current external SSOT remains authoritative for decisions it owns. Record migration status rather than pretending it is complete.

## Where things live
- Mission/principles: athena-experiment-system/constitution/
- Agent contract: AGENTS.md
- Workspace map: WORKSPACE.md
- Working style: OPERATING_MODEL.md
- Repeatable methods: PLAYBOOK.md, playbooks/, skills/
- Lessons/anti-patterns: LESSONS_LEARNED.md, lessons/
- Current coordination: WORK_COORDINATION.md
- Decisions/changes: DECISION_LOG.md
- Current state: CURRENT_STATE.md
- Memory architecture: MEMORY_SYSTEM.md
- Security threat model: SECURITY_THREAT_MODEL.md
- Reliability/resilience: RELIABILITY_AND_RESILIENCE.md
- Runtime protocol: AGENT_RUNTIME_PROTOCOL.md
- SOTA audit: AUDIT_SOTA_20260922.md
- Task history: TASK_HISTORY.md plus GitHub Issues/PRs
- Evidence: EVIDENCE_PROTOCOL.md and evidence/
- Session/run logs: logs/
- Artifacts: ARTIFACTS.md and artifacts/
- Tools/MCPs: TOOLING.md and integrations/
- Credentials metadata: CREDENTIALS.md
- External systems: EXTERNAL_SYSTEMS.md
- Experiments: athena-experiment-system/experiments/

## State vs history
CURRENT_STATE answers where we are now.
TASK_HISTORY answers what happened.
WORK_COORDINATION answers who is working on what now.
DECISION_LOG answers why a material choice/change happened.
EVIDENCE answers what actually happened and what proves it.
logs answer what the system/agent observed during execution.
ARTIFACTS answers what durable outputs were produced.
LESSONS answers what we have learned.
TOOLING answers what capabilities are connected and verified.

Do not use one record type as a substitute for another.

## Agent bootstrap
Read: AGENTS.md -> WORKSPACE.md -> CURRENT_STATE.md -> WORK_COORDINATION.md -> relevant constitution/instructions -> task/PR/issues -> relevant decisions/evidence/lessons -> tooling/integration records.

If an external system is unavailable, use repository evidence and record the missing capability. Never invent current state.

## Publication rule
Substantive work is complete only after: isolated branch -> validation -> provenance/state/handoff -> PR -> ready for review -> merge when policy/checks permit -> state/coordination update.

The agent doing the work owns the mechanical PR lifecycle unless explicitly delegated. Consequential project decisions remain subject to the project owner's authority.

## External capability rule
External tools, MCPs, databases, deployment platforms and connectors are capability providers, not invisible memory. Durable information needed by future agents must return to this workspace or have an explicit authoritative external location, owner, freshness and recovery path recorded in EXTERNAL_SYSTEMS.md.

Secrets stay in secure secret stores.
