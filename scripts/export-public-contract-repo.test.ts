import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { afterEach, describe, expect, it } from 'vitest';

const roots: string[] = [];
afterEach(() => { for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true }); });

describe('minimal public contract repository export', () => {
	it('exports MCP 2.1, receipts and UCP without the proprietary engine', () => {
		const root = mkdtempSync(join(tmpdir(), 'compatair-public-contracts-')); roots.push(root);
		const output = join(root, 'repo');
		const exported = spawnSync(process.execPath, [new URL('./export-public-contract-repo.mjs', import.meta.url).pathname, output], { encoding: 'utf8' });
		expect(exported.status, exported.stderr).toBe(0);
		expect(JSON.parse(readFileSync(join(output, 'server.json'), 'utf8')).version).toBe('3.0.0');
		expect(JSON.parse(readFileSync(join(output, 'SYNC_MANIFEST.json'), 'utf8')).files.length).toBeGreaterThanOrEqual(16);
		expect(() => readFileSync(join(output, 'server/mcp-core.mjs'))).toThrow();
		const tested = spawnSync(process.execPath, ['--test', 'tests/verify-contracts.mjs', 'ucp/tests/verify-contracts.mjs'], { cwd: output, encoding: 'utf8' });
		expect(tested.status, tested.stderr).toBe(0);
	}, 15_000);
});
