import {readFileSync} from 'node:fs';
import {describe,it,expect} from 'vitest';
import {buildDocumentedExpansionD} from './documented-expansion-2026-09-30-d.mjs';
import {evaluateCompatibility} from '../../server/air-compatibility.mjs';
import {compressors,tools} from '../../src/data/catalog';
import {toolCategoryLabel} from '../../src/data/taxonomy';
import {compressorSchema,toolProfileSchema} from '../../src/domain/catalog';
const snapshot=JSON.parse(readFileSync(new URL('../../src/data/imports/documented-expansion-2026-09-30-d.json',import.meta.url)));
const batch=buildDocumentedExpansionD(snapshot);
describe('reviewed documentary expansion D',()=>{
 it('keeps actual identities, source dates and all requested additions',()=>{
  expect(batch.compressors).toHaveLength(200);expect(batch.tools).toHaveLength(1000);
  expect(new Set([...batch.compressors,...batch.tools].map(x=>x.id)).size).toBe(1200);
  expect(new Set(batch.tools.map(x=>x.label)).size).toBe(1000);
  expect(new Set(batch.tools.map(x=>x.brand))).toEqual(new Set(['Atlas Copco','Sumake','Desoutter','Fuji','PREBENA','Senco']));
  expect(batch.tools.filter(x=>x.brand==='Fuji').every(x=>x.evidence.every(e=>e.retrievedAt==='2026-09-25'))).toBe(true);
 });
 it('reconstructs the exact imported records from the versioned source transcriptions',()=>{
  for(const p of batch.compressors)expect(compressors.find(x=>x.id===p.id),p.id).toEqual(compressorSchema.parse(p));
  for(const p of batch.tools)expect(tools.find(x=>x.id===p.id),p.id).toEqual(toolProfileSchema.parse({...p,category:toolCategoryLabel(p.categoryId)}));
 });
 it('keeps measurement pressure apart from operating range, cooling variants and VSD minima',()=>{
  expect(batch.compressors.find(x=>x.mpn==='300001').fadCurve).toEqual([{pressureBar:10,litersPerMinute:270}]);
  const f=batch.compressors.find(x=>x.model==='F-DRIVE 6');expect(f.maxPressureBar).toBe(13);expect(f.fadCurve).toEqual([{pressureBar:7,litersPerMinute:940}]);
  const water=batch.compressors.find(x=>x.model==='LENTO 31 water-cooled'),air=batch.compressors.find(x=>x.model==='LENTO 31 air-cooled');
  expect(water.fadCurve[0].litersPerMinute).toBe(5080);expect(air.fadCurve[0].litersPerMinute).toBe(5000);
  expect(batch.compressors.filter(x=>x.brand==='BOGE').every(x=>!x.fadCurve.length)).toBe(true);
 });
 it('preserves known maxima while refusing unqualified, contradictory and pressure-incomplete consumption',()=>{
  const ample=batch.compressors.find(x=>x.model==='G-DRIVE T 20 air-cooled');
  const atlas=batch.tools.find(x=>x.mpn==='8431027865');expect(atlas.airflowLpm.typical).toBe(450);expect(evaluateCompatibility(ample,atlas).verdict).toBe('continuous');
  const sumake=batch.tools.find(x=>x.brand==='Sumake');expect(sumake.airflowBasis).toBe('unqualified');expect(evaluateCompatibility(ample,sumake).verdict).toBe('insufficient_data');
  const disputed=batch.tools.find(x=>x.mpn==='2051472654');expect(disputed.demandModel).toBe('variable-volume');expect(disputed.airflowLpm).toBeUndefined();expect(evaluateCompatibility(ample,disputed).verdict).toBe('insufficient_data');
  const crossed=batch.tools.find(x=>x.mpn==='1459054');expect(crossed.demandModel).toBe('variable-volume');expect(crossed.airflowLpm).toBeUndefined();expect(crossed.specifications.some(x=>x.value.includes('6.5 l/s'))).toBe(true);
  const senco=batch.tools.find(x=>x.model==='SLS20XP');expect(senco.workingPressureBar.typical).toBeUndefined();expect(senco.workingPressureBar).toEqual({min:4.8,max:8.3});
  const module=batch.tools.find(x=>x.model==='MODUL 11-Z40-H');expect(module).toMatchObject({demandModel:'per-action',airPerActionLiters:.95,workingPressureBar:{min:4.5,typical:6,max:6}});
 });
 it('rejects altered documentary values, erased ambiguity, fabricated service scope and invalid provenance',()=>{
  for(const change of [s=>s.compressors[0].pressureBar=13,s=>s.compressors.find(x=>x.model==='F-DRIVE 6').flows[0].pressureBar=13,s=>s.compressors.find(x=>x.brand==='BOGE').flows.push({pressureBar:8,litersPerMinute:99999}),s=>s.tools.find(x=>x.brand==='Sumake').flowBasis='maximum',s=>s.tools.find(x=>x.unitConflict===true).unitConflict=false,s=>s.compressors[0].model='RS-B 99.0',s=>s.sources[0].sha256='missing']){const copy=structuredClone(snapshot);change(copy);expect(()=>buildDocumentedExpansionD(copy)).toThrow();}
 });
 it('keeps SENCO numeric cells attached to their own model column',()=>{
  const sls=snapshot.tools.find(x=>x.brand==='Senco' && x.model==='SLS18MG');expect(sls.flowLpm).toBe(68);expect(sls.pressureMin).toBe(4.8);expect(sls.details[0].value).toBe('260 mm');
  const sn=snapshot.tools.find(x=>x.brand==='Senco' && x.model==='SN1302');expect(sn.flowLpm).toBe(255);
  const copy=structuredClone(snapshot);copy.tools.find(x=>x.brand==='Senco').details[0].value='241 mm 260 mm 310 mm';expect(()=>buildDocumentedExpansionD(copy)).toThrow('Colonne SENCO');
 });
 it('rejects an erased contradiction between the Desoutter individual page and catalog',()=>{
  const copy=structuredClone(snapshot);copy.tools.find(x=>x.mpn==='1459054').catalogueConflict=false;expect(()=>buildDocumentedExpansionD(copy)).toThrow('Contradiction catalogue');
 });
});
