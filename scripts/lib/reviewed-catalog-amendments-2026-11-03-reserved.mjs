import { applyReservedNovember6Followup, beforeReservedNovember6IfApplied } from './reviewed-catalog-amendments-2026-11-06-followup.mjs';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { toolCategoryLabel } from '../../src/data/taxonomy.ts';

const bytes = readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-11-03-reserved.json', import.meta.url));
if (createHash('sha256').update(bytes).digest('hex') !== '5f9dcb8c7e0cc5f8db5409edf336c07f8265dac3777a6b24f9d4d61caffff4ad') throw new Error('Reserved followup provenance changed');
const snapshot = JSON.parse(bytes);
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-11-03' || snapshot.sourceSha !== 'c582d5d3a14cc9bb51789f6ddd0fd22ad1b90d93' || snapshot.rows.length !== 399) throw new Error('Reserved followup scope changed');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== snapshot.rows.length) throw new Error('Duplicate reserved followup identity');
for (const row of rows.values()) {
 if (!['tools', 'compressors'].includes(row.kind) || !/^[a-f0-9]{64}$/.test(row.beforeFileSha256) || !row.sourceReadings.length || row.sourceReadings.some(s => !/^[a-f0-9]{64}$/.test(s.hash))) throw new Error('Reserved followup source absent');
 if (!isDeepStrictEqual(row.after.evidence.slice(0, row.before.evidence.length), row.before.evidence) || row.after.evidence.length <= row.before.evidence.length) throw new Error('Reserved followup historical evidence changed');
}
function matches(product, row, state) {
 return row.fields.every(key => Object.hasOwn(product, key) === Object.hasOwn(row[state], key) && (isDeepStrictEqual(product[key], row[state][key])
  || key === 'category' && row.kind === 'tools' && product.categoryId === row[state].categoryId && product.category === toolCategoryLabel(product.categoryId)));
}
function project(product, row, state) {
 for (const key of row.fields) {
  if (Object.hasOwn(row[state], key)) product[key] = structuredClone(row[state][key]);
  else delete product[key];
 }
 return product;
}
export function applyReservedNovember3Followup(product) {
 product = beforeReservedNovember6IfApplied(product);
 const row = rows.get(product.id);
 if (!row) return applyReservedNovember6Followup(product);
 for (const key of ['brand', 'model', 'mpn']) if (Object.hasOwn(product, key) !== Object.hasOwn(row.identity, key) || product[key] !== row.identity[key]) throw new Error('Reserved followup identity changed: ' + product.id);
 if (matches(product, row, 'after')) return applyReservedNovember6Followup(product);
 if (!matches(product, row, 'before')) throw new Error('Reserved followup base changed: ' + product.id);
 return applyReservedNovember6Followup(project(product, row, 'after'));
}
/** @template {{ id: string }} T @param {T} product @returns {T} */
export function beforeReservedNovember3Followup(product) {
 product = beforeReservedNovember6IfApplied(product);
 const row = rows.get(product.id);
 if (!row) return product;
 if (matches(product, row, 'before')) return product;
 if (!matches(product, row, 'after')) throw new Error('Reserved followup historical drift: ' + product.id);
 return project(structuredClone(product), row, 'before');
}
// A constructor boundary can receive an earlier dated record or an already
// replayed one. Only an exact current state is projected; both amendment
// applicators still reject all unknown states through their normal guards.
export function beforeReservedNovember3IfApplied(product) {
 product = beforeReservedNovember6IfApplied(product);
 const row = rows.get(product.id);
 return row && matches(product, row, 'after') ? project(structuredClone(product), row, 'before') : product;
}
export function applyReservedNovember3Batch(batch) {
 if (Array.isArray(batch)) return batch.map(applyReservedNovember3Followup);
 return { ...batch, compressors: batch.compressors.map(applyReservedNovember3Followup), tools: batch.tools.map(applyReservedNovember3Followup) };
}
