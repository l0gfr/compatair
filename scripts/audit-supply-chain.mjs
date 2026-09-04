import { createPublicKey, verify as verifySignature } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import { classifyNpmAdvisories } from './lib/advisory-policy.mjs';

const REGISTRY = 'https://registry.npmjs.org';
const QUARANTINE_MS = 24 * 60 * 60 * 1000;
const RECENT_WINDOW_MS = 72 * 60 * 60 * 1000;
const EXPECTED_BUILD_ALLOWLIST = new Set(['esbuild']);
const DISALLOWED_LOCKED_PACKAGES = new Set(['extract-zip']);
const EXPECTED_OVERRIDES = new Map([
  ['@puppeteer/browsers', '3.2.0'],
  ['brace-expansion', '5.0.9'],
  ['fast-uri', '3.1.6'],
  ['ip-address', '10.3.1'],
  ['js-yaml@3', '3.15.1'],
  ['js-yaml@4', '4.3.1'],
  ['nanoid@3', '3.3.18'],
  ['postcss', '8.5.23'],
  ['qs', '6.16.0'],
  ['tmp', '0.2.7'],
  ['uuid', '11.1.1'],
]);
const EXPECTED_TRUST_POLICY_EXCLUSIONS = new Set(['chokidar@4.0.3', 'semver@5.7.2', 'semver@6.3.1']);
const EXPECTED_RELEASE_AGE_EXCLUSIONS = new Set();
const LIFECYCLE_SCRIPTS = ['preinstall', 'install', 'postinstall'];

const registryMode = process.argv.includes('--registry');
const advisoryMode = process.argv.includes('--advisories');
const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const workspace = await readFile(new URL('../pnpm-workspace.yaml', import.meta.url), 'utf8');
const lockfile = await readFile(new URL('../pnpm-lock.yaml', import.meta.url), 'utf8');

