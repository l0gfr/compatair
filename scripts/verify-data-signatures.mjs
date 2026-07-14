import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { verifySignatureManifest } from './lib/publication-signatures.mjs';

const dataDirectory = resolve(process.argv[2] ?? 'dist/data');
const registryPath = resolve(process.argv[3] ?? 'config/publication-signing-keys.json');
const manifestPath = resolve(process.argv[4] ?? `${dataDirectory}/signatures.json`);
const [manifest, keyRegistry] = await Promise.all([readFile(manifestPath, 'utf8').then(JSON.parse), readFile(registryPath, 'utf8').then(JSON.parse)]);
await verifySignatureManifest({ dataDirectory, manifest, keyRegistry });
console.log(`Signatures vérifiées : ${manifest.files.length} fichier(s), clé ${manifest.keyId}.`);
