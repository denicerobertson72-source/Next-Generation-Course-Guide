/** Keeps in-progress faculty text intact; cleanup is intentionally deferred to a save boundary. */
export function goalsFromEditor(value: string) { return value.split(/\r?\n/); }
export function normalizeGoals(value: string) { return goalsFromEditor(value).map((goal) => goal.trim()).filter(Boolean); }
