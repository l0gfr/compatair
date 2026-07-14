import { createHash } from 'node:crypto';
import { z } from 'zod';
import { evidenceSchema, type Compressor, type ToolProfile } from './catalog';

export const evidenceHistoryEventSchema = z.object({
	id: z.string().regex(/^[a-z0-9:-]+$/),
	evidenceId: z.string().min(1),
	productId: z.string().min(1),
	productType: z.enum(['compressor', 'tool']),
	occurredAt: z.iso.date(),
	kind: z.enum(['baseline', 'added', 'verified', 'corrected', 'withdrawn']),
	summary: z.string().min(1),
	fingerprint: z.string().regex(/^[a-f0-9]{64}$/),
	snapshot: evidenceSchema,
});

export const evidenceHistorySchema = z.object({
	schemaVersion: z.literal('1.0.0'),
	startedAt: z.iso.date(),
	historyVersion: z.string().regex(/^[a-f0-9]{64}$/),
	events: z.array(evidenceHistoryEventSchema),
});

export type EvidenceHistory = z.infer<typeof evidenceHistorySchema>;
export type EvidenceHistoryEvent = z.infer<typeof evidenceHistoryEventSchema>;

export function evidenceFingerprint(productId: string, evidence: EvidenceHistoryEvent['snapshot']) {
	return createHash('sha256').update(JSON.stringify({ productId, evidence })).digest('hex');
}

export function historyFingerprint(history: Omit<EvidenceHistory, 'historyVersion'>) {
	return createHash('sha256').update(JSON.stringify(history)).digest('hex');
}

export function historyForProduct(history: EvidenceHistory, productId: string) {
	return history.events
		.filter((event) => event.productId === productId)
		.sort((a, b) => b.occurredAt.localeCompare(a.occurredAt) || b.id.localeCompare(a.id));
}

export function assertEvidenceHistoryIntegrity(history: EvidenceHistory, compressors: Compressor[], tools: ToolProfile[]) {
	const products = [
		...compressors.map((product) => ({ product, type: 'compressor' as const })),
		...tools.map((product) => ({ product, type: 'tool' as const })),
	];
	const errors: string[] = [];
	const eventIds = new Set<string>();
	for (const event of history.events) {
		if (eventIds.has(event.id)) errors.push(`Événement historique dupliqué : ${event.id}`);
		eventIds.add(event.id);
		if (event.fingerprint !== evidenceFingerprint(event.productId, event.snapshot)) errors.push(`Empreinte invalide : ${event.id}`);
	}
	for (const { product, type } of products) {
		for (const evidence of product.evidence) {
			const events = history.events
				.filter((event) => event.productId === product.id && event.evidenceId === evidence.id)
				.sort((a, b) => a.occurredAt.localeCompare(b.occurredAt) || a.id.localeCompare(b.id));
			if (!events.length) {
				errors.push(`Preuve absente de l’historique : ${product.id}/${evidence.id}`);
				continue;
			}
			const latest = events.at(-1)!;
			if (latest.productType !== type) errors.push(`Type produit incohérent : ${latest.id}`);
			if (JSON.stringify(latest.snapshot) !== JSON.stringify(evidence)) errors.push(`La dernière version ne correspond pas au catalogue : ${latest.id}`);
		}
	}
	const unsigned = { schemaVersion: history.schemaVersion, startedAt: history.startedAt, events: history.events };
	if (history.historyVersion !== historyFingerprint(unsigned)) errors.push('Version globale de l’historique invalide');
	if (errors.length) throw new Error(errors.join('\n'));
	return true;
}
