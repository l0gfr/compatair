import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { applyReviewedOctober30Amendment, beforeOctober30Amendment } from './reviewed-catalog-amendments-2026-10-30.mjs';
import { parseCatalogProductSource, buildCatalogProductSource } from './catalog-tooling.mjs';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { compressorSchema } from '../../src/domain/catalog';
import { createRuntimeCatalog } from '../../src/domain/runtime-catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-30.json', import.meta.url)));
const native = row => parseCatalogProductSource('compressors', readFileSync(new URL('../../' + row.file, import.meta.url), 'utf8'));

describe('October 30 exact electrical and receiver comparisons', () => {
 it('replays exactly two records, preserving every technical field and rejecting identity or editorial drift', () => {
  expect(snapshot.rows).toHaveLength(2);
  for (const row of snapshot.rows) {
   const after = native(row), before = beforeOctober30Amendment(after);
   expect(applyReviewedOctober30Amendment(structuredClone(before)), row.id).toEqual(after);
   expect(applyReviewedOctober30Amendment(structuredClone(after)), row.id).toEqual(after);
   expect(after.evidence.slice(0, before.evidence.length), row.id).toEqual(before.evidence);
   for (const field of Object.keys(before).filter(field => !row.fields.includes(field))) expect(after[field], row.id + '/' + field).toEqual(before[field]);
   for (const field of ['brand', 'model', 'mpn']) expect(() => applyReviewedOctober30Amendment({ ...before, [field]: 'unreviewed' }), row.id).toThrow('Identité');
   const drift = structuredClone(before); drift.editorial = 'unreviewed';
   expect(() => applyReviewedOctober30Amendment(drift), row.id).toThrow('Base différente');
   expect(() => beforeOctober30Amendment(drift), row.id).toThrow('Historical October30');
   expect(createHash('sha256').update(buildCatalogProductSource('compressors', before, row.sourceIndentation)).digest('hex'), row.id).toBe(row.beforeFileSha256);
   const ids = new Set(after.evidence.map(e => e.id));
   for (const references of Object.values(after.fieldSources)) for (const id of references) expect(ids.has(id), row.id).toBe(true);
  }
  const outside = { id: 'outside-october30' }; expect(applyReviewedOctober30Amendment(outside)).toBe(outside);
 });
 it('keeps product-specific delivery pressure and whole-group duty qualification through native and runtime engines', () => {
  const parsed = snapshot.rows.map(row => compressorSchema.parse(native(row)));
  const sampleTools = tools.filter(t => t.demandModel === 'fixed-flow' && t.airflowLpm && t.workingPressureBar?.typical).slice(0, 3);
  expect(sampleTools).toHaveLength(3);
  const runtime = createRuntimeCatalog(parsed, sampleTools, CATALOG_VERIFIED_AT, 'b'.repeat(64));
  const gentilin = parsed.find(p => p.brand === 'Gentilin'), rlr = parsed.find(p => p.brand === 'Worthington Creyssensac');
  expect(gentilin.fadCurve).toEqual([{ pressureBar: 5, litersPerMinute: 345 }, { pressureBar: 8, litersPerMinute: 285 }]);
  expect(gentilin.dutyCycle).toBe(1); expect(gentilin.maxPressureBar).toBe(10);
  expect(rlr.fadCurve).toEqual([{ pressureBar: 7.5, litersPerMinute: 1250 }]);
  expect(rlr.dutyCycle).toBeUndefined(); expect(rlr.maxPressureBar).toBe(8); expect(rlr.tankLiters).toBe(500);
  for (const p of parsed) {
   expect(compressors.find(c => c.id === p.id)).toEqual(p);
   const before = compressorSchema.parse(beforeOctober30Amendment(native(snapshot.rows.find(row => row.id === p.id))));
   for (const t of sampleTools) {
    const result = evaluateCompatibility(p, t);
    expect(evaluateCompatibility(before, t)).toEqual(result);
    expect(evaluateCompatibility(runtime.compressors.find(c => c.id === p.id), runtime.tools.find(tool => tool.id === t.id))).toEqual(result);
    if (p.id === rlr.id) expect(result.verdict).toBe('insufficient_data');
   }
  }
 });
});
