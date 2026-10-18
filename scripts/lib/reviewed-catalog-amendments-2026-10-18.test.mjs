import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { applyReviewedOctober18Amendment } from './reviewed-catalog-amendments-2026-10-18.mjs';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { compressors, tools } from '../../src/data/catalog';
const { rows } = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-18.json', import.meta.url), 'utf8'));
const before = row => ({ id: row.id, brand: row.brand, model: row.model, ...(row.mpn === null ? {} : { mpn: row.mpn }), ...structuredClone(row.before) });
const load = (id, kind = 'tools') => structuredClone((kind === 'tools' ? tools : compressors).find(p => p.id === id));
const ample = { id: 'ample', maxPressureBar: 10, tankLiters: 500, fadCurve: [{ pressureBar: 6, litersPerMinute: 10000 }, { pressureBar: 6.3, litersPerMinute: 10000 }], dutyCycle: 1, oilType: 'oil', confidence: 'B' };
describe('October 18 source-backed catalogue corrections', () => {
 it('rejects identity and base drift, preserves unknown products and applies idempotently', () => {
  const unknown = { id: 'unreviewed', editorial: { overview: 'Unchanged' } };
  expect(applyReviewedOctober18Amendment(unknown)).toBe(unknown);
  for (const row of rows) {
   expect(() => applyReviewedOctober18Amendment({ ...before(row), mpn: 'changed' })).toThrow('Identité');
   const drift = before(row); drift[row.fields[0]] = 'unreviewed';
   expect(() => applyReviewedOctober18Amendment(drift)).toThrow('Base différente');
   const result = applyReviewedOctober18Amendment(before(row));
   expect(applyReviewedOctober18Amendment(structuredClone(result))).toEqual(result);
  }
 });
 it('does not validate an unqualified or idle demand even with ample delivered air', () => {
  const ids = rows.filter(r => ['unqualified', 'free-speed'].includes(r.after.airflowBasis)).map(r => r.id);
  expect(ids.length).toBe(14);
  for (const id of ids) expect(evaluateCompatibility(ample, load(id)).verdict, id).toBe('insufficient_data');
  expect(load('fiam-csi12').airflowBasis).toBe('free-speed');
 });
 it('keeps conflicting manufacturer flows unavailable rather than choosing one', () => {
  for (const id of ['biax-be-1005', 'biax-gmd-3', 'biax-md-100']) {
   const p = load(id);
   expect(p.demandModel).toBe('variable-volume'); expect(p.airflowLpm).toBeUndefined();
   expect(p.fieldSources.airflowLpm).toBeUndefined();
   expect(evaluateCompatibility(ample, p).verdict).toBe('insufficient_data');
  }
 });
 it('withdraws unsupported compressor duty without changing the published FAD', () => {
  for (const id of ['abac-formula-e-11-8-400-50', 'almig-combi-xp-18-500d']) {
   const row = rows.find(r => r.id === id), p = load(id, 'compressors');
   expect(p.dutyCycle).toBeUndefined(); expect(p.fieldSources.dutyCycle).toBeUndefined();
   expect(row.fields).not.toContain('fadCurve');
  }
 });
 it('keeps separately published VSD maximum points and exact unit conversions', () => {
  const p = load('alup-allegretto-14', 'compressors');
  expect(p.fadCurve).toContainEqual({ pressureBar: 7, litersPerMinute: 120.6 * 1000 / 60 });
  expect(p.oilType).toBe('unknown');
 });
});
