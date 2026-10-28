import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { applyReviewedOctober28Amendment, beforeOctober28Amendment } from './reviewed-catalog-amendments-2026-10-28.mjs';
import { parseCatalogProductSource, buildCatalogProductSource, productTechnicalSvgError } from './catalog-tooling.mjs';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { createRuntimeCatalog } from '../../src/domain/runtime-catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-28.json', import.meta.url)));
const native = row => parseCatalogProductSource(row.kind, readFileSync(new URL('../../'+row.file, import.meta.url), 'utf8'));

describe('October 28 exact factual and editorial qualification', () => {
 it('replays five exact records, preserves historical proofs and rejects identity or field drift', () => {
  expect(snapshot.rows).toHaveLength(5);
  for (const row of snapshot.rows) {
   const after = native(row), before = beforeOctober28Amendment(after);
   expect(applyReviewedOctober28Amendment(structuredClone(before)), row.id).toEqual(after);
   expect(applyReviewedOctober28Amendment(structuredClone(after)), row.id).toEqual(after);
   expect(after.evidence.slice(0, before.evidence.length), row.id).toEqual(before.evidence);
   for (const field of Object.keys(before).filter(field => !row.fields.includes(field))) expect(after[field], row.id+'/'+field).toEqual(before[field]);
   for (const field of ['brand', 'model', 'mpn']) expect(() => applyReviewedOctober28Amendment({...before, [field]: 'unreviewed'}), row.id).toThrow('Identité');
   const drift = structuredClone(before); drift[row.fields[0]] = 'unreviewed';
   expect(() => applyReviewedOctober28Amendment(drift), row.id).toThrow('Base différente');
   expect(() => beforeOctober28Amendment(drift), row.id).toThrow('Historical October28');
   expect(createHash('sha256').update(buildCatalogProductSource(row.kind, before, row.sourceIndentation)).digest('hex'), row.id).toBe(row.beforeFileSha256);
   const ids = new Set(after.evidence.map(e => e.id));
   for (const references of Object.values(after.fieldSources)) for (const id of references) expect(ids.has(id), row.id).toBe(true);
  }
  const outside = {id: 'outside-october28'}; expect(applyReviewedOctober28Amendment(outside)).toBe(outside);
 });
 it('corrects ERC 1 to 1.5 kW without changing its FAD, pressure, history or technical card', () => {
  const row = snapshot.rows.find(row => row.id === 'mattei-erc-1'), after = native(row), before = beforeOctober28Amendment(after);
  expect(before.powerKw).toBe(1); expect(after.powerKw).toBe(1.5);
  expect(after.fadCurve).toEqual([{pressureBar:9.5,litersPerMinute:160}]); expect(after.maxPressureBar).toBe(10);
  expect(after.dutyCycle).toBeUndefined();
  expect(after.specifications.at(-1).value).toBe('1,5 kW / 2 hp');
  expect(productTechnicalSvgError(after, 'compressors', readFileSync(new URL('../../public'+after.image.src, import.meta.url), 'utf8'))).toBeNull();
 });
 it('preserves native and runtime decisions, VSD minimums and nonconclusive tool demand', () => {
  const c = snapshot.rows.filter(row => row.kind === 'compressors').map(row => compressorSchema.parse(native(row)));
  const t = snapshot.rows.filter(row => row.kind === 'tools').map(row => toolProfileSchema.parse(native(row)));
  const runtime = createRuntimeCatalog(c, t, CATALOG_VERIFIED_AT, 'b'.repeat(64));
  for (const p of c) expect(compressors.find(item => item.id === p.id)).toEqual(p);
  for (const p of t) expect(tools.find(item => item.id === p.id)).toEqual({...p,category:toolCategoryLabel(p.categoryId)});
  expect(c.find(p => p.id === 'hertz-frecon-plus-pm-30').fadCurve).toEqual([{pressureBar:13,litersPerMinute:1200}]);
  expect(c.find(p => p.id === 'lupamat-lkv-11-mitk').fadCurve).toEqual([{pressureBar:13,litersPerMinute:1290}]);
  expect(c.find(p => p.id === 'sil-air-100-50').fadCurve).toEqual([{pressureBar:5,litersPerMinute:74}]);
  for (const p of c) expect(p.dutyCycle).toBeUndefined();
  expect(t[0].demandModel).toBe('variable-volume'); expect(t[0].airflowLpm).toBeUndefined();
  for (const compressor of c) for (const tool of t) {
   const result = evaluateCompatibility(compressor, tool);
   expect(result.verdict).toBe('insufficient_data');
   expect(evaluateCompatibility(runtime.compressors.find(p => p.id === compressor.id),runtime.tools.find(p => p.id === tool.id))).toEqual(result);
   const row = snapshot.rows.find(row => row.id === compressor.id);
   expect(evaluateCompatibility(beforeOctober28Amendment(native(row)),tool)).toEqual(result);
  }
 });
});
