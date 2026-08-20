# Next Generation Course Guide Web App
## MVP Functional Specification — Draft v0.1

**Project:** Next Gen Course Guide Conversion to App  
**Purpose:** Convert the existing Next Generation Course Guide GPT into a standalone faculty-facing web application while integrating the existing Active Learning Activity Builder as the learning-experience engine.

---

## 1. Product goal

Create a standalone web application that helps higher-education faculty design, review, and revise courses using the four pillars already defined in the Next Generation Course Guide:

1. Backward Course Design
2. Active Learning
3. Transparent Design (TiLT)
4. Intentional AI Use

The app should preserve the flexibility of the GPT while replacing a primarily conversational experience with a structured, visible course-design workspace. Faculty should be able to either work through a guided course-design pathway or enter through a focused quick tool.

The app should reduce unnecessary workload, keep faculty in control of decisions, make assumptions visible, and ground AI-generated guidance in the project knowledge base.

---

## 2. Core product principles

### 2.1 Faculty judgment stays primary
The application should recommend, explain, and draft, but not silently make pedagogical decisions. Suggestions must be editable, rejectable, and reversible.

### 2.2 Structure first; AI second
Use deterministic rules for tasks that can be made explicit and testable. Use AI where interpretation, synthesis, contextualization, or drafting adds value.

### 2.3 The app remembers the course
Course context, outcomes, assessments, activities, assignments, AI decisions, reflections, and alignment links should live in a structured course record rather than relying on conversational memory.

### 2.4 Progressive disclosure
Ask only what is needed for the next useful result. Preserve the Activity Builder's successful recommendation-first pattern: essentials first, deeper customization when requested.

### 2.5 Provenance is visible
Extend the Activity Builder's existing “Content Sources Used” concept across the entire application. Faculty should be able to see what came from:
- faculty-provided information,
- deterministic rules/defaults,
- activity templates,
- project knowledge files,
- AI-generated interpretation,
- optional external sources.

### 2.6 No meaningless teaching-quality score
The dashboard may show reviewed / aligned / needs attention / faculty decision needed, but it should not reduce course quality to a single numeric score.

### 2.7 Privacy by design
Do not request identifiable student information. Course and assignment files should be treated as faculty materials. The application should state clearly what is uploaded, stored, and sent to AI services.

---

## 3. MVP user pathways

The landing page should offer two primary routes.

### A. Guided Course Design
For faculty creating or substantially revising a course.

Suggested sequence:

**Course Setup → Course Purpose & Context → SLOs → Assessments → Alignment → Learning Activities → Assignment Design → Intentional AI Review → Course Dashboard → Export**

Faculty may move backward or revisit completed sections at any time.

### B. Quick Tools
For faculty who need help with one element without completing the full pathway.

MVP quick tools:
- Review or create SLOs
- Check outcome–assessment alignment
- Find a learning activity
- Create or revise an assignment
- TiLT an assignment
- Review an assignment for AI-era design
- Draft/review a course AI policy

Quick Tool work can optionally be saved into an existing course record.

---

## 4. Screen-by-screen functional specification

## Screen 0 — Landing / Home

### Purpose
Give faculty an immediate, low-friction choice between full course design and focused help.

### Primary actions
- **Design or Review a Course**
- **Use a Quick Tool**
- **Resume a Saved Course**

### Secondary actions
- About the Next Generation Teaching Model
- Privacy / prototype information
- Center for Teaching & Learning link

### MVP notes
Do not require faculty to understand AI prompting. The interface should describe tasks in pedagogical language.

---

## Screen 1 — Course Setup

### Purpose
Create the structured course record and reduce re-entry of information.

### Faculty can
- Start with a blank course
- Upload an existing syllabus
- Paste course information

### Minimum fields
- Course title/code
- Course level
- Modality: in-person / hybrid / synchronous online / asynchronous online
- Approximate enrollment
- Course description or topic

### Optional fields
- Program/discipline
- Required/elective
- Course position in curriculum
- Accreditation or external constraints
- Major faculty concerns/priorities

### AI role
If a syllabus is uploaded, AI may extract likely course metadata, current SLOs, major assessments, grading structure, and AI policy for faculty confirmation.

### Rule-based role
- Validate required fields
- Never overwrite faculty-entered values
- Label extracted or inferred values as suggestions until confirmed

---

## Screen 2 — Course Purpose & Aspirational Goals

### Purpose
Capture the larger “why” before writing measurable outcomes.

