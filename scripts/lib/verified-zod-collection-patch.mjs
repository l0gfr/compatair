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

export const ZOD4_COLLECTION_PATCH = Object.freeze({
  "reference": "zod@4.4.3",
  "patchPath": "patches/zod@4.4.3.patch",
  "patchSha256": "9c636df52e93181f88cd0ef0cd0f55ff5b9705d72ee397345bb9dc294ad4d4d6",
  "files": {
    "index.cjs": "2a3455cecff4f7021c92d0a3e2e5fc170c0448dc5cc261160127e08f4888a9c2",
    "index.js": "c733a1897d6b4b30dad6998597f6896b265b094a65534359ada34b08ecf8932c",
    "package.json": "c630bd10b52dcf71c112a2bf78dbf2734b9db58d62de663b8d86c2ec2c8cda2e",
    "src/v3/types.ts": "094f9d29c12b32c2d172e69ef93a6d3ccfe5b2a1ef60326633e7f96871dc7782",
    "src/v4/core/checks.ts": "e5dd4c62f0672a609e5d68d2147329c509f5384b4090ced612e049bc0cfce427",
    "src/v4/core/schemas.ts": "311b9d65881cb3b343656f49a58ea561a0364f956ad7f1765b971833d54d6a55",
    "src/v4/core/util.ts": "f253ff18c5b13791970b7450bcad6f2b40e1873c5aef71c664ecd0c18ec19b3f",
    "v3/external.cjs": "224ff76e204434ec469f71dbba41d475db1ea873d3f3a5c26d75ab3a9c9f5f11",
    "v3/external.js": "5d26d2e47e2352def36f89a3e8bf8581da22b7f857e07ef3114cd52cf4813445",
    "v3/index.cjs": "d58a1fea61e0f0bccdb2f4fd3b7b098adcfddb44f036302c4d2c4e173540a292",
    "v3/index.js": "3db2efd285e7328d8014b54a7fce3f4861ebcdc655df40517092ed0050983617",
    "v3/types.cjs": "17c4eca4309bbf6d4be7ce3fa6382064c031555d31e08433be22c6cbc26ed8a7",
    "v3/types.js": "e0e2aed3deead4f62e59b779d2dea57d6410646410faf606618196bae171ba4a",
    "v4/classic/checks.cjs": "df8f7d3f808b226719e1a23a0303ff75c450c9037a82cc137ef6592decda3d31",
    "v4/classic/checks.js": "78a162d29e06001b4d919e1ed08f6e7d0d665bba0ef983201373745410d7b354",
    "v4/classic/external.cjs": "88f600b7ec41204e625886c93864568e6dbda628c94db92bc928f8b2e163eec1",
    "v4/classic/external.js": "179a03ace3d1d77895cc5b3c54a3fcbf2b7f8bad44d6f030092491c10e5d9097",
    "v4/classic/index.cjs": "d58a1fea61e0f0bccdb2f4fd3b7b098adcfddb44f036302c4d2c4e173540a292",
    "v4/classic/index.js": "d49030b9a324bab9bcf9f663a70298391b0f5a25328409174d86617512bf3037",
    "v4/classic/schemas.cjs": "fbb612b8ec2f7408653908aec137a855e6763f92fbab19d4bd61c5be13341db5",
    "v4/classic/schemas.js": "eb4af7946a092aff8678b9251728ea58dab40154920cd65ec4a2ca1d4df68393",
    "v4/core/checks.cjs": "d9b6a4b1d366015f4f2b7ca931f1a65cf787d7892f50d693350834b9a345f2e1",
    "v4/core/checks.js": "5a33a20dcad372b4d18ead8d1e58b1950454f136a2216e62f247e0e5601ac838",
    "v4/core/index.cjs": "cb40bcdacc990895d8ceaf0aeca2d92c73db7dc67094821560eea09186840093",
    "v4/core/index.js": "f9698820ee8371215e8d015cfa060230c62e65428397dce83f78e6538976301c",
    "v4/core/schemas.cjs": "bb5465ea5adb11cf23aa14bb171653f279f001bcc870fcfda1f03ace9719de11",
    "v4/core/schemas.js": "3e5ebde3cdbad50f85fc7717fcb67a6804aa0399281ffd7ed55ce60964d4f1bb",
    "v4/core/util.cjs": "c480f981e8432661d604d11a05d43068f4b1a814474d64e6b2778f903e6cd9d6",
    "v4/core/util.d.cts": "2b6729be6748d1bb00a1e6e363d7ff4893640b26f4e61b8c24aee407dda6bd96",
    "v4/core/util.d.ts": "0e945ad6f250e2d6ee992e1718188c61ba606ebfe8b82b6ecf79f4b408a0deb5",
    "v4/core/util.js": "0a9b88001bdc80ee40e59a84585cae54e3dfde26274396fb457970135277ad7f",
    "v4/index.cjs": "35934fbd99d4ca1d46932dfcddb6071c203b5c980862cf58e254998c49e1e5b8",
    "v4/index.js": "a4b634bb8c97cc700dbf165f3bb0095ec669042da72eaf28a7c5e2ddd98169ce",
    "v4/mini/checks.cjs": "751987cbe8e6346d30c25dc3ca04643e3ab7301a83cf31d0ee0ecf4dfb8b9149",
    "v4/mini/checks.js": "3fbf0aa59f99b6e4d640cd2b062cff9537530af3f5bfed4f862a7f18a9caa839",
    "v4/mini/external.cjs": "286a0197505796e76232eebab0d75216b1db86b9dddc00bde0c13b4833911e65",
    "v4/mini/external.js": "d746aa3e017beb3ed1e90dd2aa393acd0f22cc32e62363d982717426786c500b",
    "v4/mini/index.cjs": "2a1c77f9c68bd47cd079ea601248dad70025528bc1062c2c657444000edabcac",
    "v4/mini/index.js": "455d93e660b61feec18cd4c31e2f394627546ae8ab31f9bacdab6318112ac31c",
    "v4/mini/schemas.cjs": "62f365ad92f87398e019c0f49fd3d809fec8ac6929c0eaee1cff879fa1250a9f",
    "v4/mini/schemas.js": "51b3a7869df2d3a1bd98acb9d5b6a61bbccc7653d7a3d8fca7f0e0db7e84e284"
  },
  "upstreamTarballIntegrity": "sha512-ytENFjIJFl2UwYglde2jchW2Hwm4GJFLDiSXWdTrJQBIN9Fcyp7n4DhxJEiWNAJMV1/BqWfW/kkg71UDcHJyTQ=="
});

