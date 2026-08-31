/** Metadata contract for files maintained in the approved knowledge vector store. */
export const APPROVED_KNOWLEDGE_CATEGORIES = [
  "Summary of Teaching with AI",
  "Learning That Matters: backward design and UDL",
  "Learning That Matters: SLOs and portable outcomes",
  "Learning That Matters: DIQ and authentic inquiry",
  "Learning That Matters: connected assessment",
  "Learning That Matters: projects and TiLT",
  "Learning That Matters: active learning",
  "Learning That Matters: student support",
  "Transparent Assignment Design",
  "Reviewing & Creating SLOs with AI",
  "Reframing How We Teach",
  "Using AI to Transform Assignments",
] as const;

export const SLO_REVIEW_RETRIEVAL_PRIORITY = [
  "portable outcomes and transfer", "backward design", "Bloom and observable learning outcomes", "inclusive learning outcomes", "NKU SLO guidance",
] as const;
