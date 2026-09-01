export type CourseLevel = "intro-ug" | "adv-ug" | "grad" | "professional" | "other";
export type Modality = "in-person" | "sync-online" | "async-online" | "hybrid";
export type ClassSize = "small" | "medium" | "large";

export type CourseRecord = {
  id: string;
  title: string;
  code: string;
  discipline: string;
  level: CourseLevel;
  modality: Modality;
  enrollment: number | null;
  description: string;
  designIntent: string;
  aspirationalGoals: string[];
  slos: SLO[];
  assessments: Assessment[];
  activities: ActivitySelection[];
  assignments: Assignment[];
  aiDecisions: AIUseDecision[];
  reflections: Reflection[];
  sources: SourceRecord[];
  materials: FacultyMaterial[];
  externalAIFeedback?: ExternalAIFeedback[];
  outcomeDesignDecisions?: OutcomeDesignDecision[];
  assessmentDesignDecisions?: AssessmentDesignDecision[];
  practiceTarget?: { sloId?: string; assessmentId?: string; setAt: string };
  learningExperienceDesignDecisions?: LearningExperienceDesignDecision[];
  courseReviewReflections?: CourseReviewReflection[];
  createdAt: string;
  updatedAt: string;
};

export type SLO = {
  id: string;
  statement: string;
  bloomLevel: "remember" | "understand" | "apply" | "analyze" | "evaluate" | "create";
  confirmed: boolean;
  originalStatement?: string;
  facultyDecision?: "accepted" | "kept-original" | "needs-revision";
  reviewHistory?: SloReviewHistoryEntry[];
};

export type SloReviewStatus = "strong" | "review-suggested" | "needs-faculty-consideration";
export type KnowledgeSourceReference = { filename: string; fileId?: string; score?: number; category?: string };
export type AiSloReviewRecord = {
  originalSlo: string;
  overallSummary: string;
  dimensions: Array<{ dimension: "student-centered" | "measurable" | "inclusive" | "higher-order"; status: SloReviewStatus; rationale: string }>;
  likelyCognitiveLevel: { level: SLO["bloomLevel"] | "unclear"; rationale: string };
  vagueOrNonobservableWording: string[];
  portabilityAndTransfer: { status: SloReviewStatus; rationale: string };
  courseContextConsideration: string;
  strengths: string[];
  considerations: string[];
  suggestedRevision: string;
  revisionExplanation: string;
  sources: KnowledgeSourceReference[];
  assumptions: string[];
};
export type SloReviewHistoryEntry = { id: string; reviewedAt: string; review: AiSloReviewRecord; decision: "accepted-revision" | "edited-revision" | "kept-original"; finalStatement: string; decidedAt: string };

export type Assessment = {
  id: string;
  title: string;
  type: "formative" | "summative";
  evidence: string;
  linkedSloIds: string[];
  cognitiveLevel?: SLO["bloomLevel"];
  learningRole?: "formative" | "summative" | "both" | "unsure";
  description?: string;
  weight?: number | null;
};

export type ActivitySelection = {
  id: string;
  activityId: string;
  activityName: string;
  linkedSloIds: string[];
  linkedAssessmentIds: string[];
  recommendationPct: number;
  recommendationRole: string;
  rationale: string[];
  notes?: string;
  cognitiveLevel?: SLO["bloomLevel"];
  assumptions?: Assumption[];
  package?: ActivityPackage;
};

export type ActivityPackage = {
  mode: "quick" | "guided";
  title: string;
  grouping: string;
  grading: "ungraded" | "completion" | "graded";
  feedback: "whole-class" | "brief" | "peer";
  tilt: TiltSection;
  instructorNotes: string[];
  assumptions: Assumption[];
};

export type TiltSection = { purpose: string[]; task: string[]; criteria: string[]; level: "quick" | "standard" | "extended" };

export type Assignment = {
  id: string;
  title: string;
  originalText: string;
  revisedText: string;
  linkedSloIds: string[];
  linkedAssessmentIds: string[];
  tilt: TiltSection;
  reviewStatus: "not-reviewed" | "reviewed" | "revision-suggested";
  linkedActivityIds?: string[];
  sourceMaterialId?: string;
  workingText?: string;
  standardReview?: AssignmentReview;
  createdAt?: string;
  updatedAt?: string;
  facultyDecisions?: string[];
};
export type AssignmentReview = { reviewedAt: string; findings: Array<{ area: "Structure" | "Alignment" | "Student clarity"; status: "looks-clear" | "review-suggested" | "information-not-found" | "faculty-decision-needed"; detail: string }> };

