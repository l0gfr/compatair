import { createHash } from 'node:crypto';
import { MAX_INDEXATION_ARTIFACT_AGE_MS, candidateFamily, validateBaseline, validateManifest, validatePolicy } from './indexation-policy.mjs';

function words(text) {
	return text.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replace(/\d+(?:[.,]\d+)*/g, ' nombre ').match(/[a-z]+/g) ?? [];
}

// Text comparison only, never an HTML sanitizer or a content renderer.
export function editorialText(markdown) {
	return markdown.replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/^##?\s+Sources?\s*$[\s\S]*/mi, '')
		.replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/https?:\/\/\S+/g, ' ')
		.replace(/<[^>]*>/g, ' ');
}

export function shingles(text, identities = []) {
	let normalized = words(text).join(' ');
	for (const identity of identities.filter(Boolean).sort((a, b) => b.length - a.length)) {
		const term = words(identity).join(' ');
		if (term) normalized = ` ${normalized} `.split(` ${term} `).join(' ').trim();
	}
	const tokens = normalized.split(/\s+/).filter(Boolean);
	return new Set(tokens.slice(0, Math.max(0, tokens.length - 4)).map((_, i) => tokens.slice(i, i + 5).join(' ')));
}

function stable(value) {
	if (Array.isArray(value)) return value.map(stable);
	if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]));
	return value;
}

export function productCandidate(product, kind) {
	const isTool = kind === 'tools';
	const evidence = new Map((product.evidence ?? []).map((item) => [item.id, item]));
	const fields = isTool ? ['workingPressureBar', ...(product.demandModel === 'fixed-flow' ? ['airflowLpm'] : product.demandModel === 'per-action' ? ['airPerActionLiters'] : [])] : ['fadCurve', 'maxPressureBar'];
	const sourced = fields.every((field) => product.fieldSources?.[field]?.length && product.fieldSources[field].every((id) => {
		try { return new URL(evidence.get(id)?.sourceUrl).protocol === 'https:'; } catch { return false; }
	}));
	const editorial = product.editorial;
	const text = [editorial?.overview, ...(editorial?.verifiedFacts ?? []), ...(editorial?.limitations ?? [])].filter(Boolean).join('\n');
	const hasEditorial = editorial?.overview && editorial?.verifiedFacts?.length >= 2 && editorial?.limitations?.length >= 1;
	const keys = ['category', 'categoryId', 'demandModel', 'workingPressureBar', 'airflowLpm', 'airPerActionLiters', 'actionLabel', 'demandExplanation', 'recommendedHose', 'connectorSize', 'usagePattern', 'dutyFactor', 'filtrationRequirement', 'lubricationRequirement', 'minimumCompressorPowerKw', 'tankLiters', 'maxPressureBar', 'fadCurve', 'oilType', 'intakeFlowLpm', 'dutyCycle', 'noiseDb', 'weightKg', 'powerKw', 'mobility', 'voltage', 'phase'];
	const technical = Object.fromEntries(keys.filter((key) => product[key] !== undefined).map((key) => [key, product[key]]));
	if (Array.isArray(technical.fadCurve)) technical.fadCurve = [...technical.fadCurve].sort((a, b) => a.pressureBar - b.pressureBar);
	if (product.variant?.distinguishingAttributes) technical.variantAttributes = product.variant.distinguishingAttributes;
	const signature = JSON.stringify(stable(technical));
	return {
		path: `/${isTool ? 'outils-pneumatiques' : 'compresseurs'}/${product.slug}/`, family: 'catalog',
		topic: `${product.brand}:${product.categoryId ?? kind}`, text, signature,
		identities: [product.label, product.model, product.mpn, product.brand],
		blockedReason: !sourced ? 'missing-critical-source' : !hasEditorial ? 'missing-editorial-evidence' : undefined,
	};
}

export function analyzeCandidates(candidates, admitted, policy) {
	const inverted = new Map();
	const analyzed = [];
	const sorted = [...candidates].sort((a, b) => Number(admitted.has(b.path)) - Number(admitted.has(a.path)) || (a.firstSeen ?? '').localeCompare(b.firstSeen ?? '') || a.path.localeCompare(b.path, 'en'));
	for (const candidate of sorted) {
		const grams = shingles(candidate.text, candidate.identities);
		const overlaps = new Map();
		const scope = candidate.family === 'catalog' ? `catalog:${candidate.signature}` : candidate.family;
		for (const gram of grams) for (const index of inverted.get(`${scope}:${gram}`) ?? []) overlaps.set(index, (overlaps.get(index) ?? 0) + 1);
		let similar;
		for (const [index, intersection] of overlaps) {
			const other = analyzed[index];
			const similarity = intersection / (grams.size + other.grams.size - intersection);
			const containment = intersection / Math.min(grams.size, other.grams.size);
			const lengthRatio = Math.min(grams.size, other.grams.size) / Math.max(grams.size, other.grams.size);
			if (similarity >= policy.similarityThreshold || (containment >= policy.containmentThreshold && lengthRatio >= 0.5)) {
				if (!similar || similarity > similar.similarity) similar = { path: other.path, similarity: Number(similarity.toFixed(3)), containment: Number(containment.toFixed(3)) };
			}
		}
		const reason = candidate.blockedReason ?? (!grams.size ? 'empty-comparable-content' : similar ? 'near-duplicate' : undefined);
		const entry = { ...candidate, grams, reason, similar, contentHash: createHash('sha256').update(candidate.text).digest('hex') };
		const index = analyzed.push(entry) - 1;
		// Compare against established pages and the first eligible representative of new clusters.
		if (admitted.has(candidate.path) || !reason) for (const gram of grams) {
			const key = `${scope}:${gram}`;
			if (!inverted.has(key)) inverted.set(key, []);
			inverted.get(key).push(index);
		}
	}
	return analyzed;
}

