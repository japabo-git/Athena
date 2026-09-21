# Athena Independent Review Policy

Independent review is a control against confirmation bias, hidden assumptions and integration failures.

## Required for
- canonical experiment methodology or evaluator changes;
- major architecture or memory-schema decisions;
- production security/privacy/authentication changes;
- changes that alter autonomy or tool authority;
- conclusions that materially change the roadmap;
- production-readiness gates;
- significant incidents.

Routine low-risk documentation and mechanical fixes may use ordinary review.

## Independence
The reviewer should not be the author of the change or the sole agent that designed its supporting evidence.

The reviewer receives the intended outcome, requirements, change, tests/evidence and known uncertainty, and should actively try to falsify the proposed conclusion.

## Outcomes
approve / approve-with-follow-up / request-changes / inconclusive.

Review is evidence, not authority. Consequential decisions remain governed by the source hierarchy and human authority.

## Anti-pattern
A nominal reviewer that merely rephrases the implementer's reasoning provides little independent value.
