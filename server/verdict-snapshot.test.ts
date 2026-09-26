import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { readVerdictSnapshot, verdictIndex } from './verdict-snapshot.mjs';

const directories: string[] = [];
async function fixture(text: string) {
	const directory = await mkdtemp(join(tmpdir(), 'compatair-verdict-reader-'));
	directories.push(directory);
	const path = join(directory, 'verdicts.json');
	await writeFile(path, text);
	return path;
}
afterEach(async () => { await Promise.all(directories.splice(0).map((directory) => rm(directory, { recursive: true, force: true }))); });

describe('bounded verdict snapshot loading', () => {
	it('preserves every value across UTF-8, escape and stream boundaries', async () => {
		const snapshot = {
			catalogVersion: 'catalog-test', verdictVersion: 'verdict-test', calculationVersion: '1.3.0',
			pairs: Array.from({ length: 900 }, (_, index) => ({
				id: `compressor--tool-${index}`, compressorId: 'compressor', toolId: `tool-${index}`,
				verdict: 'continuous', requiredFadLpm: 12.345, marginPercent: -1.25,
				warnings: ['Échappement, [tableau], {source}, "pression" et \\ flexible : 6,3 bar.'],
			})),
		};
		const text = JSON.stringify(snapshot);
		expect(Buffer.byteLength(text)).toBeGreaterThan(64 * 1024);
		const loaded = await readVerdictSnapshot(await fixture(text));
		expect(loaded).toEqual(snapshot);
		expect(JSON.stringify(loaded)).toBe(text);
		expect(loaded.pairs[0].warnings).toBe(loaded.pairs[899].warnings);
	});

	it('compacts only reconstructible ids without changing serialized bytes or API records', async () => {
		const pairs = [
			{ id: 'a--b', compressorId: 'a', toolId: 'b', verdict: 'continuous', warnings: ['é'] },
			{ id: 'custom', compressorId: 'a', toolId: 'c', verdict: 'incompatible', extension: { source: 1 } },
			{ compressorId: 'a', toolId: 'd', id: 'a--d', verdict: 'insufficient_data' },
		];
		const text = JSON.stringify({ catalogVersion: 'test', pairs });
		const snapshot = await readVerdictSnapshot(await fixture(text), { compactIds: true });
		expect(Object.hasOwn(snapshot.pairs[0], 'id')).toBe(false);
		expect(snapshot.pairs[0].id).toBe('a--b');
		expect(JSON.stringify(snapshot)).toBe(text);
		for (const pair of pairs) expect(verdictIndex(snapshot).get(pair.compressorId, pair.toolId)).toEqual(pair);
	});

	it('preserves reserved JSON keys without invoking prototype setters', async () => {
		const text = '{"pairs":[{"id":"a--b","compressorId":"a","toolId":"b","__proto__":{"polluted":true}},{"id":"a--c","compressorId":"a","toolId":"c","toJSON":"source value"}]}';
		const snapshot = await readVerdictSnapshot(await fixture(text), { compactIds: true });
		expect(JSON.stringify(snapshot)).toBe(text);
		expect(Object.hasOwn(verdictIndex(snapshot).get('a', 'b'), '__proto__')).toBe(true);
		expect(({} as Record<string, unknown>).polluted).toBeUndefined();
	});

	it('shares identical calculation payloads while keeping each product identity and omission intact', async () => {
		const pairs = [
			{ id: 'a--b', compressorId: 'a', toolId: 'b', verdict: 'continuous', requiredFadLpm: 123.45, warnings: ['source'] },
			{ id: 'c--d', compressorId: 'c', toolId: 'd', verdict: 'continuous', requiredFadLpm: 123.45, warnings: ['source'] },
			{ id: 'a--e', compressorId: 'a', toolId: 'e', verdict: 'insufficient_data', warnings: [] },
			{ id: 'a--f', toolId: 'f', compressorId: 'a', verdict: 'continuous' },
		];
		const text = JSON.stringify({ pairs });
		const snapshot = await readVerdictSnapshot(await fixture(text), { compactIds: true });
		expect(Object.getPrototypeOf(snapshot.pairs[0])).toBe(Object.getPrototypeOf(snapshot.pairs[1]));
		expect(snapshot.pairs[0].requiredFadLpm).toBe(123.45);
		expect(snapshot.pairs[2].requiredFadLpm).toBeUndefined();
		expect(JSON.stringify(snapshot)).toBe(text);
		for (const pair of pairs) expect(verdictIndex(snapshot).get(pair.compressorId, pair.toolId)).toEqual(pair);
	});

	it('accepts empty snapshots and standard JSON whitespace', async () => {
		expect(await readVerdictSnapshot(await fixture(' { "catalogVersion": "test", "pairs" : [ ] }\r\n'))).toEqual({ catalogVersion: 'test', pairs: [] });
	});

	it('preserves the entire snapshot and indexed lookups across payload cache eviction', async () => {
		const pairs = Array.from({ length: 10_010 }, (_, i) => ({
			id: `a--t${i}`, compressorId: 'a', toolId: `t${i}`,
			verdict: 'continuous', requiredFadLpm: i % 5_005, warnings: [],
		}));
		const text = JSON.stringify({ pairs });
		const snapshot = await readVerdictSnapshot(await fixture(text), { compactIds: true });
		expect(JSON.stringify(snapshot)).toBe(text);
		const index = verdictIndex(snapshot);
		for (const i of [0, 4_999, 5_000, 5_004, 5_005, 10_009]) {
			expect(index.get('a', `t${i}`)).toEqual(pairs[i]);
		}
	});

	it.each(['\\"', 'é'])('preserves a split escape or UTF-8 character at the chunk boundary: %s', async (boundary) => {
		const prefix = '{"pairs":[{"compressorId":"a","toolId":"b","warnings":["';
		const text = `${prefix}${'x'.repeat(65_535 - prefix.length)}${boundary}fin"]}]}`;
		expect(await readVerdictSnapshot(await fixture(text))).toEqual(JSON.parse(text));
	});

	it.each([
		'{"pairs":[', '{"pairs":[{"compressorId":"a","toolId":"b"}',
		'{"pairs":[{"compressorId":"a","toolId":"b"},]}',
		'{"pairs":[{"compressorId":"a","toolId":"b"}{"compressorId":"c","toolId":"d"}]}',
		'{"pairs":[null]}', '{"pairs":[{"toolId":"b"}]}',
		'{"pairs":[]} trailing', '{"pairs":[]}\u000b',
		'{"pairs":[],"ignored":true}', '{"pairs":[{"compressorId":"a","toolId":"b","warnings":[}]}',
	])('rejects incomplete or malformed input: %s', async (text) => {
		await expect(readVerdictSnapshot(await fixture(text))).rejects.toThrow();
	});

	it('bounds header and individual record sizes', async () => {
		await expect(readVerdictSnapshot(await fixture(JSON.stringify({ large: 'x'.repeat(65_537), pairs: [] })))).rejects.toThrow('verdict_snapshot_header_invalid');
		await expect(readVerdictSnapshot(await fixture(JSON.stringify({ pairs: [{ compressorId: 'a', toolId: 'b', large: 'x'.repeat(1_048_577) }] })))).rejects.toThrow('verdict_snapshot_pair_too_large');
	});

	it('shares the immutable lookup across profiles while isolating releases and missing pairs', () => {
		const pair = { compressorId: 'a--b', toolId: 'c', verdict: 'incompatible' };
		const other = { compressorId: 'a', toolId: 'b--c', verdict: 'continuous' };
		const snapshot = { pairs: [pair, other] };
		const index = verdictIndex(snapshot);
		expect(verdictIndex(snapshot)).toBe(index);
		expect(index.get('a--b', 'c')).toBe(pair);
		expect(index.get('a', 'b--c')).toBe(other);
		expect(index.get('missing', 'c')).toBeUndefined();
		expect(verdictIndex({ pairs: [] }).get('a--b', 'c')).toBeUndefined();
	});

	it('finds unsorted boundary keys and keeps the last duplicate without reordering the snapshot', () => {
		const pairs = ['z', 'a', 'm', 'm', '__proto__'].map((toolId, index) => ({ compressorId: 'c', toolId, verdict: String(index) }));
		const original = [...pairs];
		const lookup = verdictIndex({ pairs });
		for (const position of [0, 1, 3, 4]) expect(lookup.get('c', pairs[position].toolId)).toBe(pairs[position]);
		for (const missing of ['', 'b', 'zz']) expect(lookup.get('c', missing)).toBeUndefined();
		expect(pairs).toEqual(original);
	});
});
