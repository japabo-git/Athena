# Athena Lessons Learned

Durable lessons belong here when they are likely to prevent repeated mistakes.

## Format

### LES-YYYYMMDD-NNN — title
- Context:
- What happened:
- Evidence:
- Lesson:
- Reusable pattern:
- Anti-pattern:
- Confidence:
- Date:
- Supersedes / superseded by:

## Current lessons

### LES-20260922-001 — Coordination context must survive chat sessions
- Context: Athena is being developed through multiple agents/sessions.
- What happened: Critical context can be fragmented across chats, connectors, and external systems.
- Evidence: Repository review identified operating instructions but lacked a unified coordination/provenance layer.
- Lesson: Durable project context must be encoded in the shared workspace.
- Reusable pattern: Repository-first session bootstrap plus explicit coordination/evidence records.
- Anti-pattern: Depending on previous chat context for critical decisions or handoffs.
- Confidence: High
- Date: 2026-09-22
- Supersedes / superseded by: None

### LES-20260922-002 — Separate scientific changes from infrastructure fixes
- Context: Experiment infrastructure has previously produced ambiguous failures.
- What happened: Infrastructure problems can tempt changes to models or experiment parameters.
- Evidence: Existing constitution requires scientific integrity and controlled variables.
- Lesson: Preserve scientific comparability by isolating infrastructure changes from experimental-variable changes.
- Reusable pattern: classify failure first; capture raw evidence; make the smallest infrastructure change; rerun controlled checks.
- Anti-pattern: Changing model/parameters to make a broken runner pass.
- Confidence: High
- Date: 2026-09-22
- Supersedes / superseded by: None
