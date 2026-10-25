import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';

const rows = new Map(JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-25.json', import.meta.url), 'utf8')).rows.map(row => [row.id, row]));
// Historical assertions inspect the exact earlier state. Current native/runtime
// reconstruction and qualification are checked separately in the dated suite.
export function beforeOctober25Review(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 for (const key of ['brand', 'model', 'mpn']) if ((product[key] ?? null) !== row[key]) throw new Error('Historical projection identity drift');
 for (const key of row.fields) {
  if (Object.hasOwn(product, key) !== Object.hasOwn(row.after, key) || (Object.hasOwn(row.after, key) && !isDeepStrictEqual(product[key], row.after[key]))) throw new Error(`Historical projection field drift: ${product.id}/${key}`);
 }
 const result = structuredClone(product);
 for (const key of row.fields) {
  if (Object.hasOwn(row.before, key)) result[key] = structuredClone(row.before[key]);
  else delete result[key];
 }
 return result;
}
