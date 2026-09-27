import { createHash, createPrivateKey, createPublicKey, sign, verify } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { basename, resolve } from 'node:path';

export const SIGNATURE_SCHEMA_VERSION = '2.0.0';
export const SIGNATURE_PAYLOAD = 'compatair-file-sha256-v2';
export const SIGNED_DATA_FILES = [
	'catalog.json',
	'catalog.ndjson',
	'runtime-catalog.json',
	'offers.json',
	'verdicts.json',
	'evidence-history.json',
	'evidence-history.ndjson',
	'citations.ndjson',
	'agent-knowledge.json',
	'agent-knowledge.ndjson',
	'agent-knowledge-manifest.json',
	'changefeed.json',
	'changefeed.ndjson',
	'freshness.json',
	'integrity.json',
	'catalog-dcat.jsonld',
	'transparency-barometer.json',
	'document-quality-observatory.json',
	'contradiction-radar.json',
];

export function sha256(bytes) { return createHash('sha256').update(bytes).digest('hex'); }

export async function fingerprintFile(path) {
	const hash = createHash('sha256');
	let sizeBytes = 0;
	for await (const chunk of createReadStream(path, { highWaterMark: 1024 * 1024 })) {
		hash.update(chunk);
		sizeBytes += chunk.length;
		if (!Number.isSafeInteger(sizeBytes)) throw new Error('Fichier trop grand pour représenter sa taille exactement.');
	}
	return { sha256: hash.digest('hex'), sizeBytes };
}

// The fixed array order is the wire format. Bind the context and file identity,
// not just its hash; a signature cannot be moved to another path or publication.
export function fileSignaturePayload(manifest, entry) {
	if (manifest.signaturePayload !== SIGNATURE_PAYLOAD || typeof manifest.keyId !== 'string' || !/^[a-zA-Z0-9._-]{1,100}$/.test(manifest.keyId)
		|| typeof manifest.createdAt !== 'string' || manifest.createdAt.length > 64 || !Number.isFinite(Date.parse(manifest.createdAt))
		|| !SIGNED_DATA_FILES.some(file => entry.path === `/data/${file}`)
		|| !Number.isSafeInteger(entry.sizeBytes) || entry.sizeBytes < 0 || !/^[a-f0-9]{64}$/.test(entry.sha256)) throw new Error('Charge utile de signature invalide.');
	return Buffer.from(JSON.stringify([SIGNATURE_PAYLOAD, SIGNATURE_SCHEMA_VERSION, manifest.keyId, manifest.createdAt, entry.path, entry.sizeBytes, entry.sha256]), 'utf8');
}

export function publicKeyFingerprint(publicKey) {
	const key = publicKey?.type === 'public' ? publicKey : createPublicKey(publicKey);
	return sha256(key.export({ type: 'spki', format: 'der' }));
}

export async function createSignatureManifest({ dataDirectory, privateKeyPem, keyRegistry, keyId, createdAt }) {
	const registryKey = keyRegistry.keys.find((item) => item.id === keyId && item.status === 'active');
	if (!registryKey) throw new Error(`Clé de signature active absente du registre : ${keyId}`);
	if (registryKey.algorithm !== 'Ed25519') throw new Error(`Algorithme de clé non pris en charge : ${registryKey.algorithm}`);
	const privateKey = createPrivateKey(privateKeyPem);
	if (privateKey.asymmetricKeyType !== 'ed25519') throw new Error('La clé privée de publication doit être une clé Ed25519.');
	const derivedPublicKey = createPublicKey(privateKey);
	if (publicKeyFingerprint(derivedPublicKey) !== registryKey.fingerprintSha256) throw new Error('La clé privée ne correspond pas à la clé publique enregistrée.');
	const files = [];
	const manifest = { schemaVersion: SIGNATURE_SCHEMA_VERSION, createdAt, algorithm: 'Ed25519', signaturePayload: SIGNATURE_PAYLOAD, keyId, files };
	for (const file of SIGNED_DATA_FILES) {
		const entry = { path: `/data/${basename(file)}`, ...await fingerprintFile(resolve(dataDirectory, file)) };
		files.push({ ...entry, signature: sign(null, fileSignaturePayload(manifest, entry), privateKey).toString('base64') });
	}
	return manifest;
}

export async function verifySignatureManifest({ dataDirectory, manifest, keyRegistry }) {
	if (!['1.0.0', SIGNATURE_SCHEMA_VERSION].includes(manifest.schemaVersion) || manifest.algorithm !== 'Ed25519' || !Array.isArray(manifest.files)) throw new Error('Manifeste de signature non pris en charge.');
	const registryKey = keyRegistry.keys.find((item) => item.id === manifest.keyId && item.status !== 'revoked');
	if (!registryKey) throw new Error(`Clé publique inconnue ou révoquée : ${manifest.keyId}`);
	const publicKeyDer = Buffer.from(registryKey.publicKey, 'base64');
	if (sha256(publicKeyDer) !== registryKey.fingerprintSha256) throw new Error('Empreinte de clé publique incohérente.');
	const publicKey = createPublicKey({ key: publicKeyDer, type: 'spki', format: 'der' });
	if (registryKey.algorithm !== 'Ed25519' || publicKey.asymmetricKeyType !== 'ed25519') throw new Error('Clé publique Ed25519 requise.');
	const expectedPaths = new Set(SIGNED_DATA_FILES.map((file) => `/data/${file}`));
	const errors = [];
	for (const entry of manifest.files ?? []) {
		if (!expectedPaths.delete(entry.path)) { errors.push(`Chemin signé inattendu ou dupliqué : ${entry.path}`); continue; }
		const path = resolve(dataDirectory, basename(entry.path));
		if (manifest.schemaVersion === '1.0.0') {
			// Historical raw-byte signatures retain their original semantics.
			const bytes = await readFile(path);
			if (sha256(bytes) !== entry.sha256) errors.push(`Empreinte de fichier invalide : ${entry.path}`);
			if (!verify(null, bytes, publicKey, Buffer.from(entry.signature, 'base64'))) errors.push(`Signature invalide : ${entry.path}`);
		} else {
			const payload = fileSignaturePayload(manifest, entry);
			if (!verify(null, payload, publicKey, Buffer.from(entry.signature, 'base64'))) { errors.push(`Signature invalide : ${entry.path}`); continue; }
			const actual = await fingerprintFile(path);
			if (actual.sha256 !== entry.sha256 || actual.sizeBytes !== entry.sizeBytes) errors.push(`Empreinte ou taille de fichier invalide : ${entry.path}`);
		}
	}
	for (const missing of expectedPaths) errors.push(`Signature absente : ${missing}`);
	if (errors.length) throw new Error(errors.join('\n'));
	return true;
}
