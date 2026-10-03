import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { parse } from 'yaml';
import { describe, expect, it } from 'vitest';
import { validateDependencyPatch, isVerifiedCacheAdvisory, attestInstalledDependencyPatch } from './verified-dependency-patches.mjs';
import { advisoryBlocksRelease } from './advisory-policy.mjs';

const root = new URL('../../', import.meta.url);
const require = createRequire(new URL('package.json', root));
const consumer = createRequire(require.resolve('astro'));
const path = consumer.resolve('http-cache-semantics');
const workspaceText = await readFile(new URL('pnpm-workspace.yaml', root), 'utf8');
const lockText = await readFile(new URL('pnpm-lock.yaml', root), 'utf8');
const fixture = {
	workspace: parse(workspaceText), lockfile: parse(lockText),
	patch: await readFile(new URL('patches/http-cache-semantics@4.2.0.patch', root)),
	installedCopies: [{ name: 'http-cache-semantics', version: '4.2.0', source: await readFile(path), path }],
	consumerPath: path,
};
const advisory = { packageName: 'http-cache-semantics', severity: 'high', title: 'http-cache-semantics max-stale handling can disclose cross-user cached responses', url: 'https://github.com/advisories/GHSA-ch52-4w7c-c8xp' };

describe('attested installed dependency correction', () => {
	it('attests the actual locked patch and all installed copies used by Astro', async () => {
		const attestation = validateDependencyPatch(fixture);
		expect(await attestInstalledDependencyPatch({ root: root.pathname, workspace: workspaceText, lockfile: lockText })).toBe(attestation);
		expect(isVerifiedCacheAdvisory(advisory, attestation)).toBe(true);
	});
	it.each([
		['removed patch declaration', (f) => { delete f.workspace.patchedDependencies; }],
		['other patch declaration', (f) => { f.workspace.patchedDependencies.other = 'patches/other.patch'; }],
		['changed patch bytes', (f) => { f.patch[0] ^= 1; }],
		['changed locked digest', (f) => { f.lockfile.patchedDependencies['http-cache-semantics@4.2.0'].hash = '0'.repeat(64); }],
		['unpatched locked copy', (f) => { f.lockfile.snapshots['http-cache-semantics@4.2.0'] = {}; }],
		['other locked version', (f) => { f.lockfile.packages['http-cache-semantics@4.1.1'] = {}; }],
		['unpatched dependency edge', (f) => { Object.values(f.lockfile.snapshots).find((s) => s.dependencies?.['http-cache-semantics']).dependencies['http-cache-semantics'] = '4.2.0'; }],
		['missing installed copy', (f) => { f.installedCopies = []; }],
		['second unpatched installed copy', (f) => { f.installedCopies.push({ ...f.installedCopies[0], source: Buffer.from('unpatched-copy') }); }],
		['changed installed bytes', (f) => { f.installedCopies[0].source[0] ^= 1; }],
		['changed installed version', (f) => { f.installedCopies[0].version = '4.1.1'; }],
		['other consumer resolution', (f) => { f.consumerPath = '/other-copy/index.js'; }],
		['ignored failed patch', (f) => { f.workspace.ignorePatchFailures = true; }],
		['allowed unused patch', (f) => { f.workspace.allowUnusedPatches = true; }],
	])('fails closed on %s', (_, mutate) => {
		const changed = structuredClone(fixture);
		mutate(changed);
		expect(() => validateDependencyPatch(changed)).toThrow(/non attesté/);
	});
	it('keeps the advisory blocking without attestation and blocks unrelated advisories', () => {
		expect(advisoryBlocksRelease(advisory, new Set())).toBe(true);
		expect(isVerifiedCacheAdvisory(advisory, undefined)).toBe(false);
		const attestation = validateDependencyPatch(fixture);
		for (const changed of [
			{ ...advisory, url: 'https://github.com/advisories/GHSA-other' },
			{ ...advisory, packageName: 'other-package' },
			{ ...advisory, severity: 'critical' },
			{ ...advisory, title: 'Changed security scope' },
		]) {
			expect(isVerifiedCacheAdvisory(changed, attestation)).toBe(false);
			expect(advisoryBlocksRelease(changed, new Set())).toBe(true);
		}
	});
});
