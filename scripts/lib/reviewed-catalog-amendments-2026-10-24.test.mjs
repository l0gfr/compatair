import { beforeOctober25Review } from './reviewed-catalog-test-projection.mjs';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parseCatalogProductSource } from './catalog-tooling.mjs';
import { applyReviewedOctober24Amendment } from './reviewed-catalog-amendments-2026-10-24.mjs';

const { rows, technicalCards } = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-24.json', import.meta.url), 'utf8'));
const corrections = new Map(JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-24-b.json', import.meta.url), 'utf8')).rows.map(row => [row.id, row]));
const beforeTechnicalCorrection = product => {
 const row = corrections.get(product.id);
 if (!row) return product;
 for (const key of row.fields) {
  expect(Object.hasOwn(product, key), `${product.id}:${key}`).toBe(Object.hasOwn(row.after, key));
  if (Object.hasOwn(row.after, key)) expect(product[key], `${product.id}:${key}`).toEqual(row.after[key]);
  if (Object.hasOwn(row.before, key)) product[key] = structuredClone(row.before[key]);
  else delete product[key];
 }
 return product;
};
const products = new Map();
const native = id => {
 if (!products.has(id)) {
  const kind = ['sableuse-', 'pistolet-', 'biax-', 'fiam-', 'nitto-', 'red-rooster-'].some(prefix => id.startsWith(prefix)) ? 'tools' : 'compressors';
  products.set(id, parseCatalogProductSource(kind, readFileSync(new URL(`../../src/data/products/${kind}/${id}.ts`, import.meta.url), 'utf8')));
 }
 return beforeTechnicalCorrection(beforeOctober25Review(structuredClone(products.get(id))));
};
const original = row => {
 const product = native(row.id);
 for (const field of row.fields) product[field] = structuredClone(row.before[field]);
 return product;
};

describe('October 24 reviewed editorial comparisons', () => {
 it('reconstructs all 22 exact native pages while preserving engine inputs, limits, facts, historical evidence and technical cards', () => {
  expect(rows).toHaveLength(22);
  expect(new Set(rows.map(row => row.id)).size).toBe(22);
  expect(technicalCards).toEqual([]);
  for (const row of rows) {
   expect(row.fields.every(field => ['editorial', 'evidence'].includes(field)), row.id).toBe(true);
   const before = original(row), after = applyReviewedOctober24Amendment(structuredClone(before));
   expect(after, row.id).toEqual(native(row.id));
   for (const key of Object.keys(before).filter(key => !['editorial', 'evidence'].includes(key))) expect(after[key], `${row.id}:${key}`).toEqual(before[key]);
   expect(after.editorial.verifiedFacts, row.id).toEqual(before.editorial.verifiedFacts);
   expect(after.editorial.limitations, row.id).toEqual(before.editorial.limitations);
   expect(after.evidence.slice(0, before.evidence.length), row.id).toEqual(before.evidence);
   expect(applyReviewedOctober24Amendment(structuredClone(after)), row.id).toEqual(after);
  }
 });
 it('rejects identity or reviewed-base drift and never masks unrelated technical corruption', () => {
  const unknown = { id: 'unreviewed', editorial: { overview: 'Unchanged' } };
  expect(applyReviewedOctober24Amendment(unknown)).toBe(unknown);
  for (const row of rows) {
   for (const identity of ['brand', 'model', 'mpn']) expect(() => applyReviewedOctober24Amendment({ ...original(row), [identity]: 'unreviewed' }), `${row.id}:${identity}`).toThrow('Identité');
   const drift = original(row);
   drift.editorial.overview += ' Unreviewed change.';
   expect(() => applyReviewedOctober24Amendment(drift), row.id).toThrow('Base différente');
   const technicalDrift = original(row);
   technicalDrift.confidence = 'unreviewed-corruption';
   expect(applyReviewedOctober24Amendment(technicalDrift).confidence, row.id).toBe('unreviewed-corruption');
   expect(technicalDrift, row.id).not.toEqual(native(row.id));
  }
 });
});
