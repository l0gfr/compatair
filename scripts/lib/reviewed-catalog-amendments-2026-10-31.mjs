import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';

const allowed = new Map([
 ["pistolet-peinture-hvlp-prowin-k-528m-10", { kind: 'tools', fields: ['editorial', 'evidence', 'fieldSources'] }],
 ["gentilin-clinic-8-90", { kind: 'compressors', fields: ['editorial', 'evidence', 'fieldSources'] }],
 ["worthington-creyssensac-rlr-1000-50-hz-8-bar-pack-au-sol", { kind: 'compressors', fields: ['editorial', 'evidence', 'fieldSources'] }],
]);
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-31.json', import.meta.url), 'utf8'));
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-10-31' || !Array.isArray(snapshot.rows) || snapshot.rows.length !== allowed.size) throw new Error('Amendements du 31 octobre non reconnus.');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== allowed.size) throw new Error('Amendement du 31 octobre dupliqué.');
for (const row of rows.values()) {
 const contract = allowed.get(row.id);
 if (!contract || row.kind !== contract.kind || !isDeepStrictEqual(row.fields, contract.fields)
  || row.sourceSha !== '293ff33782ba31a2a0ecfb0735f13a3436223f8f'
  || ![row.beforeFileSha256, row.sourceDocumentSha256].every(hash => /^[a-f0-9]{64}$/.test(hash))
  || ![2, '\t'].includes(row.sourceIndentation)
  || !row.identity || !['brand', 'model'].every(key => typeof row.identity[key] === 'string' && row.identity[key])
  || Object.keys(row.identity).some(key => !['brand', 'model', 'mpn'].includes(key))
  || Object.values(row.identity).some(value => typeof value !== 'string' || !value)) throw new Error('Périmètre ou provenance du 31 octobre invalide.');
 for (const state of ['before', 'after']) if (!row[state] || typeof row[state] !== 'object' || Array.isArray(row[state]) || !isDeepStrictEqual(Object.keys(row[state]).sort(), [...row.fields].sort())) throw new Error('Champs du 31 octobre incomplets.');
 if (!isDeepStrictEqual(row.after.evidence.slice(0, row.before.evidence.length), row.before.evidence) || row.after.evidence.length <= row.before.evidence.length) throw new Error('Preuves historiques du 31 octobre altérées.');
}
function identityMatches(product, row) {
 return ['brand', 'model', 'mpn'].every(key => Object.hasOwn(product, key) === Object.hasOwn(row.identity, key) && product[key] === row.identity[key]);
}
function matches(product, row, state) {
 return identityMatches(product, row) && row.fields.every(key => Object.hasOwn(product, key) === Object.hasOwn(row[state], key) && isDeepStrictEqual(product[key], row[state][key]));
}
function project(product, row, state) {
 for (const field of row.fields) product[field] = structuredClone(row[state][field]);
 return product;
}
export function applyReviewedOctober31Amendment(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 if (!identityMatches(product, row)) throw new Error('Identité différente du 31 octobre.');
 if (matches(product, row, 'after')) return product;
 if (!matches(product, row, 'before')) throw new Error('Base différente du 31 octobre.');
 return project(product, row, 'after');
}
export function beforeOctober31Amendment(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 if (matches(product, row, 'before')) return product;
 if (!matches(product, row, 'after')) throw new Error('Historical October31 field drift: ' + product.id);
 return project(structuredClone(product), row, 'before');
}
