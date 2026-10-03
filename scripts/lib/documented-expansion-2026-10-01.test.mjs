import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { buildDocumentedExpansionOctober } from './documented-expansion-2026-10-01.mjs';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { compressors as publishedCompressors, tools as publishedTools } from '../../src/data/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { createRuntimeCatalog, runtimeCatalogSchema } from '../../src/domain/runtime-catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-expansion-2026-10-01.json', import.meta.url)));
const batch = buildDocumentedExpansionOctober(snapshot);
const byMpn = code => batch.tools.find(p => p.mpn === code);
const ample = batch.compressors.find(p => p.brand === 'Ceccato' && p.model === 'CSA 15' && p.maxPressureBar === 8 && p.tankLiters === 0);

describe('documented expansion, October 1', () => {
 it('validates 1200 distinct configurations, real references and dated source hashes', () => {
  expect(batch.compressors).toHaveLength(200);
  expect(batch.tools).toHaveLength(1000);
  expect(new Set([...batch.compressors, ...batch.tools].map(p => p.id)).size).toBe(1200);
  expect(new Set(batch.tools.map(p => `${p.brand}:${p.mpn}`)).size).toBe(1000);
  expect(new Set(batch.tools.map(p => p.brand))).toEqual(new Set(['Atlas Copco', 'Bosch', 'Dotco', 'Cleco', 'VESSEL', 'SP AIR']));
  for (const p of batch.compressors) compressorSchema.parse(p);
 for (const p of batch.tools) toolProfileSchema.parse(p);
  for (const p of [...batch.compressors, ...batch.tools]) {
   const ids = new Set(p.evidence.map(e => e.id));
   for (const id of Object.values(p.fieldSources).flat()) expect(ids.has(id), `${p.id}: ${id}`).toBe(true);
   for (const e of p.evidence) expect(e.notes).toMatch(/SHA-256 [a-f0-9]{64}/);
  }
 });
 it('keeps the published catalog identical to the reviewed import, including missing fields', () => {
  const actual = new Map([...publishedCompressors, ...publishedTools].map(p => [p.id, p]));
  for (const p of batch.compressors) assert.deepStrictEqual(actual.get(p.id), compressorSchema.parse(p), p.id);
  for (const p of batch.tools) assert.deepStrictEqual(actual.get(p.id), { ...toolProfileSchema.parse(p), category: toolCategoryLabel(p.categoryId) }, p.id);
 });
 it('keeps Ceccato FAD measurement pressure below the maximum and converts only published units', () => {
  const drb = batch.compressors.find(p => p.brand === 'Ceccato' && p.model === 'DRB 25' && p.maxPressureBar === 10 && p.tankLiters === 0);
  expect(drb.fadCurve).toEqual([{ pressureBar: 9.5, litersPerMinute: 2916.667 }]);
  expect(drb.oilType).toBe('unknown');
  const higherNeed = { ...byMpn('0607161100'), workingPressureBar: { min: 10, typical: 10, max: 10 } };
  expect(evaluateCompatibility(drb, higherNeed).verdict).toBe('insufficient_data');
  expect(ample.fadCurve).toEqual([{ pressureBar: 7.5, litersPerMinute: 1700 }]);
 });
 it('uses Bosch loaded and Atlas maximum flow while preserving the higher-pressure FAD bound', () => {
  expect(byMpn('0607154101').airflowLpm.typical).toBe(270);
  expect(byMpn('8423252501').airflowLpm.typical).toBe(1920);
  expect(evaluateCompatibility(ample, byMpn('0607154101')).verdict).toBe('continuous');
  expect(evaluateCompatibility(ample, byMpn('8423252501')).verdict).not.toBe('continuous');
 });
 it('never substitutes an idle or unqualified flow for loaded demand', () => {
  for (const code of ['0607450794', 'GT-BS20', 'SP-1145A', 'MP2464']) {
   expect(byMpn(code).airflowBasis).toMatch(/free-speed|unqualified/);
   expect(evaluateCompatibility(ample, byMpn(code)).verdict).toBe('insufficient_data');
  }
  expect(byMpn('MP2464').airflowLpm.typical).toBe(622.971);
 });
 it('withholds a conflicting Bosch unit pair without selecting a correction', () => {
  const p = byMpn('0607450593');
  expect(p.demandModel).toBe('variable-volume');
  expect(p.airflowLpm).toBeUndefined();
  expect(p.specifications.find(s => s.label.includes('contradictoires')).value).toContain('17.5 cfm');
  expect(evaluateCompatibility(ample, p).verdict).toBe('insufficient_data');
 });
 it('does not promote a 5 bar speed footnote into a nominal or maximum air-pressure rating', () => {
  const lows = snapshot.tools.filter(p => p.pressureMeasurementAmbiguous);
  expect(lows).toHaveLength(12);
  for (const row of lows) {
   const p = byMpn(row.mpn);
   expect(p.workingPressureBar).toEqual({});
   expect(p.airflowLpm).toBeUndefined();
   expect(p.specifications.find(s => s.label.includes('pression de mesure à confirmer')).value).toContain('exclue');
   expect(evaluateCompatibility(ample, p).verdict).toBe('insufficient_data');
   const runtime = createRuntimeCatalog([], [toolProfileSchema.parse(p)], '2026-10-01', 'a'.repeat(64));
   expect(runtimeCatalogSchema.parse(runtime).tools[0].workingPressureBar).toEqual({});
  }
 });
 it('keeps a turbine pressure maximum separate from an absent working point and airflow', () => {
  const p = byMpn('12R0380-13');
  expect(p.workingPressureBar).toEqual({ max: 6.205 });
  expect(p.airflowLpm).toBeUndefined();
  expect(evaluateCompatibility(ample, p).verdict).toBe('insufficient_data');
 });
 it('retains exact tool categories and distinguishes without-chuck configurations', () => {
  expect(byMpn('SP-7231AWC').categoryId).toBe('tronconneuse');
  expect(byMpn('GT-BS12').categoryId).toBe('ponceuse-bande');
  expect(byMpn('MP5187').categoryId).toBe('derouilleur-a-aiguilles');
  for (const p of batch.tools.filter(p => p.model.endsWith('sans mandrin'))) {
   expect(p.specifications.find(s => s.label.includes('Masse'))).toBeUndefined();
  }
  expect(batch.tools.some(p => p.mpn === 'SP-7252F')).toBe(false);
 });
 it('rejects altered measurement conditions, omitted uncertainty, unsupported units and missing provenance', () => {
  const mutations = [
   s => { s.compressors.find(p => p.brand === 'Ceccato').flows[0].pressureBar += .5; },
   s => { s.compressors.find(p => p.brand === 'RENNER').sourceColumn = 99; },
   s => { s.tools.find(p => p.brand === 'Bosch' && p.flowBasis === 'loaded').header = 'no-load'; },
   s => { s.tools.find(p => p.pressureMeasurementAmbiguous).pressureMeasurementAmbiguous = false; },
   s => { s.tools.find(p => p.mpn === '0607450593').unitConflict = false; },
   s => { s.tools.find(p => p.brand === 'VESSEL').flowBasis = 'maximum'; },
   s => { s.tools.find(p => p.brand === 'Dotco').flowBasis = 'maximum'; },
   s => { s.tools.find(p => p.flowBasis !== 'missing').flowUnit = 'invented'; },
   s => { s.sources[0].sha256 = ''; },
   s => { s.sources[0].url = 'javascript:alert(1)'; },
  ];
  for (const mutate of mutations) {
   const changed = structuredClone(snapshot); mutate(changed);
   expect(() => buildDocumentedExpansionOctober(changed)).toThrow();
  }
 });
});
