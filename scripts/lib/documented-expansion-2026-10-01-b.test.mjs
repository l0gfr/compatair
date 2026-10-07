import { parseCatalogProductSource } from './catalog-tooling.mjs';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { buildDocumentedExpansionOctoberB } from './documented-expansion-2026-10-01-b.mjs';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-expansion-2026-10-01-b.json', import.meta.url)));
const batch = buildDocumentedExpansionOctoberB(snapshot);
const ample = batch.compressors.find(p => p.model === 'SM 16' && p.maxPressureBar === 8);
const byMpn = mpn => batch.tools.find(p => p.mpn === mpn);
// The generated records contain JSON. Inspect this batch without importing all
// catalog modules again into an isolated Vitest worker.
const committedRecord = (kind, slug) => {
 const source = readFileSync(new URL(`../../src/data/products/${kind}/${slug}.ts`, import.meta.url), 'utf8');
 return parseCatalogProductSource(kind, source);
};
describe('reviewed manufacturer tables, October 1 batch B', () => {
 it('validates distinct pressure/equipment configurations and exact tool references', () => {
  expect(batch.compressors).toHaveLength(200); expect(batch.tools).toHaveLength(1000);
  expect(new Set([...batch.compressors, ...batch.tools].map(p => p.id)).size).toBe(1200);
  expect(new Set(batch.tools.map(p => `${p.brand}:${p.mpn}`)).size).toBe(1000);
  for (const p of batch.compressors) compressorSchema.parse(p);
  for (const p of batch.tools) toolProfileSchema.parse(p);
  for (const p of [...batch.compressors, ...batch.tools]) {
   const ids = new Set(p.evidence.map(e => e.id));
   for (const id of Object.values(p.fieldSources).flat()) expect(ids.has(id), `${p.id}: ${id}`).toBe(true);
  }
 });
 it('publishes exactly the reviewed values and keeps adapters outside the tool catalog', () => {
  for (const p of batch.compressors) expect(compressorSchema.parse(committedRecord('compressors', p.slug))).toEqual(compressorSchema.parse(p));
  for (const p of batch.tools) expect(toolProfileSchema.parse(committedRecord('tools', p.slug))).toEqual(toolProfileSchema.parse(p));
  expect(snapshot.tools.filter(p => p.brand === 'ZIPP' && p.page === 59)).toHaveLength(0);
  for (const mpn of ['ZBT22749', 'ZBT1650-05W', 'ZAT400', 'ZAT400-HX1']) expect(byMpn(mpn)).toBeUndefined();
  for (const p of batch.tools.filter(p => p.brand === 'ZIPP' && !p.mpn.startsWith('ZRR21-'))) expect(p.mpn).not.toContain('/');
  expect(byMpn('8304026').categoryId).toBe('visseuse');
  expect(byMpn('GP-948A').categoryId).toBe('lime-alternative');
 });
 it('requires a separate explicit series duty source for KAESER', () => {
  const p = batch.compressors.find(p => p.model === 'SX 3');
  expect(p.fieldSources.dutyCycle).toEqual(['october-b-kaeser-duty']);
  expect(snapshot.sources.find(s => s.id === 'kaeser-duty').dutyQuote).toContain('100% duty cycle');
  expect(batch.compressors.find(p => p.model === 'CSM 15').fieldSources.dutyCycle).toEqual(['october-b-ceccato-csm-7-5-20-hp-pdf-p3']);
  const changed = structuredClone(snapshot); delete changed.sources.find(s => s.id === 'kaeser-duty').dutyQuote;
  expect(() => buildDocumentedExpansionOctoberB(changed)).toThrow('Service continu non documenté');
 });
 it('keeps KAESER working pressure distinct from maximum pressure and dimension order', () => {
  const p = batch.compressors.find(p => p.model === 'SX 3' && p.maxPressureBar === 8);
  expect(p.fadCurve).toEqual([{ pressureBar: 7.5, litersPerMinute: 340 }]);
  expect(p.specifications.find(s => s.label.startsWith('Dimensions')).label).toContain('largeur × profondeur');
  const lower = batch.compressors.find(p => p.model === 'SK 22' && p.maxPressureBar === 6);
  const need = { ...byMpn('ZIW6511'), airflowBasis: undefined, workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 } };
  expect(evaluateCompatibility(lower, need).verdict).toBe('incompatible');
 });
 it('converts Ceccato l/s and m3/h at their published reference pressures', () => {
  const csm = batch.compressors.find(p => p.model === 'CSM 21' && p.maxPressureBar === 13);
  expect(csm.fadCurve).toEqual([{ pressureBar: 12.5, litersPerMinute: 1872 }]);
  const drm = batch.compressors.find(p => p.model === 'DRM 50' && p.maxPressureBar === 8.5);
  expect(drm.fadCurve).toEqual([{ pressureBar: 8, litersPerMinute: 6083.333 }]);
 });
 it('preserves average and unspecified flow, without granting a continuous verdict', () => {
  expect(byMpn('ZIW6511').airflowLpm.typical).toBe(230);
  expect(byMpn('ZIW6511').airflowBasis).toBe('average');
  expect(byMpn('GP-824ST2').airflowLpm.typical).toBe(620);
  expect(byMpn('GP-824ST2').airflowBasis).toBe('unqualified');
  for (const p of batch.tools.filter(p => p.airflowBasis)) expect(evaluateCompatibility(ample, p).verdict).toBe('insufficient_data');
 });
 it('uses documented litres per cycle without deriving a fictitious cadence', () => {
  const p = byMpn('GP-101RN');
  expect(p.demandModel).toBe('per-action'); expect(p.airPerActionLiters).toBe(1.5);
  expect(p.airflowLpm).toBeUndefined();
  expect(byMpn('GP-250RM').airPerActionLiters).toBe(2);
 });
 it('withholds ambiguous units and absent pressure rather than inventing a conversion', () => {
  expect(byMpn('8301052').demandModel).toBe('variable-volume');
  expect(byMpn('8301052').workingPressureBar).toEqual({});
  expect(byMpn('8301052').airflowLpm).toBeUndefined();
  expect(evaluateCompatibility(ample, byMpn('8301052')).verdict).toBe('insufficient_data');
 });
 it('rejects mismatched table columns, cadence substitutions and unsafe provenance', () => {
  for (const mutate of [s => { s.compressors[0].flowColumn = 10; }, s => { s.compressors[0].pressureBar = 9; }, s => { s.tools.find(p => p.brand === 'ZIPP').flowBasis = 'maximum'; }, s => { s.tools.find(p => p.mpn === 'GP-101RN').flowUnit = 'L/min'; }, s => { s.sources[0].sha256 = ''; }, s => { s.sources[0].url = 'http://example.com'; }]) {
   const changed = structuredClone(snapshot); mutate(changed); expect(() => buildDocumentedExpansionOctoberB(changed)).toThrow();
  }
 });
});
