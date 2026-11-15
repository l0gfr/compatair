import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, it, expect } from 'vitest';
import { parseCatalogProductSource, buildCatalogProductSource } from './catalog-tooling.mjs';
import { applyReservedNovember14TechnicalFollowup, beforeReservedNovember14TechnicalFollowup } from './reviewed-catalog-amendments-2026-11-14-technical.mjs';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { evidenceHistory } from '../../src/data/evidence-history';
import { createRuntimeCatalog, runtimeCatalogSchema } from '../../src/domain/runtime-catalog';
import { technicalCardSvg } from './technical-card.mjs';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
const read = path => readFileSync(new URL('../../' + path, import.meta.url));
const hash = value => createHash('sha256').update(value).digest('hex');
const datedHistory = evidenceHistory.events.slice(0, 38592);
const s = JSON.parse(read('src/data/imports/catalog-amendments-reviewed-2026-11-14-technical.json'));
const ample = compressorSchema.parse({ ...compressors[0], maxPressureBar: 50, dutyCycle: 1, fadCurve: [{ pressureBar: 1, litersPerMinute: 100000 }, { pressureBar: 50, litersPerMinute: 100000 }] });
describe('November 14 scoped technical and editorial followup', () => {
 it('reconstructs all 32 exact records and rejects unknown identity or source drift', () => {
  expect(s.rows).toHaveLength(32);
  for (const row of s.rows) {
   const after = parseCatalogProductSource(row.kind, read(row.file).toString()), before = beforeReservedNovember14TechnicalFollowup(after);
   expect(after, row.id).toEqual(row.after); expect(before, row.id).toEqual(row.before);
   expect(applyReservedNovember14TechnicalFollowup(structuredClone(before)), row.id).toEqual(after);
   expect(applyReservedNovember14TechnicalFollowup(structuredClone(after)), row.id).toEqual(after);
   let bytes = buildCatalogProductSource(row.kind, Object.fromEntries(row.sourcePropertyOrder.map(k => [k, before[k]])), row.sourceIndentation);
   if (row.sourceCompactExport) bytes = bytes.replace(';\n\nexport', ';\nexport');
   expect(hash(bytes), row.id).toBe(row.beforeFileSha256); expect(hash(read(row.file)), row.id).toBe(row.afterFileSha256);
   expect(after.evidence.slice(0, before.evidence.length), row.id).toEqual(before.evidence);
   for (const key of ['brand', 'model', 'mpn']) expect(() => applyReservedNovember14TechnicalFollowup({ ...before, [key]: 'unknown' }), row.id).toThrow('identity');
   const drift = structuredClone(before); drift[row.fields[0]] = 'unknown'; expect(() => applyReservedNovember14TechnicalFollowup(drift), row.id).toThrow('base');
   expect(() => beforeReservedNovember14TechnicalFollowup(drift), row.id).toThrow('historical');
   const parsed = (row.kind === 'tools' ? toolProfileSchema : compressorSchema).parse(after);
   const live = (row.kind === 'tools' ? tools : compressors).find(p => p.id === row.id);
   expect(live, row.id).toEqual(row.kind === 'tools' ? { ...parsed, category: toolCategoryLabel(parsed.categoryId) } : parsed);
   const ids = new Set(after.evidence.map(e => e.id)); for (const refs of Object.values(after.fieldSources)) for (const id of refs) expect(ids.has(id), row.id).toBe(true);
   for (const spec of after.specifications) for (const id of spec.evidenceIds) expect(ids.has(id), row.id).toBe(true);
   for (const source of row.sourceReadings) { expect(source.complete).toBe(true); expect(source.httpStatus).toBe(200); expect(source.hash).toMatch(/^[a-f0-9]{64}$/); }
  }
 });
 it('preserves the complete 38560-event prefix and appends exactly 32 proofs', () => {
  const prefix = s.evidenceHistoryAppend.previousEventCount;
  expect(prefix).toBe(38560); expect(hash(JSON.stringify(datedHistory.slice(0, prefix)))).toBe(s.evidenceHistoryAppend.previousEventsSha256);
  expect(s.evidenceHistoryAppend.addedEvents).toBe(32); expect(datedHistory).toHaveLength(prefix + 32);
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
    if (row.id === 'mattei-erc-5') expect(after.powerKw).toBe(5.5);
   }
  }
 });
 it('preserves every previous illustration and regenerates all 32 current cards exactly', () => {
  expect(s.technicalCards).toHaveLength(32);
  for (const card of s.technicalCards) {
   const row = s.rows.find(r => r.id === card.id);
   expect(hash(read('public' + card.previousPath)), card.id).toBe(card.previousSha256);
   const bytes = read('public' + card.path);
   expect(hash(bytes), card.id).toBe(card.afterSha256); expect(bytes.length, card.id).toBe(card.afterBytes);
   expect(bytes.toString(), card.id).toBe(technicalCardSvg(row.after, row.kind));
  }
 });
});
