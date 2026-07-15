import { createHash } from 'node:crypto';
import type { Compressor, ToolProfile } from './catalog';
import type { DocumentQualityLedger } from './document-quality-observatory';

export const contradictionChannels = ['manual', 'manufacturer', 'merchant', 'measured'] as const;
export type ContradictionChannel = typeof contradictionChannels[number];

export function createContradictionRadar(
	compressors: Compressor[],
	tools: ToolProfile[],
	ledger: DocumentQualityLedger,
	publishedAt: string,
) {
	const products = [
		...compressors.map((product) => ({ product, productType: 'compressor' as const })),
		...tools.map((product) => ({ product, productType: 'tool' as const })),
	];
	const productsById = new Map(products.map((entry) => [entry.product.id, entry]));
	const records = ledger.contradictions.map((record) => {
		const entry = productsById.get(record.productId);
		if (!entry) throw new Error(`Produit inconnu dans le radar : ${record.productId}`);
		const evidenceById = new Map(entry.product.evidence.map((evidence) => [evidence.id, evidence]));
		const claims = record.claims.map((claim) => {
			const evidence = evidenceById.get(claim.evidenceId);
			if (!evidence) throw new Error(`Preuve inconnue dans le radar : ${record.id}/${claim.evidenceId}`);
			return { ...claim, evidence };
		});
		const selectedClaim = record.decision.selectedClaimId ? claims.find((claim) => claim.id === record.decision.selectedClaimId) : undefined;
		return {
			...record,
			product: {
				id: entry.product.id,
				type: entry.productType,
				brand: entry.product.brand,
				model: entry.product.model,
				slug: entry.product.slug,
			},
			claims,
			selectedClaim: selectedClaim ? { id: selectedClaim.id, value: selectedClaim.value, evidenceId: selectedClaim.evidenceId } : null,
		};
	});
	const payload = {
		schemaVersion: '1.0.0' as const,
		publishedAt,
		observationStartedAt: ledger.startedAt,
		channels: contradictionChannels,
		summary: {
			totalCount: records.length,
			answeredCount: records.filter((record) => record.status === 'answered').length,
			openCount: records.filter((record) => record.status === 'open').length,
			withheldCount: records.filter((record) => record.decision.outcome === 'withhold').length,
			coverageByChannel: Object.fromEntries(contradictionChannels.map((channel) => [channel, records.filter((record) => record.claims.some((claim) => claim.channel === channel)).length])),
		},
		records,
		policy: [
			'Chaque valeur reste attachée à son document, son emplacement et sa date de consultation.',
			'Une case vide signifie qu’aucune valeur de ce canal n’a été versée au dossier ; elle n’est jamais remplacée par une valeur d’un autre canal.',
			'Une valeur retenue ou suspendue est une décision documentaire explicite, jamais une moyenne entre sources.',
		],
	};
	return { radarVersion: createHash('sha256').update(JSON.stringify(payload)).digest('hex'), ...payload };
}
