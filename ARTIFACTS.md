# Athena Artifact Registry

Index of durable outputs. Large binaries may remain in suitable external storage, but metadata and provenance must be recoverable here.

Record: artifact ID, type, purpose, producer, UTC time, source task/experiment/decision, commit/branch/PR, location, hash where practical, status, limitations.

Rules: do not overwrite evidence; version artifacts; never store secrets; record external recovery paths.

## Current
- ART-20260922-001: governance/workspace change set, PR #1, pending publication.
- ART-20260922-002: Athena Notion source export, migration input, not authoritative by itself.
