import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { afterEach, expect, it } from 'vitest';
import { verdictCacheConfig } from './verdict-cache-config.mjs';

const roots = [];
afterEach(async () => { await Promise.all(roots.splice(0).map(root => rm(root, { recursive: true, force: true }))); });
it('fingerprints nested engine sources and dependencies without depending on guides, CSS or test edits', async () => {
	const root = await mkdtemp(join(tmpdir(), 'compatair-cache-key-')); roots.push(root);
	await mkdir(join(root, 'src/domain/nested'), { recursive: true });
	await mkdir(join(root, 'scripts/lib'), { recursive: true });
 await mkdir(join(root, 'server'), { recursive: true });
	const files = ['server/air-sizing.mjs', 'server/air-compatibility.mjs', 'src/domain/engine.ts', 'src/domain/nested/math.ts', 'pnpm-lock.yaml', 'scripts/lib/verdict-cache-config.mjs'];
	for (const file of files) await writeFile(join(root, file), 'initial');
	let previous = verdictCacheConfig(root).fingerprint;
	expect(previous).toMatch(/^[a-f0-9]{64}$/);
	for (const file of files) {
		await writeFile(join(root, file), 'changed');
		const next = verdictCacheConfig(root).fingerprint;
		expect(next).not.toBe(previous); previous = next;
	}
	for (const file of ['src/guide.md', 'src/header.astro', 'src/style.css', 'src/domain/engine.test.ts']) await writeFile(join(root, file), 'irrelevant to engine');
	expect(verdictCacheConfig(root).fingerprint).toBe(previous);
});
