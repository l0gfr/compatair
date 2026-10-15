import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';

// Preserve the original transcriptions. Only these exact, separately reviewed
// references and fields receive the dated amendment after reconstruction.
const allowed = new Map([
 ['shinano-si-1107b', ['editorial']],
 ['shinano-si-1305', ['editorial']],
 ['shinano-si-2001s-6', ['editorial']],
 ['shinano-si-2015ad', ['editorial']],
 ['shinano-si-2033', ['editorial']],
 ['shinano-si-2700', ['editorial']],
 ['shinano-si-3001a', ['editorial']],
 ['shinano-si-1060', ['editorial']],
 ['shinano-si-2008ex', ['editorial']],
 ['shinano-si-2107a', ['editorial']],
 ['shinano-si-2009ex-h', ['editorial']],
 ['shinano-si-4300', ['editorial']],
 ['shinano-si-4500', ['editorial']],
 ['shinano-si-4600', ['editorial']],
 ['gentilin-ac400-20', ['editorial', 'specifications', 'evidence', 'fieldSources', 'dutyCycle']],
]);
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-15.json', import.meta.url), 'utf8'));
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-10-15' || !Array.isArray(snapshot.rows) || snapshot.rows.length !== allowed.size) throw new Error('Amendements éditoriaux non reconnus.');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== allowed.size) throw new Error('Amendement éditorial dupliqué.');
for (const row of rows.values()) {
 const fields = allowed.get(row.id);
 if (!fields || !['brand', 'model', 'mpn'].every(key => typeof row[key] === 'string' && row[key])) throw new Error('Identité de revue absente.');
 for (const part of [row.before, row.after]) if (!part || typeof part !== 'object' || Array.isArray(part) || Object.keys(part).some(key => !fields.includes(key))) throw new Error('Champ hors du périmètre de revue.');
}

export function applyReviewedOctober15Amendment(product) {
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
