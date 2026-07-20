export const JOURNEY_CONTEXT_STORAGE_KEY = 'compatair:journey:v1';
export const JOURNEY_CONTEXT_EVENT = 'compatair:journey-update';
export const JOURNEY_CONTEXT_CLEAR_EVENT = 'compatair:journey-clear';
export const JOURNEY_CONTEXT_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1_000;

export type JourneyStage = 'identified' | 'sized' | 'compared';
export type JourneyProduct = { id: string; label: string; type: 'tool' | 'compressor' };

export type JourneyContextSnapshot = {
	schemaVersion: '1.0.0';
	updatedAt: string;
	stage: JourneyStage;
	reference?: string;
	product?: JourneyProduct;
	needLabel?: string;
	configuration?: string;
	compressorIds?: string[];
	retainedCompressorId?: string;
	continueHref?: string;
	editHref?: string;
};

export type JourneyContextPatch = {
	[K in Exclude<keyof JourneyContextSnapshot, 'schemaVersion' | 'updatedAt'>]?: JourneyContextSnapshot[K] | null;
};

const stages = new Set<JourneyStage>(['identified', 'sized', 'compared']);
const simpleText = (value: unknown, maximum = 240) => typeof value === 'string' && value.trim().length > 0 && value.trim().length <= maximum ? value.trim() : undefined;
const localHref = (value: unknown) => {
	const href = simpleText(value, 24_000);
	return href && href.startsWith('/') && !href.startsWith('//') && !/[\u0000-\u001f]/.test(href) ? href : undefined;
};

function product(value: unknown): JourneyProduct | undefined {
	if (!value || typeof value !== 'object') return undefined;
	const candidate = value as Partial<JourneyProduct>;
	const id = simpleText(candidate.id, 180);
	const label = simpleText(candidate.label, 240);
	if (!id || !label || (candidate.type !== 'tool' && candidate.type !== 'compressor')) return undefined;
	return { id, label, type: candidate.type };
}

function compressorIds(value: unknown) {
	if (!Array.isArray(value)) return undefined;
	const ids = value.map((item) => simpleText(item, 180)).filter((item): item is string => Boolean(item));
	return [...new Set(ids)].slice(0, 3);
}

function normalizeSnapshot(value: unknown): JourneyContextSnapshot | undefined {
	if (!value || typeof value !== 'object') return undefined;
	const candidate = value as Partial<JourneyContextSnapshot>;
	if (candidate.schemaVersion !== '1.0.0' || !stages.has(candidate.stage as JourneyStage)) return undefined;
	const updatedAt = simpleText(candidate.updatedAt, 40);
	if (!updatedAt || !Number.isFinite(Date.parse(updatedAt))) return undefined;
	const snapshot: JourneyContextSnapshot = { schemaVersion: '1.0.0', updatedAt, stage: candidate.stage as JourneyStage };
	const reference = simpleText(candidate.reference, 160); if (reference) snapshot.reference = reference;
	const identified = product(candidate.product); if (identified) snapshot.product = identified;
	const needLabel = simpleText(candidate.needLabel, 320); if (needLabel) snapshot.needLabel = needLabel;
	const configuration = simpleText(candidate.configuration, 20_000); if (configuration) snapshot.configuration = configuration;
	const selected = compressorIds(candidate.compressorIds); if (selected?.length) snapshot.compressorIds = selected;
	const retained = simpleText(candidate.retainedCompressorId, 180); if (retained) snapshot.retainedCompressorId = retained;
	const continueHref = localHref(candidate.continueHref); if (continueHref) snapshot.continueHref = continueHref;
	const editHref = localHref(candidate.editHref); if (editHref) snapshot.editHref = editHref;
	return snapshot;
}

export function parseJourneyContext(serialized: string | null | undefined, now = Date.now()) {
	if (!serialized) return undefined;
	try {
		const snapshot = normalizeSnapshot(JSON.parse(serialized));
		if (!snapshot) return undefined;
		const age = now - Date.parse(snapshot.updatedAt);
		return age >= 0 && age <= JOURNEY_CONTEXT_MAX_AGE_MS ? snapshot : undefined;
	} catch {
		return undefined;
	}
}

export function mergeJourneyContext(current: JourneyContextSnapshot | undefined, patch: JourneyContextPatch, updatedAt = new Date().toISOString()) {
	const next: Record<string, unknown> = {
		...(current ?? {}),
		schemaVersion: '1.0.0',
		updatedAt,
		stage: patch.stage ?? current?.stage ?? 'identified',
	};
	for (const [key, value] of Object.entries(patch)) {
		if (value === undefined) continue;
		if (value === null) delete next[key];
		else next[key] = value;
	}
	return normalizeSnapshot(next);
}

export function journeyContextTitle(snapshot: JourneyContextSnapshot) {
	if (snapshot.stage === 'compared' && snapshot.compressorIds?.length) return `${snapshot.compressorIds.length} compresseurs dans la comparaison`;
	if (snapshot.stage === 'sized') return snapshot.product?.label ? `Besoin dimensionné pour ${snapshot.product.label}` : 'Besoin dimensionné';
	return snapshot.product?.label ?? 'Référence identifiée';
}

export function journeyContextDetail(snapshot: JourneyContextSnapshot) {
	const details = [snapshot.needLabel];
	if (snapshot.stage !== 'compared' && snapshot.compressorIds?.length) details.push(`${snapshot.compressorIds.length} solution${snapshot.compressorIds.length > 1 ? 's' : ''} prête${snapshot.compressorIds.length > 1 ? 's' : ''} à comparer`);
	return details.filter(Boolean).join(' · ') || 'Votre progression est conservée uniquement sur cet appareil.';
}
