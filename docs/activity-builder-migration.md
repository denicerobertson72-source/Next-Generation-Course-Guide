# Activity Builder migration

The migrated library contains 79 typed activity records from the public Active Learning Activity Builder v2.3 pilot. `src/lib/recommend.ts` preserves the original centralized scoring weights, no-hard-exclusions policy, explanation/mismatch breakdowns, source-material bonus, redesign-move bonus, and three headline recommendation roles.

The source's 12 built-in calibration scenarios are ported to `src/lib/benchmarks.ts`. They run against the same TypeScript scoring function that serves the app. A regression test requires each scenario to remain in the source pass band: at least two expected activities in the top five and no explicitly unsuitable activity in the top five.

`src/lib/smartDefaults.ts` ports the core visible/defaultable behavior for grouping, short/extended activity grading, feedback plan, and online LMS assumptions. It never overwrites a faculty choice because it operates on absent/"flexible" values only.

## Activity-specific content now migrated

`src/data/activityEnhancements.ts` ports the legacy enhancement layer for all 25 original high-priority activities. Each record carries activity-specific facilitation steps, criteria-for-success, TiLT purpose/knowledge/relevance, evidence expectations, plus preparation and individual-accountability rules where applicable. It is intentionally separate from `activities.ts`, matching the legacy system's auditable enhancement-layer design.

`src/components/ActivityPackageStudio.tsx` applies these records in Quick Build and Guided Build. Faculty see the student-facing TiLT package, facilitation plan, defaults/assumptions, and source record before saving. `src/lib/activityPackageQuality.ts` ports the important TiLT, alignment, logistics, feedback, and assumption checks; `src/lib/generationQuality.ts` adds deterministic flags for template specificity, topic anchoring, observable product, debrief, accountability, and time/review fit.

## Intentional differences from the legacy pilot

- The full legacy developer-only Library Inspector, Template Audit, scoring-inspector UI, custom benchmark editor, feedback collection, and CSV developer exports are not yet moved. The core scoring engine, all 12 calibration scenarios, 25 high-priority enhancement records, template provenance, and faculty-facing quality flags are migrated.
- The original package generator exposes a larger matrix of specialized customization fields. The Course Guide currently surfaces the decisions that materially affect package output (topic, mode, grouping/defaults, grading, feedback, TiLT sections); its richer course record replaces standalone Activity Builder session state.
- Activity-specific language is retained in the enhancement layer but presented through the Course Guide's cleaner TiLT package rather than reproducing the pilot's exact screen layout.

Changing scoring weights or metadata requires running all benchmarks and documenting any intentional deviation here and in implementation status.
