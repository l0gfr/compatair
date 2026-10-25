import { beforeOctober25Followup } from './reviewed-catalog-amendments-2026-10-25-b.mjs';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { parseCatalogProductSource } from './catalog-tooling.mjs';
import { applyReviewedOctober25Amendment } from './reviewed-catalog-amendments-2026-10-25.mjs';
import { beforeOctober25Review } from './reviewed-catalog-test-projection.mjs';
import { technicalCardSvg } from './technical-card.mjs';
import { tools, compressors, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { toolProfileSchema, compressorSchema } from '../../src/domain/catalog';
import { toolCategoryLabel, toolUsageTaxonomy } from '../../src/data/taxonomy';
import { createRuntimeCatalog, runtimeCatalogSchema } from '../../src/domain/runtime-catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-25.json', import.meta.url), 'utf8'));
const native = row => beforeOctober25Followup(parseCatalogProductSource(row.kind, readFileSync(new URL('../../'+row.file, import.meta.url), 'utf8')));
const selected = snapshot.rows.map(row => native(row));
const c = selected.filter(p=>p.fadCurve), t = selected.filter(p=>p.demandModel);
const runtime = runtimeCatalogSchema.parse(createRuntimeCatalog(c.map(p=>compressorSchema.parse(p)), t.map(p=>toolProfileSchema.parse(p)), CATALOG_VERIFIED_AT, 'a'.repeat(64)));
const ample = { id:'qualification-fixture', maxPressureBar:15, tankLiters:500, fadCurve:[{pressureBar:6,litersPerMinute:10000},{pressureBar:6.3,litersPerMinute:10000}], dutyCycle:1, oilType:'oil', confidence:'B' };

