import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { applyReviewedOctober17Amendment } from './reviewed-catalog-amendments-2026-10-17.mjs';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
const { rows } = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-17.json', import.meta.url), 'utf8'));
const original = row => ({ id: row.id, brand: row.brand, model: row.model, ...(row.mpn === null ? {} : { mpn: row.mpn }), ...structuredClone(row.before) });
describe('dated October 17 factual corrections', () => {
 it('refuses another reference or a changed reviewed base and leaves unrelated products alone', () => {
  const unknown = { id: 'unrelated', editorial: { overview: 'Preserved' } };
  expect(applyReviewedOctober17Amendment(unknown)).toBe(unknown);
  for (const row of rows) {
   expect(() => applyReviewedOctober17Amendment({ ...original(row), mpn: 'other-reference' })).toThrow('Identité');
   const changed = original(row); changed[row.fields[0]] = 'unreviewed';
   expect(() => applyReviewedOctober17Amendment(changed)).toThrow('Base différente');
   const applied = applyReviewedOctober17Amendment(original(row));
   expect(applyReviewedOctober17Amendment(structuredClone(applied))).toEqual(applied);
  }
 });
 it('withdraws unsupported continuous duty without changing pressure or delivered-air points', () => {
  for (const id of ['abac-formula-e-11-13-400-50', 'almig-combi-xp-15-270d', 'broomwade-elite-11-rsccp1141v4-10-bar', 'gentilin-ac600-40']) {
   const row = rows.find(row => row.id === id);
   const product = { ...original(row), maxPressureBar: 13, fadCurve: [{ pressureBar: 8, litersPerMinute: 180 }] };
   applyReviewedOctober17Amendment(product);
   expect(product.dutyCycle).toBeUndefined(); expect(product.fieldSources.dutyCycle).toBeUndefined();
   expect(product.maxPressureBar).toBe(13); expect(product.fadCurve).toEqual([{ pressureBar: 8, litersPerMinute: 180 }]);
  }
 });
 it('keeps the GAA205 declared demand unqualified even against ample air supply', () => {
  const row = rows.find(row => row.id === 'biax-gaa-205');
  const product = { ...original(row), demandModel: 'fixed-flow', workingPressureBar: { min: 6, typical: 6, max: 6 }, airflowLpm: { min: 150, typical: 150, max: 150 }, confidence: 'B' };
  applyReviewedOctober17Amendment(product);
  expect(product.airflowBasis).toBe('unqualified');
  const compressor = { id: 'test-ample', maxPressureBar: 10, tankLiters: 500, fadCurve: [{ pressureBar: 6, litersPerMinute: 5000 }], dutyCycle: 1, oilType: 'oil', confidence: 'B' };
  expect(evaluateCompatibility(compressor, product).verdict).toBe('insufficient_data');
 });
 it('preserves separate documented VSD maxima without creating a duty cycle', () => {
  const row = rows.find(row => row.id === 'alup-allegretto-11');
  const product = applyReviewedOctober17Amendment(original(row));
  expect(product.fadCurve).toEqual([{ pressureBar: 7, litersPerMinute: 1823.333 }, { pressureBar: 9.5, litersPerMinute: 1470 }]);
  expect(product.oilType).toBe('unknown'); expect(product.dutyCycle).toBeUndefined();
 });
});
