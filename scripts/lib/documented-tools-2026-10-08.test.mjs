import { readFileSync, statSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { toolProfileSchema } from '../../src/domain/catalog';
import { rawTools } from '../../src/data/products/tools';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { calculateSizing } from '../../server/air-sizing.mjs';
import { buildDocumentedToolsOctober8 as build, documentedToolsOctober8Demand as demand, assertDocumentedToolsOctober8NewIdentities as assertNew, documentedToolsOctober8IdentityKey as identity } from './documented-tools-2026-10-08.mjs';
import { parseCatalogProductSource, productTechnicalSvgError } from './catalog-tooling.mjs';
import { generatedTechnicalCardDimensions } from './technical-card.mjs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-tools-2026-10-08.json', import.meta.url)));
const batch = build(snapshot);
const ids = new Set(batch.map(p => p.id));
const byModel = (brand, model) => batch.find(p => p.brand === brand && p.model === model);
const row = (brand, model) => snapshot.tools.find(p => p.brand === brand && p.model === model);
const compressor = { id: 'fixture', maxPressureBar: 10, maxPressureBasis: 'explicit-maximum-working-pressure', tankLiters: 50, dutyCycle: 1, fadCurve: [{ pressureBar: 1, litersPerMinute: 2000 }, { pressureBar: 2, litersPerMinute: 2000 }, { pressureBar: 3.4, litersPerMinute: 2000 }, { pressureBar: 5.5, litersPerMinute: 2000 }, { pressureBar: 6.3, litersPerMinute: 2000 }], confidence: 'B' };

async function readBoundedProducts(products) {
 const saved = [];
 for (let offset = 0; offset < products.length; offset += 32) {
  saved.push(...await Promise.all(products.slice(offset, offset + 32).map(async p => ({ id: p.id, product: parseCatalogProductSource('tools', await readFile(new URL(`../../src/data/products/tools/${p.id}.ts`, import.meta.url), 'utf8')) }))));
 }
 return new Map(saved.map(item => [item.id, item.product]));
}

