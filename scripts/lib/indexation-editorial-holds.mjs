import { candidateFamily, indexationDay, validatePath } from './indexation-policy.mjs';

export const EDITORIAL_HOLD_REASON = 'editorial-review-hold';

function exactFields(value, fields) {
	return value !== null && typeof value === 'object' && !Array.isArray(value)
		&& Object.keys(value).length === fields.length && fields.every(field => Object.hasOwn(value, field));
}

export function validateEditorialHolds(registry, candidates, now = new Date()) {
	if (!exactFields(registry, ['schemaVersion', 'holds']) || registry.schemaVersion !== 1 || !Array.isArray(registry.holds)) throw new Error('Registre de révision éditoriale invalide.');
	const today = indexationDay(now);
	const paths = new Set(candidates.map(candidate => candidate.path));
	const reviewed = new Set();
	for (const hold of registry.holds) {
		if (!exactFields(hold, ['path', 'reviewedAt', 'reason'])) throw new Error('Champs de révision éditoriale invalides.');
		validatePath(hold.path);
		if (!candidateFamily(hold.path) || !paths.has(hold.path)) throw new Error(`URL de révision éditoriale inconnue : ${hold.path}`);
		if (reviewed.has(hold.path)) throw new Error(`URL de révision éditoriale dupliquée : ${hold.path}`);
		reviewed.add(hold.path);
		if (typeof hold.reviewedAt !== 'string' || !/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(hold.reviewedAt)
			|| hold.reviewedAt.startsWith('0000-')) throw new Error('Date civile de révision éditoriale invalide.');
		const date = new Date(`${hold.reviewedAt}T00:00:00.000Z`);
		if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== hold.reviewedAt || hold.reviewedAt > today) throw new Error('Date civile de révision éditoriale invalide ou future.');
		if (typeof hold.reason !== 'string' || !hold.reason.trim()) throw new Error('Motif de révision éditoriale absent.');
	}
	return registry;
}

export function applyEditorialHolds(candidates, registry, { now = new Date() } = {}) {
	validateEditorialHolds(registry, candidates, now);
	const held = new Set();
	for (const entry of registry.holds) {
		held.add(entry.path);
		// The exact tool and its compressor-selection route share one product.
		if (entry.path.startsWith('/outils-pneumatiques/')) held.add(entry.path.replace('/outils-pneumatiques/', '/quel-compresseur-pour/'));
	}
	return candidates.map(candidate => held.has(candidate.path) && candidate.blockedReason == null
		? { ...candidate, blockedReason: EDITORIAL_HOLD_REASON } : candidate);
}
