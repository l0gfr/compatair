import { createWriteStream } from 'node:fs';
import { mkdir, rename, rm, stat } from 'node:fs/promises';
import { dirname } from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

// Astro buffers prerendered Response bodies. Stage this large, deterministic
// export on disk and publish it before the build can report success.
export async function writeVerdictStage(path, chunks) {
 const temporary = `${path}.partial`;
 await mkdir(dirname(path), { recursive: true });
 await rm(path, { force: true });
 try {
  await pipeline(Readable.from(chunks), createWriteStream(temporary, { flags: 'w' }));
  await rename(temporary, path);
 } catch (error) {
  await rm(temporary, { force: true });
  throw error;
 }
}
export function streamedVerdictBuild(stagePath) {
 return {
  name: 'compatair-streamed-verdict-export',
  hooks: {
   'astro:build:start': async () => {
    await rm(stagePath, { force: true });
    await rm(`${stagePath}.partial`, { force: true });
   },
   'astro:build:done': async ({ dir }) => {
    if ((await stat(stagePath)).size === 0) throw new Error('Empty staged verdict export');
    await rename(stagePath, new URL('data/verdicts.json', dir));
   },
  },
 };
}
