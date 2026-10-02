import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { buildDocumentedToolsOctober2 } from './documented-tools-2026-10-02.mjs';
import { toolProfileSchema } from '../../src/domain/catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-tools-2026-10-02.json', import.meta.url)));
const batch = buildDocumentedToolsOctober2(snapshot);
const byMpn = (brand, mpn) => batch.find(product => product.brand === brand && product.mpn === mpn);
const ample = { id: 'fixture-compressor', tankLiters: 500, maxPressureBar: 20, fadCurve: [{ pressureBar: 6, litersPerMinute: 50000 }, { pressureBar: 20, litersPerMinute: 40000 }], dutyCycle: 1, oilType: 'oil', confidence: 'B' };

describe('documented tool references, October 2', () => {
 it('retains contradictory manufacturer mass pairs without choosing an unsupported value', () => {
  for (const mpn of ['UT8630LI', 'UT9935', 'UT8617', 'UT8893-26', 'UT8893-5', 'UT8893-60']) {
   const product = byMpn('Universal Tool', mpn);
   expect(product.specifications.some(field => field.label === 'Masse publiée')).toBe(false);
   expect(product.specifications.some(field => field.label === 'Masse contradictoire publiée')).toBe(true);
   expect(product.editorial.limitations.join(' ')).toContain('incompatibles');
  }
 });
 it('keeps pressure ranges without an invented nominal point and flags contradictory paired units', () => {
  expect(byMpn('Hymair', 'ASH-01')).toMatchObject({ demandModel: 'variable-volume', workingPressureBar: { min: 2, max: 3 } });
  expect(byMpn('Hymair', 'ASH-01').workingPressureBar.typical).toBeUndefined();
  const conflicting = byMpn('Hymair', 'ASH-300');
  expect(conflicting.demandModel).toBe('variable-volume');
  expect(conflicting.editorial.limitations.join(' ')).toContain('incompatibles');
  expect(evaluateCompatibility(ample, conflicting).verdict).toBe('insufficient_data');
  expect(byMpn('Meite', 'T64A').specifications.find(field => field.label.toLowerCase().includes('longueur')).value).toBe('298 mm');
  expect(byMpn('Meite', 'MT-G38')).toBeUndefined();
  expect(byMpn('Hymair', 'N851').specifications.find(field => field.label === 'Longueur publiée').value).toBe('350 mm');
  expect(byMpn('Hymair', 'J1022').specifications.find(field => field.label === 'Longueur publiée').value).toBe('240 mm');
  expect(byMpn('Hymair', 'CN45A')).toMatchObject({ airflowBasis: 'average', airflowLpm: { typical: 141.584 } });
 });
 it('keeps model-specific Paoli pressure exceptions and excludes coffret identities', () => {
  expect(byMpn('Paoli', 'RDEVSL.00003')).toMatchObject({ workingPressureBar: { typical: 7 }, demandModel: 'variable-volume' });
  expect(byMpn('Paoli', 'A.07.01.0001')).toMatchObject({ workingPressureBar: { typical: 6.5 }, demandModel: 'variable-volume' });
  expect(byMpn('Rongpeng', 'RP17808')).toBeUndefined();
  expect(byMpn('Rongpeng', 'RP7335S').categoryId).toBe('ponceuse-pneumatique');
  expect(byMpn('Kinshun', 'UTR-30').specifications.some(field => field.label.includes('Vitesse'))).toBe(false);
  expect(byMpn('Paoli', '1800PL.00001').specifications.find(field => field.label === 'Masse contradictoire publiée').value).toBe('14.33 lb / 1,65 kg');
 });
 it('separates air from fluid flow and requires the spraying point for an actionable gun demand', () => {
  expect(byMpn('Anest Iwata', '13609040')).toMatchObject({ airflowLpm: { typical: 40 }, workingPressureBar: { typical: .5 }, airflowBasis: 'unqualified' });
  const glaze = byMpn('Anest Iwata', 'ZP2-H20');
  expect(glaze).toMatchObject({ categoryId: 'pistolet-peinture', airflowLpm: { typical: 760 }, workingPressureBar: { typical: 3.5 } });
  const supplied = { ...ample, fadCurve: [{ pressureBar: 3.5, litersPerMinute: 2000 }, { pressureBar: 20, litersPerMinute: 1000 }] };
  expect(evaluateCompatibility(supplied, glaze).verdict).not.toBe('insufficient_data');
  expect(evaluateCompatibility(ample, byMpn('Anest Iwata', '130452A0')).verdict).toBe('insufficient_data');
  expect(byMpn('Anest Iwata', '13650510')).toBeUndefined();
  for (const mutate of [row => { row.categoryId = 'meuleuse'; }, row => { row.flowQuote = 'Consommation sans régime'; }]) {
   const copy = structuredClone(snapshot);
   mutate(copy.tools.find(row => row.mpn === 'ZP2-H20'));
   mutate(copy.pdfRows.find(row => row.mpn === 'ZP2-H20'));
   expect(() => buildDocumentedToolsOctober2(copy)).toThrow('Débit en charge non documenté');
  }
 });
 it('reproduces exact-reference profiles and their source provenance', () => {
  expect(batch).toHaveLength(snapshot.toolCount);
  expect(new Set(batch.map(product => product.id)).size).toBe(batch.length);
  for (const product of batch) {
   const text = readFileSync(new URL(`../../src/data/products/tools/${product.slug}.ts`, import.meta.url), 'utf8');
   const prefix = 'const product = ', suffix = ';\n\nexport default product;\n';
   expect(text.startsWith(prefix) && text.endsWith(suffix)).toBe(true);
   expect(toolProfileSchema.parse(JSON.parse(text.slice(prefix.length, -suffix.length)))).toEqual(toolProfileSchema.parse(product));
  }
 });
 it('does not attach a power/speed pressure note to a loaded-consumption measurement', () => {
  const long = byMpn('Mannesmann DEMAG', '60018-44-5');
  expect(long).toMatchObject({ model: 'GL 16000 H', demandModel: 'variable-volume', workingPressureBar: { typical: 6 } });
  expect(long.specifications.find(field => field.label === 'Consommation en charge, hors calcul').value).toBe('20 L/s');
  expect(evaluateCompatibility(ample, long).verdict).toBe('insufficient_data');
 });
 it('retains an idle consumption and the original decimal precision without filling the pressure gap', () => {
  const turbine = byMpn('Suhner', '100035613');
  expect(turbine).toMatchObject({ model: 'LSB 90-TOP', demandModel: 'variable-volume', workingPressureBar: {} });
  expect(turbine.specifications.find(field => field.label === 'Consommation à vide, hors calcul').value).toBe('0.290 m3/min');
  expect(evaluateCompatibility(ample, turbine).verdict).toBe('insufficient_data');
 });
 it('keeps PUMA pressure units and excludes kits and inconsistent paired units', () => {
  expect(byMpn('PUMA', 'AT-5080')).toMatchObject({ workingPressureBar: { typical: 6.205 }, demandModel: 'variable-volume' });
  expect(byMpn('PUMA', 'AT-5348').specifications.find(field => field.label === 'Consommation de régime non précisé, hors calcul').value).toBe('368 L/min');
  expect(byMpn('PUMA', 'AT-5000')).toBeUndefined();
  expect(snapshot.exclusions.some(row => row.reason.startsWith('Conversions scfm/L/min incompatibles'))).toBe(true);
  for (const product of batch.filter(product => product.demandModel === 'variable-volume')) expect(evaluateCompatibility(ample, product).verdict).toBe('insufficient_data');
 });
 it('keeps adjacent Hymair tool functions and excludes grouped variant measurements', () => {
  expect(byMpn('Hymair', 'NST-7037BC')).toMatchObject({ categoryId: 'ponceuse-orbitale', workingPressureBar: { typical: 6.2 }, demandModel: 'variable-volume' });
  expect(byMpn('Hymair', 'NST-7037FC')).toMatchObject({ categoryId: 'meuleuse' });
  expect(byMpn('Hymair', 'AT-7018')).toMatchObject({ categoryId: 'ponceuse-vibrante' });
  expect(byMpn('Hymair', 'AT-480B')).toBeUndefined();
  const copy = structuredClone(snapshot);
  copy.tools.find(row => row.mpn === 'NST-7037BC').categoryId = 'meuleuse';
  expect(() => buildDocumentedToolsOctober2(copy)).toThrow();
 });
 it('keeps Yokota YLT standard and low-pressure load points separate', () => {
  expect(byMpn('Yokota', 'YLT60')).toMatchObject({ demandModel: 'fixed-flow', workingPressureBar: { typical: 6 }, airflowLpm: { typical: 330 } });
  expect(byMpn('Yokota', 'YLT60L')).toMatchObject({ demandModel: 'fixed-flow', workingPressureBar: { typical: 5 }, airflowLpm: { typical: 280 } });
  expect(evaluateCompatibility(ample, byMpn('Yokota', 'YLT60')).verdict).not.toBe('insufficient_data');
  const copy = structuredClone(snapshot), row = copy.tools.find(row => row.mpn === 'YLT60L');
  row.pressureOriginal = .6; row.pressureBar = 6;
  expect(() => buildDocumentedToolsOctober2(copy)).toThrow();
 });
 it('requires a cadence for MAX nailers and preserves both documents establishing a per-cycle pressure', () => {
  const nailer = byMpn('MAX', 'NF255SF2/18');
  expect(nailer).toMatchObject({ demandModel: 'per-action', airPerActionLiters: 0.566, workingPressureBar: { typical: 6.895 } });
  expect(nailer.fieldSources.airPerActionLiters).toHaveLength(2);
  expect(nailer.evidence[1].sourceUrl).toContain('NF255SF2-18_SellSheet-1.pdf#page=2');
  expect(evaluateCompatibility(ample, nailer).verdict).toBe('insufficient_data');
  expect(byMpn('MAX', 'SN438J').demandModel).toBe('variable-volume');
  const copy = structuredClone(snapshot);
  copy.tools.find(row => row.mpn === 'NF255SF2/18').secondarySources[0].page = 1;
  expect(() => buildDocumentedToolsOctober2(copy)).toThrow();
 });
 it('uses the explicit Atlas consumption conventions while retaining model-specific pressure exceptions', () => {
  expect(byMpn('Atlas Copco', '8425010525')).toMatchObject({ airflowLpm: { typical: 228 }, workingPressureBar: { typical: 6.3 } });
  const turbine = byMpn('Atlas Copco', '8423252506');
  expect(turbine).toMatchObject({ demandModel: 'fixed-flow', airflowLpm: { typical: 1919.882 }, workingPressureBar: { typical: 6.3 } });
  expect(turbine.fieldSources.airflowLpm).toHaveLength(2);
  expect(turbine.evidence[1].sourceUrl).toContain('#page=4');
  expect(byMpn('Atlas Copco', '8431027877')).toMatchObject({ demandModel: 'variable-volume', workingPressureBar: { typical: 6 } });
  expect(evaluateCompatibility(ample, byMpn('Atlas Copco', '8431027877')).verdict).toBe('insufficient_data');
  expect(byMpn('Atlas Copco', '8423070106')).toBeUndefined();
  const copy = structuredClone(snapshot);
  copy.tools.find(row => row.mpn === '8431027877').pressureScope = 'measurement';
  copy.tools.find(row => row.mpn === '8431027877').pressureBar = 6.3;
  expect(() => buildDocumentedToolsOctober2(copy)).toThrow();
 });
 it('keeps Jonnesway short and long impact wrenches physically distinct', () => {
  const short = byMpn('Jonnesway', 'JAI-0405'), long = byMpn('Jonnesway', 'JAI-0405L');
  expect(short.demandModel).toBe('variable-volume');
  expect(long.demandModel).toBe('variable-volume');
  expect(short.specifications).not.toEqual(long.specifications);
  expect(evaluateCompatibility(ample, short).verdict).toBe('insufficient_data');
 });
 it('does not certify Rodcraft average consumption or infer a nailer cycle from suspicious L/min units', () => {
  const ratchet = byMpn('Rodcraft', '8951078004');
  expect(ratchet).toBeDefined();
  expect(ratchet.airflowBasis).toBe('average');
  expect(evaluateCompatibility(ample, ratchet).verdict).toBe('insufficient_data');
  expect(byMpn('Rodcraft', '8951000165').categoryId).toBe('meuleuse');
  expect(snapshot.exclusions.some(row => row.model === 'RC6710' && row.reason.includes('cycle'))).toBe(true);
 });
 it('preserves Sumake table functions and recommended pressure without inventing a measured flow point', () => {
  expect(byMpn('Sumake', 'ST-IW0980-6')).toMatchObject({ demandModel: 'variable-volume', workingPressureBar: { typical: 6.2 } });
  expect(byMpn('Sumake', 'ST-BW710').categoryId).toBe('scie');
  expect(byMpn('Sumake', 'ST-CT160').categoryId).toBe('tronconneuse');
  expect(byMpn('Sumake', 'ADDN39').categoryId).toBe('perceuse');
  expect(byMpn('Sumake', 'HAWFE5400').specifications.find(field => field.label === 'Longueur hors tout').value).toBe('501 mm');
  expect(byMpn('Sumake', 'CG25M-3')).toMatchObject({ demandModel: 'variable-volume', workingPressureBar: { typical: 6.205 } });
  expect(evaluateCompatibility(ample, byMpn('Sumake', 'FPB030')).verdict).toBe('insufficient_data');
  for (const change of [row => { row.pressureScope = 'measurement'; row.pressureBar = 6.2; }, row => { row.flowUnit = 'L/cycle'; }]) {
   const copy = structuredClone(snapshot); change(copy.tools.find(row => row.mpn === 'ST-IW0980-6'));
   expect(() => buildDocumentedToolsOctober2(copy)).toThrow();
  }
 });
 it('rejects changed units, adjacent columns, unsupported pressures, fictitious identities and unsafe source URLs', () => {
  for (const mutate of [
   s => { s.tools.find(row => row.mpn === '60018-44-5').column = 1; },
   s => { s.tools.find(row => row.mpn === '60018-44-5').pressureScope = 'measurement'; s.tools.find(row => row.mpn === '60018-44-5').pressureBar = 6; },
   s => { s.tools.find(row => row.mpn === '100035613').flowUnit = 'cfm'; },
   s => { s.tools.find(row => row.mpn === '100035613').knownOperatingPressureBar = 6.3; },
   s => { s.tools.find(row => row.mpn === 'AT-5080').knownOperatingPressureBar = 6.3; },
   s => { s.tools.find(row => row.mpn === 'AT-5080').flowOriginal = '200'; },
   s => { s.tools.find(row => row.mpn === 'AT-5080').mpn = 'AT-FICTITIOUS'; },
   s => { s.sources[0].url = 'https://name:password@example.com/catalog.pdf'; },
  ]) {
   const copy = structuredClone(snapshot); mutate(copy);
   expect(() => buildDocumentedToolsOctober2(copy)).toThrow();
  }
 });
});
