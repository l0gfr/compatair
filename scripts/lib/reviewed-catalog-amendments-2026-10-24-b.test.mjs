import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {describe,expect,it} from 'vitest';
import {parseCatalogProductSource} from './catalog-tooling.mjs';
import {applyReviewedOctober24TechnicalAmendment} from './reviewed-catalog-amendments-2026-10-24-b.mjs';
import {technicalCardSvg} from './technical-card.mjs';
import {buildDocumentedExpansion} from './documented-expansion-2026-09-30.mjs';
import {tools,compressors,CATALOG_VERIFIED_AT} from '../../src/data/catalog';
import {toolProfileSchema,compressorSchema} from '../../src/domain/catalog';
import {createRuntimeCatalog,runtimeCatalogSchema} from '../../src/domain/runtime-catalog';
import {evaluateCompatibility} from '../../server/air-compatibility.mjs';
const snapshot=JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-24-b.json',import.meta.url),'utf8'));
const review=JSON.parse(readFileSync(new URL('../../docs/editorial/technical-qualification-2026-10-24.json',import.meta.url),'utf8'));
const native=row=>parseCatalogProductSource(row.kind,readFileSync(new URL(`../../src/data/products/${row.kind}/${row.id}.ts`,import.meta.url),'utf8'));
const original=row=>{
 const p=native(row);
 for(const key of row.fields) {
  if(Object.hasOwn(row.before,key))p[key]=structuredClone(row.before[key]);
  else delete p[key];
 }
 return p;
};
const ample={id:'qualification-fixture',maxPressureBar:15,tankLiters:500,fadCurve:[{pressureBar:6,litersPerMinute:10000},{pressureBar:6.3,litersPerMinute:10000}],dutyCycle:1,oilType:'oil',confidence:'B'};

