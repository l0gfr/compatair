import { appendFileSync, lstatSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const directory = '.astro/page-calculations-v1', limit = 64 * 1024 * 1024;
let ready = false, bytes = 0;
try {
 if (!lstatSync(directory).isDirectory()) throw new Error('unsafe_directory');
 let engine = false, rows = 0;
 for (const name of readdirSync(directory)) {
  if (!/^(?:row-[a-f0-9]{64}\.json\.gz|columns-[a-f0-9]{64}\.json|engine\.json|stats\.json)$/.test(name)) throw new Error('unexpected_file');
  const info = lstatSync(join(directory, name));
  if (!info.isFile()) throw new Error('unsafe_file');
  bytes += info.size;
  if (bytes > limit) throw new Error('budget');
  engine ||= name === 'engine.json'; rows += Number(name.startsWith('row-'));
 }
 ready = engine && rows > 0;
} catch { /* A disposable cache never blocks correct uncached calculations. */ }
console.log(JSON.stringify({ ready, bytes, limit }));
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `ready=${ready}\n`);
