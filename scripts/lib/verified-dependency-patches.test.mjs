import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parse } from 'yaml';
import { describe, expect, it } from 'vitest';
import { validateDependencyPatches, isVerifiedCacheAdvisory, attestInstalledDependencyPatches, collectInstalledDependencyPatchCopies } from './verified-dependency-patches.mjs';
import { advisoryBlocksRelease } from './advisory-policy.mjs';

const root = new URL('../../', import.meta.url);
const require = createRequire(new URL('package.json', root));
const astroConsumer = createRequire(require.resolve('astro'));
const lhciConsumer = createRequire(require.resolve('@lhci/cli/package.json'));
const cacheReference = 'http-cache-semantics@4.3.0';
const lhciReference = '@lhci/utils@0.15.1';
const cachePath = astroConsumer.resolve('http-cache-semantics');
const lhciPath = lhciConsumer.resolve('@lhci/utils/src/lighthouserc.js');
const workspaceText = await readFile(new URL('pnpm-workspace.yaml', root), 'utf8');
const lockText = await readFile(new URL('pnpm-lock.yaml', root), 'utf8');
const fixture = {
	workspace: parse(workspaceText),
	lockfile: parse(lockText),
	patches: {
		[cacheReference]: await readFile(new URL('patches/http-cache-semantics@4.3.0.patch', root)),
		[lhciReference]: await readFile(new URL('patches/@lhci__utils@0.15.1.patch', root)),
	},
	installedCopies: [
		{ name: 'http-cache-semantics', version: '4.3.0', source: await readFile(cachePath), path: cachePath },
		{ name: '@lhci/utils', version: '0.15.1', source: await readFile(lhciPath), path: lhciPath },
	],
	consumerPaths: {
		[cacheReference]: cachePath,
		[lhciReference]: lhciPath,
	},
};
const advisory = { packageName: 'http-cache-semantics', severity: 'high', title: 'http-cache-semantics max-stale handling can disclose cross-user cached responses', url: 'https://github.com/advisories/GHSA-ch52-4w7c-c8xp' };
const snapshotKey = (lockfile, reference) => Object.keys(lockfile.snapshots).find((key) => key === reference || key.startsWith(`${reference}(`));
const dependencyEdge = (lockfile, name) => Object.values(lockfile.snapshots).find((snapshot) =>
	snapshot.dependencies?.[name] !== undefined || snapshot.optionalDependencies?.[name] !== undefined
);

describe('attested installed dependency corrections', () => {
	it('attests both actual locked patches and all installed copies used by their consumers', async () => {
		const attestation = validateDependencyPatches(fixture);
		expect(await attestInstalledDependencyPatches({ root: root.pathname, workspace: workspaceText, lockfile: lockText })).toBe(attestation);
		expect(isVerifiedCacheAdvisory(advisory, attestation)).toBe(true);
	});

	it('enumerates and rejects an extra unpatched virtual-store copy', async () => {
		const temporaryRoot = await mkdtemp(join(tmpdir(), 'compatair-patch-store-'));
		try {
			for (const [index, copy] of [...fixture.installedCopies, { ...fixture.installedCopies[0], source: Buffer.from('unpatched-copy') }].entries()) {
				const packageRoot = join(temporaryRoot, 'node_modules', '.pnpm', `copy-${index}`, 'node_modules', ...copy.name.split('/'));
				await mkdir(join(packageRoot, copy.name === '@lhci/utils' ? 'src' : ''), { recursive: true });
				await writeFile(join(packageRoot, 'package.json'), JSON.stringify({ name: copy.name, version: copy.version }));
				await writeFile(join(packageRoot, copy.name === '@lhci/utils' ? 'src/lighthouserc.js' : 'index.js'), copy.source);
			}
			const installedCopies = await collectInstalledDependencyPatchCopies(temporaryRoot);
			expect(installedCopies).toHaveLength(3);
			const consumerPaths = Object.fromEntries([
				[cacheReference, installedCopies.find((copy) => copy.name === 'http-cache-semantics' && copy.source.equals(fixture.installedCopies[0].source)).path],
				[lhciReference, installedCopies.find((copy) => copy.name === '@lhci/utils').path],
			]);
			expect(() => validateDependencyPatches({ ...fixture, installedCopies, consumerPaths })).toThrow(/copie installée/);
		} finally {
			await rm(temporaryRoot, { recursive: true, force: true });
		}
	});

	it.each([
		['removed patch declaration', (f) => { delete f.workspace.patchedDependencies[lhciReference]; }],
		['other patch declaration', (f) => { f.workspace.patchedDependencies.other = 'patches/other.patch'; }],
		['changed cache patch bytes', (f) => { f.patches[cacheReference][0] ^= 1; }],
		['changed Lighthouse patch bytes', (f) => { f.patches[lhciReference][0] ^= 1; }],
		['changed cache lock digest', (f) => { f.lockfile.patchedDependencies[cacheReference].hash = '0'.repeat(64); }],
		['changed Lighthouse lock digest', (f) => { f.lockfile.patchedDependencies[lhciReference].hash = '0'.repeat(64); }],
		['unpatched cache lock copy', (f) => {
			const key = snapshotKey(f.lockfile, cacheReference);
			delete f.lockfile.snapshots[key];
			f.lockfile.snapshots[cacheReference] = {};
		}],
		['unpatched Lighthouse lock copy', (f) => {
			const key = snapshotKey(f.lockfile, lhciReference);
			delete f.lockfile.snapshots[key];
			f.lockfile.snapshots[lhciReference] = {};
		}],
		['other locked cache version', (f) => { f.lockfile.packages['http-cache-semantics@4.2.0'] = {}; }],
		['unpatched cache dependency edge', (f) => { dependencyEdge(f.lockfile, 'http-cache-semantics').dependencies['http-cache-semantics'] = '4.3.0'; }],
		['unpatched Lighthouse dependency edge', (f) => { dependencyEdge(f.lockfile, '@lhci/utils').dependencies['@lhci/utils'] = '0.15.1'; }],
		['missing installed cache copy', (f) => { f.installedCopies = f.installedCopies.filter(({ name }) => name !== 'http-cache-semantics'); }],
		['missing installed Lighthouse copy', (f) => { f.installedCopies = f.installedCopies.filter(({ name }) => name !== '@lhci/utils'); }],
		['second unpatched installed copy', (f) => { f.installedCopies.push({ ...f.installedCopies[0], source: Buffer.from('unpatched-copy') }); }],
		['changed installed bytes', (f) => { f.installedCopies[0].source[0] ^= 1; }],
		['changed installed version', (f) => { f.installedCopies[0].version = '4.2.0'; }],
		['other cache consumer resolution', (f) => { f.consumerPaths[cacheReference] = '/other-copy/index.js'; }],
		['other Lighthouse consumer resolution', (f) => { f.consumerPaths[lhciReference] = '/other-copy/lighthouserc.js'; }],
		['ignored failed patch', (f) => { f.workspace.ignorePatchFailures = true; }],
		['allowed unused patch', (f) => { f.workspace.allowUnusedPatches = true; }],
	])('fails closed on %s', (_, mutate) => {
		const changed = structuredClone(fixture);
		mutate(changed);
		expect(() => validateDependencyPatches(changed)).toThrow(/non attesté/);
	});

	it('keeps the advisory blocking without attestation and blocks unrelated advisories', () => {
		expect(advisoryBlocksRelease(advisory, new Set())).toBe(true);
		expect(isVerifiedCacheAdvisory(advisory, undefined)).toBe(false);
		const attestation = validateDependencyPatches(fixture);
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
