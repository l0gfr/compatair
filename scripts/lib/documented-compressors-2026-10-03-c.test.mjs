import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { describe, expect, it } from 'vitest';
import { buildDocumentedCompressorsOctober3C as build } from './documented-compressors-2026-10-03-c.mjs';
const localSnapshot = new URL('./documented-compressors-2026-10-03-c.json', import.meta.url);
const snapshot = JSON.parse(readFileSync(existsSync(localSnapshot) ? localSnapshot : new URL('../../src/data/imports/documented-compressors-2026-10-03-c.json', import.meta.url)));
const catalogRoot = existsSync(new URL('../../src/domain/catalog.ts', import.meta.url)) ? fileURLToPath(new URL('../../', import.meta.url)) : process.cwd();
const { compressorSchema } = await import(pathToFileURL(resolve(catalogRoot, 'src/domain/catalog.ts')).href);
const { evaluateCompatibility } = await import(pathToFileURL(resolve(catalogRoot, 'server/air-compatibility.mjs')).href);
const batch = build(snapshot);
const row = (value, dataset) => value.compressors.find(value => value.dataset === dataset);
const index = (model, tank, maximum) => snapshot.compressors.findIndex(value => value.model === model && (tank === undefined || value.tankLiters === tank) && (maximum === undefined || value.maxPressureBar === maximum));
const product = (model, tank, maximum) => batch[index(model, tank, maximum)];
const configurationKey = value => [value.brand, value.model, value.frequencyHz ?? 'unspecified', value.maxPressureBar, value.equipment, value.tankLiters].join('|');
const rehash = source => { source.extractedPagesSha256 = createHash('sha256').update(JSON.stringify(source.extractedPages)).digest('hex'); };

