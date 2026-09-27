import { lstat, mkdir, readFile, link, open, rename, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { verifySignatureManifest, SIGNED_DATA_FILES } from './publication-signatures.mjs';

async function directory(path) {
 const info = await lstat(path);
 if (!info.isDirectory() || info.isSymbolicLink()) throw new Error(`Unsafe archive directory: ${path}`);
}
async function verifyArchive(path, archive, registry) {
 await directory(path);
 for (const file of [...SIGNED_DATA_FILES, 'signatures.json']) {
  const info = await lstat(join(path, file));
  if (!info.isFile() || info.isSymbolicLink()) throw new Error(`Unsafe archive file: ${file}`);
 }
 const manifest = JSON.parse(await readFile(join(path, 'signatures.json'), 'utf8'));
 if (JSON.stringify(manifest) !== JSON.stringify(archive.manifest)) throw new Error('Historical manifest does not match the pinned release');
 await verifySignatureManifest({ dataDirectory: path, manifest, keyRegistry: registry });
 const file = await open(join(path, 'verdicts.json'), 'r');
 try {
  const buffer = Buffer.alloc(65_536);
  const { bytesRead } = await file.read(buffer, 0, buffer.length, 0);
  const prefix = buffer.subarray(0, bytesRead).toString('utf8');
  const boundary = prefix.indexOf(',"pairs":[');
  if (boundary < 0 || JSON.stringify(JSON.parse(`${prefix.slice(0, boundary)}}`)) !== JSON.stringify(archive.metadata)) throw new Error('Historical statistics do not match the authenticated archive');
 } finally { await file.close(); }
}

// Preserve the immutable signed v1 dataset without putting 2 GiB in every release.
// Hard links survive release retention. Never edit these files in place.
export async function preserveVerdictArchive({ previousRelease, candidateRelease, archive, registry }) {
 if (!/^[a-f0-9]{40}$/.test(archive.releaseSha) || archive.basePath !== `/data/archives/${archive.releaseSha}`) throw new Error('Invalid archive identity');
 await directory(candidateRelease);
 const data = join(candidateRelease, 'data');
 await directory(data);
 const archives = join(data, 'archives');
 await mkdir(archives, { recursive: true });
 await directory(archives);
 const destination = join(archives, archive.releaseSha);
 let present = false;
 try { await lstat(destination); present = true; } catch (error) { if (error.code !== 'ENOENT') throw error; }
 if (present) { await verifyArchive(destination, archive, registry); return destination; }
 if (!previousRelease) throw new Error('The signed historical release is required before activation');
 await directory(previousRelease);
 await directory(join(previousRelease, 'data'));
 let source = join(previousRelease, 'data');
 try {
  await directory(join(source, 'archives'));
  source = join(source, 'archives', archive.releaseSha);
 } catch (error) { if (error.code !== 'ENOENT') throw error; }
 await verifyArchive(source, archive, registry);
 const temporary = `${destination}.incoming`;
 await mkdir(temporary); // Refuse stale/ambiguous staging state.
 try {
  for (const file of [...SIGNED_DATA_FILES, 'signatures.json']) await link(join(source, file), join(temporary, file));
  await rename(temporary, destination);
 } catch (error) { await rm(temporary, { recursive: true, force: true }); throw error; }
 return destination;
}
