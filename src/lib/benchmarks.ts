import type { RecommendationAnswers } from "@/src/types/course";
import { recommendActivities, scoreAll } from "@/src/lib/recommend";

export type ActivityBenchmark = {
  id: string;
  name: string;
  courseContext: string;
  answers: RecommendationAnswers;
  expected: string[];
  notExpected: string[];
  notes: string;
};

export type BenchmarkResult = {
  benchmark: ActivityBenchmark;
  status: "pass" | "partial" | "needs-review";
  top5Hits: number;
  top10Hits: number;
  unexpectedHigh: string[];
};

const scenario = (
  id: string, name: string, courseContext: string, answers: RecommendationAnswers,
  expected: string[], notExpected: string[], notes: string
): ActivityBenchmark => ({ id, name, courseContext, answers, expected, notExpected, notes });

// Ported verbatim in intent and calibration criteria from Activity Builder v2.3.
// These guide ranking quality; they are not claims that one pedagogical option is uniquely correct.
export const ACTIVITY_BENCHMARKS: ActivityBenchmark[] = [
  scenario("bm-prior-knowledge", "Prior knowledge check", "Large introductory course, in person, five minutes, before instruction.", { goal: { purpose: "prior-knowledge", actionPrimary: "retrieve", actionSecondary: [], stage: "before-instruction" }, context: { format: "in-person", classSize: "large", time: "t5", grouping: "individual", review: "scan", tech: [], priorities: ["low-prep"] } }, ["background-knowledge-probe", "focused-listing", "retrieval-practice"], ["case-study", "briefing-paper", "problem-based-learning"], "Long-form application activities should rank low in a five-minute pre-instruction slot."),
  scenario("bm-apply-concept", "Apply a concept", "Medium undergraduate course, twenty minutes, after a reading.", { goal: { purpose: "apply", actionPrimary: "apply-concept", actionSecondary: ["decide"], stage: "after-reading" }, context: { format: "in-person", classSize: "medium", time: "t30", grouping: "small-groups", review: "scan", tech: [], priorities: ["authentic"] } }, ["decision-making-case", "case-study", "worked-example-comparison"], ["learning-log", "exam-wrapper"], "Case Study may need its short-version adaptation at twenty minutes."),
  scenario("bm-compare-theories", "Compare theories", "Medium undergraduate course, twenty minutes, compare or distinguish.", { goal: { purpose: "understand", actionPrimary: "compare", actionSecondary: ["classify"], stage: "after-reading" }, context: { format: "in-person", classSize: "medium", time: "t30", grouping: "pairs", review: "scan", tech: [], priorities: ["evidence"] } }, ["defining-feature-matrix", "source-comparison", "concept-map", "memory-matrix"], ["one-minute-paper", "chain-notes"], "Concept Map is acceptable but weights connection over comparison."),
  scenario("bm-improve-draft", "Improve a draft", "Small writing-intensive course, before final submission.", { goal: { purpose: "improve-draft", actionPrimary: "peer-feedback", actionSecondary: ["revise"], stage: "during-assignment" }, context: { format: "in-person", classSize: "small", time: "t50", grouping: "pairs", review: "brief", tech: [], priorities: ["product"] } }, ["peer-review", "exemplar-analysis", "revision-memo"], ["team-jeopardy", "four-corners"], "The draft-feedback-revision cycle should dominate."),
  scenario("bm-large-discussion", "Large-class discussion", "Large in-person course, ten minutes, increase participation.", { goal: { purpose: "engagement", actionPrimary: "explain", actionSecondary: [], stage: "during-lecture" }, context: { format: "in-person", classSize: "large", time: "t15", grouping: "pairs", review: "none", tech: ["polling"], priorities: ["participation", "low-prep"] } }, ["peer-instruction", "think-pair-share", "four-corners"], ["analytic-memo", "briefing-paper", "annotated-portfolio"], "Extended written activities should not surface here."),
  scenario("bm-post-exam", "Reflect after an exam", "Any course, individual, ten minutes, after an exam.", { goal: { purpose: "reflect", actionPrimary: "reflect", actionSecondary: ["plan"], stage: "after-exam" }, context: { format: "in-person", classSize: "medium", time: "t15", grouping: "individual", review: "scan", tech: [], priorities: ["support-struggling"] } }, ["exam-wrapper", "process-self-analysis", "learning-log", "goal-action-plan"], ["jigsaw", "design-challenge"], "Exam Wrapper should rank first or very near it."),
  scenario("bm-async-reading", "Asynchronous reading analysis", "Asynchronous online course, analyze evidence or argument in a reading.", { goal: { purpose: "analyze", actionPrimary: "interpret-evidence", actionSecondary: ["analyze-argument"], stage: "after-reading" }, context: { format: "async-online", classSize: "medium", time: "t30", grouping: "individual", review: "scan", tech: ["lms", "shared-doc", "discussion-board"], priorities: ["online-easy"] }, sourceType: "reading" }, ["collaborative-annotation", "active-reading-documents", "claim-evidence-reasoning"], ["punctuated-lecture", "four-corners", "team-jeopardy"], "Movement- and lecture-dependent activities should rank low asynchronously."),
  scenario("bm-practice-procedure", "Practice a procedure", "Lab or skills-based course, guided practice.", { goal: { purpose: "skill", actionPrimary: "practice-procedure", actionSecondary: ["solve"], stage: "guided-practice" }, context: { format: "in-person", classSize: "small", time: "t30", grouping: "individual", review: "whole-class", tech: [], priorities: ["support-struggling"] } }, ["documented-problem-solution", "error-analysis", "worked-example-comparison", "sequence-reconstruction"], ["fishbowl", "invented-dialogue"], "Nearest equivalents are used where the library has no separate deliberate-practice record."),
  scenario("bm-synthesize-unit", "Synthesize a unit", "End of unit, connect ideas across weeks.", { goal: { purpose: "synthesize", actionPrimary: "connect", actionSecondary: ["summarize"], stage: "end-of-unit" }, context: { format: "in-person", classSize: "medium", time: "t30", grouping: "individual", review: "scan", tech: [], priorities: ["evidence"] } }, ["concept-map", "one-sentence-summary", "briefing-paper", "rsqc2"], ["background-knowledge-probe", "sentence-stem-predictions"], "Briefing Paper fits the goal but exceeds thirty minutes."),
  scenario("bm-authentic-decision", "Authentic decision-making", "Graduate or professional course, extended activity, develop a recommendation.", { goal: { purpose: "apply", actionPrimary: "recommend", actionSecondary: ["decide", "interpret-evidence"], stage: "end-of-unit" }, context: { format: "in-person", classSize: "small", time: "multi", grouping: "small-groups", review: "detailed", tech: [], priorities: ["authentic", "challenge-advanced"] } }, ["decision-making-case", "briefing-paper", "team-based-application", "case-study"], ["muddiest-point", "chain-notes"], "Quick checks should fall away entirely at the multi-day scale."),
  scenario("bm-minimal-prep", "Minimal-preparation formative check", "Very little preparation time, five minutes, quick scan only.", { goal: { purpose: "check-understanding", actionPrimary: "retrieve", actionSecondary: ["reflect"], stage: "during-lecture" }, context: { format: "in-person", classSize: "large", time: "t5", grouping: "individual", review: "scan", tech: [], priorities: ["low-prep", "low-grading"] } }, ["one-minute-paper", "muddiest-point", "quick-write", "retrieval-practice"], ["case-study", "structured-academic-controversy", "digital-story"], "Classic classroom-assessment techniques should own this scenario."),
  scenario("bm-ai-critique", "Critique generative AI output", "Students evaluate alternatives and evidence; AI use is integrated into the course.", { goal: { purpose: "analyze", actionPrimary: "evaluate", actionSecondary: ["interpret-evidence"], stage: "guided-practice" }, context: { format: "in-person", classSize: "medium", time: "t30", grouping: "small-groups", review: "scan", tech: ["devices"], priorities: ["ai-productive", "authentic"] } }, ["ai-output-critique", "human-vs-ai-comparison", "error-analysis"], ["retrieval-practice", "focused-listing"], "The two AI-specific activities should lead.")
];

export function runBenchmark(benchmark: ActivityBenchmark): BenchmarkResult {
  const ranked = scoreAll(benchmark.answers);
  const rankById = new Map(ranked.map((result) => [result.activity.id, result.rank ?? Infinity]));
  const top5Hits = benchmark.expected.filter((id) => (rankById.get(id) ?? Infinity) <= 5).length;
  const top10Hits = benchmark.expected.filter((id) => (rankById.get(id) ?? Infinity) <= 10).length;
  const unexpectedHigh = benchmark.notExpected.filter((id) => (rankById.get(id) ?? Infinity) <= 5);
  const status = top5Hits >= Math.min(2, benchmark.expected.length) && unexpectedHigh.length === 0 ? "pass" : top10Hits >= 1 ? "partial" : "needs-review";
  return { benchmark, status, top5Hits, top10Hits, unexpectedHigh };
}

export function runAllBenchmarks() {
  return ACTIVITY_BENCHMARKS.map(runBenchmark);
}

export function headlinePicksFor(benchmark: ActivityBenchmark) {
  return recommendActivities(benchmark.answers).picks;
}
