import { execFileSync } from 'node:child_process';
import { appendFile } from 'node:fs/promises';
import { planActionsStorage } from './lib/actions-storage.mjs';

const repository = process.env.GITHUB_REPOSITORY;
if (repository !== 'l0gfr/compatair') throw new Error('Storage policy is restricted to l0gfr/compatair');
if (process.argv.slice(2).some((argument) => argument !== '--apply')) throw new Error('Only --apply is supported; default is read-only');
const apply = process.argv.includes('--apply');
const apiRoot = `repos/${repository}/actions`;
function api(path, method = 'GET') {
	return execFileSync('gh', ['api', '--hostname', 'github.com', '--method', method, path], { encoding: 'utf8', timeout: 30_000, maxBuffer: 16 * 1024 * 1024 });
}
function inventory(path, key) {
	const rows = [];
	for (let page = 1; page <= 100; page += 1) {
		const result = JSON.parse(api(`${apiRoot}/${path}?per_page=100&page=${page}`));
		if (!Array.isArray(result[key])) throw new Error('Invalid GitHub inventory');
		rows.push(...result[key]);
		if (result[key].length < 100) return rows;
	}
	throw new Error('Inventory pagination limit exceeded; cleanup refused');
}
const response = await fetch('https://compatair.fr/data/release.json', { redirect: 'error', signal: AbortSignal.timeout(20_000) });
if (!response.ok) throw new Error(`Cannot verify live release: HTTP ${response.status}`);
const liveSha = (await response.json()).gitSha;
const artifacts = inventory('artifacts', 'artifacts');
const runs = inventory('workflows/deploy-production.yml/runs', 'workflow_runs');
const caches = inventory('caches', 'actions_caches');
const plan = planActionsStorage({ artifacts, runs, caches, liveSha, expectedSha: process.env.GITHUB_SHA });
function bytes(rows) { return rows.reduce((sum, row) => sum + row.size_in_bytes, 0); }
console.log(JSON.stringify({
	mode: apply ? 'apply' : 'dry-run', protectedShas: plan.protectedShas,
	artifactsBeforeBytes: bytes(artifacts), cachesBeforeBytes: bytes(caches),
	deleteArtifacts: plan.deleteArtifacts.map(({ id, name, size_in_bytes }) => ({ id, name, size_in_bytes })),
	deleteCaches: plan.deleteCaches.map(({ id, key, size_in_bytes }) => ({ id, key, size_in_bytes })),
}, null, 2));
if (apply) {
	for (const [kind, rows] of [['artifacts', plan.deleteArtifacts], ['caches', plan.deleteCaches]]) {
		for (const row of rows) {
			if (!Number.isSafeInteger(row.id) || row.id <= 0) throw new Error('Invalid GitHub object id');
			api(`${apiRoot}/${kind}/${row.id}`, 'DELETE');
		}
	}
	const remainingArtifacts = inventory('artifacts', 'artifacts');
	const remainingCaches = inventory('caches', 'actions_caches');
	const summary = {
		artifactsBytes: bytes(remainingArtifacts), cachesBytes: bytes(remainingCaches),
		deletedArtifacts: plan.deleteArtifacts.length, deletedCaches: plan.deleteCaches.length,
	};
	console.log(JSON.stringify(summary));
	if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY,
		`Stockage après nettoyage : ${(summary.artifactsBytes / 2 ** 20).toFixed(1)} Mio d'artefacts, ${(summary.cachesBytes / 2 ** 20).toFixed(1)} Mio de caches. Production et retour arrière conservés.\n`);
	if (summary.artifactsBytes > 512 * 2 ** 20 || summary.cachesBytes > 512 * 2 ** 20) {
		console.warn('::warning::CompatAir Actions storage exceeds the 512 MiB review threshold; inspect retained evidence and caches.');
	}
}
