import { answerGroupView } from './answer-group-view.mjs';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { MAX_INDEXATION_ARTIFACT_AGE_MS, createIndexationPolicy, validateBaseline, validateManifest } from './indexation-policy.mjs';

const baseline = validateBaseline(JSON.parse(readFileSync(resolve('config/indexation-baseline.json'), 'utf8')));
const planPath = resolve('.astro/seo/indexation-build.json');
const plan = existsSync(planPath) ? JSON.parse(readFileSync(planPath, 'utf8')) : undefined;
if (plan) validateManifest(plan.manifest, baseline);
const manifest = plan?.manifest ?? { batches: [] };
const answerGroups = new Map();
for (const group of plan?.consolidation?.groups ?? []) for (const member of group.members) {
 if (answerGroups.has(member.path)) throw new Error('Duplicate answer group membership');
 answerGroups.set(member.path, group);
}

// Dev without a prepared plan retains the baseline and closes all new detail pages.
export const isIndexablePath = createIndexationPolicy(baseline, manifest);
export function getIndexationPlan() {
	if (!plan) throw new Error('Exécuter pnpm seo:prepare avant le build.');
	if (Date.now() - Date.parse(plan.manifest.builtAt) > MAX_INDEXATION_ARTIFACT_AGE_MS) throw new Error('Plan SEO périmé : relancer pnpm build.');
	return plan;
}

export function canonicalPathFor(path) { return manifest.canonicalAliases?.[path] ?? path; }
/** @returns {{primaryPath: string, members: Array<{path: string, label: string, identity?: {mpn?: string}, claims?: Array<{sources: Array<{url: string}>}>}>} | undefined} */
export function answerGroupFor(path) { return answerGroups.get(path); }

export function answerGroupViewFor(path) { return answerGroupView(answerGroupFor(path), path); }
