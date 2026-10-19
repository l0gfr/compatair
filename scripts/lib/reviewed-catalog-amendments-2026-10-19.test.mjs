import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { applyReviewedOctober19Amendment } from './reviewed-catalog-amendments-2026-10-19.mjs';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { tools, compressors } from '../../src/data/catalog';
import { reviewedSataSource } from './sata-source-repair-fixture.mjs';
const { rows } = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-19.json', import.meta.url), 'utf8'));
const before = row => ({ id: row.id, brand: row.brand, model: row.model, ...(row.mpn === null ? {} : { mpn: row.mpn }), ...structuredClone(row.before) });
const load = id => tools.find(p => p.id === id);
const ample = { id: 'ample', maxPressureBar: 10, tankLiters: 500, fadCurve: [{ pressureBar: 6, litersPerMinute: 10000 }, { pressureBar: 6.3, litersPerMinute: 10000 }], dutyCycle: 1, oilType: 'oil', confidence: 'B' };
describe('October 19 source-backed catalogue corrections', () => {
 it('rejects identity and base drift, preserves unknown products and applies idempotently', () => {
  const unknown = { id: 'unreviewed', editorial: { overview: 'Unchanged' } };
  expect(applyReviewedOctober19Amendment(unknown)).toBe(unknown);
  for (const row of rows) {
   expect(() => applyReviewedOctober19Amendment({ ...before(row), mpn: 'changed' })).toThrow('Identité');
   const drift = before(row); drift[row.fields[0]] = 'unreviewed';
   expect(() => applyReviewedOctober19Amendment(drift)).toThrow('Base différente');
   const result = applyReviewedOctober19Amendment(before(row));
   expect(applyReviewedOctober19Amendment(structuredClone(result))).toEqual(result);
  }
 });
 it('does not validate unqualified or idle flow despite ample delivered air', () => {
  const ids = rows.filter(r => ['unqualified', 'free-speed'].includes(r.after.airflowBasis)).map(r => r.id);
  expect(ids.length).toBe(21);
  for (const id of ids) expect(evaluateCompatibility(ample, load(id)).verdict, id).toBe('insufficient_data');
  expect(load('fiam-csi12p1').airflowBasis).toBe('free-speed');
 });
 it('preserves both conflicting primary powers without choosing a single value', () => {
  for (const [id, html, pdf] of [['biax-hb-15-1',300,250],['biax-ps-2-plus',280,300],['biax-sard-830',260,240]]) {
   const product = load(id), spec = product.specifications.find(s => s.label.toLowerCase().includes('puissance'));
   expect(spec.value).toContain(`${html} W`); expect(spec.value).toContain(`${pdf} W`);
   expect(product.editorial.overview).toContain('catalogue');
   expect(product.airflowBasis).toBe('unqualified');
  }
 });
 it('retains the documented M6 spindle and separates loosening torque from tightening', () => {
  expect(load('shinano-si-2224s').editorial.overview).toContain('M6 × 1');
  expect(load('deprag-305-4257ul').editorial.overview).toContain('desserrage');
  expect(load('deprag-305-4257ul').airflowBasis).toBe('unqualified');
 });
 it('does not choose a conflicting flow or assign another product code pressure', () => {
  const walcom=load('pistolet-peinture-hvlp-walcom-ego-carbonio-190-hvlp-gravite-buse-0-5-mm');
  expect(walcom.demandModel).toBe('variable-volume'); expect(walcom.airflowLpm).toBeUndefined();
  expect(evaluateCompatibility(ample,walcom).verdict).toBe('insufficient_data');
  const iwata=load('pistolet-peinture-anest-iwata-airgunsa-az3-hte2-hvlp-buse-1-3-hvlp');
  expect(iwata.mpn).toBe('W0SPG84AG13C'); expect(iwata.workingPressureBar).toEqual({});
  expect(evaluateCompatibility(ample,iwata).verdict).toBe('insufficient_data');
 });

 it('withdraws unsupported whole-package continuous duty while retaining the FAD', () => {
  for(const id of ['abac-formula-e-5-5-10-400-50','almig-combi-xp-22-500d']){
   const product=compressors.find(c=>c.id===id), row=rows.find(r=>r.id===id);
   expect(product.dutyCycle).toBeUndefined();expect(product.fieldSources.dutyCycle).toBeUndefined();
   expect(row.fields).not.toContain('fadCurve');
  }
 });
 it('keeps VSD capacity maxima distinct from minima and pressure variants', () => {
  const alup=compressors.find(c=>c.id==='alup-allegretto-15');
  expect(alup.fadCurve).toEqual([{pressureBar:7,litersPerMinute:2850},{pressureBar:9.5,litersPerMinute:2436.667}]);
  expect(alup.oilType).toBe('unknown');expect(alup.dutyCycle).toBeUndefined();
  const hertz=compressors.find(c=>c.id==='hertz-frecon-plus-pm-11');
  expect(hertz.fadCurve).toEqual([{pressureBar:13,litersPerMinute:1130}]);
  expect(hertz.editorial.overview).toContain('510');expect(hertz.dutyCycle).toBeUndefined();
 });
 it('keeps the actual BB24D two-pump equipment without claiming a dryer', () => {
  const product=compressors.find(c=>c.id==='bambi-bb24d');
  expect(product.variant.label).toBe('Groupe à deux pompes sur cuve horizontale 24 L');
  expect(product.fadCurve.at(-1)).toEqual({pressureBar:8,litersPerMinute:50});
  expect(product.dutyCycle).toBe(0.5);
 });

 it('applies only the already-reviewed source relocation before the strict amendment', () => {
  const current=structuredClone(load('pistolet-peinture-hvlp-sata-jet-x-hvlp-1-4-i-basic-1200534'));
  const repair=JSON.parse(readFileSync(new URL('../../docs/editorial/source-repairs-2026-10-13.json',import.meta.url))).repairs.find(r=>r.name==='satajetx');
  const prior=structuredClone(current), evidence=prior.evidence.find(e=>e.sourceUrl.startsWith(repair.url));
  evidence.sourceUrl=evidence.sourceUrl.replace(repair.url,repair.previousUrl);evidence.retrievedAt='2026-10-03';
  expect(reviewedSataSource(prior)).toEqual(current);
  const bad=structuredClone(prior);bad.evidence.find(e=>e.sourceUrl.startsWith(repair.previousUrl)).notes='unreviewed';
  expect(()=>reviewedSataSource(bad)).toThrow('Missing exact');
  expect(()=>reviewedSataSource({...prior,id:'unreviewed-sata'})).toThrow('Missing exact');
 });

});