export const ZOD_OFFICIAL_COLLECTION_FILES = Object.freeze({
  "package.json": "c2d190d9ee4e0bdb60332aaa2130a6a98d65ddb903fe1d29248b15de57832c45",
  "index.js": "32e7efd49a94a765f6d10a1a0a3c02c50c246def17c80c6f0225f85525d98505",
  "index.cjs": "d93a8730d52c0fedab13619c8bc971cc99934c13d8dce7c97ee4d03a98d4096e",
  "v4/index.js": "5ba6cdbd3839d2a9df5c6d91d2121ef680f3d22fd60ee9d2c0b4611b7cb49a65",
  "v4/index.cjs": "946e368ce2f7939fbf5946ab665f54d1e7d901d922db405aaf5dd40e87c636a0",
  "v4/classic/index.js": "978a923075be24db9051635ccd2c21ade18d7a6b5ce0fe6e0029660072073398",
  "v4/classic/index.cjs": "2d6bfbfbf3c1bc3a18afb218decda6cf34e1f4e9d2e9ddbabc92cabbbb0ad77d",
  "v4/classic/external.js": "c6b584ae70ba4e7132b2cd78c23ea4ecedc9828abf999edee312372e1fb453d6",
  "v4/classic/external.cjs": "0f917f6f02890347c44e4fca280480ace573ac87b9c697d1c47761a45fdcb620",
  "v4/classic/schemas.js": "2bf4a631a18f734a9a7ab7fc11bcf919214774d2235a312dcec0dd53d0324c32",
  "v4/classic/schemas.cjs": "c1870a72d6809d462a90ee1d2bcb67f7f6beea4a504ae56c28b95df50074c4b2",
  "v4/classic/checks.js": "7543391a9ad5e7df287bbfecaa79844d46af44c75c1de0d43a411d65795d9dd1",
  "v4/classic/checks.cjs": "7d29ae09f7f5cb85e3764fc07e069b7ea6a0c29df0278c42777b6e2cf9279522",
  "v4/mini/index.js": "455d93e660b61feec18cd4c31e2f394627546ae8ab31f9bacdab6318112ac31c",
  "v4/mini/index.cjs": "429b861f1d159fe1fdbb977ed4fbca5c11641d4df45d80d453768f8b0e710786",
  "v4/mini/external.js": "ab008c757db2d32840bdfc270ad433010d8a71eac5c2dce9a7509dcee087cd68",
  "v4/mini/external.cjs": "892311c6152ce5335814d29cff1453a517a44bef13696e11fb8b030775ef8c11",
  "v4/mini/schemas.js": "5614339bbec6b9be13ed1809e1215fe44d78e99f5f0eee848c0bb3b25dc1c9b6",
  "v4/mini/schemas.cjs": "06fc34c10fb14cb50b09c525822886593fd501d9d9e964dec8f2dfc67c58f399",
  "v4/mini/checks.js": "2a51b60cc14bc7bf1fe7ae61df47a858e297798691de6d89019f31e35bf25c4f",
  "v4/mini/checks.cjs": "ee96b7e28fc2182e1339e99ad95f6080b94645cdc187fe3f5fbb01bf9cd2a589",
  "v4/core/index.js": "2a0e452323aa5b75b7d7de4879289e2579b9dd2d6af291c0416ba6806ca2199d",
  "v4/core/index.cjs": "aed3af491dc4ee4d18d5c3454dfadc83ff7b5566921602a6adc37a5d58716f83",
  "v4/core/schemas.js": "0ee56e8afbae28eeb1060a162ad7e56f0675ee6fb83f0ae56bea2e088f6cdbc0",
  "v4/core/schemas.cjs": "7e35563b275bcc457a6d8ae0f5e1354b3c499ddd38401439f16bed1b8f357e41",
  "v4/core/checks.js": "bc42543274218aa7ef72192b3218d2a4a399e53df8de240a04d9ff275096f563",
  "v4/core/checks.cjs": "9a2a428602fe9e380ea2a08495a47101a56710d814fe18fb0e6e30f65686a703",
  "v4/core/util.js": "bb08133b11b478c8e715038fff26ebea204d7fd5443fba31fe138b142d202efb",
  "v4/core/util.cjs": "c7fd0ee0303e7344463692d0936d59c982ed28bb1b73dbd97d2b887ae15d80f1",
  "v3/index.js": "3db2efd285e7328d8014b54a7fce3f4861ebcdc655df40517092ed0050983617",
  "v3/index.cjs": "80849f43fee80f567614da950ab7b1393bae87197a95c0298c55cb2fec765000",
  "v3/external.js": "5d26d2e47e2352def36f89a3e8bf8581da22b7f857e07ef3114cd52cf4813445",
  "v3/external.cjs": "b543e566b3c5dfe3ce130b15514bbc62236d476edec3e7ee84bf995977db9b95",
  "v3/types.js": "d7214e1dacf9e6e70c9ca80247717b4be13b240510428fef132b7da3260d1a32",
  "v3/types.cjs": "7a2f06d88e280bdd198c60e0d292ed7f1e3993e877be4415de07e6abc7746dd1",
  "src/v3/types.ts": "73b9529564a34fc028a5a62c17e09148747b737039b78b124e84254cb886411a",
  "src/v4/core/schemas.ts": "9a495df5c8e614f1435f8f79618e768e9f3e5a2bc76d784b2c060f51c8e0312e",
  "src/v4/core/checks.ts": "d813140472a55ab36e845f4eaadbb3deae6d0597f90bef6c3f51366ac8dbfd4c",
  "src/v4/core/util.ts": "e0ce7d4abc5e43373c59db83cad29f918edf6965df1bb8e54157a4f04d224863"
});