describe('October25 exact editorial and technical corrections',()=>{
 it('reconstructs 75 exact native records without changing identities, unrelated fields or historical evidence',()=>{
  expect(snapshot.rows).toHaveLength(75);expect(new Set(snapshot.rows.map(r=>r.id)).size).toBe(75);
  for(const row of snapshot.rows){
   const current=parseCatalogProductSource(row.kind, readFileSync(new URL('../../'+row.file, import.meta.url), 'utf8')), after=native(row), before=beforeOctober25Review(current), replay=applyReviewedOctober25Amendment(structuredClone(before));
   expect(replay,row.id).toEqual(after);
   expect(applyReviewedOctober25Amendment(structuredClone(after)),row.id).toEqual(after);
   expect(after.evidence.slice(0,before.evidence.length),row.id).toEqual(before.evidence);
   for(const key of Object.keys(before).filter(k=>!row.fields.includes(k)))expect(after[key],`${row.id}:${key}`).toEqual(before[key]);
   for(const key of row.fields.filter(k=>!Object.hasOwn(row.after,k)))expect(after,row.id).not.toHaveProperty(key);
   const parsed=(row.kind==='tools'?toolProfileSchema:compressorSchema).parse(after);
   const published=beforeOctober25Followup((row.kind==='tools'?tools:compressors).find(p=>p.id===row.id));
   expect(published,row.id).toEqual(row.kind==='tools'?{...parsed,category:toolCategoryLabel(parsed.categoryId)}:parsed);
   for(const key of ['brand','model','mpn'])expect(()=>applyReviewedOctober25Amendment({...before,[key]:'different'}),row.id).toThrow('Identité');
   const drift=structuredClone(before);drift[row.fields[0]]='unreviewed';expect(()=>applyReviewedOctober25Amendment(drift),row.id).toThrow('Base différente');
   const ids=new Set(after.evidence.map(e=>e.id));for(const refs of Object.values(after.fieldSources))for(const id of refs)expect(ids.has(id),row.id).toBe(true);
  }
  const outside={id:'outside-review',airflowLpm:123};expect(applyReviewedOctober25Amendment(outside)).toBe(outside);
 });
 it('keeps idle, unqualified and unpaired consumptions inconclusive in native and real runtime projections despite ample supply',()=>{
  expect(t).toHaveLength(45);
  for(const tool of t){
   expect(tool.demandModel==='variable-volume'||['free-speed','unqualified'].includes(tool.airflowBasis),tool.id).toBe(true);
   for(const value of [tool,runtime.tools.find(p=>p.id===tool.id)]){
    const result=evaluateCompatibility(ample,value);expect(result.verdict,tool.id).toBe('insufficient_data');expect(result.requiredFadLpm,tool.id).toBeUndefined();
   }
  }
  const qualified=tools.find(p=>p.id==='chicago-pneumatic-cp3349-salavete');expect(qualified.airflowLpm.typical).toBe(2580);expect(evaluateCompatibility(ample,qualified).verdict).toBe('continuous');
 });
 it('never equates maxima or other equipment scope with a FAD measurement and preserves only the uncontradicted Gentilin point',()=>{
  for(const id of ['abac-formula-e-7-5-13-400-50','ktc-compack-2-90-l','lupamat-lkv-11-mit','fiac-ax-203bd-dry-10-400-50-ce','almig-combi-xp-11-standalone']){
   for(const p of [c.find(p=>p.id===id),runtime.compressors.find(p=>p.id===id)])expect(p.fadCurve,id).toEqual([]);
  }
  for(const id of ['abac-formula-e-7-5-13-400-50','boge-s-31-3-10-bar-insonorisation-standard','ceccato-csa-10-pack-au-sol-13-bar','mark-msm-2-2','almig-combi-xp-11-standalone','kaeser-aircenter-16-secheur-et-cuve-integres-11-bar','broomwade-elite-7-rsccp0741v4-10-bar']){
   for(const p of [c.find(p=>p.id===id),runtime.compressors.find(p=>p.id===id)]){expect(p.dutyCycle,id).toBeUndefined();expect(p.fieldSources.dutyCycle,id).toBeUndefined();}
  }
  expect(c.find(p=>p.id==='gentilin-clinic-3-40').fadCurve).toEqual([{pressureBar:8,litersPerMinute:125}]);
  expect(c.find(p=>p.id==='airpol-kpr-11').fadCurve).toEqual([{pressureBar:10,litersPerMinute:283.333}]);
 });
 it('classifies hole deburrers separately from drills in native, taxonomy and runtime data',()=>{
  expect(toolUsageTaxonomy.find(u=>u.id==='meulage').categoryIds).toContain('ebavureuse');
  for(const id of ['biax-beg-309','nitto-kohki-bc-005']){
   expect(toolCategoryLabel(t.find(p=>p.id===id).categoryId)).toBe('Ébavureuse de trous pneumatique');
   expect(runtime.tools.find(p=>p.id===id).categoryId).toBe('ebavureuse');
  }
 });
 it('checks corrected technical card labels and all 50 replacement hashes',()=>{
  expect(snapshot.technicalCards).toHaveLength(50);
  for(const card of snapshot.technicalCards){
   const row=snapshot.rows.find(r=>r.id===card.id),p=native(row),svg=technicalCardSvg(p,row.kind);
   if(p.airflowBasis==='free-speed')expect(svg).toContain('CONSOMMATION À VIDE');
   if(p.airflowBasis==='unqualified')expect(svg).toContain('RÉGIME NON PRÉCISÉ');
   if(p.demandModel==='variable-volume')expect(svg).toContain('Conditions à confirmer');
   const followup=JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-25-b.json',import.meta.url),'utf8')).technicalCards.find(c=>c.id===card.id);
   const actual=createHash('sha256').update(readFileSync(new URL('../../public'+card.path,import.meta.url))).digest('hex');
   expect(followup?.beforeSha256 ?? actual).toBe(card.afterSha256);
   if(followup)expect(actual).toBe(followup.afterSha256);
  }
 });
});