describe('documented compressor configurations, October 3 C', () => {
 it('keeps 200 actual configurations of 35 models across three manufacturers', () => {
  expect(batch).toHaveLength(200); expect(new Set(batch.map(value => value.id)).size).toBe(200);
  expect(new Set(batch.map(value => `${value.brand}|${value.model}`)).size).toBe(35);
  expect(Object.fromEntries(['Atlas Copco', 'Worthington Creyssensac', 'Rolair'].map(brand => [brand, batch.filter(value => value.brand === brand).length]))).toEqual({ 'Atlas Copco': 79, 'Worthington Creyssensac': 119, Rolair: 2 });
  for (const value of batch) expect(compressorSchema.safeParse(value).success).toBe(true);
 });
 it('separates maximum operating pressure from the FAD measurement pressure', () => {
  expect(product('GA 5', 0, 10).maxPressureBar).toBe(10);
  expect(product('GA 5', 0, 10).fadCurve).toEqual([{ pressureBar: 9.5, litersPerMinute: 756 }]);
  expect(product('RLR 300', 0, 8).fadCurve).toEqual([{ pressureBar: 7.5, litersPerMinute: 343.333 }]);
  expect(product('FC229MK103').maxPressureBar).toBe(10.342136);
  expect(product('FC229MK103').fadCurve).toEqual([{ pressureBar: 2.757903, litersPerMinute: 186.891 }, { pressureBar: 6.205282, litersPerMinute: 155.743 }]);
 });
 it('groups VSD points into real configurations instead of multiplying pressure tests', () => {
  expect(snapshot.compressors.filter(value => value.dataset === 'wco-small-vsd' && value.model === 'RLR 300 V')).toHaveLength(2);
  expect(product('RLR 300 V').fadCurve).toEqual([{ pressureBar: 7.5, litersPerMinute: 360 }, { pressureBar: 9.5, litersPerMinute: 293.333 }]);
  expect(snapshot.compressors.filter(value => value.dataset === 'wco-mid-vsd' && value.model === 'Rollair 16 V')).toHaveLength(2);
  expect(product('Rollair 16 V', 0, 10).fadCurve).toEqual([{ pressureBar: 5.5, litersPerMinute: 2300 }, { pressureBar: 7, litersPerMinute: 2250 }, { pressureBar: 8, litersPerMinute: 2000 }, { pressureBar: 9.5, litersPerMinute: 1783.333 }]);
  expect(product('Rollair 16 V', 0, 13).fadCurve.at(-1).pressureBar).toBe(12.5);
 });
 it('preserves published receiver packages and unknown electrical frequency', () => {
  expect(product('GA 5', 270).tankLiters).toBe(270); expect(product('GA 5', 500).tankLiters).toBe(500);
  expect(snapshot.compressors.filter(value => value.model === 'GA 30').every(value => value.tankLiters === 0)).toBe(true);
  expect(snapshot.compressors.filter(value => value.dataset === 'wco-small-vsd').every(value => [0, 200].includes(value.tankLiters))).toBe(true);
  expect(product('RLR 750', 270).variant.distinguishingAttributes.équipement).toBe('Full Feature sur réservoir 270 L');
  expect(product('RLR 300').variant.distinguishingAttributes.fréquence).toBeUndefined();
  expect(product('FCOL22LS6').tankLiters).toBe(20.8);
 });
 it('preserves whole-group duty scope and the explicit five-minute S3 window', () => {
  expect(batch.filter(value => value.dutyCycle === 1)).toHaveLength(120);
  expect(batch.filter(value => value.dutyCycle === 0.5)).toHaveLength(1);
  expect(batch.filter(value => value.dutyCycle === undefined)).toHaveLength(79);
  expect(product('G 15').dutyCycle).toBeUndefined(); expect(product('RLR 750').dutyCycle).toBeUndefined();
  expect(product('FC229MK103').dutyCycle).toBeUndefined();
  expect(product('FCOL22LS6').editorial.limitations.join(' ')).toContain('cinq minutes de marche suivies de cinq minutes d’arrêt');
  for (const value of batch.filter(value => value.brand === 'Worthington Creyssensac' && value.dutyCycle === 1)) {
   expect(value.fieldSources.dutyCycle).toEqual(['october3c-worthington-rollair300-850v-p2', 'october3c-worthington-rollair300-850v-p4']);
   expect(value.specifications.find(value => value.label === 'Cycle de service déclaré').value).not.toContain('GA');
  }
 });
 it('keeps data gaps closed in the actual deterministic compatibility engine', () => {
  const tool = { id: 'fixture-tool', demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 100, typical: 100, max: 100 }, confidence: 'B' };
  expect(evaluateCompatibility(product('GA 5'), tool).verdict).toBe('continuous');
  expect(evaluateCompatibility(product('RLR 300'), tool).verdict).toBe('continuous');
  expect(evaluateCompatibility(product('G 15'), tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('RLR 750'), tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('GA 5'), { ...tool, workingPressureBar: { min: 20, typical: 20, max: 20 } }).verdict).toBe('incompatible');
 });
 it('excludes the contradictory GA 18 measurement and exposes the Rolair translation conflict', () => {
  expect(snapshot.exclusions).toEqual([{ sourceId: 'atlas-ga15-30-2023', page: 2, tableIndex: 0, rowIndex: 12, reason: 'Unités FAD incompatibles à la précision imprimée', originalCells: ['49.5', 'l/s', '178.5', 'm3/h'] }]);
  expect(snapshot.compressors.some(value => value.model === 'GA 18' && value.maxPressureBar === 10)).toBe(false);
  expect(product('FCOL22LS6').maxPressureBar).toBe(12.065825);
  expect(product('FCOL22LS6').oilType).toBe('oil-free');
  expect(product('FCOL22LS6').editorial.limitations.join(' ')).toContain('page espagnole 54');
 });
 it('links every critical field and all history-compatible proof identifiers', () => {
  for (const value of batch) {
   const ids = new Set(value.evidence.map(proof => proof.id));
   for (const field of ['tankLiters', 'maxPressureBar', 'fadCurve', 'oilType', ...(value.dutyCycle !== undefined ? ['dutyCycle'] : [])]) expect(value.fieldSources[field].length).toBeGreaterThan(0);
   for (const list of Object.values(value.fieldSources)) for (const id of list) expect(ids.has(id)).toBe(true);
   for (const specification of value.specifications) for (const id of specification.evidenceIds) expect(ids.has(id)).toBe(true);
   for (const proof of value.evidence) {
    expect(proof.id).toMatch(/^[a-z0-9:-]+$/);
    expect(`added:${value.id}:${proof.id}:2026-10-03`).toMatch(/^[a-z0-9:-]+$/);
   }
  }
  expect(product('FC229MK103').fieldSources.fadCurve).toContain('october3c-rolair-fad-definition');
 });
 const mutations = [
  ['FAD value', value => { value.compressors[0].points[0].flowOriginal += 1; }],
  ['FAD as maximum', value => { value.compressors[0].points[0].pressureOriginal = value.compressors[0].maxPressureBar; }],
  ['intake unit', value => { value.compressors[0].points[0].flowUnit = 'intake-l/min'; }],
  ['absolute pressure', value => { value.compressors[0].points[0].pressureUnit = 'bar(a)'; }],
  ['FAD column', value => { value.compressors[0].points[0].flowRef.columnIndex += 1; }],
  ['comparison unit', value => { value.compressors[0].points[0].unitChecks[0].unit = 'l/min'; }],
  ['comparison value', value => { value.compressors[0].points[0].unitChecks[0].value += 1; }],
  ['maximum replaced by measurement', value => { const r = value.compressors[0]; r.maxPressureBar = r.maxPressureOriginal = r.points[0].pressureOriginal; r.configurationKey = configurationKey(r); }],
  ['maximum column', value => { value.compressors[0].maxPressureRef.columnIndex = 2; }],
  ['power', value => { value.compressors[0].powerKw += 1; }],
  ['unsourced weight', value => { value.compressors[0].weightKg = 100; }],
  ['unsourced voltage', value => { value.compressors[0].voltage = '400 V'; }],
  ['oil type', value => { value.compressors[0].oilType = 'oil-free'; }],
  ['50 to 60 Hz transposition', value => { const r = value.compressors[0]; r.frequencyHz = 60; r.configurationKey = configurationKey(r); }],
  ['unspecified to 50 Hz inference', value => { const r = row(value, 'wco-small-fixed'); r.frequencyHz = 50; r.configurationKey = configurationKey(r); }],
  ['receiver capacity', value => { const r = value.compressors[0]; r.tankLiters = 100; r.configurationKey = configurationKey(r); }],
  ['unpublished VSD 500 L package', value => { const r = row(value, 'wco-small-vsd'); r.tankLiters = 500; r.equipment = 'Groupe sur réservoir 500 L'; r.configurationKey = configurationKey(r); r.mountProof.quote = 'Tank-mounted 500 L.'; }],
  ['GA 30 receiver inference', value => { const r = value.compressors.find(r => r.model === 'GA 30'); r.tankLiters = 500; r.equipment = 'WorkPlace sur réservoir 500 L'; r.configurationKey = configurationKey(r); }],
  ['zero receiver without mount proof', value => { delete value.compressors[0].mountProof; }],
  ['equipment label clone', value => { const r = value.compressors[0]; r.equipment += ' Premium'; r.configurationKey = configurationKey(r); }],
  ['model anchor', value => { row(value, 'atlas-ga-medium').modelRef.rowIndex += 1; }],
  ['missing VSD point', value => { row(value, 'wco-small-vsd').points.pop(); }],
  ['duplicated VSD point', value => { const r = row(value, 'wco-small-vsd'); r.points.push(structuredClone(r.points[0])); }],
  ['VSD pressure header', value => { row(value, 'wco-mid-vsd').points[0].pressureOriginal = 6; }],
  ['VSD curve split', value => { const r = row(value, 'wco-small-vsd'); r.maxPressureOriginal = r.maxPressureBar = 8; r.configurationKey = configurationKey(r); }],
  ['generic element duty transferred to group', value => { row(value, 'atlas-g').dutyProof = structuredClone(value.compressors[0].dutyProof); }],
  ['WCO duty transferred to another family', value => { row(value, 'wco-belt').dutyProof = structuredClone(row(value, 'wco-small-fixed').dutyProof); }],
  ['raw duty bypass', value => { value.compressors[0].dutyCycle = 1; }],
  ['S3 duty ratio', value => { value.compressors.find(r => r.model === 'FCOL22LS6').dutyProof.value = 1; }],
  ['S3 duration', value => { value.compressors.find(r => r.model === 'FCOL22LS6').dutyProof.quote = 'S3 50%'; }],
  ['Spanish maximum transferred', value => { const r = value.compressors.find(r => r.model === 'FCOL22LS6'); r.maxPressureQuote = '200 PSI max.'; }],
  ['Rolair delivered units', value => { row(value, 'rolair-manual').points[0].flowUnit = 'cfm'; }],
  ['duplicate configuration', value => { value.compressors[1] = structuredClone(value.compressors[0]); }],
  ['non HTTPS source', value => { value.sources[0].url = 'http://www.atlascopco.com/a.pdf'; }],
  ['credential URL', value => { value.sources[0].url = 'https://user:password@www.atlascopco.com/a.pdf'; }],
  ['non-primary host', value => { value.sources[0].url = 'https://example.org/a.pdf'; }],
  ['capture status', value => { value.sources[0].status = 404; }],
  ['capture hash syntax', value => { value.sources[0].sha256 = 'bad'; }],
  ['capture zero bytes', value => { value.sources[0].bytes = 0; }],
  ['capture date', value => { value.sources[0].observedAt = '2026-10-02T00:00:00Z'; }],
  ['extraction tamper', value => { value.sources[0].extractedPages[0].text += ' altered'; }],
  ['normalized proof collision', value => { value.sources.push({ ...value.sources[0], id: value.sources[0].id.replaceAll('-', '_') }); }],
  ['empty proof ID', value => { value.sources.push({ ...value.sources[0], id: '___' }); }],
 ];
 it.each(mutations)('rejects %s', (_name, mutate) => {
  const value = structuredClone(snapshot); mutate(value); expect(() => build(value)).toThrow();
 });
 it('rejects contradictory unit cells even if extracted-page hashes are recalculated', () => {
  const value = structuredClone(snapshot), r = value.compressors[0];
  const source = value.sources.find(s => s.id === r.sourceId);
  const p = source.extractedPages.find(p => p.page === r.maxPressureRef.page);
  const ref = r.points[0].unitChecks[0].ref, cell = p.tables[ref.tableIndex][ref.rowIndex][ref.columnIndex];
  const lines = cell.split('\n'); lines[ref.lineInCell] = '60'; p.tables[ref.tableIndex][ref.rowIndex][ref.columnIndex] = lines.join('\n'); r.points[0].unitChecks[0].value = 60;
  rehash(source); expect(() => build(value)).toThrow(/Unités FAD contradictoires/);
 });
 it('rejects removed maximum and delivered-air definitions after rehashing', () => {
  const value = structuredClone(snapshot), source = value.sources[0];
  const pg = source.extractedPages.find(p => p.page === 6); pg.tables[0][0][1] = 'Operating pressure'; rehash(source);
  expect(() => build(value)).toThrow(/maximum ou FAD/);
  const missing = structuredClone(snapshot), definition = missing.sources.find(s => s.id === 'rolair-fad-definition');
  definition.extractedText = 'Intake flow only'; definition.extractedTextSha256 = createHash('sha256').update(definition.extractedText).digest('hex');
  expect(() => build(missing)).toThrow(/débit livré Rolair/);
 });
 it('rejects linking the 500 L GA receiver to a brochure with different performance', () => {
  const value = structuredClone(snapshot), source = value.sources.find(s => s.id === 'atlas-ga11-37');
  source.extractedPages.find(p => p.page === 11).tables[0][4][6] = '47.9'; rehash(source);
  expect(() => build(value)).toThrow(/500 L rattaché à une autre fiche/);
 });
});
