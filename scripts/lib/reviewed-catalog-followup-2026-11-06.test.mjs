import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { qualificationId } from './indexation-qualifications.mjs';
import { parseCatalogProductSource } from './catalog-tooling.mjs';
import { assessProductValue } from './page-value.mjs';
const bytes = p => readFileSync(new URL('../../' + p, import.meta.url));
const read = p => JSON.parse(bytes(p));
const hash = x => createHash('sha256').update(x).digest('hex');
const report = read('docs/editorial/indexation-reserved-followup-2026-11-06.json');
describe('November6 completed review and independent reserves', () => {
 it('accounts for all364 pending reviews and44 reserves, with no default approval or second daily opening', () => {
  const original=read('docs/editorial/indexation-review-2026-11-06.json').candidates.filter(p=>p.decision!=='approved');
  expect(original).toHaveLength(408); expect(original.filter(p=>p.decision==='deferred')).toHaveLength(364);
  expect(report.candidates.map(p=>p.path).sort()).toEqual(original.map(p=>p.path).sort());
  expect(report.scope).toEqual({pendingReviews:364,reservedCandidates:44,total:408,corrections:97,newQualifications:374,newAdmissions:0});
  expect(report.summary).toEqual({'qualified-for-next-review':374,'needs-manufacturer-clarification':17,'needs-source-access':16,'needs-editorial-distinction':1});
  expect(report.candidates.every(p=>p.admissionDecision==='not-admitted-by-this-followup')).toBe(true);
  for(const ledger of report.preservedLedgers)expect(hash(bytes(ledger.file)),ledger.file).toBe(ledger.sha256);
 });
 it('preserves prior receipts and binds all374 completed qualifications to current content and documentary checks', () => {
  const registry=read('config/indexation-qualifications.json'),prefix=report.qualificationPrefix;
  expect(hash(JSON.stringify(registry.entries.slice(0,prefix.entries)))).toBe(prefix.sha256);
  expect(registry.entries.length-prefix.entries).toBe(374);
  const additions=new Map(registry.entries.slice(prefix.entries).map(e=>[e.path,e]));
  for(const page of report.candidates){
   if(page.status!=='qualified-for-next-review'){expect(page.qualificationId).toBeUndefined();expect(additions.has(page.path)).toBe(false);continue;}
   const entry=additions.get(page.path);
   expect(qualificationId(entry),page.path).toBe(page.qualificationId);
   expect(entry.contentHash).toBe(page.currentContentHash);expect(entry.neighbors).toEqual([...page.neighbors].sort());
   expect(page.neighbors.length).toBeGreaterThan(0);expect(page.remainingSourceFailures).toEqual([]);
   const product=parseCatalogProductSource(page.kind,bytes(`src/data/products/${page.kind}/${page.path.split('/').at(-2)}.ts`).toString());
   expect(assessProductValue(product,page.kind==='tools'?'tool':'compressor').contentHash).toBe(entry.contentHash);
   for(const source of entry.sourceDocuments){const check=page.sourceChecks.find(c=>c.url===source.url);expect(check.sha256).toBe(source.sha256);expect(check.httpStatus).toBe(200);expect(check.complete).toBe(true);}
  }
 });
 it('keeps the complete source inventory observations separate from targeted recoveries', () => {
  const audit=report.completeSourceAudit;
  expect(audit.scope.kind).toBe('inventory');expect(audit.summary).toMatchObject({checked:7536,broken:109,unverified:550,unsafe:0,auditUnavailable:false});
  expect(audit.anomalies).toHaveLength(659);expect(new Set(audit.anomalies.map(r=>r.url)).size).toBe(659);
  expect(audit.artifactSha256).toMatch(/^[a-f0-9]{64}$/);
 });
});
