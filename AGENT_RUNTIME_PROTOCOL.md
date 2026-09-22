# Athena Agent Runtime Protocol

This file is retained as a compatibility entry point for existing tooling/CI.

**Canonical runtime/agent workflow:** `AGENTS.md` → `AGENT_OPERATIONS.md`.

Do not add parallel runtime rules here. If a durable rule changes, update `AGENT_OPERATIONS.md` and, if necessary, update the route from this file.

## Compatibility summary
- Synchronize with current GitHub state before substantive work and before handoff.
- Use explicit authority and ownership.
- Execute authorized work rather than creating governance work as a substitute.
- Preserve raw evidence and durable provenance.
- Use bounded retries/recovery and never silently substitute scientific variables.
- Publish recoverable state to GitHub.
