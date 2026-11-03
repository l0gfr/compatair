import { lstat, readdir, realpath } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { readFileSync } from 'node:fs';

/** @type {Map<string, number>} */
const adjacentCatalog = new Map(['_server/catalog.sqlite', 'data/catalog.json', 'data/catalog.ndjson'].map((path, index) => [path, index]));
/** @param {string} a @param {string} b */
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;

/** @param {string} manifest @param {string} listing */
export function assertProductionArchiveEntries(manifest, listing) {
 if (manifest.length > 32 * 1024 * 1024 || Buffer.byteLength(listing) > 32 * 1024 * 1024 || !manifest.endsWith('\0') || !listing.endsWith('\n')) throw new Error('Incomplete production archive inventory');
 /** @param {string} path */
 const normalize = path => path.replace(/^\.\//, '').replace(/\/$/, '');
 const expected = manifest.slice(0, -1).split('\0').map(normalize).sort(compare);
 const actual = listing.slice(0, -1).split('\n').map(normalize).sort(compare);
 if (new Set(expected).size !== expected.length || new Set(actual).size !== actual.length || expected.length !== actual.length || expected.some((path, index) => path !== actual[index])) throw new Error('Production archive entries were omitted, duplicated or changed');
 return actual.length;
}

// Change only entry order. Include every directory and regular file exactly once;
// GNU/BSD tar --null --no-recursion consumes this list without expanding it again.
/** @param {string} root */
export async function productionArchiveOrder(root) {
 const absolute = resolve(root), rootInfo = await lstat(absolute);
 if (!rootInfo.isDirectory() || rootInfo.isSymbolicLink()) throw new Error('Archive root must be a regular directory');
 const directories = ['./'];
 /** @type {string[]} */
 const files = [];
 /** @param {string} relative @returns {Promise<void>} */
 async function visit(relative) {
  for (const entry of await readdir(join(absolute, relative), { withFileTypes: true })) {
   if (!/^[A-Za-z0-9_@.+%=-]+$/.test(entry.name) || ['.', '..', '.git'].includes(entry.name)) throw new Error('Unsafe production archive path');
   const path = relative ? `${relative}/${entry.name}` : entry.name;
   const info = await lstat(join(absolute, path));
   if (entry.isDirectory() && info.isDirectory() && !info.isSymbolicLink()) { directories.push(`./${path}`); await visit(path); }
   else if (entry.isFile() && info.isFile() && !info.isSymbolicLink()) files.push(path);
   else throw new Error('Production archive contains a link or special file');
  }
 }
 await visit('');
 directories.sort(compare);
 files.sort((a, b) => (adjacentCatalog.get(a) ?? 3) - (adjacentCatalog.get(b) ?? 3) || compare(a, b));
 const result = [...directories, ...files.map(path => `./${path}`)];
 if (result.length > 200_000 || new Set(result).size !== result.length) throw new Error('Invalid production archive entry count');
 return result;
}

const entryPath = process.argv[1] && await realpath(process.argv[1]).catch(() => undefined);
if (entryPath && import.meta.url === pathToFileURL(entryPath).href) {
 try {
  if (process.argv.length === 4 && process.argv[2] === '--verify-list') {
   const entries = assertProductionArchiveEntries(readFileSync(process.argv[3], 'utf8'), readFileSync(0, 'utf8'));
   console.log(`Complete production archive: ${entries} entries preserved.`);
  } else {
   if (process.argv.length !== 3) throw new Error('Expected production dist directory or --verify-list manifest');
   process.stdout.write((await productionArchiveOrder(process.argv[2])).join('\0') + '\0');
  }
 } catch (error) { console.error(error instanceof Error ? error.message : 'Production archive ordering failed'); process.exitCode = 1; }
}
