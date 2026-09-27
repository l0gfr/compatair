import { compressors, tools } from './catalog';
import { evaluatePageCompatibility } from './page-compatibility';
import { summarizeVerdicts } from '../domain/verdict-audit';

let audit: ReturnType<typeof summarizeVerdicts> | undefined;
export function getCurrentVerdictAudit() {
 // Reuse the page cache; retain only four counters, never a second pair export.
 return audit ??= summarizeVerdicts(compressors, tools, evaluatePageCompatibility);
}
