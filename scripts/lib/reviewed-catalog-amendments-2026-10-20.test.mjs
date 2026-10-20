import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { applyReviewedOctober20Amendment } from './reviewed-catalog-amendments-2026-10-20.mjs';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { compressors, tools } from '../../src/data/catalog';
const { rows } = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-20.json', import.meta.url), 'utf8'));
const before = row => ({ id: row.id, brand: row.brand, model: row.model, ...(row.mpn === null ? {} : { mpn: row.mpn }), ...structuredClone(row.before) });
const load = id => tools.find(p => p.id === id);
const ample = { id: 'ample', maxPressureBar: 10, tankLiters: 500, fadCurve: [{ pressureBar: 6, litersPerMinute: 10000 }, { pressureBar: 6.3, litersPerMinute: 10000 }], dutyCycle: 1, oilType: 'oil', confidence: 'B' };
describe('October20 reviewed factual corrections', () => {
 it('rejects exact identity and base drift while keeping unrelated products and replay idempotent', () => {
  const unknown = { id: 'unreviewed', editorial: { overview: 'Unchanged' } };
  expect(applyReviewedOctober20Amendment(unknown)).toBe(unknown);
  for (const row of rows) {
   expect(() => applyReviewedOctober20Amendment({ ...before(row), mpn: 'changed' })).toThrow('Identité');
   const drift = before(row); drift[row.fields[0]] = 'unreviewed';
   expect(() => applyReviewedOctober20Amendment(drift)).toThrow('Base différente');
   const result = applyReviewedOctober20Amendment(before(row));
   expect(applyReviewedOctober20Amendment(structuredClone(result))).toEqual(result);
  }
 });
 it('keeps all18 documented unknown or idle regimes inconclusive despite ample delivered air', () => {
  const ids = rows.filter(r => ['unqualified', 'free-speed'].includes(r.after.airflowBasis)).map(r => r.id);
  expect(ids).toHaveLength(18);
  for (const id of ids) expect(evaluateCompatibility(ample, load(id)).verdict, id).toBe('insufficient_data');
  for (const id of ['nitto-kohki-a-300','nitto-kohki-adr-100','nitto-kohki-ajc-16']) expect(load(id).airflowBasis).toBe('free-speed');
 });
 it('preserves contradictory BIAX primary powers and speeds without silently choosing a value', () => {
  const hb=load('biax-hb-3'),sarh=load('biax-sarh-820');
  expect(hb.specifications.find(s=>s.label==='Puissance publiée').value).toContain('152 W');
  expect(hb.specifications.find(s=>s.label==='Puissance publiée').value).toContain('150 W');
  expect(hb.specifications.find(s=>s.label==='Vitesse de rotation').value).toContain('28 000');
  expect(sarh.specifications.find(s=>s.label==='Puissance publiée').value).toContain('310 W');
  expect(load('deprag-325-3258ul').specifications.some(s=>s.label==='Couple maximal de desserrage')).toBe(true);
 });
 it('keeps pressure points, reference power and undocumented compressor duty explicit', () => {
  const byId = id => compressors.find(product => product.id === id);
  const hertz = byId('hertz-frecon-plus-pm-15');
  expect(hertz.fadCurve.find(point => point.pressureBar === 13)?.litersPerMinute).toBe(1360);
  const alup = byId('alup-allegretto-18');
  expect(alup.powerKw).toBe(18.5);
  expect(alup.fadCurve.find(point => point.pressureBar === 9.5)?.litersPerMinute).toBeCloseTo(2873.333, 2);
  for (const id of ['abac-formula-e-5-5-8-400-50', 'almig-combi-xp-4-270d']) expect(byId(id).dutyCycle).toBeUndefined();
 });
});
