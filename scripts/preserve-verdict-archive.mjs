import { readFile } from 'node:fs/promises';
import { preserveVerdictArchive } from './lib/legacy-verdict-archive.mjs';

const [previousRelease, candidateRelease] = process.argv.slice(2);
if (!candidateRelease) throw new Error('Usage: preserve-verdict-archive.mjs previous-release candidate-release');
const archive = JSON.parse(await readFile(new URL('../config/legacy-verdict-archive.json', import.meta.url), 'utf8'));
const registry = JSON.parse(await readFile(new URL('../config/publication-signing-keys.json', import.meta.url), 'utf8'));
await preserveVerdictArchive({ previousRelease, candidateRelease, archive, registry });
console.log(`Verified immutable archive preserved: ${archive.releaseSha}`);
