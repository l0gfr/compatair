import { setTimeout as pause } from 'node:timers/promises';

const retryDelays = [0, 1_000, 2_000, 4_000, 8_000, 12_000, 16_000];
const positiveInteger = /^[1-9][0-9]*$/;

export async function waitForArtifactProbe({
	repository, runId, attempt, sha, artifactId, digest, token,
}, { request = fetch, wait = pause } = {}) {
	if (!/^[a-z0-9][a-z0-9-]*\/[a-z0-9_][a-z0-9_.-]*$/i.test(repository ?? '')
		|| ![runId, attempt, artifactId].every(value => positiveInteger.test(value ?? '') && Number.isSafeInteger(Number(value)))
		|| !/^[a-f0-9]{40}$/.test(sha ?? '') || !/^[a-f0-9]{64}$/.test(digest ?? '') || !token) {
		throw new Error('Identité ou empreinte du témoin GitHub invalide.');
	}

	const base = `https://api.github.com/repos/${repository}/actions`;
	const listing = `${base}/runs/${runId}/artifacts?per_page=100`;
	const download = `${base}/artifacts/${artifactId}/zip`;
	const name = `compatair-artifact-probe-${runId}-${attempt}`;
	const headers = {
		accept: 'application/vnd.github+json',
		authorization: `Bearer ${token}`,
		'x-github-api-version': '2022-11-28',
	};
	const get = url => request(url, { headers, redirect: 'manual', signal: AbortSignal.timeout(5_000) });

	// The upload can complete before the run listing and download endpoint expose it.
	for (const delay of retryDelays) {
		if (delay) await wait(delay);
		const response = await get(listing);
		if (response.status !== 200) {
			await response.body?.cancel();
			throw new Error(`Liste des artefacts GitHub indisponible (HTTP ${response.status}).`);
		}
		const { artifacts } = await response.json();
		if (!Array.isArray(artifacts)) throw new Error('Liste des artefacts GitHub invalide.');
		const artifact = artifacts.find(item => item?.id === Number(artifactId));
		if (!artifact) continue;
		if (artifact.name !== name || artifact.expired !== false || artifact.digest !== `sha256:${digest}`
			|| artifact.workflow_run?.id !== Number(runId) || artifact.workflow_run?.head_sha !== sha) {
			throw new Error('Identité, provenance ou empreinte du témoin GitHub incohérente.');
		}

		const archive = await get(download);
		const location = archive.headers.get('location');
		await archive.body?.cancel();
		if (archive.status === 404) continue;
		if (archive.status === 302 && location) {
			const url = URL.parse(location);
			if (url?.protocol === 'https:' && !url.username && !url.password) return;
		}
		throw new Error(`Accès à l’archive du témoin GitHub invalide (HTTP ${archive.status}).`);
	}
	throw new Error('Témoin GitHub toujours indisponible après sept tentatives.');
}

if (import.meta.main) {
	const env = process.env;
	await waitForArtifactProbe({
		repository: env.GITHUB_REPOSITORY,
		runId: env.GITHUB_RUN_ID,
		attempt: env.GITHUB_RUN_ATTEMPT,
		sha: env.GITHUB_SHA,
		artifactId: env.PROBE_ARTIFACT_ID,
		digest: env.PROBE_ARTIFACT_DIGEST,
		token: env.GITHUB_TOKEN,
	});
	console.log('Témoin GitHub disponible pour le téléchargement vérifié.');
}
