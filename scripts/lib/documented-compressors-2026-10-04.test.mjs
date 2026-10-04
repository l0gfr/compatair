import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressorSchema } from '../../src/domain/catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { buildDocumentedCompressorsOctober4 as build } from './documented-compressors-2026-10-04.mjs';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-compressors-2026-10-04.json', import.meta.url)));
const batch = build(snapshot);
const product = model => batch.find(p => p.model === model);
const row = (s, model) => s.compressors.find(p => p.model === model);
const normalized = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
describe('documented compressors October4', () => {
 it('adds 200 distinct model identities across seven brands', () => {
  expect(batch).toHaveLength(200);
  expect(new Set(batch.map(p => normalized(`${p.brand} ${p.model}`))).size).toBe(200);
  expect(new Set(batch.map(p => p.id)).size).toBe(200);
  expect(Object.fromEntries([...new Set(batch.map(p => p.brand))].map(b => [b, batch.filter(p => p.brand === b).length]))).toEqual({Hertz:47,Dalgakiran:39,Lupamat:33,KTC:38,'SIL-AIR':39,'JUN-AIR':1,Champion:3});
  for (const p of batch) expect(compressorSchema.safeParse(p).success).toBe(true);
 });
 it('documents 161 pressure-qualified FADs and only 31 declared duty cycles', () => {
  expect(batch.filter(p => p.fadCurve.length)).toHaveLength(161);
  expect(batch.filter(p => p.dutyCycle !== undefined)).toHaveLength(31);
  expect(snapshot.compressors.filter(p => p.sourceClaimScope === 'piston-displacement-only')).toHaveLength(27);
  expect(snapshot.compressors.filter(p => p.sourceClaimScope === 'capacity-at-pressure-method-unqualified')).toHaveLength(12);
 });
 it('keeps VSD minimum, receiver configurations and actual storage values distinct', () => {
  expect(product('FRECON PLUS PM 5').fadCurve).toEqual([{pressureBar:13,litersPerMinute:250}]);
  expect(product('FRECON PLUS PM 45').fadCurve).toEqual([{pressureBar:10,litersPerMinute:1370}]);
  expect(product('FRECON PLUS PM 45').dutyCycle).toBeUndefined();
  expect(product('COMPACK 2').tankLiters).toBe(2.5);
  expect(product('COMPACK 3 8L Trolley').tankLiters).toBe(8);
  expect(product('KME C 4').tankLiters).toBe(0);
  expect(product('KME C 4 270 E').tankLiters).toBe(270);
  expect(product('LKV 7.5 MITK').fadCurve).toEqual([{pressureBar:13,litersPerMinute:820}]);
  expect(product('LKV 7.5 MITK').tankLiters).toBe(548);
  expect(product('LPYI 075/8.5 K').tankLiters).toBe(0);
  expect(product('LPYI 075/8.5 KD').tankLiters).toBe(75);
  expect(product('LPYI 075/10 D').tankLiters).toBe(40);
  expect(product('30/12').tankLiters).toBe(6);
 });
 it('never promotes intake or unqualified capacity into FAD', () => {
  expect(product('H 10-500').intakeFlowLpm).toBe(1222);
  expect(product('H 10-500').fadCurve).toEqual([]);
  expect(product('D 10-500 T').intakeFlowLpm).toBe(726);
  expect(product('D 10-500 T').fadCurve).toEqual([]);
  expect(product('FM90').fadCurve).toEqual([]);
  expect(product('FM90').intakeFlowLpm).toBeUndefined();
  expect(product('HS7.5-S').fadCurve).toEqual([]);
  expect(product('HS7.5-S').oilType).toBe('oil-free');
 });
 it('selects the actual 50Hz columns and preserves pressure modes', () => {
  expect(product('30 D').fadCurve).toEqual([{pressureBar:5,litersPerMinute:18.5}]);
  expect(product('30 TC').fadCurve).toEqual([{pressureBar:5,litersPerMinute:18.5}]);
  expect(product('Black Mamba').fadCurve).toEqual([{pressureBar:5,litersPerMinute:52}]);
  expect(product('Black Mamba').intakeFlowLpm).toBeUndefined();
  expect(product('Black Mamba').dutyCycle).toBe(1);
  expect(product('Double Mamba white').fadCurve).toEqual([{pressureBar:3.5,litersPerMinute:130}]);
  expect(product('TC108 DOUBLE/SPECIAL').maxPressureBar).toBe(6);
  expect(product('TC108 DOUBLE/SPECIAL').editorial.limitations.join(' ')).toContain('3,8 bar');
  expect(product('6-25').fadCurve).toEqual([{pressureBar:8,litersPerMinute:32}]);
  expect(product('6-25').dutyCycle).toBe(.5);
  expect(product('6-25').powerKw).toBe(.34);
 });
 it('keeps missing cycles and missing FAD insufficient in the production engine', () => {
  const tool = {id:'fixture-tool',demandModel:'fixed-flow',workingPressureBar:{min:5,typical:5,max:5},airflowLpm:{min:10,typical:10,max:10},confidence:'B'};
  expect(evaluateCompatibility(product('Black Mamba'),tool).verdict).toBe('continuous');
  expect(evaluateCompatibility(product('Baby Mamba'),tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('H 10-500'),tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('FM90'),tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('LKV 4 MIT'),{...tool,workingPressureBar:{min:13,typical:13,max:13}}).verdict).toBe('insufficient_data');
 });
 it('links all critical fields and displayed facts to existing, dated primary proof IDs', () => {
  for (const p of batch) {
   const ids = new Set(p.evidence.map(e => e.id));
   for (const field of ['model','tankLiters','maxPressureBar','fadCurve',...(p.dutyCycle ? ['dutyCycle'] : []),...(p.oilType !== 'unknown' ? ['oilType'] : [])]) expect(p.fieldSources[field].length).toBeGreaterThan(0);
   for (const refs of Object.values(p.fieldSources)) for (const ref of refs) expect(ids.has(ref)).toBe(true);
   for (const spec of p.specifications) for (const ref of spec.evidenceIds) expect(ids.has(ref)).toBe(true);
   for (const e of p.evidence) { expect(e.retrievedAt).toBe('2026-10-04'); expect(e.sourceRole).toBe('primary'); expect(e.sourceUrl).toMatch(/^https:/); }
  }
 });
 const mutations = [
  ['FAD',s=>row(s,'Black Mamba').flow.value++],
  ['VSD minimum replaced by maximum',s=>row(s,'FRECON PLUS PM 5').flow.value=.53],
  ['missing FAD promoted',s=>row(s,'FM90').flow={...row(s,'HGS 2').flow}],
  ['intake relabelled as FAD',s=>row(s,'H 10-500').sourceClaimScope='FAD-pressure-qualified'],
  ['receiver unknown changed to zero',s=>row(s,'COMPACK 2').tank.value=0],
  ['receiver exclusion removed',s=>delete row(s,'LPYI 075/8.5 K').tank.mountProof],
  ['maximum as measured pressure',s=>row(s,'Double Mamba white').flow.pressure.value=8],
  ['unknown cycle to continuous',s=>row(s,'Baby Mamba').dutyCycle=1],
  ['frequency transpose',s=>row(s,'6-25').electrical.frequencyHz=60],
  ['model duplication',s=>s.compressors[1]=structuredClone(s.compressors[0])],
  ['count truncation',s=>s.compressors.pop()],
  ['HTTP404',s=>s.sources[0].status=404],
  ['capture date',s=>s.sources[0].observedAt='2026-10-03T10:00:00Z'],
  ['original SHA',s=>s.sources[0].sha256='0'.repeat(64)],
  ['zero bytes',s=>s.sources[0].bytes=0],
  ['wrong capture method',s=>s.sources[0].captureMethod='derived-text'],
  ['HTTP URL',s=>s.sources[0].url='http://www.hertz-kompressoren.com/a.pdf'],
  ['credentials in URL',s=>s.sources[0].url='https://u:p@www.hertz-kompressoren.com/a.pdf'],
  ['non-primary host',s=>s.sources[0].url='https://example.org/a.pdf'],
  ['erased semantics after rehash',s=>{s.sources[0].extractedPages[0].text='generic capacity';s.sources[0].extractedPagesSha256=createHash('sha256').update(JSON.stringify(s.sources[0].extractedPages)).digest('hex');}],
 ];
 it.each(mutations)('rejects %s',(_label,mutate)=>{const s=structuredClone(snapshot);mutate(s);expect(()=>build(s)).toThrow();});
});
