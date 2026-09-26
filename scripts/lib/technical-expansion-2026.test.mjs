import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { buildTechnicalExpansion } from './technical-expansion-2026.mjs';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { evaluateCompatibility } from '../../src/domain/compatibility';
import { compressors, tools } from '../../src/data/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
const read = async kind => JSON.parse(await readFile(new URL(`../../src/data/imports/technical-${kind}-additional-2026-09-26.json`, import.meta.url)));
const c = await read('compressors'), t = await read('tools');
const batch = buildTechnicalExpansion(c, t);

describe('reviewed technical expansion of 2000 manufacturer references', () => {
 it('reconstructs the complete batch with unique identities and field evidence', () => {
  expect(batch.compressors).toHaveLength(500); expect(batch.tools).toHaveLength(1500);
  for (const p of batch.compressors) expect(compressors.find(x => x.id === p.id), p.id).toEqual(compressorSchema.parse(p));
  for (const p of batch.tools) expect(tools.find(x => x.id === p.id), p.id).toEqual({ ...toolProfileSchema.parse(p), category: toolCategoryLabel(p.categoryId) });
 });
 it('keeps unqualified flow out of the FAD curve and refuses a conclusive verdict', () => {
  const p = batch.compressors.find(x => x.brand === 'Airpress');
  expect(p.fadCurve).toEqual([]);
  expect(p.specifications.some(s => s.label.includes('pression de mesure non précisée'))).toBe(true);
  expect(evaluateCompatibility(p, tools[0]).verdict).toBe('insufficient_data');
 });
 it('preserves real operating points and the documented duty cycle', () => {
  const p = batch.compressors.find(x => x.brand === 'Gentilin' && x.mpn === '813504001');
  expect(p).toMatchObject({ tankLiters: 10, dutyCycle: 0.7, fadCurve: [{ pressureBar: 5, litersPerMinute: 75 }, { pressureBar: 8, litersPerMinute: 55 }] });
  expect(p.fieldSources.oilType[0]).not.toBe(p.fieldSources.fadCurve[0]);
 });
 it('uses the larger published load demand and keeps pressure conversion explicit', () => {
  expect(batch.tools.find(x => x.mpn === 'M2A120RG4')).toMatchObject({ airflowLpm: { typical: 1188 }, workingPressureBar: { typical: 6.2 } });
  expect(batch.tools.find(x => x.mpn === 'MYG-40L')).toMatchObject({ airflowLpm: { typical: 690 }, workingPressureBar: { typical: 6 } });
  expect(batch.tools.find(x => x.mpn === 'YLTX50A')).toMatchObject({ airflowLpm: { typical: 276 }, workingPressureBar: { min: 5, typical: 6, max: 6 }, recommendedHose: { innerDiameterMm: 6.5 } });
 });
 it('rejects invented pressure, FAD, duty cycle, source host and duplicate identities', () => {
  const mutations = [
   (a, b) => { a.rows.find(x => x.brand === 'Airpress').fadCurve = [{ pressureBar: 8, litersPerMinute: 250 }]; },
   a => { a.rows.find(x => x.brand === 'Gentilin').fadCurve[0].litersPerMinute++; },
   a => { a.rows.find(x => x.dutyCycle !== undefined).dutyCycle = 0.99; },
   (a, b) => { b.rows[0].airflowLpm *= 60; },
   (a, b) => { b.rows[0].workingPressureBar.typical = 7; },
   a => { a.sources[0].url = 'https://invalid.example/source'; },
   (a, b) => { b.rows[1] = b.rows[0]; },
   a => { a.rows.pop(); },
  ];
  for (const change of mutations) { const a = structuredClone(c), b = structuredClone(t); change(a, b); expect(() => buildTechnicalExpansion(a, b)).toThrow(); }
 });
});
