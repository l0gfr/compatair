const shaPattern = /^[a-f0-9]{40}$/;
const fullArtifactPattern = /^(?:compatair-production-|lighthouse-(?:production-)?)([a-f0-9]{40})$/;
const threeDays = 3 * 24 * 60 * 60 * 1000;
function timestamp(value) {
	if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value)) return NaN;
	const parsed = Date.parse(value);
	return Number.isFinite(parsed) && new Date(parsed).toISOString().slice(0, 19) === value.slice(0, 19) ? parsed : NaN;
}

// Only generated release archives, full Lighthouse reports and redundant CodeQL
// caches are eligible. Signed invariants and source/security evidence are excluded.
export function planActionsStorage({ artifacts, runs, caches, liveSha, expectedSha, previousLiveSha, now = Date.now() }) {
	if (!shaPattern.test(expectedSha) || liveSha !== expectedSha) throw new Error('Live release does not match the expected commit; no cleanup permitted');
	if (!shaPattern.test(previousLiveSha) || previousLiveSha === liveSha) throw new Error('Previous observed release is missing or invalid; no cleanup permitted');
	const mainRuns = runs.filter((run) => run.head_branch === 'main' && shaPattern.test(run.head_sha));
	const byRunId = new Map(mainRuns.map((run) => [run.id, run]));
	const previous = mainRuns
		.filter((run) => run.status === 'completed' && run.conclusion === 'success' && run.head_sha !== liveSha)
		.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))[0];
	if (!previous) throw new Error('No verified rollback identified; no cleanup permitted');
	// A cancelled workflow can still be the independently verified release served
	// immediately before activation. Protect its exact checkpoint SHA as well.
	const protectedShas = [...new Set([liveSha, previousLiveSha, previous.head_sha])];
	if (!artifacts.some((artifact) => !artifact.expired && artifact.name === `compatair-production-${liveSha}` && artifact.workflow_run?.head_sha === liveSha)) {
		throw new Error('Production archive missing; no cleanup permitted');
	}
	const deleteArtifacts = artifacts.filter((artifact) => {
		const match = fullArtifactPattern.exec(artifact.name);
		if (!match || protectedShas.includes(match[1])) return false;
		const run = byRunId.get(artifact.workflow_run?.id);
		if (!run || run.status !== 'completed' || run.head_sha !== match[1] || artifact.workflow_run?.head_sha !== match[1]) return false;
		// Keep recent failure diagnostics, but never retain another full release.
		return artifact.name.startsWith('compatair-production-') || run.conclusion === 'success'
			|| now - Date.parse(artifact.created_at) > threeDays;
	});
	// Reruns can upload several copies of a protected SHA. Only a wholly known,
	// successful group permits deduplication; an uncertain observed rollback stays.
	for (const sha of protectedShas) {
		const group = artifacts.filter(artifact => artifact.name === `compatair-production-${sha}`);
		if (group.length < 2 || !group.every(artifact => {
			const run = byRunId.get(artifact.workflow_run?.id);
			const createdAt = timestamp(artifact.created_at), startedAt = timestamp(run?.created_at);
			return artifact.expired === false && Number.isSafeInteger(artifact.id) && artifact.id > 0
				&& artifacts.filter(candidate => candidate.id === artifact.id).length === 1
				&& run && Number.isSafeInteger(run.id) && run.id > 0
				&& runs.filter(candidate => candidate.id === run.id).length === 1
				&& run.status === 'completed' && run.conclusion === 'success' && run.head_sha === sha
				&& artifact.workflow_run.head_sha === sha
				&& (artifact.workflow_run.head_branch === undefined || artifact.workflow_run.head_branch === 'main')
				&& Number.isFinite(createdAt) && Number.isFinite(startedAt) && createdAt >= startedAt && createdAt <= now;
		})) continue;
		group.sort((a, b) => timestamp(b.created_at) - timestamp(a.created_at));
		if (timestamp(group[0].created_at) === timestamp(group[1].created_at)) continue;
		deleteArtifacts.push(...group.slice(1));
	}
	const cacheGroups = new Map();
	for (const cache of caches) {
		const match = /^(codeql-overlay-base-database-.+)-[a-f0-9]{40}-\d+-\d+$/.exec(cache.key);
		if (!match || cache.ref !== 'refs/heads/main') continue;
		const group = cacheGroups.get(match[1]) ?? [];
		group.push(cache);
		cacheGroups.set(match[1], group);
	}
	const pageCaches = caches.filter(cache => /^compatair-pages-v[12]-[A-Za-z0-9._-]+-[a-f0-9]{64}-[a-f0-9]{40}$/.test(cache.key) && cache.ref === 'refs/heads/main');
	const verdictCaches = caches.filter(cache => /^compatair-verdict-v1-[A-Za-z0-9._-]+-[a-f0-9]{64}$/.test(cache.key) && cache.ref === 'refs/heads/main');
	const calculationCaches = caches.filter(cache => /^compatair-page-calculations-v1-[A-Za-z0-9._-]+-[a-f0-9]{40}$/.test(cache.key) && cache.ref === 'refs/heads/main');
	const deleteCaches = [...cacheGroups.values(), pageCaches, calculationCaches].flatMap((group) => group
		.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)).slice(1));
	// One latest calculation cache, independently bounded to 64 MiB by the
	// writer. Never retain one full cache per catalog revision or commit.
	deleteCaches.push(...verdictCaches.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)).slice(1));
	return { protectedShas, deleteArtifacts, deleteCaches };
}