describe('October24 technical qualification correction without admissions',()=>{
 it('reconstructs exactly35 reviewed native records, removes optional unsupported fields, and preserves identities, evidence and unrelated fields',()=>{
  expect(snapshot.rows).toHaveLength(35);expect(snapshot.technicalCards).toHaveLength(34);
  for(const row of snapshot.rows){
   const before=original(row),after=applyReviewedOctober24TechnicalAmendment(structuredClone(before));
   expect(after,row.id).toEqual(native(row));
   expect(after.evidence,row.id).toEqual(before.evidence);
   for(const key of Object.keys(before).filter(k=>!row.fields.includes(k)))expect(after[key],`${row.id}:${key}`).toEqual(before[key]);
   expect(applyReviewedOctober24TechnicalAmendment(structuredClone(after)),row.id).toEqual(after);
   expect(()=> (row.kind==='tools'?toolProfileSchema:compressorSchema).parse(after),row.id).not.toThrow();
   for(const identity of ['brand','model','mpn'])expect(()=>applyReviewedOctober24TechnicalAmendment({...before,[identity]:'different'}),row.id).toThrow('Identité');
   const drift=structuredClone(before);drift[row.fields[0]]='unreviewed';expect(()=>applyReviewedOctober24TechnicalAmendment(drift),row.id).toThrow('Base différente');
  }
  const untouched={id:'outside-cohort',airflowLpm:{typical:123}};expect(applyReviewedOctober24TechnicalAmendment(untouched)).toBe(untouched);
 });
 it('keeps all36 inadequately qualified tool demands inconclusive in native and runtime projections, even with ample compressor supply',()=>{
  const selected=review.tools.map(e=>tools.find(t=>t.id===e.id));expect(selected).toHaveLength(37);expect(selected.every(Boolean)).toBe(true);
  const runtime=runtimeCatalogSchema.parse(createRuntimeCatalog([],selected,CATALOG_VERIFIED_AT,'a'.repeat(64)));
  for(const tool of selected){
   const entry=review.tools.find(e=>e.id===tool.id);
   const projected=runtime.tools.find(t=>t.id===tool.id);expect(projected).toBeDefined();
   for(const p of [tool,projected]){
    const result=evaluateCompatibility(ample,p);
    if(entry.decision==='qualified-loaded')expect(result.verdict,tool.id).toBe('continuous');
    else {expect(result.verdict,tool.id).toBe('insufficient_data');expect(result.requiredFadLpm,tool.id).toBeUndefined();}
   }
  }
  expect(selected.filter(t=>t.airflowBasis==='free-speed')).toHaveLength(7);
  expect(selected.filter(t=>t.airflowBasis==='unqualified')).toHaveLength(15);
  expect(selected.filter(t=>t.demandModel==='variable-volume')).toHaveLength(14);
 });
 it('retains the eleven known consumptions and service setpoints as documentary facts without inventing their measurement pressure',()=>{
  for(const e of review.tools.filter(e=>e.decision==='needs-pressure-qualification')){
   const t=tools.find(t=>t.id===e.id),row=snapshot.rows.find(r=>r.id===e.id);
   expect(t.demandModel).toBe('variable-volume');expect(t.workingPressureBar).toEqual({typical:6.3});
   expect(t.airflowLpm).toBeUndefined();expect(t.fieldSources.airflowLpm).toBeUndefined();
   const spec=t.specifications.find(s=>s.label.includes('pression de mesure non appariée'));
   expect(spec.value).toBe(`${row.before.airflowLpm.typical} L/min`);
   expect(spec.evidenceIds.length).toBeGreaterThan(0);expect(t.demandExplanation).toContain('ne relient pas explicitement');
  }
 });
 it('does not equate FIAC maximum pressure with FAD measurement pressure or ALMiG range marketing with whole-machine duty',()=>{
  const fiac=compressors.find(c=>c.id==='fiac-ax-203bd-8-400-50-ce');expect(fiac.fadCurve).toEqual([]);expect(fiac.maxPressureBar).toBe(8);
  expect(fiac.specifications.find(s=>s.label==='Conditions du débit').value).toContain('2 330 L/min');
  const qualified=tools.find(t=>t.id==='chicago-pneumatic-cp3349-salavele');expect(evaluateCompatibility(fiac,qualified).verdict).toBe('insufficient_data');
  const almig=compressors.find(c=>c.id==='almig-combi-xp-8-270d');expect(almig.dutyCycle).toBeUndefined();expect(almig.fieldSources.dutyCycle).toBeUndefined();
  const reconstructed=buildDocumentedExpansion(JSON.parse(readFileSync(new URL('../../src/data/imports/documented-expansion-2026-09-30.json',import.meta.url),'utf8')));
  expect(compressorSchema.parse(reconstructed.compressors.find(c=>c.id===almig.id))).toEqual(almig);
  expect(almig.fadCurve).toEqual([{pressureBar:8,litersPerMinute:1160},{pressureBar:10,litersPerMinute:980},{pressureBar:13,litersPerMinute:750}]);
  const modest={...qualified,airflowLpm:{min:100,typical:100,max:100}};expect(evaluateCompatibility(almig,modest).verdict).toBe('insufficient_data');
 });
 it('renders the corrected consumption labels and checks every published replacement card hash',()=>{
  for(const card of snapshot.technicalCards){
   const row=snapshot.rows.find(r=>r.id===card.id),p=native(row),svg=technicalCardSvg(p,row.kind);
   if(p.airflowBasis==='free-speed')expect(svg).toContain('CONSOMMATION À VIDE');
   if(p.airflowBasis==='unqualified')expect(svg).toContain('RÉGIME NON PRÉCISÉ');
   if(p.demandModel==='variable-volume')expect(svg).toContain('Conditions à confirmer');
   if(row.id==='fiac-ax-203bd-8-400-50-ce')expect(svg).toContain('FAD À PRESSION CONNUE');
   expect(createHash('sha256').update(readFileSync(new URL('../../public'+card.path,import.meta.url))).digest('hex')).toBe(card.afterSha256);
  }
 });
});
