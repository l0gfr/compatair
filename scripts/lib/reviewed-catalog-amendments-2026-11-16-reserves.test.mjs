import{readFileSync}from'node:fs';import{createHash}from'node:crypto';import{describe,it,expect}from'vitest';
import{buildCatalogProductSource,parseCatalogProductSource}from'./catalog-tooling.mjs';import{applyReservedNovember16ReservesFollowup,beforeReservedNovember16ReservesFollowup}from'./reviewed-catalog-amendments-2026-11-16-reserves.mjs';import{technicalCardSvg}from'./technical-card.mjs';
import{compressors,tools,CATALOG_VERIFIED_AT}from'../../src/data/catalog';import{compressorSchema,toolProfileSchema}from'../../src/domain/catalog';import{toolCategoryLabel}from'../../src/data/taxonomy';import{evidenceHistory as currentEvidenceHistory}from'../../src/data/evidence-history';import{createRuntimeCatalog,runtimeCatalogSchema}from'../../src/domain/runtime-catalog';import{evaluateCompatibility}from'../../server/air-compatibility.mjs';
// Preserve the November16 reserve assertions on their exact dated history.
const evidenceHistory={...currentEvidenceHistory,events:currentEvidenceHistory.events.slice(0,39207)};
const read=p=>readFileSync(new URL('../../'+p,import.meta.url)),hash=b=>createHash('sha256').update(b).digest('hex'),s=JSON.parse(read('src/data/imports/catalog-amendments-reviewed-2026-11-16-reserves.json'));
const ample=compressorSchema.parse({...compressors[0],maxPressureBar:50,dutyCycle:1,fadCurve:[{pressureBar:1,litersPerMinute:100000},{pressureBar:50,litersPerMinute:100000}]});
describe('November16 reserve corrections independent of the 423-page lot',()=>{
 it('replays12 exact before/after records and original bytes, rejecting identity and field drift',()=>{
  expect(s.rows).toHaveLength(12);expect(s.preparedFrom).toBe('52f21b893a8213fede926386773553ad6bfa37fe');
  for(const row of s.rows){const after=parseCatalogProductSource(row.kind,read(row.file).toString()),before=beforeReservedNovember16ReservesFollowup(after);expect(after,row.id).toEqual(row.after);expect(before,row.id).toEqual(row.before);expect(applyReservedNovember16ReservesFollowup(structuredClone(before)),row.id).toEqual(after);expect(applyReservedNovember16ReservesFollowup(structuredClone(after)),row.id).toEqual(after);
   let bytes=buildCatalogProductSource(row.kind,Object.fromEntries(row.sourcePropertyOrder.map(k=>[k,before[k]])),row.sourceIndentation);if(row.sourceCompactExport)bytes=bytes.replace(';\n\nexport',';\nexport');expect(hash(bytes),row.id).toBe(row.beforeFileSha256);expect(hash(read(row.file)),row.id).toBe(row.afterFileSha256);
   expect(after.evidence.slice(0,before.evidence.length),row.id).toEqual(before.evidence);for(const k of ['brand','model','mpn'])expect(()=>applyReservedNovember16ReservesFollowup({...before,[k]:'unknown'}),row.id).toThrow('identity');const drift=structuredClone(before);drift[row.fields[0]]='unknown';expect(()=>applyReservedNovember16ReservesFollowup(drift),row.id).toThrow('base');expect(()=>beforeReservedNovember16ReservesFollowup(drift),row.id).toThrow('historical');
   const parsed=(row.kind==='tools'?toolProfileSchema:compressorSchema).parse(after),live=(row.kind==='tools'?tools:compressors).find(p=>p.id===row.id);expect(live,row.id).toEqual(row.kind==='tools'?{...parsed,category:toolCategoryLabel(parsed.categoryId)}:parsed);
   const ids=new Set(after.evidence.map(e=>e.id));for(const refs of [...Object.values(after.fieldSources),...after.specifications.map(x=>x.evidenceIds)])for(const id of refs)expect(ids.has(id),row.id).toBe(true);
  }
 });
 it('retains all39188 previous events and appends exactly19 fingerprinted documentary proofs',()=>{
  expect(s.evidenceHistoryAppend.previousEventCount).toBe(39188);expect(hash(JSON.stringify(evidenceHistory.events.slice(0,39188)))).toBe(s.evidenceHistoryAppend.previousEventsSha256);expect(s.evidenceHistoryAppend.addedEvents).toBe(19);expect(evidenceHistory.events).toHaveLength(39207);
  for(const e of evidenceHistory.events.slice(39188))expect(hash(JSON.stringify({productId:e.productId,evidence:e.snapshot}))).toBe(e.fingerprint);
  expect(evidenceHistory.events.slice(39188).map(e=>e.evidenceId).sort()).toEqual(s.rows.flatMap(r=>r.after.evidence.slice(r.before.evidence.length).map(e=>e.id)).sort());
 });
 it('keeps every changed reference non-conclusive with identical native/runtime decisions',()=>{
  const probe=toolProfileSchema.parse({...tools.find(t=>t.demandModel==='fixed-flow'),airflowBasis:undefined,airflowLpm:{min:1,typical:1,max:1}});
  for(const row of s.rows){const p=(row.kind==='tools'?toolProfileSchema:compressorSchema).parse(row.after),c=row.kind==='compressors'?p:ample,t=row.kind==='tools'?p:probe,rt=runtimeCatalogSchema.parse(JSON.parse(JSON.stringify(createRuntimeCatalog([c],[t],CATALOG_VERIFIED_AT,'a'.repeat(64))))),native=evaluateCompatibility(c,t);expect(native.verdict,row.id).toBe('insufficient_data');expect(evaluateCompatibility(rt.compressors[0],rt.tools[0]),row.id).toEqual(native);if(row.kind==='tools')expect(native.requiredFadLpm,row.id).toBeUndefined();}
 });
 it('does not normalize SATA normal litres or choose a Dynabrade consumption revision',()=>{
  const get=id=>s.rows.find(r=>r.id===id).after;
  for(const id of ['pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196','dynabrade-59040']){const p=get(id);expect(p.demandModel).toBe('variable-volume');expect(p.airflowLpm).toBeUndefined();}
  expect(get('pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196').specifications.some(x=>x.value.includes('530 Nl/min'))).toBe(true);
  const dyn=get('dynabrade-59040');expect(dyn.specifications.some(x=>x.value.includes('396 LPM'))).toBe(true);expect(dyn.specifications.some(x=>x.value.includes('450 LPM'))).toBe(true);
 });
 it('retains both FIAC powers outside normalized engine fields',()=>{
  for(const row of s.rows.filter(r=>r.kind==='compressors')){expect(row.after.powerKw).toBeUndefined();expect(row.after.fadCurve).toEqual([]);expect(row.after.dutyCycle).toBeUndefined();const p=row.after.specifications.find(x=>x.label==='Puissances documentaires divergentes');expect(p.value).toContain('22,4');expect(p.value).toContain('22 kW');expect(p.evidenceIds).toHaveLength(2);}
 });
 it('records the documented Senco cadence without inventing pressure or a volume per shot',()=>{
  const p=s.rows.find(r=>r.id==='agrafeuse-cloueuse-senco-finishpro21lxp').after;expect(p.demandModel).toBe('variable-volume');expect(p.workingPressureBar).toEqual({});expect(p.airPerActionLiters).toBeUndefined();expect(p.demandExplanation).toContain('60 cycles/min');expect(p.specifications.some(x=>x.value.includes('200 pointes'))).toBe(true);expect(p.specifications.some(x=>x.label.includes('européenne historique'))).toBe(true);
 });
 it('keeps the PR36 volume documentary while traction remains unresolved',()=>{
  const row=s.rows.find(r=>r.id==='riveteuse-astro-pneumatic-pr36');expect(row.qualificationEligible).toBe(false);expect(row.after.demandModel).toBe('variable-volume');expect(row.after.airPerActionLiters).toBeUndefined();expect(row.after.specifications.some(x=>x.value.includes('2.320 Liter/Stroke'))).toBe(true);expect(row.after.editorial.overview).toContain('380 lb');
 });
 it('preserves all previous illustrations and regenerates12 exact current cards',()=>{
  expect(s.technicalCards).toHaveLength(12);for(const card of s.technicalCards){const row=s.rows.find(r=>r.id===card.id);expect(hash(read('public'+card.previousPath))).toBe(card.previousSha256);const b=read('public'+card.path);expect(hash(b)).toBe(card.afterSha256);expect(b.length).toBe(card.afterBytes);expect(b.toString()).toBe(technicalCardSvg(row.after,row.kind));}
 });
});
