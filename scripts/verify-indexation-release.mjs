import { readFile } from 'node:fs/promises';
import { isDeepStrictEqual } from 'node:util';
import { readLiveIndexation } from './lib/indexation-live.mjs';
import { MAX_INDEXATION_ARTIFACT_AGE_MS, validateBaseline, validateManifest } from './lib/indexation-policy.mjs';

const baseline = validateBaseline(JSON.parse(await readFile('config/indexation-baseline.json', 'utf8')));
const plan = JSON.parse(await readFile('.astro/seo/indexation-plan.json', 'utf8'));
const artifact = validateManifest(JSON.parse(await readFile('dist/data/indexation.json', 'utf8')), baseline);
if (!plan.allowRelease || artifact.gitSha === 'development' || !isDeepStrictEqual(artifact, plan.manifest)) throw new Error('Artefact SEO non déployable ou différent du plan vérifié.');
if (Date.now() - Date.parse(artifact.builtAt) > MAX_INDEXATION_ARTIFACT_AGE_MS) throw new Error('Artefact SEO trop ancien : reconstruire avant déploiement.');
const live = await readLiveIndexation(baseline);
if (artifact.gitSha === live.gitSha) throw new Error('Cette révision est déjà publiée : un nouveau lot exige une nouvelle révision immuable.');
if (live.gitSha !== plan.previousSha || !isDeepStrictEqual(live.batches, artifact.batches.slice(0, live.batches.length))) throw new Error('La production a changé depuis le build : reconstruire pour préserver son historique SEO.');
console.log(`Base SEO de production vérifiée avant déploiement : ${live.gitSha}.`);
