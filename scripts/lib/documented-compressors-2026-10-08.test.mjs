import { readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { compressorSchema } from '../../src/domain/catalog';
import { rawCompressors } from '../../src/data/products/compressors';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { technicalCardSvg, generatedTechnicalCardDimensions } from './technical-card.mjs';
import { productTechnicalSvgError, MAX_PRODUCT_IMAGE_BYTES } from './catalog-tooling.mjs';
import { buildDocumentedCompressorsOctober8 as build, documentedCompressorIdentity as identity, parseSourceNumbers } from './documented-compressors-2026-10-08.mjs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-compressors-2026-10-08.json', import.meta.url)));
const batch = build(snapshot);
const byId = new Map(batch.map(p => [p.id, p]));
const demand = pressure => ({ id: 'fixture', demandModel: 'fixed-flow', workingPressureBar: { min: pressure, typical: pressure, max: pressure }, airflowLpm: { min: 100, typical: 100, max: 100 }, confidence: 'B' });
const rawProduct = id => {
 const text = readFileSync(new URL(`../../src/data/products/compressors/${id}.ts`, import.meta.url), 'utf8');
 return JSON.parse(text.slice(text.indexOf('= {') + 2, text.lastIndexOf('}') + 1));
};

describe('October 8 original compressor documents', () => {
 it('adds 200 genuine identities with model, MPN and alias deduplication against the 4959 baseline', () => {
  expect(batch).toHaveLength(200);
  expect(Object.fromEntries(Object.entries(Object.groupBy(batch, p => p.brand)).map(([k, v]) => [k, v.length]))).toEqual({ Rolair: 97, 'Sullivan-Palatek': 38, AIRMAN: 48, 'Anest Iwata': 17 });
  expect(byId.size).toBe(200);
  const old = rawCompressors.filter(p => !byId.has(p.id));
  expect(old).toHaveLength(4959);
  const identities = new Set();
  for (const p of old) for (const code of [p.model, p.mpn, ...(p.identifierAliases ?? []).map(a => a.value)]) if (code) identities.add(identity(`${p.brand} ${code}`));
  expect(new Set(snapshot.compressors.map(p => p.normalizedIdentity)).size).toBe(200);
  const rawById = new Map(rawCompressors.map(p => [p.id, p]));
  expect(rawById.size).toBe(rawCompressors.length);
  for (const p of batch) {
   expect(identities.has(identity(`${p.brand} ${p.model}`)), p.id).toBe(false);
   expect(rawProduct(p.id), p.id).toEqual(p);
   expect(rawById.get(p.id), p.id).toEqual(p);
   expect(compressorSchema.parse(p).maxPressureBasis).toBe(p.maxPressureBasis);
  }
  expect(batch.some(p => p.model === 'FC229MK103' || p.model === 'FCOL22LS6')).toBe(false);
 });
 it('preserves actual delivered points and native units without substituting displacement or an engine output', () => {
  expect(byId.get('rolair-h15130k17').fadCurve).toEqual([{ pressureBar: 6.895, litersPerMinute: 195.386 }]);
  expect(byId.get('rolair-fc2002').fadCurve).toEqual([{ pressureBar: 6.205, litersPerMinute: 116.099 }]);
  expect(byId.get('airman-pds80s-5c5').fadCurve).toEqual([{ pressureBar: 7, litersPerMinute: 2300 }]);
  expect(byId.get('anest-iwata-slpa-07ed').fadCurve).toEqual([{ pressureBar: 8, litersPerMinute: 60 }]);
  expect(byId.get('sullivan-palatek-d-20').fadCurve).toEqual([{ pressureBar: 8.618, litersPerMinute: 2271.011 }]);
  for (const p of batch) {
   expect(p).not.toHaveProperty('intakeFlowLpm');
   expect(p.fadCurve).toHaveLength(1);
   expect(p.fieldSources.fadCurve.length).toBeGreaterThan(0);
   if (p.brand === 'AIRMAN' || p.brand === 'Sullivan-Palatek' || p.brand === 'Rolair') expect(p).not.toHaveProperty('powerKw');
  }
 });
 it('qualifies Rolair delivered air with its manufacturer definition without asserting ISO1217', () => {
  for (const p of batch.filter(p => p.brand === 'Rolair')) {
   expect(p.fieldSources.fadCurve).toContain('october8-rolair-faq-p1');
   expect(p.editorial.limitations.some(t => /atmosphériques/.test(t))).toBe(true);
  }
  expect(byId.get('rolair-h15130k17').specifications).toContainEqual(expect.objectContaining({ label: 'Déplacement publié, distinct du débit livré', value: '10.1 @ 100 PSI' }));
 });
 it('distinguishes 18 proven maxima and 182 pressure ceilings, and suspends decisions beyond measured air', () => {
  expect(batch.filter(p => p.maxPressureBasis === 'explicit-maximum-working-pressure')).toHaveLength(18);
  expect(batch.filter(p => p.maxPressureBasis === 'selected-working-pressure-ceiling')).toHaveLength(182);
  for (const p of batch) expect(p.fieldSources.maxPressureBasis.length).toBeGreaterThan(0);
  expect(evaluateCompatibility(byId.get('rolair-h15130k17'), demand(7)).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(byId.get('airman-pds80s-5c5'), demand(7.1)).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(byId.get('anest-iwata-slpa-15e'), demand(8.1)).verdict).toBe('incompatible');
  const ps200 = byId.get('rolair-ps200pc');
  expect(ps200.maxPressureBar).toBe(13.79);
  expect(ps200.fadCurve[0].pressureBar).toBe(6.205);
  expect(evaluateCompatibility(ps200, demand(7)).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(ps200, demand(13.8)).verdict).toBe('incompatible');
 });
 it('does not promote S1 motors or conditional constant-speed prose into a compressor cycle', () => {
  const continuous = batch.filter(p => p.dutyCycle !== undefined);
  expect(continuous.map(p => p.model).sort()).toEqual(['3095K18','5230K30CS','5715MK103']);
  for (const r of snapshot.compressors.filter(p => p.dutyProof)) {
   expect(r.dutyCycle).toBe(1);
   expect(r.dutyProof.sourceId).toBe(r.dutyScopeProof.sourceId);
   expect(r.dutyScopeProof.raw).toBe(r.model);
  }
  expect(byId.get('rolair-fc2002hbp6')).not.toHaveProperty('dutyCycle');
  expect(byId.get('rolair-6820k17d')).not.toHaveProperty('dutyCycle');
  expect(byId.get('sullivan-palatek-sp11-25vfd')).not.toHaveProperty('dutyCycle');
  expect(evaluateCompatibility(byId.get('airman-pds80s-5c5'), demand(6.3)).verdict).toBe('insufficient_data');
 });
 it('imports only explicit litres, preserves native gallons and never borrows a market variant tank', () => {
  expect(batch.filter(p => p.tankLiters !== undefined)).toHaveLength(19);
  expect(byId.get('rolair-gd5000pv5h').tankLiters).toBe(18.9);
  expect(byId.get('rolair-fc2002').tankLiters).toBe(16);
  expect(byId.get('rolair-jc10plus')).not.toHaveProperty('tankLiters');
  expect(byId.get('rolair-h15130k17')).not.toHaveProperty('tankLiters');
  expect(byId.get('airman-pds80s-5c5')).not.toHaveProperty('tankLiters');
  expect(byId.get('anest-iwata-slpa-15e')).not.toHaveProperty('tankLiters');
  expect(byId.get('anest-iwata-slpa-15ed-90').tankLiters).toBe(90);
  expect(byId.get('anest-iwata-slpa-07ed').tankLiters).toBe(5);
  expect(batch.some(p => p.tankLiters === 0)).toBe(false);
 });
 it('preserves true receiver, dryer, phase and VFD configurations without pressure/frequency synthesis', () => {
  expect(byId.get('anest-iwata-slpa-15e-90').weightKg).toBe(175);
  expect(byId.get('anest-iwata-slpa-15ed-90').weightKg).toBe(225);
  expect(byId.get('anest-iwata-slpa-110e').powerKw).toBe(11);
  expect(byId.get('anest-iwata-slpa-300e').powerKw).toBe(30);
  expect(byId.get('anest-iwata-slpa-15e').phase).toBe('single-phase');
  expect(byId.get('anest-iwata-slpa-22e-t').phase).toBe('three-phase');
  expect(byId.get('anest-iwata-slpa-22e-t').voltage).toBe('415 V');
  expect(byId.get('rolair-h3330k18').phase).toBe('three-phase');
  expect(byId.get('rolair-h3130k18').phase).toBe('single-phase');
  expect(batch.filter(p => p.model.endsWith('VFD'))).toHaveLength(10);
  expect(byId.get('sullivan-palatek-sp25-300vfd').fadCurve[0].pressureBar).toBe(10.342);
  expect(batch.filter(p => p.variant.distinguishingAttributes.fréquence)).toHaveLength(111);
 });
 it('keeps kg net or operating mass distinct from shipment and preserves acoustic conditions', () => {
  expect(batch.filter(p => p.weightKg !== undefined)).toHaveLength(65);
  expect(byId.get('airman-pds80s-5c5').weightKg).toBe(435);
  expect(byId.get('rolair-3095k18')).not.toHaveProperty('weightKg');
  expect(byId.get('airman-pds80s-5c5')).not.toHaveProperty('noiseDb');
  expect(byId.get('anest-iwata-slpa-07e').noiseDb).toBe(49);
  expect(byId.get('anest-iwata-slpa-07e').specifications).toContainEqual(expect.objectContaining({ label: 'Conditions de mesure du bruit', value: 'Noise level measured at a distance of 1M according to ISO11201; tolerance±3dB' }));
  expect(byId.get('airman-pds130sc-5c3').oilType).toBe('unknown');
 });
 it('separates the SLPA-07 dryer dew point from equipment and preserves its native Celsius unit', () => {
  const page = snapshot.sources.find(s => s.id === 'iwata-energy').extractedPages.find(p => p.page === 4);
  expect(page.tables[0][0][10]).toBe('Dryer pressure dew point (°C)');
  expect(page.tables[0][1][10]).toBe('-');
  expect(page.tables[0][2][10]).toBe('15');
  const dry = byId.get('anest-iwata-slpa-07ed');
  expect(dry.variant.label).toBe('Scroll oil-free, cuve interne 5 L, avec sécheur');
  expect(dry.specifications).toContainEqual({ label: 'Point de rosée sous pression du sécheur publié', value: '15 °C', evidenceIds: ['october8-iwata-energy-p4'] });
  const standard = byId.get('anest-iwata-slpa-07e');
  expect(standard.variant.label).toBe('Scroll oil-free, cuve interne 5 L');
  expect(standard.specifications.some(f => /Point de rosée/.test(f.label))).toBe(false);
  expect(standard.editorial.limitations.some(t => /aucune température chiffrée ni absence de sécheur/.test(t))).toBe(true);
 });
 it('identifies the NIST conversion reference as institutional rather than manufacturer documentation', () => {
  const references = batch.flatMap(p => p.evidence.filter(e => e.id === 'october8-nist-conversions-p1'));
  expect(references).toHaveLength(135);
  for (const e of references) {
   expect(e.sourceLabel).toBe('NIST SP811 B.8, facteurs de conversion, référence institutionnelle');
   expect(e.sourceUrl).toContain('https://www.nist.gov/');
  }
 });
 it('retains contrary original cells and excludes uncertain codes without silently correcting them', () => {
  const conflict = snapshot.review.documentedConflicts[0];
  expect(conflict.model).toBe('PDS670SD-4C5');
  expect(conflict.refs.map(r => r.raw)).toEqual(['19.0 [71]','19.0 [671]']);
  expect(byId.get('airman-pds670sd-4c5').fadCurve).toEqual([{ pressureBar: 7, litersPerMinute: 19000 }]);
  expect(byId.get('rolair-jc10plus').specifications).toContainEqual(expect.objectContaining({ value: 'CAPACIDAD DEL TANQUE 8,7 LITERS' }));
  expect(byId.get('rolair-fc2002hbp6').specifications).toContainEqual(expect.objectContaining({ value: '6 galones (23 litros)' }));
  expect(batch.some(p => ['PDSF100SC-5C3','PDS100LC-5C5','SLPA-151E','SLPA-221E-T'].includes(p.model))).toBe(false);
 });
 it('seals primary originals, technical excerpts and visual reviews without versioning complete documents', () => {
  expect(snapshot.sources).toHaveLength(108);
  expect(snapshot.sources.reduce((n,s) => n+s.bytes,0)).toBe(59781071);
  for (const s of snapshot.sources) {
   expect(s.status).toBe(200);
   expect(s.captureMethod).toBe('original-response');
   expect(s.sha256).toMatch(/^[a-f0-9]{64}$/);
   expect(s.observedAt).toMatch(/^2026-10-08T/);
   expect(createHash('sha256').update(JSON.stringify(s.extractedPages)).digest('hex')).toBe(s.extractedPagesSha256);
   expect(s.extractedPages.map(p => p.text).join(' ')).not.toMatch(/cookie|copyright|facebook|privacy policy|site map/i);
  }
 });
 it('publishes only the byte-exact controlled 1200 by 800 SVG cards within image budgets', () => {
  for (const p of batch) {
   const url = new URL(`../../public${p.image.src}`, import.meta.url), svg = readFileSync(url, 'utf8');
   expect(svg,p.id).toBe(technicalCardSvg(p,'compressors'));
   expect(generatedTechnicalCardDimensions(svg)).toEqual({ width: 1200, height: 800 });
   expect(productTechnicalSvgError(p,'compressors',svg)).toBeNull();
   expect(Buffer.byteLength(svg)).toBeLessThanOrEqual(MAX_PRODUCT_IMAGE_BYTES);
   expect(statSync(url).mode & 0o777).toBe(0o644);
   expect(svg).not.toMatch(/<script|(?:href|onload|onclick)=|<foreignObject|<image\b/i);
  }
 });
 it('fails closed on ambiguous decimal conventions or absent source numbers', () => {
  expect(parseSourceNumbers('1,5')).toEqual([1.5]);
  expect(parseSourceNumbers('19.0 [671]')).toEqual([19,671]);
  expect(parseSourceNumbers('-')).toEqual([]);
  expect(() => parseSourceNumbers('1,105.4')).toThrow();
  expect(() => parseSourceNumbers(undefined)).toThrow();
 });
 const mutations = [
  ['delivered air replaced by intake', s => { s.compressors[0].flow.value = 10.1; }],
  ['FAD pressure', s => { s.compressors[0].flow.pressure.value++; }],
  ['measured point promoted to a mechanical maximum', s => { s.compressors[0].maxPressureBasis = 'explicit-maximum-working-pressure'; }],
  ['motor S1 promoted to continuous compressor cycle', s => { s.compressors.find(r => r.model === 'FC2002HBP6').dutyCycle = 1; }],
  ['model suffix silently borrowed from a base machine', s => { s.compressors.find(r => r.model === '6820K17D').model = '6820K17'; }],
  ['unknown gallons assigned US litres', s => { s.compressors[0].tank = { value:113.562,unit:'L',ref:s.compressors[0].modelProof }; }],
  ['unknown tank transformed to zero', s => { s.compressors[0].tank = { value:0,unit:'L',ref:s.compressors[0].modelProof }; }],
  ['multi-motor total silently recomputed', s => { s.compressors.find(r => r.model === 'SLPA-110E').power.value = 11.1; }],
  ['shipping mass assigned to operating weight', s => { s.compressors.find(r => r.brand === 'AIRMAN').weight.ref.numberIndex = 0; }],
  ['HTTP source status', s => { s.sources[0].status = 404; }],
  ['original SHA', s => { s.sources[0].sha256 = '0'.repeat(64); }],
  ['HTML excerpt', s => { s.sources[0].extractedPages[0].text += ' inserted'; }],
  ['PDF rendered evidence', s => { s.sources.find(r => r.extractedPages.some(p => p.visualReview)).extractedPages.find(p => p.visualReview).visualReview.pageImageSha256 = '0'.repeat(64); }],
  ['untrusted source URL', s => { s.sources[0].url = 'https://u:p@example.invalid/file'; }],
  ['contradictory native unit silently corrected', s => { s.review.documentedConflicts[0].refs[0].raw = '19.0 [671]'; }],
 ];
 it.each(mutations)('refuses altered %s', (_label, mutate) => { const s=structuredClone(snapshot);mutate(s);expect(() => build(s)).toThrow(); });
});
