import { describe, expect, it } from 'vitest';
import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { indexationBuildProjection, writeIndexationArtifact } from './indexation-artifact.mjs';
import { analyzeCandidates, editorialText, planIndexation, productCandidate } from './indexation-planner.mjs';
import { createIndexationPolicy, validateManifest, validatePolicy } from './indexation-policy.mjs';
import { readLiveIndexation } from './indexation-live.mjs';

const baseline = { schemaVersion: 1, sourceSha: 'a'.repeat(40), paths: ['/', '/guides/existant/'] };
const now = new Date('2026-09-26T12:00:00.000Z');
const previous = { schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha: baseline.sourceSha, builtAt: now.toISOString(), batches: [] };
const policy = { schemaVersion: 1, paused: false, minimumDaysBetweenBatches: 7, stages: [{ catalog: 50, guides: 5 }, { catalog: 100, guides: 10 }], maximumTopicShare: 0.25, similarityThreshold: 0.82, containmentThreshold: 0.92 };
function candidate(index, family = 'guides') {
	// Distinct prose tokens, not just renamed entities or changed numbers.
	const letters = index.toString(26).replace(/\d/g, (digit) => String.fromCharCode(107 + Number(digit)));
	return { path: `/${family === 'guides' ? 'guides' : 'compresseurs'}/nouveau-${index}/`, family, topic: letters, text: Array.from({ length: 40 }, (_, i) => `${letters}mot${String.fromCharCode(97 + i % 26)}`).join(' '), signature: letters };
}
const candidates = Array.from({ length: 200 }, (_, i) => candidate(i));
const plan = (overrides = {}) => planIndexation({ candidates, baseline, previous, policy, now, ...overrides });
const parity = JSON.parse(await readFile(new URL('../../tests/fixtures/audit-v5/indexation-parity.json', import.meta.url), 'utf8'));

describe('bounded planner preserves the pinned admission decisions', () => {
	it.each(parity.cases)('matches the complete aa2b856d plan: $name', ({ expectedPlanSha256, ...scenario }) => {
		const result = planIndexation({ ...parity, ...scenario, now: new Date(parity.now) });
		expect(createHash('sha256').update(JSON.stringify(result)).digest('hex')).toBe(expectedPlanSha256);
	});
	it('releases completed comparison scopes and retains cardinalities only', () => {
		const samples = [];
		const result = analyzeCandidates(parity.candidates, new Set(parity.baseline.paths), parity.policy, { onProgress: sample => samples.push(sample) });
		expect(result.every(entry => Number.isInteger(entry.gramCount) && !Object.hasOwn(entry, 'grams'))).toBe(true);
		expect(samples.at(-1)).toMatchObject({ count: parity.candidates.length, scopes: 0, indexedGrams: 0 });
	});
	it('streams the full plan unchanged and gives the build only its required projection', async () => {
		const directory = await mkdtemp(join(tmpdir(), 'indexation-artifact-'));
		try {
			const result = planIndexation({ ...parity, now: new Date(parity.now) });
			const path = join(directory, 'plan.json');
			const digest = await writeIndexationArtifact(path, result);
			const bytes = await readFile(path);
			expect(JSON.parse(bytes)).toEqual(JSON.parse(JSON.stringify(result)));
			expect(digest).toBe(createHash('sha256').update(bytes).digest('hex'));
			const projection = indexationBuildProjection(result, digest);
			expect(projection).not.toHaveProperty('report');
			expect(projection).toMatchObject({ manifest: result.manifest, consolidation: result.consolidation, previousSha: result.previousSha, allowRelease: result.allowRelease, reportSha256: digest });
			await expect(writeIndexationArtifact(path, { invalid: 1n })).rejects.toThrow();
			expect(await readFile(path)).toEqual(bytes);
		} finally { await rm(directory, { recursive: true, force: true }); }
	});
	it('loads across bounded workers in exact order, supports eval entry points and rejects overridden heap limits', async () => {
		const directory = await mkdtemp(join(tmpdir(), 'indexation-workers-'));
		try {
			for (const path of ['src/data/products/compressors', 'src/data/products/tools', 'src/content/guides', 'config']) await mkdir(join(directory, path), { recursive: true });
			await writeFile(join(directory, 'config/seo-query-panel.json'), JSON.stringify({ queries: [] }));
			await writeFile(join(directory, 'config/indexation-editorial-holds.json'), JSON.stringify({ schemaVersion: 1, holds: [] }));
			for (let i = 0; i < 1025; i++) await writeFile(join(directory, 'src/data/products/compressors', `${String(i).padStart(4, '0')}.ts`), `export default ${JSON.stringify({ id: String(i), slug: `ref-${i}`, brand: 'Fixture', model: String(i), evidence: [], fadCurve: [], cutInPressureBar: 4, cutOutPressureBar: 8 })};`);
			const moduleUrl = new URL('./indexation-candidates.mjs', import.meta.url).href;
			const code = `import {collectIndexationCandidates} from ${JSON.stringify(moduleUrl)}; const samples=[];const rows=await collectIndexationCandidates(${JSON.stringify(directory)},{onProgress:x=>samples.push(x.products)});console.log(JSON.stringify({paths:rows.map(x=>x.path),samples}));`;
			const { stdout } = await promisify(execFile)(process.execPath, ['--input-type=module', '-e', code], { timeout: 30000 });
			const result = JSON.parse(stdout);
			expect(result.paths).toEqual(Array.from({ length: 1025 }, (_, i) => `/compresseurs/ref-${i}/`));
			expect(result.samples).toEqual([1024, 1025]);
			await expect(promisify(execFile)(process.execPath, ['--max-old-space-size=4096', '--input-type=module', '-e', code], { timeout: 30000 })).rejects.toThrow('SEO worker heap exceeds');
		} finally { await rm(directory, { recursive: true, force: true }); }
	}, 40000);
});

