import { generateKeyPairSync } from 'node:crypto';
import { mkdtemp, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { createSignatureManifest, publicKeyFingerprint, SIGNED_DATA_FILES, verifySignatureManifest } from './publication-signatures.mjs';

describe('publication signatures', () => {
	it('signs exact snapshot bytes and rejects a later mutation', async () => {
		const directory = await mkdtemp(join(tmpdir(), 'compatair-signatures-'));
		for (const file of SIGNED_DATA_FILES) await writeFile(join(directory, file), JSON.stringify({ file }));
		const { privateKey, publicKey } = generateKeyPairSync('ed25519');
		const publicKeyDer = publicKey.export({ type: 'spki', format: 'der' });
		const keyRegistry = { keys: [{ id: 'test', algorithm: 'Ed25519', status: 'active', publicKey: publicKeyDer.toString('base64'), fingerprintSha256: publicKeyFingerprint(publicKey) }] };
		const manifest = await createSignatureManifest({ dataDirectory: directory, privateKeyPem: privateKey.export({ type: 'pkcs8', format: 'pem' }), keyRegistry, keyId: 'test', createdAt: '2026-07-14T12:00:00.000Z' });
		await expect(verifySignatureManifest({ dataDirectory: directory, manifest, keyRegistry })).resolves.toBe(true);
		await writeFile(join(directory, SIGNED_DATA_FILES[0]), '{}');
		await expect(verifySignatureManifest({ dataDirectory: directory, manifest, keyRegistry })).rejects.toThrow('invalide');
	});
});
