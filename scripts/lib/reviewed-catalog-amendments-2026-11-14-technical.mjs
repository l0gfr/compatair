import { applyReservedNovember15TechnicalFollowup, beforeReservedNovember15TechnicalIfApplied } from './reviewed-catalog-amendments-2026-11-15-technical.mjs';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { toolCategoryLabel } from '../../src/data/taxonomy.ts';

const bytes = readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-11-14-technical.json', import.meta.url));
if (createHash('sha256').update(bytes).digest('hex') !== '1892d16ed1aeb7beebcbaf0217a82812c1c605eb2a77348b6877a3758000e4f2') throw new Error('Reserved followup provenance changed');
const snapshot = JSON.parse(bytes);
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-11-14' || snapshot.sourceSha !== 'c703f2c8f282faab8748888d1c6b3d37795d1152' || snapshot.rows.length !== 32) throw new Error('Reserved followup scope changed');
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
export function applyReservedNovember14TechnicalFollowup(product) {
 product = beforeReservedNovember15TechnicalIfApplied(product);
 const row = rows.get(product.id);
 if (!row) return applyReservedNovember15TechnicalFollowup(product);
 for (const key of ['brand', 'model', 'mpn']) if (Object.hasOwn(product, key) !== Object.hasOwn(row.identity, key) || product[key] !== row.identity[key]) throw new Error('Reserved followup identity changed: ' + product.id);
 if (matches(product, row, 'after')) return applyReservedNovember15TechnicalFollowup(product);
 if (!matches(product, row, 'before')) throw new Error('Reserved followup base changed: ' + product.id);
 return applyReservedNovember15TechnicalFollowup(project(product, row, 'after'));
}
/** @template {{ id: string }} T @param {T} product @returns {T} */
export function beforeReservedNovember14TechnicalFollowup(product) {
 product = beforeReservedNovember15TechnicalIfApplied(product);
 const row = rows.get(product.id);
 if (!row) return product;
 if (matches(product, row, 'before')) return product;
 if (!matches(product, row, 'after')) throw new Error('Reserved followup historical drift: ' + product.id);
 return project(structuredClone(product), row, 'before');
}
// A constructor boundary can receive an earlier dated record or an already
// replayed one. Only an exact current state is projected; both amendment
// applicators still reject all unknown states through their normal guards.
export function beforeReservedNovember14TechnicalIfApplied(product) {
 product = beforeReservedNovember15TechnicalIfApplied(product);
 const row = rows.get(product.id);
 return row && matches(product, row, 'after') ? project(structuredClone(product), row, 'before') : product;
}
export function applyReservedNovember14TechnicalBatch(batch) {
 if (Array.isArray(batch)) return batch.map(applyReservedNovember14TechnicalFollowup);
 return { ...batch, compressors: batch.compressors.map(applyReservedNovember14TechnicalFollowup), tools: batch.tools.map(applyReservedNovember14TechnicalFollowup) };
}
