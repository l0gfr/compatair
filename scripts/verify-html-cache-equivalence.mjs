import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFile, readdir, realpath } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const families = ['compresseurs', 'outils-pneumatiques', 'quel-compresseur-pour', 'guides'];
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
export async function htmlGroupDigests(directory) {
 const groups = {};
 let entries = 0, bytes = 0;
 for (const family of families) {
  const files = [];
  async function walk(relative) {
   for (const entry of await readdir(join(directory, relative), { withFileTypes: true })) {
    if (++entries > 200_000 || entry.isSymbolicLink()) throw new Error('Unsafe HTML equivalence tree');
    const path = `${relative}/${entry.name}`;
    if (entry.isDirectory()) await walk(path);
    else if (entry.isFile()) { if (entry.name.endsWith('.html')) files.push(path); }
    else throw new Error('Unsupported HTML equivalence entry');
   }
  }
  await walk(family);
  files.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  const rows = new Array(files.length);let cursor = 0;
  await Promise.all(Array.from({ length: 4 }, async () => {
   while (cursor < files.length) {
    const index = cursor++, path = files[index], body = await readFile(join(directory, path));
    bytes += body.length;if (bytes > 8 * 1024 ** 3) throw new Error('HTML equivalence size budget exceeded');
    rows[index] = `${path}\0${sha256(body)}\n`;
   }
  }));
  groups[family] = { count: files.length, sha256: sha256(rows.join('')) };
 }
 return groups;
}
export async function verifyHtmlEquivalence(baseline, directory, baseSha) {
 if (baseline?.schemaVersion !== 1 || !/^[a-f0-9]{40}$/.test(baseline.referenceReleaseSha)
  || !/^[a-f0-9]{40}$/.test(baseSha) || !Number.isSafeInteger(baseline.artifactId)
  || !['artifactZipSha256', 'archiveSha256'].every(key => /^[a-f0-9]{64}$/.test(baseline[key]))
  || families.some(family => !Number.isSafeInteger(baseline.groups?.[family]?.count) || baseline.groups[family].count < 0 || !/^[a-f0-9]{64}$/.test(baseline.groups[family].sha256))) throw new Error('Invalid HTML equivalence baseline');
 // This baseline proves the cache-only migration from this exact release. It
 // must not prevent later, intentional editorial or catalogue publications.
 if (baseSha !== baseline.referenceReleaseSha) return { applicable: false, reason: 'different-parent-release' };
 const actual = await htmlGroupDigests(directory);
 for (const family of families) if (actual[family].count !== baseline.groups[family].count || actual[family].sha256 !== baseline.groups[family].sha256) throw new Error(`HTML bytes differ from production: ${family} (${actual[family].count} pages)`);
 return { applicable: true, referenceReleaseSha: baseSha, pages: families.reduce((sum, family) => sum + actual[family].count, 0), groups: actual };
}
const entry = process.argv[1] && await realpath(process.argv[1]).catch(() => undefined);
if (entry && import.meta.url === pathToFileURL(entry).href) {
 if (process.argv.length !== 2) throw new Error('No HTML equivalence argument expected');
 const baseline = JSON.parse(await readFile('docs/html-cache-baseline-2026-11-04.json', 'utf8'));
 const parent = process.env.PUSH_BASE_SHA || execFileSync('git', ['rev-parse', 'HEAD^'], { encoding: 'utf8' }).trim();
 console.log(JSON.stringify(await verifyHtmlEquivalence(baseline, resolve('dist'), parent)));
}
