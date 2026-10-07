import { readFileSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { toolProfileSchema } from '../../src/domain/catalog';
import { rawTools } from '../../src/data/products/tools';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { calculateSizing } from '../../server/air-sizing.mjs';
import { buildDocumentedToolsOctober7 as build, documentedToolsOctober7Demand as demand, assertDocumentedToolsOctober7NewIdentities as assertNew, documentedToolsOctober7IdentityKey as identity } from './documented-tools-2026-10-07.mjs';
import { parseCatalogProductSource, productTechnicalSvgError } from './catalog-tooling.mjs';
import { generatedTechnicalCardDimensions } from './technical-card.mjs';

const sharp = createRequire(import.meta.url)('sharp');
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-tools-2026-10-07.json', import.meta.url)));
const batch = build(snapshot);
const byModel = (brand, model) => batch.find(p => p.brand === brand && p.model === model);
const row = (brand, model) => snapshot.tools.find(p => p.brand === brand && p.model === model);
const compressor = { id: 'fixture', maxPressureBar: 10, maxPressureBasis: 'explicit-maximum-working-pressure', tankLiters: 50, dutyCycle: 1, fadCurve: [{ pressureBar: 2, litersPerMinute: 500 }, { pressureBar: 6.2, litersPerMinute: 500 }], confidence: 'B' };

describe('October 7 primary tool documents', () => {
 it('adds exactly 1000 sourced identities with no previous model, MPN or manufacturer alias reused', () => {
  expect(batch).toHaveLength(1000);
  expect(new Set(batch.map(p => p.id)).size).toBe(1000);
  const ids = new Set(batch.map(p => p.id));
  const prior = rawTools.filter(p => !ids.has(p.id));
  const productsById = new Map(rawTools.map(p => [p.id, p]));
  expect(productsById.size).toBe(rawTools.length);
  expect(prior).toHaveLength(18087);
  expect(() => assertNew(snapshot.tools, prior)).not.toThrow();
  for (const p of batch) {
   const parsed = toolProfileSchema.parse(p);
   expect(toolProfileSchema.parse(productsById.get(p.id)), p.id).toEqual(parsed);
   const saved = parseCatalogProductSource('tools', readFileSync(new URL(`../../src/data/products/tools/${p.id}.ts`, import.meta.url), 'utf8'));
   expect(saved, p.id).toEqual(p);
  }
 });
 it('keeps qualified minute points, qualified action volumes and documentary gaps separate', () => {
  expect(batch.filter(p => p.demandModel === 'fixed-flow' && !p.airflowBasis)).toHaveLength(444);
  expect(batch.filter(p => p.demandModel === 'per-action')).toHaveLength(17);
  expect(batch.filter(p => p.demandModel === 'fixed-flow' && p.airflowBasis === 'unqualified')).toHaveLength(63);
  expect(batch.filter(p => p.demandModel === 'variable-volume')).toHaveLength(476);
  for (const p of batch.filter(p => p.demandModel === 'variable-volume' || p.airflowBasis)) expect(evaluateCompatibility(compressor, p).verdict, p.id).toBe('insufficient_data');
 });
 it('preserves normalized units and native EXAIR pairs without silently entering the FAD model', () => {
  for (const brand of ['UHT', 'Yutani', 'Binks', 'EXAIR']) {
   for (const p of batch.filter(p => p.brand === brand)) {
    expect(p).not.toHaveProperty('airflowLpm');
    expect(p.demandModel).toBe('variable-volume');
   }
  }
  const exair = batch.filter(p => p.brand === 'EXAIR');
  expect(exair).toHaveLength(112);
  expect(snapshot.tools.filter(r => r.brand === 'EXAIR').every(r => !/rigid-extension|flexible-stay-set/.test(r.configuration?.configKind ?? ''))).toBe(true);
  for (const r of snapshot.tools.filter(r => r.brand === 'EXAIR' && /HP1230|HP1330/.test(r.model))) {
   expect(r.flowOriginal).toContain('37');
   expect(r.flowOriginal).toContain('1039');
  }
  for (const p of exair.filter(p => /1219SS/.test(p.model))) expect(p.workingPressureBar).toEqual({});
 });
 it('requires genuine cadence for action tools and retains only the measured pressure point', () => {
  const p = byModel('Hitachi', 'NT50A5');
  expect(p.demandModel).toBe('per-action');
  expect(p.airPerActionLiters).toBe(0.64);
  expect(p.workingPressureBar).toEqual({ min: 6.2, typical: 6.2, max: 6.2 });
  expect(p).not.toHaveProperty('airflowLpm');
  expect(p.fieldSources.airPerActionLiters.length).toBeGreaterThan(0);
  expect(p.editorial.overview).toContain('cadence réelle');
  expect(evaluateCompatibility(compressor, p).verdict).toBe('insufficient_data');
  const size = calculateSizing({ demands: [{ model: 'per-action', id: p.id, litersPerAction: p.airPerActionLiters, actionsPerMinute: 30, pressureBar: 6.2, quantity: 1 }], mode: 'successive', safetyMargin: 0.25, sessionMinutes: 30 });
  expect(size.averageFlowLpm).toBe(19.2);
  expect(size.recommendedFadLpm).toBe(24);
  const native = row('Hitachi', 'NT50A5');
  expect(native.configuration.nativePerCycleCurve.map(p => p.pressureBar)).toEqual([5.5, 6.2, 6.9]);
  expect(() => demand({ ...native, actionPoint: { ...native.actionPoint, referenceBasis: 'unspecified-chamber-volume' } })).toThrow();
 });
 it('withholds the 31 native L/tir profiles where free-air reference is not documented', () => {
  const tools = batch.filter(p => ['Paslode', 'Haubold'].includes(p.brand));
  expect(tools).toHaveLength(31);
  for (const p of tools) {
   expect(p.demandModel).toBe('variable-volume');
   expect(p).not.toHaveProperty('airPerActionLiters');
   expect(p.demandExplanation).toContain('base air libre');
   expect(p.specifications.find(f => f.label === 'Consommation publiée dans son unité originale').value).toContain('tir');
  }
 });
 it('admits only the 13 manufacturer recommended SRi combinations and keeps MC1 at 1 bar', () => {
  const rows = snapshot.tools.filter(r => r.brand === 'DeVilbiss');
  expect(rows).toHaveLength(13);
  const micro = rows.filter(r => r.configuration.airCap === 'MC1');
  expect(micro).toHaveLength(1);
  expect(micro[0].configuration.nozzleMm).toBe(0.6);
  expect(micro[0].pressurePoint.value).toBe(1);
  const p = byModel('DeVilbiss', micro[0].model);
  expect(p.airflowLpm).toEqual({ min: 50, typical: 50, max: 50 });
  expect(p.workingPressureBar).toEqual({ min: 1, typical: 1, max: 1 });
  for (const r of rows.filter(r => r.configuration.airCap !== 'MC1')) expect([0.8, 1, 1.2, 1.4]).toContain(r.configuration.nozzleMm);
  expect(rows.every(r => !r.mpn)).toBe(true);
 });
 it('does not promote current 2K Bonding configurations from a differently scoped manual', () => {
  const rows = snapshot.tools.filter(r => r.physicalFamily === 'Pilot 2K Bonding');
  expect(rows).toHaveLength(24);
  for (const r of rows) {
   expect(r.mpn).toMatch(/^V1182[56]\d{5}$/);
   expect(r.calculationStatus).toBe('unqualified-operating-point');
   expect(demand(r).demandModel).toBe('variable-volume');
   expect(r.limitations.join(' ')).toContain('continuité exacte de génération');
  }
  const configured = snapshot.tools.filter(r => r.brand === 'Walther Pilot' && ['Pilot Mini', 'Pilot Trend'].includes(r.physicalFamily));
  expect(configured).toHaveLength(38);
  expect(configured.every(r => !r.mpn)).toBe(true);
 });
 it('keeps a recommended pressure unqualified and a service maximum outside measurement points', () => {
  const unior = snapshot.tools.filter(r => r.brand === 'Unior');
  expect(unior).toHaveLength(26);
  expect(unior.filter(r => r.calculationStatus === 'unqualified')).toHaveLength(7);
  for (const r of unior.filter(r => r.calculationStatus === 'unqualified')) expect(demand(r).airflowBasis).toBe('unqualified');
  for (const r of unior.filter(r => r.calculationStatus === 'unqualified-operating-point')) expect(demand(r).workingPressureBar).toEqual({});
  const unknown = unior.find(r => r.calculationStatus === 'unqualified');
  expect(() => demand({ ...unknown, calculationStatus: 'declared-spraying-point' })).toThrow();
 });
 it('preserves meaningful identities including alpha, magazine length and staple crown', () => {
  expect(identity('Yutani', 'HPW-6')).not.toBe(identity('Yutani', 'HPW-6α'));
  expect(identity('Hitachi', 'NT50A5')).toBe(identity('Metabo HPT', 'NT50A5'));
  expect(byModel('Hitachi', 'NR65AK2').specifications).toContainEqual(expect.objectContaining({ label: 'Chargeur de cette variante', value: '44 clous, chargeur long' }));
  expect(byModel('Hitachi', 'NR65AK2(S)').specifications).toContainEqual(expect.objectContaining({ label: 'Chargeur de cette variante', value: '22 clous, chargeur court' }));
  expect(byModel('Hitachi', 'N5008AC2').specifications).toContainEqual(expect.objectContaining({ label: 'Couronne des agrafes', value: '7/16 pouce, 16 gauge' }));
  expect(byModel('Hitachi', 'N5010A').specifications).toContainEqual(expect.objectContaining({ label: 'Couronne des agrafes', value: '1/2 pouce, 16 gauge' }));
 });
 it('bounds all 1000 exact technical SVG cards and their dimensions', async () => {
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
  const metadata = await sharp(readFileSync(new URL(`../../public${batch[0].image.src}`, import.meta.url))).metadata();
  expect(metadata.format).toBe('svg');
  expect(metadata.width).toBe(1200);
  expect(metadata.height).toBe(800);
  expect(bytes).toBeLessThan(12 * 1024 * 1024);
 });
 it('keeps logical HTML excerpts distinct from PDF page citations without changing evidence IDs', () => {
  const p = batch.find(p => p.brand === 'EXAIR');
  for (const id of ['exair-scfm-conditions', 'exair-scfm-faq']) {
   const source = snapshot.sources.find(s => s.id === id);
   const e = p.evidence.find(e => e.id === `october7-tools-${id}-p1`);
   expect(source.documentFormat).toBe('html');
   expect(e.sourceUrl).toBe(source.url);
   expect(e.sourceLabel).toBe(source.sourceLabel);
   expect(e.sourceLabel).not.toContain('page PDF');
  }
  const pdf = p.evidence[0];
  expect(pdf.sourceUrl).toMatch(/#page=\d+$/);
  expect(pdf.sourceLabel).toMatch(/page PDF \d+$/);
 });
 it('retains capture integrity, page locators, public source URLs and all critical provenance', () => {
  const sources = new Map(snapshot.sources.map(s => [s.id, s]));
  for (const s of sources.values()) {
   expect(s.httpStatus).toBe(200);
   expect(s.sourceRole).toBe('primary');
   expect(s.sha256).toMatch(/^[a-f0-9]{64}$/);
   expect(s).not.toHaveProperty('resolvedUrl');
   expect(s).not.toHaveProperty('privateCapture');
   expect(s.url).not.toMatch(/X-Amz|Signature|Policy=|\/tmp\//);
  }
  for (const p of snapshot.sourcePages) expect(createHash('sha256').update(p.transcript).digest('hex')).toBe(p.transcriptSha256);
  for (const p of batch) {
   for (const key of p.demandModel === 'per-action' ? ['workingPressureBar', 'airPerActionLiters'] : p.demandModel === 'fixed-flow' ? ['workingPressureBar', 'airflowLpm'] : ['workingPressureBar', 'demandExplanation']) expect(p.fieldSources[key].length, p.id).toBeGreaterThan(0);
   expect(JSON.stringify(p), p.id).not.toContain('\u2014');
  }
 });
 const mutations = [
  ['flow cell', s => { s.tools[0].flowPoint.value++; }],
  ['page excerpt', s => { s.sourcePages[0].transcript += ' changed'; }],
  ['native normalized flow made fixed', s => { s.tools.find(r => r.brand === 'UHT').calculationStatus = 'declared-spraying-point'; }],
  ['unqualified unit promoted to working', s => { s.tools.find(r => r.brand === 'Unior').calculationStatus = 'declared-spraying-point'; }],
  ['contradictory family admitted', s => { s.tools.find(r => r.calculationStatus === 'contradictory').calculationStatus = 'unqualified-operating-point'; }],
  ['unapproved source host', s => { s.sources[0].url = 'https://invalid.example/document.pdf'; }],
  ['credentials in source URL', s => { s.sources[0].url = 'https://user:password@walmec.com/document.pdf'; }],
  ['source failure', s => { s.sources[0].httpStatus = 404; }],
  ['invented MPN pattern', s => { s.tools[0].mpn = 'W0230**'; }],
  ['action volume used without basis', s => { delete s.tools.find(r => r.calculationStatus === 'declared-per-action-point').actionPoint.referenceBasis; }],
 ];
 for (const [label, mutate] of mutations) it(`rejects a modified or unqualified snapshot: ${label}`, () => {
  const altered = structuredClone(snapshot);
  mutate(altered);
  expect(() => build(altered)).toThrow();
 });
});
