import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { buildDocumentedCompressorsOctober2B } from './documented-compressors-2026-10-02-b.mjs';
import { compressorSchema } from '../../src/domain/catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-compressors-2026-10-02-b.json', import.meta.url)));
const batch = buildDocumentedCompressorsOctober2B(snapshot);
const product = (model, dataset, maximum, variable) => batch[snapshot.compressors.findIndex(row => row.model === model && row.dataset === dataset && (maximum === undefined || row.maxPressureBar === maximum) && (variable === undefined || row.variableSpeed === variable))];
const record = slug => {
 const source = readFileSync(new URL(`../../src/data/products/compressors/${slug}.ts`, import.meta.url), 'utf8');
 const prefix = 'const product = ', suffix = ';\n\nexport default product;\n';
 if (!source.startsWith(prefix) || !source.endsWith(suffix)) throw new Error('Format du produit altéré');
 return JSON.parse(source.slice(prefix.length, -suffix.length));
};
describe('documented compressor configurations, October 2 B', () => {
 it('keeps 400 genuine configurations and canonical records reproducible', () => {
  expect(batch).toHaveLength(400); expect(new Set(batch.map(value => value.id)).size).toBe(400);
  expect(Object.fromEntries(['BOGE', 'ELGi', 'Chicago Pneumatic', 'Ingersoll Rand'].map(brand => [brand, batch.filter(value => value.brand === brand).length]))).toEqual({ BOGE: 220, ELGi: 128, 'Chicago Pneumatic': 50, 'Ingersoll Rand': 2 });
 for (const value of batch) expect(compressorSchema.parse(record(value.slug))).toEqual(compressorSchema.parse(value));
 });
 it('normalizes proof ids for all added history events without changing raw source identities', () => {
  const rawSourceId = '017_e_series_data_en_130526';
  expect(snapshot.sources.filter(source => source.id === rawSourceId)).toHaveLength(1);
  const affected = batch.filter(value => value.evidence.some(proof => /^october2b-017-e-series-data-en-130526-p[12]$/.test(proof.id)));
  expect(affected).toHaveLength(46);
  expect(affected.filter(value => value.evidence.some(proof => proof.id.endsWith('130526-p1')))).toHaveLength(20);
  expect(affected.filter(value => value.evidence.some(proof => proof.id.endsWith('130526-p2')))).toHaveLength(26);
  for (const value of batch) {
   const proofs = new Set(value.evidence.map(proof => proof.id));
   for (const proof of value.evidence) {
    expect(proof.id).toMatch(/^[a-z0-9:-]+$/);
    expect(`added:${value.id}:${proof.id}:2026-10-02`).toMatch(/^[a-z0-9:-]+$/);
   }
   for (const refs of Object.values(value.fieldSources)) for (const id of refs) expect(proofs.has(id)).toBe(true);
   for (const spec of value.specifications) for (const id of spec.evidenceIds) expect(proofs.has(id)).toBe(true);
  }
 });
 it('rejects colliding or empty normalized proof source ids', () => {
  const collision = structuredClone(snapshot);
  collision.sources.push({ ...collision.sources[0], id: collision.sources[0].id.replaceAll('-', '_') });
  expect(() => buildDocumentedCompressorsOctober2B(collision)).toThrow(/preuve normalisé/);
  const empty = structuredClone(snapshot);
  empty.sources.push({ ...empty.sources[0], id: '___' });
  expect(() => buildDocumentedCompressorsOctober2B(empty)).toThrow(/preuve normalisé/);
 });
 it('separates maximum and reference pressure and preserves original units', () => {
  expect(product('EN 2', 'elgi-en50', 7.2).fadCurve).toEqual([{ pressureBar: 7, litersPerMinute: 320 }]);
  expect(product('CPI75', 'cp-big', 7.5).fadCurve).toEqual([{ pressureBar: 7, litersPerMinute: 10433.333 }]);
  expect(product('EN 15', 'elgi-en60', undefined, true).fadCurve).toEqual([{ pressureBar: 8.618447, litersPerMinute: 1783.961 }]);
  expect(product('EN 15', 'elgi-en60', undefined, true).maxPressureBar).toBe(12.341616);
  expect(product('CPVSM75', 'cp-big-vsd').fadCurve).toEqual([{ pressureBar: 7, litersPerMinute: 10750 }, { pressureBar: 9.5, litersPerMinute: 9650 }]);
 });
 it('groups variable-speed curves and excludes contradictory pressure/flow points', () => {
  for (const model of ['EN 5x', 'EN 7', 'EN 11', 'EN 15']) expect(snapshot.compressors.filter(row => row.dataset === 'elgi-en50' && row.variableSpeed && row.model === model)).toHaveLength(1);
  expect(snapshot.compressors.some(row => row.model === 'EG 90-P' && row.points.some(point => point.pressureOriginal === 7))).toBe(false);
  expect(snapshot.compressors.some(row => row.model === 'EG 250' && !row.variableSpeed && row.points.some(point => point.pressureOriginal === 9.5))).toBe(false);
  expect(batch.every(value => value.fadCurve.every(point => point.pressureBar <= value.maxPressureBar))).toBe(true);
 });
 it('preserves the actual receiver package and scoped continuous-service declarations', () => {
  expect(product('E 7 FDR', 'boge-e').tankLiters).toBe(400);
  expect(product('S 38-4 LF', 'boge-s4').weightKg).toBe(1345);
  expect(batch.filter(value => value.dutyCycle === 1)).toHaveLength(129);
  expect(product('EN 2', 'elgi-en50', 7.2).dutyCycle).toBeUndefined();
  expect(product('R37ne', 'ir-vsd').oilType).toBe('unknown');
  const tool = { id: 'fixture-tool', demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 100, typical: 100, max: 100 }, confidence: 'B' };
  expect(evaluateCompatibility(product('EN 2', 'elgi-en50', 7.2), tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('C 3 L', 'boge-c', 10), tool).verdict).toBe('continuous');
  expect(evaluateCompatibility(product('C 3 L', 'boge-c', 10), { ...tool, workingPressureBar: { min: 11, typical: 11, max: 11 } }).verdict).toBe('incompatible');
 });
 it('rejects modified values, references, duty scopes and unsafe/altered provenance', () => {
  const mutations = [
   value => { value.compressors[0].points[0].flowOriginal += 1; },
   value => { value.compressors[0].points[0].pressureOriginal = 9; },
   value => { value.compressors[0].points[0].flowUnit = 'cfm'; },
   value => { value.compressors[0].maxPressureBar = 13; },
   value => { value.compressors[0].maxPressureRef.columnIndex = 2; },
   value => { value.compressors[0].powerKw = 3; },
   value => { value.compressors[0].weightKg = 115; },
   value => { value.compressors[0].oilType = 'oil-free'; },
   value => { value.compressors[0].frequencyHz = 50; },
   value => { value.compressors[0].tankLiters = 270; },
   value => { value.compressors[0].dutySourceId = 'elgi-eg-duty'; },
   value => { value.compressors.find(row => row.model === 'EN 2').dutySourceId = 'elgi-eg-duty'; },
   value => { value.sources[0].url = 'http://www.boge.com/no'; },
   value => { value.sources[0].url = 'https://user:password@www.boge.com/no'; },
   value => { value.sources[0].url = 'https://example.org/no'; },
   value => { value.sources[0].sha256 = 'bad'; },
   value => { value.sources[0].extractedPages[0].tables[0][2][2] = '9'; },
   value => { value.sources.find(source => source.id === 'elgi-eg-duty').extractedText += ' altered'; },
   value => { value.compressors.find(row => row.model === 'E 7 FDR').tankQuote = '500-litre tank'; },
   value => { value.compressors.find(row => row.model === 'EN 15' && row.dataset === 'elgi-en60').points[0].pressureOriginal = 125.1; },
   value => { value.compressors[1] = structuredClone(value.compressors[0]); },
  ];
  for (const mutate of mutations) { const changed = structuredClone(snapshot); mutate(changed); expect(() => buildDocumentedCompressorsOctober2B(changed)).toThrow(); }
 });
});