function parseAllowedBuilds(source) {
  const lines = source.split('\n');
  const allowed = new Set();
  let inAllowBuilds = false;

  for (const line of lines) {
    if (/^allowBuilds:\s*$/.test(line)) {
      inAllowBuilds = true;
      continue;
    }
    if (inAllowBuilds && /^\S/.test(line) && line.trim()) break;
    if (!inAllowBuilds) continue;

    const match = line.match(/^\s{2}(['"]?)(.+?)\1:\s*true\s*$/);
    if (match) allowed.add(match[2]);
  }

  return allowed;
}

function parseOverrides(source) {
  const lines = source.split('\n');
  const overrides = new Map();
  let inOverrides = false;

  for (const line of lines) {
    if (/^overrides:\s*$/.test(line)) {
      inOverrides = true;
      continue;
    }
    if (inOverrides && /^\S/.test(line) && line.trim()) break;
    if (!inOverrides) continue;
    const match = line.match(/^\s{2}(['"]?)(.+?)\1:\s*(['"]?)([^'"\s]+)\3\s*$/);
    if (match) overrides.set(match[2], match[4]);
  }

  return overrides;
}

function parseYamlList(source, key) {
  const lines = source.split('\n');
  const values = new Set();
  let inList = false;

  for (const line of lines) {
    if (line === `${key}:`) {
      inList = true;
      continue;
    }
    if (inList && /^\S/.test(line) && line.trim()) break;
    if (!inList) continue;
    const match = line.match(/^\s{2}-\s*(['"]?)(.+?)\1\s*$/);
    if (match) values.add(match[2]);
  }

  return values;
}

function unquoteYamlKey(value) {
  if (value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1).replaceAll("''", "'");
  }
  if (value.startsWith('"') && value.endsWith('"')) {
    return JSON.parse(value);
  }
  return value;
}

function splitPackageReference(reference) {
  const separator = reference.lastIndexOf('@');
  if (separator <= 0) return null;
  return {
    name: reference.slice(0, separator),
    version: reference.slice(separator + 1),
  };
}

function parseLockedPackages(source) {
  const packages = [];
  const lines = source.split('\n');
  let inPackages = false;
  let current = null;

  const finishCurrent = () => {
    if (!current) return;
    const parsed = splitPackageReference(current.reference);
    if (parsed) packages.push({ ...parsed, integrity: current.integrity });
    current = null;
  };

  for (const line of lines) {
    if (line === 'packages:') {
      inPackages = true;
      continue;
    }
    if (line === 'snapshots:') {
      finishCurrent();
      break;
    }
    if (!inPackages) continue;

    const key = line.match(/^  (\S.*):$/);
    if (key) {
      finishCurrent();
      current = { reference: unquoteYamlKey(key[1]), integrity: null };
      continue;
    }
    if (!current) continue;

    const integrity = line.match(/\bintegrity:\s*([^,}\s]+)/);
    if (integrity) current.integrity = integrity[1];
  }

  return packages;
}

function setDifference(left, right) {
  return [...left].filter((value) => !right.has(value)).sort();
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { accept: 'application/vnd.npm.install-v1+json' },
    signal: AbortSignal.timeout(20_000),
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.json();
}

async function fetchBulkAdvisories(packages) {
  const versionsByName = new Map();
  for (const { name, version } of packages) {
    if (!versionsByName.has(name)) versionsByName.set(name, new Set());
    versionsByName.get(name).add(version);
  }
  const payload = Object.fromEntries([...versionsByName].map(([name, versions]) => [name, [...versions].sort()]));
  const response = await fetch(`${REGISTRY}/-/npm/v1/security/advisories/bulk`, {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.json();
}

async function mapWithConcurrency(values, concurrency, callback) {
  const results = new Array(values.length);
  let cursor = 0;

  async function worker() {
    while (cursor < values.length) {
      const index = cursor++;
      results[index] = await callback(values[index]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, values.length) }, worker));
  return results;
}

async function readInstalledManifests() {
  const storeUrl = new URL('../node_modules/.pnpm/', import.meta.url);
  const manifests = new Map();
  let storeEntries;
  try {
    storeEntries = await readdir(storeUrl, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }

  async function inspectPackageDirectory(directoryUrl) {
    try {
      const manifest = JSON.parse(await readFile(new URL('package.json', directoryUrl), 'utf8'));
      if (manifest.name && manifest.version) manifests.set(`${manifest.name}@${manifest.version}`, manifest);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }

  for (const storeEntry of storeEntries) {
    if (!storeEntry.isDirectory()) continue;
    const modulesUrl = new URL(`${storeEntry.name}/node_modules/`, storeUrl);
    let packageEntries;
    try {
      packageEntries = await readdir(modulesUrl, { withFileTypes: true });
    } catch (error) {
      if (error.code === 'ENOENT') continue;
      throw error;
    }

    for (const packageEntry of packageEntries) {
      if (!packageEntry.isDirectory()) continue;
      const packageUrl = new URL(`${packageEntry.name}/`, modulesUrl);
      if (!packageEntry.name.startsWith('@')) {
        await inspectPackageDirectory(packageUrl);
        continue;
      }

      const scopedEntries = await readdir(packageUrl, { withFileTypes: true });
      for (const scopedEntry of scopedEntries) {
        if (scopedEntry.isDirectory()) {
          await inspectPackageDirectory(new URL(`${scopedEntry.name}/`, packageUrl));
        }
      }
    }
  }

  return [...manifests.values()];
}

const failures = [];
const warnings = [];
const requiredWorkspacePolicies = [
  ['minimumReleaseAge: 1440', /^minimumReleaseAge:\s*1440\s*$/m],
  ['trustPolicy: no-downgrade', /^trustPolicy:\s*no-downgrade\s*$/m],
  ['blockExoticSubdeps: true', /^blockExoticSubdeps:\s*true\s*$/m],
  ['verifyStoreIntegrity: true', /^verifyStoreIntegrity:\s*true\s*$/m],
  ['strictStorePkgContentCheck: true', /^strictStorePkgContentCheck:\s*true\s*$/m],
  ['saveExact: true', /^saveExact:\s*true\s*$/m],
];
for (const [label, pattern] of requiredWorkspacePolicies) {
  if (!pattern.test(workspace)) failures.push(`politique pnpm absente ou modifiée: ${label}`);
}
if (packageJson.pnpm?.overrides) failures.push('package.json#pnpm.overrides est ignoré par pnpm dans ce workspace; utiliser pnpm-workspace.yaml#overrides');

const overrides = parseOverrides(workspace);
for (const [name, version] of EXPECTED_OVERRIDES) {
  if (overrides.get(name) !== version) failures.push(`override pnpm absent ou modifié: ${name}@${version}`);
}
for (const [name, version] of overrides) {
  if (EXPECTED_OVERRIDES.get(name) !== version) failures.push(`override pnpm inattendu: ${name}@${version}`);
}

const releaseAgeExclusions = parseYamlList(workspace, 'minimumReleaseAgeExclude');
const unexpectedReleaseAgeExclusions = setDifference(releaseAgeExclusions, EXPECTED_RELEASE_AGE_EXCLUSIONS);
const missingReleaseAgeExclusions = setDifference(EXPECTED_RELEASE_AGE_EXCLUSIONS, releaseAgeExclusions);
if (unexpectedReleaseAgeExclusions.length) {
  failures.push(`exceptions de quarantaine pnpm inattendues: ${unexpectedReleaseAgeExclusions.join(', ')}`);
}
if (missingReleaseAgeExclusions.length) {
  failures.push(`exceptions de quarantaine pnpm attendues mais absentes: ${missingReleaseAgeExclusions.join(', ')}`);
}

const trustPolicyExclusions = parseYamlList(workspace, 'trustPolicyExclude');
const unexpectedTrustPolicyExclusions = setDifference(trustPolicyExclusions, EXPECTED_TRUST_POLICY_EXCLUSIONS);
const missingTrustPolicyExclusions = setDifference(EXPECTED_TRUST_POLICY_EXCLUSIONS, trustPolicyExclusions);
if (unexpectedTrustPolicyExclusions.length) {
  failures.push(`exceptions de confiance pnpm inattendues: ${unexpectedTrustPolicyExclusions.join(', ')}`);
}
if (missingTrustPolicyExclusions.length) {
  failures.push(`exceptions de confiance pnpm attendues mais absentes: ${missingTrustPolicyExclusions.join(', ')}`);
}

const allowedBuilds = parseAllowedBuilds(workspace);
const unexpectedBuilds = setDifference(allowedBuilds, EXPECTED_BUILD_ALLOWLIST);
const missingBuilds = setDifference(EXPECTED_BUILD_ALLOWLIST, allowedBuilds);

if (unexpectedBuilds.length) {
  failures.push(`scripts d'installation autorisés en trop: ${unexpectedBuilds.join(', ')}`);
}
if (missingBuilds.length) {
  failures.push(`scripts d'installation attendus mais non autorisés: ${missingBuilds.join(', ')}`);
}
if (!/^pnpm@\d+\.\d+\.\d+$/.test(packageJson.packageManager ?? '')) {
  failures.push('packageManager doit verrouiller une version exacte de pnpm');
}

const lockedPackages = parseLockedPackages(lockfile);
if (!lockedPackages.length) failures.push('aucun paquet détecté dans pnpm-lock.yaml');

const invalidIntegrity = lockedPackages.filter((entry) => !entry.integrity?.startsWith('sha512-'));
if (invalidIntegrity.length) {
  failures.push(`${invalidIntegrity.length} paquet(s) sans intégrité SHA-512: ${invalidIntegrity.slice(0, 10).map(({ name, version }) => `${name}@${version}`).join(', ')}`);
}

const disallowedLockedPackages = lockedPackages.filter(({ name }) => DISALLOWED_LOCKED_PACKAGES.has(name));
if (disallowedLockedPackages.length) {
  failures.push(`paquet(s) sans correctif amont interdit(s): ${disallowedLockedPackages.map(({ name, version }) => `${name}@${version}`).join(', ')}`);
}

console.log(`Lockfile: ${lockedPackages.length} versions, intégrités SHA-512 présentes: ${lockedPackages.length - invalidIntegrity.length}/${lockedPackages.length}.`);
console.log(`Scripts d'installation autorisés: ${[...allowedBuilds].sort().join(', ') || 'aucun'}.`);
console.log(`Overrides pnpm contrôlés depuis pnpm-workspace.yaml: ${[...overrides].map(([name, version]) => `${name}@${version}`).join(', ') || 'aucun'}.`);
console.log(`Exceptions de quarantaine pnpm contrôlées: ${[...releaseAgeExclusions].sort().join(', ') || 'aucune'}.`);
console.log(`Exceptions de confiance pnpm contrôlées: ${[...trustPolicyExclusions].sort().join(', ') || 'aucune'}.`);

if (advisoryMode) {
  try {
    const response = await fetchBulkAdvisories(lockedPackages);
    const directRuntimeDependencies = new Set(Object.keys(packageJson.dependencies ?? {}));
    const { advisories, blocking } = classifyNpmAdvisories(response, directRuntimeDependencies);
    console.log(`Avis npm (endpoint bulk): ${advisories.length} signalé(s), dont ${blocking.length} bloquant(s) selon la politique runtime.`);
    for (const advisory of advisories) {
      const message = `${advisory.packageName}: ${advisory.severity} ${advisory.title} (${advisory.url})`;
      if (blocking.includes(advisory)) failures.push(`vulnérabilité npm: ${message}`);
      else warnings.push(`vulnérabilité npm transitive sous le seuil high: ${message}`);
    }
  } catch (error) {
    failures.push(`endpoint npm Bulk Advisory inaccessible ou invalide: ${error.message}`);
  }
}

const installedManifests = await readInstalledManifests();
if (installedManifests.length) {
  const lifecycle = installedManifests
    .map((manifest) => ({
      name: manifest.name,
      version: manifest.version,
      scripts: LIFECYCLE_SCRIPTS.filter((script) => manifest.scripts?.[script]),
    }))
    .filter((entry) => entry.scripts.length)
    .sort((a, b) => `${a.name}@${a.version}`.localeCompare(`${b.name}@${b.version}`));

  console.log(`Paquets installés déclarant un script d'installation: ${lifecycle.length}.`);
  for (const entry of lifecycle) {
    const status = allowedBuilds.has(entry.name) ? 'autorisé explicitement' : 'bloqué par pnpm';
    console.log(`  - ${entry.name}@${entry.version}: ${entry.scripts.join(', ')} (${status})`);
  }
} else {
  console.log('Paquets installés: contrôle des scripts reporté (node_modules absent).');
}

if (registryMode) {
  let signingKeys = new Map();
  try {
    const keyDocument = await fetchJson(`${REGISTRY}/-/npm/v1/keys`);
    signingKeys = new Map((keyDocument.keys ?? []).map((entry) => {
      if (entry.keytype !== 'ecdsa-sha2-nistp256' || entry.scheme !== 'ecdsa-sha2-nistp256') {
        throw new Error(`algorithme de signature non pris en charge pour ${entry.keyid}`);
      }
      return [entry.keyid, createPublicKey({
        key: Buffer.from(entry.key, 'base64'),
        format: 'der',
        type: 'spki',
      })];
    }));
  } catch (error) {
    failures.push(`clés de signature npm inaccessibles ou invalides: ${error.message}`);
  }

  const byName = new Map();
  for (const entry of lockedPackages) {
    if (!byName.has(entry.name)) byName.set(entry.name, []);
    byName.get(entry.name).push(entry);
  }

  const registryResults = await mapWithConcurrency([...byName], 12, async ([name, entries]) => {
    try {
      const metadata = await fetchJson(`${REGISTRY}/${encodeURIComponent(name)}`);
      return { name, entries, metadata };
    } catch (error) {
      return { name, entries, error };
    }
  });

  const recent = [];
  const quarantined = [];
  let verifiedSignatures = 0;
  let checked = 0;

  for (const result of registryResults) {
    if (result.error) {
      failures.push(`registre inaccessible pour ${result.name}: ${result.error.message}`);
      continue;
    }

    for (const entry of result.entries) {
      const manifest = result.metadata.versions?.[entry.version];
      if (!manifest) {
        failures.push(`version absente du registre: ${entry.name}@${entry.version}`);
        continue;
      }
      checked += 1;

      if (manifest.dist?.integrity !== entry.integrity) {
        failures.push(`intégrité différente du registre: ${entry.name}@${entry.version}`);
      }
      const signedPayload = `${entry.name}@${entry.version}:${manifest.dist?.integrity}`;
      const signatureIsValid = (manifest.dist?.signatures ?? []).some((signature) => {
        const publicKey = signingKeys.get(signature.keyid);
        if (!publicKey) return false;
        try {
          return verifySignature(
            'sha256',
            Buffer.from(signedPayload),
            publicKey,
            Buffer.from(signature.sig, 'base64'),
          );
        } catch {
          return false;
        }
      });
      if (signatureIsValid) verifiedSignatures += 1;
      else failures.push(`signature npm absente ou invalide: ${entry.name}@${entry.version}`);

      const publishedAt = result.metadata.time?.[entry.version];
      if (publishedAt) {
        const ageMs = Date.now() - Date.parse(publishedAt);
        if (ageMs >= 0 && ageMs < RECENT_WINDOW_MS) {
          recent.push({ ...entry, publishedAt, ageHours: ageMs / 3_600_000 });
        }
        if (ageMs >= 0 && ageMs < QUARANTINE_MS) quarantined.push(entry);
      }
    }
  }

  for (const entry of recent.sort((a, b) => a.publishedAt.localeCompare(b.publishedAt))) {
    warnings.push(`publication récente: ${entry.name}@${entry.version}, publiée ${entry.publishedAt} (${entry.ageHours.toFixed(1)} h)`);
  }

  console.log(`Registre npm: ${checked}/${lockedPackages.length} intégrités comparées, ${verifiedSignatures}/${checked} signatures ECDSA vérifiées.`);
  console.log(`Versions dans la quarantaine de 24 h: ${quarantined.length}; publiées depuis moins de 72 h: ${recent.length}.`);
}

for (const warning of warnings) console.warn(`AVERTISSEMENT: ${warning}`);
for (const failure of failures) console.error(`ERREUR: ${failure}`);

if (failures.length) process.exitCode = 1;
else console.log('Audit supply-chain réussi.');
