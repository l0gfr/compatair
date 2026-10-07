import { parseCatalogProductSource } from './catalog-tooling.mjs';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {describe,it,expect} from 'vitest';
import {buildDocumentedToolsOctober4,documentedIdentityKey} from './documented-tools-2026-10-04.mjs';
import {toolProfileSchema} from '../../src/domain/catalog';
import {evaluateCompatibility} from '../../server/air-compatibility.mjs';
const snapshot=JSON.parse(readFileSync(new URL('../../src/data/imports/documented-tools-2026-10-04.json',import.meta.url),'utf8'));
const batch=buildDocumentedToolsOctober4(snapshot);
const ample={id:'fixture-compressor',tankLiters:500,maxPressureBar:20,fadCurve:[{pressureBar:2,litersPerMinute:50000},{pressureBar:20,litersPerMinute:40000}],dutyCycle:1,oilType:'oil',confidence:'B'};
const digest=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
async function tamper(find,change){
 const copy=structuredClone(snapshot),row=copy.tools.find(find);
 if(!row)throw new Error('Missing mutation fixture');
 change(row);
 Object.assign(copy.technicalRows.find(item=>item.documentRowId===row.documentRowId),structuredClone(row));
 const source=copy.sources.find(item=>item.id===row.consumptionSourceId);
 const record=source?.measurementRecords.find(item=>item.documentRowId===row.documentRowId);
 if(record)for(const key of Object.keys(record))if(key in row)record[key]=structuredClone(row[key]);
 expect(()=>buildDocumentedToolsOctober4(copy)).toThrow();
 let code=readFileSync(new URL('./documented-tools-2026-10-04.mjs',import.meta.url),'utf8');
 const replacement=`const approvedSources = ${JSON.stringify(copy.sources.map(source=>({id:source.id,reviewedSourceSha256:digest(source)})))};\nconst approvedRows = ${JSON.stringify(copy.tools.map(row=>({documentRowId:row.documentRowId,reviewedRowSha256:digest(row)})))};`;
 const pattern=/const approvedSources = \[[\s\S]*?\];\nconst approvedRows = \[[\s\S]*?\];/;
 if(!pattern.test(code))throw new Error('Missing approval contracts');
 code=code.replace(pattern,replacement);
 const semantic=(await import(/* @vite-ignore */ 'data:text/javascript;base64,'+Buffer.from(code).toString('base64'))).buildDocumentedToolsOctober4;
 expect(()=>semantic(copy)).toThrow();
}
describe('documented tools October4',()=>{
 it('builds exactly1000 unique schema-valid profiles across10 manufacturers, with exact canonical modules',()=>{
  expect(snapshot.toolCount).toBe(1000);expect(batch).toHaveLength(1000);
  expect(new Set(batch.map(p=>p.id)).size).toBe(1000);
  expect(new Set(batch.map(p=>p.brand)).size).toBe(10);
  expect(new Set(snapshot.tools.map(r=>documentedIdentityKey(r.brand,r.mpn))).size).toBe(1000);
  for(const product of batch){
   expect(toolProfileSchema.safeParse(product).success,product.id).toBe(true);
   const module=readFileSync(new URL(`../../src/data/products/tools/${product.slug}.ts`,import.meta.url),'utf8');
   expect(toolProfileSchema.parse(parseCatalogProductSource('tools', module))).toEqual(toolProfileSchema.parse(product));
  }
 },30_000);
 it('preserves captured HTTP200 originals, SHA/date/edition and field citations without raw files or private paths',()=>{
  expect(JSON.stringify(snapshot)).not.toMatch(/\/Users\/|\/tmp\/|\/private\/tmp\/|responsePath|<html\b|%PDF-/i);
  expect(snapshot.sources).toHaveLength(251);
  for(const source of snapshot.sources){expect(source.httpStatus).toBe(200);expect(source.sha256).toMatch(/^[a-f0-9]{64}$/);expect(source.bytes).toBeGreaterThan(0);expect(source.observedAt.startsWith('2026-10-04T')).toBe(true);expect(source.edition.length).toBeGreaterThan(0);expect(new URL(source.url).protocol).toBe('https:');}
  for(const product of batch){const ids=new Set(product.evidence.map(p=>p.id));expect(product.evidence.every(p=>p.sourceRole==='primary')).toBe(true);for(const spec of product.specifications)expect(spec.evidenceIds.every(id=>ids.has(id))).toBe(true);for(const refs of Object.values(product.fieldSources))expect(refs.every(id=>ids.has(id))).toBe(true);}
 });
 it('uses only118 continuous blowguns and15 documented spray points without implicit duty factors',()=>{
  const fixed=batch.filter(p=>p.demandModel==='fixed-flow');expect(fixed).toHaveLength(133);
  expect(fixed.filter(p=>p.brand==='Guardair')).toHaveLength(118);expect(fixed.filter(p=>p.brand==='Sagola')).toHaveLength(15);
  for(const p of fixed){expect(p.airflowBasis).toBeUndefined();const result=evaluateCompatibility(ample,p);expect(result.verdict).not.toBe('insufficient_data');expect(result.requiredFadLpm).toBeCloseTo(p.airflowLpm.typical*1.25,6);}
 });
 it('preserves 100psi as the original Guardair point and converts only units',()=>{
  const p=batch.find(p=>p.mpn==='U75LJ006AA2'),row=snapshot.tools.find(r=>r.mpn==='U75LJ006AA2');
  expect(row.flowOriginal).toBe(49);expect(row.flowUnit).toBe('cfm');expect(row.pressureOriginal).toBe(100);expect(row.pressureUnit).toBe('psi');
  expect(p.workingPressureBar.typical).toBe(6.894757);expect(p.airflowLpm.typical).toBe(1387.525);
  const smaller=batch.find(p=>p.mpn==='U75LJ006AA225');expect(smaller.demandModel).toBe('variable-volume');expect(smaller.airflowLpm).toBeUndefined();expect(smaller.specifications.some(s=>s.value.includes('49 cfm')&&s.value.includes('40 cfm'))).toBe(true);
 });
 it('keeps867 uncertain references outside airflow calculations even with an ample compressor',()=>{
  const uncertain=batch.filter(p=>p.demandModel==='variable-volume');expect(uncertain).toHaveLength(867);
  for(const p of uncertain){expect(p.airflowLpm).toBeUndefined();expect(evaluateCompatibility(ample,p).verdict).toBe('insufficient_data');}
  const taylor=batch.find(p=>p.brand==='Taylor Pneumatic'&&p.mpn==='T-9859R');expect(taylor.demandExplanation).toContain('unité');expect(taylor.demandExplanation).toContain('90 PSI');
 });
 it('distinguishes Festool nominal consumption from mandatory350L/min supply, with no fabricated MPN or fixed demand',()=>{
  const festool=batch.filter(p=>p.brand==='Festool');expect(festool).toHaveLength(6);expect(festool.filter(p=>p.mpn)).toHaveLength(1);
  for(const p of festool){expect(p.demandModel).toBe('variable-volume');expect(p.airflowLpm).toBeUndefined();expect(p.demandExplanation).toContain('350 L/min');expect(p.specifications.some(s=>s.label==='Alimentation conseillée'&&s.value.includes('350'))).toBe(true);expect(p.specifications.some(s=>s.label==='Consommation publiée, hors calcul'&&/^(270|290|310) L\/min$/.test(s.value))).toBe(true);expect(evaluateCompatibility(ample,p).verdict).toBe('insufficient_data');}
  expect(batch.filter(p=>!p.mpn)).toHaveLength(10);
 });
 it('exposes Sagola source contradictions and points outside recommended service',()=>{
  for(const mpn of ['10142504','10142505','10142506']){const p=batch.find(p=>p.mpn===mpn);expect(p.demandModel).toBe('variable-volume');expect(p.demandExplanation).toContain('pressions incompatibles');expect(p.specifications.some(s=>s.label==='Maximum d’entrée HVLP dans la notice'&&s.value==='1.8 bar')).toBe(true);}
  const conflict=batch.find(p=>p.mpn==='10141634');expect(conflict.demandModel).toBe('variable-volume');expect(conflict.demandExplanation).toContain('se contredisent');expect(conflict.specifications.some(s=>s.value==='11.54 cfm')).toBe(true);
  const tech=batch.find(p=>p.mpn==='10112011');expect(tech.demandExplanation).toContain('hors de la plage');expect(tech.workingPressureBar).toEqual({min:.5,max:1});
 });
 it('keeps ProWin specifications attached to the explicitly printed model in shared tables',()=>{
  for(const [mpn,pad] of [['AS-301','5" (123mm)'],['AS-361','6" (148mm)'],['AS-602','73 x 98mm'],['AS-612','90 x 100mm']]){
   const product=batch.find(p=>p.brand==='ProWin'&&p.mpn===mpn);
   expect(product.specifications.find(s=>s.label==='Pad Size')?.value.startsWith(pad),mpn).toBe(true);
  }
  for(const mpn of ['AS-210P','AS-211P'])expect(batch.find(p=>p.brand==='ProWin'&&p.mpn===mpn).specifications.find(s=>s.label==='Free Speed')?.value).toBe(`2,300 RPM / ${mpn}`);
  expect(batch.some(p=>p.brand==='ProWin'&&['AS-2505','AS-3505','AS-605'].includes(p.mpn))).toBe(false);
  expect(snapshot.exclusions.some(r=>r.reference==='AS-605'&&r.reason==='same-model-conflicting-consumption-on-pages-75-and-76')).toBe(true);
 });
 it('preserves the HEX HVLP source-cell pressure from its own manual',()=>{
  for(const mpn of ['10142473','10142481','10142477']){
   const row=snapshot.tools.find(r=>r.mpn===mpn);
   expect(row.sourceTechnicalCells.find(c=>c.label==='Pressure Bar')).toEqual({label:'Pressure Bar',value:'1.8 bar',sourceId:'sagola-4600hex-manual',page:33});
   expect(row.sourceTechnicalCells.find(c=>c.label==='Air consumption L/min')).toEqual({label:'Air consumption L/min',value:'425 L/min',sourceId:'sagola-4600hex-manual',page:33});
   expect(row.sourceTechnicalCells.some(c=>/at 2 bar/.test(c.label))).toBe(false);
  }
 });
 it('does not confuse spare nozzle kits or product bundles with additional tools',()=>{
  expect(snapshot.tools.filter(r=>r.brand==='ProWin').some(r=>/^SG(?:008|018|038)-/.test(r.mpn))).toBe(false);
  expect(snapshot.tools.filter(r=>r.brand==='GAV').some(r=>/^(RZ|RP|RV|XV100R)/.test(r.mpn))).toBe(false);
  expect(snapshot.tools.filter(r=>r.brand==='Guardair').some(r=>r.mpn.includes('KIT'))).toBe(false);
  expect(snapshot.exclusions.some(r=>r.reason==='prefix-conflicts-with-pressure-feed-heading')).toBe(true);
  expect(snapshot.exclusions.filter(r=>r.reason==='observed-but-not-selected-for-1000-brand-diversity')).toHaveLength(63);
 });
 for(const [name,find,change] of [
  ['continuous flow replaced by load without a loaded convention',r=>r.brand==='Guardair'&&r.measurementQualification!=='insufficient_data',r=>{r.flowBasis='load';}],
  ['100psi replaced by80psi',r=>r.brand==='Guardair'&&r.measurementQualification!=='insufficient_data',r=>{r.pressureOriginal=80;r.pressureBar=5.515806;r.documentedConsumptionPoint.pressure=80;}],
  ['psi falsely declared bar',r=>r.brand==='Guardair'&&r.measurementQualification!=='insufficient_data',r=>{r.pressureUnit='bar';r.pressureOriginal=6.894757;r.documentedConsumptionPoint={pressure:6.894757,unit:'bar',usableAtDeclaredService:true};}],
  ['Guardair family consumption promoted to mismatching variant',r=>r.mpn==='U75LJ006AA2',r=>{r.mpn='U75LJ006AA225';r.rawLine+=' U75LJ006AA225';}],
  ['supply AirUsage relabelled as output air',r=>r.brand==='Guardair'&&r.measurementQualification!=='insufficient_data',r=>{r.flowQuote=r.flowQuote.replace('Air Usage (cfm)','Output flow (cfm)');}],
  ['continuous convention removed',r=>r.brand==='Guardair'&&r.measurementQualification!=='insufficient_data',r=>{r.measurementProtocolRecords=[];}],
  ['spray trigger protocol removed',r=>r.brand==='Sagola'&&r.measurementQualification!=='insufficient_data',r=>{r.measurementProtocolRecords=r.measurementProtocolRecords.filter(p=>!p.quote.includes('trigger'));}],
  ['HVLP point forced to2bar',r=>r.model.startsWith('4600 HEX HVLP'),r=>{r.pressureOriginal=2;r.pressureBar=2;r.documentedConsumptionPoint.pressure=2;r.operatingPressureRange={min:2,max:2,unit:'bar'};}],
  ['HEX manual pressure cell changed',r=>r.model.startsWith('4600 HEX HVLP'),r=>{r.sourceTechnicalCells.find(c=>c.label==='Pressure Bar').value='2 bar';}],
  ['HEX aircap consumption swapped',r=>r.model.startsWith('4600 HEX BASE'),r=>{r.flowOriginal=425;}],
  ['contradictory source made conclusive',r=>r.model.startsWith('4600 HEX BASE'),r=>{r.sourceUnitContradiction=true;}],
  ['Festool minimum supply removed',r=>r.brand==='Festool',r=>{r.details=r.details.filter(d=>d.label!=='Alimentation conseillée');}],
  ['Festool nominal consumption made fixed',r=>r.brand==='Festool',r=>{r.measurementQualification='continuous-flow-point';r.flowBasis='continuous';}],
 ])it('rejects mirrored and repinned semantic tampering: '+name,async()=>tamper(find,change));
 it('rejects altered provenance and measurements',()=>{
  for(const change of [s=>{s.httpStatus=403;},s=>{s.url='https://example.com/generic';},s=>{s.sha256='f'.repeat(64);},s=>{s.observedAt='2026-10-03T12:00:00Z';},s=>{s.measurementRecords[0].pressureOriginal=80;}]){const copy=structuredClone(snapshot);change(copy.sources.find(s=>s.measurementRecords.length));expect(()=>buildDocumentedToolsOctober4(copy)).toThrow();}
 });
});
