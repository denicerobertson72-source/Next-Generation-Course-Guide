import type { ClassSize, SLO } from "@/src/types/course";

export function enrollmentToClassSize(enrollment: number | null): ClassSize | undefined {
  if (!enrollment || enrollment < 1) return undefined;
  if (enrollment <= 30) return "small";
  if (enrollment <= 75) return "medium";
  return "large";
}

export function inferActivityGoalFromSlo(slo?: SLO) {
  if (!slo) return { purpose: "check-understanding", actionPrimary: "retrieve" };
  const firstVerb = slo.statement.trim().toLowerCase().split(/\s+/).slice(0, 4).join(" ");
  const contains = (verbs: string[]) => verbs.some((v) => firstVerb.includes(v));

  if (slo.bloomLevel === "create" || contains(["create", "design", "develop", "construct", "produce"])) {
    return { purpose: "synthesize", actionPrimary: "create" };
  }
  if (slo.bloomLevel === "evaluate" || contains(["evaluate", "judge", "defend", "recommend", "critique"])) {
    return { purpose: "analyze", actionPrimary: "evaluate" };
  }
  if (slo.bloomLevel === "analyze" || contains(["analyze", "compare", "differentiate", "interpret"])) {
    return { purpose: "analyze", actionPrimary: contains(["compare"]) ? "compare" : "interpret-evidence" };
  }
  if (slo.bloomLevel === "apply" || contains(["apply", "solve", "calculate", "demonstrate", "use"])) {
    return { purpose: "apply", actionPrimary: contains(["solve"]) ? "solve" : "apply-concept" };
  }
  if (slo.bloomLevel === "understand" || contains(["explain", "summarize", "describe"])) {
    return { purpose: "understand", actionPrimary: contains(["summarize"]) ? "summarize" : "explain" };
  }
  return { purpose: "check-understanding", actionPrimary: "retrieve" };
}
