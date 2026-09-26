import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { collectIndexationCandidates } from './lib/indexation-candidates.mjs';
import { readLiveIndexation } from './lib/indexation-live.mjs';
import { planIndexation } from './lib/indexation-planner.mjs';
import { validateBaseline, validatePolicy } from './lib/indexation-policy.mjs';

const offline = process.argv.includes('--offline');
if (process.argv.slice(2).some((arg) => arg !== '--offline')) throw new Error('Option de préparation SEO inconnue.');
if (offline && process.env.GITHUB_ACTIONS === 'true') throw new Error('Une release CI exige une base SEO vérifiée en ligne.');
const root = process.cwd();
const baseline = validateBaseline(JSON.parse(await readFile(resolve(root, 'config/indexation-baseline.json'), 'utf8')));
const policy = validatePolicy(JSON.parse(await readFile(resolve(root, 'config/indexation-policy.json'), 'utf8')));
const now = new Date();
const previous = offline
	? { schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha: baseline.sourceSha, builtAt: now.toISOString(), batches: [] }
	: await readLiveIndexation(baseline, { now });
const candidates = await collectIndexationCandidates(root);
const releaseEnvironmentKey = 'COMPATAIR_RELEASE_SHA';
const githubEnvironmentKey = 'GITHUB_SHA';
const gitSha = process.env[releaseEnvironmentKey] ?? process.env[githubEnvironmentKey] ?? 'development';
const plan = planIndexation({ candidates, baseline, previous, policy, now, gitSha, allowRelease: !offline });
const directory = resolve(root, '.astro/seo');
await mkdir(directory, { recursive: true });
await writeFile(resolve(directory, 'indexation-plan.tmp.json'), `${JSON.stringify(plan, null, 2)}\n`);
await rename(resolve(directory, 'indexation-plan.tmp.json'), resolve(directory, 'indexation-plan.json'));
const counts = Object.fromEntries(['existing', 'released', 'queued', 'held'].map((status) => [status, plan.report.filter((entry) => entry.status === status).length]));
console.log(`Indexation : ${JSON.stringify(counts)}. Base publique ${plan.previousSha}. Rapport : .astro/seo/indexation-plan.json`);
if (offline) console.warn('Aperçu hors ligne : aucune nouvelle admission, cet artefact ne doit pas être déployé.');