### Prompt areas
- Why does this course matter in the field?
- What should students still know, value, or be able to do years later?
- What intellectual, dispositional, and practical growth matters most?
- What do students bring to this course, and what barriers/constraints should design account for?

### Output
A concise **Course Design Intent** summary that remains visible throughout the workflow.

### AI role
Synthesize faculty responses into an editable summary; suggest possible aspirational goals without converting them automatically into SLOs.

---

## Screen 3 — SLO Studio

### Purpose
Create or review student learning outcomes.

### Entry options
- Import current SLOs from syllabus
- Paste existing SLOs
- Create new SLOs from aspirational goals/course context

### Evaluation dimensions
Each outcome should be reviewed for:
- Student-centered
- Measurable/observable
- Inclusive
- Higher order / portable where appropriate

### Interface behavior
For each SLO show:
- Original text
- Dimension-by-dimension status
- Short rationale
- Suggested revision
- Bloom/cognitive level indication
- **Accept / Edit / Keep Original / Remove**

### Rule-based role
- Detect obvious non-observable verbs and structural issues
- Validate outcome format
- Track whether each outcome is confirmed by faculty

### AI role
- Interpret disciplinary intent
- Suggest substantive revisions
- Generate new outcome options
- Explain tradeoffs rather than merely rewriting

### Reflection checkpoint
Optional prompt after outcomes are confirmed. Response or skip is logged.

---

## Screen 4 — Assessment Studio

### Purpose
Identify the evidence that would demonstrate each confirmed outcome.

### Faculty can
- Import assessments from syllabus
- Add assessments manually
- Ask for assessment ideas
- Mark formative vs. summative
- Mark individual vs. collaborative
- Mark authentic/performance-based where relevant

### Suggested review dimensions
- Outcome alignment
- Evidence of learning
- Authenticity/professional relevance
- Formative opportunities / feedback loops
- Accessibility/flexibility
- Process visibility
- Student agency/choice
- AI-era design considerations

### AI role
Recommend assessment options and analyze whether current assessments actually produce evidence for the stated outcomes.

### Rule-based role
Track links between outcomes and assessments and identify unlinked outcomes or assessments.

---

## Screen 5 — Alignment Map

### Purpose
Make backward design visible.

### Primary view
A matrix or card-based map linking:

**SLO → Assessment Evidence → Learning Activities**

### Flags
- Outcome has no direct assessment
- Assessment is not linked to an outcome
- Outcome requests higher-order performance but assessment evidence appears lower-order
- Outcome has assessment evidence but no practice/learning experience
- Activity is present but purpose is unclear

### Faculty actions
- Add/remove links
- Add a rationale
- Ask AI to review a specific alignment
- Mark an apparent mismatch as intentional

### Important design rule
Flags are prompts for review, not declarations that a course is “bad.”

---

## Screen 6 — Learning Activity Finder
### Integrated Active Learning Activity Builder

### Purpose
Use the existing Activity Builder as the learning-experience engine inside the Course Guide.

### Prepopulation from course record
When launched from an SLO or assessment, the finder should already know as much as possible:
- Desired SLO/intellectual action
- Learning stage
- Modality
- Class size
- Available time
- Faculty priorities
- Assessment context

Faculty can edit any prefilled filter.

### Recommendation engine
Preserve the existing deterministic scoring engine rather than replacing it with AI.

The migrated engine should continue to rank every activity rather than using hard exclusions, and should explain fit/mismatch/adaptation.

### Recommendation output
For each recommended activity show:
- Activity name and preview
- Why it fits this course/SLO
- Time
- Grouping
- Preparation/review burden
- Modality adaptations
- Fit rationale
- Potential limitations
- Transparency/TiLT readiness

### Headline recommendation pattern
Preserve the useful three-role presentation:
- Best overall fit
- Lowest-preparation strong option
- Most engaging strong option

### After faculty selects an activity
Offer:
- **Quick Build**
- **Guided Build**

The selected activity becomes part of the course record and is linked to the relevant SLO/assessment.

---

## Screen 7 — Activity / Assignment Builder

### Purpose
Turn the selected learning activity into something faculty can actually use.

### Entry modes
- Build instructions for the selected activity
- Revise an existing assignment/activity
- Build from source material

### Preserve from Activity Builder
- Smart defaults that never overwrite faculty choices
- Visible reasons for inferred defaults
- Quick Build / Guided Build
- Activity-specific templates
- Adaptations
- Faculty-facing plan
- Student-facing instructions
- Canvas/LMS-friendly copy

