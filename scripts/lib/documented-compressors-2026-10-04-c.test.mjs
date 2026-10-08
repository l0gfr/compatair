import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressorSchema } from '../../src/domain/catalog';
import { rawCompressors } from '../../src/data/products/compressors';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { buildDocumentedCompressorsOctober4C as build, documentedCompressorIdentity as identity, parseSourceNumbers } from './documented-compressors-2026-10-04-c.mjs';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-compressors-2026-10-04-c.json', import.meta.url)));
const batch = build(snapshot);
const product = id => batch.find(p => p.id === id);
const demand = { id: 'fixture', demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 100, typical: 100, max: 100 }, confidence: 'B' };
describe('documented compressor lot C, original manufacturer data', () => {
 it('adds 420 distinct models across nine manufacturers, absent from the preceding catalog', () => {
  expect(batch).toHaveLength(420);
  expect(new Set(batch.map(p => p.brand)).size).toBe(9);
  const newIds = new Set(batch.map(p => p.id));
  const followingBatch = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-compressors-2026-10-05.json', import.meta.url)));
  const october7Batch = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-compressors-2026-10-07.json', import.meta.url)));
  const followingIds = new Set([...followingBatch.compressors, ...october7Batch.compressors].map(p => p.id));
  const old = rawCompressors.filter(p => !newIds.has(p.id) && !followingIds.has(p.id));
  expect(old).toHaveLength(4239);
  const identities = new Set(old.map(p => identity(`${p.brand} ${p.model}`)));
  expect(new Set(snapshot.compressors.map(p => p.normalizedIdentity)).size).toBe(420);
  for (const row of snapshot.compressors) expect(identities.has(row.normalizedIdentity), row.id).toBe(false);
  for (const p of batch) { expect(compressorSchema.safeParse(p).success, p.id).toBe(true); expect(rawCompressors.find(r => r.id === p.id), p.id).toEqual(p); }
  expect(identity('OSC 18.5')).toBe(identity('OSC 18,5'));
  expect(identity('OSC 18.5')).not.toBe(identity('OSC 185'));
 });
 it('preserves measurement pressure separately from configuration ceilings and converts original units', () => {
  expect(product('ozen-osc-18-d').fadCurve).toEqual([{ pressureBar: 12.5, litersPerMinute: 2430 }]);
  expect(product('ozen-osc-18-d').maxPressureBar).toBe(13);
  expect(product('alup-cnr-75').fadCurve).toEqual([{ pressureBar: 7, litersPerMinute: 660 }]);
  expect(product('alup-cnr-75').maxPressureBar).toBe(10);
  expect(product('ekomak-dmd-100').fadCurve).toEqual([{ pressureBar: 13, litersPerMinute: 780 }]);
  expect(product('alup-largo-23').fadCurve).toEqual([{ pressureBar: 13, litersPerMinute: 2916.667 }]);
  expect(product('ingersoll-rand-rsb15ie').fadCurve).toEqual([{ pressureBar: 13.5, litersPerMinute: 1699.011 }]);
  expect(product('ingersoll-rand-rsb18ie').fadCurve).toEqual([{ pressureBar: 13.5, litersPerMinute: 2208.714 }]);
  expect(product('ingersoll-rand-rsb22ie').fadCurve).toEqual([{ pressureBar: 13.5, litersPerMinute: 2690.1 }]);
  expect(product('compair-l200fc').powerKw).toBe(200);
 });
 it('keeps documented US configurations at 60 Hz and omits unknown storage and duty', () => {
  const mattei = product('mattei-blade-4');
  expect(mattei.variant.distinguishingAttributes.fréquence).toBe('60 Hz');
  expect(mattei.fadCurve).toEqual([{ pressureBar: 8, litersPerMinute: 590 }]);
  expect(mattei).not.toHaveProperty('tankLiters');
  expect(mattei).not.toHaveProperty('dutyCycle');
  expect(evaluateCompatibility(mattei, demand).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('alup-cnr-75'), demand).verdict).toBe('continuous');
  const aboveCeiling = { ...demand, workingPressureBar: { min: 11, typical: 11, max: 11 } };
  expect(evaluateCompatibility(product('alup-cnr-75'), aboveCeiling).verdict).toBe('incompatible');
  for (const p of batch) {
   expect(p).not.toHaveProperty('intakeFlowLpm');
   if (p.tankLiters === undefined) expect(p.fieldSources).not.toHaveProperty('tankLiters');
   if (p.dutyCycle === undefined) expect(p.fieldSources).not.toHaveProperty('dutyCycle');
  }
 });
 it('excludes materially inconsistent FAD pairs and source maxima at another pressure', () => {
  for (const id of ['gardner-denver-l90rs', 'sullair-ls160', 'sullair-ls160v', 'sullair-ls190', 'sullair-ls190v', 'sullair-ls220', 'sullair-ls220v', 'sullair-ls260', 'sullair-ls260v', 'alup-allegro-31', 'alup-allegro-37', 'alup-allegro-45', 'alup-evoluto-30', 'alup-evoluto-37']) expect(product(id), id).toBeUndefined();
  for (const row of snapshot.compressors.filter(r => r.flow.rangeMinimum)) {
   expect(row.flow.rangeMinimum.unit).toBe(row.flow.unit);
   expect(row.flow.value).toBeGreaterThanOrEqual(row.flow.rangeMinimum.value);
   expect(product(row.id).editorial.overview).toContain('maximum de la plage FAD publiée');
  }
  expect(parseSourceNumbers('1.332', 'decimal')).toEqual([1.332]);
  expect(() => parseSourceNumbers('1.332.000', 'decimal')).toThrow();
 });
 it('does not turn a variable-speed regulation minimum into a capacity ceiling', () => {
  const p = product('ekomak-eko-8-vst');
  expect(p.fadCurve).toEqual([{ pressureBar: 7, litersPerMinute: 1271.667 }]);
  expect(p.specifications).toContainEqual(expect.objectContaining({ label: 'FAD minimal déclaré à 7 bar', value: '366,667 L/min ; minimum de régulation, distinct de la capacité maximale' }));
  const intermediate = { ...demand, workingPressureBar: { min: 7, typical: 7, max: 7 }, airflowLpm: { min: 700, typical: 700, max: 700 } };
  expect(evaluateCompatibility(p, intermediate).verdict).toBe('continuous');
  expect(evaluateCompatibility(p, { ...intermediate, airflowLpm: { min: 2000, typical: 2000, max: 2000 } }).verdict).toBe('incompatible');
 });
 const mutations = [
  ['FAD', s => s.compressors[0].flow.value++],
  ['measurement pressure', s => s.compressors[0].flow.pressure.value++],
  ['unknown tank to zero', s => s.compressors.find(r => r.tank === null).tank = { value: 0, unit: 'L', ref: s.compressors[0].maximum.ref }],
  ['unknown duty to continuous', s => s.compressors.find(r => r.dutyCycle === null).dutyCycle = 1],
  ['capacity ceiling replaced by regulation minimum', s => { const r = s.compressors.find(r => r.flow.rangeMinimum); r.flow.value = r.flow.rangeMinimum.value; }],
  ['60 Hz to 50 Hz', s => s.compressors.find(r => r.electrical?.frequencyHz === 60).electrical.frequencyHz = 50],
  ['missing identity', s => s.compressors.pop()],
  ['HTTP status', s => s.sources[0].status = 404],
  ['original bytes', s => s.sources[0].bytes = 0],
  ['original SHA', s => s.sources[0].sha256 = '0'.repeat(64)],
  ['source host', s => s.sources[0].url = 'https://example.org/file.pdf'],
  ['source credentials', s => s.sources[0].url = 'https://u:p@www.alup.com/file.pdf'],
  ['source cell', s => s.sources.find(r => r.extractedPages.some(p => p.tables?.length)).extractedPages.find(p => p.tables?.length).tables[0][0][0] = 'altered'],
 ];
 it.each(mutations)('rejects changed %s', (_label, mutate) => { const s = structuredClone(snapshot); mutate(s); expect(() => build(s)).toThrow(); });
});
