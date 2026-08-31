# Next Generation Course Guide

Faculty-facing MVP workspace implementing the course-design foundation defined in the functional specification.

## What this version supports

The workspace connects course context, structured relationships, and faculty-controlled decisions in one persistent course record:

1. Course context
2. One confirmed student learning outcome (SLO)
3. One assessment/evidence item linked to that SLO
4. A learning activity selected with the migrated deterministic Activity Builder recommendation engine
5. A visible SLO → Assessment → Activity alignment view
6. Multiple SLOs and assessments on the dashboard, deterministic relationship flags, and reflection logging
7. Assignment Studio with editable TiLT Purpose, Task, and Criteria scaffolds
8. Intentional AI decisions using Resist → Reveal → Remix
9. Faculty-facing Sources & Assumptions records and Markdown course-design-summary export
10. Course Design Partner pathways, Design Story, and transparent next-step guidance based only on saved faculty relationships

The Activity Builder's 79-activity library is migrated into TypeScript, and its established recommendation weighting and three-headline-pick pattern are preserved for the inputs used in this slice.

## What is intentionally not included yet

- Production database/login and institutional access
- Production file retention/storage for uploads
- DOCX/PDF exports
- Legacy developer-only audit/feedback tools and full custom-benchmark editor
- AI analysis beyond SLO review (assignment, alignment, and policy tools)

Faculty can upload DOCX, PDF, TXT, and Markdown material. The prototype extracts and stores readable text plus filename/type/status in the local course record; it does not retain the original file or send material to OpenAI. The SLO review API route is server-side and remains unavailable until a server environment supplies both `OPENAI_API_KEY` and `OPENAI_KNOWLEDGE_VECTOR_STORE_ID`; no API key is exposed to the browser.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

The automated suite includes all 12 Activity Builder benchmark scenarios, CourseRecord validation, and deterministic alignment checks. Every benchmark must remain in the legacy engine's pass band before recommendation behavior changes.

## Current persistence

The prototype saves one course record in browser `localStorage`. This is temporary prototype behavior. The production MVP will move course records to server-backed storage while retaining versioned local recovery/export patterns where useful.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
src/
  components/CourseGuidePrototype.tsx
  data/activities.ts
  data/options.ts
  lib/infer.ts
  lib/recommend.ts
  lib/storage.ts
  types/course.ts
docs/
  architecture.md
  data-model.md
  activity-builder-migration.md
  ai-architecture.md
  implementation-status.md
  alignment-and-design-story.md
  next-generation-course-guide-mvp-spec-v0.1.md
```

## Migration provenance

The activity library and recommendation concepts come from the existing public **Active Learning Activity Builder**. The new Course Guide should treat that engine as an existing subsystem, not replace it with generative AI.

## Next implementation milestone

The next milestone is a multi-item course workspace: multiple SLOs, assessments, and activities with editable links and a dashboard that surfaces deterministic relationship checks. Activity Builder Quick/Guided Build and TiLT migration follow before server-side AI work.
