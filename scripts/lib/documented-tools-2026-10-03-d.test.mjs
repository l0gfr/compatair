import { parseCatalogProductSource } from './catalog-tooling.mjs';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, it, expect } from 'vitest';
import { buildDocumentedToolsOctober3D, documentedIdentityKey } from './documented-tools-2026-10-03-d.mjs';
import { toolProfileSchema } from '../../src/domain/catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { calculateSizing } from '../../server/air-sizing.mjs';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-tools-2026-10-03-d.json', import.meta.url)));
const batch = buildDocumentedToolsOctober3D(snapshot);
const ample = { id: 'fixture-compressor', tankLiters: 500, maxPressureBar: 20, fadCurve: [{ pressureBar: 2, litersPerMinute: 50000 }, { pressureBar: 20, litersPerMinute: 40000 }], dutyCycle: 1, oilType: 'oil', confidence: 'B' };
const digest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const changeBoth = (copy, find, change) => {
 const row = copy.tools.find(find);
 if (!row) throw new Error('Missing reviewed mutation fixture');
 change(row);
 Object.assign(copy.technicalRows.find(item => item.documentRowId === row.documentRowId), structuredClone(row));
 const source = copy.sources.find(item => item.id === row.consumptionSourceId);
 const record = source?.measurementRecords.find(item => item.documentRowId === row.documentRowId);
 if (record) for (const field of Object.keys(record)) if (field !== 'documentRowId') record[field] = structuredClone(row[field]);
 return row;
};
const repinned = async copy => {
 let code = readFileSync(new URL('./documented-tools-2026-10-03-d.mjs', import.meta.url), 'utf8');
 const replacement = `const approvedSources = ${JSON.stringify(copy.sources.map(source => ({ id: source.id, sha256: digest(source) })))};\nconst approvedRows = ${JSON.stringify(copy.tools.map(row => ({ documentRowId: row.documentRowId, sha256: digest(row) })))};`;
 const pattern = /const approvedSources = \[[\s\S]*?\];\nconst approvedRows = \[[\s\S]*?\];/;
 if (!pattern.test(code)) throw new Error('Missing fixed approval contracts');
 code = code.replace(pattern, replacement);
 return (await import(/* @vite-ignore */ 'data:text/javascript;base64,' + Buffer.from(code).toString('base64'))).buildDocumentedToolsOctober3D;
};
const tamper = async (find, change) => {
 const copy = structuredClone(snapshot);
 changeBoth(copy, find, change);
 expect(() => buildDocumentedToolsOctober3D(copy)).toThrow();
 const semantic = await repinned(copy);
 expect(() => semantic(copy)).toThrow();
};
describe('documented tools, October 3, fourth batch', () => {
 it('contains exactly1000 reviewed configurations with unique identities and canonical modules', () => {
  expect(snapshot.toolCount).toBe(1000);
  expect(batch).toHaveLength(1000);
  expect(new Set(batch.map(product => product.id)).size).toBe(1000);
  expect(new Set(snapshot.tools.map(row => documentedIdentityKey(row.brand, row.mpn))).size).toBe(1000);
  for (const product of batch) {
   expect(toolProfileSchema.safeParse(product).success, product.id).toBe(true);
   const module = readFileSync(new URL(`../../src/data/products/tools/${product.slug}.ts`, import.meta.url), 'utf8');
   expect(toolProfileSchema.parse(parseCatalogProductSource('tools', module))).toEqual(toolProfileSchema.parse(product));
  }
 });
 it('preserves HTTPS source originals through SHA, size, edition, dates and localizations without private paths', () => {
  const text = JSON.stringify(snapshot);
  expect(text).not.toMatch(/\/Users\/|\/tmp\/|\/private\/tmp\/|responsePath|<html\b|%PDF-/i);
  for (const source of snapshot.sources) {
   expect(new URL(source.url).protocol).toBe('https:');
   expect(source.httpStatus).toBe(200);
   expect(source.sha256).toMatch(/^[a-f0-9]{64}$/);
   expect(source.bytes).toBeGreaterThan(0);
   expect(Number.isFinite(Date.parse(source.observedAt))).toBe(true);
   expect(source.edition.length).toBeGreaterThan(0);
  }
  for (const product of batch) {
   const ids = new Set(product.evidence.map(item => item.id));
   expect(product.evidence.every(item => item.sourceRole === 'primary')).toBe(true);
   for (const fact of product.specifications) expect(fact.evidenceIds.every(id => ids.has(id)), product.id + ':' + fact.label).toBe(true);
  }
 });
 it('uses97 documented operating flows without implicit averaging', () => {
  const tools = batch.filter(product => product.demandModel === 'fixed-flow');
  expect(tools).toHaveLength(97);
  for (const product of tools) {
   const result = evaluateCompatibility(ample, product);
   expect(result.verdict).not.toBe('insufficient_data');
   expect(result.requiredFadLpm).toBeCloseTo(product.airflowLpm.typical * 1.25, 6);
   expect(product.airflowBasis).toBeUndefined();
  }
 });
 it('keeps81 documented volumes per action insufficient without a declared cadence', () => {
  const tools = batch.filter(product => product.demandModel === 'per-action');
  expect(tools).toHaveLength(81);
  for (const product of tools) {
   expect(evaluateCompatibility(ample, product).verdict).toBe('insufficient_data');
   const sized = calculateSizing({ mode: 'successive', sessionMinutes: 30, safetyMargin: .25, demands: [{ id: product.id, model: 'per-action', litersPerAction: product.airPerActionLiters, actionsPerMinute: 40, quantity: 1, pressureBar: product.workingPressureBar.typical }], compressor: { maxPressureBar: 20, availableFadLpm: 50000, tankLiters: 500, dutyCycle: 1 } });
   expect(sized.averageFlowLpm).toBeCloseTo(product.airPerActionLiters * 40, 6);
   expect(sized.recommendedFadLpm).toBeCloseTo(product.airPerActionLiters * 40 * 1.25, 6);
  }
 });
 it('converts EVERWIN free-air reference cadence explicitly, preserving L/s instead of pretending it means L/cycle', () => {
  const rows = snapshot.tools.filter(row => row.freeAirAtCadenceRecord);
  expect(rows).toHaveLength(7);
  for (const row of rows) {
   const product = batch.find(item => item.brand === row.brand && item.mpn === row.mpn);
   expect(row.flowUnit).toBe('L/s');
   expect(row.freeAirAtCadenceRecord.actionsPerMinute).toBe(60);
   expect(row.pressureBar).toBe(6.3);
   expect(product.airPerActionLiters).toBe(row.flowOriginal * 60 / 60);
  }
 });
 it('keeps822 incomplete or contradictory demands outside compatibility calculations', () => {
  const tools = batch.filter(product => product.demandModel === 'variable-volume');
  expect(tools).toHaveLength(822);
  for (const product of tools) {
   expect(evaluateCompatibility(ample, product).verdict).toBe('insufficient_data');
   expect(product.airflowLpm).toBeUndefined();
   expect(product.airPerActionLiters).toBeUndefined();
  }
  expect(snapshot.tools.filter(row => row.flowQuote?.startsWith('Air consumption per sho\n'))).toHaveLength(3);
  expect(snapshot.tools.filter(row => row.brand === 'SATA' && row.sourceConsumptionContradiction)).toHaveLength(15);
 });
 it('publishes28 Asturomec source-defined configurations without asserting observed MPNs, units or packaging variants', () => {
  const rows = snapshot.tools.filter(row => row.manufacturerReferenceConstruction);
  expect(rows).toHaveLength(28);
  expect(new Set(rows.map(row => row.manufacturerReferenceConstruction.referencePattern))).toEqual(new Set(['273**', '270**', '296**', '295**']));
  for (const row of rows) {
   const product = batch.find(item => item.variant.distinguishingAttributes.sourceDefinedReference === row.mpn);
   expect(product.mpn).toBeUndefined();
   expect(product.fieldSources.mpn).toBeUndefined();
   expect(product.demandModel).toBe('variable-volume');
   expect(row.manufacturerReferenceConstruction.unit).toBe('not-stated-in-published-list');
   expect(row.manufacturerReferenceConstruction.examplePackagingQualification).toBe('blister-packaging-only');
   expect(row.mpn).not.toContain('/B');
   expect(product.specifications.some(fact => fact.value.includes(row.mpn) && fact.value.includes('SKU nu non observé'))).toBe(true);
   expect(product.evidence.some(evidence => evidence.sourceUrl.endsWith('#page=96'))).toBe(true);
  }
 });
 it('preserves Astro published flow and conflicting pressure without inventing a calculable demand', () => {
  const row = snapshot.tools.find(item => item.brand === 'Astro Pneumatic' && item.mpn === '4320');
  const scaler = batch.find(item => item.brand === 'Astro Pneumatic' && item.mpn === '4320');
  expect(row.flowOriginal).toBe(.12);
  expect(row.flowUnit).toBe('m3/min');
  expect(row.flowBasis).toBe('unqualified');
  expect(row.pressureBar).toBeNull();
  expect(scaler.demandModel).toBe('variable-volume');
  expect(scaler.airflowLpm).toBeUndefined();
  expect(scaler.editorial.limitations.join(' ')).not.toContain('normalisation sûre');
  const impact = batch.find(item => item.brand === 'Astro Pneumatic' && item.mpn === '1812');
  expect(impact.workingPressureBar).toEqual({});
  expect(impact.editorial.limitations.join(' ')).toContain('Pressure max. (bar) - 90 PSI (6.2 bar)');
  expect(impact.editorial.limitations.join(' ')).toContain('90–120 psi');
 });
 for (const [name, find, change] of [
  ['average replacing load', row => row.measurementQualification === 'loaded-flow-qualified', row => { row.flowBasis = 'average'; }],
  ['operating pressure replacing a measured point', row => row.measurementQualification === 'loaded-flow-qualified', row => { row.pressureScope = 'operating-only'; }],
  ['DEPRAG invented pressure', row => row.brand === 'DEPRAG' && row.measurementQualification === 'loaded-flow-qualified', row => { row.pressureBar = 6.4; row.pressureOriginal = 6.4; row.documentedConsumptionPoint.pressure = 6.4; row.pressureQuote = 'Specifications at90psi(6,4bar)'; }],
  ['DEPRAG value detached from its loaded cell', row => row.brand === 'DEPRAG' && row.measurementQualification === 'loaded-flow-qualified', row => { row.flowOriginal += .1; }],
  ['Atlas default pressure replacing its stated low-pressure point', row => row.brand === 'Atlas Copco', row => { row.pressureBar = 6.3; row.pressureOriginal = 6.3; row.documentedConsumptionPoint.pressure = 6.3; row.pressureQuote = 'Air pressure6.3bar'; }],
  ['SATA RP and HVLP consumption swapped', row => row.brand === 'SATA' && row.model.startsWith('SATAjet X 5500 RP'), row => { row.flowOriginal = 430; }],
  ['SATA full-trigger protocol removed', row => row.brand === 'SATA' && row.measurementQualification === 'loaded-flow-qualified', row => { row.measurementProtocolRecords = [{ sourceId: row.consumptionSourceId, page: row.consumptionPage, quote: 'Recommended pressure only' }]; }],
  ['cycle unit changed to per minute', row => row.brand === 'FASCO' && row.measurementQualification === 'per-action-cadence-required', row => { row.flowUnit = 'L/min'; }],
  ['FASCO nonstandard per-action volume', row => row.brand === 'FASCO' && row.measurementQualification === 'per-action-cadence-required', row => { row.standardVolumeUnit = 'compressed-litre'; }],
  ['FASCO pressure falsely changed', row => row.brand === 'FASCO' && row.measurementQualification === 'per-action-cadence-required', row => { row.pressureBar = 6.3; row.pressureOriginal = 6.3; row.documentedConsumptionPoint.pressure = 6.3; }],
  ['EVERWIN reference cadence changed', row => Boolean(row.freeAirAtCadenceRecord), row => { row.freeAirAtCadenceRecord.actionsPerMinute = 30; }],
  ['EVERWIN pressure falsely changed', row => Boolean(row.freeAirAtCadenceRecord), row => { row.pressureBar = 6.2; row.pressureOriginal = 6.2; row.documentedConsumptionPoint.pressure = 6.2; }],
  ['unknown service pressure promoted to measurement', row => row.brand === 'PneuTools', row => { row.pressureBar = 6.3; }],
  ['unlisted Asturomec diameter', row => row.manufacturerReferenceConstruction?.referencePattern === '273**', row => { row.manufacturerReferenceConstruction.diameterOriginal = 4; row.manufacturerReferenceConstruction.expectedMpn = '27340'; row.mpn = '27340'; row.rawLine += ' 4 27340'; }],
  ['unreviewed Asturomec pattern', row => row.manufacturerReferenceConstruction?.referencePattern === '273**', row => { row.manufacturerReferenceConstruction.referencePattern = '273*'; row.rawLine += ' 273*'; }],
  ['different reference-construction manufacturer', row => Boolean(row.manufacturerReferenceConstruction), row => { row.brand = 'Walcom'; }],
  ['different reference-construction source', row => Boolean(row.manufacturerReferenceConstruction), row => { row.sourceId = 'other-catalogue'; }],
  ['unobserved example', row => Boolean(row.manufacturerReferenceConstruction), row => { row.manufacturerReferenceConstruction.exampleMpn = '27317/B'; row.rawLine += ' 27317/B'; }],
  ['millimetre unit inferred', row => Boolean(row.manufacturerReferenceConstruction), row => { row.manufacturerReferenceConstruction.unit = 'mm'; }],
  ['blister counted as a new configuration', row => Boolean(row.manufacturerReferenceConstruction), row => { row.mpn += '/B'; row.manufacturerReferenceConstruction.expectedMpn = row.mpn; }],
  ['source-defined reference claimed observed', row => Boolean(row.manufacturerReferenceConstruction), row => { row.manufacturerReferenceConstruction.qualification = 'observed-sku'; }],
  ['construction warning removed', row => Boolean(row.manufacturerReferenceConstruction), row => { row.sourceLimitations = []; }],
 ]) it('rejects mirrored and repinned semantic tampering: ' + name, async () => tamper(find, change));
 it('rejects altered URLs, original hashes, dates and measurement records', () => {
  for (const change of [source => { source.url = 'https://example.com/generic'; }, source => { source.sha256 = 'f'.repeat(64); }, source => { source.observedAt = 'invalid'; }, source => { source.httpStatus = 403; }, source => { source.measurementRecords[0].pressureBar += .1; }]) {
   const copy = structuredClone(snapshot);
   change(copy.sources.find(source => source.measurementRecords.length));
   expect(() => buildDocumentedToolsOctober3D(copy)).toThrow();
  }
 });
});
