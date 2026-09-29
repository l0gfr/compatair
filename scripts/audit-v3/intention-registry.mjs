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

const PUBLIC_ORIGIN = 'https://compatair.fr';
const HTML_LIMIT = 3 * 1024 * 1024;
const helper = fileURLToPath(new URL('./read-html-metadata.py', import.meta.url));
const normalizeText = text => text.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replace(/(\d),(\d)/g, '$1.$2').replace(/\s+/g, ' ').trim();
const sha256 = value => createHash('sha256').update(value).digest('hex');

// Field targets describe the frozen question, never substitute an undocumented value.
export function requestedFields(queryId) {
	if (['q001', 'q002', 'q003', 'q004', 'q005', 'q007', 'q008', 'q009'].includes(queryId)) return ['fadCurve'];
	if (queryId === 'q006') return ['fadCurve', 'dutyCycle'];
	if (queryId === 'q010') return ['maxPressureBar', 'fadCurve', 'dutyCycle'];
	if (['q015', 'q016', 'q019'].includes(queryId)) return ['airPerActionLiters', 'workingPressureBar'];
	if (/^q01[1-9]$|^q020$/.test(queryId)) return ['airflowLpm', 'workingPressureBar'];
	return [];
}

function claimSignatures(claim) {
	const v = claim.value;
	if (claim.field === 'fadCurve') return v.map(point => `${point.litersPerMinute} L/min à ${point.pressureBar} bar`);
	if (claim.field === 'airflowLpm') return [`${v.typical} L/min`];
	if (claim.field === 'workingPressureBar') return [`${v.typical} bar`];
	if (claim.field === 'maxPressureBar') return [`${v} bar`];
	if (claim.field === 'airPerActionLiters') return [`${v} L`];
	if (claim.field === 'dutyCycle') return [`${Math.round(v * 100)} %`];
	return [];
}

function containsSignature(text, signature) {
	const haystack = normalizeText(text);
	const needle = normalizeText(signature);
	let start = haystack.indexOf(needle);
	while (start >= 0) {
		const before = haystack[start - 1] ?? '';
		const after = haystack[start + needle.length] ?? '';
		if (!/[\d.,]/.test(before) && !/[\p{L}\d]/u.test(after)) return true;
		start = haystack.indexOf(needle, start + 1);
	}
	return false;
}

export function linkHtmlEvidence(query, page, html) {
	const fields = requestedFields(query.id);
	const blocks = html?.blocks ?? [];
	const sourceUrls = new Set(page.facts.flatMap(fact => fact.sourceUrls ?? fact.sources?.map(source => source.url) ?? []));
	const sourceLinks = [...sourceUrls].map(url => ({ url, presentInHtml: html?.links?.includes(url) ?? false }));
	const tokens = [...new Set(normalizeText(query.query).match(/[a-z0-9]+/g) ?? [])].filter(token => token.length >= 4 && !['pour', 'quel', 'avec', 'dans', 'plus', 'sans'].includes(token));
	const relatedPassages = blocks.filter(block => ['p', 'li', 'dd'].includes(block.tag)).map(block => ({ ...block, matchedQueryTerms: tokens.filter(token => normalizeText(block.text).includes(token)) })).filter(block => block.matchedQueryTerms.length > 0).sort((a, b) => b.matchedQueryTerms.length - a.matchedQueryTerms.length || a.ordinal - b.ordinal).slice(0, 4);
	const claims = fields.map(field => {
		const claim = page.facts.find(fact => fact.field === field);
		if (!claim) return { field, status: 'absent-from-declared-facts', value: null, sources: [], signatures: [] };
		const signatures = claimSignatures(claim).map(text => ({ text, witnesses: blocks.filter(block => containsSignature(block.text, text)).slice(0, 3) }));
		return { ...claim, status: !signatures.length ? 'declared-value-empty-or-unhandled' : signatures.every(signature => signature.witnesses.length) ? 'declared-value-found-in-html' : 'declared-value-not-located-in-html', signatures };
	});
	const identity = page.identity ? Object.entries(page.identity).map(([field, value]) => ({ field, value, witnesses: typeof value === 'string' ? blocks.filter(block => block.text.includes(value)).slice(0, 2) : [] })) : [];
	return {
		status: html?.status === 'read' ? 'html-read' : 'html-unavailable', htmlSha256: html?.htmlSha256 ?? null,
		identity, claims, sourceLinks, relatedPassages,
		// Link presence is inspectable publication evidence, never external corroboration.
		sourceLinkedPassages: blocks.filter(block => block.links?.some(url => sourceUrls.has(url))).map(block => ({ ...block, declaredSourceLinks: block.links.filter(url => sourceUrls.has(url)) })),
		answerCoverage: fields.length ? 'field-presence-only-not-a-complete-answer-certification' : 'related-guide-partial-association',
		limits: ['A matching number or linked source is not independent corroboration. HTML text extraction does not test CSS visibility or browser rendering.', 'Query-term matches select inspectable excerpts only; they do not certify that the intention is answered.', 'Pressure, FAD basis, control thresholds and scenario assumptions are not inferred from missing fields.'],
	};
}

