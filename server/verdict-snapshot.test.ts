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

	it('accepts empty snapshots and standard JSON whitespace', async () => {
		expect(await readVerdictSnapshot(await fixture(' { "catalogVersion": "test", "pairs" : [ ] }\r\n'))).toEqual({ catalogVersion: 'test', pairs: [] });
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
});
