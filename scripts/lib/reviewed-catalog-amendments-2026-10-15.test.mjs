import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { applyReviewedOctober15Amendment } from './reviewed-catalog-amendments-2026-10-15.mjs';
const { rows } = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-15.json', import.meta.url), 'utf8'));
const original = row => ({ id: row.id, brand: row.brand, model: row.model, mpn: row.mpn, ...structuredClone(row.before) });
describe('October 15 editorial corrections preserve exact technical provenance', () => {
 it('rejects a changed identity or source base and leaves unreviewed references intact', () => {
  const unknown = { id: 'unreviewed', dutyCycle: 0.7 };
  expect(applyReviewedOctober15Amendment(unknown)).toBe(unknown);
  for (const row of rows) {
   expect(() => applyReviewedOctober15Amendment({ ...original(row), mpn: 'other' })).toThrow('Identité');
   const changed = original(row); changed.editorial.overview += ' Changed.';
   expect(() => applyReviewedOctober15Amendment(changed)).toThrow('Base différente');
  }
 });
 it('preserves sourced flow and old evidence while withdrawing the conflicting AC400 duty', () => {
  const row = rows.find(x => x.id === 'gentilin-ac400-20');
  const product = { ...original(row), fadCurve: [{ pressureBar: 5, litersPerMinute: 185 }, { pressureBar: 8, litersPerMinute: 130 }] };
  applyReviewedOctober15Amendment(product);
  expect(product.fadCurve).toEqual([{ pressureBar: 5, litersPerMinute: 185 }, { pressureBar: 8, litersPerMinute: 130 }]);
  expect(product.dutyCycle).toBeUndefined(); expect(product.fieldSources.dutyCycle).toBeUndefined();
  expect(product.evidence.slice(0,row.before.evidence.length)).toEqual(row.before.evidence);
  expect(product.editorial.limitations.join(' ')).toContain('S3 70 %');
  expect(product.editorial.limitations.join(' ')).toContain('100 %');
  expect(applyReviewedOctober15Amendment(structuredClone(product))).toEqual(product);
 });
 it('changes only editorial fields for tools, retaining their maximum demand and pressure', () => {
  for (const row of rows.filter(x=>x.brand === 'Shinano')) {
   const product = { ...original(row), airflowLpm: { typical: 594 }, workingPressureBar: { typical: 6.3 } };
   applyReviewedOctober15Amendment(product);
   expect(product.airflowLpm).toEqual({ typical: 594 });
   expect(product.workingPressureBar).toEqual({ typical: 6.3 });
  }
 });
});
