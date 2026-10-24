import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';

// Immutable source transcriptions remain unchanged. This dated projection only
// applies the exact editorial comparisons and append-only evidence associations
// actually reviewed on October 24; no technical engine input is amendable here.
const allowed = new Map([
 [
  "fiac-ax-203bd-8-400-50-ce",
  [
   "editorial",
   "evidence"
  ]
 ],
 [
  "gentilin-c660-100",
  [
   "editorial",
   "evidence"
  ]
 ],
 [
  "almig-combi-xp-8-270d",
  [
   "editorial"
  ]
 ],
 [
  "renner-rs-pro-3-0-310001",
  [
   "editorial"
  ]
 ],
 [
  "kaeser-aircenter-13-secheur-et-cuve-integres-8-bar",
  [
   "editorial"
  ]
 ],
 [
  "elgi-eg-110-p-50-hz-11-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
  [
   "editorial"
  ]
 ],
 [
  "airpol-55",
  [
   "editorial",
   "evidence"
  ]
 ],
 [
  "bambi-bb8",
  [
   "editorial",
   "evidence"
  ]
 ],
 [
  "ekom-dk50-2v-50s-m",
  [
   "editorial"
  ]
 ],
 [
  "mattei-blade-se-12",
  [
   "editorial"
  ]
 ],
 [
  "sil-air-100-24",
  [
   "editorial"
  ]
 ],
 [
  "fini-cube-4-0-10-270-es-z",
  [
   "editorial"
  ]
 ],
 [
  "sableuse-asturomec-supermistral-50300",
  [
   "editorial"
  ]
 ],
 [
  "pistolet-peinture-hvlp-binks-trophy-1465-14hv-c1s",
  [
   "editorial"
  ]
 ],
 [
  "biax-beg-309",
  [
   "editorial",
   "evidence"
  ]
 ],
 [
  "biax-gaa-505",
  [
   "editorial",
   "evidence"
  ]
 ],
 [
  "fiam-fde33pa",
  [
   "editorial",
   "evidence"
  ]
 ],
 [
  "fiam-les30sp",
  [
   "editorial",
   "evidence"
  ]
 ],
 [
  "nitto-kohki-b-20d-a",
  [
   "editorial",
   "evidence"
  ]
 ],
 [
  "red-rooster-rr-0315ns",
  [
   "editorial",
   "evidence"
  ]
 ],
 [
  "red-rooster-rr-476",
  [
   "editorial",
   "evidence"
  ]
 ],
 [
  "red-rooster-rr-8110",
  [
   "editorial",
   "evidence"
  ]
 ]
]);
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-24.json', import.meta.url), 'utf8'));
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-10-24' || !Array.isArray(snapshot.rows) || snapshot.rows.length !== allowed.size) throw new Error('Amendements éditoriaux non reconnus.');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== allowed.size) throw new Error('Amendement éditorial dupliqué.');
for (const row of rows.values()) {
 const fields = allowed.get(row.id);
 if (!fields || !isDeepStrictEqual(row.fields, fields) || !['brand', 'model'].every(key => typeof row[key] === 'string' && row[key]) || !(row.mpn === null || (typeof row.mpn === 'string' && row.mpn))) throw new Error('Identité de revue absente.');
 for (const part of [row.before, row.after]) if (!part || typeof part !== 'object' || Array.isArray(part) || !isDeepStrictEqual(Object.keys(part).sort(), [...fields].sort())) throw new Error('Champ hors du périmètre de revue.');
 const { overview: beforeOverview, ...beforeEditorial } = row.before.editorial;
 const { overview: afterOverview, ...afterEditorial } = row.after.editorial;
 if (typeof beforeOverview !== 'string' || typeof afterOverview !== 'string' || !afterOverview.trim() || !isDeepStrictEqual(beforeEditorial, afterEditorial)) throw new Error('Limites ou faits historiques modifiés.');
 if (fields.includes('evidence') && (!Array.isArray(row.before.evidence) || !Array.isArray(row.after.evidence) || !isDeepStrictEqual(row.after.evidence.slice(0, row.before.evidence.length), row.before.evidence))) throw new Error('Preuves historiques modifiées.');
}

export function applyReviewedOctober24Amendment(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 if (!['brand', 'model', 'mpn'].every(key => (product[key] ?? null) === row[key])) throw new Error('Identité différente de la revue éditoriale.');
 const fields = allowed.get(product.id);
 const current = Object.fromEntries(fields.filter(key => Object.hasOwn(product, key)).map(key => [key, product[key]]));
 if (isDeepStrictEqual(current, row.after)) return product;
 if (!isDeepStrictEqual(current, row.before)) throw new Error('Base différente de la revue éditoriale ; comparaison nécessaire.');
 for (const key of fields) product[key] = structuredClone(row.after[key]);
 return product;
}
