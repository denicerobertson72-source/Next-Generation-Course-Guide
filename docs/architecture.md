# Architecture

## Current application slice

The app is a Next.js/React/TypeScript client workspace. `CourseRecord` is the source of truth for course context and the links between outcomes, assessments, and selected activities. The UI reads and writes that record; it does not store independent relationship state.

Browser localStorage is the current demo repository. `src/lib/storage.ts` validates and upgrades a saved record before returning it, so malformed browser data does not enter the UI. A server-backed repository can replace this module without coupling React components to a specific database.

## Domain seams

- `src/types/course.ts`: shared course and Activity Builder types.
- `src/lib/courseSchema.ts`: runtime validation at persistence boundaries.
- `src/lib/alignment.ts`: deterministic relationship checks, deliberately separate from future AI-informed pedagogical analysis.
- `src/lib/recommend.ts`: deterministic Activity Builder scoring and recommendation roles.
- `src/lib/benchmarks.ts`: calibration scenarios and runner used by tests.
- `src/lib/sloReview.ts` and `src/lib/tilt.ts`: deterministic, visible review/scaffold layers.
- `src/lib/provenance.ts` and `src/lib/export.ts`: faculty-facing source records and portable Markdown report.
- `src/lib/courseRepository.ts`: local demo implementation of the persistence boundary; production can supply a relational repository behind the same interface.
- `src/lib/ai/*` and `app/api/ai/*`: server-only AI services; no client-side credentials.

The SLO AI route is implemented but credential-gated. Uploads, authentication, and production persistence remain unimplemented and must stay server-side when introduced.

## Document-first entry points

Course Context uses the existing DOCX/PDF/TXT/Markdown extractor for syllabus-first setup. `syllabusParse.ts` is a deliberately conservative, deterministic parser: it recognizes common headings and only proposes outcomes that are visibly numbered or bulleted beneath an outcome heading. It never writes proposals into a course until faculty accepts them. Assignment uploads use the same extraction seam; extracted text and source metadata remain editable in the local `CourseRecord`. AI-assisted syllabus and assignment review are visible future seams only and remain disabled.

The same parser recognizes clearly headed assessment sections (Assignments, Assessments, Grading, Evaluation, Exams, Projects, Papers, and similar headings). It accepts bullets, numbered lines, and simple text-table rows containing recognizable assessment terms. Each proposal retains its source section/excerpt, explicit percentage or points, and a suggested assessment category when detectable. It does not infer SLO links, pedagogical alignment, or formative/summative purpose; faculty confirmation is required.

## Course-design workspace

The Dashboard, Context, Outcomes, Assessments, Learning Activities, and Alignment Map are peer workspaces, rather than a required wizard. `CourseDesignWorkspace` edits the same `CourseRecord` used by Guided Design and Quick Tools. The map reads explicit relationship IDs and sends faculty directly to the relevant editor to address gaps. AI-assisted review remains disabled globally; Standard SLO Review and alignment checks are deterministic.

## Prompt Handoff

`src/lib/promptHandoff.ts` is a pure service that selects task-relevant CourseRecord data and deterministic findings to build an editable external-AI prompt. It has no dependency on the OpenAI client or API routes. `PromptHandoffPanel` handles local copy and optional faculty-pasted feedback; provenance is a concise faculty-facing source list rather than debugging output.

## Course Design Partner

The post-upload workspace now organizes work around backward design. `CourseRecord` remains the shared CourseContext; `outcomeDesignDecisions` adds locally persisted faculty-approved outcome-improvement provenance. Curated patterns live in `src/data/outcomePatterns.ts`, separate from React and deterministic review logic, so assessment/activity/assignment patterns can follow the same extension model.

`assessmentDesignDecisions` follows the same model for assessment patterns and preserves original snapshots rather than overwriting source material. `practiceTarget` is a small cross-workspace handoff seam from confirmed outcome/assessment context to the existing deterministic Activity Builder.

`practiceLibrary.ts` and `learningExperience.ts` form the Learning Experience Design Partner adapter. Their small curated library is intentionally independent of React and compatible with future Activity Builder data import/refinement. Approved designs are represented both as linked activities and `learningExperienceDesignDecisions`, allowing Alignment to render Outcome → Practice → Evidence.