const ADVISORY_URL = 'https://github.com/advisories/GHSA-mrhx-c7xc-m3w5';
const ADVISORY_TITLE = 'Zod can exhaust memory while validating oversized constrained collections';
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');
const patchedVersion = `3.25.76(patch_hash=${ZOD_COLLECTION_PATCH.patchSha256})`;
const patchedV4Version = `4.4.3(patch_hash=${ZOD4_COLLECTION_PATCH.patchSha256})`;
export const ZOD_COLLECTION_PATCH_ATTESTATION = digest(JSON.stringify([ZOD_COLLECTION_PATCH.patchSha256, ZOD4_COLLECTION_PATCH.patchSha256]));

function yamlValue(value) {
	if (typeof value !== 'string') return value;
	const parsed = parseDocument(value, { uniqueKeys: true });
	if (parsed.errors.length) throw new Error(`Invalid Zod dependency YAML: ${parsed.errors[0].message}`);
	return parsed.toJS();
}

export function validateZodCollectionPatch({ packageJson, workspace, lockfile, patch, patchV4, installedCopies, consumerPath, directPath, astroPath, sitemapPath }) {
	const fail = (reason) => { throw new Error(`Correctif Zod non attesté: ${reason}`); };
	for (const [definition, bytes] of [[ZOD_COLLECTION_PATCH, patch], [ZOD4_COLLECTION_PATCH, patchV4]]) {
		const declaration = workspace.patchedDependencies?.[definition.reference];
		const locked = lockfile.patchedDependencies?.[definition.reference];
		if (declaration !== definition.patchPath || locked?.path !== declaration || locked?.hash !== definition.patchSha256) fail('configuration ou verrou');
		if (digest(bytes) !== definition.patchSha256) fail('octets du patch');
		if (lockfile.packages?.[definition.reference]?.resolution?.integrity !== definition.upstreamTarballIntegrity) fail('intégrité du paquet amont');
	}
	const versions = Object.keys(lockfile.packages ?? {}).filter((key) => key.startsWith('zod@')).sort();
	if (JSON.stringify(versions) !== JSON.stringify(['zod@3.25.76', 'zod@4.4.3', 'zod@4.6.7'])) fail('versions verrouillées');
	if (lockfile.packages['zod@4.6.7'].resolution?.integrity !== 'sha512-g8W2D2kU6a8untc053fX1uVBKzM7yqAxW/3zwk83+6RyF2+SKOuV+c0wBDhUwzV1PaGapmZH+rmcUzPf+3CGwg==') fail('intégrité du paquet officiel');
	const snapshots = Object.keys(lockfile.snapshots ?? {}).filter((key) => key.startsWith('zod@')).sort();
	if (JSON.stringify(snapshots) !== JSON.stringify([`zod@${patchedVersion}`, `zod@${patchedV4Version}`, 'zod@4.6.7'].sort())) fail('copies verrouillées');
	const expectedConsumers = new Map([['chromium-bidi@', patchedVersion], ['astro@', '4.6.7'], ['@astrojs/sitemap@', '4.6.7']]);
	const seenConsumers = new Set();
	for (const [name, snapshot] of Object.entries(lockfile.snapshots ?? {})) {
		for (const dependencies of [snapshot.dependencies, snapshot.optionalDependencies]) {
			if (dependencies?.zod === undefined) continue;
			const consumer = [...expectedConsumers.keys()].find(prefix => name.startsWith(prefix));
			if (!consumer || dependencies.zod !== expectedConsumers.get(consumer)) fail('résolution non corrigée');
			seenConsumers.add(consumer);
		}
	}
	if (seenConsumers.size !== expectedConsumers.size) fail('consommateur verrouillé absent');
	for (const [name, importer] of Object.entries(lockfile.importers ?? {})) {
		for (const kind of ['dependencies', 'optionalDependencies', 'devDependencies']) {
			if (importer[kind]?.zod !== undefined && (name !== '.' || kind !== 'dependencies')) fail('déclaration Zod inattendue');
		}
	}
	if (packageJson?.devDependencies?.zod !== undefined || packageJson?.optionalDependencies?.zod !== undefined) fail('déclaration Zod inattendue');
	const direct = lockfile.importers?.['.']?.dependencies?.zod;
	if (packageJson?.dependencies?.zod !== '4.4.3' || direct?.specifier !== '4.4.3' || direct?.version !== patchedV4Version) fail('dépendance directe');
	for (const version of ['3.25.76', '4.4.3', '4.6.7']) if (!installedCopies.some(copy => copy.version === version)) fail('copie absente');
	for (const copy of installedCopies) {
		if (!['3.25.76', '4.4.3', '4.6.7'].includes(copy.version)) fail('version installée inattendue');
		const definition = [ZOD_COLLECTION_PATCH, ZOD4_COLLECTION_PATCH].find(item => item.reference === `zod@${copy.version}`);
		for (const [name, hash] of Object.entries(definition?.files ?? ZOD_OFFICIAL_COLLECTION_FILES)) {
			if (!copy.files?.[name] || digest(copy.files[name]) !== hash) fail(`copie installée ${name}`);
		}
	}
	for (const [version, path, label] of [['3.25.76', consumerPath, 'chromium-bidi'], ['4.4.3', directPath, 'directe'], ['4.6.7', astroPath, 'Astro'], ['4.6.7', sitemapPath, 'sitemap']]) {
		if (!installedCopies.some(copy => copy.version === version && copy.entryPath === path)) fail(`résolution ${label}`);
	}
	return ZOD_COLLECTION_PATCH_ATTESTATION;
}