async function readPublicResource(path, request, captureId) {
	assert.match(path, /^\/(?:[a-z0-9-]+\/)+$|^\/data\/release\.json$/);
	const requestedUrl = `${PUBLIC_ORIGIN}${path}?audit-intentions=${encodeURIComponent(captureId)}`;
	const response = await request(requestedUrl, { redirect: 'manual', signal: AbortSignal.timeout(15000), headers: { 'Cache-Control': 'no-cache', Accept: path.endsWith('.json') ? 'application/json' : 'text/html' } });
	assert.equal(response.status, 200, `Public HTTP status ${response.status} for ${path}; redirects are not followed`);
	const contentType = response.headers.get('content-type') ?? '';
	assert.ok(contentType.includes(path.endsWith('.json') ? 'application/json' : 'text/html'), `Unexpected public content type for ${path}`);
	const chunks = [];
	let size = 0;
	for await (const chunk of response.body) {
		size += chunk.byteLength;
		assert.ok(size <= HTML_LIMIT, `Public response exceeds ${HTML_LIMIT} bytes`);
		chunks.push(chunk);
	}
	return { requestedUrl, body: Buffer.concat(chunks).toString('utf8'), http: { status: response.status, contentType, xRobotsTag: response.headers.get('x-robots-tag') } };
}

/**
 * @typedef {{ tag: string, ordinal: number, id: string | null, text: string, links: string[] }} HtmlEvidenceBlock
 * @typedef {{ url: string, fetchedAt: string, requestedUrl: string, status: 'read', http: { status: number, contentType: string, xRobotsTag: string | null }, blocks: HtmlEvidenceBlock[], canonicals: string[], robots: string[], htmlSha256: string, title: string }} CapturedPublicPage
 * @typedef {{ url: string, fetchedAt: string, status: 'unavailable', error: string }} UnavailablePublicPage
 */
export async function capturePublicPages(paths, request = fetch) {
	const startedAt = new Date().toISOString();
	const before = JSON.parse((await readPublicResource('/data/release.json', request, `${startedAt}-before`)).body);
	assert.match(before.gitSha, /^[0-9a-f]{40}$/, 'Public release must identify a commit, never development');
	/** @type {Record<string, CapturedPublicPage | UnavailablePublicPage>} */
	const pages = {};
	// Sequential, bounded read-only requests; no source links, scripts or telemetry are executed.
	for (const path of paths) {
		const fetchedAt = new Date().toISOString();
		try {
			const response = await readPublicResource(path, request, startedAt);
			pages[path] = { url: `${PUBLIC_ORIGIN}${path}`, fetchedAt, requestedUrl: response.requestedUrl, http: response.http, ...JSON.parse(execFileSync('python3', [helper, '--document'], { input: response.body, encoding: 'utf8', maxBuffer: HTML_LIMIT * 2 })) };
		} catch (error) {
			pages[path] = { url: `${PUBLIC_ORIGIN}${path}`, fetchedAt, status: 'unavailable', error: error.message };
		}
	}
	const after = JSON.parse((await readPublicResource('/data/release.json', request, `${startedAt}-after`)).body);
	return { startedAt, finishedAt: new Date().toISOString(), origin: PUBLIC_ORIGIN, releaseBefore: before, releaseAfter: after, releaseStable: before.gitSha === after.gitSha, pages, limit: 'A release marker stable across this read-only capture is not a per-response cryptographic attestation or a Google observation.' };
}

