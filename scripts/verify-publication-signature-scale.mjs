import assert from 'node:assert/strict';
import { generateKeyPairSync } from 'node:crypto';
import { mkdtemp, open, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createSignatureManifest, publicKeyFingerprint, SIGNED_DATA_FILES, verifySignatureManifest } from './lib/publication-signatures.mjs';

// Synthetic sparse file: no production data or publication key is used.
const root = await mkdtemp(join(tmpdir(), 'compatair-signature-scale-'));
const size = 2 ** 31 + 17;
const started = performance.now();
try {
 for (const file of SIGNED_DATA_FILES) await writeFile(join(root, file), '{}');
 const handle = await open(join(root, 'verdicts.json'), 'r+');
 try { await handle.truncate(size); } finally { await handle.close(); }
 const { privateKey, publicKey } = generateKeyPairSync('ed25519');
 const keyRegistry = { keys: [{ id: 'synthetic-test', algorithm: 'Ed25519', status: 'active', publicKey: publicKey.export({ type: 'spki', format: 'der' }).toString('base64'), fingerprintSha256: publicKeyFingerprint(publicKey) }] };
 const manifest = await createSignatureManifest({ dataDirectory: root, privateKeyPem: privateKey.export({ type: 'pkcs8', format: 'pem' }), keyRegistry, keyId: 'synthetic-test', createdAt: '2026-09-27T00:00:00.000Z' });
 assert.equal(manifest.files.find(entry => entry.path === '/data/verdicts.json').sizeBytes, size);
 await verifySignatureManifest({ dataDirectory: root, manifest, keyRegistry });
 const mutation = await open(join(root, 'verdicts.json'), 'r+');
 try { await mutation.write(Buffer.from([1]), 0, 1, size - 1); } finally { await mutation.close(); }
 await assert.rejects(verifySignatureManifest({ dataDirectory: root, manifest, keyRegistry }), /Empreinte ou taille de fichier invalide/);
 const peakMiB = process.resourceUsage().maxRSS / 1024;
 assert(peakMiB < 256, `Signature RSS ${peakMiB.toFixed(1)} MiB exceeds 256 MiB`);
 console.log(`Synthetic ${size}-byte snapshot signed, verified and tamper rejected in ${((performance.now() - started) / 1000).toFixed(2)} s; peak ${peakMiB.toFixed(1)} MiB < 256 MiB.`);
} finally { await rm(root, { recursive: true, force: true }); }
