import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressorSchema } from '../../src/domain/catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { calculateSizing } from '../../server/air-sizing.mjs';
import { buildDocumentedCompressorsOctober4B as build, documentedCompressorIdentity as identity, parseSourceNumbers } from './documented-compressors-2026-10-04-b.mjs';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-compressors-2026-10-04-b.json', import.meta.url)));
const batch = build(snapshot);
const product = (brand, model) => batch.find(p => p.brand === brand && p.model === model);
const tool = { id:'fixture', demandModel:'fixed-flow', workingPressureBar:{min:6.3,typical:6.3,max:6.3}, airflowLpm:{min:100,typical:100,max:100}, confidence:'B' };
const puskaRangeCases = [
 ['3', 132, 294], ['4', 138, 360], ['5-5', 270, 504], ['7-5', 336, 756], ['9', 420, 966],
].flatMap(([model, minimum, maximum], index) => [
 { id: `puska-pke-${model}-vf-10`, minimum, maximum, page: 31, tableIndex: 2, rowIndex: (index + 1) * 2 },
 { id: `puska-pke-${model}-vf-10-200`, minimum, maximum, page: 31, tableIndex: 3, rowIndex: (index + 1) * 2 },
 { id: `puska-pke-${model}-vf-dry-10-200`, minimum, maximum, page: 32, tableIndex: 2, rowIndex: (index + 1) * 2 },
]);
const fixedDemand = (pressure, flow) => ({ ...tool, workingPressureBar: { min: pressure, typical: pressure, max: pressure }, airflowLpm: { min: flow, typical: flow, max: flow } });
describe('documented compressors October4 lot B', () => {
 it('adds 420 separate manufacturer identities across eight brands with pressure-qualified FAD', () => {
  expect(batch).toHaveLength(420);
  expect(new Set(batch.map(p => p.id)).size).toBe(420);
  expect(new Set(snapshot.compressors.map(p => p.normalizedIdentity)).size).toBe(420);
  expect(Object.fromEntries([...new Set(batch.map(p => p.brand))].map(b => [b,batch.filter(p=>p.brand===b).length]))).toEqual({Hertz:34,Dalgakiran:34,Lupamat:35,Puska:118,Fini:23,Nuair:85,Shamal:68,Quincy:23});
  for (const p of batch) { expect(compressorSchema.safeParse(p).success,p.id).toBe(true); expect(p.fadCurve).toHaveLength(1); expect(p).not.toHaveProperty('intakeFlowLpm'); }
  expect(identity('LKV 18.5 D')).not.toBe(identity('LKV 185 D'));
  expect(identity('LKV 18,5 D')).toBe(identity('LKV 18.5 D'));
 });
 it('preserves a declared Spanish numeric locale without applying it to decimal m3/min or kW', () => {
  expect(parseSourceNumbers('1.332','spanish-thousands')).toEqual([1332]);
  expect(parseSourceNumbers('1.860','spanish-thousands')).toEqual([1860]);
  expect(parseSourceNumbers('1.332','decimal')).toEqual([1.332]);
  expect(parseSourceNumbers('5,5','decimal')).toEqual([5.5]);
  expect(parseSourceNumbers('1.332 - 5.556','spanish-thousands')).toEqual([1332,5556]);
  expect(()=>parseSourceNumbers('1.33','spanish-thousands')).toThrow();
  expect(()=>parseSourceNumbers('1.332.000','decimal')).toThrow();
  expect(()=>parseSourceNumbers('1.332','automatic')).toThrow();
  expect(product('Puska','CNR 155/BM S YD').fadCurve).toEqual([{pressureBar:10,litersPerMinute:1332}]);
  expect(product('Puska','CNR 200/BM S YD').fadCurve).toEqual([{pressureBar:10,litersPerMinute:1860}]);
  const conflictingPower = product('Puska','CNR 100/270 S YD');
  expect(conflictingPower.powerKw).toBeUndefined();
  expect(conflictingPower.specifications).toContainEqual(expect.objectContaining({label:'Puissance publiée à confirmer',value:'5,5 kW dans cette ligne, 7,5 kW pour la version de base du même CNR 100'}));
 });
 it.each(puskaRangeCases)('uses the sourced capacity maximum and retains the minimum for $id', ({ id, minimum, maximum, page, tableIndex, rowIndex }) => {
  const row = snapshot.compressors.find(p => p.id === id), p = batch.find(p => p.id === id);
  const coordinate = { sourceId: 'puska-catalog-2025', page, tableIndex, rowIndex };
  expect(row.flow.value).toBe(minimum);
  expect(row.flow.ref).toMatchObject({ ...coordinate, columnIndex: 7, raw: `${minimum}-${maximum}`, numberIndex: 0 });
  expect(row.modelProof).toMatchObject({ ...coordinate, columnIndex: 1, raw: row.model });
  expect(row.flow.pressure.ref).toMatchObject({ ...coordinate, columnIndex: 4, raw: '10' });
  expect(row.maximum.ref).toMatchObject({ ...coordinate, columnIndex: 4, raw: '10' });
  expect(p.fadCurve).toEqual([{ pressureBar: 10, litersPerMinute: maximum }]);
  expect(p.maxPressureBar).toBe(10);
  const evidenceIds = [`october4b-puska-catalog-2025-p${page}`];
  expect(p.fieldSources.fadCurve).toEqual(evidenceIds);
  expect(p.evidence).toContainEqual(expect.objectContaining({ id: evidenceIds[0], sourceUrl: expect.stringContaining(`#page=${page}`), sourceRole: 'primary' }));
  expect(p.specifications).toContainEqual({ label: 'FAD maximal déclaré à 10 bar', value: `${maximum} L/min`, evidenceIds });
  expect(p.specifications).toContainEqual({ label: 'FAD minimal déclaré à 10 bar', value: `${minimum} L/min ; minimum de la plage publiée, distinct de la capacité maximale`, evidenceIds });
  expect(p.editorial.overview).toContain('maximum de la plage FAD publiée');
  expect(p.editorial.limitations.join(' ')).not.toContain('seul son minimum est utilisé');
  expect(p).not.toHaveProperty('dutyCycle');
  expect(p.fieldSources).not.toHaveProperty('dutyCycle');
  expect(evaluateCompatibility(p, fixedDemand(10, (minimum + maximum) / 2)).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(p, fixedDemand(10, maximum + 1)).verdict).toBe('incompatible');
 });
 it('keeps the Puska capacity and pressure boundaries conclusive without inferring endurance', () => {
  expect(batch.filter(p => p.specifications.some(s => s.label === 'FAD maximal déclaré à 10 bar'))).toHaveLength(15);
  const p = product('Puska', 'PKE 3 VF 10');
  expect(evaluateCompatibility(p, fixedDemand(10, 200))).toMatchObject({ verdict: 'insufficient_data', limitingFactor: 'data', availableFadLpm: 294, availableFadBasis: 'exact' });
  expect(evaluateCompatibility(p, fixedDemand(10, 294)).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(p, fixedDemand(10, 295))).toMatchObject({ verdict: 'incompatible', limitingFactor: 'flow' });
  expect(evaluateCompatibility(p, fixedDemand(11, 200))).toMatchObject({ verdict: 'incompatible', limitingFactor: 'pressure' });
  expect(evaluateCompatibility(p, fixedDemand(6.3, 200))).toMatchObject({ verdict: 'insufficient_data', limitingFactor: 'data', availableFadBasis: 'higher-pressure-bound' });
  const before = JSON.stringify(snapshot);
  build(snapshot);
  expect(JSON.stringify(snapshot)).toBe(before);
 });
 it('keeps the Quincy original units and sourced SI conversions without guessing gallon volume', () => {
  const p = product('Quincy','QGS-5');
  expect(p.fadCurve).toEqual([{pressureBar:9.997,litersPerMinute:475.723}]);
  expect(p.maxPressureBar).toBe(9.997);
  expect(p.tankLiters).toBeUndefined();
  expect(p.powerKw).toBeUndefined();
  expect(p.specifications).toContainEqual(expect.objectContaining({label:'Colonne réservoir du document original',value:'60 gallon'}));
  expect(p.evidence).toContainEqual(expect.objectContaining({sourceUrl:expect.stringContaining('www.nist.gov')}));
  expect(product('Quincy','QGS-40').tankLiters).toBeUndefined();
 });
 it('preserves 245 unknown tanks, 296 unknown cycles and 279 unknown frequencies', () => {
  expect(batch.filter(p=>p.tankLiters===undefined)).toHaveLength(245);
  expect(batch.filter(p=>p.tankLiters!==undefined)).toHaveLength(175);
  expect(batch.filter(p=>p.dutyCycle===1)).toHaveLength(124);
  expect(snapshot.compressors.filter(p=>p.electrical===null)).toHaveLength(279);
  expect(snapshot.compressors.filter(p=>p.electrical?.frequencyHz===50)).toHaveLength(141);
  for(const p of batch.filter(p=>p.tankLiters===undefined)) {expect(p).not.toHaveProperty('tankLiters');expect(p.fieldSources).not.toHaveProperty('tankLiters');expect(p.variant.distinguishingAttributes.cuve).toBe('Non documentée');expect(JSON.stringify(p)).not.toContain('undefined L');}
  expect(product('Fini','MiniCUBE 2.2-08').tankLiters).toBe(0);
  expect(product('Fini','MiniCUBE 2.2-08-90').tankLiters).toBe(90);
 });
 it('concludes continuous supply only with sufficient qualified dimensions and does not invent reserve duration', () => {
  const verdicts = Object.fromEntries(['continuous','intermittent','insufficient_data','incompatible'].map(v=>[v,batch.filter(p=>evaluateCompatibility(p,tool).verdict===v).length]));
  expect(verdicts).toEqual({continuous:124,intermittent:0,insufficient_data:296,incompatible:0});
  const nuair = product('Nuair','MERCURY Mech 2.2-08');
  expect(nuair.tankLiters).toBeUndefined();
  expect(evaluateCompatibility(nuair,tool).verdict).toBe('continuous');
  expect(evaluateCompatibility(product('Hertz','IMPETUS 22'),tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('Puska','CNR 155/BM S YD'),{...tool,workingPressureBar:{min:11,typical:11,max:11}}).verdict).toBe('incompatible');
  const compressor={maxPressureBar:8,availableFadLpm:325,dutyCycle:1,cutInPressureBar:7,cutOutPressureBar:8};
  const result=calculateSizing({mode:'successive',sessionMinutes:30,safetyMargin:.25,demands:[{id:'burst',model:'fixed-flow',quantity:1,flowLpm:600,pressureBar:6.3,dutyFactor:.2}],compressor});
  expect(result.verdict).toBe('insufficient_data');
  for(const key of ['usableTankAirLiters','estimatedWorkMinutes','estimatedRecoveryMinutes','burstScenario'])expect(result[key]).toBeUndefined();
 });
 it('links claims to existing dated primary evidence without publishing missing fields as zero', () => {
  for(const p of batch) {
   const ids=new Set(p.evidence.map(e=>e.id));
   for(const field of ['model','maxPressureBar','fadCurve',...(p.tankLiters===undefined?[]:['tankLiters']),...(p.dutyCycle?['dutyCycle']:[])])expect(p.fieldSources[field].length,p.id).toBeGreaterThan(0);
   for(const refs of Object.values(p.fieldSources))for(const ref of refs)expect(ids.has(ref)).toBe(true);
   for(const spec of p.specifications)for(const ref of spec.evidenceIds)expect(ids.has(ref)).toBe(true);
   for(const e of p.evidence){expect(e.retrievedAt).toBe('2026-10-04');expect(e.sourceRole).toBe('primary');expect(e.sourceUrl).toMatch(/^https:/);}
  }
 });
 const mutations=[
  ['FAD',s=>s.compressors[0].flow.value++],
  ['unknown tank replaced by zero',s=>s.compressors[0].tank={value:0,unit:'L',ref:s.compressors[0].maximum.ref}],
  ['unknown cycle to continuous',s=>s.compressors[0].dutyCycle=1],
  ['unknown frequency to 50 Hz',s=>s.compressors[0].electrical={...s.compressors[0].maximum.ref,frequencyHz:50}],
  ['pressure-only extra identity',s=>s.compressors.push(structuredClone(s.compressors[0]))],
  ['count truncation',s=>s.compressors.pop()],
  ['locale erased',s=>delete s.compressors.find(x=>x.model==='CNR 155/BM S YD').flow.ref.numberFormat],
  ['raw thousands misread as decimal',s=>s.compressors.find(x=>x.model==='CNR 155/BM S YD').flow.value=1.332],
  ['Puska historical lower endpoint replaced',s=>s.compressors.find(x=>x.id==='puska-pke-3-vf-10').flow.value=294],
  ['Puska upper endpoint selected in sealed transcription',s=>s.compressors.find(x=>x.id==='puska-pke-3-vf-10').flow.ref.numberIndex=1],
  ['Puska range from the 8-bar configuration',s=>{const r=s.compressors.find(x=>x.id==='puska-pke-3-vf-10');r.flow.ref={...r.flow.ref,rowIndex:1,raw:'138-360'};}],
  ['Puska wrong model-row association',s=>s.compressors.find(x=>x.id==='puska-pke-3-vf-10').modelProof.rowIndex=4],
  ['gallon converted without qualification',s=>s.compressors.find(x=>x.model==='QGS-5').tank={value:227.125,unit:'L',ref:s.compressors[0].maximum.ref}],
  ['intake relabelled as FAD',s=>s.compressors[0].sourceClaimScope='piston-displacement-only'],
  ['HTTP 404',s=>s.sources[0].status=404],
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
