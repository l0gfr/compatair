import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { applyReviewedCatalogAmendment } from './reviewed-catalog-amendments-2026-10-14.mjs';

const { rows } = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-14.json', import.meta.url), 'utf8'));
const original = row => ({ id: row.id, brand: row.brand, model: row.model, mpn: row.mpn, ...structuredClone(row.before) });
describe('dated editorial amendments preserve the reconstructed source boundary', () => {
 it('does not change an unreviewed reference or silently adapt a changed identity or source', () => {
  const unknown = { id: 'unreviewed', dutyCycle: 0.7 };
  expect(applyReviewedCatalogAmendment(unknown)).toBe(unknown);
  for (const row of rows) {
   expect(() => applyReviewedCatalogAmendment({ ...original(row), mpn: 'different' })).toThrow('Identité');
   const changed = original(row); changed.editorial.overview += ' New source state.';
   expect(() => applyReviewedCatalogAmendment(changed)).toThrow('Base différente');
  }
 });
 it('retains Gentilin pressure-specific flow and historical evidence while withdrawing conflicting scalars', () => {
  const row = rows.find(x => x.id === 'gentilin-ac200-05');
  const product = { ...original(row), fadCurve: [{ pressureBar: 5, litersPerMinute: 115 }, { pressureBar: 8, litersPerMinute: 60 }] };
  const curve = structuredClone(product.fadCurve);
  applyReviewedCatalogAmendment(product);
  expect(product.fadCurve).toEqual(curve);
  expect(product.dutyCycle).toBeUndefined(); expect(product.weightKg).toBeUndefined();
  expect(product.fieldSources.dutyCycle).toBeUndefined(); expect(product.fieldSources.weightKg).toBeUndefined();
  expect(product.evidence.slice(0,row.before.evidence.length)).toEqual(row.before.evidence);
  expect(product.evidence).toHaveLength(row.before.evidence.length + 2);
  expect(product.editorial.limitations.join(' ')).toContain('S3 70 % / 100 %');
  expect(product.editorial.limitations.join(' ')).toContain('185');
  expect(applyReviewedCatalogAmendment(structuredClone(product))).toEqual(product);
 });
 it('retains Shinano maximum demand and pressure while adding the distinct comparison', () => {
  const row = rows.find(x => x.id === 'shinano-si-1052');
  const product = { ...original(row), airflowLpm: { min: 390, typical: 390, max: 390 }, workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 } };
  applyReviewedCatalogAmendment(product);
  expect(product.airflowLpm).toEqual({ min: 390, typical: 390, max: 390 });
  expect(product.workingPressureBar).toEqual({ min: 6.3, typical: 6.3, max: 6.3 });
  expect(product.editorial.verifiedFacts.join(' ')).toContain('84 L/min');
  expect(product.editorial.limitations.join(' ')).toContain('66 L/min');
 });
});
