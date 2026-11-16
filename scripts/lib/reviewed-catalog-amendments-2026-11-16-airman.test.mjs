import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, it, expect } from 'vitest';
import { buildCatalogProductSource, parseCatalogProductSource } from './catalog-tooling.mjs';
import { applyReservedNovember16AirmanFollowup, beforeReservedNovember16AirmanFollowup } from './reviewed-catalog-amendments-2026-11-16-airman.mjs';
import { technicalCardSvg } from './technical-card.mjs';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { evidenceHistory } from '../../src/data/evidence-history';
import { createRuntimeCatalog, runtimeCatalogSchema } from '../../src/domain/runtime-catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
const read = p => readFileSync(new URL('../../' + p, import.meta.url));
const hash = b => createHash('sha256').update(b).digest('hex');
const s = JSON.parse(read('src/data/imports/catalog-amendments-reviewed-2026-11-16-airman.json'));
describe('Exact AIRMAN regional sources after the separate 434-page preparation', () => {
 it('replays two exact native records and preserves bytes and identity guards', () => {
  expect(s.rows).toHaveLength(2);
  for (const r of s.rows) {
   const after = parseCatalogProductSource('compressors', read(r.file).toString());
   expect(after).toEqual(r.after); expect(beforeReservedNovember16AirmanFollowup(after)).toEqual(r.before);
   expect(applyReservedNovember16AirmanFollowup(structuredClone(r.before))).toEqual(after);
   expect(applyReservedNovember16AirmanFollowup(structuredClone(after))).toEqual(after);
   let b = buildCatalogProductSource('compressors', Object.fromEntries(r.sourcePropertyOrder.map(k => [k,r.before[k]])), r.sourceIndentation);
   if (r.sourceCompactExport) b = b.replace(';\n\nexport', ';\nexport');
   expect(hash(b)).toBe(r.beforeFileSha256); expect(hash(read(r.file))).toBe(r.afterFileSha256);
   expect(compressors.find(c => c.id === r.id)).toEqual(compressorSchema.parse(after));
   for (const k of ['brand','model','mpn']) expect(() => applyReservedNovember16AirmanFollowup({...r.before,[k]:'unknown'})).toThrow('identity');
   const drift = structuredClone(r.before); drift[r.fields[0]]='unknown';
   expect(() => applyReservedNovember16AirmanFollowup(drift)).toThrow('base');
   expect(() => beforeReservedNovember16AirmanFollowup(drift)).toThrow('historical');
  }
 });
 it('preserves all39207 historical events and appends four exact proofs', () => {
  expect(evidenceHistory.events).toHaveLength(39211);
  expect(hash(JSON.stringify(evidenceHistory.events.slice(0,39207)))).toBe(s.evidenceHistoryAppend.previousEventsSha256);
  expect(s.evidenceHistoryAppend.previousEventCount).toBe(39207); expect(s.evidenceHistoryAppend.addedEvents).toBe(4);
  for(const e of evidenceHistory.events.slice(39207)) expect(hash(JSON.stringify({productId:e.productId,evidence:e.snapshot}))).toBe(e.fingerprint);
  for(const r of s.rows) expect(r.after.evidence.slice(0,r.before.evidence.length)).toEqual(r.before.evidence);
 });
 it('keeps FAD, selected operating ceiling and thermal power separate in both engines', () => {
  const probe = toolProfileSchema.parse({...tools.find(t=>t.demandModel==='fixed-flow'),airflowBasis:undefined,airflowLpm:{min:1,typical:1,max:1}});
  for(const r of s.rows) {
   const c=compressorSchema.parse(r.after); expect(c.fadCurve).toEqual([{pressureBar:7,litersPerMinute:5200}]);
   expect(c.maxPressureBasis).toBe('selected-working-pressure-ceiling'); expect(c.dutyCycle).toBeUndefined(); expect(c.tankLiters).toBeUndefined(); expect(c.powerKw).toBeUndefined();
   const rt=runtimeCatalogSchema.parse(JSON.parse(JSON.stringify(createRuntimeCatalog([c],[probe],CATALOG_VERIFIED_AT,'a'.repeat(64)))));
   const verdict=evaluateCompatibility(c,probe); expect(verdict.verdict).toBe('insufficient_data'); expect(evaluateCompatibility(rt.compressors[0],rt.tools[0])).toEqual(verdict);
   const ids=new Set(c.evidence.map(e=>e.id)); for(const refs of [...Object.values(c.fieldSources),...c.specifications.map(x=>x.evidenceIds)]) for(const id of refs)expect(ids.has(id)).toBe(true);
  }
 });
 it('distinguishes the regional lengths, heights, masses and fuel without overwriting the Japanese transcription', () => {
  for(const r of s.rows) {
   expect(r.after.specifications.some(x=>x.label==='Dimensions actuelles Asia, mm' && x.value.startsWith('1970×950×'))).toBe(true);
   expect(r.after.specifications.some(x=>x.label.includes('Transcription japonaise historique') && x.value.startsWith('1850×950×'))).toBe(true);
   expect(r.after.specifications.some(x=>x.value==='47.5 PS (34.9 kW) / 3000 rpm')).toBe(true);
  }
  expect(s.rows.map(r=>r.after.weightKg)).toEqual([860,935]);
  expect(s.rows.map(r=>r.after.specifications.find(x=>x.label==='Carburant, pas une cuve de stockage d’air').value)).toEqual(['90 L','92 L']);
 });
 it('preserves old cards and regenerates both current illustrations exactly', () => {
  expect(s.technicalCards).toHaveLength(2);
  for(const card of s.technicalCards) { const r=s.rows.find(r=>r.id===card.id);expect(read('public'+card.path).toString()).toBe(technicalCardSvg(r.after,'compressors')); expect(hash(read('public'+card.previousPath))).toBe(card.previousSha256); }
 });
});
