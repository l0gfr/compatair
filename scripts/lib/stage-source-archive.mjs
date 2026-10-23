import { constants } from 'node:fs';
import { copyFile, lstat, mkdir, readFile, readdir, realpath, utimes } from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';

export function decodeSourceArchiveManifest(bytes) {
 // Git has no manifest BOM header: a leading BOM belongs to the first filename.
 return new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(bytes);
}

function isWithin(parent, child) {
 const path = relative(parent, child);
 return path === '' || (path !== '..' && !path.startsWith(`..${sep}`) && !isAbsolute(path));
}

// One bounded process replaces a mkdir/cp process pair for every source file.
// Keep working-tree bytes and executable modes. Access/modification times are
// copied through Date values, with millisecond rather than nanosecond precision.
export async function stageSourceArchive(sourceRoot, stagingRoot, manifest) {
 if (manifest.length && !manifest.endsWith('\0')) throw new Error('Source manifest must be NUL terminated');
 const paths = manifest ? manifest.slice(0, -1).split('\0') : [];
 if (new Set(paths).size !== paths.length) throw new Error('Duplicate source archive entry');
 for (const path of paths) {
  if (!path || isAbsolute(path) || path.split('/').some(part => !part || part === '.' || part === '..' || part === '.git')) {
   throw new Error(`Unsafe source archive path: ${path}`);
  }
 }
 const source = await realpath(sourceRoot), staging = await realpath(stagingRoot);
 if (isWithin(source, staging) || isWithin(staging, source)) throw new Error('Source archive roots must be disjoint');
 if ((await readdir(staging)).length) throw new Error('Source archive staging must be empty');
 const parents = new Map();
 async function prepareParent(relativePath) {
  const sourceParent = dirname(resolve(source, relativePath));
  const targetParent = dirname(resolve(staging, relativePath));
  if (!parents.has(sourceParent)) parents.set(sourceParent, (async () => {
   if (await realpath(sourceParent) !== sourceParent) throw new Error('Symbolic link in source archive parent');
   await mkdir(targetParent, { recursive: true });
  })());
  await parents.get(sourceParent);
 }
 let next = 0, failure;
 async function worker() {
  while (!failure && next < paths.length) {
   const path = paths[next++];
   try {
    await prepareParent(path);
    const from = resolve(source, path), to = resolve(staging, path);
    const stat = await lstat(from);
    if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`Unsafe source archive entry: ${path}`);
    await copyFile(from, to, constants.COPYFILE_EXCL);
    await utimes(to, stat.atime, stat.mtime);
   } catch (error) { failure ??= error; }
  }
 }
 await Promise.all(Array.from({ length: Math.min(4, paths.length) }, worker));
 if (failure) throw failure;
 return paths.length;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
 try {
  if (process.argv.length !== 5) throw new Error('Expected source root, staging root and manifest file');
  const manifest = decodeSourceArchiveManifest(await readFile(process.argv[4]));
  const count = await stageSourceArchive(process.argv[2], process.argv[3], manifest);
  console.log(`Staged ${count} regular source files.`);
 } catch (error) {
  console.error(error.message);
  process.exitCode = 1;
 }
}
