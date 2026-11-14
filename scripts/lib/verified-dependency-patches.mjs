import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { readFile, readdir, realpath } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseDocument } from 'yaml';
import { ZOD_COLLECTION_PATCH, ZOD4_COLLECTION_PATCH } from './verified-zod-collection-patch.mjs';

// Official Astro fixes, backported without changing the locked framework APIs:
// https://github.com/withastro/astro/commit/e023abac912d7cb6af2b9fb5107ef5dabc667096
// https://github.com/withastro/astro/commit/7da442bb286e0c29e1c9e1add6727b7cbf434f1a
const PATCHES = [
	{
		packageName: '@astrojs/internal-helpers',
		version: '0.11.0',
		patchPath: 'patches/@astrojs__internal-helpers@0.11.0.patch',
		patchSha256: 'ce43fee20a1ce35d9452e7bb1580fd71cf477d7dcd424ab3e4e4ee71259af2f5',
		installedSha256: 'efde4c462a65ae535a37ca349ffbdd54616780249ba87a467bd70508e99167ea',
		sourcePath: 'dist/path.js',
		consumer: 'astro',
	},
	{
		packageName: '@lhci/utils',
		version: '0.15.1',
		patchPath: 'patches/@lhci__utils@0.15.1.patch',
		patchSha256: 'de0c5363154f275a017d5dd146858444f59044fcb06b89c5e760b39295221f69',
		installedSha256: '3f3bbc4e2b2f1b7b22ff2b8ed013322f3b7b5bfb7cf296fbb7605a6570b6e493',
		sourcePath: 'src/lighthouserc.js',
		consumer: '@lhci/cli',
	},
	{
		packageName: 'astro',
		version: '7.3.3',
		patchPath: 'patches/astro@7.3.3.patch',
		patchSha256: 'ab7188ef958491bd9617f44fdbd71ffb96c3047ff0d7675de9732be52ff4d2c8',
		installedSha256: '4d57a1ef34c56dcf9b2f944aaf9b78f803ea9670efd3df434f284bd7fbcc0a79',
		sourcePath: 'dist/core/build/plugins/plugin-incremental.js',
		consumer: 'root',
		additionalSources: {
			'dist/runtime/server/jsx.js': '0ef3b84be4ddbd77ea5c627d185386769c2573497763950a59686c36ce83d2f0',
			'dist/runtime/server/render/component.js': '8bfcbce317932fb7d6b6f517c98f7466cac8543f73c144d5482be9a224fcb0ac',
			'dist/runtime/server/render/streaming.js': '64aa411e6c5cfe86637ebbcf7dd287606c0e65770360243b91c4cc9a05632807',
			'dist/runtime/server/render/util.js': '5479ae62de940e1bb061acaed3ba5456094dd4b1667a1152aab71e4cf1515d6a',
			'dist/runtime/server/render/util.d.ts': '3a4ea6f1fe16ddc53df9f0f2774ef3c81055ccc8ff3deba86d1401f733c552b3',
			'dist/assets/endpoint/node.js': 'eaa488b6ad8dfdb8c47d4498c241efd80d18ea9dec375bbacf1a3007505e35ee',
		},
	},
	{
		packageName: 'http-cache-semantics',
		version: '4.3.0',
		patchPath: 'patches/http-cache-semantics@4.3.0.patch',
		patchSha256: '40659b87d16fa2cbc322f9d95b15e7bb648555c91217261d80a12f22f46022fe',
		installedSha256: '674b5cdf780b9dcc5c1bacdec6309f17f24adc41f9c1faa68cb9cd975b3fa547',
		sourcePath: 'index.js',
		consumer: 'astro',
	},
].map((definition) => ({
	...definition,
	reference: `${definition.packageName}@${definition.version}`,
	patchedVersion: `${definition.version}(patch_hash=${definition.patchSha256})`,
}));

