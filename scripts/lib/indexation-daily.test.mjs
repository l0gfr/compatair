import { describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { planIndexation } from './indexation-planner.mjs';
import { assertDailyIndexationDate, candidateQuotaGroup, indexationBatchReady, indexationDay, isNavigationPath, validateManifest, validatePolicy } from './indexation-policy.mjs';

const baseline = { schemaVersion: 1, sourceSha: 'a'.repeat(40), paths: ['/'] };
const now = new Date('2026-09-29T18:15:00Z');
const previous = { schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha: baseline.sourceSha, builtAt: now.toISOString(), batches: [] };
const policy = { schemaVersion: 2, paused: false, timeZone: 'Europe/Paris', dailyLimits: { guides: 2, compressors: 2, tools: 6 }, maximumTopicShare: 0.25, similarityThreshold: 0.82, containmentThreshold: 0.92 };
const quotaCandidates = (length) => ['guides', 'compressors', 'tools'].flatMap((group, groupIndex) => Array.from({ length }, (_, i) => {
	const token = `mot${String.fromCharCode(97 + groupIndex, 97 + Math.floor(i / 26), 97 + i % 26)}`;
	return { path: `/${{ guides: 'guides', compressors: 'compresseurs', tools: 'outils-pneumatiques' }[group]}/ref-${i}/`, family: group === 'guides' ? 'guides' : 'catalog', topic: `${group}:${i}`, signature: token, text: Array.from({ length: 35 }, (_, k) => `${token}${String.fromCharCode(97 + k % 26)}`).join(' ') };
}));
const candidates = quotaCandidates(30);
const plan = (overrides = {}) => planIndexation({ candidates, baseline, previous, policy, now, ...overrides });
const counts = paths => Object.fromEntries(['guides', 'compressors', 'tools'].map(group => [group, paths.filter(path => candidateQuotaGroup(path) === group).length]));

describe('daily SEO admissions in Paris', () => {
	it('enforces 10/30/60, preserves historical quotas, and never catches up or transfers slots', () => {
		const increased = { ...policy, dailyLimits: { guides: 10, compressors: 30, tools: 60 } };
		const large = quotaCandidates(200);
		const yesterday = new Date('2026-09-28T18:15:00Z');
		const historical = plan({ candidates: large, now: yesterday, previous: { ...previous, builtAt: yesterday.toISOString() } }).manifest;
		const current = plan({ candidates: large, policy: increased, previous: historical });
		expect(current.released).toBe(100);
		expect(counts(current.manifest.batches.at(-1).paths)).toEqual(increased.dailyLimits);
		expect(current.manifest.batches[0]).toEqual(historical.batches[0]);
		expect(validateManifest(current.manifest, baseline, now)).toBe(current.manifest);
		expect(plan({ candidates: large, policy: increased, previous: current.manifest }).released).toBe(0);
		expect(plan({ candidates: large, policy: increased, previous: current.manifest, now: new Date('2026-12-29T19:15:00Z') }).released).toBe(100);
		const fewer = plan({ candidates: large.filter(entry => candidateQuotaGroup(entry.path) !== 'compressors'), policy: increased });
		expect(counts(fewer.manifest.batches.at(-1).paths)).toEqual({ guides: 10, compressors: 0, tools: 60 });
		const batch = current.manifest.batches.at(-1);
		for (const prefix of ['guides', 'compresseurs', 'outils-pneumatiques']) expect(() => validateManifest({ ...current.manifest, batches: [...historical.batches, { ...batch, paths: [...batch.paths, `/${prefix}/extra/`] }] }, baseline, now)).toThrow('Quota quotidien dépassé');
	});
	it('recognizes personal-library pagination without exempting article routes', () => {
		expect(isNavigationPath('/guides/particuliers/page/2/')).toBe(true);
		expect(isNavigationPath('/guides/particuliers/page/12/')).toBe(true);
		expect(isNavigationPath('/guides/particuliers/page/1/')).toBe(false);
		expect(isNavigationPath('/guides/particuliers/page/02/')).toBe(false);
		expect(isNavigationPath('/guides/renner-rs-pro-3-0/')).toBe(false);
	});
	it('opens exactly 2 guides, 2 compressors and 6 tools, with no transfer between quotas', () => {
		const result = plan();
		expect(counts(result.manifest.batches.at(-1).paths)).toEqual(policy.dailyLimits);
		expect(result.manifest.batches.at(-1)).toMatchObject({ publicationDay: '2026-09-29', dailyLimits: policy.dailyLimits });
		const fewer = plan({ candidates: candidates.filter(entry => candidateQuotaGroup(entry.path) !== 'compressors') });
		expect(counts(fewer.manifest.batches.at(-1).paths)).toEqual({ guides: 2, compressors: 0, tools: 6 });
	});
	it('does not consume slots during builds, and refuses a second published batch on the same Paris date', () => {
		const first = plan();
		expect(plan().manifest).toEqual(first.manifest);
		const second = plan({ previous: first.manifest, now: new Date('2026-09-29T21:59:59Z') });
		expect(second.released).toBe(0);
		expect(second.manifest.batches).toEqual(first.manifest.batches);
		expect(plan({ previous: first.manifest, now: new Date('2026-09-29T22:00:00Z') }).released).toBe(10);
	});
	it.each([
		['2026-03-28T19:15:00Z', '2026-03-29T18:15:00Z'],
		['2026-10-24T18:15:00Z', '2026-10-25T19:15:00Z'],
	])('uses civil dates across clock changes: %s to %s', (before, after) => {
		const first = plan({ previous: { ...previous, builtAt: before }, now: new Date(before) }).manifest;
		expect(plan({ previous: first, now: new Date(after) }).released).toBe(10);
	});
	it('preserves the legacy 5-guide batch and opens today without waiting another week', () => {
		const paths = candidates.filter(entry => entry.family === 'guides').slice(0, 5).map(entry => entry.path);
		const legacy = { ...previous, builtAt: '2026-09-26T16:46:53Z', batches: [{ openedAt: '2026-09-26T16:46:53Z', paths }] };
		const result = plan({ previous: legacy });
		expect(result.released).toBe(10);
		expect(result.manifest.batches[0]).toEqual(legacy.batches[0]);
		expect(indexationBatchReady(legacy, policy, new Date('2026-09-26T18:00:00Z'))).toBe(false);
	});
	it('does not catch up missed days or open paused or offline batches', () => {
		const first = plan().manifest;
		expect(plan({ previous: first, now: new Date('2026-12-29T19:15:00Z') }).released).toBe(10);
		expect(plan({ policy: { ...policy, paused: true } }).released).toBe(0);
		expect(plan({ allowRelease: false }).released).toBe(0);
	});
	it('retains topic diversity and source/duplicate gates even if quotas cannot be filled', () => {
		const limited = plan({ candidates: candidates.map(entry => ({ ...entry, topic: entry.family, blockedReason: entry.path.startsWith('/guides/') ? 'missing-critical-source' : undefined })) });
		expect(counts(limited.manifest.batches.at(-1).paths)).toEqual({ guides: 0, compressors: 1, tools: 2 });
		const guides = candidates.filter(entry => entry.family === 'guides');
		expect(plan({ candidates: [guides[0], { ...guides[1], text: guides[0].text }] }).released).toBe(1);
	});
	it('rejects wrong dates, missing categories, duplicate daily admissions and excessive family counts', () => {
		expect(() => validatePolicy({ ...policy, dailyLimits: { guides: 2, catalog: 8 } })).toThrow();
		expect(() => validatePolicy({ ...policy, timeZone: 'UTC' })).toThrow();
		const first = plan().manifest;
		const batch = first.batches[0];
		for (const bad of [
			{ ...batch, publicationDay: '2026-09-30' },
			{ ...batch, paths: [...batch.paths, '/compresseurs/extra/'] },
		]) expect(() => validateManifest({ ...first, batches: [bad] }, baseline, now)).toThrow();
		expect(() => validateManifest({ ...first, batches: [batch, { ...batch, paths: ['/guides/extra/'] }] }, baseline, now)).toThrow('Jour de lot');
		expect(() => validateManifest({ ...first, batches: [batch, { openedAt: batch.openedAt, paths: ['/guides/extra/'] }] }, baseline, now)).toThrow();
	});
	it('expires a newly opened batch at Paris midnight without invalidating historical admissions', () => {
		const first = plan().manifest;
		expect(() => assertDailyIndexationDate(first, new Date('2026-09-29T21:59:59Z'))).not.toThrow();
		expect(() => assertDailyIndexationDate(first, new Date('2026-09-29T22:00:00Z'))).toThrow('jour du lot');
		const ordinaryBuild = plan({ previous: first, now: new Date('2026-09-29T19:00:00Z') }).manifest;
		expect(() => assertDailyIndexationDate(ordinaryBuild, new Date('2026-09-30T18:00:00Z'))).not.toThrow();
		expect(indexationDay(new Date('2026-10-25T23:00:00Z'))).toBe('2026-10-26');
	});
	it('blocks a stale or divergent release on the server before activation', () => {
		const root = mkdtempSync(join(tmpdir(), 'daily-activation-'));
		const before = join(root, 'previous');
		const after = join(root, 'candidate');
		const command = fileURLToPath(new URL('../verify-indexation-activation.mjs', import.meta.url));
		try {
			for (const directory of [before, after]) mkdirSync(join(directory, 'data'), { recursive: true });
			writeFileSync(join(before, 'data/indexation.json'), JSON.stringify(previous));
			const current = plan({ now: new Date(), previous: { ...previous, builtAt: new Date().toISOString() } }).manifest;
			const write = value => writeFileSync(join(after, 'data/indexation.json'), JSON.stringify(value));
			const run = () => execFileSync(process.execPath, [command, before, after], { encoding: 'utf8', stdio: 'pipe' });
			write(current);
			expect(run()).toContain('vérifiés avant activation');
			write({ ...current, baselineSha: 'b'.repeat(40) });
			expect(run).toThrow('Historique SEO');
			write({ ...current, builtAt: new Date(Date.parse(current.builtAt) - 1000).toISOString() });
			expect(run).toThrow('Date du nouveau lot');
			const yesterday = new Date(Date.now() - 2 * 86_400_000);
			write(plan({ now: yesterday, previous: { ...previous, builtAt: yesterday.toISOString() } }).manifest);
			expect(run).toThrow('jour du lot');
			write(current);
			writeFileSync(join(before, 'data/indexation.json'), JSON.stringify({ ...previous, batches: [{ openedAt: '2026-01-01T12:00:00Z', paths: ['/guides/elsewhere/'] }] }));
			expect(run).toThrow('Historique SEO');
		} finally { rmSync(root, { recursive: true, force: true }); }
	});
});
