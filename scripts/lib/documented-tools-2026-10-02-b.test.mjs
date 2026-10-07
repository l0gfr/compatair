import { parseCatalogProductSource } from './catalog-tooling.mjs';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { buildDocumentedToolsOctober2B } from './documented-tools-2026-10-02-b.mjs';
import { toolProfileSchema } from '../../src/domain/catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { calculateSizing } from '../../server/air-sizing.mjs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-tools-2026-10-02-b.json', import.meta.url)));
const batch = buildDocumentedToolsOctober2B(snapshot);
const byMpn = (brand, mpn) => batch.find(product => product.brand === brand && product.mpn === mpn);
const ample = { id: 'fixture-compressor', tankLiters: 500, maxPressureBar: 20, fadCurve: [{ pressureBar: 6, litersPerMinute: 50000 }, { pressureBar: 20, litersPerMinute: 40000 }], dutyCycle: 1, oilType: 'oil', confidence: 'B' };
const changeBoth = (copy, brand, mpn, change) => {
 const row = copy.tools.find(item => item.brand === brand && item.mpn === mpn);
 change(row);
 change(copy.technicalRows.find(item => item.documentRowId === row.documentRowId));
};

describe('documented tools, October 2, second batch', () => {
 it('contains exactly 2000 unique canonical identities and faithfully reproduces saved profiles', () => {
  expect(snapshot.toolCount).toBe(2000);
  expect(batch).toHaveLength(2000);
  expect(new Set(batch.map(product => product.id)).size).toBe(2000);
  const normalize = value => value.toUpperCase().replace(/[^A-Z0-9]/g, '');
  expect(new Set(batch.map(product => `${normalize(product.brand)}:${normalize(product.mpn)}`)).size).toBe(2000);
  for (const product of batch) {
   const text = readFileSync(new URL(`../../src/data/products/tools/${product.slug}.ts`, import.meta.url), 'utf8');
   expect(toolProfileSchema.parse(parseCatalogProductSource('tools', text))).toEqual(toolProfileSchema.parse(product));
  }
 });
 it('attaches a dated, hashed primary source to every technical field', () => {
  expect(snapshot.sources.length).toBe(435);
  for (const source of snapshot.sources) {
   expect(source.sha256).toMatch(/^[a-f0-9]{64}$/);
   expect(source.bytes).toBeGreaterThan(0);
   expect(new URL(source.url).protocol).toBe('https:');
   expect(Number.isFinite(Date.parse(source.observedAt))).toBe(true);
  }
  for (const product of batch) {
   const evidence = new Set(product.evidence.map(item => item.id));
   expect(product.evidence.every(item => item.sourceRole === 'primary')).toBe(true);
   for (const field of product.specifications) expect(field.evidenceIds.every(id => evidence.has(id))).toBe(true);
   expect(product.fieldSources.mpn.length).toBeGreaterThan(0);
  }
 });
 it('keeps all unknown, mean and unqualified regimes inconclusive with an ample compressor', () => {
  expect(batch.filter(tool => tool.demandModel === 'per-action')).toHaveLength(2);
  expect(batch.filter(tool => tool.demandModel === 'fixed-flow')).toHaveLength(4);
  for (const product of batch) {
   expect(evaluateCompatibility(ample, product).verdict).toBe('insufficient_data');
   expect(evaluateCompatibility(ample, product).requiredFadLpm).toBeUndefined();
  }
 });
 it('preserves the two NR90 source volume points and requires an explicit cadence', () => {
  for (const mpn of ['NR90AD(S1)', 'NR90AE(S1)']) {
   const product = byMpn('Metabo HPT', mpn);
   expect(product).toMatchObject({ demandModel: 'per-action', airPerActionLiters: 2.5, workingPressureBar: { typical: 6.9 } });
   expect(evaluateCompatibility(ample, product).verdict).toBe('insufficient_data');
   const sized = calculateSizing({ mode: 'successive', sessionMinutes: 30, safetyMargin: .25, demands: [{ id: product.id, model: 'per-action', litersPerAction: product.airPerActionLiters, actionsPerMinute: 40, quantity: 1, pressureBar: 6.9 }], compressor: { maxPressureBar: 20, availableFadLpm: 50000, tankLiters: 500, dutyCycle: 1 } });
   expect(sized.averageFlowLpm).toBe(100);
   expect(sized.recommendedFadLpm).toBe(125);
  }
 });
 it('preserves four explicit 8-bar blow-gun points without inventing a loaded regime', () => {
  const products = batch.filter(product => product.demandModel === 'fixed-flow');
  for (const product of products) {
   expect(product.brand).toBe('Sealey');
   expect(product.airflowBasis).toBe('unqualified');
   expect(product.workingPressureBar.typical).toBe(8);
   expect(product.specifications.some(field => field.label.includes('Flow at 8bar'))).toBe(true);
  }
 });
 it('keeps a Rodcraft supply ceiling as max only and does not import a post driver as a chisel hammer', () => {
  for (const product of batch.filter(item => item.brand === 'Rodcraft')) {
   expect(product).toMatchObject({ demandModel: 'variable-volume', workingPressureBar: { max: 6.3 } });
   expect(product.workingPressureBar.min).toBeUndefined();
   expect(product.workingPressureBar.typical).toBeUndefined();
  }
  expect(byMpn('Michigan Pneumatic', 'MP-PD55')).toBeUndefined();
  expect(snapshot.exclusions.some(row => row.mpn === 'MP-PD55' && row.reason.includes('Post driver'))).toBe(true);
 });
 it('retains contradictory Draper units and never borrows the adjacent model pressure', () => {
  const product = byMpn('Draper', '09709');
  expect(product.categoryId).toBe('pistolet-peinture-hvlp');
  expect(product.workingPressureBar).toEqual({});
  expect(product.editorial.limitations.join(' ')).toContain('incohérente');
  expect(product.specifications.some(field => field.value === '43psi (2 Bar)')).toBe(true);
  expect(evaluateCompatibility(ample, product).verdict).toBe('insufficient_data');
 });
 it('removes rotated Omer text from identities and cites the exact Henry identity page', () => {
  for (const product of batch.filter(item => item.brand === 'Omer')) expect(product.model).not.toMatch(/^(INIM |0\d\d |TRC )/);
  expect(byMpn('Omer', 'SJK.16')).toBeDefined();
  expect(byMpn('Omer', 'PL 110 SJ')).toBeDefined();
  for (const mpn of ['40-GLS+6"', '405HGES']) expect(byMpn('Henrytools', mpn).evidence.some(item => item.sourceUrl.endsWith('#page=2'))).toBe(true);
  expect(byMpn('Master Power', 'MP6151').categoryId).toBe('ponceuse-pneumatique');
  for (const mpn of ['MP-RD16LT-78314', 'MP-RD16LT-78414']) expect(byMpn('Michigan Pneumatic', mpn).categoryId).toBe('perceuse');
 });
 it('retains FAR normal litres and Omer pressure ranges outside the compatibility calculation', () => {
  const far = byMpn('FAR', 'RAC 2200');
  expect(far.demandModel).toBe('variable-volume');
  expect(far.specifications.some(field => field.value === '8.4 Nl/cycle')).toBe(true);
  expect(far.airPerActionLiters).toBeUndefined();
  expect(batch.filter(item => item.brand === 'Omer').every(item => item.demandModel === 'variable-volume')).toBe(true);
 });
 it('requires an approved source measurement record even if the documentary mirror is also edited', () => {
  const row = snapshot.tools.find(item => item.brand === 'Rodcraft');
  for (const change of [
   item => { item.pressureScope = 'measurement'; item.pressureBar = 6.3; },
   item => { delete item.operatingPressureBasis; },
   item => { item.operatingPressureBasis = 'nominal'; },
   item => { item.operatingPressureBasis = 'unrecognized'; },
   item => { item.operatingPressureRange = { min: 5, max: 6.3 }; },
   item => { item.knownOperatingPressureBar = 7; },
  ]) {
   const copy = structuredClone(snapshot); changeBoth(copy, row.brand, row.mpn, change);
   expect(() => buildDocumentedToolsOctober2B(copy)).toThrow();
  }
 });

 it('keeps complete Hazet cells and excludes packaged assortments', () => {
  expect(byMpn('HAZET', '9012M-1/4')).toBeUndefined();
  expect(byMpn('HAZET', '9012ECO/4')).toBeUndefined();
  const long = byMpn('HAZET', '9040LG-3/2');
  expect(long.specifications.find(field => field.label === 'Champ fabricant : Hose diameter (recommended)').value).toBe('10 mm');
  expect(long.specifications.find(field => field.label === 'Champ fabricant : Dimension').value).toBe('1085 mm');
  expect(long.specifications.find(field => field.label === 'Champ fabricant : Air connection inlet').value).toBe('Inside thread 12.91 mm (1/4″)');
 });
 it('retains the visually checked Du-Pas pressure scopes and speed correction', () => {
  expect(byMpn('Du-Pas', 'TDIS-200').specifications[0].label).toBe('Plage de couple publiée à 6–7 kg/cm²');
  expect(byMpn('Du-Pas', 'TDIS-200').specifications[1].label).toBe('Vitesses libres publiées à 6 puis 7 kg/cm²');
  expect(byMpn('Du-Pas', 'TDI-30D').specifications[1].value).toBe('4300 / 4600 rpm');
 });
 it('rejects a forged source measurement record together with its row and mirrored record', () => {
  const shifted = structuredClone(snapshot);
  changeBoth(shifted, 'Metabo HPT', 'NR90AD(S1)', row => { row.pressureOriginal = 7; row.pressureBar = 7; row.pressureQuote = 'Consumption at 7 bar'; });
  const shiftedSource = shifted.sources.find(source => source.id === 'oct2b-metabohpt-nr90-manual-pdf');
  Object.assign(shiftedSource.measurementRecords.find(row => row.mpn === 'NR90AD(S1)'), { pressureOriginal: 7, pressureBar: 7, pressureQuote: 'Consumption at 7 bar' });
  expect(() => buildDocumentedToolsOctober2B(shifted)).toThrow('document primaire');
  const ceiling = structuredClone(snapshot), rodcraft = ceiling.tools.find(row => row.brand === 'Rodcraft');
  changeBoth(ceiling, rodcraft.brand, rodcraft.mpn, row => { row.pressureScope = 'measurement'; row.pressureBar = 6.3; delete row.operatingPressureBasis; row.pressureQuote = 'Tool tested at 6.3 bar'; });
  const ceilingSource = ceiling.sources.find(source => source.id === rodcraft.sourceId);
  ceilingSource.allowedPressureScopes.push('measurement');
  ceilingSource.measurementRecords = [{ ...ceiling.tools.find(row => row.mpn === rodcraft.mpn) }];
  expect(() => buildDocumentedToolsOctober2B(ceiling)).toThrow('Convention Rodcraft');
  const loaded = structuredClone(snapshot);
  changeBoth(loaded, 'Sealey', 'SA9231', row => { row.flowBasis = 'maximum'; row.flowQuote = 'Maximum Flow at 8bar'; });
  const loadedSource = loaded.sources.find(source => source.id === 'oct2b-sealey-sa9231-html');
  loadedSource.allowedFlowBases.push('maximum');
  Object.assign(loadedSource.measurementRecords[0], { flowBasis: 'maximum', flowQuote: 'Maximum Flow at 8bar' });
  expect(() => buildDocumentedToolsOctober2B(loaded)).toThrow('document primaire');
 });
 it('rejects mismatched conversions, regimes, units, identities, rows and source URLs', () => {
  for (const mutate of [
   copy => { copy.toolCount = 1999; },
   copy => { copy.sources[0].url = 'https://name:password@example.org/source'; },
   copy => { copy.sources[0].resolvedUrl = 'http://example.org/source'; },
   copy => { copy.sources[0].sha256 = 'wrong'; },
   copy => { copy.sources[0].bytes = 0; },
   copy => { copy.tools[0].mpn = 'FICTITIOUS-MODEL'; },
   copy => { copy.tools[0].details[0].value = 'fabricated'; },
   copy => { copy.tools[0].documentRowId = 'absent'; },
   copy => { changeBoth(copy, 'Metabo HPT', 'NR90AD(S1)', row => { row.flowUnit = 'cfm'; }); },
   copy => { changeBoth(copy, 'Metabo HPT', 'NR90AD(S1)', row => { row.pressureBar = 7; }); },
   copy => { changeBoth(copy, 'Metabo HPT', 'NR90AD(S1)', row => { row.flowBasis = 'load'; }); },
  ]) { const copy = structuredClone(snapshot); mutate(copy); expect(() => buildDocumentedToolsOctober2B(copy)).toThrow(); }
 });
});
