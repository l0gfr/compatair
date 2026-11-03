import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { expect, it } from 'vitest';
import { qualificationId, assertQualificationSources, validateQualifications } from './lib/indexation-qualifications.mjs';
const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const digest = (value: string) => createHash('sha256').update(value).digest('hex');
it('accounts for every frozen reserve, qualification and unchanged admission ledger', () => {
 const report = JSON.parse(read('docs/editorial/indexation-reserved-followup-2026-11-03.json'));
 const original = JSON.parse(read('docs/editorial/indexation-review-2026-11-03.json'));
 const qualifications = validateQualifications(JSON.parse(read('config/indexation-qualifications.json')));
 expect(report.candidates).toHaveLength(466);
 expect(report.candidates.map((page: { path: string }) => page.path).sort()).toEqual(original.pages.filter((page: { decision: string }) => page.decision !== 'approved').map((page: { path: string }) => page.path).sort());
 expect(report.counts).toEqual({ 'qualified-for-next-review': 441, 'needs-source-access': 18, 'needs-manufacturer-clarification': 4, 'needs-editorial-distinction': 2, 'needs-correction': 1 });
 expect(report.completedByKind).toEqual({ tool: 356, compressor: 83, guide: 2 });
 expect(report.dailyLimits).toEqual({ guides: 10, compressors: 100, tools: 400 });
 for (const ledger of report.preservedLedgers) {
  let bytes = read(ledger.file);
  if (ledger.file === 'config/indexation-editorial-reviews.json') {
   const dated = JSON.parse(bytes);
   dated.reviews = dated.reviews.filter((entry: { reviewedAt: string }) => {
    const time = Date.parse(entry.reviewedAt);
    if (!Number.isFinite(time)) throw new Error('Invalid historical review timestamp');
    return time <= Date.parse(report.reviewedAt);
   });
   bytes = JSON.stringify(dated, null, 2) + '\n';
  }
  expect(digest(bytes), ledger.file).toBe(ledger.sha256);
 }
 const proof = report.qualificationAppend;
 expect(proof.addedEntries).toBe(1323);
 expect(proof.preservedInitialReceipts).toBe(882);
 expect(proof.refreshedReceipts).toBe(441);
 expect(proof.qualifiedPaths).toBe(441);
 expect(digest(JSON.stringify(qualifications.entries.slice(0, proof.previousEntryCount)))).toBe(proof.previousEntriesSha256);
 const datedEntries = qualifications.entries.filter((entry: { reviewedAt: string }) => Date.parse(entry.reviewedAt) <= Date.parse(proof.reviewedAt));
 expect(datedEntries).toHaveLength(proof.previousEntryCount + proof.addedEntries);
 const appended = datedEntries.slice(proof.previousEntryCount);
 const additions = appended.filter((entry: { path: string }, index: number) => !appended.slice(index + 1).some((later: { path: string }) => later.path === entry.path));
 expect(additions).toHaveLength(441);
 for (const page of report.candidates) {
  expect(page.admissionDecision).toBe('not-admitted-by-this-followup');
  if (page.preparationStatus !== 'qualified-for-next-review') { expect(additions.some((entry: { path: string }) => entry.path === page.path)).toBe(false); continue; }
  const entry = additions.find((entry: { path: string }) => entry.path === page.path)!;
  expect(qualificationId(entry)).toBe(page.qualificationId);
  expect(entry.contentHash).toBe(page.contentHash);
  expect(entry.neighbors.length).toBeGreaterThan(0);
  assertQualificationSources(entry, report.sourceChecks, new Date(entry.reviewedAt));
 }
 expect(report.latestFullSourceAudit.scope.kind).toBe('inventory');
 expect(report.latestFullSourceAudit.summary).toMatchObject({ checked: 7526, reachable: 6989, broken: 99, unverified: 438, auditUnavailable: false });
 expect(report.latestFullSourceAudit.observations).toHaveLength(537);
 expect(report.targetedSourceChecksDoNotClearInventory).toBe(true);
});
