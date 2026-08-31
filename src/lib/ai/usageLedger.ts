import "server-only";
import type { AiFeature, AiModelTier } from "@/src/lib/ai/featureConfig";

export type AiUsageRecord = { timestamp: string; userKey: string; feature: AiFeature; model: string; tier: AiModelTier; inputTokens: number; outputTokens: number; fileSearchUsed: boolean; estimatedCost: number | null; actualCalculatedCost: number | null; courseId?: string };
export interface AiUsageLedger { recordsFor(userKey: string): AiUsageRecord[]; allRecords(): AiUsageRecord[]; record(record: AiUsageRecord): void; }
class MemoryUsageLedger implements AiUsageLedger { private records: AiUsageRecord[] = []; recordsFor(userKey: string) { return this.records.filter((record) => record.userKey === userKey); } allRecords() { return [...this.records]; } record(record: AiUsageRecord) { this.records.push(record); } }
export const prototypeUsageLedger = new MemoryUsageLedger();
export const prototypeUserKey = "local-prototype-user";
export function usageSummary(records: AiUsageRecord[]) { const total = records.reduce((sum, record) => sum + (record.actualCalculatedCost ?? record.estimatedCost ?? 0), 0); const byFeature = Object.fromEntries(Object.entries(records.reduce<Record<string, { requests: number; cost: number }>>((groups, record) => { const item = groups[record.feature] ?? { requests: 0, cost: 0 }; item.requests += 1; item.cost += record.actualCalculatedCost ?? record.estimatedCost ?? 0; groups[record.feature] = item; return groups; }, {}))); return { requests: records.length, estimatedTotalCost: total, byFeature, fileSearchRequests: records.filter((record) => record.fileSearchUsed).length, averageCost: records.length ? total / records.length : 0 }; }
