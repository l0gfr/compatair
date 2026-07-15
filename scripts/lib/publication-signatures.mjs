import { createHash, createPrivateKey, createPublicKey, sign, verify } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { basename, resolve } from 'node:path';

export const SIGNATURE_SCHEMA_VERSION = '1.0.0';
export const SIGNED_DATA_FILES = ['catalog.json', 'runtime-catalog.json', 'offers.json', 'verdicts.json', 'evidence-history.json', 'transparency-barometer.json', 'document-quality-observatory.json', 'contradiction-radar.json'];

export function sha256(bytes) { return createHash('sha256').update(bytes).digest('hex'); }

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
	for (const file of SIGNED_DATA_FILES) {
		const bytes = await readFile(resolve(dataDirectory, file));
		files.push({ path: `/data/${basename(file)}`, sha256: sha256(bytes), signature: sign(null, bytes, privateKey).toString('base64') });
	}
	return { schemaVersion: SIGNATURE_SCHEMA_VERSION, createdAt, algorithm: 'Ed25519', keyId, files };
}

export async function verifySignatureManifest({ dataDirectory, manifest, keyRegistry }) {
	if (manifest.schemaVersion !== SIGNATURE_SCHEMA_VERSION || manifest.algorithm !== 'Ed25519') throw new Error('Manifeste de signature non pris en charge.');
	const registryKey = keyRegistry.keys.find((item) => item.id === manifest.keyId && item.status !== 'revoked');
	if (!registryKey) throw new Error(`Clé publique inconnue ou révoquée : ${manifest.keyId}`);
	const publicKeyDer = Buffer.from(registryKey.publicKey, 'base64');
	if (sha256(publicKeyDer) !== registryKey.fingerprintSha256) throw new Error('Empreinte de clé publique incohérente.');
	const publicKey = createPublicKey({ key: publicKeyDer, type: 'spki', format: 'der' });
	const expectedPaths = new Set(SIGNED_DATA_FILES.map((file) => `/data/${file}`));
	const errors = [];
	for (const entry of manifest.files ?? []) {
		if (!expectedPaths.delete(entry.path)) { errors.push(`Chemin signé inattendu ou dupliqué : ${entry.path}`); continue; }
		const bytes = await readFile(resolve(dataDirectory, basename(entry.path)));
		if (sha256(bytes) !== entry.sha256) errors.push(`Empreinte de fichier invalide : ${entry.path}`);
		if (!verify(null, bytes, publicKey, Buffer.from(entry.signature, 'base64'))) errors.push(`Signature invalide : ${entry.path}`);
	}
	for (const missing of expectedPaths) errors.push(`Signature absente : ${missing}`);
	if (errors.length) throw new Error(errors.join('\n'));
	return true;
}
