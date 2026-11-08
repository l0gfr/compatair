import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {describe,it,expect} from 'vitest';
import {parseCatalogProductSource,buildCatalogProductSource} from './catalog-tooling.mjs';
import {applyReservedNovember6CopyFollowup,beforeReservedNovember6CopyFollowup} from './reviewed-catalog-amendments-2026-11-06-copy.mjs';
import {toolProfileSchema,compressorSchema} from '../../src/domain/catalog';
import {compressors,CATALOG_VERIFIED_AT} from '../../src/data/catalog';
import {createRuntimeCatalog} from '../../src/domain/runtime-catalog';
import {evaluateCompatibility} from '../../server/air-compatibility.mjs';
import {evidenceHistory} from '../../src/data/evidence-history';
const read=p=>readFileSync(new URL('../../'+p,import.meta.url)),hash=b=>createHash('sha256').update(b).digest('hex');
const snapshot=JSON.parse(read('src/data/imports/catalog-amendments-reviewed-2026-11-06-copy.json'));
const fields=['id','slug','categoryId','brand','model','mpn','confidence','demandModel','airflowBasis','airflowLpm','airPerActionLiters','workingPressureBar','demandExplanation','dutyFactor','connectorSize','recommendedHose'];
describe('November6 text aligned with nonconclusive demand',()=>{
 it('replays24 exact current records and preserves all published bytes and evidence',()=>{
  expect(snapshot.rows).toHaveLength(24);expect(new Set(snapshot.rows.map(r=>r.id)).size).toBe(24);
  for(const row of snapshot.rows){
   const after=parseCatalogProductSource('tools',read(row.file).toString()),before=beforeReservedNovember6CopyFollowup(after);
   expect(after).toEqual(row.after);expect(before).toEqual(row.before);expect(applyReservedNovember6CopyFollowup(structuredClone(before))).toEqual(after);
   expect(applyReservedNovember6CopyFollowup(structuredClone(after))).toEqual(after);
   let old=buildCatalogProductSource('tools',Object.fromEntries(row.sourcePropertyOrder.map(k=>[k,before[k]])),row.sourceIndentation);if(row.sourceCompactExport)old=old.replace(';\n\nexport',';\nexport');
   expect(hash(old)).toBe(row.beforeFileSha256);expect(hash(read(row.file))).toBe(row.afterFileSha256);
   expect(after.evidence.slice(0,before.evidence.length)).toEqual(before.evidence);
   for(const field of fields)expect(after[field],row.id+'/'+field).toEqual(before[field]);
   for(const field of ['brand','model','mpn'])expect(()=>applyReservedNovember6CopyFollowup({...before,[field]:'unknown'})).toThrow('identity');
   const changed=structuredClone(before);changed[row.fields[0]]='unknown';expect(()=>applyReservedNovember6CopyFollowup(changed)).toThrow('base');
   const text=JSON.stringify({overview:after.editorial.overview,facts:after.editorial.verifiedFacts,specifications:after.specifications});
   expect(text,row.id).not.toMatch(/Le dimensionnement utilise|retenue pour le dimensionnement|La plus grande valeur publiée est retenue|Pression de référence retenue|La cadence doit être renseignée pour dimensionner/);
   if(after.id.startsWith('sioux-'))expect(text).not.toContain('consommations maximales, sauf indication contraire');
  }
 });
 it('preserves38536 published events and appends exactly24 current clarifications',()=>{
  expect(evidenceHistory.events).toHaveLength(38560);
  expect(hash(JSON.stringify(evidenceHistory.events.slice(0,38536)))).toBe(snapshot.evidenceHistoryAppend.previousEventsSha256);
  expect(evidenceHistory.events.slice(38536).every(e=>e.evidenceId.startsWith('review:2026-11-06-copy:'))).toBe(true);
 });
 it('keeps every native and runtime engine result identical and nonconclusive',()=>{
  const ample=compressorSchema.parse({...compressors[0],maxPressureBar:50,dutyCycle:1,fadCurve:[{pressureBar:1,litersPerMinute:100000},{pressureBar:50,litersPerMinute:100000}]});
  for(const row of snapshot.rows){
   const a=toolProfileSchema.parse(row.after),b=toolProfileSchema.parse(row.before);
   const ra=JSON.parse(JSON.stringify(createRuntimeCatalog([ample],[a],CATALOG_VERIFIED_AT,'a'.repeat(64)))),rb=JSON.parse(JSON.stringify(createRuntimeCatalog([ample],[b],CATALOG_VERIFIED_AT,'a'.repeat(64))));
   const {evidence:currentProofs,...currentRuntime}=ra.tools[0],{evidence:oldProofs,...previousRuntime}=rb.tools[0];expect(currentRuntime,row.id).toEqual(previousRuntime);expect(currentProofs.slice(0,oldProofs.length),row.id).toEqual(oldProofs);expect(evaluateCompatibility(ample,a),row.id).toEqual(evaluateCompatibility(ample,b));
   expect(evaluateCompatibility(ra.compressors[0],ra.tools[0]),row.id).toEqual(evaluateCompatibility(ample,a));expect(evaluateCompatibility(ample,a).verdict,row.id).toBe('insufficient_data');
  }
 });
});
