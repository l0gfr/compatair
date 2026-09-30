import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { buildIndustrialExpansion } from './industrial-expansion-2026.mjs';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { compressors, tools } from '../../src/data/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';

const read = async name => JSON.parse(await readFile(new URL(`../../src/data/imports/${name}-additional-2026-09-26.json`, import.meta.url)));
const inputs = { industrial: await read('industrial'), cp: await read('chicago-pneumatic'), dynabrade: await read('dynabrade') };
const batch = buildIndustrialExpansion(inputs);
const dutyReview = JSON.parse(await readFile(new URL('../../src/data/imports/compressor-duty-reviewed-2026-09-27.json', import.meta.url)));
describe('reviewed expansion of 200 compressors and 500 tools', () => {
 it('reconstructs all 700 unique manufacturer references and their published evidence', () => {
  expect(batch.compressors).toHaveLength(200); expect(batch.tools).toHaveLength(500);
  expect(compressors).toHaveLength(1819); expect(tools).toHaveLength(7087);
  const identified = [...compressors, ...tools].filter(p => p.mpn).map(p => `${p.brand.toLowerCase()}|${p.mpn.toLowerCase()}`);
  expect(new Set(identified).size).toBe(identified.length);
  for (const p of batch.compressors) expect(compressors.find(c => c.id === p.id), p.mpn).toEqual(compressorSchema.parse(p));
  for (const p of batch.tools) expect(tools.find(t => t.id === p.id), p.mpn).toEqual({ ...toolProfileSchema.parse(p), category: toolCategoryLabel(p.categoryId) });
 });
 it('keeps current FIAC identity, exact electrical variants and single-pressure FAD', () => {
  expect(batch.compressors.find(p => p.mpn === '4152026070')).toMatchObject({model:'AX 703BD 8 400/50 CE', powerKw:5.6, tankLiters:0, fadCurve:[{pressureBar:8,litersPerMinute:880}]});
  expect(batch.compressors.find(p => p.mpn === '4152022526')).toMatchObject({voltage:'230 V, 50 Hz',phase:'three-phase',powerKw:5.5,fadCurve:[{pressureBar:8,litersPerMinute:846}]});
  expect(batch.compressors.every(p => p.fadCurve.length === 1 && p.status === 'unknown')).toBe(true);
  for (const p of batch.compressors) {
   const reviewed = dutyReview.rows.find(row => row.id === p.id);
   expect(p.dutyCycle, p.id).toBe(reviewed?.dutyCycle);
   if (reviewed) expect(p.evidence.find(e => p.fieldSources.dutyCycle.includes(e.id))).toMatchObject({ sourceType: 'manufacturer', retrievedAt: '2026-09-27' });
  }
 });
 it('binds Shinano dynamic pressure to the separate instruction page and retains maximum demand', () => {
  const t=batch.tools.find(p => p.mpn === 'SI-3011A');
  expect(t.airflowLpm.typical).toBe(426);
  expect(t.workingPressureBar).toEqual({min:6.3,typical:6.3,max:6.3});
  const id=t.fieldSources.workingPressureBar[0];
  expect(t.evidence.find(e=>e.id===id).sourceUrl).toContain('#page=43');
  expect(t.specifications.find(s=>s.label==='Condition de pression').evidenceIds).toEqual([id]);
  expect(batch.tools.find(p=>p.mpn==='SI-5800').editorial.limitations.join(' ')).toContain('conversion incohérente');
 });
 it('preserves pulse-tool pressure, maximum of the two regimes and unresolved collet differences', () => {
  expect(batch.tools.find(p=>p.mpn==='7PHH602')).toMatchObject({workingPressureBar:{min:6,typical:6,max:6},airflowLpm:{typical:300}});
  const cp=batch.tools.find(p=>p.mpn==='6151600140');
  expect(cp.airflowLpm.typical).toBe(156);
  expect(cp.editorial.limitations.join(' ')).toContain('Aucune dimension de pince unique');
  expect(batch.tools.some(p=>p.mpn.startsWith('34RAA'))).toBe(false);
 });
 it('rejects altered FAD, electrical version, identity and undocumented pressure conditions', () => {
  for (const change of [p=>p.industrial.rows[0].fadCurve[0].litersPerMinute++,p=>p.industrial.rows[0].phase='single-phase',p=>p.industrial.rows[0].model='Inferred model',p=>p.industrial.rows[0].brand='Unreviewed',p=>p.industrial.rows[0].fieldEvidence={},p=>p.industrial.toolRows.find(t=>t.brand==='Shinano').fieldEvidence.workingPressureBar[0].page=1,p=>p.industrial.toolRows.find(t=>t.brand==='Shinano').airflowLpm/=6]) {
   const changed=structuredClone(inputs);change(changed);expect(()=>buildIndustrialExpansion(changed)).toThrow();
  }
 });
 it('rejects incomplete provenance, wrong manufacturer endpoints and partial or duplicate batches', () => {
  for (const change of [p=>p.industrial.sources[0].sha256='',p=>p.industrial.sources[0].url='https://evil.example/source',p=>p.industrial.rows.pop(),p=>p.industrial.toolRows[1]=p.industrial.toolRows[0],p=>p.cp.rows[0].loadedAirLs='0']) {
   const changed=structuredClone(inputs);change(changed);expect(()=>buildIndustrialExpansion(changed)).toThrow();
  }
 });
});