export async function createRegistry(root, dist, { publicCapture = false } = {}) {
	const panelBytes = await readFile(join(root, 'config/seo-query-panel.json'));
	const panel = JSON.parse(panelBytes);
	const mappingBytes = await readFile(join(root, 'config/seo-intention-routes.json'));
	const mapping = JSON.parse(mappingBytes);
	assert.equal(mapping.panelId, panel.panelId);
	validateAssociations(panel, mapping.associations);
	const candidates = new Map((await collectIndexationCandidates(root)).map(candidate => [candidate.path, candidate]));
	const paths = [...new Set(mapping.associations.flatMap(row => row.routes))];
	const metadata = JSON.parse(execFileSync('python3', [helper, dist], { input: JSON.stringify(paths), encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }));
	const live = publicCapture ? await capturePublicPages(paths) : null;
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
		pages[path] = { relationStatus: 'source-exists', identity: candidate.value.identity ?? null, facts, declaredContribution: candidate.value.contribution ?? null, sources: candidate.value.sources ?? null, nextSteps: candidate.value.nextSteps ?? [], contentHash: candidate.value.contentHash, documentaryChecks: candidate.value.reasons, declaredSeo: { status: metadata[path].status, robots: metadata[path].robots, canonicals: metadata[path].canonicals, htmlSha256: metadata[path].htmlSha256, title: metadata[path].title } };
	}
	const builtRelease = JSON.parse(await readFile(join(dist, 'data/release.json'), 'utf8'));
	const evidenceChains = panel.queries.map(query => {
		const association = mapping.associations.find(row => row.queryId === query.id);
		return { queryId: query.id, requestedFact: { originalQuestion: query.query, fieldTargets: requestedFields(query.id) }, relation: association.relation,
			routes: association.routes.map(path => ({ path, identity: pages[path].identity ?? { type: 'editorial-page', route: path, declaredTitle: metadata[path].title ?? null }, canonicalDeclaredLocally: pages[path].declaredSeo.canonicals,
				localHtml: linkHtmlEvidence(query, pages[path], metadata[path]),
				publicPage: live ? { url: live.pages[path].url, requestedUrl: live.pages[path].requestedUrl ?? null, fetchedAt: live.pages[path].fetchedAt, http: live.pages[path].http ?? null, status: live.pages[path].status, error: live.pages[path].error ?? null, canonicals: live.pages[path].canonicals ?? [], robots: live.pages[path].robots ?? [], releaseStable: live.releaseStable, evidence: linkHtmlEvidence(query, pages[path], live.pages[path]) } : { url: `${PUBLIC_ORIGIN}${path}`, status: 'not-observed' },
			})), seoObservations: query.observations, seoObservationStatus: query.observations.length ? 'supplied' : 'unavailable' };
	});
	return {
		schemaVersion: 2, generatedAt: new Date().toISOString(), panelId: panel.panelId,
		builtRelease, localEvidenceScope: /^[0-9a-f]{40}$/.test(builtRelease.gitSha) ? 'local-build-with-revision-not-production-proof' : 'local-development-build-not-production',
		publicCapture: live ? { ...live, pages: undefined, pageCount: paths.length, unavailable: paths.filter(path => live.pages[path].status !== 'read') } : null, evidenceChains,
		provenance: { panelSha256: createHash('sha256').update(panelBytes).digest('hex'), associationsSha256: createHash('sha256').update(mappingBytes).digest('hex'), origin: panel.origin, sourceCommit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(), sourceCommitScope: 'HEAD marker; producer hashes identify the working files used by this audit', producerSha256: { registry: sha256(await readFile(fileURLToPath(import.meta.url))), htmlReader: sha256(await readFile(helper)), candidateCollector: sha256(await readFile(join(root, 'scripts/lib/indexation-candidates.mjs'))) } },
		measurementStatus: panel.measurementStatus, measurementLimit: panel.measurementLimit,
		intentions: panel.queries.map(query => ({ ...query, country: panel.country, devices: panel.devices, association: mapping.associations.find(row => row.queryId === query.id) })),
		pages, summary: { intentions: 100, associated: mapping.associations.filter(row => row.routes.length).length, unmapped: mapping.associations.filter(row => !row.routes.length).map(row => row.queryId), distinctRoutes: paths.length, observationCount: panel.queries.reduce((sum, q) => sum + q.observations.length, 0), missingBuilds: paths.filter(path => metadata[path].status !== 'read') },
		limits: ['Local declarations are not effective Google indexing or rank observations.', 'Related guides are explicit partial associations, not proof that the full query is answered.', 'Source-linked passages are extracted verbatim as JSON data; external documents are not revalidated by this report.', 'Public capture is opt-in and limited to same-origin read-only requests; no external source requests, telemetry, report script execution or HTML insertion.', 'Local development markers never identify production. Public HTML evidence and SEO observations remain separate.'],
	};
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
	const [dist = 'dist', output = 'docs/audit-v5/intention-registry.json', flag] = process.argv.slice(2);
	assert.ok(flag === undefined || flag === '--public', 'Only --public enables public HTTP capture');
	const report = await createRegistry(process.cwd(), resolve(dist), { publicCapture: flag === '--public' });
	await writeFile(output, JSON.stringify(report, null, 2) + '\n');
	console.log(JSON.stringify(report.summary));
}
