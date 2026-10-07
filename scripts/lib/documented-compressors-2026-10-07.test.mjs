import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressorSchema } from '../../src/domain/catalog';
import { rawCompressors } from '../../src/data/products/compressors';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { buildDocumentedCompressorsOctober7 as build, documentedCompressorIdentity as identity, parseSourceNumbers } from './documented-compressors-2026-10-07.mjs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-compressors-2026-10-07.json', import.meta.url)));
const batch = build(snapshot);
const product = id => batch.find(p => p.id === id);
const semanticIdentity = p => identity(`${p.brand} ${p.model.replaceAll('+', ' Plus')}`);
const demand = pressure => ({ id: 'fixture', demandModel: 'fixed-flow', workingPressureBar: { min: pressure, typical: pressure, max: pressure }, airflowLpm: { min: 100, typical: 100, max: 100 }, confidence: 'B' });

describe('October 7 original compressor documents', () => {
 it('integrates 200 distinct documented models without replacing catalog identities', () => {
  expect(batch).toHaveLength(200);
  expect(Object.fromEntries(Object.entries(Object.groupBy(batch, p => p.brand)).map(([k, v]) => [k, v.length]))).toEqual({ 'FS-Curtis': 87, Comprag: 61, Rotair: 24, SWAN: 28 });
  const ids = new Set(batch.map(p => p.id));
  const old = rawCompressors.filter(p => !ids.has(p.id));
  expect(old).toHaveLength(4759);
  const priorIdentities = new Set(old.map(semanticIdentity));
  expect(new Set(snapshot.compressors.map(p => p.normalizedIdentity)).size).toBe(200);
  const priorCodes = new Set(old.filter(p => p.mpn).map(p => `${identity(p.brand)}:${identity(p.mpn)}`));
  for (const row of snapshot.compressors) {
   expect(priorIdentities.has(row.normalizedIdentity), row.id).toBe(false);
   if (row.mpn) expect(priorCodes.has(`${identity(row.brand)}:${identity(row.mpn)}`), row.id).toBe(false);
  }
  for (const p of batch) {
   const parsed = compressorSchema.parse(p);
   expect(parsed.maxPressureBasis, p.id).toBe(p.maxPressureBasis);
   expect(rawCompressors.find(r => r.id === p.id), p.id).toEqual(parsed);
  }
 });
 it('preserves actual FAD points and converts native units without treating intake as delivered air', () => {
  expect(product('fs-curtis-nxb08').fadCurve).toEqual([{ pressureBar: 6.895, litersPerMinute: 1262.931 }]);
  expect(product('swan-sds-310').fadCurve).toEqual([{ pressureBar: 7.845, litersPerMinute: 730 }]);
  expect(product('comprag-f0308').fadCurve).toEqual([{ pressureBar: 8, litersPerMinute: 460 }]);
  expect(product('rotair-mdvn-34-e').fadCurve).toEqual([{ pressureBar: 7, litersPerMinute: 3400 }]);
  for (const p of batch) {
   expect(p).not.toHaveProperty('intakeFlowLpm');
   expect(p.fadCurve).toHaveLength(1);
   expect(p.fieldSources.fadCurve.length).toBeGreaterThan(0);
  }
 });
 it('retains VSD minima as regulation bounds rather than replacing full-load capacity', () => {
  expect(product('fs-curtis-nxv08').fadCurve).toEqual([{ pressureBar: 6.895, litersPerMinute: 1302.008 }]);
  expect(product('fs-curtis-nxv08').specifications).toContainEqual(expect.objectContaining({ label: 'FAD minimal déclaré à 6,895 bar', value: '480,254 L/min ; minimum de régulation, distinct de la capacité maximale' }));
  expect(product('fs-curtis-nxv08')).not.toHaveProperty('powerKw');
 });
 it('qualifies only 31 exact NX models for an explicitly published 100 percent duty cycle', () => {
  const qualified = snapshot.compressors.filter(r => r.dutyCycle === 1);
  expect(qualified).toHaveLength(31);
  expect(batch.filter(p => p.dutyCycle === 1).map(p => p.id)).toEqual(qualified.map(r => r.id));
  for (const r of qualified) {
   const scope = snapshot.sources.find(s => s.id === r.dutyScopeProof.sourceId).extractedPages.find(p => p.page === r.dutyScopeProof.page);
   expect(scope.tables[r.dutyScopeProof.tableIndex][r.dutyScopeProof.rowIndex][0]).toBe(r.model);
   expect(r.dutyProof.sourceId).toBe(r.dutyScopeProof.sourceId);
  }
  expect(product('fs-curtis-nxb18')).not.toHaveProperty('dutyCycle');
  expect(product('rotair-mdvn-34-e')).not.toHaveProperty('dutyCycle');
 });
 it('distinguishes 61 explicit maxima from 139 documented pressure ceilings', () => {
  expect(batch.filter(p => p.maxPressureBasis === 'explicit-maximum-working-pressure')).toHaveLength(61);
  expect(batch.filter(p => p.maxPressureBasis === 'selected-working-pressure-ceiling')).toHaveLength(139);
  for (const p of batch) expect(p.fieldSources.maxPressureBasis.length).toBeGreaterThan(0);
  expect(product('fs-curtis-nxb08').maxPressureBasis).toBe('selected-working-pressure-ceiling');
  expect(product('comprag-f0308').maxPressureBasis).toBe('explicit-maximum-working-pressure');
 });
 it('uses insufficient data above a measured point, and incompatible only above a proven maximum', () => {
  expect(evaluateCompatibility(product('fs-curtis-nxb08'), demand(6.3)).verdict).toBe('continuous');
  expect(evaluateCompatibility(product('fs-curtis-nxb08'), demand(7)).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('comprag-f0308'), demand(8.1)).verdict).toBe('incompatible');
  expect(evaluateCompatibility(product('swan-sds-310'), demand(8)).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product('rotair-mdvn-34-e'), demand(6.3)).verdict).toBe('insufficient_data');
 });
 it('retains exact receiver and equipment codes without creating pressure or frequency variants', () => {
  const frd = product('comprag-frd0708-270');
  expect(frd.mpn).toBe('11410208');
  expect(frd.tankLiters).toBe(270);
  expect(frd.powerKw).toBe(7.5);
  expect(frd.variant.distinguishingAttributes.fréquence).toBe('50 Hz');
  expect(product('comprag-f0308')).not.toHaveProperty('tankLiters');
  expect(product('swan-skr-30m')).not.toHaveProperty('powerKw');
  expect(product('swan-skr-30m').specifications).toContainEqual(expect.objectContaining({ label: 'Motorisation publiée, moteurs multiples (kW)', value: '5.5x4' }));
  for (const p of batch) {
   if (p.dutyCycle === undefined) expect(p.fieldSources).not.toHaveProperty('dutyCycle');
   if (p.tankLiters === undefined) expect(p.fieldSources).not.toHaveProperty('tankLiters');
  }
 });
 it('preserves contradictory Rotair source cells and excludes the unresolved identities', () => {
  expect(snapshot.review.documentedConflicts).toHaveLength(3);
  for (const conflict of snapshot.review.documentedConflicts) {
   const ref = conflict.ref;
   const pg = snapshot.sources.find(s => s.id === ref.sourceId).extractedPages.find(p => p.page === ref.page);
   expect(pg.tables[ref.tableIndex][ref.rowIndex][ref.columnIndex]).toBe(ref.raw);
   const converted = conflict.field === 'FAD' ? conflict.right.value * 28.316844 : conflict.right.value * 0.06894757;
   expect(Math.abs(converted - conflict.left.value) / conflict.left.value).toBeGreaterThan(0.05);
  }
  expect(batch.some(p => /^26 Y$|^52 Eco5$|^D 800 D$/i.test(p.model))).toBe(false);
  expect(product('rotair-mdvn-34-e').specifications).toContainEqual(expect.objectContaining({ label: 'Débit restitué publié, unités originales', value: '3400 lt/min / 120 cfm' }));
 });
 it('versions canonical primary URLs while keeping temporary signed asset redirects private', () => {
  expect(snapshot.sources).toHaveLength(97);
  for (const source of snapshot.sources) {
   expect(source.status).toBe(200);
   expect(source.captureMethod).toBe('original-response');
   expect(source.sha256).toMatch(/^[a-f0-9]{64}$/);
   if (source.id.startsWith('swan-')) {
    expect(source).not.toHaveProperty('resolvedUrl');
    expect(source.resolvedUrlSha256).toMatch(/^[a-f0-9]{64}$/);
    expect(source.redirectPolicy).toBe('Temporary public asset redirect retained only in private capture metadata.');
   }
  }
 });
 it('parses only declared decimal and thousands conventions', () => {
  expect(parseSourceNumbers('3* 1,105.4 (acfm)', 'english-thousands')).toEqual([3, 1105.4]);
  expect(parseSourceNumbers('3,4', 'decimal')).toEqual([3.4]);
  expect(() => parseSourceNumbers('1,10.5', 'english-thousands')).toThrow();
  expect(() => parseSourceNumbers('1,105.4', 'decimal')).toThrow();
 });
 const mutations = [
  ['delivered capacity replaced by intake', s => { s.compressors[0].flow.value++; }],
  ['pressure of measurement', s => { s.compressors[0].flow.pressure.value++; }],
  ['measured point promoted to a physical maximum', s => { s.compressors[0].maxPressureBasis = 'explicit-maximum-working-pressure'; }],
  ['unknown cycle promoted from qualitative language', s => { s.compressors.find(r => r.brand === 'Rotair').dutyCycle = 1; }],
  ['scope assigned to another NX model', s => { s.compressors.find(r => r.dutyScopeProof).dutyScopeProof.raw = 'NXB18'; }],
  ['unknown receiver changed to zero', s => { s.compressors.find(r => r.tank === null).tank = { value: 0, unit: 'L', ref: s.compressors[0].maximum.ref }; }],
  ['full capacity replaced by regulation minimum', s => { const r = s.compressors.find(r => r.flow.rangeMinimum); r.flow.value = r.flow.rangeMinimum.value; }],
  ['multi-motor power silently summed', s => { const r = s.compressors.find(r => r.model === 'SKR-30M'); r.power = { value: 22, unit: 'kW', ref: r.additionalFacts[0].ref }; }],
  ['visual transcription digest', s => { s.sources.find(r => r.extractedPages.some(p => p.visualReview)).extractedPages.find(p => p.visualReview).visualReview.pageImageSha256 = '0'.repeat(64); }],
  ['source HTTP status', s => { s.sources[0].status = 404; }],
  ['original response digest', s => { s.sources[0].sha256 = '0'.repeat(64); }],
  ['source credentials', s => { s.sources[0].url = 'https://u:p@us.fscurtis.com/doc.pdf'; }],
  ['source extract', s => { s.sources[0].extractedPages[0].text += ' inserted'; }],
  ['signed redirect digest', s => { s.sources.find(r => r.resolvedUrlSha256).resolvedUrlSha256 = '0'.repeat(64); }],
  ['contradictory original silently corrected', s => { s.review.documentedConflicts[0].right.value = 174; }],
 ];
 it.each(mutations)('refuses altered %s', (_label, mutate) => { const s = structuredClone(snapshot); mutate(s); expect(() => build(s)).toThrow(); });
});