### Add in Course Guide
- Automatic linkage to course SLO(s)
- Automatic linkage to assessment(s)
- Course/discipline context passed to generation
- AI-enhanced wording and contextualization when requested

---

## Screen 8 — Transparent Design (TiLT) Review

### Purpose
Make Purpose, Task, and Criteria explicit and editable.

### Core sections
**Purpose**
- Why are students doing this?
- What course outcome/skill does it support?
- Why does it matter now or later?

**Task**
- Observable steps
- Materials/resources
- Grouping
- Product/submission
- Time/timeline

**Criteria**
- What does successful work look like?
- Checklist/rubric/self-check
- Examples/exemplars where appropriate

### Preserve from Activity Builder
- Quick / standard / extended TiLT detail levels
- Editable Purpose/Task/Criteria cards
- Deterministic completeness checks
- Regenerate from templates

### AI role
AI may improve clarity, student-friendly language, discipline specificity, examples, and coherence. AI should not replace the deterministic TiLT completeness layer.

### Output
Before/after view for revisions plus a TiLT checklist.

---

## Screen 9 — Intentional AI Review

### Purpose
Apply the Course Guide's Intentional AI Use pillar to the course or a specific assignment.

### Review dimensions
- What cognitive labor can current AI perform in this task?
- Which student thinking/skill must remain visible?
- Is the goal skill acquisition, thinking/application, production, or professional practice?
- Is process evidence visible?
- Does the task require judgment, evaluation, synthesis, values, local/personal context, or explanation?
- Are AI expectations transparent?
- Do criteria reward more than polished output?
- Is there an AI literacy opportunity?

### Decision framework
Present the project's **Resist / Reveal / Remix** framework as the decision layer. Definitions and examples should come from the project's approved content rather than being improvised by the model.

### Possible outputs
- Assignment-level AI-use statement
- Course AI policy draft
- Suggested redesign moves
- Suggested process-visibility checkpoints
- “Better-than-AI” rubric/criteria ideas
- AI-literacy learning opportunity

### Knowledge priority
The project's **Summary of Teaching with AI** remains the primary source for this engine.

---

## Screen 10 — Course Dashboard

### Purpose
Show progress, connections, and unresolved design questions.

### Suggested dashboard sections
- Course Design Intent
- SLOs
- Assessment alignment
- Learning activity coverage
- Transparent Design review
- Intentional AI review
- Reflection log
- Items needing faculty decision

### Status language
Use labels such as:
- Reviewed
- Aligned
- Possible gap
- Revision suggested
- Faculty decision needed
- Not yet reviewed

Avoid a single overall quality score.

---

## Screen 11 — Reflection Log

### Purpose
Preserve the reflective faculty-development dimension of the GPT.

### Behavior
At selected transition points, show one short optional prompt.

Example moments:
- After confirming SLOs
- After alignment review
- After redesigning an assignment
- After an intentional-AI decision

### Store
- Prompt
- Response
- Date/time
- Related course section
- Skipped status

### Export
Include as an optional appendix in the final course-design report.

---

## Screen 12 — Export / Course Design Report

### Modular exports
Faculty should be able to export only what they need:
- SLO review
- Alignment map
- Assessment review
- Activity plan
- Student-facing activity/assignment
- TiLT review
- AI policy
- Intentional AI review
- Reflection log

### Comprehensive export
A complete **Next Generation Course Design Guide** containing:
- Course context
- Design intent
- Confirmed SLOs
- Alignment map
- Assessments
- Selected learning activities
- Revised/created assignments
- AI decisions/policies
- Open issues
- Reflection log
- Sources/provenance

---

## 5. Quick Tools specification

Quick Tools should use the same engines and data structures as Guided Course Design; they are not separate mini-applications.

### Quick Tool: SLO Review
Minimum input: SLOs + optional course context.  
Output: dimension review, revisions, rationale, export/save-to-course.

### Quick Tool: Alignment Check
Minimum input: outcomes + assessments.  
Output: mapping, gaps, possible cognitive-level mismatches, save-to-course.

### Quick Tool: Find a Learning Activity
Uses the migrated Activity Builder recommendation engine.  
Can run standalone or receive context from an existing course.

### Quick Tool: Create/Revise Assignment
Entry: existing assignment or blank start.  
Output: aligned activity/assignment + TiLT + optional AI review.

