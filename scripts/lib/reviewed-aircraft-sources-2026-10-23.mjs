import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const bytes = readFileSync(new URL('../../src/data/imports/source-url-repairs-aircraft-2026-10-23.json', import.meta.url));
if (createHash('sha256').update(bytes).digest('hex') !== '6cb54665b3638a78e93a0498e78da4a29cf93f9c099f5447fb7592c89c4b9079') throw new Error('Unreviewed Aircraft documentation repair ledger');
export const aircraftSourceRepairs = JSON.parse(bytes);
const byId = new Map(aircraftSourceRepairs.products.map(row => [row.productId, row]));
const canonical = value => JSON.stringify(value, (_, item) => item && typeof item === 'object' && !Array.isArray(item) ? Object.fromEntries(Object.entries(item).sort(([a], [b]) => a.localeCompare(b))) : item);
const same = (actual, expected, label) => { if (canonical(actual) !== canonical(expected)) throw new Error(`Unreviewed Aircraft source repair: ${label}`); };

// This projection only reconstructs an explicitly reviewed metadata correction.
// Historical manufacturer transcriptions and current manufacturer documents have
// separate roles; current documents never silently replace historical figures.
export function applyReviewedAircraftSourceRepair(product) {
 const repair = byId.get(product.id);
 if (!repair) return product;
 for (const [key, value] of Object.entries(repair.technicalValues)) same(product[key], value, `${product.id}/${key}`);
 same(product.image, repair.imageBefore, `${product.id}/image`);
 const result = structuredClone(product);
 for (const change of repair.evidenceChanges) {
  const index = result.evidence.findIndex(evidence => evidence.id === change.before.id);
  if (index < 0) throw new Error(`Missing reviewed Aircraft proof: ${product.id}/${change.before.id}`);
  same(result.evidence[index], change.before, `${product.id}/${change.before.id}`);
  result.evidence[index] = structuredClone(change.after);
 }
 if (result.evidence.some(evidence => evidence.id === repair.manufacturerEvidence.id)) throw new Error(`Duplicate reviewed Aircraft proof: ${product.id}`);
 result.evidence.push(structuredClone(repair.manufacturerEvidence), ...structuredClone(repair.comparisonEvidence));
 result.image = structuredClone(repair.imageAfter);
 result.specifications = [...(result.specifications ?? []), ...structuredClone(repair.appendSpecifications)];
 result.editorial.limitations.push(...repair.appendLimitations);
 return result;
}
