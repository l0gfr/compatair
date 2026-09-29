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
	const keys = ['category', 'categoryId', 'demandModel', 'workingPressureBar', 'airflowLpm', 'airflowBasis', 'airPerActionLiters', 'actionLabel', 'demandExplanation', 'recommendedHose', 'connectorSize', 'usagePattern', 'dutyFactor', 'filtrationRequirement', 'lubricationRequirement', 'minimumCompressorPowerKw', 'tankLiters', 'maxPressureBar', 'fadCurve', 'oilType', 'intakeFlowLpm', 'dutyCycle', 'noiseDb', 'weightKg', 'powerKw', 'mobility', 'voltage', 'phase'];
	const technical = Object.fromEntries(keys.filter((key) => product[key] !== undefined).map((key) => [key, product[key]]));
	if (Array.isArray(technical.fadCurve)) technical.fadCurve = [...technical.fadCurve].sort((a, b) => a.pressureBar - b.pressureBar);
	if (product.variant?.distinguishingAttributes) technical.variantAttributes = product.variant.distinguishingAttributes;
	// Numeric facts outside the normalized schema (torque, speed, dimensions)
	// also distinguish references. Remove identities before comparing these facts.
	let numericText = text;
	for (const identity of [product.label, product.model, product.mpn, product.id].filter(Boolean).sort((a, b) => b.length - a.length)) numericText = numericText.split(identity).join(' ');
	technical.editorialNumbers = numericText.match(/\d+(?:[.,]\d+)*/g) ?? [];
	technical.specifications = (product.specifications ?? []).map(({ label, value }) => ({ label, value })).sort((a, b) => a.label.localeCompare(b.label, 'en') || a.value.localeCompare(b.value, 'en'));
	const signature = JSON.stringify(stable(technical));
	return {
		path: `/${isTool ? 'outils-pneumatiques' : 'compresseurs'}/${product.slug}/`, family: 'catalog',
		topic: `${product.brand}:${product.categoryId ?? kind}`, text, signature,
		identities: [product.label, product.model, product.mpn, product.brand],
		blockedReason: !sourced ? 'missing-critical-source' : !hasEditorial ? 'missing-editorial-evidence' : undefined,
	};
}

function comparisonScope(candidate) {
	return ['catalog', 'usages'].includes(candidate.family) ? `${candidate.family}:${candidate.topic}:${candidate.signature}` : candidate.family;
}