### Quick Tool: TiLT an Assignment
Rule-based TiLT completeness check plus optional AI-enhanced rewrite.

### Quick Tool: AI-Era Assignment Review
Uses Intentional AI framework and primary AI knowledge source.

### Quick Tool: AI Policy Builder
Creates a transparent, pedagogically justified course policy linked to course goals.

---

## 6. Activity Builder migration plan

The existing Activity Builder should be treated as an existing subsystem, not replaced.

| Current module | MVP disposition | Notes |
|---|---|---|
| `activities.js` | **Reuse / migrate** | Core 79-activity data library becomes typed application data. |
| `recommend.js` | **Reuse / migrate** | Preserve deterministic scoring and explanations. |
| `benchmarks.js` | **Reuse as regression tests** | Existing 12 scenarios become migration acceptance tests. |
| `formOptions.js` | **Reuse / consolidate** | Shared option metadata. |
| `tiltTemplates.js` | **Reuse / migrate** | Preserve activity-specific TiLT templates. |
| `templateEnhancements.js` | **Reuse / migrate** | Preserve activity-specific facilitation/criteria enhancements. |
| `inference.js` | **Adapt** | Become shared smart-default service; preserve visible reasons and no-overwrite rule. |
| `tilt.js` | **Adapt** | Keep deterministic TiLT engine; expose as shared service. |
| `qualityCheck.js` | **Adapt/expand** | Become common quality/consistency validation layer. |
| `audit.js` | **Reuse for admin/dev mode** | Preserve template/library diagnostics. |
| `generate.js` | **Split** | Keep deterministic base generator; add optional server-side AI enhancement after generation. |
| `storage.js` | **Replace as primary storage** | Browser storage may remain as cache/recovery; course records move to database. |
| `importExport.js` | **Adapt** | Keep versioned export/import concepts; expand schema to course records. |
| current React components | **Reuse UX patterns selectively** | Rebuild in modern app shell rather than directly embedding the entire standalone UI. |
| current `app.js` routing/session | **Replace** | New app requires multi-course workspace and server-backed state. |

### Key migration acceptance criterion
For the same Activity Builder input, the migrated recommendation engine should return the same scoring/ranking results unless a deliberate recalibration is documented.

The existing benchmark suite should be run before and after migration. All existing benchmark scenarios should remain passing before new course-context criteria are introduced.

---

## 7. Rule-based vs. AI responsibilities

## Keep deterministic/rule-based
- Activity recommendation scoring/ranking
- Recommendation explanations derived from scoring
- Smart defaults and reasons
- Data validation
- Required-field checks
- Basic SLO structural checks
- Alignment presence/absence checks
- TiLT completeness/readiness
- Quality/logistics consistency checks
- Progress/status tracking
- Versioned import/export validation
- Activity Builder benchmark suite

## Use AI
- Syllabus/document extraction and summarization
- Disciplinary interpretation of SLOs
- Substantive SLO revision suggestions
- Assessment idea generation
- Contextualized alignment explanation
- Assignment/activity customization
- Student-friendly rewriting
- Intentional AI analysis
- AI policy drafting
- Better-than-AI criteria suggestions
- Narrative course-design summaries
- Reflection synthesis when requested

## Hybrid: deterministic first, AI second
- SLO review
- Assignment review
- TiLT review
- Alignment review
- AI-era assessment review

The deterministic layer should produce the visible checklist/flags. AI adds interpretation and drafting; it should not erase the underlying rule-based evidence.

---

## 8. Shared course data model

Conceptual MVP entities:

```text
Course
├── CourseContext
├── CourseFiles
├── DesignIntent / AspirationalGoals
├── SLOs
├── Assessments
├── Activities
├── Assignments
├── AlignmentLinks
├── AIUseDecisions
├── Reflections
├── SourceRecords / Provenance
└── Exports
```

### Course
- id
- owner/user id
- title
- code
- discipline/program
- level
- modality
- enrollment band
- description
- status
- created/updated dates

### SLO
- id
- course id
- original text
- current text
- status
- cognitive level
- review dimensions/statuses
- faculty-confirmed flag

### Assessment
- id
- course id
- title
- description
- formative/summative
- individual/collaborative
- assessment type
- AI-use decision

### ActivitySelection
- id
- course id
- Activity Builder activity id
- linked SLO id(s)
- linked assessment id(s)
- recommendation score/context snapshot
- faculty customizations
- generated activity package

