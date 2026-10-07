import { describe, expect, it } from 'vitest';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { applyEditorialHolds, EDITORIAL_HOLD_REASON, validateEditorialHolds } from './indexation-editorial-holds.mjs';
import { collectIndexationCandidates, productCandidates } from './indexation-candidates.mjs';
import { planIndexation } from './indexation-planner.mjs';
import { candidateQuotaGroup, createIndexationPolicy } from './indexation-policy.mjs';

const now = new Date('2026-10-05T12:00:00.000Z');
const models = ['ztg1211s', 'ztg1211sn', 'ztg1311a', 'ztg1311bs', 'ztg1311bss', 'ztg3125', 'ztg3125bs', 'ztg3125bss'];
// Keep this October 5 fixture independent of subsequent dated reviews.
const currentRegistry = JSON.parse(await readFile(new URL('../../config/indexation-editorial-holds.json', import.meta.url), 'utf8'));
const registry = { schemaVersion: currentRegistry.schemaVersion, holds: currentRegistry.holds.filter(hold => models.some(model => hold.path === `/outils-pneumatiques/pistolet-nettoyage-zipp-${model}/`)) };
const products = await Promise.all(models.map(async model => (await import(`../../src/data/products/tools/pistolet-nettoyage-zipp-${model}.ts`)).default));
const actualCandidates = products.flatMap(product => productCandidates(product, 'tools'));
const target = actualCandidates[0];
const usage = actualCandidates[1];
const oneHold = { schemaVersion: 1, holds: [registry.holds[0]] };
const baseline = { schemaVersion: 1, sourceSha: 'a'.repeat(40), paths: ['/'] };
const previous = { schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha: baseline.sourceSha, builtAt: '2026-10-04T12:00:00.000Z', batches: [] };
const policy = { schemaVersion: 2, paused: false, timeZone: 'Europe/Paris', dailyLimits: { guides: 2, compressors: 2, tools: 6 }, maximumTopicShare: 0.25, similarityThreshold: 0.82, containmentThreshold: 0.92 };
const plan = candidates => planIndexation({ candidates, baseline, previous, policy, now });
const counts = paths => Object.fromEntries(['guides', 'compressors', 'tools'].map(group => [group, paths.filter(path => candidateQuotaGroup(path) === group).length]));

function eligible(path, index) {
	const token = String.fromCharCode(97 + index);
	return { path, family: path.startsWith('/guides/') ? 'guides' : 'catalog', topic: token, signature: token,
		text: Array.from({ length: 35 }, (_, k) => `${token}mot${String.fromCharCode(97 + k % 26)}`).join(' ') };
}

