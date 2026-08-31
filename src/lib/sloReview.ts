import type { SLO } from "@/src/types/course";

export type SloDimension = "student-centered" | "measurable" | "inclusive" | "higher-order";
export type SloReview = { dimension: SloDimension; status: "meets" | "review"; rationale: string };

const OBSERVABLE = /\b(analyze|apply|calculate|compare|create|critique|define|design|develop|evaluate|explain|identify|interpret|justify|model|perform|recommend|solve|write)\b/i;
const VAGUE = /\b(understand|learn|know|appreciate|be familiar with)\b/i;
const STUDENT = /^students?\b/i;

/** Structural prompts, not a disciplinary or pedagogical verdict. */
export function reviewSloStructure(slo: Pick<SLO, "statement" | "bloomLevel">): SloReview[] {
  const statement = slo.statement.trim();
  return [
    { dimension: "student-centered", status: STUDENT.test(statement) ? "meets" : "review", rationale: STUDENT.test(statement) ? "Names what students will do." : "Consider naming the learner and their observable performance." },
    { dimension: "measurable", status: OBSERVABLE.test(statement) && !VAGUE.test(statement) ? "meets" : "review", rationale: OBSERVABLE.test(statement) && !VAGUE.test(statement) ? "Uses an observable action." : "Consider replacing broad verbs such as “understand” with an observable action." },
    { dimension: "inclusive", status: /\bwith (evidence|examples|resources|support|(?:a )?framework)\b/i.test(statement) ? "meets" : "review", rationale: /\bwith (evidence|examples|resources|support|(?:a )?framework)\b/i.test(statement) ? "Names a support, resource, or context for demonstrating learning." : "Check that the outcome does not assume unstated prior access or background knowledge." },
    { dimension: "higher-order", status: ["analyze", "evaluate", "create"].includes(slo.bloomLevel) ? "meets" : "review", rationale: ["analyze", "evaluate", "create"].includes(slo.bloomLevel) ? `Faculty selected a ${slo.bloomLevel} cognitive level.` : "This may be appropriate; consider whether a portable application, analysis, evaluation, or creation outcome is also needed." }
  ];
}

export function suggestedSloRevision(statement: string) {
  if (/^students?\b/i.test(statement) && OBSERVABLE.test(statement) && !VAGUE.test(statement)) return statement;
  const subject = statement.replace(/^students? (will |should )?(be able to )?/i, "").replace(/[.]+$/, "") || "course concepts";
  return `Students will analyze ${subject} using disciplinary evidence.`;
}
