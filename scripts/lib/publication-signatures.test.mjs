import { generateKeyPairSync, sign } from 'node:crypto';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { createSignatureManifest, fingerprintFile, publicKeyFingerprint, sha256, SIGNED_DATA_FILES, verifySignatureManifest } from './publication-signatures.mjs';

const directories = [];
afterEach(async () => { await Promise.all(directories.splice(0).map(directory => rm(directory, { recursive: true, force: true }))); });

async function fixture() {
	const directory = await mkdtemp(join(tmpdir(), 'compatair-signatures-'));
	directories.push(directory);
	for (const file of SIGNED_DATA_FILES) await writeFile(join(directory, file), JSON.stringify({ file }));
	const { privateKey, publicKey } = generateKeyPairSync('ed25519');
	const publicKeyDer = publicKey.export({ type: 'spki', format: 'der' });
	const keyRegistry = { keys: [{ id: 'test', algorithm: 'Ed25519', status: 'active', publicKey: publicKeyDer.toString('base64'), fingerprintSha256: publicKeyFingerprint(publicKey) }] };
	const manifest = await createSignatureManifest({ dataDirectory: directory, privateKeyPem: privateKey.export({ type: 'pkcs8', format: 'pem' }), keyRegistry, keyId: 'test', createdAt: '2026-07-14T12:00:00.000Z' });
	return { dataDirectory: directory, privateKey, keyRegistry, manifest };
}

describe('publication signatures', () => {
	it('authenticates exact file bytes through a streamed hash and rejects a later mutation', async () => {
		const input = await fixture();
		expect(input.manifest.schemaVersion).toBe('2.0.0');
		await expect(verifySignatureManifest(input)).resolves.toBe(true);
		await writeFile(join(input.dataDirectory, SIGNED_DATA_FILES[0]), '{}');
		await expect(verifySignatureManifest(input)).rejects.toThrow('invalide');
	});

	it('matches the ordinary SHA-256 across several read chunks, including an empty file', async () => {
		const input = await fixture();
		const bytes = Buffer.alloc(3 * 1024 * 1024 + 17, 0x61);
		bytes[1024 * 1024] = 0x62;
		const path = join(input.dataDirectory, SIGNED_DATA_FILES[0]);
		await writeFile(path, bytes);
		expect(await fingerprintFile(path)).toEqual({ sha256: sha256(bytes), sizeBytes: bytes.length });
		await writeFile(path, '');
		expect(await fingerprintFile(path)).toEqual({ sha256: sha256(Buffer.alloc(0)), sizeBytes: 0 });
	});

	it.each(['path', 'sizeBytes', 'sha256', 'signature', 'createdAt', 'keyId', 'signaturePayload', 'schemaVersion'])('rejects tampering with %s', async field => {
		const input = await fixture();
		const { manifest } = input;
		if (field === 'path') [manifest.files[0].path, manifest.files[1].path] = [manifest.files[1].path, manifest.files[0].path];
		if (field === 'sizeBytes') manifest.files[0].sizeBytes++;
		if (field === 'sha256') manifest.files[0].sha256 = '0'.repeat(64);
		if (field === 'signature') manifest.files[0].signature = Buffer.alloc(64).toString('base64');
		if (field === 'createdAt') manifest.createdAt = '2026-07-15T12:00:00.000Z';
		if (field === 'keyId') { input.keyRegistry.keys.push({ ...input.keyRegistry.keys[0], id: 'same-key-alias' }); manifest.keyId = 'same-key-alias'; }
		if (field === 'signaturePayload') manifest.signaturePayload = 'raw-bytes';
		if (field === 'schemaVersion') manifest.schemaVersion = '1.0.0';
		await expect(verifySignatureManifest(input)).rejects.toThrow();
	});

	it('rejects a changed file even when its unsigned hash and size are replaced', async () => {
		const input = await fixture();
		const path = join(input.dataDirectory, SIGNED_DATA_FILES[0]);
		await writeFile(path, 'replacement');
		Object.assign(input.manifest.files[0], await fingerprintFile(path));
		await expect(verifySignatureManifest(input)).rejects.toThrow('Signature invalide');
	});

	it.each(['missing', 'duplicate', 'unexpected', 'revoked'])('rejects %s evidence', async kind => {
		const input = await fixture();
		if (kind === 'missing') input.manifest.files.pop();
		if (kind === 'duplicate') input.manifest.files.push(input.manifest.files[0]);
		if (kind === 'unexpected') input.manifest.files[0].path = '/data/../../private';
		if (kind === 'revoked') input.keyRegistry.keys[0].status = 'revoked';
		await expect(verifySignatureManifest(input)).rejects.toThrow();
	});

	it('still verifies archived v1 raw-byte signatures without reinterpreting them', async () => {
		const input = await fixture();
		input.manifest.schemaVersion = '1.0.0';
		delete input.manifest.signaturePayload;
		input.manifest.files = await Promise.all(SIGNED_DATA_FILES.map(async file => {
			const bytes = await readFile(join(input.dataDirectory, file));
			return { path: `/data/${file}`, sha256: sha256(bytes), signature: sign(null, bytes, input.privateKey).toString('base64') };
		}));
		await expect(verifySignatureManifest(input)).resolves.toBe(true);
	});
});
