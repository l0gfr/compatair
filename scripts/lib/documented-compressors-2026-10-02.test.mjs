import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { buildDocumentedCompressorsOctober2 } from './documented-compressors-2026-10-02.mjs';
import { compressorSchema } from '../../src/domain/catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-compressors-2026-10-02.json', import.meta.url)));
const batch = buildDocumentedCompressorsOctober2(snapshot);
const model = (name, pressure) => batch.find(product => product.model === name && product.maxPressureBar === pressure);
const record = slug => {
 const source = readFileSync(new URL(`../../src/data/products/compressors/${slug}.ts`, import.meta.url), 'utf8');
 const prefix = 'const product = ', suffix = ';\n\nexport default product;\n';
 if (!source.startsWith(prefix) || !source.endsWith(suffix)) throw new Error('Format du produit altéré');
 return JSON.parse(source.slice(prefix.length, -suffix.length));
};

describe('reviewed compressor configurations, October 2', () => {
 it('keeps genuine article references and pressure/equipment configurations reproducible', () => {
  expect(batch).toHaveLength(400);
  expect(new Set(batch.map(product => product.id)).size).toBe(400);
  expect(new Set(batch.filter(product => product.brand === 'BroomWade').map(product => product.mpn)).size).toBe(203);
  for (const product of batch) expect(compressorSchema.parse(record(product.slug))).toEqual(compressorSchema.parse(product));
 });
 it('distinguishes reference pressure, maximum pressure and variable-speed ranges', () => {
  expect(model('ASD 35', 8.5).fadCurve).toEqual([{ pressureBar: 7.5, litersPerMinute: 3160 }]);
  expect(model('ASD 40', 8.5).fadCurve).toEqual([{ pressureBar: 7.5, litersPerMinute: 3920 }]);
  const sfc = model('BSD 75 SFC', 10);
  expect(sfc.fadCurve).toEqual([{ pressureBar: 7.5, litersPerMinute: 7440 }, { pressureBar: 10, litersPerMinute: 6510 }]);
  expect(sfc.specifications.find(field => field.label.includes('7,5 bar')).value).toBe('1,54 à 7,44 m³/min');
  expect(batch.filter(product => product.model === 'BSD 75 SFC')).toHaveLength(2);
 });
 it('retains actual tanks, package masses and the FM22+ upper pressure limit', () => {
  const base = batch.find(product => product.mpn === 'CC1184130');
  const packaged = batch.find(product => product.mpn === 'RSCCP0725V4');
  expect(base).toMatchObject({ tankLiters: 0, weightKg: 205, fadCurve: [{ pressureBar: 7, litersPerMinute: 1140 }] });
  expect(packaged).toMatchObject({ tankLiters: 270, weightKg: 340, maxPressureBar: 7 });
  expect(batch.find(product => product.mpn === 'CC1249507')).toMatchObject({ tankLiters: 0, maxPressureBar: 10, fadCurve: [{ pressureBar: 10, litersPerMinute: 3400 }] });
  expect(batch.find(product => product.mpn === 'RSCCP2236V4')).toMatchObject({ tankLiters: 500, weightKg: 605, fadCurve: [{ pressureBar: 10, litersPerMinute: 3360 }] });
 });
 it('does not borrow a duty declaration or silently repair suspect printed flows', () => {
  expect(model('CSDX 145', 6).dutyCycle).toBeUndefined();
  expect(model('CSDX 145 SFC', 8.5).dutyCycle).toBe(1);
  expect(model('DSDX 305', 12)).toBeUndefined();
  expect(model('DSDX 305', 15)).toBeUndefined();
  expect(batch.filter(product => product.model.includes('DPP')).map(product => product.fadCurve)).toEqual([[], []]);
  const tool = { id: 'fixture-tool', demandModel: 'fixed-flow', workingPressureBar: { min: 6, typical: 6, max: 6 }, airflowLpm: { min: 100, typical: 100, max: 100 }, confidence: 'B' };
  expect(evaluateCompatibility(model('CSDX 145', 6), tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(model('FM02 DPP', 10), tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(model('CSD 90', 6), { ...tool, workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 } }).verdict).toBe('incompatible');
 });
 it('rejects altered pressure/flow columns, unsupported duty scope and unsafe provenance', () => {
  for (const mutate of [s => { s.compressors[0].points[0].flowOriginal = 4; }, s => { s.compressors[0].maxPressureBar = 12; }, s => { s.compressors.find(row => row.mpn === 'CC1184130').columnIndex = 3; }, s => { s.compressors.find(row => row.mpn === 'CC1249507').maxPressureBar = 8; }, s => { s.compressors.find(row => row.model === 'CSDX 145').dutySourceId = 'kaeser-duty-asd'; }, s => { s.sources[0].url = 'http://example.org'; }, s => { s.sources.find(source => source.id === 'broomwade-duty-web').extractedText += ' altered'; }]) {
   const changed = structuredClone(snapshot); mutate(changed); expect(() => buildDocumentedCompressorsOctober2(changed)).toThrow();
  }
 });
});
