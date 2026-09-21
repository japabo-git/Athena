# Source Hierarchy and Conflict Resolution

When sources disagree, use this order:

1. Explicit current decision in the canonical Athena SSOT.
2. Current experiment specification/manifest.
3. Current constitution in this repository.
4. Current implementation/tests.
5. Historical architecture guides, old deployment notes, chat transcripts, and remembered assumptions.

A lower-level source must never silently override a higher-level source.

If a higher-level source is unavailable or ambiguous, record the ambiguity and continue only with work that cannot affect the disputed decision.

Every synchronization from the SSOT should record:
- source/page identifier;
- retrieval timestamp;
- relevant version/date if available;
- changes made to this repository.
