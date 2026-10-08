import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressorSchema } from '../../src/domain/catalog';
import { rawCompressors } from '../../src/data/products/compressors';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { buildDocumentedCompressorsOctober5 as build, documentedCompressorIdentity as identity, parseSourceNumbers } from './documented-compressors-2026-10-05.mjs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-compressors-2026-10-05.json', import.meta.url)));
const batch = build(snapshot);
const product = id => batch.find(p => p.id === id);
const semanticIdentity = p => identity(`${p.brand} ${p.model.replaceAll('+', ' Plus')}`);
const demand = { id: 'fixture', demandModel: 'fixed-flow', workingPressureBar: { min: 8, typical: 8, max: 8 }, airflowLpm: { min: 100, typical: 100, max: 100 }, confidence: 'B' };

describe('October 5 original compressor documents', () => {
 it('adds 300 distinct manufacturer models across 11 brands without duplicating the catalog', () => {
  expect(batch).toHaveLength(300);
  expect(new Set(batch.map(p => p.brand)).size).toBe(11);
  const ids = new Set(batch.map(p => p.id));
  const followingBatch = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-compressors-2026-10-07.json', import.meta.url)));
  const followingIds = new Set(followingBatch.compressors.map(p => p.id));
  const old = rawCompressors.filter(p => !ids.has(p.id) && !followingIds.has(p.id));
  expect(old).toHaveLength(4659);
  const priorIdentities = new Set(old.map(semanticIdentity));
  expect(new Set(snapshot.compressors.map(p => p.normalizedIdentity)).size).toBe(300);
  for (const row of snapshot.compressors) expect(priorIdentities.has(row.normalizedIdentity), row.id).toBe(false);
  for (const p of batch) {
   expect(compressorSchema.safeParse(p).success, p.id).toBe(true);
   expect(rawCompressors.find(r => r.id === p.id), p.id).toEqual(compressorSchema.parse(p));
  }
 });
 it('retains the delivered column rather than displacement or receiver filling, at its actual pressure', () => {
  expect(product('agre-boss-6000').fadCurve).toEqual([{ pressureBar: 8, litersPerMinute: 302 }]);
  expect(product('agre-boss-6000').maxPressureBar).toBe(10);
  expect(product('agre-worker-240-tw').fadCurve).toEqual([{ pressureBar: 6, litersPerMinute: 144 }]);
  expect(product('agre-worker-240-tw').maxPressureBar).toBe(8);
  expect(product('mauguiere-mavd-421').fadCurve).toEqual([{ pressureBar: 7, litersPerMinute: 5333.333 }]);
  expect(product('mauguiere-mavd-421').maxPressureBar).toBe(7.5);
 });
 it('preserves semantic Plus models and publishes VSD minima separately from available capacity', () => {
  expect(product('denair-dav-30').model).toBe('DAV-30');
  expect(product('denair-dav-30-plus').model).toBe('DAV-30+');
  expect(product('denair-dav-30').fadCurve[0].litersPerMinute).toBe(5510);
  expect(product('denair-dav-30-plus').fadCurve[0].litersPerMinute).toBe(6370);
  expect(product('denair-dav-30-plus').specifications).toContainEqual(expect.objectContaining({ label: 'FAD minimal déclaré à 7 bar', value: '2 550 L/min ; minimum de régulation, distinct de la capacité maximale' }));
  expect(product('atlas-copco-ga11vsd-plus').fadCurve).toEqual([{ pressureBar: 7.033, litersPerMinute: 1951.031 }]);
  expect(product('atlas-copco-ga11vsd-plus')).not.toHaveProperty('powerKw');
  expect(product('atlas-copco-ga11vsd-plus').specifications).toContainEqual(expect.objectContaining({ label: 'Drive Motor Nominal Rating', value: '4 Drive Motor Nominal Rating 15 hp' }));
 });
 it('only qualifies the three explicit 100 percent OX configurations for continuous duty', () => {
  expect(batch.filter(p => p.dutyCycle === 1).map(p => p.id).sort()).toEqual(['kaishan-ox15', 'kaishan-ox4-5', 'kaishan-ox7-5']);
  const ox = product('kaishan-ox4-5');
  expect(ox.tankLiters).toBe(500);
  expect(ox.variant.distinguishingAttributes.fréquence).toBe('50 Hz');
  expect(ox).not.toHaveProperty('powerKw');
  expect(evaluateCompatibility(ox, demand).verdict).toBe('continuous');
  expect(ox.maxPressureBasis).toBe('selected-working-pressure-ceiling');
  expect(evaluateCompatibility(ox, { ...demand, workingPressureBar: { min: 9, typical: 9, max: 9 } }).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('agre-boss-6000'), demand).verdict).toBe('insufficient_data');
  for (const p of batch) {
   expect(p).not.toHaveProperty('intakeFlowLpm');
   if (p.dutyCycle === undefined) expect(p.fieldSources).not.toHaveProperty('dutyCycle');
   if (p.tankLiters === undefined) expect(p.fieldSources).not.toHaveProperty('tankLiters');
  }
 });
 it('parses only explicitly declared separator conventions', () => {
  expect(parseSourceNumbers('3* 1,105.4 (acfm)', 'english-thousands')).toEqual([3, 1105.4]);
  expect(parseSourceNumbers('1.105', 'decimal')).toEqual([1.105]);
  expect(parseSourceNumbers('1,105', 'decimal')).toEqual([1.105]);
  expect(() => parseSourceNumbers('1,10.5', 'english-thousands')).toThrow();
  expect(() => parseSourceNumbers('1234,567.8', 'english-thousands')).toThrow();
  expect(() => parseSourceNumbers('1,105.4', 'decimal')).toThrow();
 });
 const mutations = [
  ['delivered column replaced by intake', s => { const r = s.compressors[0]; r.flow.value = 460; r.flow.ref.columnIndex = 1; r.flow.ref.raw = '460'; }],
  ['pressure of measurement', s => s.compressors[0].flow.pressure.value++],
  ['unknown duty promoted from qualitative language', s => s.compressors.find(r => r.brand === 'Mauguière').dutyCycle = 1],
  ['unknown tank changed to zero', s => s.compressors.find(r => r.tank === null).tank = { value: 0, unit: 'L', ref: s.compressors[0].maximum.ref }],
  ['capacity replaced by regulation minimum', s => { const r = s.compressors.find(r => r.flow.rangeMinimum); r.flow.value = r.flow.rangeMinimum.value; }],
  ['Plus identity merged with the base model', s => { const r = s.compressors.find(r => r.id === 'denair-dav-30-plus'); r.normalizedModel = 'DAV-30'; }],
  ['source HTTP status', s => s.sources[0].status = 404],
  ['original digest', s => s.sources[0].sha256 = '0'.repeat(64)],
  ['source credentials', s => s.sources[0].url = 'https://u:p@www.agre.de/doc.pdf'],
  ['source excerpt', s => s.sources[0].extractedPages[0].text += ' inserted'],
  ['visual transcription digest', s => s.sources.find(r => r.extractedPages.some(p => p.visualReview)).extractedPages.find(p => p.visualReview).visualReview.pageImageSha256 = '0'.repeat(64)],
 ];
 it.each(mutations)('refuses altered %s', (_label, mutate) => { const s = structuredClone(snapshot); mutate(s); expect(() => build(s)).toThrow(); });
});
