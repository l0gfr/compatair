import { readFileSync } from 'node:fs';
import { z } from 'zod';

const snapshot = z.strictObject({
 schemaVersion: z.literal(1),
 sources: z.array(z.strictObject({ id: z.string(), url: z.url(), label: z.string(), observedAt: z.literal('2026-09-27'), sha256: z.string().regex(/^[a-f0-9]{64}$/), basis: z.string(), scope: z.string() })),
 rows: z.array(z.strictObject({ id: z.string(), brand: z.enum(['ABAC', 'Fini']), model: z.string(), mpn: z.string(), sourceId: z.enum(['abac-screw', 'fini-micro-plus']), dutyCycle: z.literal(1) })),
}).parse(JSON.parse(readFileSync(new URL('../../src/data/imports/compressor-duty-reviewed-2026-09-27.json', import.meta.url), 'utf8')));
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== snapshot.rows.length) throw new Error('Référence dupliquée dans les preuves de taux de marche.');
const sources = new Map(snapshot.sources.map(source => [source.id, source]));

// This explicit identity list is reviewed evidence, never a technology-based default.
export function applyReviewedCompressorDuty(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 if (product.brand !== row.brand || product.model !== row.model || product.mpn !== row.mpn) throw new Error('Identité différente de la preuve de taux de marche.');
 if (product.dutyCycle !== undefined && product.dutyCycle !== row.dutyCycle) throw new Error('Taux de marche contradictoire.');
 const source = sources.get(row.sourceId);
 if (!source) throw new Error('Source de taux de marche absente.');
 const evidenceId = `${product.id}-continuous-duty-20260927`;
 product.dutyCycle = row.dutyCycle;
 if (product.evidence.some(evidence => evidence.id === evidenceId)) return product;
 product.evidence.push({ id: evidenceId, sourceUrl: source.url, sourceLabel: source.label, sourceType: 'manufacturer', retrievedAt: source.observedAt, confidence: 'A', notes: source.scope });
 product.fieldSources.dutyCycle = [evidenceId];
 product.specifications.push({ label: 'Taux de marche constructeur', value: '100 %, fonctionnement continu déclaré pour la gamme. Respecter les conditions de la notice de la référence.', evidenceIds: [evidenceId] });
 product.editorial.verifiedFacts.push('Fonctionnement continu déclaré par le constructeur pour cette gamme ; taux de marche normalisé à 100 %.');
 product.editorial.limitations = product.editorial.limitations.map(text => text === 'Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.' ? 'Le fonctionnement continu est une déclaration de gamme ; respecter les conditions de la notice. La disponibilité commerciale reste à confirmer.' : text);
 return product;
}
