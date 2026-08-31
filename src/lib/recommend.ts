import { activities } from "@/src/data/activities";
import { label } from "@/src/data/options";
import type {
  Activity,
  RecommendationAnswers,
  RecommendationResult,
  ScoreBreakdown
} from "@/src/types/course";

export const DEFAULT_WEIGHTS = {
  purpose: 25,
  action: 25,
  secondaryAction: 5,
  stage: 15,
  modality: 15,
  time: 15,
  grouping: 10,
  classSize: 10,
  priorities: 12,
  review: 8,
  prep: 5,
  tech: 5,
  sourceBonus: 5,
  redesignMoveBonus: 3
};

const REVIEW_RANK: Record<string, number> = { none: 0, scan: 1, "whole-class": 2, brief: 3, detailed: 4 };
const TIME_ORDER = ["t5", "t15", "t30", "t50", "t50plus", "multi"];
const RELATED_PURPOSES: Record<string, string[]> = {
  understand: ["check-understanding", "prior-knowledge"],
  "check-understanding": ["understand", "prior-knowledge"],
  "prior-knowledge": ["check-understanding", "understand"],
  apply: ["skill", "analyze"],
  analyze: ["apply", "synthesize"],
  synthesize: ["analyze", "reflect"],
  skill: ["apply"],
  collaborate: ["engagement"],
  engagement: ["collaborate"],
  "prepare-assignment": ["improve-draft"],
  "improve-draft": ["prepare-assignment"],
  reflect: ["synthesize"]
};

const MODALITY_ADAPT_KEY: Record<string, string> = {
  "in-person": "inPerson",
  "sync-online": "synchronousOnline",
  "async-online": "asynchronousOnline",
  hybrid: "inPerson"
};
const MODALITY_FALLBACK: Record<string, string> = {
  "sync-online": "Run synchronously online using breakout rooms, chat, or a shared document in place of in-room interaction.",
  "async-online": "Run asynchronously through a discussion board or LMS assignment: post the prompt, students respond by a deadline, then engage with peers’ responses.",
  "in-person": "Run in class using paper, the board, or brief pair conversations instead of digital tools.",
  hybrid: "Run the individual portion online before class and the interactive portion in person."
};

const REDESIGN_MOVE_SUPPORT: Record<string, (activity: Activity) => boolean> = {
  "add-preparation": (activity) => has(activity.learningStages, "before-instruction"),
  "add-retrieval": (activity) => has(activity.intellectualActions, "retrieve"),
  "add-guided-practice": (activity) => has(activity.learningStages, "guided-practice"),
  "add-worked-example": (activity) => ["worked-example-comparison", "exemplar-analysis"].includes(activity.id),
  "add-peer-interaction": (activity) => activity.groupingOptions.some((group) => ["pairs", "small-groups"].includes(group)),
  "add-formative-feedback": (activity) => has(activity.purposes, "check-understanding") || has(activity.intellectualActions, "peer-feedback"),
  "add-checkpoint": (activity) => has(activity.purposes, "check-understanding"),
  "add-reflection": (activity) => has(activity.intellectualActions, "reflect"),
  "add-revision": (activity) => has(activity.intellectualActions, "revise"),
  "add-choice": (activity) => has(activity.intellectualActions, "decide") || has(activity.intellectualActions, "create"),
  "add-audience": (activity) => has(activity.facultyPriorities, "authentic"),
  "add-evidence-decision": (activity) => has(activity.intellectualActions, "interpret-evidence") || has(activity.intellectualActions, "decide"),
  "add-debrief": () => true,
  "add-accountability": (activity) => has(activity.facultyPriorities, "accountability")
};

function has(arr: string[] | undefined, value: string) {
  return Array.isArray(arr) && arr.includes(value);
}

function timeDistance(activityTimes: string[], selected: string) {
  const idx = TIME_ORDER.indexOf(selected);
  let best = Number.POSITIVE_INFINITY;
  activityTimes.forEach((t) => {
    const tIndex = TIME_ORDER.indexOf(t);
    if (idx >= 0 && tIndex >= 0) best = Math.min(best, Math.abs(tIndex - idx));
  });
  return best;
}

export function maxCoreScore(weights = DEFAULT_WEIGHTS) {
  return weights.purpose + weights.action + weights.secondaryAction * 2 + weights.stage +
    weights.modality + weights.time + weights.grouping + weights.classSize + weights.priorities +
    weights.review + weights.prep + weights.tech;
}

