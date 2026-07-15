import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { describe, expect, it } from 'vitest';

describe('append-only observatory history', () => {
	it('accepts an extension and rejects a rewritten baseline', () => {
		const directory = mkdtempSync(join(tmpdir(), 'compatair-observatory-'));
		try {
			const previous = join(directory, 'previous.json');
			const extended = join(directory, 'extended.json');
			const rewritten = join(directory, 'rewritten.json');
			const baseline = { period: '2026-07', kind: 'baseline', capturedAt: '2026-07-15', metrics: { value: 1 } };
			writeFileSync(previous, JSON.stringify({ snapshots: [baseline] }));
			writeFileSync(extended, JSON.stringify({ measurementProgram: { history: [baseline, { period: '2026-08', kind: 'monthly', capturedAt: '2026-08-31', metrics: { value: 2 } }] } }));
			writeFileSync(rewritten, JSON.stringify({ snapshots: [{ ...baseline, metrics: { value: 2 } }] }));
			const script = new URL('./assert-observatory-history-extension.mjs', import.meta.url);
			expect(spawnSync(process.execPath, [script.pathname, previous, extended]).status).toBe(0);
			expect(spawnSync(process.execPath, [script.pathname, previous, rewritten]).status).toBe(1);
		} finally { rmSync(directory, { recursive: true, force: true }); }
	});
});
