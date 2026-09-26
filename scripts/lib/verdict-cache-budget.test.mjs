import { mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, expect, it } from 'vitest';
import { inspectVerdictCache } from './verdict-cache-budget.mjs';

const directories = [];
afterEach(() => { for (const directory of directories.splice(0)) rmSync(directory, { recursive: true, force: true }); });
it('enforces actual bytes and rejects missing, partial, foreign or symlinked cache entries', () => {
	const directory = mkdtempSync(join(tmpdir(), 'compatair-cache-budget-')); directories.push(directory);
	expect(inspectVerdictCache(directory).ready).toBe(false);
	const manifest = join(directory, 'manifest.json'); writeFileSync(manifest, '{}');
	const row = join(directory, `${'a'.repeat(64)}.json.gz`); writeFileSync(row, 'row');
	expect(inspectVerdictCache(directory, 5)).toEqual({ ready: true, bytes: 5 });
	expect(inspectVerdictCache(directory, 4).ready).toBe(false);
	const foreign = join(directory, 'unfinished.partial'); writeFileSync(foreign, 'x');
	expect(inspectVerdictCache(directory).ready).toBe(false); rmSync(foreign);
	rmSync(row); symlinkSync(manifest, row);
	expect(inspectVerdictCache(directory).ready).toBe(false);
});