export function analyzeCandidates(candidates, admitted, policy, { onProgress } = {}) {
	const inverted = new Map();
	const analyzed = [];
	const sorted = [...candidates].sort((a, b) => Number(admitted.has(b.path)) - Number(admitted.has(a.path)) || (b.priority?.score ?? 0) - (a.priority?.score ?? 0) || (a.firstSeen ?? '').localeCompare(b.firstSeen ?? '') || a.path.localeCompare(b.path, 'en'));
	const remaining = new Map();
	for (const candidate of sorted) {
		const scope = comparisonScope(candidate);
		remaining.set(scope, (remaining.get(scope) ?? 0) + 1);
	}
	let indexedGrams = 0;
	for (const candidate of sorted) {
		const grams = shingles(candidate.text, candidate.identities);
		const overlaps = new Map();
		const scope = comparisonScope(candidate);
		const scopeIndex = inverted.get(scope) ?? new Map();
		for (const gram of grams) for (const index of scopeIndex.get(gram) ?? []) overlaps.set(index, (overlaps.get(index) ?? 0) + 1);
		let similar;
		for (const [index, intersection] of overlaps) {
			const other = analyzed[index];
			const similarity = intersection / (grams.size + other.gramCount - intersection);
			const containment = intersection / Math.min(grams.size, other.gramCount);
			const lengthRatio = Math.min(grams.size, other.gramCount) / Math.max(grams.size, other.gramCount);
			if (similarity >= policy.similarityThreshold || (containment >= policy.containmentThreshold && lengthRatio >= 0.5)) {
				if (!similar || similarity > similar.similarity) similar = { path: other.path, similarity: Number(similarity.toFixed(3)), containment: Number(containment.toFixed(3)) };
			}
		}
		const reason = candidate.blockedReason ?? (!grams.size ? 'empty-comparable-content' : similar ? 'near-duplicate' : undefined);
		// Later comparisons use only the cardinality. Retaining every page's Set
		// keeps millions of duplicate strings alive, including rejected pages.
		const entry = { ...candidate, gramCount: grams.size, reason, similar, contentHash: createHash('sha256').update(candidate.text).digest('hex') };
		const index = analyzed.push(entry) - 1;
		// Compare against established pages and the first eligible representative of new clusters.
		if (admitted.has(candidate.path) || !reason) for (const gram of grams) {
			if (!scopeIndex.has(gram)) { scopeIndex.set(gram, []); indexedGrams++; }
			scopeIndex.get(gram).push(index);
		}
		const left = remaining.get(scope) - 1;
		if (left) { remaining.set(scope, left); inverted.set(scope, scopeIndex); }
		else { remaining.delete(scope); inverted.delete(scope); indexedGrams -= scopeIndex.size; }
		if (onProgress && (analyzed.length % 10000 === 0 || analyzed.length === sorted.length)) onProgress({ phase: 'analysis', count: analyzed.length, scopes: inverted.size, indexedGrams, memory: process.memoryUsage() });
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

export function planIndexation({ candidates, baseline, previous, policy, now = new Date(), gitSha = 'development', allowRelease = true, onProgress }) {
	validateBaseline(baseline);
	validatePolicy(policy);
	validateManifest(previous, baseline, now);
	if (new Set(candidates.map((entry) => entry.path)).size !== candidates.length) throw new Error('URL candidate dupliquée.');
	const admitted = new Set([...baseline.paths, ...previous.batches.flatMap((batch) => batch.paths)]);
	const firstSeen = new Map((previous.pending ?? []).map((entry) => [entry.path, entry.firstSeen]));
	const analyzed = analyzeCandidates(candidates.map((entry) => ({ ...entry, firstSeen: firstSeen.get(entry.path) ?? now.toISOString() })), admitted, policy, { onProgress });
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
	const consolidation = consolidateEquivalentAnswers(analyzed, new Set([...admitted, ...selected]));
	const invalidPublished = analyzed.filter(entry => admitted.has(entry.path) && entry.reason && !consolidation.canonicalAliases[entry.path]);
	if (invalidPublished.length) throw new Error(`Pages publiées sans valeur propre validée : ${invalidPublished.slice(0, 20).map(entry => `${entry.path} (${entry.reason})`).join(', ')}`);
	const batches = [...previous.batches, ...(selected.length ? [{ openedAt: now.toISOString(), paths: selected.sort() }] : [])];
	const pending = analyzed.filter((entry) => !admitted.has(entry.path) && !newPaths.has(entry.path)).map((entry) => ({ path: entry.path, firstSeen: entry.firstSeen }));
	const checks = ['catalog', 'guides', 'usages'].flatMap((family) => [true, false].flatMap((indexable) => analyzed
		.filter((entry) => !consolidation.canonicalAliases[entry.path] && entry.family === family && (admitted.has(entry.path) || newPaths.has(entry.path)) === indexable)
		.sort((a, b) => Number(newPaths.has(b.path)) - Number(newPaths.has(a.path)))
		.slice(0, 3).map((entry) => ({ path: entry.path, indexable }))));
	const manifest = { schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha, builtAt: now.toISOString(), batches, pending, checks, canonicalAliases: consolidation.canonicalAliases };
	validateManifest(manifest, baseline, now);
	const report = analyzed.map((entry) => ({
		path: entry.path, family: entry.family, topic: entry.topic, contentHash: entry.contentHash, firstSeen: entry.firstSeen,
		value: entry.value, priority: entry.priority,
		qualityStatus: consolidation.canonicalAliases[entry.path] ? 'consolidated' : entry.reason ? 'needs-review' : 'mechanical-checks-passed',
		status: admitted.has(entry.path) ? 'existing' : newPaths.has(entry.path) ? 'released' : entry.reason ? 'held' : 'queued',
		reason: entry.reason ?? (admitted.has(entry.path) ? 'preserved-existing' : newPaths.has(entry.path) ? 'batch-admission' : policy.paused ? 'paused' : !allowRelease ? 'offline' : !ready ? 'cooldown' : 'batch-limit'),
		...(entry.similar ? { similar: entry.similar } : {}),
	}));
	return { manifest, report, consolidation, limits, released: selected.length, previousSha: previous.gitSha, allowRelease };
}

// Consolidation is limited to equal technical signatures within the same brand
// and page intent. Identifiers remain separate: this never merges catalog records.
export function consolidateEquivalentAnswers(analyzed, admitted) {
 const byPath = new Map(analyzed.map(entry => [entry.path, entry]));
 const groups = new Map();
 const canonicalAliases = {};
 for (const entry of analyzed) {
  if (!['catalog', 'usages'].includes(entry.family) || entry.reason !== 'near-duplicate' || !entry.similar) continue;
  let target = byPath.get(entry.similar.path);
  const visited = new Set([entry.path]);
  while (target?.reason === 'near-duplicate' && target.similar && !visited.has(target.path)) { visited.add(target.path); target = byPath.get(target.similar.path); }
  if (!target || visited.has(target.path) || target.signature !== entry.signature || target.topic !== entry.topic || target.family !== entry.family) continue;
  if (!groups.has(target.path)) groups.set(target.path, [target]);
  groups.get(target.path).push(entry);
  if (admitted.has(entry.path) && admitted.has(target.path)) canonicalAliases[entry.path] = target.path;
 }
 return { canonicalAliases, groups: [...groups].map(([primaryPath, entries]) => ({ primaryPath, members: entries.map(entry => ({ path: entry.path, label: entry.value?.label ?? entry.path, identity: entry.value?.identity, claims: entry.value?.claims, contentHash: entry.value?.contentHash })) })) };
}