export function scoreActivity(
  activity: Activity,
  answers: RecommendationAnswers,
  weights = DEFAULT_WEIGHTS
): RecommendationResult {
  const goal = answers.goal ?? {};
  const ctx = answers.context ?? {};
  let score = 0;
  const reasons: string[] = [];
  const mismatches: Array<{ issue: string; adaptation: string }> = [];
  const breakdown: ScoreBreakdown[] = [];

  const add = (
    criterion: string,
    displayLabel: string,
    points: number,
    max: number,
    kind: ScoreBreakdown["kind"],
    note: string
  ) => {
    score += points;
    breakdown.push({ criterion, label: displayLabel, points: Math.round(points * 10) / 10, max, kind, note });
  };

  if (goal.purpose) {
    if (has(activity.purposes, goal.purpose)) {
      add("purpose", "Learning purpose", weights.purpose, weights.purpose, "match", `Directly supports: ${label("PURPOSES", goal.purpose).toLowerCase()}`);
      reasons.push(`Directly supports your goal: ${label("PURPOSES", goal.purpose).toLowerCase()}.`);
    } else if ((RELATED_PURPOSES[goal.purpose] ?? []).some((p) => has(activity.purposes, p))) {
      add("purpose", "Learning purpose", Math.round(weights.purpose * 0.5), weights.purpose, "partial", "Related purpose only — partial credit");
      mismatches.push({
        issue: `Designed mainly for a related purpose (${activity.purposes.slice(0, 2).map((p) => label("PURPOSES", p).toLowerCase()).join(", ")}).`,
        adaptation: `Refocus the prompt so the task centers on ${label("PURPOSES", goal.purpose).toLowerCase()}.`
      });
    } else {
      add("purpose", "Learning purpose", 0, weights.purpose, "miss", "Not designed for this purpose");
      mismatches.push({
        issue: "Not designed for this learning purpose.",
        adaptation: `Rewrite the central prompt around ${label("PURPOSES", goal.purpose).toLowerCase()}, keeping the activity’s structure.`
      });
    }
  } else {
    add("purpose", "Learning purpose", weights.purpose * 0.6, weights.purpose, "neutral", "No purpose selected — neutral credit");
  }

  if (goal.actionPrimary) {
    if (has(activity.intellectualActions, goal.actionPrimary)) {
      add("action", "Primary intellectual action", weights.action, weights.action, "match", `Students ${label("ACTIONS", goal.actionPrimary).toLowerCase()}`);
      reasons.push(`Students ${label("ACTIONS", goal.actionPrimary).toLowerCase()} — exactly the intellectual work you chose.`);
    } else {
      add("action", "Primary intellectual action", 0, weights.action, "miss", `Core task is ${activity.intellectualActions.slice(0, 2).join("/")}, not ${goal.actionPrimary}`);
      mismatches.push({
        issue: `The core task is ${activity.intellectualActions.slice(0, 2).map((a) => label("ACTIONS", a).toLowerCase()).join(" / ")}, not ${label("ACTIONS", goal.actionPrimary).toLowerCase()}.`,
        adaptation: `Add a step that requires students to ${label("ACTIONS", goal.actionPrimary).toLowerCase()} before or after the main task.`
      });
    }
  } else {
    add("action", "Primary intellectual action", weights.action * 0.6, weights.action, "neutral", "No action selected — neutral credit");
  }

  let secondaryPoints = 0;
  const secondaryHits: string[] = [];
  (goal.actionSecondary ?? []).slice(0, 2).forEach((action) => {
    if (has(activity.intellectualActions, action)) {
      secondaryPoints += weights.secondaryAction;
      secondaryHits.push(label("ACTIONS", action).toLowerCase());
      reasons.push(`Also engages a secondary action: ${label("ACTIONS", action).toLowerCase()}.`);
    }
  });
  add(
    "secondaryAction",
    "Secondary intellectual actions",
    secondaryPoints,
    weights.secondaryAction * 2,
    secondaryPoints > 0 ? "match" : (goal.actionSecondary?.length ? "miss" : "neutral"),
    secondaryHits.length ? `Matched: ${secondaryHits.join(", ")}` : "No secondary actions matched"
  );

  if (goal.stage) {
    if (has(activity.learningStages, goal.stage)) {
      add("stage", "Learning stage", weights.stage, weights.stage, "match", `Fits: ${label("STAGES", goal.stage).toLowerCase()}`);
      reasons.push(`Fits where you placed it: ${label("STAGES", goal.stage).toLowerCase()}.`);
    } else if (has(activity.learningStages, "throughout")) {
      add("stage", "Learning stage", Math.round(weights.stage * 0.6), weights.stage, "partial", "Usable throughout the semester — partial credit");
    } else {
      add("stage", "Learning stage", 0, weights.stage, "miss", "Usually used at a different point in the sequence");
      mismatches.push({
        issue: "Usually used at a different point in the learning sequence.",
        adaptation: "Adjust the prompt to reference what students have (or have not yet) encountered at this point."
      });
    }
  } else {
    add("stage", "Learning stage", weights.stage * 0.6, weights.stage, "neutral", "No stage selected — neutral credit");
  }

  if (ctx.format) {
    if (has(activity.modalities, ctx.format)) {
      add("modality", "Modality", weights.modality, weights.modality, "match", `Works in ${label("MODALITIES", ctx.format).toLowerCase()}`);
      if (ctx.format !== "in-person") reasons.push(`Works in your ${label("MODALITIES", ctx.format).toLowerCase()} format.`);
    } else {
      const key = MODALITY_ADAPT_KEY[ctx.format];
      const adaptation = activity.adaptations?.[key] ?? MODALITY_FALLBACK[ctx.format] ?? "Adapt the interaction structure to the course modality.";
      add("modality", "Modality", Math.round(weights.modality * 0.45), weights.modality, "partial", `Needs adaptation for ${label("MODALITIES", ctx.format).toLowerCase()}`);
      mismatches.push({ issue: `Not designed for ${label("MODALITIES", ctx.format).toLowerCase()} as written.`, adaptation });
    }
  } else {
    add("modality", "Modality", weights.modality * 0.6, weights.modality, "neutral", "No format selected — neutral credit");
  }

  if (ctx.time) {
    const distance = timeDistance(activity.timeOptions, ctx.time);
    if (distance === 0) {
      add("time", "Time", weights.time, weights.time, "match", `Fits ${label("TIMES", ctx.time).toLowerCase()}`);
      reasons.push(`Fits your available time (${label("TIMES", ctx.time).toLowerCase()}).`);
    } else if (distance === 1) {
      const idx = TIME_ORDER.indexOf(ctx.time);
      const needsShorterVersion = activity.timeOptions.every((t) => TIME_ORDER.indexOf(t) > idx);
      const adaptation = needsShorterVersion
        ? activity.adaptations?.shortVersion ?? "Use a shortened version: one focal question or decision point with a brief written response."
        : activity.adaptations?.extendedVersion ?? "Extend it with a deeper follow-up round or a written synthesis step.";
      add("time", "Time", Math.round(weights.time * 0.55), weights.time, "partial", "One time bucket away — adaptation available");
      mismatches.push({ issue: `Typically runs ${needsShorterVersion ? "longer" : "shorter"} than your available time.`, adaptation });
    } else {
      add("time", "Time", 0, weights.time, "miss", "Typical duration is far from the selected time");
      mismatches.push({
        issue: "The usual time requirement is far from your available time.",
        adaptation: activity.adaptations?.shortVersion ?? activity.adaptations?.extendedVersion ?? `Restructure into a version sized for ${label("TIMES", ctx.time).toLowerCase()}.`
      });
    }
  } else {
    add("time", "Time", weights.time * 0.6, weights.time, "neutral", "No time selected — neutral credit");
  }

  if (ctx.grouping && ctx.grouping !== "flexible") {
    if (has(activity.groupingOptions, ctx.grouping)) {
      add("grouping", "Grouping", weights.grouping, weights.grouping, "match", `Supports ${label("GROUPINGS", ctx.grouping).toLowerCase()}`);
      if (ctx.grouping !== "individual") reasons.push(`Uses your preferred grouping (${label("GROUPINGS", ctx.grouping).toLowerCase()}).`);
    } else if ((ctx.grouping === "pairs" && has(activity.groupingOptions, "small-groups")) || (ctx.grouping === "small-groups" && has(activity.groupingOptions, "pairs"))) {
      add("grouping", "Grouping", Math.round(weights.grouping * 0.6), weights.grouping, "partial", "Adjacent grouping (pairs ↔ small groups)");
    } else {
      add("grouping", "Grouping", 0, weights.grouping, "miss", `Designed for ${activity.groupingOptions.join("/")}`);
      mismatches.push({
        issue: `Designed for ${activity.groupingOptions.map((g) => label("GROUPINGS", g).toLowerCase()).join(" or ")} rather than ${label("GROUPINGS", ctx.grouping).toLowerCase()}.`,
        adaptation: ctx.grouping === "individual"
          ? "Have students complete the core task individually, then submit written results in place of group discussion."
          : `Insert a brief share step so the task runs in ${label("GROUPINGS", ctx.grouping).toLowerCase()}.`
      });
    }
  } else {
    add("grouping", "Grouping", weights.grouping, weights.grouping, "neutral", ctx.grouping === "flexible" ? "Flexible preference — full credit" : "No preference — full credit");
  }

  if (ctx.classSize) {
    if (has(activity.classSizes, ctx.classSize)) {
      add("classSize", "Class size", weights.classSize, weights.classSize, "match", `Works at ${label("CLASS_SIZES", ctx.classSize).toLowerCase()}`);
    } else if (ctx.classSize === "large" && activity.adaptations?.largeClass) {
      add("classSize", "Class size", Math.round(weights.classSize * 0.6), weights.classSize, "partial", "Large-class adaptation applied");
      mismatches.push({ issue: "Harder to run as written in a large class.", adaptation: activity.adaptations.largeClass });
    } else {
      add("classSize", "Class size", 0, weights.classSize, "miss", "Not typical at this class size");
      mismatches.push({
        issue: `Not typically used with a ${label("CLASS_SIZES", ctx.classSize).toLowerCase().split(":")[0]} class.`,
        adaptation: activity.adaptations?.largeClass ?? "Sample responses, use group-level submissions, or run it in sections."
      });
    }
  } else {
    add("classSize", "Class size", weights.classSize * 0.6, weights.classSize, "neutral", "No class size selected — neutral credit");
  }

  const priorities = ctx.priorities ?? [];
  let priorityPoints = 0;
  const priorityHits: string[] = [];
  priorities.forEach((priority) => {
    if (has(activity.facultyPriorities, priority)) {
      priorityPoints += 4;
      priorityHits.push(label("PRIORITIES", priority).toLowerCase());
      reasons.push(`Matches your priority: ${label("PRIORITIES", priority).toLowerCase()}.`);
    }
  });
  add(
    "priorities",
    "Faculty priorities",
    Math.min(priorityPoints, weights.priorities),
    weights.priorities,
    priorityHits.length ? "match" : (priorities.length ? "miss" : "neutral"),
    priorityHits.length ? `Matched: ${priorityHits.join(", ")}` : (priorities.length ? "No selected priorities matched" : "No priorities selected")
  );

  if (priorities.includes("low-prep") && activity.preparationLevel === "significant") {
    mismatches.push({
      issue: "Requires substantial preparation.",
      adaptation: activity.adaptations?.lowPrep ?? "Use the simplest version: reuse existing materials and skip custom-designed components the first time."
    });
  }
  if (priorities.includes("ai-resistant") && activity.aiConsiderations) {
    reasons.push(`AI note: ${activity.aiConsiderations}`);
  }

  if (ctx.review) {
    const activityRank = REVIEW_RANK[activity.reviewBurden] ?? 1;
    const userRank = REVIEW_RANK[ctx.review] ?? 2;
    if (activityRank <= userRank) {
      add("review", "Review burden", weights.review, weights.review, "match", "Within your realistic review level");
    } else if (activityRank - userRank === 1) {
      add("review", "Review burden", Math.round(weights.review * 0.5), weights.review, "partial", "One level above — low-grading adaptation applied");
      mismatches.push({
        issue: "Normally needs more review than you indicated is realistic.",
        adaptation: activity.adaptations?.lowGrading ?? "Review a sample of responses and give whole-class feedback on patterns."
      });
    } else {
      add("review", "Review burden", 0, weights.review, "miss", "Review workload well beyond selection");
      mismatches.push({
        issue: "The review workload is well beyond what you indicated.",
        adaptation: activity.adaptations?.lowGrading ?? "Use completion credit plus a short checklist instead of individual feedback."
      });
    }
  } else {
    add("review", "Review burden", weights.review * 0.6, weights.review, "neutral", "No review level selected — neutral credit");
  }

  const prepPoints = activity.preparationLevel === "minimal" ? weights.prep : activity.preparationLevel === "moderate" ? Math.round(weights.prep * 0.6) : 1;
  add("prep", "Preparation level", prepPoints, weights.prep, activity.preparationLevel === "minimal" ? "match" : "partial", `Activity preparation: ${activity.preparationLevel || "moderate"}`);

  const userTech = ctx.tech ?? [];
  const needs = activity.techNeeds ?? [];
  const unmet = needs.filter((need) => !userTech.includes(need));
  if (needs.length === 0 || unmet.length === 0 || userTech.length === 0) {
    add("tech", "Technology", weights.tech, weights.tech, "match", needs.length ? "Required technology is available" : "No special technology required");
  } else {
    add("tech", "Technology", 0, weights.tech, "miss", `Missing: ${unmet.join(", ")}`);
    mismatches.push({
      issue: `Usually relies on: ${unmet.map((t) => label("TECH", t).toLowerCase()).join(", ")}.`,
      adaptation: "Substitute a no-tech equivalent (raised cards for polling, paper handouts for shared documents)."
    });
  }

  if (answers.sourceType) {
    if (has(activity.sourceTypeCompatibility, answers.sourceType)) {
      add("sourceBonus", "Source-material compatibility", weights.sourceBonus, weights.sourceBonus, "bonus", `Works with ${label("SOURCE_TYPES", answers.sourceType).toLowerCase()}`);
      reasons.push(`Works well with your ${label("SOURCE_TYPES", answers.sourceType).toLowerCase()}.`);
    } else {
      add("sourceBonus", "Source-material compatibility", 0, weights.sourceBonus, "miss", `No stated compatibility with ${answers.sourceType}`);
    }
  }

  if (answers.redesignMoves?.length) {
    const supported = answers.redesignMoves.filter((move) => REDESIGN_MOVE_SUPPORT[move]?.(activity));
    add("redesignMoves", "Redesign moves supported", supported.length * weights.redesignMoveBonus, weights.redesignMoveBonus * answers.redesignMoves.length, supported.length ? "bonus" : "miss", supported.length ? `Supports: ${supported.join(", ")}` : "Supports none of the selected moves");
  }

  const maxPossible = maxCoreScore(weights);
  const pct = Math.max(0, Math.min(100, Math.round((score / maxPossible) * 100)));
  const category = pct >= 78 ? "Best Fit" : pct >= 62 ? "Strong Fit" : pct >= 45 ? "Good Fit with Adaptation" : "Possible Alternative";

  return {
    activity,
    score: Math.round(score * 10) / 10,
    maxPossible,
    pct,
    category,
    reasons: reasons.slice(0, 4),
    mismatches: mismatches.slice(0, 3),
    breakdown
  };
}

