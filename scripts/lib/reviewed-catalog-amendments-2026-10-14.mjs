import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';

// Preserve the original transcriptions. Only these exact, separately reviewed
// references and fields receive the dated amendment after reconstruction.
const allowed = new Map([
 ['shinano-si-1052', ['editorial']],
 ['gentilin-ac200-05', ['editorial', 'specifications', 'evidence', 'fieldSources', 'dutyCycle', 'weightKg']],
]);
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-14.json', import.meta.url), 'utf8'));
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-10-14' || !Array.isArray(snapshot.rows) || snapshot.rows.length !== allowed.size) throw new Error('Amendements éditoriaux non reconnus.');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== allowed.size) throw new Error('Amendement éditorial dupliqué.');
for (const row of rows.values()) {
 const fields = allowed.get(row.id);
 if (!fields || !['brand', 'model', 'mpn'].every(key => typeof row[key] === 'string' && row[key])) throw new Error('Identité de revue absente.');
 for (const part of [row.before, row.after]) if (!part || typeof part !== 'object' || Array.isArray(part) || Object.keys(part).some(key => !fields.includes(key))) throw new Error('Champ hors du périmètre de revue.');
}

export function applyReviewedCatalogAmendment(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 if (!['brand', 'model', 'mpn'].every(key => product[key] === row[key])) throw new Error('Identité différente de la revue éditoriale.');
 const fields = allowed.get(product.id);
 const current = Object.fromEntries(fields.filter(key => Object.hasOwn(product, key)).map(key => [key, product[key]]));
 if (isDeepStrictEqual(current, row.after)) return product;
 if (!isDeepStrictEqual(current, row.before)) throw new Error('Base différente de la revue éditoriale ; comparaison nécessaire.');
 for (const key of fields) {
  if (Object.hasOwn(row.after, key)) product[key] = structuredClone(row.after[key]);
  else delete product[key];
 }
 return product;
}
