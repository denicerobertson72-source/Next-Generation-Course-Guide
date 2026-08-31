# AI cost controls

## What is free and what may incur a charge

Creating and editing courses, SLOs, assessments, activities, templates, TiLT checklists, deterministic alignment checks, Activity Builder recommendations, quality checks, material extraction, saved local work, and Standard SLO Review do not make an AI request.

An explicitly selected AI-assisted feature may incur an institutional API charge. The current configuration recognizes SLO Review, alignment review, assignment review, TiLT enhancement, Intentional AI review, and policy generation. Only SLO Review has an implemented request path; all others are feature flags and remain inactive.

## Enabling and estimating AI

`AI_ENABLED=false` is the default and prevents every AI request before it reaches OpenAI. A feature also requires its own server-side feature flag, a configured model tier, an API key, and a vector-store ID. The faculty UI keeps Standard Review available and labels AI-Assisted Review as disabled when any of those requirements is missing.

Routine tasks use `AI_ROUTINE_MODEL`; advanced tasks use `AI_ADVANCED_MODEL`. The configured pricing assumptions are in environment variables named `AI_*_INPUT_COST_PER_MILLION`, `AI_*_OUTPUT_COST_PER_MILLION`, and `AI_FILE_SEARCH_COST_PER_SEARCH`. These are estimates, not guarantees: token cost is calculated from input/output tokens when available, plus File Search cost when used. `AI_VECTOR_STORAGE_COST_PER_GB_DAY` is informational and is not charged to an individual review.

Administrators update model names, pricing assumptions, and allowance values in the server environment—not in browser code. `.env.example` lists only placeholder names.

## Limits and prototype limitations

Before an enabled request, the server checks daily and monthly request caps, per-user estimated monthly spend, and a project monthly budget guard. Defaults are deliberately conservative development values. If a limit is reached, faculty see a friendly message and can continue with Standard Review and every non-AI tool.

The prototype uses an in-memory, local usage ledger with a shared placeholder user identity. It demonstrates the controls and local usage summary only; it cannot reliably enforce a faculty allowance across browsers, devices, server restarts, or users. Production enforcement requires authenticated users and persistent server-side storage. The ledger interface is intentionally replaceable with a database-backed implementation later.

Usage records retain timestamp, feature, model/tier, input and output tokens, File Search use, estimated/actual calculated cost, and optional course ID. They do not retain prompts, raw course material, or raw model output for cost tracking. A future administrator view can aggregate local/prototype records by feature, tier, total/average cost, and File Search requests without exposing course content.
## Prompt Handoff has no Course Guide API charge

Prompt Handoff is local text assembly. It does not call OpenAI, create a vector store, or send a document to any provider. A faculty member may copy the generated prompt to an external AI assistant of their choice; those services have their own access, cost, and privacy terms.

Integrated AI Review remains disabled by `AI_ENABLED=false` and continues to use the existing server-side guards if it is later enabled.
