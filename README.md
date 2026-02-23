## Executive summary

The Performance Maturity Analyzer is an interactive self-assessment tool embedded on Gatling.io. It asks engineering teams 18 targeted questions across six pillars: Process, Requirements, Environment, Automation, Metrics, and Culture and returns a score from 0 to 100 mapped to one of four TMMi-aligned maturity stages: Initial, Defined, Managed, and Optimized.

## Questions

18 questions across 6 pillars, 3 questions each:

| Pillar | Weight | Questions |
| --- | --- | --- |
| Process & documentation | 20% | q1, q2, q3 |
| Requirements & acceptance criteria | 15% | q4, q5, q6 |
| Environment & reproducibility | 15% | q7, q8, q9 |
| Automation & CI/CD | 20% | q10, q11, q12 |
| Metrics & trend analysis | 20% | q13, q14, q15 |
| Culture & ownership | 10% | q16, q17, q18 |

Every question has 4 answers scored 0, 1, 2, 3 (a=worst → d=best).

## Score Computation

Each pillar's raw score is the sum of its 3 questions (max = 9). That gets converted to a weighted percentage:

pillar % = (raw score / 9) × pillar weight

total score = sum of all 6 pillar percentages  →  0–100

So for example, if someone scores 6/9 on Process (weight 20): (6/9) × 20 = 13.3 points out of a possible 20.

## Stage Thresholds

| Stage | Score range | Label |
| --- | --- | --- |
| 1 | 0 – 25 | Initial (ad hoc) |
| 2 | 26 – 50 | Defined (repeatable) |
| 3 | 51 – 75 | Managed (measured) |
| 4 | 76 – 100 | Optimized (continuous) |

## Results Screen

Once the gate form is submitted, the results show:

- Total score (0–100) + stage badge
- Pillar breakdown — each pillar's % shown as a bar chart, sorted weakest → strongest
- Action plan — pulls from the ACTIONS object, showing recommendations for the 3 weakest pillars
- "What's next" box — points to the next stage up (or celebrates if Stage 4)
- A stat callout — one industry stat relevant to the user's stage (from DORA, Capgemini, New Relic)
- Download card + LinkedIn share buttons

## Sources

- TMMi Framework R1.2 — stage/pillar structure
- DORA 2023 State of DevOps — CI/CD and culture benchmarks
- World Quality Report 2024–25 — QE maturity benchmarks
- ISTQB Global Testing Survey — coverage and ownership
- Google SRE Book — metrics and observability pillar
- New Relic Observability Forecast 2023 — APM correlation data
