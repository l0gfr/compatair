import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { readFile, readdir, realpath } from 'node:fs/promises';
import { join } from 'node:path';
import { parseDocument } from 'yaml';

export const ZOD_COLLECTION_PATCH = Object.freeze({
  "reference": "zod@3.25.76",
  "patchPath": "patches/zod@3.25.76.patch",
  "patchSha256": "b9604079f6581f4ad8304d9c13921d23d0ebc8ecd420bea153f247134b01c482",
  "files": {
    "v3/types.js": "e49004a9b12d266bef66a5aca0bee9670cd24147586831e398420605c0de7162",
    "v3/types.cjs": "8a59ae043fad5fdc14c4900b8571167383a99a7f4c3ceded266600002b69ca39",
    "src/v3/types.ts": "784517ae5ce5152624721dac04e1ed0ca918422579d408697687448b2ae80c02",
    "index.js": "6419c4ac0e637ff08463083e31886d10354f74cbcc4e584400b2b837e39ac881",
    "index.cjs": "69025493407e0f37f24e01e363452d75ae43a89aac18eb24806706b5b534b459",
    "v3/external.js": "5d26d2e47e2352def36f89a3e8bf8581da22b7f857e07ef3114cd52cf4813445",
    "v3/external.cjs": "224ff76e204434ec469f71dbba41d475db1ea873d3f3a5c26d75ab3a9c9f5f11",
    "v4/core/schemas.js": "c394329e54c89c3cceb6525ebbfc7a80e7c3d3b6fb4e73ec0f2db6b83243baa6",
    "v4/core/schemas.cjs": "50c572b651a9041f365974c4c0ea2706f8d91332a08e9c317cfaf5b54b3d65dc",
    "src/v4/core/schemas.ts": "fd86bf3db30490ef4eba273b575572b7936db817ceda6e9ee433b20266afde56",
    "v4/core/checks.js": "506702f6c73380b1500746493eed533e99f07a13c55bd66f9f93739efad09446",
    "v4/core/checks.cjs": "1d81e41495dab7e40b15d3de6713349e57303444c068ce0e9ada0f94a7e0b023",
    "src/v4/core/checks.ts": "4a8d4bc58590a4c63d70be6bb8755cce34977ab485495d70e57076302a8589c7"
  },
  "upstreamTarballIntegrity": "sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ=="
});

const ADVISORY_URL = 'https://github.com/advisories/GHSA-mrhx-c7xc-m3w5';
const ADVISORY_TITLE = 'Zod can exhaust memory while validating oversized constrained collections';
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');
const patchedVersion = `3.25.76(patch_hash=${ZOD_COLLECTION_PATCH.patchSha256})`;

function yamlValue(value) {
	if (typeof value !== 'string') return value;
	const parsed = parseDocument(value, { uniqueKeys: true });
	if (parsed.errors.length) throw new Error(`Invalid Zod dependency YAML: ${parsed.errors[0].message}`);
	return parsed.toJS();
}

