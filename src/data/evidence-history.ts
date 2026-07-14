import { evidenceHistorySchema } from '../domain/evidence-history';
import snapshot from './evidence-history.snapshot.json';

export const evidenceHistory = evidenceHistorySchema.parse(snapshot);
