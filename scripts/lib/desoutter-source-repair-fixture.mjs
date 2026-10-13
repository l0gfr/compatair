import { readFileSync } from 'node:fs';
const repair = JSON.parse(readFileSync(new URL('../../docs/editorial/source-repairs-2026-10-13.json', import.meta.url))).repairs.find(row => row.name === 'desoutter-2026-09');
// Preserve the dated imports and compare every active technical field unchanged.
// Only the source metadata and the edition named in the overview are projected.
export function reviewedDesoutterSource(product) {
 const expected = structuredClone(product);
 if (expected.brand !== 'Desoutter') return expected;
 if (!repair.affectedProducts.includes(expected.id) || repair.referenceChecks.length !== 286 || repair.httpStatus !== 200) throw new Error('Missing Desoutter source review');
 for (const evidence of expected.evidence) {
  if (evidence.sourceUrl.split('#')[0] !== repair.previousUrl) continue;
  evidence.sourceUrl = evidence.sourceUrl.replace(repair.previousUrl, repair.url);
  evidence.retrievedAt = '2026-10-13';
  evidence.sourceLabel = evidence.sourceLabel.replace('juillet 2026', 'septembre 2026');
  evidence.notes = evidence.notes.includes(repair.previousSha256) ? evidence.notes.replace(repair.previousSha256, repair.sha256) : `${evidence.notes} SHA-256 ${repair.sha256}.`;
  evidence.notes += ' Édition 09.2026 : ligne de référence, consommation publiée et pression page 345 recoupées le 13 octobre ; caractéristiques et incertitudes conservées.';
 }
 if (expected.image.sourceUrl === repair.previousUrl) expected.image.sourceUrl = repair.url;
 expected.editorial.overview = expected.editorial.overview.replace('juillet 2026', 'septembre 2026');
 return expected;
}
