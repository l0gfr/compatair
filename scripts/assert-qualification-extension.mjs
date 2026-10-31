import { readFile } from 'node:fs/promises';
import { assertQualificationExtension } from './lib/indexation-qualifications.mjs';
if (process.argv.length !== 4) throw new Error('Deux registres de qualifications sont requis.');
const [previous, current] = await Promise.all(process.argv.slice(2).map(async path => JSON.parse(await readFile(path, 'utf8'))));
assertQualificationExtension(previous, current);
console.log('Historique append-only des qualifications vérifié.');
