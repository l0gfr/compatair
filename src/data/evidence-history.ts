import { readFileSync } from 'node:fs';
import { evidenceHistorySchema } from '../domain/evidence-history';

// Versioned data is validated at runtime. Inferring every event as a TypeScript
// literal makes type checking grow with the full evidence corpus.
const snapshot: unknown = JSON.parse(readFileSync(new URL('./evidence-history.snapshot.json', import.meta.url), 'utf8'));
export const evidenceHistory = evidenceHistorySchema.parse(snapshot);
