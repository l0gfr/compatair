import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { parseCatalogProductSource } from './catalog-tooling.mjs';
import { applyReviewedOctober25FollowupAmendment, beforeOctober25Followup } from './reviewed-catalog-amendments-2026-10-25-b.mjs';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { createRuntimeCatalog, runtimeCatalogSchema } from '../../src/domain/runtime-catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-25-b.json', import.meta.url), 'utf8'));
const native = row => parseCatalogProductSource(row.kind, readFileSync(new URL('../../'+row.file, import.meta.url), 'utf8'));
const current = snapshot.rows.map(row => native(row));
const c = current.filter(p => p.fadCurve), t = current.filter(p => p.demandModel);
const runtime = runtimeCatalogSchema.parse(createRuntimeCatalog(c.map(p => compressorSchema.parse(p)), t.map(p => toolProfileSchema.parse(p)), CATALOG_VERIFIED_AT, 'b'.repeat(64)));
const ample = { id:'followup-fixture-never-published', maxPressureBar:15, tankLiters:500, fadCurve:[{pressureBar:2,litersPerMinute:10000},{pressureBar:6,litersPerMinute:10000},{pressureBar:6.2,litersPerMinute:10000},{pressureBar:6.3,litersPerMinute:10000}], dutyCycle:1, oilType:'oil', confidence:'B' };

describe('October 25 reserved-page factual follow-up', () => {
 it('reconstructs every exact native record, preserves identities and historical evidence, and rejects drift', () => {
  expect(snapshot.rows).toHaveLength(31);expect(new Set(snapshot.rows.map(row => row.id)).size).toBe(31);
  for(const row of snapshot.rows){
   const after=native(row), before=beforeOctober25Followup(after);
   expect(applyReviewedOctober25FollowupAmendment(structuredClone(before)),row.id).toEqual(after);
   expect(applyReviewedOctober25FollowupAmendment(structuredClone(after)),row.id).toEqual(after);
   expect(after.evidence.slice(0,before.evidence.length),row.id).toEqual(before.evidence);
   for(const key of Object.keys(before).filter(key => !row.fields.includes(key)))expect(after[key],row.id+'/'+key).toEqual(before[key]);
   const parsed=(row.kind==='tools'?toolProfileSchema:compressorSchema).parse(after);
   const published=(row.kind==='tools'?tools:compressors).find(p => p.id===row.id);
   expect(published,row.id).toEqual(row.kind==='tools'?{...parsed,category:toolCategoryLabel(parsed.categoryId)}:parsed);
   for(const key of ['brand','model','mpn'])expect(() => applyReviewedOctober25FollowupAmendment({...before,[key]:'unreviewed'}),row.id).toThrow('Identité');
   const drift=structuredClone(before);drift[row.fields[0]]='unreviewed';expect(() => applyReviewedOctober25FollowupAmendment(drift),row.id).toThrow('Base différente');
   expect(() => beforeOctober25Followup(drift),row.id).toThrow('Historical follow-up field drift');
   const ids=new Set(after.evidence.map(e => e.id));for(const refs of Object.values(after.fieldSources))for(const id of refs)expect(ids.has(id),row.id).toBe(true);
  }
  const outside={id:'outside-followup',airflowLpm:123};expect(applyReviewedOctober25FollowupAmendment(outside)).toBe(outside);
 });
 it('keeps the 25 tools without usable demand inconclusive in native and runtime despite ample air', () => {
  const unresolved=t.filter(p => !['dynabrade-58460','dynabrade-52518'].includes(p.id));expect(unresolved).toHaveLength(25);
  for(const tool of unresolved)for(const value of [tool,runtime.tools.find(p => p.id===tool.id)]){
   const result=evaluateCompatibility(ample,value);expect(result.verdict,tool.id).toBe('insufficient_data');expect(result.requiredFadLpm,tool.id).toBeUndefined();
  }
  for(const id of ['biax-bew-309-e','biax-bew-605','red-rooster-rrg-3617k'])expect(t.find(p=>p.id===id).airflowBasis,id).toBe('unqualified');
 });
 it('uses only the exact maximum-flow rows and pressures of the two Dynabrade notices', () => {
  for(const [id,flow] of [['dynabrade-58460',651],['dynabrade-52518',934]]){
   for(const p of [t.find(p=>p.id===id),runtime.tools.find(p=>p.id===id)]){
    expect(p.demandModel,id).toBe('fixed-flow');expect(p.airflowLpm,id).toEqual({min:flow,typical:flow,max:flow});expect(p.workingPressureBar,id).toEqual({min:6.2,typical:6.2,max:6.2});
    const result=evaluateCompatibility(ample,p);expect(result.verdict,id).toBe('continuous');expect(result.requiredFadLpm,id).toBe(flow*1.25);
   }
  }
  expect(t.find(p=>p.id==='dynabrade-58460').recommendedHose).toBeUndefined();
  expect(t.find(p=>p.id==='dynabrade-53783').recommendedHose.innerDiameterMm).toBe(10);
 });
 it('restores standalone ALMiG FAD only from its exact configuration and leaves duty unknown', () => {
  for(const p of [c.find(p=>p.id==='almig-combi-xp-11-standalone'),runtime.compressors.find(p=>p.id==='almig-combi-xp-11-standalone')]){
   expect(p.fadCurve).toEqual([{pressureBar:8,litersPerMinute:1670},{pressureBar:10,litersPerMinute:1460},{pressureBar:13,litersPerMinute:1170}]);expect(p.dutyCycle).toBeUndefined();
   const result=evaluateCompatibility(p,{id:'probe-never-published',demandModel:'fixed-flow',airflowLpm:{min:1,typical:1,max:1},workingPressureBar:{min:8,typical:8,max:8}});expect(result.verdict).toBe('insufficient_data');expect(result.availableFadLpm).toBe(1670);
  }
  for(const id of ['fiac-ax-203bd-dry-10-400-50-ce','fiac-ax-203bd-dry-13-400-50-ce'])for(const p of [c.find(p=>p.id===id),runtime.compressors.find(p=>p.id===id)])expect(p.fadCurve,id).toEqual([]);
 });
 it('preserves part-code distinctions and rejects implicit metric, coating or bundle equivalence', () => {
  const spec=id=>t.find(p=>p.id===id).specifications.map(s=>s.value).join(' ');
  expect(spec('shinano-si-2006s')).toContain('330-24');expect(spec('shinano-si-2006s')).toContain('330-19');
  expect(spec('shinano-si-3007')).toContain('P-3007');expect(spec('shinano-si-3007')).toContain('M-3007');
  expect(spec('pistolet-peinture-hvlp-ani-f1-n-super-i-hvlp-buse-1-2')).toContain('BH089786');
  expect(spec('pistolet-peinture-hvlp-prowin-k-528g-28')).toContain('SG018-528-28');
  expect(spec('pistolet-peinture-hvlp-sata-satajet-100-b-f-hvlp-1-7-145722')).toContain('145417');
 });
 it('verifies every replacement asset hash against its protected predecessor', () => {
  expect(snapshot.technicalCards).toHaveLength(10);
  for(const card of snapshot.technicalCards){expect(card.beforeSha256).toMatch(/^[a-f0-9]{64}$/);expect(createHash('sha256').update(readFileSync(new URL('../../public'+card.path,import.meta.url))).digest('hex'),card.id).toBe(card.afterSha256);}
 });
});
