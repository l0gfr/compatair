import { execFileSync } from 'node:child_process';
import { mkdtempSync, openSync, ftruncateSync, closeSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parse } from 'yaml';
import { describe, expect, it } from 'vitest';

const workflow = parse(readFileSync(new URL('../../.github/workflows/deploy-production.yml', import.meta.url), 'utf8'));
const guard = workflow.jobs.validate.steps.find(step => step.name === 'Bound compressed release storage');
const upload = workflow.jobs.validate.steps.find(step => step.name === 'Upload release artifact');
const maximumBytes = 192 * 1024 * 1024;

function evaluateSize(bytes) {
	const root = mkdtempSync(join(tmpdir(), 'compatair-release-budget-'));
	const revision = 'a'.repeat(40);
	const handle = openSync(join(root, `compatair-${revision}.tar.xz`), 'w');
	try { ftruncateSync(handle, bytes); } finally { closeSync(handle); }
	try {
		// Execute only the size-check step against a sparse local fixture.
		// No packaging, upload, cleanup, deployment or other workflow step runs.
		return execFileSync('bash', ['-eu', '-c', guard.run], {
			cwd: root, env: { ...process.env, GITHUB_SHA: revision }, encoding: 'utf8',
		});
	} finally { rmSync(root, { recursive: true, force: true }); }
}

describe('bounded compressed production archive', () => {
	it('accepts the measured development B archive under the new bound', () => {
		expect(evaluateSize(189_067_156)).toContain('189067156 bytes (limit 201326592)');
	});

	it('accepts the exact bound', () => {
		expect(evaluateSize(maximumBytes)).toContain('201326592 bytes (limit 201326592)');
	});

	it('refuses one byte above the bound', () => {
		let rejected;
		try { evaluateSize(maximumBytes + 1); } catch (error) { rejected = error; }
		expect(rejected?.status).toBe(1);
		expect(rejected?.stderr.toString()).toContain('192 MiB GitHub storage budget');
	});

	it('keeps compression, mandatory failure and seven-day artifact retention', () => {
		expect(guard.shell).toBe('bash');
		expect(guard.run).toContain('exit 1');
		expect(upload.with['retention-days']).toBe(7);
		expect(upload.with['compression-level']).toBe(0);
		const packaging = workflow.jobs.validate.steps.find(step => step.name === 'Package immutable release');
		expect(packaging.run).toContain('xz -T2 -8');
		expect(upload.with['if-no-files-found']).toBe('error');
	});
});