export function validateZodCollectionPatch({ workspace, lockfile, patch, installedCopies, consumerPath, directPath }) {
	const fail = (reason) => { throw new Error(`Correctif Zod non attesté: ${reason}`); };
	const declaration = workspace.patchedDependencies?.[ZOD_COLLECTION_PATCH.reference];
	const locked = lockfile.patchedDependencies?.[ZOD_COLLECTION_PATCH.reference];
	if (declaration !== ZOD_COLLECTION_PATCH.patchPath || locked?.path !== declaration || locked?.hash !== ZOD_COLLECTION_PATCH.patchSha256) fail('configuration ou verrou');
	if (digest(patch) !== ZOD_COLLECTION_PATCH.patchSha256) fail('octets du patch');
	const versions = Object.keys(lockfile.packages ?? {}).filter((key) => key.startsWith('zod@')).sort();
	if (JSON.stringify(versions) !== JSON.stringify(['zod@3.25.76', 'zod@4.6.7'])) fail('versions verrouillées');
	const snapshots = Object.keys(lockfile.snapshots ?? {}).filter((key) => key.startsWith('zod@')).sort();
	if (JSON.stringify(snapshots) !== JSON.stringify([`zod@${patchedVersion}`, 'zod@4.6.7'].sort())) fail('copies verrouillées');
	for (const snapshot of Object.values(lockfile.snapshots ?? {})) {
		for (const dependencies of [snapshot.dependencies, snapshot.optionalDependencies]) {
			if (dependencies?.zod !== undefined && ![patchedVersion, '4.6.7'].includes(dependencies.zod)) fail('résolution non corrigée');
		}
	}
	if (lockfile.importers?.['.']?.dependencies?.zod?.version !== '4.6.7') fail('dépendance directe');
	const copies = installedCopies.filter(({ version }) => version === '3.25.76');
	if (!copies.length || !installedCopies.some(({ version }) => version === '4.6.7')) fail('copie absente');
	for (const copy of installedCopies) {
		if (!['3.25.76', '4.6.7'].includes(copy.version)) fail('version installée inattendue');
		if (copy.version === '3.25.76') {
			for (const [name, hash] of Object.entries(ZOD_COLLECTION_PATCH.files)) {
				if (!copy.files?.[name] || digest(copy.files[name]) !== hash) fail(`copie installée ${name}`);
			}
		}
	}
	if (!copies.some(({ entryPath }) => entryPath === consumerPath)) fail('résolution chromium-bidi');
	if (!installedCopies.some(({ version, entryPath }) => version === '4.6.7' && entryPath === directPath)) fail('résolution directe');
	return ZOD_COLLECTION_PATCH.patchSha256;
}

export function isVerifiedZodCollectionAdvisory(advisory, attestation) {
	return attestation === ZOD_COLLECTION_PATCH.patchSha256 && advisory.packageName === 'zod' &&
		advisory.severity === 'high' && advisory.url === ADVISORY_URL && advisory.title === ADVISORY_TITLE &&
		advisory.ghsaId === 'GHSA-mrhx-c7xc-m3w5' &&
		JSON.stringify(advisory.vulnerableVersionRanges) === JSON.stringify(['< 4.6.6']) &&
		JSON.stringify(advisory.firstPatchedVersions) === JSON.stringify(['4.6.6']) &&
		Array.isArray(advisory.queriedVersions) && advisory.queriedVersions.includes('3.25.76') &&
		advisory.queriedVersions.every((version) => ['3.25.76', '4.6.7'].includes(version));
}

export async function attestInstalledZodCollectionPatch({ root, workspace, lockfile }) {
	const rootRequire = createRequire(join(root, 'package.json'));
	const lhciRequire = createRequire(rootRequire.resolve('@lhci/cli/package.json'));
	const lighthouseRequire = createRequire(lhciRequire.resolve('lighthouse/package.json'));
	const puppeteerRequire = createRequire(lighthouseRequire.resolve('puppeteer-core/package.json'));
	const bidiRequire = createRequire(puppeteerRequire.resolve('chromium-bidi'));
	const consumerPath = await realpath(bidiRequire.resolve('zod'));
	const directPath = await realpath(rootRequire.resolve('zod'));
	const store = join(root, 'node_modules', '.pnpm');
	const installedCopies = [];
	for (const entry of await readdir(store, { withFileTypes: true })) {
		if (!entry.isDirectory()) continue;
		const directory = join(store, entry.name, 'node_modules', 'zod');
		let manifest;
		try { manifest = JSON.parse(await readFile(join(directory, 'package.json'), 'utf8')); }
		catch (error) { if (error.code === 'ENOENT') continue; throw error; }
		if (manifest.name !== 'zod') throw new Error('Unexpected Zod manifest');
		const files = manifest.version === '3.25.76' ? Object.fromEntries(await Promise.all(
			Object.keys(ZOD_COLLECTION_PATCH.files).map(async (name) => [name, await readFile(join(directory, name))]),
		)) : {};
		installedCopies.push({ version: manifest.version, entryPath: await realpath(join(directory, 'index.cjs')), files });
	}
	return validateZodCollectionPatch({
		workspace: yamlValue(workspace), lockfile: yamlValue(lockfile),
		patch: await readFile(join(root, ZOD_COLLECTION_PATCH.patchPath)),
		installedCopies, consumerPath, directPath,
	});
}
