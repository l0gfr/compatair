import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../../src/data/catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { applyReviewedCompressorDuty } from './reviewed-compressor-duty.mjs';

const reviewed = JSON.parse(readFileSync(new URL('../../src/data/imports/compressor-duty-reviewed-2026-09-27.json', import.meta.url), 'utf8'));
describe('reviewed continuous-duty evidence', () => {
 it('links all 379 exact identities to their separately dated manufacturer evidence', () => {
  expect(reviewed.rows.filter(row => row.brand === 'ABAC')).toHaveLength(267);
  expect(reviewed.rows.filter(row => row.brand === 'Fini')).toHaveLength(112);
  for (const row of reviewed.rows) {
   const product = compressors.find(item => item.id === row.id);
   expect(product, row.id).toMatchObject({ brand: row.brand, model: row.model, mpn: row.mpn, dutyCycle: 1 });
   const source = reviewed.sources.find(item => item.id === row.sourceId);
   const evidence = product.evidence.find(item => product.fieldSources.dutyCycle.includes(item.id));
   expect(evidence).toMatchObject({ sourceUrl: source.url, retrievedAt: '2026-09-27', sourceType: 'manufacturer' });
   expect(product.editorial.limitations.join(' ')).not.toContain('Le taux de marche continu n’est pas établi');
  }
 });
 it('never infers duty from a brand or technology and rejects contradictory identities or values', () => {
  const unknown = { id: 'abac-unreviewed-screw', brand: 'ABAC' };
  expect(applyReviewedCompressorDuty(unknown)).toBe(unknown);
  expect(unknown.dutyCycle).toBeUndefined();
  const product = compressors.find(item => item.id === reviewed.rows[0].id);
  expect(() => applyReviewedCompressorDuty({ ...product, mpn: 'different' })).toThrow('Identité');
  expect(() => applyReviewedCompressorDuty({ ...product, dutyCycle: .5 })).toThrow('contradictoire');
  expect(applyReviewedCompressorDuty(structuredClone(product))).toEqual(product);
 });
 it('unblocks proven supply while preserving average-only and pressure-bound guards', () => {
  const product = compressors.find(item => item.id === 'abac-formula-11-10-400-50');
  const tool = tools.find(item => item.id === 'chicago-pneumatic-cp7748');
  expect(evaluateCompatibility({ ...product, dutyCycle: undefined }, tool).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product, tool).verdict).toBe('continuous');
  expect(evaluateCompatibility(product, { ...tool, airflowLpm: { min: 2000, typical: 2000, max: 2000 } }).verdict).toBe('insufficient_data');
  expect(evaluateCompatibility(product, tools.find(item => item.id === 'm7-nc-4610')).verdict).toBe('insufficient_data');
 });
});