### AlignmentLink
- id
- course id
- SLO id
- assessment id (optional)
- activity id (optional)
- rationale
- faculty-confirmed flag

### Assignment
- id
- course id
- linked assessment/activity
- original text
- revised text
- TiLT record
- AI review record

### AIUseDecision
- scope: course / assessment / assignment / activity
- framework choice
- rationale
- student-facing statement
- disclosure expectations

### Reflection
- id
- course id
- stage
- prompt
- response
- skipped
- created date

### SourceRecord
- object/action id
- faculty inputs used
- deterministic assumptions used
- templates used
- knowledge files retrieved
- AI generation metadata
- external sources, if any

---

## 9. Technical architecture recommendation

### Front end
**Next.js + React + TypeScript**

Reasons:
- easier migration of existing React concepts,
- shared client/server application,
- server-side protection of API keys,
- straightforward file uploads and exports,
- better long-term maintainability than CDN React + browser Babel.

### Application/server layer
Server-side API routes/actions for:
- AI calls
- file ingestion
- course persistence
- export generation
- authentication/authorization

### Database
Relational database (PostgreSQL or equivalent) for structured course records and alignment links.

### File storage
Object/file storage for faculty-uploaded syllabi/assignments, with explicit retention rules.

### AI
OpenAI **Responses API** for model requests and structured outputs.

### Knowledge retrieval
OpenAI vector store / `file_search` for the project's curated knowledge base. Keep project knowledge separate from individual faculty course files so provenance and access can be controlled cleanly.

Suggested retrieval priority:
1. User's current course/assignment materials
2. Project's approved core source(s), with **Summary of Teaching with AI first for AI topics**
3. Other project knowledge sources
4. Optional current external web information only when useful/allowed

### API key rule
The OpenAI API key must remain server-side. The new AI-enabled application cannot remain a GitHub Pages-only static site.

### Pilot authentication
For a controlled MVP, use either:
- lightweight invite/magic-link authentication, or
- pilot access code plus session identity.

NKU SSO can be evaluated for a production phase rather than blocking the MVP.

---

## 10. Provenance model

Extend the Activity Builder's current transparency model into a common “Sources & Assumptions” panel.

For every substantive AI-assisted result, record:

### Faculty-provided
- course fields
- pasted text
- uploaded files
- selected preferences

### Rule-based
- inferred values
- rule applied
- reason
- where the value affected output

### Template/data library
- activity record
- TiLT template level
- specific/family/generic fallback

### Knowledge retrieval
- source file title
- relevant excerpt/reference
- source priority

### AI-generated
- task performed by AI
- model family/version metadata as appropriate
- generated suggestion vs. faculty-confirmed text

### External web (optional)
- linked source
- date accessed
- what claim/recommendation it supported

Student-facing exports should exclude internal provenance unless faculty intentionally include it.

---

## 11. Privacy and safety requirements

MVP should:
- explicitly tell faculty not to upload identifiable student work or FERPA-protected information,
- avoid collecting student rosters or grades,
- keep API credentials server-side,
- explain whether uploaded files are stored and for how long,
- allow faculty to delete course files and course records,
- distinguish between app storage and AI-service processing,
- provide clear labels when content was generated or inferred by AI,
- never present AI output as an authoritative policy statement unless tied to an approved institutional source.

---

## 12. MVP scope

### In scope
- Guided Course Design pathway
- Quick Tools pathway
- Course record
- PDF/DOCX/text syllabus/assignment upload
- SLO create/review
- Assessment entry/review
- Alignment map
- Integrated Activity Builder recommendation engine
- Quick Build / Guided Build activity workflow
- TiLT review/editing
- Intentional AI review
- Course AI policy drafting
- Reflection log
- Sources/assumptions provenance
- Save/resume
- Modular + comprehensive export
- Developer benchmark/regression tools for Activity Builder migration

### Explicitly out of scope for MVP
- LMS write-back/integration
- NKU SSO
- department/program analytics
- multi-user collaborative editing
- student-facing tutoring bots
- institution-wide course inventory
- curriculum mapping across programs
- complex administrator permissions
- automatic policy enforcement
- unrestricted public AI access

---

## 13. MVP acceptance criteria

The MVP is ready for faculty pilot when all of the following are true:

