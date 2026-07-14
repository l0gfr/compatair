import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createSignatureManifest, verifySignatureManifest } from './lib/publication-signatures.mjs';

const dataDirectory = resolve(process.argv[2] ?? 'dist/data');
const registryPath = resolve(process.argv[3] ?? 'config/publication-signing-keys.json');
const privateKeyPem = process.env.COMPATAIR_PUBLICATION_SIGNING_KEY;
const keyId = process.env.COMPATAIR_PUBLICATION_SIGNING_KEY_ID ?? 'compatair-2026-01';
const createdAt = process.env.COMPATAIR_PUBLICATION_CREATED_AT ?? new Date().toISOString();
if (!privateKeyPem) throw new Error('COMPATAIR_PUBLICATION_SIGNING_KEY est obligatoire.');
const keyRegistry = JSON.parse(await readFile(registryPath, 'utf8'));
const manifest = await createSignatureManifest({ dataDirectory, privateKeyPem, keyRegistry, keyId, createdAt });
await verifySignatureManifest({ dataDirectory, manifest, keyRegistry });
await writeFile(resolve(dataDirectory, 'signatures.json'), `${JSON.stringify(manifest)}\n`, { mode: 0o644 });
console.log(`Snapshots signés avec ${keyId} : ${manifest.files.length} fichier(s).`);
