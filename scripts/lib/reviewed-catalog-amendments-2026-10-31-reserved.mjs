import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';

const bytes = readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-31-reserved.json', import.meta.url));
if (createHash('sha256').update(bytes).digest('hex') !== '218eabecf5220be0bf68808e7c501d5296a0313bc2d644f6ffc77619787261fc') throw new Error('Reserved followup provenance changed');
const snapshot = JSON.parse(bytes);
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-10-31' || snapshot.sourceSha !== 'fc2fceab2f716efc77d9e1839ebefd68e49b270f' || snapshot.rows.length !== 241) throw new Error('Reserved followup scope changed');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== snapshot.rows.length) throw new Error('Duplicate reserved followup identity');
for (const row of rows.values()) {
 if (!['tools', 'compressors'].includes(row.kind) || !/^[a-f0-9]{64}$/.test(row.beforeFileSha256) || !row.sourceReadings.length || row.sourceReadings.some(s => !/^[a-f0-9]{64}$/.test(s.hash))) throw new Error('Reserved followup source absent');
 if (!isDeepStrictEqual(row.after.evidence.slice(0, row.before.evidence.length), row.before.evidence) || row.after.evidence.length <= row.before.evidence.length) throw new Error('Reserved followup historical evidence changed');
}
function matches(product, row, state) {
 return row.fields.every(key => Object.hasOwn(product, key) === Object.hasOwn(row[state], key) && isDeepStrictEqual(product[key], row[state][key]));
}
function project(product, row, state) {
 for (const key of row.fields) {
  if (Object.hasOwn(row[state], key)) product[key] = structuredClone(row[state][key]);
  else delete product[key];
 }
 return product;
}
export function applyReservedOctober31Followup(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 for (const key of ['brand', 'model', 'mpn']) if (Object.hasOwn(product, key) !== Object.hasOwn(row.identity, key) || product[key] !== row.identity[key]) throw new Error('Reserved followup identity changed: ' + product.id);
 if (matches(product, row, 'after')) return product;
 if (!matches(product, row, 'before')) throw new Error('Reserved followup base changed: ' + product.id);
 return project(product, row, 'after');
}
/** @template {{ id: string }} T @param {T} product @returns {T} */
export function beforeReservedOctober31Followup(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 if (matches(product, row, 'before')) return product;
 if (!matches(product, row, 'after')) throw new Error('Reserved followup historical drift: ' + product.id);
 return project(structuredClone(product), row, 'before');
}
export function applyReservedOctober31Batch(batch) {
 if (Array.isArray(batch)) return batch.map(applyReservedOctober31Followup);
 return { ...batch, compressors: batch.compressors.map(applyReservedOctober31Followup), tools: batch.tools.map(applyReservedOctober31Followup) };
}
