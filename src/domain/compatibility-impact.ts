import { createHash } from 'node:crypto';
import type { Compressor, ToolProfile } from './catalog';
import type { VerdictSnapshotPair } from './snapshots';

type EvidenceEvent = {
	id: string; productId: string; productType: 'compressor' | 'tool'; occurredAt: string; kind: 'baseline' | 'added' | 'corrected' | 'verified' | 'withdrawn';
	summary: string; fingerprint: string; snapshot: { sourceUrl: string; sourceLabel: string };
};

function portfolioKey(value: string) { return value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

export function createCompatibilityImpactFeed(input: {
	events: EvidenceEvent[]; compressors: Compressor[]; tools: ToolProfile[]; pairs: VerdictSnapshotPair[];
	catalogVersion: string; verdictVersion: string; observedAt: string; merchantByProduct?: Map<string, string[]>;
}) {
	const compressorMap = new Map(input.compressors.map((item) => [item.id, item]));
	const toolMap = new Map(input.tools.map((item) => [item.id, item]));
	const events = input.events.filter((event) => event.kind !== 'baseline').map((event) => {
		const product = event.productType === 'compressor' ? compressorMap.get(event.productId) : toolMap.get(event.productId);
		if (!product) throw new Error(`Impact event references an unknown product: ${event.productId}`);
		const affectedPairs = input.pairs.filter((pair) => event.productType === 'compressor' ? pair.compressorId === event.productId : pair.toolId === event.productId);
		const currentVerdictDistribution = affectedPairs.reduce<Record<string, number>>((counts, pair) => { counts[pair.verdict] = (counts[pair.verdict] ?? 0) + 1; return counts; }, {});
		const merchantKeys = (input.merchantByProduct?.get(event.productId) ?? []).map((id) => `merchant:${id}`);
		const slug = product.slug;
		const canonicalUrl = event.productType === 'compressor' ? `https://compatair.fr/compresseurs/${slug}/` : `https://compatair.fr/outils-pneumatiques/${slug}/`;
		return {
			impact_id: `ca:impact:${createHash('sha256').update(`${event.id}:${input.verdictVersion}`).digest('hex').slice(0, 32)}`,
			occurred_at: event.occurredAt, change_kind: event.kind, product_id: event.productId, product_type: event.productType,
			portfolio_keys: [`manufacturer:${portfolioKey(product.brand)}`, ...merchantKeys], source_url: event.snapshot.sourceUrl,
			source_label: event.snapshot.sourceLabel, evidence_fingerprint: event.fingerprint, summary: event.summary,
			impact_assessment: {
				status: 'requires_recalculation', decision_delta: 'not_available_without_previous_verdict_snapshot',
				affected_pair_count: affectedPairs.length, current_verdict_distribution: currentVerdictDistribution,
				before_verdict_version: null, after_verdict_version: input.verdictVersion,
			},
			canonical_url: canonicalUrl,
		};
	}).sort((left, right) => right.occurred_at.localeCompare(left.occurred_at) || left.impact_id.localeCompare(right.impact_id));
	const data = {
		schemaVersion: '1.0.0', feedId: 'fr.compatair.compatibility-impact', observedAt: input.observedAt,
		catalogVersion: input.catalogVersion, verdictVersion: input.verdictVersion,
		policy: {
			purpose: 'Alert manufacturer and merchant portfolios when evidence must be re-evaluated against compatibility decisions.',
			noFalseDelta: 'A verdict change is never claimed without a previous signed verdict snapshot and an exact before/after comparison.',
		},
		events,
	};
	return { ...data, integrity: { algorithm: 'sha-256', digest: createHash('sha256').update(JSON.stringify(data)).digest('hex') } };
}