const CACHE_PATCH = PATCHES.find(({ packageName }) => packageName === 'http-cache-semantics');
const ADVISORY_URL = 'https://github.com/advisories/GHSA-ch52-4w7c-c8xp';
const ADVISORY_TITLE = 'http-cache-semantics max-stale handling can disclose cross-user cached responses';
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');
const equal = (value, expected) => JSON.stringify(value) === JSON.stringify(expected);
const lockKeyMatches = (key, reference) => key === reference || key.startsWith(`${reference}(`);

// An advisory remains blocking unless every local dependency patch and the exact cache correction are attested.
// Other advisories on the same package continue to use the general release policy.
export function isVerifiedCacheAdvisory(advisory, attestation) {
	return attestation === CACHE_PATCH.patchSha256 && advisory.packageName === CACHE_PATCH.packageName &&
		advisory.url === ADVISORY_URL && advisory.title === ADVISORY_TITLE && advisory.severity === 'high';
}

// Only these upstream fixes are backported. The shared attestation verifies
// every installed renderer, its image endpoint and the path helper it resolves.
export function isVerifiedAstroAdvisory(advisory, attestation) {
	if (attestation !== CACHE_PATCH.patchSha256 || advisory.packageName !== 'astro') return false;
	return [
		['low', 'Astro: XSS via attribute injection in dynamic tag names', 'https://github.com/advisories/GHSA-mh32-jxcr-mh9f'],
		['moderate', 'Astro: Image endpoint in @astrojs/node can read files from a case-variant sibling of the output directory on case-sensitive filesystems', 'https://github.com/advisories/GHSA-r3h5-4585-7x3w'],
	].some(([severity, title, url]) => advisory.severity === severity && advisory.title === title && advisory.url === url);
}

export function validateDependencyPatches({ workspace, lockfile, patches, installedCopies, consumerPaths }) {
	const fail = (reason) => { throw new Error(`Correctif de dépendance non attesté: ${reason}`); };
	const expectedWorkspace = Object.fromEntries([...PATCHES.map(({ reference, patchPath }) => [reference, patchPath]), [ZOD_COLLECTION_PATCH.reference, ZOD_COLLECTION_PATCH.patchPath], [ZOD4_COLLECTION_PATCH.reference, ZOD4_COLLECTION_PATCH.patchPath]]);
	const expectedLockfile = Object.fromEntries([...PATCHES.map(({ reference, patchPath, patchSha256 }) => [
		reference,
		{ hash: patchSha256, path: patchPath },
	]), [ZOD_COLLECTION_PATCH.reference, { hash: ZOD_COLLECTION_PATCH.patchSha256, path: ZOD_COLLECTION_PATCH.patchPath }], [ZOD4_COLLECTION_PATCH.reference, { hash: ZOD4_COLLECTION_PATCH.patchSha256, path: ZOD4_COLLECTION_PATCH.patchPath }]]);
	if (!equal(workspace.patchedDependencies, expectedWorkspace)) fail('configuration pnpm');
	if (!equal(lockfile.patchedDependencies, expectedLockfile)) fail('verrou pnpm');
	for (const name of ['allowUnusedPatches', 'ignorePatchFailures', 'allowNonAppliedPatches']) {
		if (workspace[name] !== undefined && workspace[name] !== false) fail(`politique ${name}`);
	}

	const snapshots = lockfile.snapshots ?? {};
	for (const definition of PATCHES) {
		const { packageName, version, reference, patchedVersion, patchSha256, installedSha256 } = definition;
		if (digest(patches[reference]) !== patchSha256) fail(`empreinte du patch ${reference}`);
		const packageKeys = Object.keys(lockfile.packages ?? {}).filter((key) => key.startsWith(`${packageName}@`));
		if (!equal(packageKeys, [reference])) fail(`versions verrouillées ${packageName}`);
		const snapshotKeys = Object.keys(snapshots).filter((key) => lockKeyMatches(key, reference));
		if (snapshotKeys.length !== 1 || !snapshotKeys[0].startsWith(`${reference}(patch_hash=${patchSha256})`)) {
			fail(`copies verrouillées ${reference}`);
		}
		let references = 0;
		for (const snapshot of Object.values(snapshots)) {
			for (const dependencies of [snapshot.dependencies, snapshot.optionalDependencies]) {
				const resolved = dependencies?.[packageName];
				if (resolved === undefined) continue;
				if (resolved !== patchedVersion && !resolved.startsWith(`${patchedVersion}(`)) {
					fail(`résolution transitive non corrigée ${reference}`);
				}
				references += 1;
			}
		}
		if (definition.consumer === 'root') {
			const resolved = lockfile.importers?.['.']?.dependencies?.[packageName]?.version;
			if (typeof resolved !== 'string' || (resolved !== patchedVersion && !resolved.startsWith(`${patchedVersion}(`))) fail(`résolution racine non corrigée ${reference}`);
			references += 1;
		}
		const copies = installedCopies.filter((copy) => copy.name === packageName);
		if (!references || !copies.length) fail(`dépendance absente ${reference}`);
		for (const copy of copies) {
			if (copy.version !== version || digest(copy.source) !== installedSha256) fail(`copie installée ${reference}`);
			for (const [path, expected] of Object.entries(definition.additionalSources ?? {})) {
				const bytes = copy.additionalSources?.[path];
				if (!(bytes instanceof Uint8Array) || digest(bytes) !== expected) fail(`copie installée ${reference}/${path}`);
			}
		}
		if (!copies.some((copy) => copy.path === consumerPaths[reference])) fail(`résolution consommateur ${reference}`);
	}

	return CACHE_PATCH.patchSha256;
}

