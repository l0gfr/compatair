import { describe, expect, it } from 'vitest';
import { planActionsStorage } from './actions-storage.mjs';

const shas = ['a', 'b', 'c', 'd'].map((value) => value.repeat(40));
function fixture() {
	const runs = shas.map((head_sha, id) => ({ id, head_sha, head_branch: 'main', status: 'completed', conclusion: 'success', created_at: `2026-09-${26 - id}T00:00:00Z` }));
	const artifacts = runs.flatMap((run) => ['compatair-production-', 'lighthouse-production-', 'compatair-invariants-', 'source-anomalies-', 'lighthouse-summary-production-'].map((prefix) => ({
		id: `${prefix}${run.id}`, name: `${prefix}${run.head_sha}`, expired: false, created_at: run.created_at, workflow_run: { id: run.id, head_sha: run.head_sha },
	})));
	const caches = runs.map((run) => ({ id: run.id, key: `codeql-overlay-base-database-1-test-javascript-2.27.1-${run.head_sha}-${run.id}-1`, ref: 'refs/heads/main', created_at: run.created_at }));
	return { artifacts, runs, caches, liveSha: shas[0], expectedSha: shas[0], now: Date.parse('2026-09-26T12:00:00Z') };
}

describe('bounded Actions storage cleanup', () => {
	it('retains only the latest main calculation cache and leaves PR caches alone', () => {
		const input = fixture();
		input.caches.push(...[0, 1, 2].map(index => ({ id: 100 + index, key: `compatair-verdict-v1-Linux-24.19.0-${String(index).repeat(64)}`, ref: 'refs/heads/main', created_at: `2026-09-${26 - index}T01:00:00Z` })));
		input.caches.push({ ...input.caches.at(-1), id: 200, ref: 'refs/pull/42/merge' });
		expect(planActionsStorage(input).deleteCaches.map(cache => cache.id)).toEqual([1, 2, 3, 101, 102]);
	});
	it('retains only the latest disposable main page cache', () => {
		const input = fixture();
		input.caches.push(...[0, 1].map(index => ({ id: 300 + index, key: `compatair-pages-v${index === 0 ? 2 : 1}-Linux-${'a'.repeat(64)}-${String(index).repeat(40)}`, ref: 'refs/heads/main', created_at: `2026-09-${26 - index}T01:00:00Z` })));
		expect(planActionsStorage(input).deleteCaches.map(cache => cache.id)).toContain(301);
		expect(planActionsStorage(input).deleteCaches.map(cache => cache.id)).not.toContain(300);
	});
	it('retains the latest page calculation cache without deleting pull-request caches', () => {
		const input = fixture();
		input.caches.push(...[0, 1].map(index => ({ id: 400 + index, key: `compatair-page-calculations-v1-Linux-24.19.0-${shas[index]}`, ref: 'refs/heads/main', created_at: `2026-09-${26 - index}T01:00:00Z` })));
		input.caches.push({ ...input.caches.at(-1), id: 402, ref: 'refs/pull/42/merge' });
		expect(planActionsStorage(input).deleteCaches.map(cache => cache.id)).toEqual([1, 2, 3, 401]);
	});
	it('preserves production, rollback, signed invariants and source/security evidence', () => {
		const input = fixture();
		input.artifacts.push({ id: 99, name: 'sarif-artifact', workflow_run: input.runs[2] });
		const plan = planActionsStorage(input);
		expect(plan.protectedShas).toEqual(shas.slice(0, 2));
		expect(plan.deleteArtifacts.map((artifact) => artifact.name)).toEqual(shas.slice(2).flatMap((sha) => [`compatair-production-${sha}`, `lighthouse-production-${sha}`]));
		expect(plan.deleteCaches.map((cache) => cache.id)).toEqual([1, 2, 3]);
	});
	it('refuses cleanup when the live SHA, production archive or rollback identity is unavailable', () => {
		expect(() => planActionsStorage({ ...fixture(), liveSha: shas[1] })).toThrow(/Live release/);
		const input = fixture();
		input.artifacts = input.artifacts.filter((artifact) => artifact.name !== `compatair-production-${shas[0]}`);
		expect(() => planActionsStorage(input)).toThrow(/archive missing/);
		expect(() => planActionsStorage({ ...fixture(), runs: fixture().runs.slice(0, 1) })).toThrow(/rollback/);
	});
	it('permits cleanup after natural expiry of the GitHub rollback copy', () => {
		const input = fixture();
		input.artifacts = input.artifacts.filter((artifact) => artifact.name !== `compatair-production-${shas[1]}`);
		expect(planActionsStorage(input).protectedShas).toEqual(shas.slice(0, 2));
	});
	it('preserves running, unknown, mismatched and non-main artifacts', () => {
		for (const change of [{ status: 'in_progress' }, { head_sha: 'invalid' }, { head_branch: 'other' }]) {
			const input = fixture();
			Object.assign(input.runs[2], change);
			expect(planActionsStorage(input).deleteArtifacts.some((artifact) => artifact.workflow_run.id === 2)).toBe(false);
		}
		const input = fixture();
		input.runs = input.runs.slice(0, 2);
		expect(planActionsStorage(input).deleteArtifacts).toEqual([]);
	});
	it('keeps recent failure diagnostics and unrelated caches', () => {
		const input = fixture();
		input.runs[2].conclusion = 'failure';
		input.caches.push({ id: 50, key: 'dependency-cache', ref: 'refs/heads/main', created_at: '2020-01-01' });
		input.caches.push({ ...input.caches[3], id: 51, ref: 'refs/pull/2/merge' });
		const plan = planActionsStorage(input);
		expect(plan.deleteArtifacts.some((artifact) => artifact.name === `lighthouse-production-${shas[2]}`)).toBe(false);
		expect(plan.deleteArtifacts.some((artifact) => artifact.name === `compatair-production-${shas[2]}`)).toBe(true);
		expect(plan.deleteCaches.map((cache) => cache.id)).toEqual([1, 2, 3]);
	});
});