function diverseSelection(entries, limit, share) {
	const groups = new Map();
	for (const entry of entries) {
		if (!groups.has(entry.topic)) groups.set(entry.topic, []);
		groups.get(entry.topic).push(entry);
	}
	const selected = [];
	const perTopic = Math.max(1, Math.ceil(limit * share));
	for (let round = 0; round < perTopic && selected.length < limit; round += 1) {
		for (const group of groups.values()) {
			if (selected.length >= limit) break;
			if (group[round]) selected.push(group[round].path);
		}
	}
	return selected;
}

export function planIndexation({ candidates, baseline, previous, policy, now = new Date(), gitSha = 'development', allowRelease = true }) {
	validateBaseline(baseline);
	validatePolicy(policy);
	validateManifest(previous, baseline, now);
	if (new Set(candidates.map((entry) => entry.path)).size !== candidates.length) throw new Error('URL candidate dupliquée.');
	const admitted = new Set([...baseline.paths, ...previous.batches.flatMap((batch) => batch.paths)]);
	const firstSeen = new Map((previous.pending ?? []).map((entry) => [entry.path, entry.firstSeen]));
	const analyzed = analyzeCandidates(candidates.map((entry) => ({ ...entry, firstSeen: firstSeen.get(entry.path) ?? now.toISOString() })), admitted, policy);
	const last = previous.batches.at(-1);
	// A deployed artifact may be up to 24 hours older than its activation.
	const ready = !last || now.getTime() - Date.parse(last.openedAt) >= policy.minimumDaysBetweenBatches * 86_400_000 + MAX_INDEXATION_ARTIFACT_AGE_MS;
	const limits = Object.fromEntries(['catalog', 'guides'].map((family) => {
		const publishedBatches = previous.batches.filter((batch) => batch.paths.some((path) => candidateFamily(path) === family)).length;
		return [family, policy.stages[Math.min(publishedBatches, policy.stages.length - 1)][family]];
	}));
	const selected = [];
	if (allowRelease && !policy.paused && ready) for (const family of ['catalog', 'guides']) {
		selected.push(...diverseSelection(analyzed.filter((entry) => entry.family === family && !admitted.has(entry.path) && !entry.reason), limits[family], policy.maximumTopicShare));
	}
	const newPaths = new Set(selected);
	const batches = [...previous.batches, ...(selected.length ? [{ openedAt: now.toISOString(), paths: selected.sort() }] : [])];
	const pending = analyzed.filter((entry) => !admitted.has(entry.path) && !newPaths.has(entry.path)).map((entry) => ({ path: entry.path, firstSeen: entry.firstSeen }));
	const checks = ['catalog', 'guides', 'usages'].flatMap((family) => [true, false].flatMap((indexable) => analyzed
		.filter((entry) => entry.family === family && (admitted.has(entry.path) || newPaths.has(entry.path)) === indexable)
		.sort((a, b) => Number(newPaths.has(b.path)) - Number(newPaths.has(a.path)))
		.slice(0, 3).map((entry) => ({ path: entry.path, indexable }))));
	const manifest = { schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha, builtAt: now.toISOString(), batches, pending, checks };
	validateManifest(manifest, baseline, now);
	const report = analyzed.map((entry) => ({
		path: entry.path, family: entry.family, topic: entry.topic, contentHash: entry.contentHash, firstSeen: entry.firstSeen,
		status: admitted.has(entry.path) ? 'existing' : newPaths.has(entry.path) ? 'released' : entry.reason ? 'held' : 'queued',
		reason: entry.reason ?? (admitted.has(entry.path) ? 'preserved-existing' : newPaths.has(entry.path) ? 'batch-admission' : policy.paused ? 'paused' : !allowRelease ? 'offline' : !ready ? 'cooldown' : 'batch-limit'),
		...(entry.similar ? { similar: entry.similar } : {}),
	}));
	return { manifest, report, limits, released: selected.length, previousSha: previous.gitSha, allowRelease };
}
