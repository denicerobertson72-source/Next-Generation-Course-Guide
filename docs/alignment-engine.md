# Deterministic alignment engine

`src/lib/alignment.ts` reads explicit course relationships and returns faculty-facing review messages. It never calculates an overall course score.

## Deterministic checks

- An outcome has no linked assessment.
- An outcome has no linked learning activity.
- An assessment has no linked outcome.
- A summative assessment has no activity explicitly marked as preparation.
- An activity has neither an outcome nor an assessment link.

## Conservative heuristic

When a faculty-selected cognitive level is at least two Bloom levels below a linked outcome, the engine says **Review suggested**. This is not a verdict: assessment evidence may demonstrate more sophisticated thinking than a selected label captures.

## Faculty control and future AI

Faculty create, remove, and revise every relationship and choose whether to act on a review message. Standard SLO Review is separately labeled deterministic feedback. AI-assisted review and richer pedagogical analysis remain disabled; future AI may offer clearly labeled considerations but must not replace these stored relationships or faculty decisions.
