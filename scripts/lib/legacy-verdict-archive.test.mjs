import { generateKeyPairSync } from 'node:crypto';
import { mkdtemp, mkdir, readFile, rm, stat, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, expect, it } from 'vitest';
import { createSignatureManifest, publicKeyFingerprint, SIGNED_DATA_FILES } from './publication-signatures.mjs';
import { preserveVerdictArchive } from './legacy-verdict-archive.mjs';
const roots = [];
afterEach(async () => { for (const root of roots.splice(0)) await rm(root, { recursive: true, force: true }); });
async function fixture() {
 const root = await mkdtemp(join(tmpdir(), 'compatair-archive-')); roots.push(root);
 const previousRelease = join(root, 'previous'), candidateRelease = join(root, 'candidate');
 for (const release of [previousRelease, candidateRelease]) await mkdir(join(release, 'data'), { recursive: true });
 const dataDirectory = join(previousRelease, 'data');
 for (const file of SIGNED_DATA_FILES) await writeFile(join(dataDirectory, file), JSON.stringify({ file }));
 const metadata = { schemaVersion: '1.1.0', catalogVersion: 'b'.repeat(64), verdictVersion: 'c'.repeat(64), summary: { continuous: 0 }, scope: { fixed_verdict_count: 0 } };
 await writeFile(join(dataDirectory, 'verdicts.json'), JSON.stringify({ ...metadata, pairs: [] }));
 const { privateKey, publicKey } = generateKeyPairSync('ed25519');
 const registry = { keys: [{ id: 'test', algorithm: 'Ed25519', status: 'active', publicKey: publicKey.export({ type: 'spki', format: 'der' }).toString('base64'), fingerprintSha256: publicKeyFingerprint(publicKey) }] };
 const manifest = await createSignatureManifest({ dataDirectory, privateKeyPem: privateKey.export({ type: 'pkcs8', format: 'pem' }), keyRegistry: registry, keyId: 'test', createdAt: '2026-09-27T00:00:00Z' });
 await writeFile(join(dataDirectory, 'signatures.json'), JSON.stringify(manifest));
 const releaseSha = 'a'.repeat(40);
 return { previousRelease, candidateRelease, registry, archive: { releaseSha, basePath: `/data/archives/${releaseSha}`, manifest, metadata } };
}
it('preserves signed bytes through initial migration, release retention and subsequent deployment', async () => {
 const input = await fixture();
 const directory = await preserveVerdictArchive(input);
 expect((await stat(join(directory, 'verdicts.json'))).ino).toBe((await stat(join(input.previousRelease, 'data/verdicts.json'))).ino);
 await rm(input.previousRelease, { recursive: true });
 expect(JSON.parse(await readFile(join(directory, 'verdicts.json'), 'utf8'))).toEqual({ ...input.archive.metadata, pairs: [] });
 const next = join(input.candidateRelease, '..', 'next'); await mkdir(join(next, 'data'), { recursive: true });
 await expect(preserveVerdictArchive({ ...input, previousRelease: input.candidateRelease, candidateRelease: next })).resolves.toContain(input.archive.releaseSha);
});
it.each(['tamper', 'missing', 'symlink', 'manifest', 'path', 'statistics'])('rejects %s before creating a usable archive', async kind => {
 const input = await fixture();
 const file = join(input.previousRelease, 'data/verdicts.json');
 if (kind === 'tamper') await writeFile(file, 'tampered');
 if (kind === 'missing' || kind === 'symlink') await rm(file);
 if (kind === 'symlink') await symlink(join(input.previousRelease, 'data/catalog.json'), file);
 if (kind === 'manifest') input.archive.manifest.files[0].sha256 = '0'.repeat(64);
 if (kind === 'path') input.archive.basePath = '/data/archives/../escape';
 if (kind === 'statistics') input.archive.metadata.summary.continuous = 100;
 await expect(preserveVerdictArchive(input)).rejects.toThrow();
});