describe('explicit editorial holds preserve the product and daily quotas', () => {
	it('holds the eight reviewed exact products and their derived usage pages only', async () => {
		const others = await Promise.all(['zfg1411', 'ztg1211', 'ztg1211n'].map(async model => (await import(`../../src/data/products/tools/pistolet-nettoyage-zipp-${model}.ts`)).default));
		const otherCandidates = others.flatMap(product => productCandidates(product, 'tools'));
		const candidates = [...actualCandidates, ...otherCandidates];
		const originals = structuredClone(candidates);
		expect(registry.holds.map(hold => hold.path)).toEqual(models.map(model => `/outils-pneumatiques/pistolet-nettoyage-zipp-${model}/`));
		expect(validateEditorialHolds(registry, candidates, now)).toBe(registry);
		const held = applyEditorialHolds(candidates, registry, { now });
		expect(candidates).toEqual(originals);
		for (const [index, original] of actualCandidates.entries()) {
			expect(held[index].editorialHold).toBe(true);
			expect(held[index].blockedReason).toBe(original.blockedReason ?? EDITORIAL_HOLD_REASON);
			const { editorialHold: _hold, ...candidate } = held[index];
			expect({ ...candidate, blockedReason: original.blockedReason }).toEqual(original);
		}
		for (const [index, original] of otherCandidates.entries()) expect(held[index + actualCandidates.length]).toBe(original);
	});
	it('replaces a held tool with the next eligible tool without transferring quotas', () => {
		expect(target.blockedReason).toBeUndefined();
		const waitingTools = Array.from({ length: 6 }, (_, i) => eligible(`/outils-pneumatiques/eligible-${i}/`, i));
		const guides = Array.from({ length: 2 }, (_, i) => eligible(`/guides/eligible-${i}/`, 10 + i));
		const compressors = Array.from({ length: 2 }, (_, i) => eligible(`/compresseurs/eligible-${i}/`, 15 + i));
		const preferred = { ...target, priority: { score: 100 } };
		const candidates = [preferred, usage, ...waitingTools, ...guides, ...compressors];
		const before = plan(candidates);
		const after = plan(applyEditorialHolds(candidates, oneHold, { now }));
		expect(before.manifest.batches[0].paths).toContain(target.path);
		expect(after.manifest.batches[0].paths).not.toContain(target.path);
		expect(after.manifest.batches[0].paths).not.toContain(usage.path);
		expect(after.manifest.batches[0].paths.filter(path => candidateQuotaGroup(path) === 'tools')).toEqual(waitingTools.map(candidate => candidate.path));
		expect(counts(after.manifest.batches[0].paths)).toEqual(policy.dailyLimits);
		expect(after.manifest.batches[0].paths.filter(path => candidateQuotaGroup(path) !== 'tools')).toEqual(before.manifest.batches[0].paths.filter(path => candidateQuotaGroup(path) !== 'tools'));
		for (const candidate of [target, usage]) expect(after.report.find(entry => entry.path === candidate.path)).toMatchObject({ status: 'held', reason: EDITORIAL_HOLD_REASON });
	});
	it.each([target.path, usage.path])('withdraws baseline indexability without deleting the admission for %s', path => {
		const candidates = applyEditorialHolds([target, usage], oneHold, { now });
		const originalBaseline = { ...baseline, paths: ['/', path] };
		const before = structuredClone(originalBaseline);
		const result = planIndexation({ candidates, baseline: originalBaseline, previous, policy, now });
		expect(originalBaseline).toEqual(before);
		expect(result.manifest.batches).toEqual(previous.batches);
		expect(result.manifest.heldPaths).toEqual([target.path, usage.path].sort());
		expect(createIndexationPolicy(originalBaseline, result.manifest)(path)).toBe(false);
		expect(result.manifest.checks.find(check => check.path === path)?.indexable).toBe(false);
		expect(result.report.find(entry => entry.path === path)).toMatchObject({ status: 'held', reason: EDITORIAL_HOLD_REASON });
	});
	it('preserves historical batches and cannot consolidate one held admission into another', () => {
		const duplicate = { ...target, path: '/outils-pneumatiques/earlier-equivalent/' };
		const candidates = applyEditorialHolds([target, duplicate], { schemaVersion: 1, holds: [...oneHold.holds, { ...oneHold.holds[0], path: duplicate.path }] }, { now });
		const published = { ...previous, batches: [{ openedAt: previous.builtAt, publicationDay: '2026-10-04', dailyLimits: policy.dailyLimits, paths: [target.path, duplicate.path] }] };
		const before = structuredClone(published);
		const result = planIndexation({ candidates, baseline, previous: published, policy, now });
		expect(published).toEqual(before);
		expect(result.manifest.batches).toEqual(published.batches);
		expect(result.manifest.canonicalAliases).toEqual({});
		expect(result.consolidation.groups).toEqual([]);
		for (const candidate of candidates) expect(createIndexationPolicy(baseline, result.manifest)(candidate.path)).toBe(false);
	});
	it('still rejects an invalid published page that has no explicit editorial hold', () => {
		const invalid = { ...target, path: '/outils-pneumatiques/invalid-existing/', blockedReason: 'missing-critical-source' };
		const candidates = applyEditorialHolds([target, usage, invalid], oneHold, { now });
		const originalBaseline = { ...baseline, paths: ['/', target.path, invalid.path] };
		expect(() => planIndexation({ candidates, baseline: originalBaseline, previous, policy, now })).toThrow(`${invalid.path} (missing-critical-source)`);
	});
	it('does not refill a consumed daily quota after withdrawing historical indexability', () => {
		const waitingTools = Array.from({ length: 7 }, (_, i) => eligible(`/outils-pneumatiques/eligible-${i}/`, i));
		const guides = Array.from({ length: 3 }, (_, i) => eligible(`/guides/eligible-${i}/`, 10 + i));
		const compressors = Array.from({ length: 3 }, (_, i) => eligible(`/compresseurs/eligible-${i}/`, 15 + i));
		const candidates = [{ ...target, priority: { score: 100 } }, usage, ...waitingTools, ...guides, ...compressors];
		const published = plan(candidates).manifest;
		const result = planIndexation({ candidates: applyEditorialHolds(candidates, oneHold, { now }), baseline, previous: published, policy, now: new Date(now.getTime() + 60_000) });
		expect(result.released).toBe(0);
		expect(result.manifest.batches).toEqual(published.batches);
		expect(counts(result.manifest.batches[0].paths)).toEqual(policy.dailyLimits);
		expect(result.manifest.pending.find(entry => entry.path === target.path)).toBeUndefined();
		expect(result.manifest.checks.every(check => createIndexationPolicy(baseline, result.manifest)(check.path) === check.indexable)).toBe(true);
	});
	it('keeps preexisting blockers and leaves an empty registry unchanged', () => {
		const blocked = [{ ...target, blockedReason: 'missing-critical-source' }, { ...usage, blockedReason: 'answer-too-thin' }];
		const result = applyEditorialHolds(blocked, oneHold, { now });
		expect(result[0]).toEqual({ ...blocked[0], editorialHold: true });
		expect(result[1]).toEqual({ ...blocked[1], editorialHold: true });
		const resultPlan = planIndexation({ candidates: result, baseline: { ...baseline, paths: ['/', target.path, usage.path] }, previous, policy, now });
		expect(resultPlan.manifest.heldPaths).toEqual([target.path, usage.path].sort());
		expect(resultPlan.report.map(entry => entry.reason)).toEqual(['missing-critical-source', 'answer-too-thin']);
		expect(applyEditorialHolds(actualCandidates, { schemaVersion: 1, holds: [] }, { now })).toEqual(actualCandidates);
	});
});