export function isVerifiedZodCollectionAdvisory(advisory, attestation) {
	return attestation === ZOD_COLLECTION_PATCH_ATTESTATION && advisory.packageName === 'zod' &&
		advisory.severity === 'high' && advisory.url === ADVISORY_URL && advisory.title === ADVISORY_TITLE &&
		advisory.ghsaId === 'GHSA-mrhx-c7xc-m3w5' &&
		JSON.stringify(advisory.vulnerableVersionRanges) === JSON.stringify(['< 4.6.6']) &&
		JSON.stringify(advisory.firstPatchedVersions) === JSON.stringify(['4.6.6']) &&
		Array.isArray(advisory.queriedVersions) && advisory.queriedVersions.includes('3.25.76') && advisory.queriedVersions.includes('4.4.3') &&
		advisory.queriedVersions.every((version) => ['3.25.76', '4.4.3', '4.6.7'].includes(version));
}

export async function attestInstalledZodCollectionPatch({ root, workspace, lockfile }) {
	const rootRequire = createRequire(join(root, 'package.json'));
	const lhciRequire = createRequire(rootRequire.resolve('@lhci/cli/package.json'));
	const lighthouseRequire = createRequire(lhciRequire.resolve('lighthouse/package.json'));
	const puppeteerRequire = createRequire(lighthouseRequire.resolve('puppeteer-core/package.json'));
	const bidiRequire = createRequire(puppeteerRequire.resolve('chromium-bidi'));
	const consumerPath = await realpath(bidiRequire.resolve('zod'));
	const directPath = await realpath(rootRequire.resolve('zod'));
	const astroPath = await realpath(createRequire(rootRequire.resolve('astro/package.json')).resolve('zod'));
	const sitemapPath = await realpath(createRequire(rootRequire.resolve('@astrojs/sitemap/package.json')).resolve('zod'));
	const store = join(root, 'node_modules', '.pnpm');
	const installedCopies = [];
	for (const entry of await readdir(store, { withFileTypes: true })) {
		if (!entry.isDirectory()) continue;
		const directory = join(store, entry.name, 'node_modules', 'zod');
		let manifest;
		try { manifest = JSON.parse(await readFile(join(directory, 'package.json'), 'utf8')); }
		catch (error) { if (error.code === 'ENOENT') continue; throw error; }
		if (manifest.name !== 'zod') throw new Error('Unexpected Zod manifest');
		const definition = [ZOD_COLLECTION_PATCH, ZOD4_COLLECTION_PATCH].find(item => item.reference === `zod@${manifest.version}`);
		const files = Object.fromEntries(await Promise.all(
			Object.keys(definition?.files ?? (manifest.version === '4.6.7' ? ZOD_OFFICIAL_COLLECTION_FILES : {})).map(async (name) => [name, await readFile(join(directory, name))]),
		));
		installedCopies.push({ version: manifest.version, entryPath: await realpath(join(directory, 'index.cjs')), files });
	}
	return validateZodCollectionPatch({
		packageJson: JSON.parse(await readFile(join(root, 'package.json'), 'utf8')),
		workspace: yamlValue(workspace), lockfile: yamlValue(lockfile),
		patch: await readFile(join(root, ZOD_COLLECTION_PATCH.patchPath)),
		patchV4: await readFile(join(root, ZOD4_COLLECTION_PATCH.patchPath)),
		installedCopies, consumerPath, directPath, astroPath, sitemapPath,
	});
}
