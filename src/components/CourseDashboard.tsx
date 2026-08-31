"use client";

import { useRef, useState } from "react";
import { findAlignmentIssues } from "@/src/lib/alignment";
import { reviewSloStructure, suggestedSloRevision } from "@/src/lib/sloReview";
import { courseDesignMarkdown, downloadMarkdown } from "@/src/lib/export";
import { downloadCourseJson, importCourseRecord } from "@/src/lib/importExport";
import FacultyMaterialUpload from "@/src/components/FacultyMaterialUpload";
import PromptHandoffPanel from "@/src/components/PromptHandoffPanel";
import { designStory, nextStep as chooseNextStep } from "@/src/lib/courseDesignStory";
import type { Assessment, CourseRecord, SLO } from "@/src/types/course";

const uid = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2, 9)}`;

export default function CourseDashboard({ course, setCourse, onContinue, onNavigate }: { course: CourseRecord; setCourse: (course: CourseRecord) => void; onContinue: (step: number) => void; onNavigate?: (section: "context" | "outcomes" | "assessments" | "activities" | "alignment" | "story") => void }) {
  const [sloText, setSloText] = useState("");
  const [assessmentTitle, setAssessmentTitle] = useState("");
  const [assessmentSlo, setAssessmentSlo] = useState("");
  const [reflection, setReflection] = useState("");
  const [importMessage, setImportMessage] = useState("");
  const importInput = useRef<HTMLInputElement>(null);
  const issues = findAlignmentIssues(course);
  const structuralNext = !course.title ? { text: "Start with the course purpose and context that will guide later decisions.", action: "Add course context", destination: "context" as const } : !course.slos.length ? { text: "Begin with what you want students to be able to do with their learning.", action: "Add your first learning outcome", destination: "outcomes" as const } : chooseNextStep(course);
  const story = designStory(course);
  const addSlo = () => { if (!sloText.trim()) return; setCourse({ ...course, slos: [...course.slos, { id: uid("slo"), statement: sloText.trim(), originalStatement: sloText.trim(), bloomLevel: "analyze", confirmed: false, facultyDecision: "needs-revision" }] }); setSloText(""); };
  const addAssessment = () => { if (!assessmentTitle.trim() || !assessmentSlo) return; const assessment: Assessment = { id: uid("assessment"), title: assessmentTitle.trim(), type: "formative", evidence: "", linkedSloIds: [assessmentSlo] }; setCourse({ ...course, assessments: [...course.assessments, assessment] }); setAssessmentTitle(""); };
  const addReflection = () => { setCourse({ ...course, reflections: [...course.reflections, { id: uid("reflection"), stage: "course-design", prompt: "What is the most important design decision you want to carry forward?", response: reflection.trim(), skipped: !reflection.trim(), createdAt: new Date().toISOString() }] }); setReflection(""); };
  return <div>
    <div className="section-header"><div className="eyebrow gold">Course design workspace</div><h2>Design from outcomes to evidence to learning experiences</h2><p>Use this shared course context to move through backward design. Course Review and recommendations remain available as supporting information—not a report card.</p></div>
    <section className="next-step" aria-labelledby="next-step-title"><div><div className="eyebrow gold">One possible next step</div><h3 id="next-step-title">{structuralNext.action}</h3><p>{structuralNext.text}</p></div><button className="primary-button" onClick={() => onNavigate ? onNavigate(structuralNext.destination) : onContinue(0)}>Continue</button></section>
    <section className="dashboard-grid" aria-label="Backward design workspace">
      <StatusCard label="Course context" value={course.title ? "In progress" : "Needs faculty decision"} action={() => onNavigate ? onNavigate("context") : onContinue(0)} />
      <StatusCard label="Learning outcomes" value={course.slos.length ? `${course.slos.length} outcomes` : "Not started"} action={() => onNavigate ? onNavigate("outcomes") : onContinue(1)} />
      <StatusCard label="Assessments" value={issues.some((issue) => issue.code === "outcome-without-assessment") ? "Opportunity to connect evidence" : course.assessments.length ? `${course.assessments.length} assessments` : "Not started"} action={() => onNavigate ? onNavigate("assessments") : onContinue(2)} />
      <StatusCard label="Active learning" value={course.activities.length ? `${course.activities.length} activities` : "Not started"} action={() => onNavigate ? onNavigate("activities") : onContinue(3)} />
      <StatusCard label="Alignment" value={issues.length ? `${issues.length} items to explore` : "Ready to explore"} action={() => onNavigate ? onNavigate("alignment") : onContinue(4)} />
      <StatusCard label="Design story" value={story.total ? `${story.total} decisions recorded` : "No decisions recorded yet"} action={() => onNavigate ? onNavigate("story") : onContinue(4)} />
      <StatusCard label="Transparent design" value={course.assignments.length ? "Reviewed" : "Not yet implemented"} action={() => onContinue(4)} />
      <StatusCard label="Intentional AI" value={course.aiDecisions.length ? "Faculty decision recorded" : "Not yet implemented"} action={() => onContinue(4)} />
    </section>
    <section className="dashboard-section"><h3>Course design intent</h3><label className="field"><span className="field-label">What should this course make possible for students?</span><textarea rows={3} value={course.designIntent} onChange={(event) => setCourse({ ...course, designIntent: event.target.value })} placeholder="An editable summary of the course's larger purpose." /></label></section>
    <section className="dashboard-section"><FacultyMaterialUpload course={course} setCourse={setCourse} scope="course" /></section>
    <section className="dashboard-section"><h3>Outcome workspace</h3><div className="inline-form"><input value={sloText} onChange={(event) => setSloText(event.target.value)} placeholder="Add an outcome without leaving the dashboard" /><button className="secondary-button" onClick={addSlo}>Add outcome</button></div>{course.slos.map((slo) => <SloRow key={slo.id} slo={slo} onUseSuggestion={() => setCourse({ ...course, slos: course.slos.map((item) => item.id === slo.id ? { ...item, statement: suggestedSloRevision(item.statement), facultyDecision: "accepted", confirmed: true } : item) })} />)}</section>
    <section className="dashboard-section"><h3>Assessment workspace</h3><div className="inline-form"><input value={assessmentTitle} onChange={(event) => setAssessmentTitle(event.target.value)} placeholder="Assessment title" /><select value={assessmentSlo} onChange={(event) => setAssessmentSlo(event.target.value)}><option value="">Link to an outcome</option>{course.slos.map((slo) => <option key={slo.id} value={slo.id}>{slo.statement}</option>)}</select><button className="secondary-button" onClick={addAssessment}>Add assessment</button></div><ul className="plain-list">{course.assessments.map((assessment) => <li key={assessment.id}><strong>{assessment.title}</strong> · {assessment.type}</li>)}</ul></section>
    <section className="dashboard-section"><h3>Alignment review</h3>{issues.length ? <ul className="issue-list">{issues.map((issue) => <li key={`${issue.code}-${issue.entityId}`}><strong>Possible gap:</strong> {issue.message}</li>)}</ul> : <p className="status-text">All stored outcomes, assessments, and activities are connected.</p>}</section>
    <section className="dashboard-section"><h3>Continue your review</h3><PromptHandoffPanel course={course} setCourse={setCourse} task="course-review" /></section>
    <section className="dashboard-section"><h3>Reflection log</h3><label className="field"><span className="field-label">What is the most important design decision you want to carry forward? (optional)</span><textarea rows={2} value={reflection} onChange={(event) => setReflection(event.target.value)} /></label><button className="ghost-button" onClick={addReflection}>{reflection.trim() ? "Save reflection" : "Skip and log"}</button><p className="status-text">{course.reflections.length} reflection{course.reflections.length === 1 ? "" : "s"} recorded.</p></section>
    <section className="dashboard-section"><h3>Sources & assumptions</h3>{course.sources.length ? <ul className="plain-list">{course.sources.map((source) => <li key={source.id}><strong>{source.scope}</strong> · {source.aiGenerated ? "AI-assisted" : "Rule-based or faculty-selected"} · {source.template ?? "No template"}</li>)}</ul> : <p className="status-text">No substantive source records yet.</p>}<div className="button-row"><button className="secondary-button" onClick={() => downloadMarkdown(`${(course.code || course.title || "course-design").replaceAll(" ", "-").toLowerCase()}.md`, courseDesignMarkdown(course))}>Download course design summary</button><button className="ghost-button" onClick={() => downloadCourseJson(course)}>Export course data</button><input ref={importInput} className="sr-only" type="file" accept="application/json" onChange={async (event) => { const file = event.target.files?.[0]; if (!file) return; const result = importCourseRecord(await file.text()); if (result.course) { setCourse(result.course); setImportMessage("Course imported. Review its content before continuing."); } else setImportMessage(result.error ?? "Import could not be completed."); event.target.value = ""; }} /><button className="ghost-button" onClick={() => importInput.current?.click()}>Import course data</button></div>{importMessage && <p className="status-text" aria-live="polite">{importMessage}</p>}</section>
  </div>;
}

function StatusCard({ label, value, action }: { label: string; value: string; action: () => void }) { return <button className="status-card" onClick={action}><span className="status-card-label">{label}</span><strong><span aria-hidden="true">● </span>{value}</strong><small>Open workspace <span aria-hidden="true">→</span></small></button>; }
function SloRow({ slo, onUseSuggestion }: { slo: SLO; onUseSuggestion: () => void }) { const checks = reviewSloStructure(slo); return <article className="slo-row"><p><strong>{slo.statement}</strong></p><div className="check-row">{checks.map((check) => <span key={check.dimension} className={check.status === "meets" ? "check okay" : "check review"}>{check.dimension.replaceAll("-", " ")}: {check.status === "meets" ? "reviewed" : "consider"}</span>)}</div><button className="ghost-button small-button" onClick={onUseSuggestion}>Use editable structural suggestion</button></article>; }