describe('October 8 primary tool documents', () => {
 it('adds exactly 1000 real identities with exhaustive canonical files and no baseline alias reused', async () => {
  expect(batch).toHaveLength(1000);
  expect(ids.size).toBe(1000);
  const prior = rawTools.filter(p => !ids.has(p.id));
  expect(prior).toHaveLength(19087);
  expect(() => assertNew(snapshot.tools, prior)).not.toThrow();
  const productsById = new Map(rawTools.map(p => [p.id, p]));
  expect(productsById.size).toBe(rawTools.length);
  const saved = await readBoundedProducts(batch);
  expect(saved.size).toBe(1000);
  for (const p of batch) {
   const parsed = toolProfileSchema.parse(p);
   expect(toolProfileSchema.parse(productsById.get(p.id)), p.id).toEqual(parsed);
   expect(saved.get(p.id), p.id).toEqual(p);
  }
 });
 it('keeps 317 qualified minute points and 683 documentary gaps separate', () => {
  expect(batch.filter(p => p.demandModel === 'fixed-flow' && !p.airflowBasis)).toHaveLength(317);
  expect(batch.filter(p => p.demandModel === 'variable-volume')).toHaveLength(683);
  expect(batch.filter(p => p.demandModel === 'per-action' || p.airflowBasis)).toHaveLength(0);
  for (const p of batch.filter(p => p.demandModel === 'variable-volume')) {
   expect(p).not.toHaveProperty('airflowLpm');
   expect(p).not.toHaveProperty('airPerActionLiters');
   expect(evaluateCompatibility(compressor, p).verdict, p.id).toBe('insufficient_data');
  }
 });
 it('documents brands and catalogue families without counting each configuration as a new mechanical design', () => {
  const counts = Object.fromEntries([...new Set(batch.map(p => p.brand))].map(brand => [brand, batch.filter(p => p.brand === brand).length]));
  expect(counts).toEqual({ 'Anest Iwata': 144, ANI: 204, Sagola: 56, Prona: 332, 'Schneider Airsystems': 82, Hutchins: 43, Asturo: 139 });
  expect(new Set(snapshot.tools.map(p => `${p.brand}:${p.physicalFamily}`)).size).toBe(204);
  expect(snapshot.exclusions).toHaveLength(34);
  for (const p of snapshot.tools) expect(p.functionalDifference.length, p.model).toBeGreaterThan(10);
 });
 it('keeps ANI supply RP1 distinct from internal TMD1 and does not promise a different supply assembly', () => {
  const r = snapshot.tools.find(r => r.brand === 'ANI' && r.physicalFamily === 'BLACK/S H2 TMD1');
  const p = byModel('ANI', r.model);
  expect(p.airflowLpm).toEqual({ min: 470, typical: 470, max: 470 });
  expect(p.workingPressureBar).toEqual({ min: 5.5, typical: 5.5, max: 5.5 });
  expect(r.assemblyPressurePoints.map(p => p.value)).toEqual([5.5, 1.4]);
  expect(p.editorial.overview).toContain('lecture amont RP1');
  expect(p.editorial.limitations.join(' ')).toContain('autre tuyau');
  expect(() => demand({ ...r, pressurePoint: { ...r.pressurePoint, value: 1.4 } })).toThrow(/montage/);
  expect(() => demand({ ...r, assemblyPressurePoints: r.assemblyPressurePoints.toReversed() })).toThrow(/montage/);
  expect(snapshot.tools.filter(r => r.calculationStatus === 'declared-spraying-assembly-point')).toHaveLength(134);
 });
 it('withholds all 23 Iwata SI pressure discrepancies rather than picking either unit', () => {
  const conflicts = snapshot.tools.filter(r => r.brand === 'Anest Iwata' && r.calculationStatus === 'contradictory');
  expect(conflicts).toHaveLength(23);
  for (const r of conflicts) {
   const p = byModel(r.brand, r.model);
   expect(r.pressureOriginal).toMatch(/0\.(24|29) MPa \((2\.5|3\.0) bar/);
   expect(p.workingPressureBar).toEqual({});
   expect(p).not.toHaveProperty('airflowLpm');
   expect(p.editorial.limitations.join(' ')).toContain('clarification fabricant');
  }
 });
 it('preserves AIRGUNSA normalized units, complete codes and genuine offered configurations', () => {
  const airgunsa = snapshot.tools.filter(r => r.model.startsWith('AIRGUNSA '));
  expect(airgunsa).toHaveLength(64);
  const normalized = airgunsa.filter(r => r.calculationStatus === 'normalized-volume-conditions-missing');
  expect(normalized).toHaveLength(53);
  for (const r of normalized) {
   expect(r.flowOriginal).toContain('Nℓ/min');
   expect(byModel(r.brand, r.model)).not.toHaveProperty('airflowLpm');
   expect(r.mpn).toMatch(/^(W0SPG\d+AG\d+C|\d{8})$/);
  }
  expect(airgunsa.filter(r => r.model.includes('P.A.S.'))).toHaveLength(4);
  expect(airgunsa.some(r => /chrome|Quick Coupling/i.test(r.model))).toBe(false);
  expect(byModel('Anest Iwata', 'AIRGUNSA ST buse 5 mm').mpn).toBe('W0030500050');
  expect(byModel('Anest Iwata', 'AIRGUNSA ST buse 6 mm').mpn).toBe('W0030500060');
 });
 it('keeps the 78 paired Prona spray points distinct from 254 unpaired pressure ranges', () => {
  const rows = snapshot.tools.filter(r => r.brand === 'Prona');
  expect(rows).toHaveLength(332);
  expect(rows.filter(r => r.calculationStatus === 'declared-spraying-point')).toHaveLength(78);
  for (const r of rows) {
   expect(r.mpn).toBeUndefined();
   expect(r.page).toBeNull();
   expect(r.pressureOriginal).toContain('kg/cm²');
   expect(r.pressureOriginal).toContain('MPa');
   expect(r.model).not.toContain('None');
   if (r.calculationStatus === 'declared-spraying-point') expect(demand(r).workingPressureBar.typical).toBeCloseTo(r.pressurePoint.value * 10, 8);
   else expect(demand(r).demandModel).toBe('variable-volume');
  }
 });
 it('keeps Asturo articles and nozzle codes separate without reconstructing a whole-gun MPN', () => {
  const asturo = snapshot.tools.filter(r => r.brand === 'Asturo');
  expect(asturo).toHaveLength(139);
  expect(new Set(asturo.map(r => r.physicalFamily)).size).toBe(30);
  for (const r of asturo) {
   expect(r.mpn).toBeUndefined();
   // The original catalogue also publishes GE700 (p16) and 00905P (p20).
   expect(r.configuration.articleBase).toMatch(/^(?:\d+|GE700|00905P)$/);
   expect(r.configuration.publishedNozzleCode).toMatch(/^\d+$/);
   expect(demand(r).demandModel).toBe('variable-volume');
  }
 });
 it('preserves Schneider contradictions with both source passages and omits unresolved manufacturer codes', () => {
  const conflicting = row('Schneider Airsystems', 'SBS 700 SYS');
  expect(conflicting.calculationStatus).toBe('contradictory');
  expect(conflicting.secondarySources).toContainEqual(expect.objectContaining({ page: 206, quote: 'SBS 700 SYS : 3 L/s' }));
  for (const model of ['KLG 90-40', 'SNG-SK 50', 'PNG-PN 25']) {
   const r = row('Schneider Airsystems', model);
   expect(r.mpn).toBeUndefined();
   expect(r.documentedConflicts.length).toBeGreaterThan(0);
   expect(r.secondarySources).toContainEqual(expect.objectContaining({ page: 234 }));
   expect(snapshot.sourcePages.some(p => p.sourceId === r.sourceId && p.page === 234 && p.transcript.includes(r.documentedConflicts[0].observedValues[0]))).toBe(true);
  }
  for (const r of snapshot.tools.filter(r => r.brand === 'Schneider Airsystems')) expect(demand(r).demandModel).toBe('variable-volume');
 });
 it('keeps maximum pressure and absent inflation demand outside working consumption points', () => {
  for (const model of ['ES 150-5', 'ES 150-2,5']) {
   const r = row('Schneider Airsystems', model);
   expect(r.pressurePoint).toBeUndefined();
   expect(r.pressureOriginal).toContain('Max. Arbeitsdruck');
   expect(demand(r).workingPressureBar).toEqual({});
  }
  for (const model of ['RF-RM “geeicht”', 'RF-RM', 'RF-RMG', 'RF-RMG-K']) {
   const p = byModel('Schneider Airsystems', model);
   expect(p.specifications.find(f => f.label === 'Consommation publiée dans son unité originale').value).toContain('Non publiée');
   expect(p).not.toHaveProperty('airflowLpm');
  }
 });
 it('does not turn native L/Hub or L/Schlag into a FAD demand or assume a cadence', () => {
  const native = snapshot.tools.filter(r => r.calculationStatus === 'per-action-reference-missing');
  expect(native).toHaveLength(9);
  for (const r of native) {
   expect(r.flowOriginal).toMatch(/L\/(Hub|Schlag)/);
   expect(demand(r).demandExplanation).toContain('base air libre');
   expect(demand(r)).not.toHaveProperty('airPerActionLiters');
   expect(() => demand({ ...r, calculationStatus: 'declared-per-action-point' })).toThrow(/Volume/);
  }
 });
 it('requires an explicit per-action basis and real user cadence when that contract is used', () => {
  const input = { calculationStatus: 'declared-per-action-point', actionPoint: { unit: 'L/action', regime: 'per-cycle', referenceBasis: 'manufacturer-compressor-sizing-formula', value: 0.64, actionLabel: 'tir' }, pressurePoint: { unit: 'bar', meaning: 'per-action-measurement-point', value: 6.2 } };
  const profile = { id: 'cycle-fixture', confidence: 'B', ...demand(input) };
  expect(evaluateCompatibility(compressor, profile).verdict).toBe('insufficient_data');
  const result = calculateSizing({ demands: [{ model: 'per-action', id: profile.id, litersPerAction: 0.64, actionsPerMinute: 30, pressureBar: 6.2, quantity: 1 }], mode: 'successive', safetyMargin: 0.25, sessionMinutes: 30 });
  expect(result.averageFlowLpm).toBe(19.2);
  expect(result.recommendedFadLpm).toBe(24);
  expect(() => demand({ ...input, actionPoint: { ...input.actionPoint, referenceBasis: 'compressed-chamber-volume' } })).toThrow();
 });
 it('keeps Hutchins CFM native and does not transfer a pressure from a nearby model', () => {
  const rows = snapshot.tools.filter(r => r.brand === 'Hutchins');
  expect(rows).toHaveLength(43);
  expect(rows.some(r => ['3800', '3800-4', 'Model 3800', 'Model 3800-4'].includes(r.model))).toBe(false);
  for (const r of rows) {
   const p = byModel(r.brand, r.model);
   expect(p.demandModel).toBe('variable-volume');
   expect(p).not.toHaveProperty('airflowLpm');
   expect(p.editorial.limitations.join(' ')).toContain('fermeture des nouvelles ventes');
  }
  for (const model of ['500', '600', '700']) {
   const r = row('Hutchins', model);
   expect(r.flowOriginal).toContain('10.7 CFM');
   expect(r.pressureOriginal).toBeUndefined();
   expect(demand(r).workingPressureBar).toEqual({});
  }
 });
 it('links each Prona image-table capture through its observed manufacturer HTML without fictitious PDF pagination', () => {
  const sources = new Map(snapshot.sources.map(s => [s.id, s]));
  expect(snapshot.sources.filter(s => s.documentFormat === 'html')).toHaveLength(46);
  expect(snapshot.sources.filter(s => s.documentFormat === 'pdf')).toHaveLength(23);
  expect(snapshot.sources.flatMap(s => s.technicalAssets ?? [])).toHaveLength(39);
  expect(snapshot.sourcePages).toHaveLength(147);
  for (const r of snapshot.tools.filter(r => r.brand === 'Prona')) {
   const s = sources.get(r.sourceId), asset = s.technicalAssets.find(a => a.id === r.sourceAssetId);
   const e = byModel(r.brand, r.model).evidence[0];
   expect(asset.parentUrl).toBe(s.url);
   expect(asset.contentType).toMatch(/^image\/(jpeg|png)$/);
   expect(e.sourceUrl).toBe(s.url);
   expect(e.sourceLabel).not.toContain('page PDF');
   expect(e.notes).toContain(asset.sha256);
   expect(e.notes).toContain(asset.url);
  }
 });
 it('preserves manufacturer identities and rejects any reused model, MPN or OEM alias', () => {
  expect(identity('Hitachi', 'NT50A5')).toBe(identity('Metabo HPT', 'NT50A5'));
  expect(identity('Yutani', 'HPW-6')).not.toBe(identity('Yutani', 'HPW-6α'));
  expect(() => assertNew([{ brand: 'HiKoki', model: 'NT50A5' }], [{ brand: 'Metabo HPT', model: 'NT50A5' }])).toThrow();
  expect(() => assertNew([{ brand: 'ANI', model: 'new', mpn: 'AH141701' }], [{ brand: 'ANI', model: 'old', identifierAliases: [{ type: 'legacy_mpn', value: 'AH141701' }] }])).toThrow();
  expect(() => assertNew([{ brand: 'ANI', model: 'one', mpn: 'CODE' }, { brand: 'ANI', model: 'two', mpn: 'CODE' }], [])).toThrow();
 });
 it('bounds every exact technical SVG and keeps all 1000 files inside the original viewBox', () => {
  let bytes = 0;
  for (const p of batch) {
   const path = new URL(`../../public${p.image.src}`, import.meta.url);
   const size = statSync(path).size;
   bytes += size;
   expect(size, p.id).toBeLessThanOrEqual(250 * 1024);
   const svg = readFileSync(path, 'utf8');
   expect(productTechnicalSvgError(p, 'tools', svg), p.id).toBeNull();
   expect(generatedTechnicalCardDimensions(svg), p.id).toEqual({ width: 1200, height: 800 });
  }
  expect(bytes).toBe(1522719);
  expect(bytes).toBeLessThan(12 * 1024 * 1024);
 });
 it('retains capture integrity, original units, dates and all critical field provenance without private paths', () => {
  for (const s of snapshot.sources) {
   expect(s.httpStatus).toBe(200);
   expect(s.sourceRole).toBe('primary');
   expect(s.observedAt).toMatch(/^2026-10-08/);
   expect(s.sha256).toMatch(/^[a-f0-9]{64}$/);
   expect(s.bytes).toBeGreaterThan(0);
   expect(s).not.toHaveProperty('resolvedUrl');
   expect(s).not.toHaveProperty('privateOriginalFilename');
  }
  for (const page of snapshot.sourcePages) expect(createHash('sha256').update(page.transcript).digest('hex')).toBe(page.transcriptSha256);
  for (const p of batch) {
   const evidenceIds = new Set(p.evidence.map(e => e.id));
   for (const key of p.demandModel === 'fixed-flow' ? ['workingPressureBar', 'airflowLpm'] : ['workingPressureBar', 'demandExplanation']) {
    expect(p.fieldSources[key].length, p.id).toBeGreaterThan(0);
    expect(p.fieldSources[key].every(id => evidenceIds.has(id)), p.id).toBe(true);
   }
   expect(JSON.stringify(p), p.id).not.toMatch(/\u2014|\/Users\/|\/tmp\/|X-Amz-|Signature=/);
  }
 });
 const mutations = [
  ['flow cell', s => { s.tools.find(r => r.calculationStatus === 'declared-spraying-point').flowPoint.value++; }],
  ['page transcript', s => { s.sourcePages[0].transcript += ' changed'; }],
  ['normalized unit falsely made calculable', s => { const r=s.tools.find(r => r.calculationStatus === 'normalized-volume-conditions-missing'); r.calculationStatus='declared-spraying-point'; r.flowPoint={value:375,unit:'NL/min',regime:'spraying'}; }],
  ['unpaired pressure range promoted', s => { s.tools.find(r => r.brand === 'Prona' && r.calculationStatus === 'unqualified-operating-point').calculationStatus='declared-spraying-point'; }],
  ['unapproved host', s => { s.sources[0].url = 'https://invalid.example/document.pdf'; }],
  ['URL credentials', s => { s.sources[0].url = 'https://user:password@www.ani.it/document.pdf'; }],
  ['failed source', s => { s.sources[0].httpStatus = 404; }],
  ['wrong MIME', s => { s.sources[0].contentType = 'application/octet-stream'; }],
  ['invented manufacturer code', s => { s.tools[0].mpn = 'W0230**'; }],
  ['HTML fictitious PDF page', s => { s.sourcePages.find(p => p.page === null).page = 1; }],
  ['image without manufacturer parent', s => { s.sources.find(s => s.technicalAssets).technicalAssets[0].parentUrl = 'https://invalid.example/'; }],
  ['image capture failure', s => { s.sources.find(s => s.technicalAssets).technicalAssets[0].httpStatus = 403; }],
  ['held contradiction silently resolved', s => { s.tools.find(r => r.calculationStatus === 'contradictory').calculationStatus = 'unqualified-operating-point'; }],
 ];
 for (const [label, mutate] of mutations) it(`rejects altered source or qualification: ${label}`, () => {
  const altered = structuredClone(snapshot);
  mutate(altered);
  expect(() => build(altered)).toThrow();
 });
});
