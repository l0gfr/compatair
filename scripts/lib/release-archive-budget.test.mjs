import { execFileSync } from 'node:child_process';
import { mkdtempSync, openSync, ftruncateSync, closeSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parse } from 'yaml';
import { randomBytes } from 'node:crypto';
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
		expect(rejected?.stdout.toString()).toContain('201326593 bytes (limit 201326592)');
	});

	it('keeps compression, mandatory failure and seven-day artifact retention', () => {
		expect(guard.shell).toBe('bash');
		expect(guard.run).toContain('exit 1');
		expect(upload.with['retention-days']).toBe(7);
		expect(upload.with['compression-level']).toBe(0);
		const packaging = workflow.jobs.validate.steps.find(step => step.name === 'Package immutable release');
		expect(packaging.run).toContain('xz -T1 -9');
		expect(packaging.run).toContain('node scripts/production-archive-order.mjs dist > production-archive-files.list');
		expect(packaging.run).toContain('tar -C dist --null --no-recursion -T "$PWD/production-archive-files.list" -cf -');
		expect(packaging.run).toContain('--lzma2=preset=9,dict=256MiB --memlimit-compress=5GiB --no-adjust');
		expect(packaging.run.indexOf('xz --test')).toBeLessThan(packaging.run.indexOf('sha256sum'));
		expect(packaging.run).toContain('tar -tf "compatair-${GITHUB_SHA}.tar.xz" | node scripts/production-archive-order.mjs --verify-list production-archive-files.list');
		expect(upload.with['if-no-files-found']).toBe('error');
	});
	it('preserves every input byte with the exact production compression settings and rejects corruption', () => {
		const packaging = workflow.jobs.validate.steps.find(step => step.name === 'Package immutable release');
		const options = /\| xz (.+) > "compatair-/.exec(packaging.run)[1].split(' ');
		const bytes = Buffer.concat([Buffer.from('Données complètes\0\n'), randomBytes(128 * 1024), Buffer.alloc(1024 * 1024, 37)]);
		const compressed = execFileSync('xz', [...options, '--stdout'], { input: bytes });
		expect(execFileSync('xz', ['--decompress', '--stdout'], { input: compressed, maxBuffer: bytes.length + 64 })).toEqual(bytes);
		expect(() => execFileSync('xz', ['--test'], { input: compressed })).not.toThrow();
		const corrupted = Buffer.from(compressed); corrupted[Math.floor(corrupted.length / 2)] ^= 1;
		expect(() => execFileSync('xz', ['--test'], { input: corrupted, stdio: ['pipe', 'pipe', 'pipe'] })).toThrow();
	});
	it('refuses an integrity-check failure before checksums or release upload', () => {
		const root = mkdtempSync(join(tmpdir(), 'compatair-package-integrity-failure-'));
		const packaging = workflow.jobs.validate.steps.find(step => step.name === 'Package immutable release');
		const checksumMarker = join(root, 'checksum-reached');
		const functions = `node() { printf "./\\0"; }
 install() { :; }
 tar() { printf controlled-fixture; }
 xz() { if [[ "$1" == "--test" ]]; then return 13; fi; cat; }
 sha256sum() { printf checksum >> "$TEST_CHECKSUM_MARKER"; }
 `;
		try {
			let rejected;
			try { execFileSync('bash', ['-e', '-c', functions + packaging.run], { cwd: root, env: { ...process.env, GITHUB_SHA: 'a'.repeat(40), TEST_CHECKSUM_MARKER: checksumMarker }, encoding: 'utf8' }); }
			catch (error) { rejected = error; }
			expect(rejected?.status).toBe(13);
			expect(() => readFileSync(checksumMarker, 'utf8')).toThrow();
		} finally { rmSync(root, { recursive: true, force: true }); }
	});
	it('refuses an xz failure before checksums or release upload', () => {
		const root = mkdtempSync(join(tmpdir(), 'compatair-package-xz-failure-'));
		const packaging = workflow.jobs.validate.steps.find(step => step.name === 'Package immutable release');
		const checksumMarker = join(root, 'checksum-reached');
		const functions = `node() { printf "./\\0"; }
 install() { :; }
 tar() { printf controlled-fixture; }
 xz() { cat > /dev/null; return 12; }
 sha256sum() { printf checksum >> "$TEST_CHECKSUM_MARKER"; }
 `;
		try {
			let rejected;
			try {
				execFileSync('bash', ['-e', '-c', functions + packaging.run], {
					cwd: root, env: { ...process.env, GITHUB_SHA: 'a'.repeat(40), TEST_CHECKSUM_MARKER: checksumMarker }, encoding: 'utf8',
				});
			} catch (error) { rejected = error; }
			expect(rejected?.status).toBe(12);
			expect(() => readFileSync(checksumMarker, 'utf8')).toThrow();
		} finally { rmSync(root, { recursive: true, force: true }); }
	});
	it('refuses packaging when tar fails even if xz succeeds, before checksums or release upload', () => {
		const root = mkdtempSync(join(tmpdir(), 'compatair-package-pipefail-'));
		const packaging = workflow.jobs.validate.steps.find(step => step.name === 'Package immutable release');
		expect(packaging.run.split('\n')[0]).toBe('set -Eeuo pipefail');
		expect(packaging['continue-on-error']).toBeUndefined();
		expect(upload.if).toBeUndefined();
		expect(upload['continue-on-error']).toBeUndefined();
		const checksumMarker = join(root, 'checksum-reached');
		const xzMarker = join(root, 'xz-succeeded');
		const functions = `node() { printf "./\\0"; }
 install() { :; }
 tar() { if [[ "$1" == "-C" ]]; then return 9; fi; return 0; }
 xz() { cat; printf success > "$TEST_XZ_MARKER"; }
 sha256sum() { printf checksum >> "$TEST_CHECKSUM_MARKER"; }
 `;
		const execute = body => execFileSync('bash', ['-e', '-c', functions + body], {
			cwd: root, env: { ...process.env, GITHUB_SHA: 'a'.repeat(40), TEST_XZ_MARKER: xzMarker, TEST_CHECKSUM_MARKER: checksumMarker }, encoding: 'utf8',
		});
		try {
			let rejected;
			try { execute(packaging.run); } catch (error) { rejected = error; }
			expect(rejected?.status).toBe(9);
			expect(readFileSync(xzMarker, 'utf8')).toBe('success');
			expect(() => readFileSync(checksumMarker, 'utf8')).toThrow();
			// Replay the exact same step without the guard, matching the observed
			// runner shell bash -e: xz masks tar and reaches both checksums.
			execute(packaging.run.replace(/^set -Eeuo pipefail\n/, ''));
			expect(readFileSync(checksumMarker, 'utf8')).toBe('checksumchecksum');
		} finally { rmSync(root, { recursive: true, force: true }); }
	});

});