1. Faculty can create a course or use a Quick Tool without a ChatGPT account.
2. Faculty can upload an existing syllabus/assignment and confirm extracted information.
3. SLO Studio reviews outcomes using the project's four established dimensions and preserves faculty choice.
4. Alignment Map visibly links SLOs, assessments, and learning activities and flags obvious gaps.
5. Activity Finder reproduces the existing Activity Builder scoring behavior for equivalent inputs.
6. Existing Activity Builder benchmark scenarios pass after migration.
7. Faculty can select an activity and use Quick Build or Guided Build.
8. Activity/assignment output includes editable TiLT Purpose, Task, and Criteria.
9. Intentional AI review uses the approved project AI framework and prioritizes the primary AI knowledge source.
10. Faculty can see Sources & Assumptions for AI-assisted and rule-based outputs.
11. Faculty can save/resume work and export useful artifacts.
12. No OpenAI API key or privileged service credential is exposed in browser code.
13. The app does not require or request identifiable student data.
14. Faculty can delete their saved course/file records.
15. A pilot participant can complete one real course-design task without developer assistance.

---

## 14. Recommended implementation sequence

### Phase 0 — Freeze and regression baseline
- Tag/freeze the current Activity Builder pilot version.
- Record current benchmark results.
- Export activity library and configuration snapshots.

### Phase 1 — New application shell + shared course record
- Create Next.js/TypeScript app.
- Implement home, course setup, save/resume, course dashboard shell.
- Define database schema and versioned export schema.

### Phase 2 — Migrate Activity Builder engine
- Migrate activity library and recommendation engine.
- Migrate smart defaults, templates, TiLT engine, and quality checks.
- Port benchmark suite and verify equivalent results.
- Integrate Activity Finder into course workspace and Quick Tools.

### Phase 3 — Add AI and knowledge retrieval
- Add server-side OpenAI integration.
- Build project vector store.
- Add syllabus extraction.
- Add SLO Studio AI assistance.
- Add assignment/TiLT AI enhancement.
- Add Intentional AI review and policy builder.
- Add provenance capture for retrieval and AI generation.

### Phase 4 — Alignment, exports, reflection
- Complete assessment/alignment workflow.
- Add Reflection Log.
- Add modular/comprehensive exports.
- Add Sources & Assumptions display.

### Phase 5 — Faculty pilot
- Recruit a small cross-disciplinary pilot group.
- Have participants use real courses/assignments.
- Capture workflow friction, recommendation quality, AI usefulness, trust/provenance reactions, and time saved.
- Convert Activity Finder misses into benchmark cases before recalibrating recommendation weights.

---

## 15. Decisions already made by this specification

1. The Course Guide will be a standalone web app, not merely a hosted chatbot.
2. It will support both Guided Course Design and Quick Tools.
3. The existing Activity Builder becomes the Active Learning / Learning Experience subsystem.
4. Activity recommendations remain deterministic and explainable.
5. AI enhances interpretation and drafting rather than replacing the recommendation/scoring engine.
6. TiLT retains a deterministic completeness layer even when AI assists with rewriting.
7. The app stores a structured course record rather than relying on conversational memory.
8. Provenance and assumptions are first-class features.
9. The primary AI source hierarchy from the Course Guide is preserved.
10. The new AI-enabled app requires a server-side layer; GitHub Pages alone is not the target production architecture.

---

## 16. Questions to resolve before coding Phase 1

These are product decisions, not blockers for the current specification:

1. **Pilot audience:** NKU faculty only, or external faculty too?
2. **Pilot persistence:** login/magic link, or invite code + browser session/export?
3. **Branding:** strongly NKU-branded pilot, or a more portable Next Generation Teaching brand?
4. **Course ownership:** one faculty member per course in MVP, or shareable course workspaces?
5. **File retention:** keep uploaded course files until faculty delete them, or expire them after a defined period?
6. **Exports:** which format is essential first—DOCX, PDF, Markdown, or all three?
7. **External web sources:** include in MVP, or keep the pilot grounded only in the approved knowledge base plus user materials?

---

## 17. Recommended immediate next build task

Before adding any AI, build a thin vertical slice that proves the architecture:

**Create Course → Add/confirm one SLO → Add one assessment → Find an Activity using the migrated Activity Builder → Save the selected activity into the course → Display the three-way alignment on the dashboard.**

This slice tests the most important architectural decision: whether the existing deterministic Activity Builder can operate cleanly inside a persistent course-design record. Once that works, SLO/assignment AI assistance can be layered on without redesigning the foundation.

