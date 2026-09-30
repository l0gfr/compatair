export const INDEXATION_ORIGIN = 'https://compatair.fr';
export const INDEXATION_MANIFEST_PATH = '/data/indexation.json';
export const MAX_INDEXATION_ARTIFACT_AGE_MS = 86_400_000;
export const INDEXATION_TIME_ZONE = 'Europe/Paris';
const dailyGroups = ['guides', 'compressors', 'tools'];
const dayFormatter = new Intl.DateTimeFormat('en-CA', { timeZone: INDEXATION_TIME_ZONE, year: 'numeric', month: '2-digit', day: '2-digit' });
const pathPattern = /^\/(?:[a-z0-9-]+\/)*$/;

export function indexationDay(date = new Date()) {
	if (!Number.isFinite(date.getTime())) throw new Error('Date de publication invalide.');
	return dayFormatter.format(date);
}

export function candidateQuotaGroup(path) {
	if (/^\/compresseurs\/[^/]+\/$/.test(path)) return 'compressors';
	if (/^\/outils-pneumatiques\/[^/]+\/$/.test(path)) return 'tools';
	if (candidateFamily(path) === 'guides') return 'guides';
	return undefined;
}

function validateDailyLimits(limits) {
	if (!limits || Object.keys(limits).length !== dailyGroups.length
		|| dailyGroups.some(group => !Number.isInteger(limits[group]) || limits[group] < 1 || limits[group] > 500)) throw new Error('Plafonds quotidiens invalides.');
}

export function indexationBatchReady(previous, policy, now = new Date()) {
	if (policy.schemaVersion === 2) return !previous.batches.some(batch => indexationDay(new Date(batch.openedAt)) === indexationDay(now));
	const last = previous.batches.at(-1);
	return !last || now.getTime() - Date.parse(last.openedAt) >= policy.minimumDaysBetweenBatches * 86_400_000 + MAX_INDEXATION_ARTIFACT_AGE_MS;
}

// A release that opens a daily batch expires at Paris midnight. Ordinary
// rebuilds preserve old batches, whose openedAt differs from their builtAt.
export function assertDailyIndexationDate(manifest, now = new Date()) {
	const batch = manifest.batches.at(-1);
	if (batch?.publicationDay && batch.openedAt === manifest.builtAt && batch.publicationDay !== indexationDay(now)) throw new Error('Le jour du lot a changé : reconstruire avant publication.');
}

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
	return /^\/guides\/(?:(?:professionnels|particuliers)\/|metiers\/[a-z0-9-]+\/)?page\/(?:[2-9]|[1-9][0-9]+)\/$/.test(path)
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
	if (![1, 2].includes(policy?.schemaVersion) || typeof policy.paused !== 'boolean'
		|| !(policy.maximumTopicShare > 0 && policy.maximumTopicShare <= 1)
		|| !(policy.similarityThreshold >= 0.5 && policy.similarityThreshold <= 1)
		|| !(policy.containmentThreshold >= policy.similarityThreshold && policy.containmentThreshold <= 1)) throw new Error('Politique d’indexation invalide.');
	if (policy.schemaVersion === 2) {
		if (policy.timeZone !== INDEXATION_TIME_ZONE || policy.stages !== undefined || policy.minimumDaysBetweenBatches !== undefined) throw new Error('Calendrier quotidien invalide.');
		validateDailyLimits(policy.dailyLimits);
	} else {
		if (!Number.isInteger(policy.minimumDaysBetweenBatches) || policy.minimumDaysBetweenBatches < 7 || !Array.isArray(policy.stages) || !policy.stages.length) throw new Error('Politique d’indexation invalide.');
		for (const stage of policy.stages) for (const family of ['catalog', 'guides']) {
			if (!Number.isInteger(stage[family]) || stage[family] < 1 || stage[family] > 500) throw new Error('Plafond de lot invalide.');
		}
	}
	return policy;
}

export function validateManifest(manifest, baseline, now = new Date()) {
	if (manifest?.schemaVersion !== 1 || manifest.baselineSha !== baseline.sourceSha || !Array.isArray(manifest.batches)) throw new Error('Historique d’indexation incompatible.');
	if (!/^[a-f0-9]{40}$/.test(manifest.gitSha) && manifest.gitSha !== 'development') throw new Error('SHA d’indexation invalide.');
	if (!Number.isFinite(Date.parse(manifest.builtAt)) || Date.parse(manifest.builtAt) > now.getTime() + 300_000) throw new Error('Date d’indexation invalide.');
	const paths = new Set(baseline.paths);
	let previous = 0;
	let dailyStarted = false;
	const publicationDays = new Set();
	for (const batch of manifest.batches) {
		const date = Date.parse(batch.openedAt);
		if (!Number.isFinite(date) || date < previous || date > Date.parse(manifest.builtAt) || !Array.isArray(batch.paths) || !batch.paths.length) throw new Error('Lot d’indexation invalide.');
		const day = indexationDay(new Date(date));
		if (batch.publicationDay !== undefined) {
			validateDailyLimits(batch.dailyLimits);
			if (batch.publicationDay !== day || publicationDays.has(day)) throw new Error('Jour de lot dupliqué ou invalide.');
			for (const group of dailyGroups) {
				if (batch.paths.filter(path => candidateQuotaGroup(path) === group).length > batch.dailyLimits[group]) throw new Error('Quota quotidien dépassé.');
			}
			dailyStarted = true;
		} else if (dailyStarted || batch.dailyLimits !== undefined || (previous && date - previous < 7 * 86_400_000)) throw new Error('Lots d’indexation trop rapprochés ou retour au calendrier historique.');
		publicationDays.add(day);
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
	const admitted = new Set([...baseline.paths, ...manifest.batches.flatMap(batch => batch.paths)]);
 for (const [alias, target] of Object.entries(manifest.canonicalAliases ?? {})) {
  validatePath(alias); validatePath(target);
  if (alias === target || !admitted.has(alias) || !admitted.has(target) || candidateFamily(alias) !== candidateFamily(target) || manifest.canonicalAliases[target]) throw new Error('Regroupement canonique invalide.');
 }
	return manifest;
}

export function createIndexationPolicy(baseline, manifest) {
	const admitted = new Set([...baseline.paths, ...manifest.batches.flatMap((batch) => batch.paths)]);
	return (path) => !excludedFromIndexation(path) && (admitted.has(path) || isNavigationPath(path));
}
