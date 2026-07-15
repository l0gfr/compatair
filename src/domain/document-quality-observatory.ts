import { createHash } from 'node:crypto';
import { z } from 'zod';
import type { Compressor, ToolProfile } from './catalog';

const productIdSchema = z.string().regex(/^[a-z0-9-]+$/);

export const correctionRecordSchema = z.object({
	id: z.string().regex(/^[a-z0-9-]+$/),
	title: z.string().min(1),
	openedAt: z.iso.date().nullable(),
	resolvedAt: z.iso.date(),
	summary: z.string().min(1),
	impact: z.string().min(1),
});

export const contradictionRecordSchema = z.object({
	id: z.string().regex(/^[a-z0-9-]+$/),
	productId: productIdSchema,
	observedAt: z.iso.date(),
	answeredAt: z.iso.date().nullable(),
	status: z.enum(['open', 'answered']),
	subject: z.string().min(1),
	contradiction: z.string().min(1),
	response: z.string().min(1).nullable(),
	sourceIds: z.array(z.string().min(1)).min(1),
	field: z.object({
		key: z.string().regex(/^[a-zA-Z0-9_.-]+$/),
		label: z.string().min(1),
		unit: z.string().min(1).optional(),
	}),
	claims: z.array(z.object({
		id: z.string().regex(/^[a-z0-9-]+$/),
		evidenceId: z.string().min(1),
		channel: z.enum(['manual', 'manufacturer', 'merchant', 'measured']),
		locator: z.string().min(1),
		value: z.string().min(1),
		normalizedValue: z.union([z.string(), z.number()]),
		observedAt: z.iso.date(),
	})).min(2),
	decision: z.object({
		outcome: z.enum(['retain_claim', 'withhold', 'open']),
		selectedClaimId: z.string().regex(/^[a-z0-9-]+$/).nullable(),
	}),
});

export const documentQualityLedgerSchema = z.object({
	schemaVersion: z.literal('1.0.0'),
	startedAt: z.iso.date(),
	corrections: z.array(correctionRecordSchema),
	contradictions: z.array(contradictionRecordSchema),
});

export const referenceRegistrySchema = z.object({
	schemaVersion: z.literal('1.0.0'),
	startedAt: z.iso.date(),
	observations: z.array(z.object({
		productId: productIdSchema,
		mpn: z.string().min(1),
		observedAt: z.iso.date(),
		kind: z.enum(['baseline', 'added', 'changed']),
	})),
});

const monthlyMetricSchema = z.object({
	correctionMedianDays: z.number().nonnegative().nullable(),
	measurableCorrectionCount: z.number().int().nonnegative(),
	multiPressureFadPercentage: z.number().min(0).max(100),
	referenceBaselineCoveragePercent: z.number().min(0).max(100),
	referenceChangeCount: z.number().int().nonnegative(),
	contradictionResponseRate: z.number().min(0).max(100),
});

export const documentQualityHistorySchema = z.object({
	schemaVersion: z.literal('1.0.0'),
	startedAt: z.iso.date(),
	targetPolicy: z.object({
		policyVersion: z.literal('1.0.0'),
		correctionLeadTime: z.object({ status: z.literal('pending_baseline'), medianDays: z.null(), minimumMeasuredCount: z.number().int().min(2), rationale: z.string().min(1) }),
		multiPressureFad: z.object({ status: z.literal('pending_trend'), targetPercent: z.null(), minimumPeriodCount: z.number().int().min(2), rationale: z.string().min(1) }),
		referenceBaselineCoverage: z.object({ targetPercent: z.number().min(0).max(100), rationale: z.string().min(1) }),
		contradictionResponses: z.object({ targetPercent: z.number().min(0).max(100), rationale: z.string().min(1) }),
	}),
	snapshots: z.array(z.object({
		period: z.string().regex(/^\d{4}-(?:0[1-9]|1[0-2])$/),
		kind: z.enum(['baseline', 'monthly']),
		capturedAt: z.iso.date(),
		metrics: monthlyMetricSchema,
	})).min(1),
}).superRefine((history, context) => {
	for (let index = 0; index < history.snapshots.length; index += 1) {
		const snapshot = history.snapshots[index];
		if (snapshot.capturedAt.slice(0, 7) !== snapshot.period) context.addIssue({ code: 'custom', path: ['snapshots', index, 'capturedAt'], message: 'La date de capture doit appartenir à la période mensuelle.' });
		if (index === 0 && snapshot.kind !== 'baseline') context.addIssue({ code: 'custom', path: ['snapshots', index, 'kind'], message: 'Le premier snapshot doit être la ligne de base.' });
		if (index > 0 && snapshot.kind !== 'monthly') context.addIssue({ code: 'custom', path: ['snapshots', index, 'kind'], message: 'Les snapshots suivant la ligne de base doivent être mensuels.' });
		if (index > 0 && snapshot.period <= history.snapshots[index - 1].period) context.addIssue({ code: 'custom', path: ['snapshots', index, 'period'], message: 'Les périodes doivent être strictement croissantes.' });
	}
});

