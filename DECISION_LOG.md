# Athena Decision and Change Log

This log records decisions and significant implementation choices so future agents do not have to rediscover them from chat.

This is not a replacement for the canonical SSOT. Decisions that belong in the SSOT must be synchronized there.

## Record format

For every material decision/change record:

- ID
- Date/time (UTC)
- Actor
- Type: decision / observation / incident / implementation / supersession
- Question/problem
- Decision/change
- Authority/source
- Alternatives considered
- Evidence
- Confidence/uncertainty
- Impact
- Follow-up
- Supersedes / superseded by

## DEC-20260922-001

- Date/time (UTC): 2026-09-21/22
- Actor: ChatGPT, GitHub-connected engineering session
- Type: implementation
- Question/problem: Multiple agents/sessions may edit Athena concurrently, causing collisions, contradictory assumptions, lost provenance, and expensive re-discovery.
- Decision/change: Add a repository-level agent contract, coordination ledger, decision/evidence protocol, and automated integrity checks. Require isolated branches for substantive work and explicit handoffs.
- Authority/source: Current repository constitution and operating instructions; GitHub collaboration capabilities.
- Alternatives considered: Rely only on chat history; rely only on PR descriptions; introduce a large orchestration framework immediately.
- Evidence: Repository inspection showed governance and operating instructions but no explicit cross-session coordination ledger or machine-checkable integrity layer.
- Confidence/uncertainty: High for the coordination problem; exact future agent platform remains implementation-dependent.
- Impact: Reduces collision risk and makes work recoverable without reconstructing conversations.
- Follow-up: Protect main with PR/status-check rules when repository settings are available; use the ledger on every substantive workstream.
- Supersedes / superseded by: None.

## Change classification

Use these labels consistently in commits/PRs:

- governance: coordination, provenance, policy, agent contracts.
- infra: runner/deployment/storage/networking changes with no intended scientific-variable change.
- experiment: changes to canonical experiment definitions or scientific variables.
- evidence: changes to evidence capture, schemas, or observability.
- docs: explanatory documentation.
- fix: defect repair; state whether scientific behavior can change.
