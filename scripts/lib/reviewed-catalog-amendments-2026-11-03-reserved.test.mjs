import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { applyReservedNovember3Followup, beforeReservedNovember3Followup } from './reviewed-catalog-amendments-2026-11-03-reserved.mjs';
import { parseCatalogProductSource, buildCatalogProductSource } from './catalog-tooling.mjs';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { createRuntimeCatalog, runtimeCatalogSchema } from '../../src/domain/runtime-catalog';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../../src/data/catalog';
import { evidenceHistory } from '../../src/data/evidence-history';
import { createCatalogScope } from '../../src/domain/data-governance';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { calculateSizing } from '../../server/air-sizing.mjs';
import { technicalCardSvg } from './technical-card.mjs';
import { toolCategoryLabel } from '../../src/data/taxonomy';
const read = file => readFileSync(new URL('../../' + file, import.meta.url));
const snapshot = JSON.parse(read('src/data/imports/catalog-amendments-reviewed-2026-11-03-reserved.json'));
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const native = row => parseCatalogProductSource(row.kind, read(row.file).toString());
const ample = compressorSchema.parse({ ...compressors[0], id: 'synthetic-nov3-probe', slug: 'synthetic-nov3-probe', confidence: 'A', maxPressureBar: 50, dutyCycle: 1, fadCurve: [{ pressureBar: 1, litersPerMinute: 100000 }, { pressureBar: 50, litersPerMinute: 100000 }] });
describe('November3 reserved candidate factual followup', () => {
 it('replays399 exact records, historical bytes and identity with no unknown drift', () => {
  expect(snapshot.rows).toHaveLength(399);
  expect(new Set(snapshot.rows.map(row => row.id)).size).toBe(399);
  for (const row of snapshot.rows) {
   const after = native(row), before = beforeReservedNovember3Followup(after);
   expect(applyReservedNovember3Followup(structuredClone(before)), row.id).toEqual(after);
   expect(applyReservedNovember3Followup(structuredClone(after)), row.id).toEqual(after);
   expect(after.evidence.slice(0, before.evidence.length), row.id).toEqual(before.evidence);
   let bytes = buildCatalogProductSource(row.kind, Object.fromEntries(row.sourcePropertyOrder.map(key => [key, before[key]])), row.sourceIndentation);
   if (row.sourceCompactExport) bytes = bytes.replace(';\n\nexport', ';\nexport');
   expect(digest(bytes), row.id).toBe(row.beforeFileSha256);
   expect(digest(read(row.file)), row.id).toBe(row.afterFileSha256);
   const parsed = (row.kind === 'tools' ? toolProfileSchema : compressorSchema).parse(after);
   for (const key of Object.keys(after)) expect(Object.hasOwn(parsed, key), row.id + '/ignored-field/' + key).toBe(true);
   const current = (row.kind === 'tools' ? tools : compressors).find(product => product.id === row.id);
   expect(current, row.id).toEqual(row.kind === 'tools' ? { ...parsed, category: toolCategoryLabel(parsed.categoryId) } : parsed);
   for (const key of Object.keys(before).filter(key => !row.fields.includes(key))) expect(after[key], row.id + '/' + key).toEqual(before[key]);
   for (const key of ['brand', 'model', 'mpn']) expect(() => applyReservedNovember3Followup({ ...before, [key]: 'unreviewed' }), row.id).toThrow('identity');
   const drift = structuredClone(before); drift[row.fields[0]] = 'unreviewed';
   expect(() => applyReservedNovember3Followup(drift), row.id).toThrow('base');
   expect(() => beforeReservedNovember3Followup(drift), row.id).toThrow('historical');
   const ids = new Set(parsed.evidence.map(evidence => evidence.id));
   for (const refs of Object.values(parsed.fieldSources)) for (const id of refs) expect(ids.has(id), row.id).toBe(true);
   if (row.kind === 'compressors') for (const id of parsed.fieldSources.maxPressureBasis ?? []) expect(parsed.fieldSources.maxPressureBar, row.id + '/pressure-basis-proof').toContain(id);
   for (const source of row.sourceReadings) { expect(source.httpStatus).toBe(200); expect(source.complete).toBe(true); expect(source.hash).toMatch(/^[a-f0-9]{64}$/); }
  }
 });
 it('preserves the complete37925-event prefix and appends exactly458 new proofs', () => {
  const proof = snapshot.evidenceHistoryAppend;
  expect(proof.previousEventCount).toBe(37925); expect(proof.addedEvents).toBe(458);
  const before = evidenceHistory.events.slice(0, proof.previousEventCount);
  expect(digest(JSON.stringify(before))).toBe(proof.previousEventsSha256);
  expect(evidenceHistory.events).toHaveLength(proof.previousEventCount + proof.addedEvents);
  const additions = evidenceHistory.events.slice(proof.previousEventCount);
  expect(additions.every(event => event.id.startsWith('review:2026-11-03-reserved:'))).toBe(true);
  expect(new Set(additions.map(event => event.id)).size).toBe(458);
  const changed = structuredClone(before); changed[0].summary += 'unreviewed';
  expect(digest(JSON.stringify(changed))).not.toBe(proof.previousEventsSha256);
  expect(digest(JSON.stringify(before.slice(1)))).not.toBe(proof.previousEventsSha256);
 });
 it('keeps native and runtime decisions identical for every corrected product', () => {
  for (const row of snapshot.rows) {
   const after = (row.kind === 'tools' ? toolProfileSchema : compressorSchema).parse(native(row));
   if (row.kind === 'tools') {
    const runtime = runtimeCatalogSchema.parse(JSON.parse(JSON.stringify(createRuntimeCatalog([ample], [after], CATALOG_VERIFIED_AT, 'a'.repeat(64)))));
    const result = evaluateCompatibility(ample, after);
    expect(evaluateCompatibility(runtime.compressors[0], runtime.tools[0]), row.id).toEqual(result);
    if (after.demandModel !== 'fixed-flow' || after.airflowBasis) { expect(result.verdict, row.id).toBe('insufficient_data'); expect(result.requiredFadLpm, row.id).toBeUndefined(); }
    if (row.candidateIndex === 20) { expect(result.verdict).toBe('continuous'); expect(result.requiredFadLpm).toBe(500); }
    if (after.demandModel === 'per-action') {
     const result = calculateSizing({ mode: 'successive', sessionMinutes: 30, safetyMargin: .25, demands: [{ id: after.id, model: 'per-action', quantity: 1, litersPerAction: after.airPerActionLiters, actionsPerMinute: 30, pressureBar: after.workingPressureBar.typical, dutyFactor: 1 }], compressor: { maxPressureBar: 50, availableFadLpm: 100000, tankLiters: ample.tankLiters, dutyCycle: 1 } });
     expect(result.averageFlowLpm, row.id).toBe(after.airPerActionLiters * 30);
    }
   } else {
    const pressure = after.fadCurve[0]?.pressureBar ?? Math.min(2, after.maxPressureBar);
    const tool = toolProfileSchema.parse({ ...tools.find(tool => tool.demandModel === 'fixed-flow'), id: 'synthetic-fixed-demand', slug: 'synthetic-fixed-demand', demandModel: 'fixed-flow', workingPressureBar: { min: pressure, typical: pressure, max: pressure }, airflowLpm: { min: 1, typical: 1, max: 1 }, airflowBasis: undefined });
    const runtime = runtimeCatalogSchema.parse(JSON.parse(JSON.stringify(createRuntimeCatalog([after], [tool], CATALOG_VERIFIED_AT, 'a'.repeat(64)))));
    const result = evaluateCompatibility(after, tool);
    expect(evaluateCompatibility(runtime.compressors[0], runtime.tools[0]), row.id).toEqual(result);
    if (!after.fadCurve.length || after.dutyCycle === undefined) expect(result.verdict, row.id).toBe('insufficient_data');
   }
  }
 });
 it('explains the exact current scope delta without rewriting historical totals', () => {
  const previous = createCatalogScope(compressors.map(beforeReservedNovember3Followup), tools.map(beforeReservedNovember3Followup));
  const current = createCatalogScope(compressors, tools);
  expect(previous.fixed_flow_tool_count).toBe(8869); expect(previous.fixed_verdict_count).toBe(45755171); expect(previous.parametric_combination_count).toBe(57873662);
  expect(current.fixed_flow_tool_count).toBe(8846); expect(current.fixed_verdict_count).toBe(45636514); expect(current.parametric_combination_count).toBe(57992319);
  expect(previous.fixed_flow_tool_count - current.fixed_flow_tool_count).toBe(23);
  expect(current.explorable_combination_count).toBe(previous.explorable_combination_count);
 });
 it('binds all22 changed technical cards to exact current and dated bytes', () => {
  expect(snapshot.technicalCards).toHaveLength(22);
  for (const card of snapshot.technicalCards) {
   const row = snapshot.rows.find(row => native(row).image.src === card.path), after = native(row), before = beforeReservedNovember3Followup(after);
   const bytes = read('public' + card.path);
   if (card.previousPath) { expect(before.image.src).toBe(card.previousPath); const original = read('public' + card.previousPath); expect(digest(original)).toBe(card.previousSha256); expect(original.length).toBe(card.previousBytes); }
   else expect(digest(technicalCardSvg(before, row.kind)), card.path).toBe(card.beforeSha256);
   expect(digest(bytes), card.path).toBe(card.afterSha256); expect(bytes.length, card.path).toBe(card.afterBytes);
   expect(bytes.toString(), card.path).toBe(technicalCardSvg(after, row.kind)); expect(bytes.length).toBeLessThanOrEqual(250 * 1024);
  }
 });
});
