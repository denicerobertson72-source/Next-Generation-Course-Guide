"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { OPTIONS, label } from "@/src/data/options";
import { enrollmentToClassSize, inferActivityGoalFromSlo } from "@/src/lib/infer";
import { recommendActivities } from "@/src/lib/recommend";
import { clearCourse, loadCourse, saveCourse } from "@/src/lib/storage";
import { createBlankCourse } from "@/src/lib/course";
import { activitySourceRecord } from "@/src/lib/provenance";
import AssignmentStudio from "@/src/components/AssignmentStudio";
import CourseDashboard from "@/src/components/CourseDashboard";
import QuickTools from "@/src/components/QuickTools";
import IntentionalAiStudio from "@/src/components/IntentionalAiStudio";
import ActivityPackageStudio from "@/src/components/ActivityPackageStudio";
import SloReviewStudio from "@/src/components/SloReviewStudio";
import CourseDesignWorkspace from "@/src/components/CourseDesignWorkspace";
import CourseDesignStory from "@/src/components/CourseDesignStory";
import type { ActivitySelection, Assessment, CourseRecord, RecommendationAnswers, SLO } from "@/src/types/course";

const uid = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2, 9)}`;

const blankCourse = (): CourseRecord => createBlankCourse(uid("course"));

const steps = ["Course", "SLO", "Assessment", "Activity", "Alignment"] as const;

export default function CourseGuidePrototype() {
  const [course, setCourse] = useState<CourseRecord>(blankCourse);
  const [step, setStep] = useState(0);
  const [view, setView] = useState<"landing" | "workspace" | "dashboard" | "context" | "outcomes" | "assessments" | "activities" | "alignment" | "story" | "activity-package" | "assignments" | "ai" | "quick-tools" | "slo-review">("landing");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = loadCourse();
    if (saved) setCourse(saved);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    saveCourse({ ...course, updatedAt: new Date().toISOString() });
  }, [course, loaded]);

  const confirmedSlo = course.slos.find((slo) => slo.confirmed) ?? course.slos[0];
  const linkedAssessment = course.assessments.find((assessment) => confirmedSlo && assessment.linkedSloIds.includes(confirmedSlo.id)) ?? course.assessments[0];
  const selectedActivity = course.activities.find((activity) => confirmedSlo && activity.linkedSloIds.includes(confirmedSlo.id)) ?? course.activities[0];

  const reset = () => {
    clearCourse();
    setCourse(blankCourse());
    setStep(0);
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <div className="eyebrow">NKU · CETI</div>
          <h1>Next Generation Course Guide</h1>
          <p>Design courses where outcomes, assessment, and learning work together.</p>
        </div>
        <div className="header-actions"><button className="secondary-button" onClick={() => setView("context")}>Guide me through course design</button><button className="ghost-button" onClick={() => setView("dashboard")}>Course dashboard</button><button className="ghost-button" onClick={reset}>Start over</button></div>
      </header>

      {view === "landing" ? <Landing hasWork={Boolean(course.title || course.materials.length || course.assignments.length)} onChoose={setView} /> : <><div className="app-layout">
      <nav className="app-nav" aria-label="Course Guide sections"><span className="nav-label">Course workspace</span><button className={view === "dashboard" ? "nav-active" : ""} onClick={() => setView("dashboard")}>Dashboard</button><button className={view === "context" ? "nav-active" : ""} onClick={() => setView("context")}>Course context</button><button className={view === "outcomes" ? "nav-active" : ""} onClick={() => setView("outcomes")}>Outcomes</button><button className={view === "assessments" ? "nav-active" : ""} onClick={() => setView("assessments")}>Assessments</button><button className={view === "assignments" ? "nav-active" : ""} onClick={() => setView("assignments")}>Transparent design</button><button className={view === "activities" ? "nav-active" : ""} onClick={() => setView("activities")}>Learning experiences</button><button className={view === "alignment" ? "nav-active" : ""} onClick={() => setView("alignment")}>Alignment</button><button className={view === "story" ? "nav-active" : ""} onClick={() => setView("story")}>Design story</button><span className="nav-label nav-secondary">Tools</span><button className={view === "quick-tools" ? "nav-active" : ""} onClick={() => setView("quick-tools")}>Quick tools</button></nav>

      <div className="app-content">

      {view === "workspace" && <section className="progress-card" aria-label="Guided design steps">
        {steps.map((name, index) => (
          <button
            key={name}
            className={`step-button ${index === step ? "active" : ""} ${index < step ? "done" : ""}`}
            onClick={() => setStep(index)}
          >
            <span className="step-number">{index + 1}</span>
            <span>{name}</span>
          </button>
        ))}
      </section>}

      <section className="workspace-card">
        {view === "workspace" && <>{step === 0 && <CourseStep course={course} setCourse={setCourse} onNext={() => setStep(1)} />}{step === 1 && <SloStep course={course} setCourse={setCourse} onBack={() => setStep(0)} onNext={() => setStep(2)} />}{step === 2 && <AssessmentStep course={course} setCourse={setCourse} slo={confirmedSlo} onBack={() => setStep(1)} onNext={() => setStep(3)} />}{step === 3 && <ActivityStep course={course} setCourse={setCourse} slo={confirmedSlo} assessment={linkedAssessment} onBack={() => setStep(2)} onNext={() => setStep(4)} />}{step === 4 && <AlignmentStep course={course} slo={confirmedSlo} assessment={linkedAssessment} activity={selectedActivity} onBack={() => setStep(3)} />}</>}
        {view === "dashboard" && <CourseDashboard course={course} setCourse={setCourse} onContinue={(nextStep) => { setStep(nextStep); setView("workspace"); }} onNavigate={(section) => setView(section)} />}
        {["context", "outcomes", "assessments", "activities", "alignment"].includes(view) && <CourseDesignWorkspace course={course} setCourse={setCourse} section={view as "context" | "outcomes" | "assessments" | "activities" | "alignment"} onNavigate={(section) => setView(section)} />}
        {view === "activity-package" && <ActivityPackageStudio course={course} setCourse={setCourse} />}
        {view === "assignments" && <AssignmentStudio course={course} setCourse={setCourse} onFindActivity={() => setView("activities")} />}
        {view === "story" && <CourseDesignStory course={course} setCourse={setCourse} onNavigate={(next) => setView(next)} />}
        {view === "ai" && <IntentionalAiStudio course={course} setCourse={setCourse} />}
        {view === "quick-tools" && <QuickTools course={course} onOpenWorkspace={() => setView("dashboard")} />}
        {view === "slo-review" && <SloReviewStudio course={course} setCourse={setCourse} />}
      </section>

      <footer className="footer-note">
        <strong>Prototype note:</strong> this demo uses browser storage. Activity Builder scoring and Quick Build packages are deterministic; the optional AI review route stays server-side and is disabled until configured.
      </footer>
      </div>
      </div>
      </>}
    </main>
  );
}

function Landing({ hasWork, onChoose }: { hasWork: boolean; onChoose: (view: "dashboard" | "context" | "assignments") => void }) { return <section className="landing-panel"><div className="eyebrow gold">Start here</div><h2>What would you like help with?</h2><p>Bring the materials you already have. Course Guide will organize what it can before you decide what to revise.</p><div className="landing-options"><button onClick={() => onChoose("context")}><strong>Upload a syllabus</strong><span>Review an existing course.</span></button><button onClick={() => onChoose("assignments")}><strong>Upload an assignment</strong><span>Review or improve an assignment or assessment.</span></button><button onClick={() => onChoose("context")}><strong>Start without a document</strong><span>Brainstorm or design something new.</span></button>{hasWork && <button onClick={() => onChoose("dashboard")}><strong>Continue a course</strong><span>Return to your saved Course Review.</span></button>}</div></section>; }

function CourseStep({ course, setCourse, onNext }: { course: CourseRecord; setCourse: (course: CourseRecord) => void; onNext: () => void }) {
  const ready = course.title.trim().length > 1;
  return (
    <div>
      <SectionHeader kicker="Step 1" title="Create the course record" description="Start with only the information needed to make the next design decision useful." />
      <div className="form-grid two">
        <Field label="Course title">
          <input value={course.title} onChange={(e) => setCourse({ ...course, title: e.target.value })} placeholder="e.g., General Ecology" />
        </Field>
        <Field label="Course code">
          <input value={course.code} onChange={(e) => setCourse({ ...course, code: e.target.value })} placeholder="e.g., BIO 304" />
        </Field>
        <Field label="Discipline / program">
          <input value={course.discipline} onChange={(e) => setCourse({ ...course, discipline: e.target.value })} placeholder="e.g., Biological Sciences" />
        </Field>
        <Field label="Course level">
          <select value={course.level} onChange={(e) => setCourse({ ...course, level: e.target.value as CourseRecord["level"] })}>
            <option value="intro-ug">Introductory undergraduate</option>
            <option value="adv-ug">Advanced undergraduate</option>
            <option value="grad">Graduate</option>
            <option value="professional">Professional / continuing education</option>
            <option value="other">Other</option>
          </select>
        </Field>
        <Field label="Modality">
          <select value={course.modality} onChange={(e) => setCourse({ ...course, modality: e.target.value as CourseRecord["modality"] })}>
            {OPTIONS.MODALITIES.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </Field>
        <Field label="Approximate enrollment">
          <input type="number" min="1" value={course.enrollment ?? ""} onChange={(e) => setCourse({ ...course, enrollment: e.target.value ? Number(e.target.value) : null })} placeholder="e.g., 36" />
        </Field>
      </div>
      <Field label="Course description or topic">
        <textarea rows={4} value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value })} placeholder="A short description is enough for this prototype." />
      </Field>
      <NavActions onNext={onNext} nextDisabled={!ready} />
    </div>
  );
}

function SloStep({ course, setCourse, onBack, onNext }: { course: CourseRecord; setCourse: (course: CourseRecord) => void; onBack: () => void; onNext: () => void }) {
  const existing = course.slos[0];
  const [statement, setStatement] = useState(existing?.statement ?? "");
  const [bloomLevel, setBloomLevel] = useState<SLO["bloomLevel"]>(existing?.bloomLevel ?? "analyze");

  useEffect(() => {
    if (existing) {
      setStatement(existing.statement);
      setBloomLevel(existing.bloomLevel);
    }
  }, [existing]);

  const save = () => {
    if (!statement.trim()) return;
    const slo: SLO = existing
      ? { ...existing, statement: statement.trim(), bloomLevel, confirmed: true }
      : { id: uid("slo"), statement: statement.trim(), bloomLevel, confirmed: true };
    setCourse({ ...course, slos: [slo, ...course.slos.slice(1)] });
  };

  const ready = Boolean(existing?.confirmed) || Boolean(statement.trim());

  return (
    <div>
      <SectionHeader kicker="Step 2" title="Confirm one student learning outcome" description="For this vertical slice, one confirmed SLO is enough to test the full alignment architecture." />
      <div className="principle-strip">
        <span>Student-centered</span><span>Measurable</span><span>Inclusive</span><span>Higher-order where appropriate</span>
      </div>
      <Field label="Student learning outcome">
        <textarea rows={4} value={statement} onChange={(e) => setStatement(e.target.value)} placeholder="Students will evaluate competing explanations using disciplinary evidence." />
      </Field>
      <Field label="Primary cognitive level">
        <select value={bloomLevel} onChange={(e) => setBloomLevel(e.target.value as SLO["bloomLevel"])}>
          {(["remember", "understand", "apply", "analyze", "evaluate", "create"] as const).map((level) => (
            <option key={level} value={level}>{level[0].toUpperCase() + level.slice(1)}</option>
          ))}
        </select>
      </Field>
      <button className="secondary-button" onClick={save}>{existing ? "Update and confirm SLO" : "Save and confirm SLO"}</button>
      {existing?.confirmed && <SuccessNote title="Confirmed SLO" text={existing.statement} />}
      <NavActions onBack={onBack} onNext={() => { if (!existing?.confirmed) save(); setTimeout(onNext, 0); }} nextDisabled={!ready} />
    </div>
  );
}

function AssessmentStep({ course, setCourse, slo, onBack, onNext }: { course: CourseRecord; setCourse: (course: CourseRecord) => void; slo?: SLO; onBack: () => void; onNext: () => void }) {
  const existing = course.assessments[0];
  const [title, setTitle] = useState(existing?.title ?? "");
  const [type, setType] = useState<Assessment["type"]>(existing?.type ?? "formative");
  const [evidence, setEvidence] = useState(existing?.evidence ?? "");

  const save = () => {
    if (!title.trim() || !slo) return;
    const assessment: Assessment = existing
      ? { ...existing, title: title.trim(), type, evidence: evidence.trim(), linkedSloIds: [slo.id] }
      : { id: uid("assessment"), title: title.trim(), type, evidence: evidence.trim(), linkedSloIds: [slo.id] };
    setCourse({ ...course, assessments: [assessment, ...course.assessments.slice(1)] });
  };

  const ready = Boolean(slo && (existing || title.trim()));

  return (
    <div>
      <SectionHeader kicker="Step 3" title="Add assessment evidence" description="What will students produce or do that gives you credible evidence of this outcome?" />
      {slo && <ContextQuote label="Linked outcome" text={slo.statement} />}
      <div className="form-grid two">
        <Field label="Assessment / evidence title">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Evidence-based case analysis" />
        </Field>
        <Field label="Assessment role">
          <select value={type} onChange={(e) => setType(e.target.value as Assessment["type"])}>
            <option value="formative">Formative</option>
            <option value="summative">Summative</option>
          </select>
        </Field>
      </div>
      <Field label="What evidence will this produce?">
        <textarea rows={3} value={evidence} onChange={(e) => setEvidence(e.target.value)} placeholder="Students compare evidence, make a claim, and justify the claim using disciplinary criteria." />
      </Field>
      <button className="secondary-button" onClick={save} disabled={!slo}>{existing ? "Update assessment" : "Save assessment"}</button>
      {existing && <SuccessNote title="Assessment linked" text={`${existing.title} → ${slo?.statement ?? "SLO"}`} />}
      <NavActions onBack={onBack} onNext={() => { if (!existing) save(); setTimeout(onNext, 0); }} nextDisabled={!ready} />
    </div>
  );
}

function ActivityStep({ course, setCourse, slo, assessment, onBack, onNext }: { course: CourseRecord; setCourse: (course: CourseRecord) => void; slo?: SLO; assessment?: Assessment; onBack: () => void; onNext: () => void }) {
  const inferred = inferActivityGoalFromSlo(slo);
  const [purpose, setPurpose] = useState(inferred.purpose);
  const [action, setAction] = useState(inferred.actionPrimary);
  const [stage, setStage] = useState("guided-practice");
  const [time, setTime] = useState("t15");
  const [grouping, setGrouping] = useState("flexible");
  const [priorities, setPriorities] = useState<string[]>(["evidence", "low-prep"]);

  useEffect(() => {
    setPurpose(inferred.purpose);
    setAction(inferred.actionPrimary);
  }, [slo?.id, inferred.purpose, inferred.actionPrimary]);

  const answers: RecommendationAnswers = useMemo(() => ({
    goal: { purpose, actionPrimary: action, actionSecondary: [], stage },
    context: {
      format: course.modality,
      time,
      grouping,
      classSize: enrollmentToClassSize(course.enrollment),
      priorities,
      tech: []
    }
  }), [purpose, action, stage, course.modality, course.enrollment, time, grouping, priorities]);

  const recommendations = useMemo(() => recommendActivities(answers), [answers]);

  const togglePriority = (priority: string) => {
    setPriorities((current) => current.includes(priority) ? current.filter((item) => item !== priority) : current.length >= 2 ? current : [...current, priority]);
  };

  const chooseActivity = (result: (typeof recommendations.picks)[number]) => {
    if (!slo || !assessment) return;
    const selection: ActivitySelection = {
      id: uid("activity-selection"),
      activityId: result.activity.id,
      activityName: result.activity.name,
      linkedSloIds: [slo.id],
      linkedAssessmentIds: [assessment.id],
      recommendationPct: result.pct,
      recommendationRole: result.role ?? "Recommended activity",
      rationale: result.reasons
    };
    setCourse({ ...course, activities: [selection], sources: [...course.sources, activitySourceRecord(result.activity, result)] });
  };

  const selectedId = course.activities[0]?.activityId;

  return (
    <div>
      <SectionHeader kicker="Step 4" title="Find a learning activity" description="The existing Activity Builder logic is now operating inside the course record. Suggested goal settings are prefilled from the confirmed SLO and remain editable." />
      {slo && <ContextQuote label="Practice should prepare students for" text={slo.statement} />}
      <div className="form-grid three compact">
        <Field label="Learning purpose">
          <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            {OPTIONS.PURPOSES.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </Field>
        <Field label="Intellectual action">
          <select value={action} onChange={(e) => setAction(e.target.value)}>
            {OPTIONS.ACTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </Field>
        <Field label="Learning stage">
          <select value={stage} onChange={(e) => setStage(e.target.value)}>
            {OPTIONS.STAGES.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </Field>
        <Field label="Time available">
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            {OPTIONS.TIMES.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </Field>
        <Field label="Grouping preference">
          <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
            {OPTIONS.GROUPINGS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </Field>
        <Field label="Class-size band">
          <input disabled value={enrollmentToClassSize(course.enrollment) ? label("CLASS_SIZES", enrollmentToClassSize(course.enrollment)!) : "Not set"} />
        </Field>
      </div>

      <div className="priority-area">
        <div className="field-label">What matters most? Choose up to two.</div>
        <div className="chip-row">
          {OPTIONS.PRIORITIES.slice(0, 12).map((option) => (
            <button key={option.value} className={`chip ${priorities.includes(option.value) ? "selected" : ""}`} onClick={() => togglePriority(option.value)}>{option.label}</button>
          ))}
        </div>
      </div>

      <div className="recommendation-grid">
        {recommendations.picks.map((result) => (
          <article key={result.activity.id} className={`recommendation-card ${selectedId === result.activity.id ? "selected-card" : ""}`}>
            <div className="recommendation-role">{result.role}</div>
            <div className="fit-row"><span className="fit-score">{result.pct}% fit</span><span className="fit-category">{result.category}</span></div>
            <h3>{result.activity.name}</h3>
            <p>{result.activity.shortDescription}</p>
            <dl className="mini-facts">
              <div><dt>Time</dt><dd>{result.activity.timeOptions.map((t) => label("TIMES", t)).join(" / ")}</dd></div>
              <div><dt>Prep</dt><dd>{result.activity.preparationLevel}</dd></div>
              <div><dt>Review</dt><dd>{result.activity.reviewBurden}</dd></div>
            </dl>
            <ul className="reason-list">{result.reasons.slice(0, 3).map((reason) => <li key={reason}>{reason}</li>)}</ul>
            {result.mismatches[0] && <details><summary>Adaptation to consider</summary><p><strong>{result.mismatches[0].issue}</strong> {result.mismatches[0].adaptation}</p></details>}
            <button className={selectedId === result.activity.id ? "selected-button" : "primary-button"} onClick={() => chooseActivity(result)}>
              {selectedId === result.activity.id ? "Selected for course" : "Use this activity"}
            </button>
          </article>
        ))}
      </div>
      <NavActions onBack={onBack} onNext={onNext} nextDisabled={!selectedId} nextLabel="View alignment" />
    </div>
  );
}

function AlignmentStep({ course, slo, assessment, activity, onBack }: { course: CourseRecord; slo?: SLO; assessment?: Assessment; activity?: ActivitySelection; onBack: () => void }) {
  const complete = Boolean(slo && assessment && activity);
  return (
    <div>
      <SectionHeader kicker="Step 5" title="Three-way alignment" description="This is the architectural proof point: the course record now holds the outcome, evidence, and learning experience as connected objects." />
      <div className="alignment-flow">
        <AlignmentNode number="1" label="Student learning outcome" title={slo?.statement ?? "No SLO yet"} meta={slo ? `${slo.bloomLevel} level` : ""} />
        <div className="arrow" aria-hidden="true">→</div>
        <AlignmentNode number="2" label="Assessment evidence" title={assessment?.title ?? "No assessment yet"} meta={assessment?.evidence || assessment?.type || ""} />
        <div className="arrow" aria-hidden="true">→</div>
        <AlignmentNode number="3" label="Learning activity" title={activity?.activityName ?? "No activity yet"} meta={activity ? `${activity.recommendationPct}% recommendation fit` : ""} />
      </div>
      <div className={complete ? "status-panel success" : "status-panel warning"}>
        <strong>{complete ? "Aligned structure established" : "Possible gap"}</strong>
        <p>{complete ? "All three components are linked in the same course record. This is the foundation we can now extend with AI-assisted SLO review, assignment design, TiLT, intentional AI review, provenance, and exports." : "One or more components are missing. Return to an earlier step to complete the chain."}</p>
      </div>
      <div className="course-summary">
        <h3>{course.code ? `${course.code}: ` : ""}{course.title || "Untitled course"}</h3>
        <p>{label("MODALITIES", course.modality)} · {course.enrollment ? `${course.enrollment} students` : "Enrollment not set"}</p>
      </div>
      <NavActions onBack={onBack} />
    </div>
  );
}

function AlignmentNode({ number, label: nodeLabel, title, meta }: { number: string; label: string; title: string; meta: string }) {
  return <div className="alignment-node"><span className="node-number">{number}</span><div className="node-label">{nodeLabel}</div><strong>{title}</strong>{meta && <p>{meta}</p>}</div>;
}

function SectionHeader({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return <div className="section-header"><div className="eyebrow gold">{kicker}</div><h2>{title}</h2><p>{description}</p></div>;
}

function Field({ label: fieldLabel, children }: { label: string; children: ReactNode }) {
  return <label className="field"><span className="field-label">{fieldLabel}</span>{children}</label>;
}

function ContextQuote({ label: quoteLabel, text }: { label: string; text: string }) {
  return <div className="context-quote"><span>{quoteLabel}</span><p>{text}</p></div>;
}

function SuccessNote({ title, text }: { title: string; text: string }) {
  return <div className="success-note"><strong>{title}</strong><span>{text}</span></div>;
}

function NavActions({ onBack, onNext, nextDisabled, nextLabel = "Continue" }: { onBack?: () => void; onNext?: () => void; nextDisabled?: boolean; nextLabel?: string }) {
  return <div className="nav-actions">{onBack ? <button className="ghost-button" onClick={onBack}>Back</button> : <span />}{onNext && <button className="primary-button" onClick={onNext} disabled={nextDisabled}>{nextLabel}</button>}</div>;
}
