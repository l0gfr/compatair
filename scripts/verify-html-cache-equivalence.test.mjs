import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, writeFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { expect, it } from 'vitest';
import { htmlGroupDigests, verifyHtmlEquivalence } from './verify-html-cache-equivalence.mjs';
const referenceReleaseSha = 'a'.repeat(40), hash = value => createHash('sha256').update(value).digest('hex');
async function fixture(run) {
 const root = await mkdtemp(join(tmpdir(), 'compatair-html-equivalence-'));
 try {
  const groups = {};
  for (const family of ['compresseurs', 'outils-pneumatiques', 'quel-compresseur-pour', 'guides']) {
   await mkdir(join(root, family));await writeFile(join(root, family, 'index.html'), 'identical');
   groups[family] = { count: 1, sha256: hash(`${family}/index.html\0${hash('identical')}\n`) };
  }
  const baseline = { schemaVersion: 1, referenceReleaseSha, artifactId: 1, artifactZipSha256: hash('zip'), archiveSha256: hash('archive'), groups };
  await run(root, baseline);
 } finally { await rm(root, { recursive: true, force: true }); }
}
it('compares all byte hashes and paths, independently of directory order', async () => fixture(async (root, baseline) => {
 expect(await htmlGroupDigests(root)).toEqual(baseline.groups);
 expect(await verifyHtmlEquivalence(baseline, root, referenceReleaseSha)).toMatchObject({ applicable: true, pages: 4 });
}));
it('fails on changed HTML bytes, missing pages and additional pages', async () => {
 for (const change of ['changed', 'missing', 'additional']) await fixture(async (root, baseline) => {
  if (change === 'changed') await writeFile(join(root, 'guides/index.html'), 'different');
  else if (change === 'missing') await rm(join(root, 'guides/index.html'));
  else await writeFile(join(root, 'guides/extra.html'), 'identical');
  await expect(verifyHtmlEquivalence(baseline, root, referenceReleaseSha)).rejects.toThrow('HTML bytes differ');
 });
});
it('refuses symlinks and a malformed baseline without following external files', async () => fixture(async (root, baseline) => {
 await symlink(root, join(root, 'guides/loop'));
 await expect(verifyHtmlEquivalence(baseline, root, referenceReleaseSha)).rejects.toThrow('Unsafe');
 await expect(verifyHtmlEquivalence({ ...baseline, archiveSha256: 'wrong' }, root, referenceReleaseSha)).rejects.toThrow('Invalid');
}));
it('keeps the migration proof scoped to its exact parent release', async () => fixture(async (root, baseline) => {
 await writeFile(join(root, 'guides/index.html'), 'later intentional publication');
 expect(await verifyHtmlEquivalence(baseline, root, 'b'.repeat(40))).toEqual({ applicable: false, reason: 'different-parent-release' });
}));
