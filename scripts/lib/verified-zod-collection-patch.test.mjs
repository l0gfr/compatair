import { createRequire } from 'node:module';
import { readFile, realpath } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parse } from 'yaml';
import { describe, expect, it } from 'vitest';
import { advisoryBlocksRelease } from './advisory-policy.mjs';
import { ZOD_COLLECTION_PATCH, ZOD4_COLLECTION_PATCH, ZOD_COLLECTION_PATCH_ATTESTATION, ZOD_OFFICIAL_COLLECTION_FILES, attestInstalledZodCollectionPatch, isVerifiedZodCollectionAdvisory, validateZodCollectionPatch } from './verified-zod-collection-patch.mjs';

const root = new URL('../../', import.meta.url);
const rootRequire = createRequire(new URL('package.json', root));
const lhci = createRequire(rootRequire.resolve('@lhci/cli/package.json'));
const lighthouse = createRequire(lhci.resolve('lighthouse/package.json'));
const puppeteer = createRequire(lighthouse.resolve('puppeteer-core/package.json'));
const bidi = createRequire(puppeteer.resolve('chromium-bidi'));
const consumerPath = await realpath(bidi.resolve('zod'));
const directPath = await realpath(rootRequire.resolve('zod'));
const astroPath = await realpath(createRequire(rootRequire.resolve('astro/package.json')).resolve('zod'));
const sitemapPath = await realpath(createRequire(rootRequire.resolve('@astrojs/sitemap/package.json')).resolve('zod'));
const workspaceText = await readFile(new URL('pnpm-workspace.yaml', root), 'utf8');
const lockText = await readFile(new URL('pnpm-lock.yaml', root), 'utf8');
const fixture = {
	packageJson: JSON.parse(await readFile(new URL('package.json', root), 'utf8')),
	workspace: parse(workspaceText), lockfile: parse(lockText),
	patch: await readFile(new URL(ZOD_COLLECTION_PATCH.patchPath, root)),
	patchV4: await readFile(new URL(ZOD4_COLLECTION_PATCH.patchPath, root)),
	installedCopies: [
		{ version: '3.25.76', entryPath: consumerPath, files: Object.fromEntries(await Promise.all(
			Object.keys(ZOD_COLLECTION_PATCH.files).map(async (name) => [name, await readFile(join(dirname(consumerPath), name))]),
		)) },
		{ version: '4.4.3', entryPath: directPath, files: Object.fromEntries(await Promise.all(
			Object.keys(ZOD4_COLLECTION_PATCH.files).map(async (name) => [name, await readFile(join(dirname(directPath), name))]),
		)) },
		{ version: '4.6.7', entryPath: astroPath, files: Object.fromEntries(await Promise.all(
			Object.keys(ZOD_OFFICIAL_COLLECTION_FILES).map(async (name) => [name, await readFile(join(dirname(astroPath), name))]),
		)) },
		{ version: '4.6.7', entryPath: sitemapPath, files: Object.fromEntries(await Promise.all(
			Object.keys(ZOD_OFFICIAL_COLLECTION_FILES).map(async (name) => [name, await readFile(join(dirname(sitemapPath), name))]),
		)) },
	], consumerPath, directPath, astroPath, sitemapPath,
};
const advisory = { packageName: 'zod', severity: 'high', title: 'Zod can exhaust memory while validating oversized constrained collections', url: 'https://github.com/advisories/GHSA-mrhx-c7xc-m3w5', ghsaId: 'GHSA-mrhx-c7xc-m3w5', vulnerableVersionRanges: ['< 4.6.6'], firstPatchedVersions: ['4.6.6'], queriedVersions: ['3.25.76', '4.4.3', '4.6.7'] };

