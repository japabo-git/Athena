# Evaluation Contract

The experiment system must keep three things separate:

1. **What the model/agent generated.**
2. **What the evaluator observed/scored.**
3. **What the human/project owner concludes from the evidence.**

A runner summary is not evidence of success.

## Minimum evaluator record

- evaluator version;
- evaluation input/reference;
- criteria/rubric identifier;
- evaluator output;
- confidence/uncertainty if supported;
- errors or missing fields;
- linkage to the exact run being evaluated.

## Claims discipline

The system must not claim that Athena works merely because:

- the application deployed;
- an API call succeeded;
- an agent completed a task;
- a single scenario looked good;
- a small sample produced an attractive result.

Scientific conclusions must be traceable to the canonical experiment design and observed evidence.
