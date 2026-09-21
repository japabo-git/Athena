# Athena Review & Evaluation Protocol

## Principle
Important system claims should not depend solely on the agent that built the system.

## Review levels
0. Automated checks: tests, static checks, secret scanning, schemas.
1. Independent agent peer review.
2. Adversarial review that attempts to falsify or break the claim.
3. Human/project-owner review for consequential product, architecture, safety, privacy, security or irreversible decisions.
4. Real-world/longitudinal validation before claiming material user benefit.

## Independence
Reviewers should use clean context where practical, receive evidence rather than conclusions, identify unknowns and alternative explanations, and preserve disagreements as durable findings.

## Evaluation integrity
Validate task quality, expected behavior, tests/evaluators and leakage/reward-hacking risk. Include negative and ambiguous cases, measure process as well as outcome, and reproduce important findings.

Recent research has identified benchmark-quality and reward-hacking problems in software-agent evaluation, so benchmark numbers must not be treated as unquestionable ground truth.
