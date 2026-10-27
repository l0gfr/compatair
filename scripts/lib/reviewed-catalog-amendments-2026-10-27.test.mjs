import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { applyReviewedOctober27Amendment, beforeOctober27Amendment } from './reviewed-catalog-amendments-2026-10-27.mjs';
import { parseCatalogProductSource, buildCatalogProductSource } from './catalog-tooling.mjs';
import { tools, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { createRuntimeCatalog } from '../../src/domain/runtime-catalog';
import { compatibilityWithoutCompressor } from '../../server/air-compatibility.mjs';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-27.json', import.meta.url)));
const native = row => parseCatalogProductSource('tools', readFileSync(new URL('../../'+row.file, import.meta.url), 'utf8'));
describe('October27 exact unit and taxonomy corrections', () => {
 it('replays only the two exact records and rejects identity, field and historical drift', () => {
  expect(snapshot.rows).toHaveLength(2);
  for (const row of snapshot.rows) {
   const after=native(row), before=beforeOctober27Amendment(after);
   expect(applyReviewedOctober27Amendment(structuredClone(before))).toEqual(after);
   expect(applyReviewedOctober27Amendment(structuredClone(after))).toEqual(after);
   expect(after.evidence.slice(0,before.evidence.length)).toEqual(before.evidence);
   for(const field of Object.keys(before).filter(field=>!row.fields.includes(field)))expect(after[field],row.id+'/'+field).toEqual(before[field]);
   for(const field of ['brand','model','mpn'])expect(()=>applyReviewedOctober27Amendment({...before,[field]:'unreviewed'})).toThrow('Identité');
   const drift=structuredClone(before);drift[row.fields[0]]='unreviewed';expect(()=>applyReviewedOctober27Amendment(drift)).toThrow('Base différente');expect(()=>beforeOctober27Amendment(drift)).toThrow('Historical October27');
   expect(createHash('sha256').update(buildCatalogProductSource('tools',before,'\t')).digest('hex'),row.id).toBe(row.beforeFileSha256);
   const ids=new Set(after.evidence.map(e=>e.id));for(const refs of Object.values(after.fieldSources))for(const id of refs)expect(ids.has(id),row.id).toBe(true);
  }
  const outside={id:'outside-october27'};expect(applyReviewedOctober27Amendment(outside)).toBe(outside);
 });
 it('publishes the corrected native records and preserves nonconclusive demands through runtime', () => {
  const parsed=snapshot.rows.map(row=>toolProfileSchema.parse(native(row)));
  const runtime=createRuntimeCatalog([],parsed,CATALOG_VERIFIED_AT,'b'.repeat(64));
  for(const p of parsed){expect(tools.find(t=>t.id===p.id)).toEqual({...p,category:toolCategoryLabel(p.categoryId)});expect(compatibilityWithoutCompressor(p).verdict).toBe('insufficient_data');expect(compatibilityWithoutCompressor(runtime.tools.find(t=>t.id===p.id))).toEqual(compatibilityWithoutCompressor(p));}
  const sata=parsed.find(p=>p.brand==='SATA');expect(sata.notes.join(' ')).toContain('350 Nl/min');expect(sata.notes.join(' ')).not.toContain('350 L/min');expect(sata.demandModel).toBe('variable-volume');
  const biax=parsed.find(p=>p.brand==='BIAX');expect(biax.categoryId).toBe('ebavureuse');expect(biax.category).toBe('ebavureuse');expect(biax.airflowBasis).toBe('unqualified');
 });
});
