import { describe, expect, it } from "vitest";
import { retrieveKnowledge } from "@/src/lib/ai/retrieveKnowledge";

describe("knowledge retrieval development state", () => {
  it("returns a safe not-configured state without credentials", async () => {
    const result = await retrieveKnowledge("transparent assignment design");
    expect(result.configured).toBe(false); expect(result.chunks).toEqual([]);
  });
});
