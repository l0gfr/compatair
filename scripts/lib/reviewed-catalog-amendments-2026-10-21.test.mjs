import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { applyReviewedOctober21Amendment } from './reviewed-catalog-amendments-2026-10-21.mjs';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { tools, compressors } from '../../src/data/catalog';
const { rows } = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-21.json', import.meta.url), 'utf8'));
const before = row => ({ id: row.id, brand: row.brand, model: row.model, ...(row.mpn === null ? {} : { mpn: row.mpn }), ...structuredClone(row.before) });
const load = id => tools.find(p => p.id === id);
const ample = { id: 'ample', maxPressureBar: 10, tankLiters: 500, fadCurve: [{ pressureBar: 6, litersPerMinute: 10000 }, { pressureBar: 6.3, litersPerMinute: 10000 }], dutyCycle: 1, oilType: 'oil', confidence: 'B' };
describe('October21 reviewed factual corrections', () => {
 it('rejects exact identity and base drift and keeps replay idempotent and unrelated references unchanged', () => {
  const unknown = { id: 'unreviewed', editorial: { overview: 'Unchanged' } };
  expect(applyReviewedOctober21Amendment(unknown)).toBe(unknown);
  for (const row of rows) {
   expect(() => applyReviewedOctober21Amendment({ ...before(row), mpn: 'changed' })).toThrow('Identité');
   const drift = before(row); drift[row.fields[0]] = 'unreviewed';
   expect(() => applyReviewedOctober21Amendment(drift)).toThrow('Base différente');
   const result = applyReviewedOctober21Amendment(before(row));
   expect(applyReviewedOctober21Amendment(structuredClone(result))).toEqual(result);
  }
 });
 it('keeps all29 unknown, idle or unpaired measurement points inconclusive despite ample delivered air', () => {
  const ids = rows.filter(r => ['unqualified', 'free-speed'].includes(r.after.airflowBasis) || r.after.demandModel === 'variable-volume').map(r => r.id);
  expect(ids).toHaveLength(29);
  for (const id of ids) expect(evaluateCompatibility(ample, load(id)).verdict, id).toBe('insufficient_data');
  for (const id of ['nitto-kohki-ach-16','nitto-kohki-jc-16','nitto-kohki-ssw-110']) expect(load(id).airflowBasis).toBe('free-speed');
 });
 it('does not transfer a family pressure or a legacy library conversion to the newly documented IR references', () => {
  for (const id of ['ingersoll-rand-170pg-cs','ingersoll-rand-170pg','ingersoll-rand-312ac4a','ingersoll-rand-77a25f107','ingersoll-rand-7p24l','ingersoll-rand-g1a120rs418']) {
   const p=load(id);
   expect(p.workingPressureBar).toEqual({});
   expect(p.airflowLpm).toBeUndefined();
   expect(p.evidence.some(e=>e.sourceUrl.includes('/asset-library/'))).toBe(false);
   expect(p.editorial.limitations.join(' ')).toContain('429');
  }
 });
 it('withdraws unsupported whole-compressor duty claims and preserves the Hertz maximum distinct from its minimum', () => {
  for(const id of ['abac-formula-e-7-5-10-400-50','almig-combi-xp-6-270d']) {
   const c=compressors.find(p=>p.id===id);
   expect(c.dutyCycle).toBeUndefined(); expect(c.fieldSources.dutyCycle).toBeUndefined();
  }
  const h=compressors.find(p=>p.id==='hertz-frecon-plus-pm-18');
  expect(h.fadCurve).toContainEqual({pressureBar:13,litersPerMinute:2390});
  expect(h.fadCurve.some(p=>p.litersPerMinute===660)).toBe(false);
  expect(h.dutyCycle).toBeUndefined();
 });
 it('keeps SATA normal litres documentary without equating unspecified reference conditions to FAD', () => {
  const p=load('pistolet-peinture-hvlp-sata-satajet-100-b-f-hvlp-1-4-146373');
  expect(p.demandModel).toBe('variable-volume'); expect(p.airflowLpm).toBeUndefined();
  expect(p.workingPressureBar.typical).toBe(2);
  expect(p.editorial.limitations.join(' ')).toContain('hors du calcul FAD');
  expect(evaluateCompatibility(ample,p).verdict).toBe('insufficient_data');
 });
 it('retains contradictory BIAX primary data and separates forward/reverse torque and stroke cadence', () => {
  const h=load('biax-hbh-200'),s=load('biax-sarh-830'),drill=load('shinano-si-5305a');
  expect(h.specifications.find(s=>s.label==='Condition de consommation').value).toContain('500 L/min');
  expect(h.specifications.find(s=>s.label==='Condition de consommation').value).toContain('550 L/min');
  expect(s.specifications.find(s=>s.label==='Puissance publiée').value).toContain('240 W');
  expect(s.specifications.find(s=>s.label==='Puissance publiée').value).toContain('260 W');
  expect(drill.specifications.find(s=>s.label==='Couple maximal publié').value).toContain('5,24 Nm en marche avant');
  for(const id of ['nitto-kohki-ls-10','nitto-kohki-ssw-110']) expect(load(id).specifications.some(s=>s.label==='Cadence de frappe publiée')).toBe(false);
 });
});
