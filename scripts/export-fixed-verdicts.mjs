import { readFile } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { exportFixedVerdicts } from './lib/export-fixed-verdicts.mjs';

const [output, input = 'dist/data/catalog.json'] = process.argv.slice(2);
if (!output) throw new Error('Usage: pnpm data:export-verdicts /absolute/offline-output.json [catalog.json]');
const destination = resolve(output);
if (destination === resolve('dist') || destination.startsWith(`${resolve('dist')}${sep}`) || destination.startsWith(`${resolve('public')}${sep}`)) throw new Error('Keep offline exports outside the site artifact');
const catalog = JSON.parse(await readFile(resolve(input), 'utf8'));
console.log(await exportFixedVerdicts(catalog, destination));