function parseYaml(source) {
	const document = parseDocument(source, { uniqueKeys: true });
	if (document.errors.length) throw new Error(`YAML de dépendances invalide: ${document.errors[0].message}`);
	return document.toJS();
}

export async function collectInstalledDependencyPatchCopies(root) {
	const virtualStore = join(root, 'node_modules', '.pnpm');
	const entries = await readdir(virtualStore, { withFileTypes: true });
	const installedCopies = [];
	for (const definition of PATCHES) {
		const packageSegments = definition.packageName.split('/');
		for (const entry of entries) {
			if (!entry.isDirectory()) continue;
			const packageRoot = join(virtualStore, entry.name, 'node_modules', ...packageSegments);
			let manifest;
			try {
				manifest = JSON.parse(await readFile(join(packageRoot, 'package.json'), 'utf8'));
			} catch (error) {
				if (error?.code === 'ENOENT') continue;
				throw error;
			}
			if (manifest.name !== definition.packageName) continue;
			const path = await realpath(join(packageRoot, definition.sourcePath));
			const additionalSources = {};
			for (const file of Object.keys(definition.additionalSources ?? {})) additionalSources[file] = await readFile(join(packageRoot, file));
			installedCopies.push({ name: manifest.name, version: manifest.version, path, source: await readFile(path), additionalSources });
		}
	}
	return installedCopies;
}

export async function attestInstalledDependencyPatches({ root, workspace, lockfile }) {
	const rootRequire = createRequire(join(root, 'package.json'));
	const astroConsumer = createRequire(rootRequire.resolve('astro'));
	const lhciConsumer = createRequire(rootRequire.resolve('@lhci/cli/package.json'));
	const astroRoot = dirname(rootRequire.resolve('astro/package.json'));
	const consumerPaths = {
		['@astrojs/internal-helpers@0.11.0']: await realpath(astroConsumer.resolve('@astrojs/internal-helpers/path')),
		['astro@7.3.3']: await realpath(join(astroRoot, 'dist/core/build/plugins/plugin-incremental.js')),
		['http-cache-semantics@4.3.0']: await realpath(astroConsumer.resolve('http-cache-semantics')),
		['@lhci/utils@0.15.1']: await realpath(lhciConsumer.resolve('@lhci/utils/src/lighthouserc.js')),
	};
	const installedCopies = await collectInstalledDependencyPatchCopies(root);
	const patches = Object.fromEntries(await Promise.all(PATCHES.map(async ({ reference, patchPath }) => [
		reference,
		await readFile(join(root, patchPath)),
	])));

	return validateDependencyPatches({
		workspace: parseYaml(workspace),
		lockfile: parseYaml(lockfile),
		patches,
		installedCopies,
		consumerPaths,
	});
}