describe('automatic progressive indexation', () => {
	it('caps guides and catalog separately and keeps thousands of new pages out', () => {
		const result = plan({ candidates: [...candidates, ...Array.from({ length: 1000 }, (_, i) => candidate(i, 'catalog'))] });
		expect(result.report.filter((entry) => entry.status === 'released' && entry.family === 'guides')).toHaveLength(5);
		expect(result.report.filter((entry) => entry.status === 'released' && entry.family === 'catalog')).toHaveLength(50);
		const allowed = createIndexationPolicy(baseline, result.manifest);
		expect(allowed('/guides/existant/')).toBe(true);
		expect(allowed('/guides/inconnu/')).toBe(false);
		expect(allowed('/compresseurs/inconnu/')).toBe(false);
		expect(allowed('/quel-compresseur-pour/inconnu/')).toBe(false);
		expect(allowed('/404/')).toBe(false);
		expect(allowed('/guides/metiers/garage/page/10/')).toBe(true);
	});
	it('is repeatable against the same live checkpoint and does not consume slots on local builds', () => {
		expect(plan().manifest).toEqual(plan().manifest);
		const published = plan().manifest;
		const again = plan({ previous: published, now: new Date(now.getTime() + 86_400_000) });
		expect(again.released).toBe(0);
		expect(again.manifest.batches).toEqual(published.batches);
	});
	it('does not catch up missed weeks and retains previously published pages', () => {
		const first = plan().manifest;
		const next = plan({ previous: first, now: new Date('2027-09-26T12:00:00.000Z') });
		expect(next.released).toBe(10);
		expect(next.manifest.batches).toHaveLength(2);
		expect(next.manifest.batches[0]).toEqual(first.batches[0]);
	});
	it('allows for the maximum deployment delay before opening the next batch', () => {
		const first = plan().manifest;
		expect(plan({ previous: first, now: new Date(now.getTime() + 7 * 86_400_000) }).released).toBe(0);
		expect(plan({ previous: first, now: new Date(now.getTime() + 8 * 86_400_000) }).released).toBe(10);
	});
	it('does not accelerate the catalog merely because guides have been released', () => {
		const first = plan().manifest;
		const result = plan({ previous: first, now: new Date('2026-10-04T12:00:00.000Z'), candidates: [...candidates, ...Array.from({ length: 200 }, (_, i) => candidate(i, 'catalog'))] });
		expect(result.limits).toEqual({ catalog: 50, guides: 10 });
	});
	it('limits a single topic, pauses releases and can build an offline preview', () => {
		expect(plan({ candidates: candidates.map((entry) => ({ ...entry, topic: 'unique' })) }).released).toBe(2);
		expect(plan({ policy: { ...policy, paused: true } }).released).toBe(0);
		expect(plan({ allowRelease: false }).released).toBe(0);
	});
	it('prioritizes a published waiting list over more recent alphabetically earlier imports', () => {
		const first = plan().manifest;
		const newer = Array.from({ length: 20 }, (_, i) => ({ ...candidate(i + 400), path: `/guides/aaa-new-${i}/` }));
		const next = plan({ previous: first, now: new Date('2026-10-04T12:00:00.000Z'), candidates: [...candidates, ...newer] });
		expect(next.manifest.batches.at(-1).paths.some((path) => path.includes('/aaa-new-'))).toBe(false);
	});
	it('rejects invalid policies, dates, paths, duplicate admissions and foreign baselines', () => {
		expect(() => validatePolicy({ ...policy, minimumDaysBetweenBatches: 0 })).toThrow();
		expect(() => validateManifest({ ...previous, baselineSha: 'b'.repeat(40) }, baseline, now)).toThrow();
		for (const paths of [['/guides/existant/'], ['//evil.test/'], ['/guides/a/', '/guides/a/']]) {
			expect(() => validateManifest({ ...previous, batches: [{ openedAt: now.toISOString(), paths }] }, baseline, now)).toThrow();
		}
		expect(() => plan({ previous: { ...previous, builtAt: 'wrong' } })).toThrow();
	});
});

