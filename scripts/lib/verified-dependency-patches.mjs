import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { readFile, readdir, realpath } from 'node:fs/promises';
import { join } from 'node:path';
import { parseDocument } from 'yaml';

const PACKAGE = 'http-cache-semantics';
const VERSION = '4.2.0';
const REFERENCE = `${PACKAGE}@${VERSION}`;
const PATCH_PATH = `patches/${REFERENCE}.patch`;
const PATCH_SHA256 = '7e48a72649d4fb8762784e87e9b617dbe1d41ff011ce0e0d98897e9a98e51339';
const INSTALLED_SHA256 = '80083bab7d9e51953f1b73246f15e4b01ee5120a081e4d6b7ae5b7d65144160c';
const PATCHED_VERSION = `${VERSION}(patch_hash=${PATCH_SHA256})`;
const ADVISORY_URL = 'https://github.com/advisories/GHSA-ch52-4w7c-c8xp';
const ADVISORY_TITLE = 'http-cache-semantics max-stale handling can disclose cross-user cached responses';
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');
const equal = (value, expected) => JSON.stringify(value) === JSON.stringify(expected);

// An advisory remains blocking unless this exact installed correction is attested.
// Other advisories on the same package continue to use the general release policy.
export function isVerifiedCacheAdvisory(advisory, attestation) {
	return attestation === PATCH_SHA256 && advisory.packageName === PACKAGE &&
		advisory.url === ADVISORY_URL && advisory.title === ADVISORY_TITLE && advisory.severity === 'high';
}

export function validateDependencyPatch({ workspace, lockfile, patch, installedCopies, consumerPath }) {
	const fail = (reason) => { throw new Error(`Correctif de dépendance non attesté: ${reason}`); };
	if (!equal(workspace.patchedDependencies, { [REFERENCE]: PATCH_PATH })) fail('configuration pnpm');
	if (!equal(lockfile.patchedDependencies, { [REFERENCE]: { hash: PATCH_SHA256, path: PATCH_PATH } })) fail('verrou pnpm');
	for (const name of ['allowUnusedPatches', 'ignorePatchFailures', 'allowNonAppliedPatches']) {
		if (workspace[name] !== undefined && workspace[name] !== false) fail(`politique ${name}`);
	}
	if (digest(patch) !== PATCH_SHA256) fail('empreinte du patch');
	if (!equal(Object.keys(lockfile.packages ?? {}).filter((key) => key.startsWith(`${PACKAGE}@`)), [REFERENCE])) fail('versions verrouillées');
	const snapshots = lockfile.snapshots ?? {};
	const cacheKeys = Object.keys(snapshots).filter((key) => key.startsWith(`${PACKAGE}@`));
	if (!equal(cacheKeys, [`${PACKAGE}@${PATCHED_VERSION}`])) fail('copies verrouillées');
	let references = 0;
	for (const snapshot of Object.values(snapshots)) {
		for (const dependencies of [snapshot.dependencies, snapshot.optionalDependencies]) {
			if (dependencies?.[PACKAGE] !== undefined) {
				if (dependencies[PACKAGE] !== PATCHED_VERSION) fail('résolution transitive non corrigée');
				references += 1;
			}
		}
	}
	if (!references || !installedCopies.length) fail('dépendance absente');
	for (const copy of installedCopies) {
		if (copy.name !== PACKAGE || copy.version !== VERSION || digest(copy.source) !== INSTALLED_SHA256) fail('copie installée');
	}
	if (!installedCopies.some((copy) => copy.path === consumerPath)) fail('résolution Astro');
	return PATCH_SHA256;
}

function parseYaml(source) {
	const document = parseDocument(source, { uniqueKeys: true });
	if (document.errors.length) throw new Error(`YAML de dépendances invalide: ${document.errors[0].message}`);
	return document.toJS();
}

export async function attestInstalledDependencyPatch({ root, workspace, lockfile }) {
	const copies = [];
	const store = join(root, 'node_modules', '.pnpm');
	for (const entry of await readdir(store, { withFileTypes: true })) {
		if (!entry.name.startsWith(`${PACKAGE}@`)) continue;
		if (!entry.isDirectory()) throw new Error('Copie de dépendance non régulière');
		const directory = join(store, entry.name, 'node_modules', PACKAGE);
		const manifest = JSON.parse(await readFile(join(directory, 'package.json'), 'utf8'));
		copies.push({ name: manifest.name, version: manifest.version, path: await realpath(join(directory, 'index.js')), source: await readFile(join(directory, 'index.js')) });
	}
	const require = createRequire(join(root, 'package.json'));
	const consumer = createRequire(require.resolve('astro'));
	return validateDependencyPatch({
		workspace: parseYaml(workspace), lockfile: parseYaml(lockfile),
		patch: await readFile(join(root, PATCH_PATH)), installedCopies: copies,
		consumerPath: await realpath(consumer.resolve(PACKAGE)),
	});
}
