import type { Activity, RecommendationResult, SourceRecord } from "@/src/types/course";

export function activitySourceRecord(activity: Activity, result: RecommendationResult, assumptions: SourceRecord["assumptions"] = []): SourceRecord {
  return { id: `source-${activity.id}-${Date.now()}`, scope: `Activity: ${activity.name}`, facultyInputs: result.reasons, assumptions, template: activity.templateData ? "Activity-specific template data" : "Activity library metadata", knowledgeSources: activity.sourceLinks.map((source) => source.label), aiGenerated: false, informationNotUsed: ["No AI model", "No external web pages", "No identifiable student information"] };
}
