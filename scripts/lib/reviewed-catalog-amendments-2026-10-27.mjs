import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';

const allowed = new Map([
 ['pistolet-peinture-hvlp-sata-satajet-100-b-f-hvlp-1-7-145722', ['notes', 'evidence', 'fieldSources']],
 ['biax-bew-309-e', ['categoryId', 'category', 'evidence', 'fieldSources']],
]);
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-27.json', import.meta.url), 'utf8'));
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-10-27' || !Array.isArray(snapshot.rows) || snapshot.rows.length !== allowed.size) throw new Error('Amendements du27octobre non reconnus.');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== allowed.size) throw new Error('Amendement du27octobre dupliqué.');
for (const row of rows.values()) {
 const fields = allowed.get(row.id);
 if (row.kind !== 'tools' || !fields || !isDeepStrictEqual(row.fields, fields) || !['brand', 'model', 'mpn'].every(key => typeof row[key] === 'string' && row[key]) || !/^[a-f0-9]{40}$/.test(row.sourceSha) || ![row.beforeFileSha256, row.sourceDocumentSha256].every(hash => /^[a-f0-9]{64}$/.test(hash))) throw new Error('Périmètre ou provenance du27octobre invalide.');
 for (const state of ['before', 'after']) if (!row[state] || typeof row[state] !== 'object' || Array.isArray(row[state]) || !isDeepStrictEqual(Object.keys(row[state]).sort(), [...fields].sort())) throw new Error('Champs du27octobre incomplets.');
}
function matches(product, row, state) {
 return ['brand', 'model', 'mpn'].every(key => product[key] === row[key]) && row.fields.every(key => Object.hasOwn(product, key) === Object.hasOwn(row[state], key) && isDeepStrictEqual(product[key], row[state][key]));
}
function project(product, row, state) {
 for (const field of row.fields) product[field] = structuredClone(row[state][field]);
 return product;
}
export function applyReviewedOctober27Amendment(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 if (!['brand', 'model', 'mpn'].every(key => product[key] === row[key])) throw new Error('Identité différente du27octobre.');
 if (matches(product, row, 'after')) return product;
 if (!matches(product, row, 'before')) throw new Error('Base différente du27octobre.');
 return project(product, row, 'after');
}
export function beforeOctober27Amendment(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 if (matches(product, row, 'before')) return product;
 if (!matches(product, row, 'after')) throw new Error('Historical October27 field drift: ' + product.id);
 return project(structuredClone(product), row, 'before');
}
