# Implementation Notes — Prototype v0.1

## Status

This prototype implements the functional specification's recommended immediate build task:

**Create Course → Add/confirm one SLO → Add one assessment → Find an Activity using the migrated Activity Builder → Save the selected activity into the course → Display the three-way alignment.**

## Architecture choices in this slice

- Next.js + React + TypeScript shell.
- No AI dependency yet.
- Browser localStorage is used only to prove save/resume behavior.
- The shared `CourseRecord` is the source of truth for SLO, assessment, and activity relationships.
- Activity recommendations remain deterministic.
- The 79-activity source library has been migrated into typed application data.
- Recommendation settings are prefilled from the SLO where possible and remain editable by faculty.

## Activity Builder migration fidelity

The migrated scoring code preserves the current core weights:

- learning purpose 25
- primary intellectual action 25
- up to two secondary actions 5 each
- learning stage 15
- modality 15
- time 15
- grouping 10
- class size 10
- faculty priorities 12 maximum
- review burden 8
- preparation 5
- technology 5

The three recommendation roles are also preserved:

1. Best overall fit
2. Lowest-preparation option
3. Most engaging option

Source-material and redesign-path bonuses are not exercised by this first slice. They should be ported and verified when those pathways are added.

## Deliberate prototype simplifications

- One primary SLO, one linked assessment, and one selected activity are emphasized in the UI.
- The data types already allow arrays so the next iteration can expand to multiple outcomes and assessments without replacing the record model.
- Bloom/cognitive level is currently faculty-selected; deterministic structural SLO checking comes next.
- The Activity Finder exposes a small set of Activity Builder filters rather than the full Guided Build customization surface.
- No institutional policy or AI guidance is generated in this version.

## Next engineering tasks

1. Port the 12 Activity Builder benchmark scenarios into automated tests against the TypeScript recommendation engine.
2. Compare rankings between the legacy and migrated engines and document any differences.
3. Expand the course workspace from one SLO/assessment to full lists and linking controls.
4. Port smart-default inference, TiLT templates, and deterministic quality checks.
5. Add server-side persistence/authentication skeleton.
6. Add server-side OpenAI integration only after the deterministic foundation is stable.
