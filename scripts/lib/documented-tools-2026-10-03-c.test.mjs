import { parseCatalogProductSource } from './catalog-tooling.mjs';
import {readFileSync} from 'node:fs';
import {describe,it,expect} from 'vitest';
import {buildDocumentedToolsOctober3C,documentedConnectionFacts} from './documented-tools-2026-10-03-c.mjs';
import {toolProfileSchema} from '../../src/domain/catalog';
import {evaluateCompatibility} from '../../server/air-compatibility.mjs';
import {calculateSizing} from '../../server/air-sizing.mjs';
const snapshot=JSON.parse(readFileSync(new URL('../../src/data/imports/documented-tools-2026-10-03-c.json',import.meta.url)));
const batch=buildDocumentedToolsOctober3C(snapshot);
const ample={id:'fixture-compressor',tankLiters:500,maxPressureBar:20,fadCurve:[{pressureBar:6,litersPerMinute:50000},{pressureBar:20,litersPerMinute:40000}],dutyCycle:1,oilType:'oil',confidence:'B'};
const norm=value=>value.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toUpperCase().replace(/[^A-Z0-9]/g,'');
const brand=value=>['HITACHI','HIKOKI','METABOHPT'].includes(norm(value))?'METABOHPT':norm(value);
const identity=(b,m)=>brand(b)+':'+norm(m);
const by=(b,m)=>batch.find(x=>x.brand===b&&x.mpn===m);
const changeBoth=(copy,find,change)=>{const row=copy.tools.find(find);change(row);change(copy.technicalRows.find(r=>r.documentRowId===row.documentRowId));};
const tamper=(find,change)=>{const copy=structuredClone(snapshot);changeBoth(copy,find,change);expect(()=>buildDocumentedToolsOctober3C(copy)).toThrow();};
describe('documented tools, October 3, third batch',()=>{
 it('contains exactly 1000 unique valid profiles and matches every canonical module',()=>{
  expect(snapshot.toolCount).toBe(1000);expect(batch).toHaveLength(1000);expect(new Set(batch.map(x=>x.id)).size).toBe(1000);expect(new Set(batch.map(x=>identity(x.brand,x.mpn))).size).toBe(1000);
  for (const x of batch) {
   expect(toolProfileSchema.safeParse(x).success, x.id).toBe(true);
   const text = readFileSync(new URL(`../../src/data/products/tools/${x.slug}.ts`, import.meta.url), 'utf8');
   expect(toolProfileSchema.parse(parseCatalogProductSource('tools', text))).toEqual(toolProfileSchema.parse(x));
  }
 });
 it('preserves dated hashed primary source records',()=>{for(const source of snapshot.sources){expect(new URL(source.url).protocol).toBe('https:');expect(source.sha256).toMatch(/^[a-f0-9]{64}$/);expect(source.bytes).toBeGreaterThan(0);expect(Number.isFinite(Date.parse(source.observedAt))).toBe(true);}});
 it('has referenced primary evidence for every published specification',()=>{for(const p of batch){const ids=new Set(p.evidence.map(x=>x.id));expect(p.evidence.every(x=>x.sourceRole==='primary')).toBe(true);for(const f of p.specifications)expect(f.evidenceIds.every(x=>ids.has(x)),p.id+':'+f.label).toBe(true);expect(p.fieldSources.mpn.length).toBeGreaterThan(0);}});
 it('keeps 113 per-action points inconclusive without cadence and computes only the declared cadence',()=>{const tools=batch.filter(x=>x.demandModel==='per-action');expect(tools).toHaveLength(113);for(const x of tools){expect(evaluateCompatibility(ample,x).verdict).toBe('insufficient_data');const s=calculateSizing({mode:'successive',sessionMinutes:30,safetyMargin:.25,demands:[{id:x.id,model:'per-action',litersPerAction:x.airPerActionLiters,actionsPerMinute:40,quantity:1,pressureBar:x.workingPressureBar.typical}],compressor:{maxPressureBar:20,availableFadLpm:50000,tankLiters:500,dutyCycle:1}});expect(s.averageFlowLpm).toBeCloseTo(x.airPerActionLiters*40,6);expect(s.recommendedFadLpm).toBeCloseTo(x.airPerActionLiters*40*1.25,6);}});
 it('converts eight genuine TOKU loaded declarations at 0.6 MPa without duty averaging',()=>{const rows=snapshot.tools.filter(r=>r.flowBasis==='load');expect(rows).toHaveLength(8);for(const r of rows){const p=by(r.brand,r.mpn);expect(r.pressureOriginal).toBe(.6);expect(r.pressureUnit).toBe('MPa');expect(p.workingPressureBar.typical).toBe(6);expect(p.airflowBasis).toBeUndefined();expect(p.airflowLpm.typical).toBe(Number(r.flowOriginal)*1000);expect(evaluateCompatibility(ample,p).verdict).not.toBe('insufficient_data');expect(evaluateCompatibility(ample,p).requiredFadLpm).toBeCloseTo(p.airflowLpm.typical*1.25,6);}});
 it('does not promote any rich incomplete, mean or unitless declaration into a calculation',()=>{const tools=batch.filter(x=>x.demandModel==='variable-volume');expect(tools.length).toBe(snapshot.toolCount-121);for(const x of tools){expect(evaluateCompatibility(ample,x).verdict).toBe('insufficient_data');expect(x.airflowLpm).toBeUndefined();expect(x.airPerActionLiters).toBeUndefined();expect(x.demandExplanation.length).toBeGreaterThan(15);}});
 it('preserves FAR normal litres and the GESIPA denominator gap separately from service pressure',()=>{const far=by('FAR','KJ60'),ges=by('GESIPA','1457771');expect(far.demandModel).toBe('variable-volume');expect(far.workingPressureBar).toEqual({typical:6});expect(far.specifications.some(x=>x.value.includes('9 Nl'))).toBe(true);expect(far.airPerActionLiters).toBeUndefined();expect(ges.workingPressureBar).toEqual({min:5,max:7});expect(ges.specifications.some(x=>x.value==='2,30 liter')).toBe(true);expect(ges.airflowLpm).toBeUndefined();});
 it('keeps Mirka supply ceiling max-only and individual manual-page citations',()=>{const x=by('Mirka','MRP-680CV');expect(x.workingPressureBar).toEqual({max:6.2});expect(x.demandModel).toBe('variable-volume');expect(x.specifications.some(f=>f.value.includes('485')&&f.evidenceIds.some(id=>id.includes('mirka-pros-manual-p58')))).toBe(true);expect(x.specifications.some(f=>f.evidenceIds.some(id=>id.includes('mirka-pros-manual-p57')))).toBe(true);expect(x.evidence.some(e=>e.sourceUrl.endsWith('#page=58'))).toBe(true);});
 it('distinguishes published Soartec flow from absence and keeps Teng 100 percent outside calculation',()=>{const row=snapshot.tools.find(x=>x.brand==='Soartec'&&x.mpn==='WX-3511');expect(row.flowOriginal).toBe('7');expect(row.flowUnit).toBe('cfm');expect(row.flowBasis).toBe('unqualified');expect(by('Soartec','WX-3511').demandModel).toBe('variable-volume');expect(snapshot.tools.filter(x=>x.brand==='TengTools'&&x.flowBasis==='unqualified')).toHaveLength(12);});
 it('retains King Tony unit contradictions without swapping the two numeric columns',()=>{for(const mpn of ['37235-030','37235-031','37435-075','37435-076']){const row=snapshot.tools.find(x=>x.brand==='King Tony'&&x.mpn===mpn);expect(row.flowOriginal).toBeNull();expect(row.flowBasis).toBe('missing');expect(by('King Tony',mpn).editorial.limitations.join(' ')).toContain('contradiction');}expect(snapshot.tools.filter(x=>x.brand==='King Tony'&&x.flowBasis==='average')).toHaveLength(62);});
 for(const [name,find,change] of [
 ['fake measured point',x=>x.brand==='Soartec',x=>{x.pressureScope='measurement';x.pressureBar=6.3;x.pressureOriginal=6.3;x.pressureUnit='bar';}],
 ['average to load',x=>x.brand==='King Tony'&&x.flowBasis==='average',x=>{x.flowBasis='load';x.flowQuote='maximum air consumption';}],
 ['cycle to minute',x=>x.flowBasis==='per-action',x=>{x.flowUnit='L/min';x.flowBasis='load';}],
 ['pressure conversion',x=>x.flowBasis==='load',x=>{x.pressureBar=6.3;}],
 ['ceiling to nominal',x=>x.brand==='Mirka',x=>{x.operatingPressureBasis='nominal';}],
 ['unknown operating basis',x=>x.brand==='Mirka',x=>{x.operatingPressureBasis='recommended';}],
 ['false source identity',x=>x.brand==='FAR',x=>{x.mpn='KJ61';}],
 ['wrong documentary page',x=>x.brand==='Mirka',x=>{x.page=57;}],
 ['convenient correction of King units',x=>x.brand==='King Tony'&&x.flowBasis==='missing',x=>{x.flowOriginal='71';x.flowUnit='L/min';x.flowBasis='average';}],
 ['inferred inner hose',x=>x.brand==='TengTools',x=>{x.sourceTechnicalCells.push(['Hose inner diameter mm','10']);x.rawLine+='\nHose inner diameter mm: 10';}],
 ['forged manual fact attribution',x=>x.brand==='Mirka',x=>{x.details[0].evidenceSourceId='far-kj60-manual';x.details[0].evidencePage=12;}],
 ])it('rejects mirrored tampering: '+name,()=>tamper(find,change));
 it('rejects modified source URL, hash, date, regime or measurement records',()=>{for(const change of [s=>{s.url='https://example.com/generic';},s=>{s.sha256='f'.repeat(64);},s=>{s.observedAt='2026-10-04';},s=>{s.allowedFlowBases.push('maximum');},s=>{s.measurementRecords[0].pressureBar=6.3;}]){const c=structuredClone(snapshot);change(c.sources.find(s=>s.measurementRecords.length));expect(()=>buildDocumentedToolsOctober3C(c)).toThrow();}});
 it('does not treat nominal hose size as inner diameter and rejects injected connection cells',()=>{const s={contentType:'text/html'};expect(documentedConnectionFacts({rawLine:'Hose size: 3/8',sourceTechnicalCells:[['Hose size','3/8']]},s).recommendedHose).toBeUndefined();expect(()=>documentedConnectionFacts({rawLine:'',sourceTechnicalCells:[['Hose inner diameter mm','10']]},s)).toThrow();});
 it('keeps exactly 383 admitted KUANI references from twenty tool types with mean flows outside calculation',()=>{const rows=snapshot.tools.filter(x=>x.brand==='KUANI');expect(rows).toHaveLength(383);expect(new Set(rows.map(x=>x.categoryId)).size).toBe(20);for(const row of rows){expect(row.flowBasis).toBe('average');expect(row.pressureBar).toBeNull();expect(row.transcription.sourceSha256).toBe('569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba');expect(row.transcription.rawTable.length).toBeGreaterThan(1);const tool=by('KUANI',row.mpn);expect(tool.demandModel).toBe('variable-volume');expect(tool.workingPressureBar).toEqual({});expect(evaluateCompatibility(ample,tool).verdict).toBe('insufficient_data');}expect(snapshot.exclusions.filter(x=>x.brand==='KUANI'&&x.reason.includes('Hors sélection'))).toHaveLength(17);});

});
