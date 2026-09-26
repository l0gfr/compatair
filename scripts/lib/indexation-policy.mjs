export const INDEXATION_ORIGIN = 'https://compatair.fr';
export const INDEXATION_MANIFEST_PATH = '/data/indexation.json';
export const MAX_INDEXATION_ARTIFACT_AGE_MS = 86_400_000;
const pathPattern = /^\/(?:[a-z0-9-]+\/)*$/;

export function validatePath(path) {
	if (typeof path !== 'string' || !pathPattern.test(path)) throw new Error('Chemin d’indexation invalide.');
	return path;
}

export function excludedFromIndexation(path) {
	return ['/compatibilite/', '/go/', '/preuves/page/', '/sources-fiabilite/page/'].some((prefix) => path.startsWith(prefix))
		|| ['/404/', '/404.html', '/410/', '/comparateur/', '/offres/', '/recherche/', '/securite/'].includes(path);
}

// These routes only paginate existing libraries. Content detail routes never match.
export function isNavigationPath(path) {
	return /^\/guides\/(?:professionnels\/|metiers\/[a-z0-9-]+\/)?page\/(?:[2-9]|[1-9][0-9]+)\/$/.test(path)
		|| /^\/outils-pneumatiques\/usages\/[a-z0-9-]+\/(?:page\/[1-9][0-9]*\/)?$/.test(path)
		|| /^\/comparatifs\/compresseurs-debit-restitue\/marque\/[a-z0-9-]+\/(?:page\/[1-9][0-9]*\/)?$/.test(path)
		|| /^\/marques\/[a-z0-9-]+\/$/.test(path);
}

export function candidateFamily(path) {
	if (/^\/guides\/(?:[a-z0-9-]+\/)+$/.test(path)) return 'guides';
	if (/^\/(compresseurs|outils-pneumatiques)\/[^/]+\/$/.test(path)) return 'catalog';
	if (/^\/quel-compresseur-pour\/[^/]+\/$/.test(path)) return 'usages';
	return undefined;
}

export function validateBaseline(baseline) {
	if (baseline?.schemaVersion !== 1 || !/^[a-f0-9]{40}$/.test(baseline.sourceSha) || !Array.isArray(baseline.paths) || !baseline.paths.length) throw new Error('Base d’indexation invalide.');
	for (const path of baseline.paths) {
		validatePath(path);
		if (excludedFromIndexation(path)) throw new Error('URL exclue dans la base d’indexation.');
	}
	if (new Set(baseline.paths).size !== baseline.paths.length) throw new Error('Doublon dans la base d’indexation.');
	if (baseline.bootstrap) {
		if (!/^[a-f0-9]{40}$/.test(baseline.bootstrap.sourceSha) || !Array.isArray(baseline.bootstrap.additionalPaths)) throw new Error('Transition initiale invalide.');
		const paths = new Set(baseline.paths);
		for (const path of baseline.bootstrap.additionalPaths) {
			validatePath(path);
			if (paths.has(path) || excludedFromIndexation(path)) throw new Error('URL de transition invalide.');
			paths.add(path);
		}
	}
	return baseline;
}

export function validatePolicy(policy) {
	if (policy?.schemaVersion !== 1 || typeof policy.paused !== 'boolean'
		|| !Number.isInteger(policy.minimumDaysBetweenBatches) || policy.minimumDaysBetweenBatches < 7
		|| !Array.isArray(policy.stages) || !policy.stages.length
		|| !(policy.maximumTopicShare > 0 && policy.maximumTopicShare <= 1)
		|| !(policy.similarityThreshold >= 0.5 && policy.similarityThreshold <= 1)
		|| !(policy.containmentThreshold >= policy.similarityThreshold && policy.containmentThreshold <= 1)) throw new Error('Politique d’indexation invalide.');
	for (const stage of policy.stages) for (const family of ['catalog', 'guides']) {
		if (!Number.isInteger(stage[family]) || stage[family] < 1 || stage[family] > 500) throw new Error('Plafond de lot invalide.');
	}
	return policy;
}

export function validateManifest(manifest, baseline, now = new Date()) {
	if (manifest?.schemaVersion !== 1 || manifest.baselineSha !== baseline.sourceSha || !Array.isArray(manifest.batches)) throw new Error('Historique d’indexation incompatible.');
	if (!/^[a-f0-9]{40}$/.test(manifest.gitSha) && manifest.gitSha !== 'development') throw new Error('SHA d’indexation invalide.');
	if (!Number.isFinite(Date.parse(manifest.builtAt)) || Date.parse(manifest.builtAt) > now.getTime() + 300_000) throw new Error('Date d’indexation invalide.');
	const paths = new Set(baseline.paths);
	let previous = 0;
	for (const batch of manifest.batches) {
		const date = Date.parse(batch.openedAt);
		if (!Number.isFinite(date) || date < previous || date > Date.parse(manifest.builtAt) || !Array.isArray(batch.paths) || !batch.paths.length) throw new Error('Lot d’indexation invalide.');
		if (previous && date - previous < 7 * 86_400_000) throw new Error('Lots d’indexation trop rapprochés.');
		previous = date;
		for (const path of batch.paths) {
			validatePath(path);
			if (paths.has(path) || !['catalog', 'guides'].includes(candidateFamily(path))) throw new Error('URL de lot dupliquée ou hors périmètre.');
			paths.add(path);
		}
	}
	if (manifest.pending !== undefined && !Array.isArray(manifest.pending)) throw new Error('File d’indexation invalide.');
	for (const entry of manifest.pending ?? []) {
		validatePath(entry.path);
		if (paths.has(entry.path) || !candidateFamily(entry.path) || !Number.isFinite(Date.parse(entry.firstSeen)) || Date.parse(entry.firstSeen) > Date.parse(manifest.builtAt)) throw new Error('Entrée en attente invalide.');
		paths.add(entry.path);
	}
	return manifest;
}

export function createIndexationPolicy(baseline, manifest) {
	const admitted = new Set([...baseline.paths, ...manifest.batches.flatMap((batch) => batch.paths)]);
	return (path) => !excludedFromIndexation(path) && (admitted.has(path) || isNavigationPath(path));
}
