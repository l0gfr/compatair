import { beforeReservedNovember16ReservesFollowup } from './reviewed-catalog-amendments-2026-11-16-reserves.mjs';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, it, expect } from 'vitest';
import { parseCatalogProductSource, buildCatalogProductSource } from './catalog-tooling.mjs';
import { applyReservedNovember16ReviewsFollowup, beforeReservedNovember16ReviewsFollowup } from './reviewed-catalog-amendments-2026-11-16-reviews.mjs';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { evidenceHistory } from '../../src/data/evidence-history';
import { createRuntimeCatalog, runtimeCatalogSchema } from '../../src/domain/runtime-catalog';
import { technicalCardSvg } from './technical-card.mjs';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
const read = path => readFileSync(new URL('../../' + path, import.meta.url));
const hash = value => createHash('sha256').update(value).digest('hex');
const datedHistory = evidenceHistory.events.slice(0,39188);
const s = JSON.parse(read('src/data/imports/catalog-amendments-reviewed-2026-11-16-reviews.json'));
const later = JSON.parse(read('src/data/imports/catalog-amendments-reviewed-2026-11-16-reserves.json'));
const datedFileBytes = row => { const metadata=later.rows.find(r=>r.id===row.id); if(!metadata)return read(row.file); const p=beforeReservedNovember16ReservesFollowup(parseCatalogProductSource(row.kind,read(row.file).toString())); let bytes=buildCatalogProductSource(row.kind,Object.fromEntries(metadata.sourcePropertyOrder.map(k=>[k,p[k]])),metadata.sourceIndentation); if(metadata.sourceCompactExport)bytes=bytes.replace(';\n\nexport',';\nexport'); return bytes; };
const ample = compressorSchema.parse({ ...compressors[0], maxPressureBar: 50, dutyCycle: 1, fadCurve: [{ pressureBar: 1, litersPerMinute: 100000 }, { pressureBar: 50, litersPerMinute: 100000 }] });
describe('November 16 449-dossier review preparation', () => {
 it('reconstructs all 432 exact records and rejects unknown identity or source drift', () => {
  expect(s.rows).toHaveLength(432);
  for (const row of s.rows) {
   const after = beforeReservedNovember16ReservesFollowup(parseCatalogProductSource(row.kind, read(row.file).toString())), before = beforeReservedNovember16ReviewsFollowup(after);
   expect(after, row.id).toEqual(row.after); expect(before, row.id).toEqual(row.before);
   expect(beforeReservedNovember16ReservesFollowup(applyReservedNovember16ReviewsFollowup(structuredClone(before))), row.id).toEqual(after);
   expect(beforeReservedNovember16ReservesFollowup(applyReservedNovember16ReviewsFollowup(structuredClone(after))), row.id).toEqual(after);
   let bytes = buildCatalogProductSource(row.kind, Object.fromEntries(row.sourcePropertyOrder.map(k => [k, before[k]])), row.sourceIndentation);
   if (row.sourceCompactExport) bytes = bytes.replace(';\n\nexport', ';\nexport');
   expect(hash(bytes), row.id).toBe(row.beforeFileSha256); expect(hash(datedFileBytes(row)), row.id).toBe(row.afterFileSha256);
   expect(after.evidence.slice(0, before.evidence.length), row.id).toEqual(before.evidence);
   for (const key of ['brand', 'model', 'mpn']) expect(() => applyReservedNovember16ReviewsFollowup({ ...before, [key]: 'unknown' }), row.id).toThrow('identity');
   const drift = structuredClone(before); drift[row.fields[0]] = 'unknown'; expect(() => applyReservedNovember16ReviewsFollowup(drift), row.id).toThrow('base');
   expect(() => beforeReservedNovember16ReviewsFollowup(drift), row.id).toThrow('historical');
   const parsed = (row.kind === 'tools' ? toolProfileSchema : compressorSchema).parse(after);
   const live = (row.kind === 'tools' ? tools : compressors).find(p => p.id === row.id);
   expect(beforeReservedNovember16ReservesFollowup(live), row.id).toEqual(row.kind === 'tools' ? { ...parsed, category: toolCategoryLabel(parsed.categoryId) } : parsed);
   const ids = new Set(after.evidence.map(e => e.id)); for (const refs of Object.values(after.fieldSources)) for (const id of refs) expect(ids.has(id), row.id).toBe(true);
   for (const spec of after.specifications) for (const id of spec.evidenceIds) expect(ids.has(id), row.id).toBe(true);
   for (const source of row.sourceReadings) { expect(source.complete).toBe(true); expect(source.httpStatus).toBe(200); expect(source.hash).toMatch(/^[a-f0-9]{64}$/); }
  }
 });
 it('preserves the complete 38728-event prefix and appends exactly 460 proofs', () => {
  const prefix = s.evidenceHistoryAppend.previousEventCount;
  expect(prefix).toBe(38728); expect(hash(JSON.stringify(datedHistory.slice(0, prefix)))).toBe(s.evidenceHistoryAppend.previousEventsSha256);
  expect(s.evidenceHistoryAppend.addedEvents).toBe(460); expect(datedHistory).toHaveLength(prefix + 460);
  for (const event of datedHistory.slice(prefix)) expect(hash(JSON.stringify({ productId: event.productId, evidence: event.snapshot })), event.id).toBe(event.fingerprint);
  const expected = s.rows.flatMap(row => row.after.evidence.slice(row.before.evidence.length).map(e => e.id)).sort();
  expect(datedHistory.slice(prefix).map(e => e.evidenceId).sort()).toEqual(expected);
 });
 it('retains insufficient states and makes native/runtime decisions identical for every changed reference', () => {
  for (const row of s.rows) {
   const after = (row.kind === 'tools' ? toolProfileSchema : compressorSchema).parse(row.after);
   if (row.kind === 'tools') {
    const rt = runtimeCatalogSchema.parse(JSON.parse(JSON.stringify(createRuntimeCatalog([ample], [after], CATALOG_VERIFIED_AT, 'a'.repeat(64)))));
    const result = evaluateCompatibility(ample, after);
    expect(evaluateCompatibility(rt.compressors[0], rt.tools[0]), row.id).toEqual(result);
    if (after.demandModel !== 'fixed-flow' || after.airflowBasis) { expect(result.verdict, row.id).toBe('insufficient_data'); expect(result.requiredFadLpm, row.id).toBeUndefined(); }
   } else {
    const pressure = after.fadCurve[0]?.pressureBar ?? 2;
    const probe = toolProfileSchema.parse({ ...tools.find(t => t.demandModel === 'fixed-flow'), workingPressureBar: { min: pressure, typical: pressure, max: pressure }, airflowLpm: { min: 1, typical: 1, max: 1 }, airflowBasis: undefined });
    const rt = runtimeCatalogSchema.parse(JSON.parse(JSON.stringify(createRuntimeCatalog([after], [probe], CATALOG_VERIFIED_AT, 'a'.repeat(64)))));
    const result = evaluateCompatibility(after, probe);
    expect(evaluateCompatibility(rt.compressors[0], rt.tools[0]), row.id).toEqual(result);
    if (!after.fadCurve.length || after.dutyCycle === undefined) expect(result.verdict, row.id).toBe('insufficient_data');
   }
  }
 });
 it('preserves every previous illustration and regenerates all 432 current cards exactly', () => {
  expect(s.technicalCards).toHaveLength(432);
  for (const card of s.technicalCards) {
   const row = s.rows.find(r => r.id === card.id);
   expect(hash(read('public' + card.previousPath)), card.id).toBe(card.previousSha256);
   const bytes = read('public' + card.path);
   expect(hash(bytes), card.id).toBe(card.afterSha256); expect(bytes.length, card.id).toBe(card.afterBytes);
   expect(bytes.toString(), card.id).toBe(technicalCardSvg(row.after, row.kind));
  }
 });
 it('uses the maximum of the Dalgakiran modulation table and retains its minimum', () => {
  const get=id=>s.rows.find(r=>r.id===id);
  for(const [id,minimum,maximum] of [['dalgakiran-inversys-plus-pm-22',920,2650],['dalgakiran-inversys-plus-pm-30',1200,3870]]) {
   const row=get(id); expect(row.before.fadCurve).toEqual([{pressureBar:13,litersPerMinute:minimum}]);
   expect(row.after.fadCurve).toEqual([{pressureBar:13,litersPerMinute:maximum}]);
   expect(row.after.specifications.some(v=>v.label.includes('minimum de modulation'))).toBe(true);
  }
 });
 it('keeps service pressure, estimated delivery and incomplete FAD out of the calculation', () => {
  for(const id of ['airpress-aps-15-basic-combi-dry-364959','airpol-srk-7','lupamat-lpyi-075-8-5-kd','scr-scr125gpm2-8']) {
   const row=s.rows.find(r=>r.id===id); expect(row,id).toBeDefined(); expect(row.after.fadCurve,id).toEqual([]);
  }
  const atlas=s.rows.find(r=>r.id==='boulonneuse-atlas-copco-ltd28-r22f-re-8431053489');
  expect(atlas.after.airflowBasis).toBe('free-speed'); expect(atlas.after.airflowLpm).toEqual(atlas.before.airflowLpm);
  const result=evaluateCompatibility(ample,atlas.after);expect(result.verdict).toBe('insufficient_data');expect(result.requiredFadLpm).toBeUndefined();
 });
 it('rebinds ABAC to the exact 11 kW reference without losing historical URLs', () => {
  for(const code of ['4152022531','4152022590']) {
   const row=s.rows.find(r=>r.identity.mpn===code);expect(row).toBeDefined();
   expect(row.sourceReadings[0].url).toContain('Salesleaflets_'+code+'_en-GB_Abac.pdf');
   expect(row.after.phase).toBeUndefined();expect(row.after.evidence.slice(0,row.before.evidence.length)).toEqual(row.before.evidence);
   const current=new Map(row.after.evidence.map(e=>[e.id,e]));
   for(const ids of Object.values(row.after.fieldSources))for(const id of ids)expect(current.get(id).sourceUrl).toBe(row.sourceReadings[0].url);
  }
 });
});