describe('repetition detection includes guides', () => {
	const text = 'Une fuite impose une mesure au point de raccordement avant de choisir le compresseur. La pression doit rester stable pendant toute la phase de fonctionnement. Vérifier le flexible puis le raccord évite une conclusion erronée sur la machine.';
	it('holds copied guides despite changed title, links, SVG and numeric examples', () => {
		const guide = { ...candidate(0), text: `${text} Le seuil vaut 220 litres.`, path: '/guides/existant/' };
		const duplicate = { ...candidate(1), text: editorialText(`${text} Le seuil vaut 440 litres.\n<svg><text>Autre illustration</text></svg>\n## Sources\nUne longue bibliographie différente.`) };
		const result = plan({ candidates: [guide, duplicate] });
		expect(result.report.find((entry) => entry.path === duplicate.path)?.reason).toBe('near-duplicate');
		expect(result.released).toBe(0);
	});
	it('rechecks waiting content and blocks published duplicates until they are resolved', () => {
		const original = { ...candidate(0), text, path: '/guides/existant/' };
		expect(plan({ candidates: [original, { ...candidate(1), text }] }).released).toBe(0);
		expect(plan({ candidates: [original, candidate(1)] }).released).toBe(1);
		const extended = { ...baseline, paths: [...baseline.paths, candidate(1).path] };
		expect(() => plan({ baseline: extended, candidates: [original, { ...candidate(1), text }] })).toThrow('Pages publiées sans valeur propre validée');
	});
	it('holds repetitive product clones with the same technical signature, keeps substantive differences', () => {
		const entries = [
			{ ...candidate(0, 'catalog'), text, topic: 'same-brand', signature: 'same' },
			{ ...candidate(1, 'catalog'), text, topic: 'same-brand', signature: 'same' },
			{ ...candidate(2, 'catalog'), text, signature: 'different-fad' },
		];
		const result = analyzeCandidates(entries, new Set(), policy);
		expect(result.filter((entry) => entry.reason === 'near-duplicate')).toHaveLength(1);
		expect(result.find((entry) => entry.signature === 'different-fad')?.reason).toBeUndefined();
	});
	it('requires critical sources and holds duplicate tool-use entry points', () => {
		expect(productCandidate({ slug: 'new', brand: 'X', editorial: {} }, 'tools').blockedReason).toBe('missing-critical-source');
		const result = plan({ candidates: [{ ...candidate(1), family: 'usages', path: '/quel-compresseur-pour/nouveau/', blockedReason: 'shared-product-answer' }] });
		expect(result.released).toBe(0);
	});
});

describe('public checkpoint retrieval', () => {
	function fetcher(overrides = {}) {
		const fixtures = {
			'/data/release.json': { gitSha: baseline.sourceSha },
			'/data/indexation.json': previous,
			'/sitemap-index.xml': '<sitemapindex><sitemap><loc>https://compatair.fr/sitemap-0.xml</loc></sitemap></sitemapindex>',
			'/sitemap-0.xml': '<urlset><url><loc>https://compatair.fr/</loc></url></urlset>',
			...overrides,
		};
		return async (url) => {
			const value = fixtures[url.pathname];
			return new Response(value === 404 ? '' : typeof value === 'string' ? value : JSON.stringify(value), { status: value === 404 ? 404 : 200 });
		};
	}
	it('reads only the same release and permits a verified first deployment', async () => {
		expect(await readLiveIndexation(baseline, { fetchImpl: fetcher(), now })).toEqual(previous);
		expect((await readLiveIndexation(baseline, { fetchImpl: fetcher({ '/data/indexation.json': 404 }), now })).batches).toEqual([]);
	});
	it('can record a concurrent publication without grandfathering its new pages', async () => {
		const currentSha = 'b'.repeat(40);
		const transition = { ...baseline, bootstrap: { sourceSha: currentSha, additionalPaths: ['/guides/nouveau/'] } };
		const live = await readLiveIndexation(transition, { fetchImpl: fetcher({
			'/data/release.json': { gitSha: currentSha }, '/data/indexation.json': 404,
			'/sitemap-0.xml': '<loc>https://compatair.fr/</loc><loc>https://compatair.fr/guides/nouveau/</loc>',
		}), now });
		expect(live.gitSha).toBe(currentSha);
		expect(createIndexationPolicy(transition, live)('/guides/nouveau/')).toBe(false);
	});
	it('fails closed on an outage, changed release, foreign sitemap or missing history after bootstrap', async () => {
		await expect(readLiveIndexation(baseline, { fetchImpl: async () => { throw new Error('offline'); }, now })).rejects.toThrow('offline');
		await expect(readLiveIndexation(baseline, { fetchImpl: fetcher({ '/data/release.json': { gitSha: 'b'.repeat(40) } }), now })).rejects.toThrow('incohérents');
		await expect(readLiveIndexation(baseline, { fetchImpl: fetcher({ '/data/indexation.json': 404, '/data/release.json': { gitSha: 'b'.repeat(40) } }), now })).rejects.toThrow('changé');
		await expect(readLiveIndexation(baseline, { fetchImpl: fetcher({ '/data/indexation.json': 404, '/sitemap-index.xml': '<loc>https://evil.test/sitemap.xml</loc>' }), now })).rejects.toThrow('origine');
	});
});
