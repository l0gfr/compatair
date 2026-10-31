import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { applyReviewedOctober31Amendment, beforeOctober31Amendment } from './reviewed-catalog-amendments-2026-10-31.mjs';
import { parseCatalogProductSource, buildCatalogProductSource } from './catalog-tooling.mjs';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { createRuntimeCatalog } from '../../src/domain/runtime-catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-31.json', import.meta.url)));
const native = row => parseCatalogProductSource(row.kind, readFileSync(new URL('../../' + row.file, import.meta.url), 'utf8'));
describe('October 31 documented variant comparisons', () => {
 it('replays three exact records, preserves all technical fields and historical evidence, and rejects drift', () => {
  expect(snapshot.rows).toHaveLength(3);
  for (const row of snapshot.rows) {
   const after = native(row), before = beforeOctober31Amendment(after);
   expect(applyReviewedOctober31Amendment(structuredClone(before)), row.id).toEqual(after);
   expect(applyReviewedOctober31Amendment(structuredClone(after)), row.id).toEqual(after);
   expect(after.evidence.slice(0, before.evidence.length), row.id).toEqual(before.evidence);
   for (const field of Object.keys(before).filter(field => !row.fields.includes(field))) expect(after[field], row.id + '/' + field).toEqual(before[field]);
   for (const field of ['brand', 'model', 'mpn']) expect(() => applyReviewedOctober31Amendment({ ...before, [field]: 'unreviewed' }), row.id).toThrow('Identité');
   const drift = structuredClone(before); drift.editorial = 'unreviewed';
   expect(() => applyReviewedOctober31Amendment(drift), row.id).toThrow('Base différente');
   expect(() => beforeOctober31Amendment(drift), row.id).toThrow('Historical October31');
   expect(createHash('sha256').update(buildCatalogProductSource(row.kind, before, row.sourceIndentation)).digest('hex'), row.id).toBe(row.beforeFileSha256);
   const ids = new Set(after.evidence.map(e => e.id));
   for (const refs of Object.values(after.fieldSources)) for (const id of refs) expect(ids.has(id), row.id).toBe(true);
  }
  const outside = { id: 'outside-october31' }; expect(applyReviewedOctober31Amendment(outside)).toBe(outside);
 });
 it('keeps pressure-specific FAD and nonconclusive demand identical in native and runtime engines', () => {
  const c = snapshot.rows.filter(r => r.kind === 'compressors').map(r => compressorSchema.parse(native(r)));
  const t = snapshot.rows.filter(r => r.kind === 'tools').map(r => toolProfileSchema.parse(native(r)));
  const samples = [...t, ...tools.filter(p => p.demandModel === 'fixed-flow' && p.airflowLpm && p.workingPressureBar?.typical).slice(0, 3)];
  expect(samples).toHaveLength(4);
  const runtime = createRuntimeCatalog(c, samples, CATALOG_VERIFIED_AT, 'b'.repeat(64));
  const gentilin = c.find(p => p.brand === 'Gentilin'), rlr = c.find(p => p.brand === 'Worthington Creyssensac');
  expect(gentilin.fadCurve).toEqual([{ pressureBar: 5, litersPerMinute: 400 }, { pressureBar: 8, litersPerMinute: 370 }]);
  expect(gentilin.dutyCycle).toBe(1); expect(gentilin.maxPressureBar).toBe(10); expect(gentilin.powerKw).toBe(4);
  expect(rlr.fadCurve).toEqual([{ pressureBar: 7.5, litersPerMinute: 1250 }]);
  expect(rlr.dutyCycle).toBeUndefined(); expect(rlr.maxPressureBar).toBe(8); expect(rlr.tankLiters).toBe(0);
  expect(t[0].demandModel).toBe('variable-volume'); expect(t[0].airflowLpm).toBeUndefined();
  expect(tools.find(p => p.id === t[0].id)).toEqual({ ...t[0], category: toolCategoryLabel(t[0].categoryId) });
  for (const p of c) {
   expect(compressors.find(item => item.id === p.id)).toEqual(p);
   const before = compressorSchema.parse(beforeOctober31Amendment(native(snapshot.rows.find(row => row.id === p.id))));
   for (const tool of samples) {
    const result = evaluateCompatibility(p, tool);
    expect(evaluateCompatibility(before, tool)).toEqual(result);
    expect(evaluateCompatibility(runtime.compressors.find(item => item.id === p.id), runtime.tools.find(item => item.id === tool.id))).toEqual(result);
    if (p.id === rlr.id || tool.id === t[0].id) expect(result.verdict).toBe('insufficient_data');
   }
  }
 });
});
