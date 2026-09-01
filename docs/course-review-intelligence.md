# Course Review Intelligence — Phase 1

## Source framework

The review framework is adapted from the [Faculty Course Self-Review Tool](https://codepen.io/Denice-Robertson/full/PwZvXRm), which identifies its framing as Quality Matters (QM) and OSCQR. Its categories are represented as structured data in `src/data/courseReviewLibrary.ts`: Syllabus; Course Objectives Alignment; Navigation; Student Support Services and Assistance; Academic Honesty; Course Materials; Teacher Presence and RSI; Activities; Grading Policy; Accessibility; AI-Resistant Assessment Design; and Overall Course Design.

## Evidence model

Course Review labels each criterion as document-supported, partially-supported, faculty-reflection, or course/LMS review. It reports only explicit CourseRecord relationships, uploaded-material parsing results that a faculty member has accepted, and saved Course Design Partner decisions. It never converts absent syllabus evidence into a negative finding. Live-course concerns such as captions, navigation, links, and instructor presence explicitly state that more evidence is needed.

## Faculty reflection and persistence

The original Achieved / Minor Revision / Major Revision / Not Applicable ratings are adapted to Looks good / I’d like to revisit this / I’m not sure / Not applicable. “I’m not sure” reveals the framework’s guided questions. Responses are append-only `courseReviewReflections` in the local `CourseRecord`; the latest response is displayed after refresh and Continue a Course. Review responses are focus prompts, not Course Design Story achievements.

## Design-action routing

Phase 1 routes focus areas into existing tools: Outcomes, Assessments, Learning Experiences, Alignment, Transparent Design, Intentional AI, and Design Story. It does not duplicate any design engine. Priority categories are Course Objectives & Alignment, Activities & Learning Experiences, Grading & Assessment Design, AI-Aware Assessment Design, and Overall Course Design. Other source categories remain available as guided reflection.

## AI-aware adaptation

The source category is renamed **AI-Aware Assessment Design**. Its useful concepts—process evidence, metacognition, course-specific application, multimodal/performance work, scaffolding, low-stakes practice, and AI literacy—are retained. “AI-resistant” is reframed as deciding when AI supports intended learning and when it interferes with necessary student thinking. The source criterion about AI detection/prevention language is intentionally not carried forward as a design target; it is inconsistent with this learning-centered approach.

## Deferred work

Phase 1 does not scan LMS shells, accessibility, captions, links, instructor presence, or support resources; it does not use AI, score courses, or automate a whole-course redesign. Future work can add richer source signals, additional criterion detail, optional notes, institutional policy context, and secure server-side persistence without changing the library architecture.