export function scoreAll(answers: RecommendationAnswers) {
  return activities
    .map((activity) => scoreActivity(activity, answers))
    .sort((a, b) => b.pct - a.pct)
    .map((result, index) => ({ ...result, rank: index + 1 }));
}

export function recommendActivities(answers: RecommendationAnswers) {
  const scored = scoreAll(answers);
  const picks: RecommendationResult[] = [];
  const used = new Set<string>();

  if (scored.length) {
    picks.push({ ...scored[0], role: "Best overall fit" });
    used.add(scored[0].activity.id);
  }

  const pool = scored.slice(0, 15);
  const lowPrep = pool.find((result) =>
    !used.has(result.activity.id) &&
    result.activity.preparationLevel === "minimal" &&
    ["none", "scan", "whole-class"].includes(result.activity.reviewBurden)
  );
  const second = lowPrep ?? scored.find((result) => !used.has(result.activity.id));
  if (second) {
    picks.push({ ...second, role: "Lowest-preparation option" });
    used.add(second.activity.id);
  }

  const engaging = pool.find((result) =>
    !used.has(result.activity.id) && (
      result.activity.groupingOptions.some((g) => ["pairs", "small-groups", "whole-class"].includes(g)) ||
      result.activity.facultyPriorities.some((p) => ["collaborative", "participation", "authentic"].includes(p))
    )
  );
  const third = engaging ?? scored.find((result) => !used.has(result.activity.id));
  if (third) {
    picks.push({ ...third, role: "Most engaging option" });
    used.add(third.activity.id);
  }

  return { picks, more: scored.filter((result) => !used.has(result.activity.id)) };
}