export type AIUseDecision = {
  id: string;
  scope: "course" | "assessment" | "assignment" | "activity";
  framework: "resist" | "reveal" | "remix";
  rationale: string;
  studentFacingStatement: string;
  linkedAssignmentId?: string;
};

export type Reflection = { id: string; stage: string; prompt: string; response: string; skipped: boolean; createdAt: string };
export type ExternalAIFeedback = { id: string; task: "course-review" | "outcomes" | "alignment" | "active-learning" | "transparent-design" | "ai-assignment" | "ai-policy"; response: string; provider?: string; createdAt: string; assignmentId?: string; sloIds?: string[] };
export type OutcomeDesignDecision = { id: string; sloId: string; pattern: "measurable" | "higher-order" | "transfer" | "access" | "help-decide"; originalStatement: string; guidance: string; revisedStatement: string; createdAt: string; source: "curated-design-intelligence" | "faculty-edit" };
export type AssessmentDesignDecision = { id: string; assessmentId: string; linkedSloIds: string[]; pattern: "authentic" | "checkpoints" | "visible-thinking" | "transparency" | "choice" | "peer-self" | "ai-era" | "help-decide"; selectedMoves: string[]; originalSnapshot: { title: string; description: string; type: Assessment["type"] }; designDraft: string; createdAt: string; source: "curated-design-intelligence" | "faculty-edit" };
export type LearningExperienceDesignDecision = { id: string; sloId?: string; assessmentId?: string; practiceNeed: string; activityId: string; activityName: string; selectedApproach: string; customization: { time: string; grouping: string; feedback: string }; design: { purpose: string; studentTask: string[]; facilitation: string[]; product: string; variations: string[]; assumptions: string[] }; approvedAt: string; source: "curated-learning-experience-library" | "faculty-edit" };
export type CourseReviewResponse = "looks-good" | "revisit" | "unsure" | "not-applicable";
export type CourseReviewReflection = { id: string; categoryId: string; criterionId: string; response: CourseReviewResponse; notes?: string; actionId?: string; createdAt: string; source: "course-self-review-codepen" };
export type Assumption = { what: string; why: string; where: string };
export type SourceRecord = {
  id: string;
  scope: string;
  facultyInputs: string[];
  assumptions: Assumption[];
  template?: string;
  knowledgeSources: string[];
  aiGenerated: boolean;
  informationNotUsed: string[];
};

export type FacultyMaterial = {
  id: string;
  scope: "course" | "assignment";
  filename: string;
  mimeType: string;
  status: "extracted" | "failed";
  extractedText: string;
  characterCount: number;
  message: string;
  uploadedAt: string;
};

export type Activity = {
  id: string;
  name: string;
  family: string;
  origin?: string;
  shortDescription: string;
  purposes: string[];
  intellectualActions: string[];
  learningStages: string[];
  modalities: string[];
  classSizes: string[];
  timeOptions: string[];
  groupingOptions: string[];
  preparationLevel: string;
  reviewBurden: string;
  responseFormats: string[];
  evidenceProduced?: string;
  facultyPriorities: string[];
  sourceTypeCompatibility: string[];
  techNeeds: string[];
  bestFor?: string;
  limitations: string;
  accessibilityNotes: string;
  aiConsiderations: string;
  adaptations: Record<string, string>;
  sourceLinks: Array<{ label: string; url: string }>;
  templateData: null | {
    studentSteps?: string[];
    debrief?: string[];
    product?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export type RecommendationAnswers = {
  goal: {
    purpose?: string;
    actionPrimary?: string;
    actionSecondary?: string[];
    stage?: string;
  };
  context: {
    format?: string;
    time?: string;
    grouping?: string;
    classSize?: string;
    priorities?: string[];
    review?: string;
    tech?: string[];
  };
  sourceType?: string;
  redesignMoves?: string[];
};

export type ScoreBreakdown = {
  criterion: string;
  label: string;
  points: number;
  max: number;
  kind: "match" | "partial" | "miss" | "neutral" | "bonus";
  note: string;
};

export type RecommendationResult = {
  activity: Activity;
  score: number;
  maxPossible: number;
  pct: number;
  category: string;
  reasons: string[];
  mismatches: Array<{ issue: string; adaptation: string }>;
  breakdown: ScoreBreakdown[];
  rank?: number;
  role?: string;
};