export type DocumentQualityLedger = z.infer<typeof documentQualityLedgerSchema>;
export type ReferenceRegistry = z.infer<typeof referenceRegistrySchema>;
export type DocumentQualityHistory = z.infer<typeof documentQualityHistorySchema>;

const DAY_MS = 86_400_000;
const percentage = (count: number, total: number) => total ? Math.round(count / total * 100) : 0;
const elapsedDays = (start: string, end: string) => Math.round((Date.parse(`${end}T00:00:00Z`) - Date.parse(`${start}T00:00:00Z`)) / DAY_MS);

function median(values: number[]) {
	if (!values.length) return null;
	const sorted = [...values].sort((a, b) => a - b);
	const middle = Math.floor(sorted.length / 2);
	return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

export function createDocumentQualityObservatory(
	compressors: Compressor[],
	tools: ToolProfile[],
	ledger: DocumentQualityLedger,
	referenceRegistry: ReferenceRegistry,
	publishedAt: string,
	history: DocumentQualityHistory,
) {
	const products = [...compressors, ...tools];
	const measurableCorrections = ledger.corrections.filter((record) => record.openedAt !== null);
	const correctionDurations = measurableCorrections.map((record) => elapsedDays(record.openedAt!, record.resolvedAt));
	const multipressure = compressors.filter((compressor) => compressor.fadCurve.length >= 2);

	const observationsByProduct = new Map<string, ReferenceRegistry['observations']>();
	for (const observation of referenceRegistry.observations) {
		const history = observationsByProduct.get(observation.productId) ?? [];
		history.push(observation);
		observationsByProduct.set(observation.productId, history);
	}
	const monitoredProducts = products.filter((product) => product.mpn);
	const referenceChanges: Array<{ productId: string; previousMpn: string; currentMpn: string; observedAt: string }> = [];
	let missingBaselineCount = 0;
	for (const product of monitoredProducts) {
		const history = [...(observationsByProduct.get(product.id) ?? [])].sort((a, b) => a.observedAt.localeCompare(b.observedAt));
		if (!history.length) {
			missingBaselineCount += 1;
			continue;
		}
		for (let index = 1; index < history.length; index += 1) {
			if (history[index].mpn !== history[index - 1].mpn) referenceChanges.push({ productId: product.id, previousMpn: history[index - 1].mpn, currentMpn: history[index].mpn, observedAt: history[index].observedAt });
		}
	}

	const answeredContradictions = ledger.contradictions.filter((record) => record.status === 'answered');
	const contradictionDurations = answeredContradictions.map((record) => elapsedDays(record.observedAt, record.answeredAt!));
	const baseline = history.snapshots[0];
	const latest = history.snapshots.at(-1)!;
	if (latest.period !== publishedAt.slice(0, 7)) throw new Error(`Snapshot mensuel documentaire manquant pour ${publishedAt.slice(0, 7)}`);
	const previous = history.snapshots.at(-2);
	const delta = (current: number | null, prior: number | null) => current === null || prior === null ? null : Number((current - prior).toFixed(1));
	const payload = {
		schemaVersion: '1.0.0' as const,
		publishedAt,
		scope: 'Catalogue CompatAir et registre public de qualité documentaire',
		observationStartedAt: ledger.startedAt,
		measurementProgram: {
			baseline,
			trend: {
				status: previous ? 'measured' as const : 'insufficient_data' as const,
				periodCount: history.snapshots.length,
				fromPeriod: previous?.period ?? null,
				toPeriod: latest.period,
				deltas: previous ? {
					correctionMedianDays: delta(latest.metrics.correctionMedianDays, previous.metrics.correctionMedianDays),
					multiPressureFadPercentagePoints: delta(latest.metrics.multiPressureFadPercentage, previous.metrics.multiPressureFadPercentage),
					referenceBaselineCoveragePercentagePoints: delta(latest.metrics.referenceBaselineCoveragePercent, previous.metrics.referenceBaselineCoveragePercent),
					referenceChangeCount: latest.metrics.referenceChangeCount - previous.metrics.referenceChangeCount,
					contradictionResponsePercentagePoints: delta(latest.metrics.contradictionResponseRate, previous.metrics.contradictionResponseRate),
				} : null,
			},
			targets: history.targetPolicy,
			history: history.snapshots,
		},
		metrics: {
			correctionLeadTime: {
				status: measurableCorrections.length ? 'measured' as const : 'insufficient_data' as const,
				medianDays: median(correctionDurations),
				measuredCount: measurableCorrections.length,
				excludedLegacyCount: ledger.corrections.length - measurableCorrections.length,
				definition: 'Nombre de jours calendaires entre l’ouverture documentée d’un signalement et la publication de sa correction.',
			},
			multiPressureFad: {
				status: 'measured' as const,
				availableCount: multipressure.length,
				eligibleCount: compressors.length,
				percentage: percentage(multipressure.length, compressors.length),
				definition: 'Compresseurs pour lesquels au moins deux points FAD sont documentés à des pressions distinctes.',
			},
			referenceStability: {
				status: elapsedDays(referenceRegistry.startedAt, publishedAt) > 0 ? 'measured' as const : 'baseline' as const,
				monitoredCount: monitoredProducts.length,
				stableCount: monitoredProducts.length - new Set(referenceChanges.map((change) => change.productId)).size - missingBaselineCount,
				changeCount: referenceChanges.length,
				missingBaselineCount,
				observationStartedAt: referenceRegistry.startedAt,
				changes: referenceChanges,
				definition: 'Évolution des MPN explicitement suivis depuis la ligne de base publique. Un alias historique n’est pas compté comme une mutation silencieuse.',
			},
			contradictionResponses: {
				status: ledger.contradictions.length ? 'measured' as const : 'insufficient_data' as const,
				answeredCount: answeredContradictions.length,
				totalCount: ledger.contradictions.length,
				openCount: ledger.contradictions.length - answeredContradictions.length,
				responseRate: percentage(answeredContradictions.length, ledger.contradictions.length),
				medianResponseDays: median(contradictionDurations),
				definition: 'Part des contradictions documentaires pour lesquelles CompatAir publie un arbitrage, une réserve ou un refus d’utiliser la valeur.',
			},
		},
		corrections: ledger.corrections,
		contradictions: ledger.contradictions,
		limitations: [
			'Les corrections antérieures au registre sans date d’ouverture sont publiées mais exclues du calcul du délai.',
			'La stabilité des références commence à la date de la ligne de base ; elle ne reconstitue pas un historique antérieur.',
			'Une réponse à une contradiction désigne la décision documentaire de CompatAir, pas nécessairement une réponse du fabricant.',
			'Le taux FAD multi-pression décrit le corpus CompatAir et non un échantillon aléatoire du marché.',
			'Les objectifs sont des politiques internes de qualité documentaire, pas des références de performance du marché.',
		],
	};
	return { observatoryVersion: createHash('sha256').update(JSON.stringify(payload)).digest('hex'), ...payload };
}

export function assertDocumentQualityIntegrity(
	compressors: Compressor[],
	tools: ToolProfile[],
	ledger: DocumentQualityLedger,
	referenceRegistry: ReferenceRegistry,
) {
	const products = [...compressors, ...tools];
	const productsById = new Map(products.map((product) => [product.id, product]));
	const errors: string[] = [];
	const recordIds = new Set<string>();
	for (const record of [...ledger.corrections, ...ledger.contradictions]) {
		if (recordIds.has(record.id)) errors.push(`Entrée documentaire dupliquée : ${record.id}`);
		recordIds.add(record.id);
	}
	for (const record of ledger.corrections) {
		if (record.openedAt && record.openedAt > record.resolvedAt) errors.push(`Correction résolue avant son ouverture : ${record.id}`);
		if (record.resolvedAt >= ledger.startedAt && !record.openedAt) errors.push(`Date d’ouverture obligatoire après le début du registre : ${record.id}`);
	}
	for (const record of ledger.contradictions) {
		const product = productsById.get(record.productId);
		if (!product) errors.push(`Produit inconnu dans la contradiction : ${record.id}`);
		if (record.status === 'answered' && (!record.answeredAt || !record.response)) errors.push(`Réponse incomplète : ${record.id}`);
		if (record.status === 'open' && (record.answeredAt || record.response)) errors.push(`Contradiction ouverte avec réponse : ${record.id}`);
		if (record.answeredAt && record.answeredAt < record.observedAt) errors.push(`Réponse antérieure au constat : ${record.id}`);
		for (const sourceId of record.sourceIds) if (!product?.evidence.some((evidence) => evidence.id === sourceId)) errors.push(`Source inconnue pour ${record.id} : ${sourceId}`);
		const evidenceById = new Map(product?.evidence.map((evidence) => [evidence.id, evidence]) ?? []);
		const claimIds = new Set<string>();
		for (const claim of record.claims) {
			if (claimIds.has(claim.id)) errors.push(`Affirmation dupliquée pour ${record.id} : ${claim.id}`);
			claimIds.add(claim.id);
			const evidence = evidenceById.get(claim.evidenceId);
			if (!evidence) errors.push(`Preuve d’affirmation inconnue pour ${record.id} : ${claim.evidenceId}`);
			else if (claim.channel === 'merchant' && evidence.sourceType !== 'merchant') errors.push(`Canal distributeur incohérent pour ${record.id} : ${claim.id}`);
			else if (claim.channel === 'measured' && evidence.sourceType !== 'measured') errors.push(`Canal terrain incohérent pour ${record.id} : ${claim.id}`);
			else if (claim.channel === 'manufacturer' && evidence.sourceType !== 'manufacturer') errors.push(`Canal fabricant incohérent pour ${record.id} : ${claim.id}`);
			else if (claim.channel === 'manual' && !['manual', 'manufacturer'].includes(evidence.sourceType)) errors.push(`Canal notice incohérent pour ${record.id} : ${claim.id}`);
		}
		const claimSourceIds = new Set(record.claims.map((claim) => claim.evidenceId));
		if (record.sourceIds.some((sourceId) => !claimSourceIds.has(sourceId)) || [...claimSourceIds].some((sourceId) => !record.sourceIds.includes(sourceId))) errors.push(`Liste des sources incohérente pour ${record.id}`);
		if (new Set(record.claims.map((claim) => JSON.stringify(claim.normalizedValue))).size < 2) errors.push(`Valeurs non contradictoires pour ${record.id}`);
		if (record.decision.outcome === 'retain_claim' && (!record.decision.selectedClaimId || !claimIds.has(record.decision.selectedClaimId))) errors.push(`Valeur retenue inconnue pour ${record.id}`);
		if (record.decision.outcome !== 'retain_claim' && record.decision.selectedClaimId !== null) errors.push(`Valeur retenue indue pour ${record.id}`);
		if (record.status === 'open' && record.decision.outcome !== 'open') errors.push(`Décision publiée sur contradiction ouverte : ${record.id}`);
		if (record.status === 'answered' && record.decision.outcome === 'open') errors.push(`Réponse sans décision pour ${record.id}`);
	}
	const observationsByProduct = new Map<string, ReferenceRegistry['observations']>();
	for (const observation of referenceRegistry.observations) {
		const product = productsById.get(observation.productId);
		if (!product) errors.push(`Produit inconnu dans le registre des références : ${observation.productId}`);
		const history = observationsByProduct.get(observation.productId) ?? [];
		history.push(observation);
		observationsByProduct.set(observation.productId, history);
	}
	for (const product of products.filter((item) => item.mpn)) {
		const history = [...(observationsByProduct.get(product.id) ?? [])].sort((a, b) => a.observedAt.localeCompare(b.observedAt));
		if (!history.length) errors.push(`MPN sans ligne de base : ${product.id}`);
		else if (history.at(-1)?.mpn !== product.mpn) errors.push(`MPN courant différent du registre : ${product.id}`);
	}
	for (const [productId, history] of observationsByProduct) {
		const sorted = [...history].sort((a, b) => a.observedAt.localeCompare(b.observedAt));
		if (sorted[0]?.kind !== 'baseline' && sorted[0]?.kind !== 'added') errors.push(`Première observation invalide : ${productId}`);
		for (let index = 1; index < sorted.length; index += 1) {
			if (sorted[index].observedAt < sorted[index - 1].observedAt) errors.push(`Chronologie invalide : ${productId}`);
			if (sorted[index].mpn !== sorted[index - 1].mpn && sorted[index].kind !== 'changed') errors.push(`Mutation non déclarée : ${productId}`);
		}
	}
	if (errors.length) throw new Error(errors.join('\n'));
	return true;
}
