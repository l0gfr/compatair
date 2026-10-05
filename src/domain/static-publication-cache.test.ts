import { describe, expect, it, vi } from 'vitest';
import { createStaticPublicationCache } from './static-publication-cache';

function deferred<T>() {
	let resolve!: (value: T) => void;
	let reject!: (reason: Error) => void;
	const promise = new Promise<T>((accept, fail) => { resolve = accept; reject = fail; });
	return { promise, resolve, reject };
}

describe('static publication single-flight cache', () => {
	it('shares the same in-flight promise and resolved value for one date', async () => {
		const load = createStaticPublicationCache<{ records: number }>();
		const pending = deferred<{ records: number }>();
		const build = vi.fn(() => pending.promise);
		const first = load('2026-10-05', true, build);
		const second = load('2026-10-05', true, build);
		expect(first).toBe(second);
		await Promise.resolve();
		expect(build).toHaveBeenCalledTimes(1);
		const value = { records: 2000 };
		pending.resolve(value);
		expect(await first).toBe(value);
		expect(load('2026-10-05', true, build)).toBe(first);
		expect(await load('2026-10-05', true, build)).toBe(value);
		expect(build).toHaveBeenCalledTimes(1);
	});

	it('retains only the newest date and rebuilds an evicted date', async () => {
		const load = createStaticPublicationCache<string>();
		const first = vi.fn(async () => 'first');
		const second = vi.fn(async () => 'second');
		expect(await load('2026-10-05', true, first)).toBe('first');
		expect(await load('2026-10-06', true, second)).toBe('second');
		expect(await load('2026-10-05', true, first)).toBe('first');
		expect(first).toHaveBeenCalledTimes(2);
		expect(second).toHaveBeenCalledTimes(1);
	});

	it('does not share or retain values when reuse is false', async () => {
		const load = createStaticPublicationCache<object>();
		const build = vi.fn(async () => ({}));
		const first = load('2026-10-05', false, build);
		const second = load('2026-10-05', false, build);
		expect(first).not.toBe(second);
		expect(await first).not.toBe(await second);
		expect(build).toHaveBeenCalledTimes(2);
		const retained = load('2026-10-05', true, build);
		await retained;
		await load('2026-10-05', false, build);
		const replacement = load('2026-10-05', true, build);
		expect(replacement).not.toBe(retained);
		await replacement;
		expect(build).toHaveBeenCalledTimes(5);
	});

	it('turns a synchronous callback failure into rejection and admits a retry', async () => {
		const load = createStaticPublicationCache<string>();
		const failure = new Error('source unavailable');
		const failed = load('2026-10-05', true, () => { throw failure; });
		await expect(failed).rejects.toBe(failure);
		const retry = load('2026-10-05', true, async () => 'verified');
		expect(retry).not.toBe(failed);
		expect(await retry).toBe('verified');
	});

	it('evicts an asynchronously rejected entry without caching a fabricated fallback', async () => {
		const load = createStaticPublicationCache<string>();
		const pending = deferred<string>();
		const failure = new Error('capture failed');
		const failed = load('2026-10-05', true, () => pending.promise);
		const assertion = expect(failed).rejects.toBe(failure);
		pending.reject(failure);
		await assertion;
		expect(await load('2026-10-05', true, async () => 'retry')).toBe('retry');
	});

	it('does not evict a new date when an earlier date rejects later', async () => {
		const load = createStaticPublicationCache<string>();
		const older = deferred<string>();
		const newer = deferred<string>();
		const old = load('2026-10-05', true, () => older.promise);
		const oldAssertion = expect(old).rejects.toThrow('old failure');
		const current = load('2026-10-06', true, () => newer.promise);
		older.reject(new Error('old failure'));
		await oldAssertion;
		expect(load('2026-10-06', true, async () => 'wrong')).toBe(current);
		newer.resolve('current');
		expect(await current).toBe('current');
	});

	it('compares entry identity even when an evicted date is requested again', async () => {
		const load = createStaticPublicationCache<string>();
		const older = deferred<string>();
		const old = load('2026-10-05', true, () => older.promise);
		const oldAssertion = expect(old).rejects.toThrow('obsolete failure');
		await load('2026-10-06', true, async () => 'middle');
		const current = load('2026-10-05', true, async () => 'new first date');
		older.reject(new Error('obsolete failure'));
		await oldAssertion;
		expect(load('2026-10-05', true, async () => 'wrong')).toBe(current);
		expect(await current).toBe('new first date');
	});

	it('does not let a failed development call evict a subsequent static entry', async () => {
		const load = createStaticPublicationCache<string>();
		const development = deferred<string>();
		const old = load('2026-10-05', false, () => development.promise);
		const oldAssertion = expect(old).rejects.toThrow('development failure');
		const current = load('2026-10-05', true, async () => 'static');
		development.reject(new Error('development failure'));
		await oldAssertion;
		expect(load('2026-10-05', true, async () => 'wrong')).toBe(current);
		expect(await current).toBe('static');
	});

	it('keeps separate instances independent', async () => {
		const first = createStaticPublicationCache<string>();
		const second = createStaticPublicationCache<string>();
		expect(await first('2026-10-05', true, async () => 'first')).toBe('first');
		expect(await second('2026-10-05', true, async () => 'second')).toBe('second');
	});
});
