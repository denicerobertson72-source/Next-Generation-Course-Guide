# Implementation status

## Completed

- Phase 1 course → confirmed SLO → linked assessment → selected activity → alignment workflow.
- Typed 79-record Activity Builder library and deterministic recommendation engine.
- Course-context inference for modality, enrollment band, and initial SLO-informed activity settings.
- Browser demo persistence with runtime record validation.
- Deterministic alignment relationship checks.
- Ported 12 Activity Builder benchmark scenarios with automated regression coverage.
- Automated schema, alignment, scoring benchmark, and headline-pick tests; lint/typecheck/build scripts.
- Multi-item dashboard, editable course intent, SLO/assessment additions, deterministic SLO prompts, reflection log, and alignment prompts.
- Assignment Studio with editable TiLT Purpose/Task/Criteria scaffold and quality prompts.
- Intentional AI decision studio using Resist / Reveal / Remix and student-facing statements.
- Faculty-facing source/assumption records and Markdown course-design-summary export.
- Credential-gated server-side Responses/File Search SLO review route with strict structured-output validation.
- Activity Builder Quick Build / Guided Build package studio, visible smart defaults, package quality prompts, and storage-ready repository interface.
- Editable TiLT sections and versioned JSON course export/import with validation before a saved course is replaced.
- All 25 legacy high-priority Activity Builder enhancement records, their facilitation/criteria/TiLT content, generation-quality flags, and expanded package-quality prompts.
- Prototype DOCX, PDF, TXT, and Markdown material extraction. Only extracted text and metadata are kept in local course storage; original files are not retained or sent to AI.
- Inactive OpenAI knowledge architecture: server-only environment configuration, status endpoint, retrieval service, Responses/File Search service seam, and `.env.example` without values.
- Dedicated SLO Review vertical slice: narrow course-context request, validated structured guidance, visible retrieval metadata and assumptions, editable proposed revision, and locally persisted accept/edit/keep-original decisions.
- AI cost-control foundation: disabled-by-default feature flags, routine/advanced model tiers, configurable pricing assumptions, pre-request estimates, a swappable prototype usage ledger, friendly rate/budget guards, and Standard Review fallback.

## In progress

- Add browser-level workflow tests for the multi-workspace course-design flow.
- Add acceptance/rejection granularity and edit controls for individual syllabus-import suggestions.
- Add browser-level tests for the Transparent Design upload → review → revision workflow.
- Add browser-level checks for landing → upload → Course Review → prompt handoff.
- Playwright coverage for landing, syllabus upload, assignment review, keyboard entry, local persistence, and detailed workspace navigation.
- Course Design Partner milestone: backward-design workspace and outcome improvement flow using curated, editable patterns.
- Assessment Design Partner milestone: faculty-confirmed evidence links, persisted curated assessment decisions, and assessment-to-practice handoff.
- Learning Experience Design Partner milestone: contextual practice needs, curated recommendations, editable Quick Build, linked activity persistence, and pathway alignment view.

## Next

1. Add critical browser workflow tests for syllabus upload → faculty review → outcomes → assessment links → activity links → alignment fix.
2. Add assignment AI review, alignment AI analysis, and policy drafting only after this SLO-review pattern is approved and knowledge files/vector-store access are configured.

## Known issues

- Storage is browser localStorage only; it is demo persistence, not multi-user or durable server storage.
- PDF extraction works for text-based PDFs; scanned/image-only PDFs will report no readable text until OCR is intentionally added.
- Faculty material is extracted for prototype use only; original files are not retained, and the extracted text remains browser-local unless the faculty member exports it.
- The course UI has not yet added an automated browser workflow test; current tests cover the deterministic domain layer. Drag-and-drop ordering is intentionally not included; accessible move buttons are used instead.

## Decisions needed

- **Production database:** choose Supabase/PostgreSQL hosting and a migration/backup model.
- **Authentication / SSO:** decide pilot identity approach and later NKU SSO integration; do not implement it in the prototype.
- **Retention policy:** decide how long uploaded originals, extracted text, exports, and course records should be retained once server persistence exists.
- **Hosting:** choose the institutional hosting environment and server-side secrets process.
- Obtain approved knowledge-source files and a vector-store ID before activating OpenAI retrieval.
