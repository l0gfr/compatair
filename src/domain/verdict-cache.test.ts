import { createHash } from 'node:crypto';
import { mkdtempSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';
import { afterEach, describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { createVerdictSnapshot, verdictCacheReport, verdictJsonChunks } from './snapshots';
import type { VerdictCacheOptions } from './verdict-cache';

const directories: string[] = [];
const options = (): VerdictCacheOptions => {
	const directory = mkdtempSync(join(tmpdir(), 'compatair-calculation-cache-'));
	directories.push(directory);
	return { directory, fingerprint: 'a'.repeat(64) };
};
const input = () => ({ compressors: structuredClone(compressors.slice(0, 3)), tools: structuredClone(tools.filter(t => t.demandModel === 'fixed-flow').slice(0, 2)), catalogVersion: 'catalog', verifiedAt: '2026-09-27' });
const json = (snapshot: ReturnType<typeof createVerdictSnapshot>) => [...verdictJsonChunks(snapshot)].join('');
afterEach(() => { for (const path of directories.splice(0)) rmSync(path, { recursive: true, force: true }); });

describe('persistent incremental verdict calculations', () => {
	it('reuses every calculation across new input objects and keeps all published bytes identical', () => {
		const cache = options();
		const reference = createVerdictSnapshot(input(), false);
		const cold = createVerdictSnapshot(input(), cache);
		const warm = createVerdictSnapshot(input(), cache);
		expect(verdictCacheReport(cold)).toMatchObject({ calculated: 6, reused: 0, stored: true });
		expect(verdictCacheReport(warm)).toMatchObject({ calculated: 0, reused: 6, invalidRows: 0, stored: true });
		expect(json(cold)).toBe(json(reference));
		expect(json(warm)).toBe(json(reference));
		expect(JSON.stringify(warm)).toBe(json(reference));
		expect(warm.pairs.map(pair => pair.id)).toHaveLength(6);
		expect(warm.pairs.slice(-1)[0].id).toBe(reference.pairs.at(-1)?.id);
		expect(() => { warm.pairs[0] = warm.pairs[1]; }).toThrow('immutable');
	});

	it.each(['compressor', 'tool', 'provenance', 'new-compressor', 'new-tool', 'order', 'remove', 'metadata', 'engine'])('invalidates only the necessary cells after %s changes', kind => {
		const cache = options();
		createVerdictSnapshot(input(), cache);
		const changed = input();
		let calculated = 0, reused = 6;
		if (kind === 'compressor') { changed.compressors[0].maxPressureBar += 1; calculated = 2; reused = 4; }
		if (kind === 'provenance') { changed.compressors[0].evidence[0].retrievedAt = '2026-09-26'; calculated = 2; reused = 4; }
		if (kind === 'tool') { changed.tools[0].confidence = changed.tools[0].confidence === 'A' ? 'B' : 'A'; calculated = 3; reused = 3; }
		if (kind === 'new-compressor') { changed.compressors.push({ ...changed.compressors[0], id: 'new-compressor' }); calculated = 2; }
		if (kind === 'new-tool') { changed.tools.push({ ...changed.tools[0], id: 'new-tool' }); calculated = 3; }
		if (kind === 'order') { changed.compressors.reverse(); changed.tools.reverse(); }
		if (kind === 'remove') { changed.compressors.pop(); changed.tools.pop(); reused = 2; }
		if (kind === 'metadata') changed.verifiedAt = '2026-09-28';
		if (kind === 'engine') { cache.fingerprint = 'b'.repeat(64); calculated = 6; reused = 0; }
		const incremental = createVerdictSnapshot(changed, cache);
		expect(verdictCacheReport(incremental)).toMatchObject({ calculated, reused, stored: true });
		expect(json(incremental)).toBe(json(createVerdictSnapshot(changed, false)));
		const warm = createVerdictSnapshot(structuredClone(changed), cache);
		expect(verdictCacheReport(warm)).toMatchObject({ calculated: 0, reused: incremental.pairs.length });
		expect(json(warm)).toBe(json(incremental));
	});

	it.each(['checksum', 'shape', 'manifest', 'version', 'missing'])('rebuilds damaged %s data without changing the output', kind => {
		const cache = options();
		const cold = createVerdictSnapshot(input(), cache);
		const manifestPath = join(cache.directory, 'manifest.json');
		const envelope = JSON.parse(readFileSync(manifestPath, 'utf8'));
		const manifest = envelope.data;
		const tool = Object.keys(manifest.tools)[0];
		const row = join(cache.directory, `${manifest.tools[tool]}.json.gz`);
		if (kind === 'checksum') writeFileSync(row, 'broken');
		if (kind === 'missing') rmSync(row);
		if (kind === 'manifest') writeFileSync(manifestPath, '{');
		if (kind === 'version') { manifest.output.digest = 'f'.repeat(64); writeFileSync(manifestPath, JSON.stringify(envelope)); }
		if (kind === 'shape') {
			const bytes = gzipSync(JSON.stringify({ values: [], indexes: [99, 99, 99] }));
			const digest = createHash('sha256').update(bytes).digest('hex');
			writeFileSync(join(cache.directory, `${digest}.json.gz`), bytes);
			manifest.tools[tool] = digest;
			envelope.digest = createHash('sha256').update(JSON.stringify(manifest)).digest('hex');
			writeFileSync(manifestPath, JSON.stringify(envelope));
		}
		const repaired = createVerdictSnapshot(input(), cache);
		expect(verdictCacheReport(repaired)!.calculated).toBeGreaterThan(0);
		expect(json(repaired)).toBe(json(cold));
	});

	it('bounds stored bytes, prunes obsolete rows, and computes normally without a writable cache', () => {
		const cache = options();
		createVerdictSnapshot(input(), cache);
		writeFileSync(join(cache.directory, 'manifest.json.deadbeef.partial'), 'interrupted write');
		const changed = input(); changed.compressors = []; changed.tools = [];
		const empty = createVerdictSnapshot(changed, cache);
		expect(empty.pairs).toHaveLength(0);
		expect(readdirSync(cache.directory)).toEqual(['manifest.json']);
		const limited = createVerdictSnapshot(input(), { ...cache, maxBytes: 1 });
		expect(verdictCacheReport(limited)).toMatchObject({ stored: false, bytes: 0, calculated: 6 });
		expect(readdirSync(cache.directory)).toEqual([]);
		expect(json(limited)).toBe(json(createVerdictSnapshot(input(), false)));
		const file = join(cache.directory, 'file'); writeFileSync(file, 'not a directory');
		const unwritable = createVerdictSnapshot(input(), { ...cache, directory: file });
		expect(verdictCacheReport(unwritable)?.stored).toBe(false);
		expect(json(unwritable)).toBe(json(limited));
	});

	it('does not read, write or prune a symlinked cache directory', () => {
		const cache = options(), target = options();
		const original = createVerdictSnapshot(input(), target);
		const manifest = readFileSync(join(target.directory, 'manifest.json'), 'utf8');
		const linked = join(cache.directory, 'link'); symlinkSync(target.directory, linked, 'dir');
		const snapshot = createVerdictSnapshot(input(), { ...cache, directory: linked });
		expect(verdictCacheReport(snapshot)).toMatchObject({ calculated: 6, reused: 0, stored: false });
		expect(json(snapshot)).toBe(json(original));
		expect(readFileSync(join(target.directory, 'manifest.json'), 'utf8')).toBe(manifest);
	});
});