describe('editorial hold registry validation', () => {
	it.each([
		null, [], {}, { schemaVersion: 2, holds: [] }, { schemaVersion: '1', holds: [] },
		{ schemaVersion: 1 }, { schemaVersion: 1, holds: {} }, { ...oneHold, extra: true },
		{ ...oneHold, holds: [null] }, { ...oneHold, holds: [{ ...oneHold.holds[0], extra: true }] },
		{ ...oneHold, holds: [{ path: target.path, reviewedAt: '2026-10-05' }] },
		{ ...oneHold, holds: [...oneHold.holds, ...oneHold.holds] },
	])('rejects invalid fields or duplicate entries %#', invalid => {
		expect(() => validateEditorialHolds(invalid, actualCandidates, now)).toThrow();
	});
	it.each(['', ' ', '\n\t', null, 42])('rejects empty or non-text reasons %j', reason => {
		expect(() => validateEditorialHolds({ ...oneHold, holds: [{ ...oneHold.holds[0], reason }] }, actualCandidates, now)).toThrow('Motif');
	});
	it.each(['2026-02-30', '2025-02-29', '2026-04-31', '2026-13-01', '2026-00-01', '2026-10-00', '2026-10-06', '0000-01-01', '2026-1-5', '2026-10-05T00:00:00Z', null])('rejects an invalid or future civil date %j', reviewedAt => {
		expect(() => validateEditorialHolds({ ...oneHold, holds: [{ ...oneHold.holds[0], reviewedAt }] }, actualCandidates, now)).toThrow('Date civile');
	});
	it('accepts a real leap day and checks the current civil day in Paris', () => {
		expect(() => validateEditorialHolds({ ...oneHold, holds: [{ ...oneHold.holds[0], reviewedAt: '2024-02-29' }] }, actualCandidates, now)).not.toThrow();
		expect(() => validateEditorialHolds(oneHold, actualCandidates, new Date('2026-10-04T22:00:00Z'))).not.toThrow();
		expect(() => validateEditorialHolds(oneHold, actualCandidates, new Date('2026-10-04T21:59:59Z'))).toThrow('future');
		expect(() => validateEditorialHolds(oneHold, actualCandidates, new Date('invalid'))).toThrow('Date de publication');
	});
	it.each(['//evil.test/', 'https://compatair.fr/outils-pneumatiques/outil/', '/outils-pneumatiques/../outil/', '/outils-pneumatiques/%2f/', '/outils-pneumatiques/UPPER/', target.path.slice(0, -1), `${target.path}?x=1`, '/outils-pneumatiques/unknown/', '/'])('rejects a noncanonical or unknown candidate %s', path => {
		expect(() => validateEditorialHolds({ ...oneHold, holds: [{ ...oneHold.holds[0], path }] }, actualCandidates, now)).toThrow();
	});
});

describe('candidate collection applies the mandatory registry', () => {
	async function fixture() {
		const root = await mkdtemp(join(tmpdir(), 'editorial-hold-'));
		for (const directory of ['config', 'src/data/products/tools', 'src/data/products/compressors', 'src/content/guides']) await mkdir(join(root, directory), { recursive: true });
		await writeFile(join(root, 'config/seo-query-panel.json'), JSON.stringify({ queries: [] }));
		await writeFile(join(root, 'src/data/products/tools/target.ts'), `export default ${JSON.stringify(products[0])};`);
		return root;
	}
	it('applies the hold after loading the exact tool and its derived usage', async () => {
		const root = await fixture();
		try {
			await writeFile(join(root, 'config/indexation-editorial-holds.json'), JSON.stringify(oneHold));
			const candidates = await collectIndexationCandidates(root, { now });
			expect(candidates.map(candidate => candidate.path)).toEqual([target.path, usage.path]);
			expect(candidates.every(candidate => candidate.blockedReason === EDITORIAL_HOLD_REASON)).toBe(true);
			expect(candidates.every(candidate => candidate.editorialHold === true)).toBe(true);
		} finally { await rm(root, { recursive: true, force: true }); }
	});
	it('rejects a missing or malformed registry instead of readmitting held pages', async () => {
		const root = await fixture();
		try {
			await expect(collectIndexationCandidates(root, { now })).rejects.toMatchObject({ code: 'ENOENT' });
			await writeFile(join(root, 'config/indexation-editorial-holds.json'), '{invalid');
			await expect(collectIndexationCandidates(root, { now })).rejects.toThrow();
		} finally { await rm(root, { recursive: true, force: true }); }
	});
});