describe('attested Zod collection corrections for both patched versions', () => {
	it('attests the real locked patch and every installed copy, including the Chromium BiDi consumer', async () => {
		expect(validateZodCollectionPatch(fixture)).toBe(ZOD_COLLECTION_PATCH_ATTESTATION);
		expect(await attestInstalledZodCollectionPatch({ root: root.pathname, workspace: workspaceText, lockfile: lockText })).toBe(ZOD_COLLECTION_PATCH_ATTESTATION);
	});

	it.each([
		['changed patch bytes', (f) => { f.patch[0] ^= 1; }],
		['changed patch declaration', (f) => { f.workspace.patchedDependencies[ZOD_COLLECTION_PATCH.reference] = 'other.patch'; }],
		['changed lock hash', (f) => { f.lockfile.patchedDependencies[ZOD_COLLECTION_PATCH.reference].hash = '0'.repeat(64); }],
		['extra vulnerable locked version', (f) => { f.lockfile.packages['zod@4.4.2'] = {}; }],
		['unpatched snapshot', (f) => { f.lockfile.snapshots['zod@3.25.76'] = {}; }],
		['unpatched dependency edge', (f) => { Object.entries(f.lockfile.snapshots).find(([name]) => name.startsWith('astro@'))[1].dependencies.zod = '3.25.76'; }],
		['changed CJS bytes', (f) => { f.installedCopies[0].files['v3/types.cjs'][0] ^= 1; }],
		['changed ESM bytes', (f) => { f.installedCopies[0].files['v3/types.js'][0] ^= 1; }],
		['unpatched extra installed copy', (f) => { f.installedCopies.push({ ...f.installedCopies[0], files: {} }); }],
		['unexpected installed version', (f) => { f.installedCopies.push({ version: '4.4.2', entryPath: '/other' }); }],
		['missing legacy copy', (f) => { f.installedCopies.shift(); }],
		['different BiDi resolution', (f) => { f.consumerPath = '/other/index.cjs'; }],
		['different direct resolution', (f) => { f.directPath = '/other/index.cjs'; }],
		['unpatched V4-exported V3 copy', (f) => { f.installedCopies[1].files['v3/types.cjs'][0] ^= 1; }],
		['unexpected importer edge', (f) => { f.lockfile.importers['other'] = { dependencies: { zod: { version: '4.6.7' } } }; }],
		['changed official installed bytes', (f) => { f.installedCopies[2].files['v4/core/schemas.cjs'][0] ^= 1; }],
		['changed V4 patch bytes', (f) => { f.patchV4[0] ^= 1; }],
		['changed V4 patch declaration', (f) => { f.workspace.patchedDependencies[ZOD4_COLLECTION_PATCH.reference] = 'other.patch'; }],
		['changed V4 lock hash', (f) => { f.lockfile.patchedDependencies[ZOD4_COLLECTION_PATCH.reference].hash = '0'.repeat(64); }],
		['changed V4 upstream integrity', (f) => { f.lockfile.packages['zod@4.4.3'].resolution.integrity = 'other'; }],
		['changed official upstream integrity', (f) => { f.lockfile.packages['zod@4.6.7'].resolution.integrity = 'other'; }],
		['unpatched V4 snapshot', (f) => { f.lockfile.snapshots['zod@4.4.3'] = {}; }],
		['unpatched V4 CJS', (f) => { f.installedCopies[1].files['v4/core/schemas.cjs'][0] ^= 1; }],
		['unpatched V4 ESM', (f) => { f.installedCopies[1].files['v4/core/schemas.js'][0] ^= 1; }],
		['unpatched extra V4 copy', (f) => { f.installedCopies.push({ ...f.installedCopies[1], files: {} }); }],
		['missing V4 copy', (f) => { f.installedCopies.splice(1, 1); }],
		['changed direct package declaration', (f) => { f.packageJson.dependencies.zod = '4.6.7'; }],
		['changed direct lock specifier', (f) => { f.lockfile.importers['.'].dependencies.zod.specifier = '^4.4.3'; }],
		['unpatched direct lock edge', (f) => { f.lockfile.importers['.'].dependencies.zod.version = '4.4.3'; }],
		['unexpected consumer edge', (f) => { f.lockfile.snapshots['other@1'] = { dependencies: { zod: '4.6.7' } }; }],
		['different Astro resolution', (f) => { f.astroPath = directPath; }],
		['different sitemap resolution', (f) => { f.sitemapPath = directPath; }],
		['unexpected sitemap edge', (f) => { Object.entries(f.lockfile.snapshots).find(([name]) => name.startsWith('@astrojs/sitemap@'))[1].dependencies.zod = f.lockfile.importers['.'].dependencies.zod.version; }],
	])('fails closed for %s', (_, mutate) => {
		const changed = structuredClone(fixture);
		mutate(changed);
		expect(() => validateZodCollectionPatch(changed)).toThrow(/non attesté/);
	});

	it('keeps the advisory blocking without exact attestation, and never waives another advisory', () => {
		expect(advisoryBlocksRelease(advisory, new Set())).toBe(true);
		expect(isVerifiedZodCollectionAdvisory(advisory, undefined)).toBe(false);
		expect(isVerifiedZodCollectionAdvisory(advisory, ZOD_COLLECTION_PATCH.patchSha256)).toBe(false);
		expect(isVerifiedZodCollectionAdvisory(advisory, ZOD4_COLLECTION_PATCH.patchSha256)).toBe(false);
		expect(isVerifiedZodCollectionAdvisory(advisory, ZOD_COLLECTION_PATCH_ATTESTATION)).toBe(true);
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
			{ ...advisory, queriedVersions: ['3.25.76', '4.6.7'] },
			{ ...advisory, queriedVersions: ['3.25.76', '4.4.3', '4.5.0'] },
			{ ...advisory, ghsaId: 'GHSA-other' },
		]) {
			expect(isVerifiedZodCollectionAdvisory(changed, ZOD_COLLECTION_PATCH_ATTESTATION)).toBe(false);
			expect(advisoryBlocksRelease(changed, new Set())).toBe(true);
		}
	});
});
