import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { readFile, readdir, realpath } from 'node:fs/promises';
import { join } from 'node:path';
import { parseDocument } from 'yaml';

const PATCHES = [
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

export function validateDependencyPatches({ workspace, lockfile, patches, installedCopies, consumerPaths }) {
	const fail = (reason) => { throw new Error(`Correctif de dépendance non attesté: ${reason}`); };
	const expectedWorkspace = Object.fromEntries(PATCHES.map(({ reference, patchPath }) => [reference, patchPath]));
	const expectedLockfile = Object.fromEntries(PATCHES.map(({ reference, patchPath, patchSha256 }) => [
		reference,
		{ hash: patchSha256, path: patchPath },
	]));
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
		const copies = installedCopies.filter((copy) => copy.name === packageName);
		if (!references || !copies.length) fail(`dépendance absente ${reference}`);
		for (const copy of copies) {
			if (copy.version !== version || digest(copy.source) !== installedSha256) fail(`copie installée ${reference}`);
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
			installedCopies.push({ name: manifest.name, version: manifest.version, path, source: await readFile(path) });
		}
	}
	return installedCopies;
}

export async function attestInstalledDependencyPatches({ root, workspace, lockfile }) {
	const rootRequire = createRequire(join(root, 'package.json'));
	const astroConsumer = createRequire(rootRequire.resolve('astro'));
	const lhciConsumer = createRequire(rootRequire.resolve('@lhci/cli/package.json'));
	const consumerPaths = {
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
