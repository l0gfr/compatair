import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { describe, expect, it } from 'vitest';
import { buildDocumentedCompressorsOctober3D as build } from './documented-compressors-2026-10-03-d.mjs';
const localSnapshot = new URL('./documented-compressors-2026-10-03-d.json', import.meta.url);
const snapshot = JSON.parse(readFileSync(existsSync(localSnapshot) ? localSnapshot : new URL('../../src/data/imports/documented-compressors-2026-10-03-d.json', import.meta.url)));
const catalogRoot = existsSync(new URL('../../src/domain/catalog.ts', import.meta.url)) ? fileURLToPath(new URL('../../', import.meta.url)) : process.cwd();
const { compressorSchema } = await import(pathToFileURL(resolve(catalogRoot, 'src/domain/catalog.ts')).href);
const { evaluateCompatibility } = await import(pathToFileURL(resolve(catalogRoot, 'server/air-compatibility.mjs')).href);
const batch = build(snapshot);
const product = model => batch.find(p => p.model === model);
const row = (s, model) => s.compressors.find(p => p.model === model);
const source = (s, id) => s.sources.find(p => p.id === id);
const rehash = s => { if (s.extractedPages) s.extractedPagesSha256 = createHash('sha256').update(JSON.stringify(s.extractedPages)).digest('hex'); if (s.extractedText) s.extractedTextSha256 = createHash('sha256').update(s.extractedText).digest('hex'); };
describe('documented compressors October3D', () => {
 it('keeps exactly200 distinct new model identities across7 manufacturers', () => {
  expect(batch).toHaveLength(200); expect(new Set(batch.map(p => `${p.brand}|${p.model}`)).size).toBe(200);
  expect(new Set(batch.map(p => p.id)).size).toBe(200);
  expect(Object.fromEntries([...new Set(batch.map(p => p.brand))].map(b => [b, batch.filter(p => p.brand === b).length]))).toEqual({ Bambi:33, EKOM:38, Mattei:29, MARK:34, ALUP:31, CompAir:5, Airpol:30 });
  for (const p of batch) expect(compressorSchema.safeParse(p).success).toBe(true);
 });
 it('separates measured FAD and maximum/range ceiling', () => {
  expect(product('MSM 4 IVR').maxPressureBar).toBe(10); expect(product('MSM 4 IVR').fadCurve).toEqual([{pressureBar:9.5, litersPerMinute:503.333}]);
  expect(product('ERC 5').maxPressureBar).toBe(13); expect(product('ERC 5').fadCurve[0].pressureBar).toBe(12.5);
  expect(product('DK50-10Z').maxPressureBar).toBe(8); expect(product('DK50-10Z').fadCurve[0].pressureBar).toBe(6);
  expect(product('BLADE 8').maxPressureBar).toBe(10); expect(product('BLADE 8').fadCurve).toEqual([{pressureBar:9.5, litersPerMinute:995}]);
 });
 it('uses the actual IVR table instead of matching fixed model values', () => {
  for (const [model, flow, fixed] of [['MSM 4 IVR',30.2,27.7],['MSM 5.5 IVR',45.4,43.6],['MSM 7 IVR',58,55.3]]) {
   expect(row(snapshot,model).flowOriginal).toBe(flow); expect(row(snapshot,model).flowOriginal).not.toBe(fixed);
   expect(row(snapshot,model).sourceId).toBe('mark-family-12');
   expect(product(model).editorial.limitations.join(' ')).toContain('minimum de débit à ce point non documenté');
  }
 });
 it('keeps only15bar for fixed Airpol and conservative minimum at10bar for KPR/KTPR', () => {
  for (const [model,m3h] of [['18',90],['22',120],['30',190],['37',245],['45',280],['55',350]]) {
   const p=product(model); expect(p.brand).toBe('Airpol');expect(p.maxPressureBar).toBe(15);expect(p.fadCurve).toEqual([{pressureBar:15,litersPerMinute:Number((m3h*1000/60).toFixed(3))}]);expect(p.dutyCycle).toBeUndefined();
  }
  expect(product('KPR 5').fadCurve).toEqual([{pressureBar:10,litersPerMinute:166.667}]);expect(product('KTPR D15').fadCurve).toEqual([{pressureBar:10,litersPerMinute:866.667}]);
  expect(product('KPR 5').dutyCycle).toBeUndefined();expect(product('KTPR D15').tankLiters).toBe(500);
 });
 it('preserves actual mounts and limitations on unknown frequency or cycle', () => {
  expect(product('BLADE SE 12').tankLiters).toBe(270);expect(product('BLADE E 12').tankLiters).toBe(0);
  expect(product('SRK 2').tankLiters).toBe(500);expect(product('SR 2').tankLiters).toBe(0);
  expect(product('SR 2').editorial.limitations.join(' ')).toContain('Tiret dans colonne');
  expect(product('VT75').variant.distinguishingAttributes.fréquence).toBeUndefined();
  expect(product('DK50 6x4VRTS/M').dutyCycle).toBeUndefined();expect(product('RMP 8 IVR').oilType).toBe('unknown');
  expect(product('RMB 18').powerKw).toBeUndefined();expect(product('LARGO 55').mpn).toBe('8153338551');
  expect(batch.every(p=>p.mobility===undefined)).toBe(true);
 });
 it('keeps documentation gaps insufficient in the actual engine', () => {
  const tool={id:'fixture-tool',demandModel:'fixed-flow',workingPressureBar:{min:6,typical:6,max:6},airflowLpm:{min:30,typical:30,max:30},confidence:'B'};
  expect(evaluateCompatibility(product('DK50-10Z'),tool).verdict).toBe('continuous');
  expect(evaluateCompatibility(product('DK50 6x4VRTS/M'),tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('18'),tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('SR 2'),tool).verdict).toBe('continuous');
  expect(evaluateCompatibility(product('KPR 5'),tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('SR 2'),{...tool,workingPressureBar:{min:11,typical:11,max:11}}).verdict).toBe('incompatible');
 });
 it('links every critical value and all display proofs with valid history IDs', () => {
  for(const p of batch){const ids=new Set(p.evidence.map(e=>e.id));for(const k of ['tankLiters','maxPressureBar','fadCurve',...(p.oilType==='unknown'?[]:['oilType']),...(p.dutyCycle===undefined?[]:['dutyCycle'])])expect(p.fieldSources[k].length).toBeGreaterThan(0);for(const refs of Object.values(p.fieldSources))for(const ref of refs)expect(ids.has(ref)).toBe(true);for(const spec of p.specifications)for(const ref of spec.evidenceIds)expect(ids.has(ref)).toBe(true);for(const id of ids)expect(`added:${p.id}:${id}:2026-10-03`).toMatch(/^[a-z0-9:-]+$/);}
  expect(product('Allegretto 15').fieldSources.maxPressureBar).toContain('october3d-alup-extra-18');
  expect(product('LARGO 55').fieldSources.mpn).toContain('october3d-alup-shop-largo55-10');
 });
 const mutations=[
  ['FAD', s=>row(s,'VT75').points[0].litersPerMinute++],
  ['intake replacement', s=>row(s,'MSM 4 IVR').flowUnit='intake-l/min'],
  ['wrong fixed flow for IVR4', s=>row(s,'MSM 4 IVR').flowOriginal=27.7],
  ['wrong fixed flow for IVR5.5', s=>row(s,'MSM 5.5 IVR').flowOriginal=43.6],
  ['wrong fixed flow for IVR7', s=>row(s,'MSM 7 IVR').flowOriginal=55.3],
  ['maximum as point', s=>row(s,'ERC 5').pressureBar=13],
  ['nominal maximum', s=>row(s,'BLADE 8').maxPressureBar=9.5],
  ['range ceiling', s=>row(s,'DK50-10Z').maxPressureBar=9],
  ['measurement pressure', s=>row(s,'DK50-10Z').pressureBar=8],
  ['model column', s=>row(s,'DK50-10Z').modelRef.columnIndex=2],
  ['receiver', s=>row(s,'SRK 2').tankLiters=240],
  ['receiver interpretation removed', s=>delete row(s,'SR 2').mountInterpretation],
  ['fixed mount assumption', s=>row(s,'BLADE 8').tankLiters=270],
  ['frequency inference', s=>row(s,'VT75').frequencyHz=50],
  ['frequency transpose', s=>row(s,'BLADE 8').frequencyHz=60],
  ['unknown duty to continuous', s=>row(s,'DK50 6x4VRTS/M').dutyCycle=1],
  ['24/7 advertising to duty', s=>row(s,'18').dutyCycle=1],
  ['VSD maximum replaces conservative minimum', s=>row(s,'KPR 5').flowRef.numberIndex=1],
  ['VSD point of another configuration', s=>row(s,'KPR 5').pressureBar=8],
  ['fixed Airpol curve mixes versions', s=>row(s,'18').pressureBar=8],
  ['oil assumption', s=>row(s,'RMP 8 IVR').oilType='oil'],
  ['HTML/PDF power contradiction silently resolved', s=>row(s,'RMB 18').powerRaw='19'],
  ['MPN wrong SKU', s=>row(s,'LARGO 55').mpn='8153338552'],
  ['unqualified supply', s=>row(s,'L02 - (230 V)').frequencyHz=50],
  ['duplicate model', s=>s.compressors[1]=structuredClone(s.compressors[0])],
  ['partial count', s=>s.compressors.pop()],
  ['non HTTPS', s=>s.sources[0].url='http://bambi-air.co.uk/a'],
  ['credentials', s=>s.sources[0].url='https://a:b@bambi-air.co.uk/a'],
  ['non primary host', s=>s.sources[0].url='https://example.org/a'],
  ['HTTP404 capture', s=>s.sources[0].status=404],
  ['wrong capture day', s=>s.sources[0].observedAt='2026-10-02T00:00:00Z'],
  ['invalid response SHA', s=>s.sources[0].sha256='invalid'],
  ['zero response bytes', s=>s.sources[0].bytes=0],
  ['extracted text tamper', s=>s.sources[0].extractedText+='modified'],
  ['HTML cells tamper', s=>source(s,'mark-family-12').htmlTables[0][2][3]='999'],
  ['normalized proof ID collision', s=>s.sources.push({...s.sources[0],id:s.sources[0].id.replaceAll('-','_')})],
 ];
 it.each(mutations)('rejects %s',(_name,mutate)=>{const v=structuredClone(snapshot);mutate(v);expect(()=>build(v)).toThrow();});
 it('rejects erased FAD/max/duty semantics even after rehashing excerpts',()=>{
  let v=structuredClone(snapshot);const f=source(v,'airpol-scroll-max');f.extractedText=f.extractedText.replace('Free air delivery','Capacity');rehash(f);expect(()=>build(v)).toThrow(/Preuve Airpol/);
  v=structuredClone(snapshot);const b=source(v,'mattei-pdf-11');b.extractedPages.find(p=>p.page===6).text='Nominal10bar only';rehash(b);expect(()=>build(v)).toThrow(/Portée technique BLADE/);
  v=structuredClone(snapshot);const e=source(v,'ekom-manual-01');const p=e.extractedPages.find(p=>p.page===16),r=row(v,'DK50-10Z');p.tables[r.pressureRef.tableIndex][r.pressureRef.rowIndex][0]='Safety pressure';rehash(e);expect(()=>build(v)).toThrow(/Sémantique/);
 });
});
