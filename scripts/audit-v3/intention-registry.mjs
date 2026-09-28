import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { collectIndexationCandidates } from '../lib/indexation-candidates.mjs';

export function validateAssociations(panel, associations) {
	assert.equal(panel.queries.length, 100, 'The original frozen 100-intention panel is required');
	assert.equal(new Set(panel.queries.map(q => q.id)).size, 100);
	assert.equal(associations.length, 100);
	assert.deepEqual([...associations.map(row => row.queryId)].sort(), [...panel.queries.map(q => q.id)].sort());
	for (const row of associations) {
		assert.equal(new Set(row.routes).size, row.routes.length);
		for (const route of row.routes) assert.match(route, /^\/(?:[a-z0-9-]+\/)+$/);
	}
}

export async function createRegistry(root, dist) {
	const panelBytes = await readFile(join(root, 'config/seo-query-panel.json'));
	const panel = JSON.parse(panelBytes);
	const mappingBytes = await readFile(join(root, 'config/seo-intention-routes.json'));
	const mapping = JSON.parse(mappingBytes);
	assert.equal(mapping.panelId, panel.panelId);
	validateAssociations(panel, mapping.associations);
	const candidates = new Map((await collectIndexationCandidates(root)).map(candidate => [candidate.path, candidate]));
	const paths = [...new Set(mapping.associations.flatMap(row => row.routes))];
	const helper = fileURLToPath(new URL('./read-html-metadata.py', import.meta.url));
	const metadata = JSON.parse(execFileSync('python3', [helper, dist], { input: JSON.stringify(paths), encoding: 'utf8' }));
	const pages = {};
	for (const path of paths) {
		const candidate = candidates.get(path);
		assert.ok(candidate, `Association to absent source route: ${path}`);
		let facts = candidate.value.claims ?? [];
		if (candidate.family === 'guides') {
			const file = join(root, 'src/content', `${path.slice(1, -1)}.md`);
			const raw = await readFile(file, 'utf8');
			facts = raw.split(/\r?\n\s*\r?\n/).filter(paragraph => /\]\(https:\/\//.test(paragraph)).map(paragraph => ({
				declaredPassage: paragraph.trim(),
				sourceUrls: [...new Set([...paragraph.matchAll(/\]\((https:\/\/[^\s)]+)\)/g)].map(match => match[1]))],
				line: raw.slice(0, raw.indexOf(paragraph)).split('\n').length,
			}));
		}
		pages[path] = { relationStatus: 'source-exists', identity: candidate.value.identity ?? null, facts, declaredContribution: candidate.value.contribution ?? null, sources: candidate.value.sources ?? null, nextSteps: candidate.value.nextSteps ?? [], contentHash: candidate.value.contentHash, documentaryChecks: candidate.value.reasons, declaredSeo: metadata[path] };
	}
	return {
		schemaVersion: 1, generatedAt: new Date().toISOString(), panelId: panel.panelId,
		builtRelease: JSON.parse(await readFile(join(dist, 'data/release.json'), 'utf8')),
		provenance: { panelSha256: createHash('sha256').update(panelBytes).digest('hex'), associationsSha256: createHash('sha256').update(mappingBytes).digest('hex'), origin: panel.origin, sourceCommit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim() },
		measurementStatus: panel.measurementStatus, measurementLimit: panel.measurementLimit,
		intentions: panel.queries.map(query => ({ ...query, country: panel.country, devices: panel.devices, association: mapping.associations.find(row => row.queryId === query.id) })),
		pages, summary: { intentions: 100, associated: mapping.associations.filter(row => row.routes.length).length, unmapped: mapping.associations.filter(row => !row.routes.length).map(row => row.queryId), distinctRoutes: paths.length, observationCount: panel.queries.reduce((sum, q) => sum + q.observations.length, 0), missingBuilds: paths.filter(path => metadata[path].status !== 'read') },
		limits: ['Local declarations are not effective Google indexing or rank observations.', 'Related guides are explicit partial associations, not proof that the full query is answered.', 'Source-linked passages are extracted verbatim as JSON data; external documents are not revalidated by this report.', 'No external request, telemetry, script from the report or HTML insertion.'],
	};
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
	const [dist = 'dist', output = 'docs/audit-v3/intention-registry.json'] = process.argv.slice(2);
	const report = await createRegistry(process.cwd(), resolve(dist));
	await writeFile(output, JSON.stringify(report, null, 2) + '\n');
	console.log(JSON.stringify(report.summary));
}
