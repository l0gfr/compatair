import { INDEXATION_MANIFEST_PATH, INDEXATION_ORIGIN, validateManifest, validatePath } from './indexation-policy.mjs';
import { extractSitemapLocations } from './live-seo-verification.mjs';

export async function fetchIndexationText(path, { fetchImpl = fetch, allowMissing = false } = {}) {
	if (!['/data/release.json', INDEXATION_MANIFEST_PATH, '/sitemap-index.xml'].includes(path) && !/^\/sitemap-[a-z0-9-]+\.xml$/.test(path)) throw new Error('Ressource d’indexation non autorisée.');
	const response = await fetchImpl(new URL(path, INDEXATION_ORIGIN), {
		redirect: 'error', headers: { 'Cache-Control': 'no-cache' }, signal: AbortSignal.timeout(20_000),
	});
	if (allowMissing && response.status === 404) return undefined;
	if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
	const chunks = [];
	let bytes = 0;
	for await (const chunk of response.body) {
		bytes += chunk.length;
		if (bytes > 10 * 1024 * 1024) throw new Error(`${path}: réponse trop volumineuse`);
		chunks.push(chunk);
	}
	return Buffer.concat(chunks).toString('utf8');
}

function releaseSha(text) {
	const sha = JSON.parse(text).gitSha;
	if (!/^[a-f0-9]{40}$/.test(sha ?? '')) throw new Error('Révision publique invalide.');
	return sha;
}

export async function readLiveIndexation(baseline, { fetchImpl = fetch, now = new Date() } = {}) {
	const get = (path, options = {}) => fetchIndexationText(path, { fetchImpl, ...options });
	const before = releaseSha(await get('/data/release.json'));
	const raw = await get(INDEXATION_MANIFEST_PATH, { allowMissing: true });
	let manifest;
	if (raw === undefined) {
		// Bootstrap is allowed only against the captured release, never as a fallback for an outage.
		if (before !== (baseline.bootstrap?.sourceSha ?? baseline.sourceSha)) throw new Error('Premier déploiement : la production a changé depuis la capture du sitemap. Vérifier la transition avant activation.');
		const baselinePaths = new Set([...baseline.paths, ...(baseline.bootstrap?.additionalPaths ?? [])]);
		const children = extractSitemapLocations(await get('/sitemap-index.xml'));
		if (!children.length || children.length > 100) throw new Error('Index de sitemaps invalide.');
		for (const child of children) {
			const url = new URL(child);
			if (url.origin !== INDEXATION_ORIGIN || url.search || url.hash) throw new Error('Sitemap hors origine.');
			for (const location of extractSitemapLocations(await get(url.pathname))) {
				const page = new URL(location);
				if (page.origin !== INDEXATION_ORIGIN || page.search || page.hash || !baselinePaths.has(validatePath(page.pathname))) throw new Error('La base ne couvre pas toutes les URL actuellement publiées.');
			}
		}
		manifest = { schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha: before, builtAt: now.toISOString(), batches: [] };
	} else {
		manifest = validateManifest(JSON.parse(raw), baseline, now);
		if (manifest.gitSha !== before) throw new Error('Historique SEO et release publique incohérents.');
	}
	if (releaseSha(await get('/data/release.json')) !== before) throw new Error('La production a changé pendant la préparation SEO. Relancer le build.');
	return manifest;
}
