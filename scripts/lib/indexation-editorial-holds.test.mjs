import { describe, expect, it } from 'vitest';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { applyEditorialHolds, EDITORIAL_HOLD_REASON, validateEditorialHolds } from './indexation-editorial-holds.mjs';
import { collectIndexationCandidates, productCandidates } from './indexation-candidates.mjs';
import { planIndexation } from './indexation-planner.mjs';
import { candidateQuotaGroup } from './indexation-policy.mjs';

const now = new Date('2026-10-05T12:00:00.000Z');
const registry = JSON.parse(await readFile(new URL('../../config/indexation-editorial-holds.json', import.meta.url), 'utf8'));
const models = ['ztg1211s', 'ztg1211sn', 'ztg1311a', 'ztg1311bs', 'ztg1311bss', 'ztg3125', 'ztg3125bs', 'ztg3125bss'];
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
			expect(held[index].blockedReason).toBe(original.blockedReason ?? EDITORIAL_HOLD_REASON);
			expect({ ...held[index], blockedReason: original.blockedReason }).toEqual(original);
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
	it.each([target.path, usage.path])('fails through the existing published-page guard for %s', path => {
		const candidates = applyEditorialHolds([target, usage], oneHold, { now });
		expect(() => planIndexation({ candidates, baseline: { ...baseline, paths: ['/', path] }, previous, policy, now }))
			.toThrow(`Pages publiées sans valeur propre validée : ${path} (${EDITORIAL_HOLD_REASON})`);
	});
	it('fails closed for a historical batch admission and cannot consolidate away the hold', () => {
		const duplicate = { ...target, path: '/outils-pneumatiques/earlier-equivalent/' };
		const candidates = applyEditorialHolds([target, duplicate], oneHold, { now });
		const published = { ...previous, batches: [{ openedAt: previous.builtAt, publicationDay: '2026-10-04', dailyLimits: policy.dailyLimits, paths: [target.path, duplicate.path] }] };
		expect(() => planIndexation({ candidates, baseline, previous: published, policy, now })).toThrow(`${target.path} (${EDITORIAL_HOLD_REASON})`);
	});
	it('keeps preexisting blockers and leaves an empty registry unchanged', () => {
		const blocked = [{ ...target, blockedReason: 'missing-critical-source' }, { ...usage, blockedReason: 'answer-too-thin' }];
		const result = applyEditorialHolds(blocked, oneHold, { now });
		expect(result[0]).toBe(blocked[0]);
		expect(result[1]).toBe(blocked[1]);
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
