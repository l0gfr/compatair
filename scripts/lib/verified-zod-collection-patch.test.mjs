import { createRequire } from 'node:module';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parse } from 'yaml';
import { describe, expect, it } from 'vitest';
import { advisoryBlocksRelease } from './advisory-policy.mjs';
import { ZOD_COLLECTION_PATCH, attestInstalledZodCollectionPatch, isVerifiedZodCollectionAdvisory, validateZodCollectionPatch } from './verified-zod-collection-patch.mjs';

const root = new URL('../../', import.meta.url);
const rootRequire = createRequire(new URL('package.json', root));
const lhci = createRequire(rootRequire.resolve('@lhci/cli/package.json'));
const lighthouse = createRequire(lhci.resolve('lighthouse/package.json'));
const puppeteer = createRequire(lighthouse.resolve('puppeteer-core/package.json'));
const bidi = createRequire(puppeteer.resolve('chromium-bidi'));
const consumerPath = bidi.resolve('zod');
const directPath = rootRequire.resolve('zod');
const workspaceText = await readFile(new URL('pnpm-workspace.yaml', root), 'utf8');
const lockText = await readFile(new URL('pnpm-lock.yaml', root), 'utf8');
const fixture = {
	workspace: parse(workspaceText), lockfile: parse(lockText),
	patch: await readFile(new URL(ZOD_COLLECTION_PATCH.patchPath, root)),
	installedCopies: [
		{ version: '3.25.76', entryPath: consumerPath, files: Object.fromEntries(await Promise.all(
			Object.keys(ZOD_COLLECTION_PATCH.files).map(async (name) => [name, await readFile(join(dirname(consumerPath), name))]),
		)) },
		{ version: '4.6.7', entryPath: directPath, files: {} },
	], consumerPath, directPath,
};
const advisory = { packageName: 'zod', severity: 'high', title: 'Zod can exhaust memory while validating oversized constrained collections', url: 'https://github.com/advisories/GHSA-mrhx-c7xc-m3w5', ghsaId: 'GHSA-mrhx-c7xc-m3w5', vulnerableVersionRanges: ['< 4.6.6'], firstPatchedVersions: ['4.6.6'], queriedVersions: ['3.25.76', '4.6.7'] };

describe('attested legacy Zod collection correction', () => {
	it('attests the real locked patch and every installed copy, including the Chromium BiDi consumer', async () => {
		expect(validateZodCollectionPatch(fixture)).toBe(ZOD_COLLECTION_PATCH.patchSha256);
		expect(await attestInstalledZodCollectionPatch({ root: root.pathname, workspace: workspaceText, lockfile: lockText })).toBe(ZOD_COLLECTION_PATCH.patchSha256);
	});

	it.each([
		['changed patch bytes', (f) => { f.patch[0] ^= 1; }],
		['changed patch declaration', (f) => { f.workspace.patchedDependencies[ZOD_COLLECTION_PATCH.reference] = 'other.patch'; }],
		['changed lock hash', (f) => { f.lockfile.patchedDependencies[ZOD_COLLECTION_PATCH.reference].hash = '0'.repeat(64); }],
		['extra vulnerable locked version', (f) => { f.lockfile.packages['zod@4.4.3'] = {}; }],
		['unpatched snapshot', (f) => { f.lockfile.snapshots['zod@3.25.76'] = {}; }],
		['unpatched dependency edge', (f) => { f.lockfile.snapshots['test@1'].dependencies.zod = '3.25.76'; }],
		['changed CJS bytes', (f) => { f.installedCopies[0].files['v3/types.cjs'][0] ^= 1; }],
		['changed ESM bytes', (f) => { f.installedCopies[0].files['v3/types.js'][0] ^= 1; }],
		['unpatched extra installed copy', (f) => { f.installedCopies.push({ ...f.installedCopies[0], files: {} }); }],
		['unexpected installed version', (f) => { f.installedCopies.push({ version: '4.4.3', entryPath: '/other' }); }],
		['missing legacy copy', (f) => { f.installedCopies.shift(); }],
		['different BiDi resolution', (f) => { f.consumerPath = '/other/index.cjs'; }],
		['different direct resolution', (f) => { f.directPath = '/other/index.cjs'; }],
	])('fails closed for %s', (_, mutate) => {
		const changed = structuredClone(fixture);
		changed.lockfile.snapshots['test@1'] = { dependencies: { zod: '4.6.7' } };
		mutate(changed);
		expect(() => validateZodCollectionPatch(changed)).toThrow(/non attesté/);
	});

	it('keeps the advisory blocking without exact attestation, and never waives another advisory', () => {
		expect(advisoryBlocksRelease(advisory, new Set())).toBe(true);
		expect(isVerifiedZodCollectionAdvisory(advisory, undefined)).toBe(false);
		expect(isVerifiedZodCollectionAdvisory(advisory, ZOD_COLLECTION_PATCH.patchSha256)).toBe(true);
		for (const changed of [
			{ ...advisory, url: 'https://github.com/advisories/GHSA-other' },
			{ ...advisory, title: 'Another Zod vulnerability' },
			{ ...advisory, severity: 'critical' },
			{ ...advisory, packageName: 'other' },
			{ ...advisory, vulnerableVersionRanges: ['<= 4.6.7'] },
			{ ...advisory, vulnerableVersionRanges: ['< 4.6.6', '>= 4.6.7'] },
			{ ...advisory, vulnerableVersionRanges: undefined },
			{ ...advisory, firstPatchedVersions: ['4.6.8'] },
			{ ...advisory, queriedVersions: ['4.6.7'] },
			{ ...advisory, queriedVersions: ['3.25.76', '4.4.3'] },
		]) {
			expect(isVerifiedZodCollectionAdvisory(changed, ZOD_COLLECTION_PATCH.patchSha256)).toBe(false);
			expect(advisoryBlocksRelease(changed, new Set())).toBe(true);
		}
	});
});
