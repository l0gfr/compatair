import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { assertDailyIndexationDate } from './lib/indexation-policy.mjs';

const [previousDirectory, candidateDirectory] = process.argv.slice(2);
if (!previousDirectory || !candidateDirectory || process.argv.length !== 4) throw new Error('Répertoires de release requis pour le contrôle SEO.');
const read = async directory => JSON.parse(await readFile(join(directory, 'data/indexation.json'), 'utf8'));
const previous = await read(previousDirectory);
const candidate = await read(candidateDirectory);
if (candidate.baselineSha !== previous.baselineSha || !Array.isArray(candidate.batches) || !Array.isArray(previous.batches)
	|| candidate.batches.length > previous.batches.length + 1
	|| !isDeepStrictEqual(previous.batches, candidate.batches.slice(0, previous.batches.length))) throw new Error('Historique SEO différent de la production avant activation.');
const added = candidate.batches.slice(previous.batches.length);
if (added.some(batch => batch.openedAt !== candidate.builtAt)) throw new Error('Date du nouveau lot différente de sa construction.');
assertDailyIndexationDate(candidate);
console.log('Historique SEO et jour de publication vérifiés avant activation.');
