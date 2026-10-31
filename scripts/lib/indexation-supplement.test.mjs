import { describe, expect, it } from 'vitest';
import { planIndexation } from './indexation-planner.mjs';
import { assertSupplementalPublicationBase, dailyIndexationUsage, indexationBatchReady, validateManifest, validatePolicy } from './indexation-policy.mjs';
import { assertReviewedAdmissions, createIndexationReviewProposal, indexationCorpusHash, indexationPolicyHash, planReviewedIndexation, validateEditorialReviews } from './indexation-editorial-review.mjs';

const now = new Date('2026-10-31T17:00:00Z');
const baseline = { schemaVersion: 1, sourceSha: 'a'.repeat(40), paths: ['/'] };
const limits = { guides: 10, compressors: 100, tools: 400 };
const policy = { schemaVersion: 2, paused: false, timeZone: 'Europe/Paris', dailyLimits: limits, maximumTopicShare: 0.25, similarityThreshold: 0.82, containmentThreshold: 0.92 };
const candidates = ['guides', 'compressors', 'tools'].flatMap((group, g) => Array.from({ length: 500 }, (_, i) => {
 const token = `terme${String.fromCharCode(97 + g, 97 + Math.floor(i / 26), 97 + i % 26)}`;
 return { path: `/${{ guides: 'guides', compressors: 'compresseurs', tools: 'outils-pneumatiques' }[group]}/ref-${i}/`, family: group === 'guides' ? 'guides' : 'catalog', topic: `${group}:${i}`, signature: token,
  text: Array.from({ length: 35 }, (_, j) => token + String.fromCharCode(97 + j % 26)).join(' '), value: { contentHash: `${g}${i}`.padEnd(64, 'a') } };
}));
const firstPaths = [['guides', 5], ['compressors', 2], ['tools', 1]].flatMap(([group, count]) => candidates.filter(candidate => candidate.topic.startsWith(`${group}:`)).slice(0, count).map(candidate => candidate.path));
const batch = { openedAt: '2026-10-31T08:00:00Z', publicationDay: '2026-10-31', dailyLimits: { guides: 10, compressors: 30, tools: 60 }, paths: firstPaths };
const previous = { schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha: 'b'.repeat(40), builtAt: '2026-10-31T09:00:00Z', batches: [batch] };
const authorization = { publicationDay: '2026-10-31', sourceReleaseSha: previous.gitSha, authorizedAt: '2026-10-31T16:00:00Z', reason: 'Instruction humaine explicite pour un complément unique.' };
const authorizedPolicy = { ...policy, supplementalPublication: authorization };
const options = { candidates, baseline, previous, policy: authorizedPolicy, now, gitSha: 'c'.repeat(40) };
const firstReview = { publicationDay: '2026-10-31', sourceReleaseSha: 'd'.repeat(40), policyHash: 'e'.repeat(64), corpusHash: indexationCorpusHash(candidates), reviewedAt: '2026-10-31T07:00:00Z', status: 'approved', note: 'Première revue conservée.', pages: firstPaths.map(path => ({ path, contentHash: candidates.find(candidate => candidate.path === path).value.contentHash, decision: 'approved', note: 'Première admission.' })) };
const registry = { schemaVersion: 1, timeZone: 'Europe/Paris', reviews: [firstReview] };

describe('explicit single-use supplementary publication', () => {
 it('keeps normal consumed days closed and opens only the remaining 5/98/399 with explicit authorization', () => {
  expect(indexationBatchReady(previous, policy, now)).toBe(false);
  expect(indexationBatchReady(previous, authorizedPolicy, now)).toBe(true);
  const plan = planIndexation(options);
  expect(plan.released).toBe(502);
  expect(plan.limits).toEqual({ guides: 5, compressors: 98, tools: 399 });
  expect(dailyIndexationUsage(plan.manifest, now)).toEqual(limits);
  expect(plan.manifest.batches[0]).toEqual(batch);
  expect(plan.manifest.batches[1].dailyLimits).toEqual(limits);
  expect(plan.manifest.batches[1].supplementalPublication).toEqual(authorization);
  expect(plan.manifest.batches[1].paths.some(path => firstPaths.includes(path))).toBe(false);
  expect(validateManifest(plan.manifest, baseline, now)).toBe(plan.manifest);
  expect(() => assertSupplementalPublicationBase(previous, plan.manifest, authorizedPolicy)).not.toThrow();
 });
 it('requires a separate exact editorial review and permits only its approved subset', () => {
  const proposal = createIndexationReviewProposal(options, registry);
  expect(proposal.proposed).toBe(502);
  expect(proposal.supplementalPublication).toEqual(authorization);
  expect(planReviewedIndexation(options, registry).released).toBe(0);
  const pages = proposal.pages.map((page, index) => ({ path: page.path, contentHash: page.value.contentHash, decision: index === 0 ? 'approved' : 'deferred', note: 'Décision individuelle explicite.' }));
  const supplement = { publicationDay: '2026-10-31', sourceReleaseSha: previous.gitSha, policyHash: indexationPolicyHash(authorizedPolicy), corpusHash: indexationCorpusHash(candidates), reviewedAt: '2026-10-31T16:30:00Z', supplementalPublication: authorization, status: 'partial', note: 'Revue du complément.', pages };
  const reviewed = { ...registry, reviews: [firstReview, supplement] };
  expect(() => validateEditorialReviews(reviewed)).not.toThrow();
  const plan = planReviewedIndexation(options, reviewed);
  expect(plan.released).toBe(1);
  expect(plan.manifest.batches[1].paths).toEqual([pages[0].path]);
  expect(() => assertReviewedAdmissions(plan, previous, reviewed, authorizedPolicy, now)).not.toThrow();
  expect(indexationBatchReady(plan.manifest, authorizedPolicy, now)).toBe(false);
  expect(() => validateEditorialReviews({ ...registry, reviews: [firstReview, supplement, supplement] })).toThrow();
  expect(() => validateEditorialReviews({ ...registry, reviews: [supplement] })).toThrow();
 });
 it('fails closed on another release, another day, a future authorization or a second supplement', () => {
  for (const changes of [{ sourceReleaseSha: 'f'.repeat(40) }, { publicationDay: '2026-10-30', authorizedAt: '2026-10-30T16:00:00Z' }, { authorizedAt: '2026-10-31T18:00:00Z' }]) {
   expect(indexationBatchReady(previous, { ...policy, supplementalPublication: { ...authorization, ...changes } }, now)).toBe(false);
  }
  const plan = planIndexation(options);
  expect(indexationBatchReady({ ...plan.manifest, gitSha: previous.gitSha }, authorizedPolicy, now)).toBe(false);
  expect(planIndexation({ ...options, previous: plan.manifest }).released).toBe(0);
  const nextDay = new Date('2026-11-01T09:00:00Z');
  expect(indexationBatchReady(plan.manifest, authorizedPolicy, nextDay)).toBe(true);
  expect(planIndexation({ ...options, previous: plan.manifest, now: nextDay }).manifest.batches.at(-1).supplementalPublication).toBeUndefined();
 });
 it('rejects duplicate URLs, cumulative overflow and a missing or forged authorization at activation', () => {
  const plan = planIndexation(options);
  for (const mutate of [
   value => { delete value.batches[1].supplementalPublication; },
   value => { value.batches[1].paths[0] = firstPaths[0]; },
   value => { value.batches[1].paths.push('/compresseurs/extra/'); },
   value => { value.batches[1].supplementalPublication.sourceReleaseSha = 'f'.repeat(40); },
  ]) {
   const value = structuredClone(plan.manifest); mutate(value);
   expect(() => assertSupplementalPublicationBase(previous, value, authorizedPolicy)).toThrow();
  }
  const overflow = structuredClone(plan.manifest); overflow.batches[1].paths.push('/compresseurs/extra/');
  expect(() => validateManifest(overflow, baseline, now)).toThrow('Quota quotidien');
  const missing = structuredClone(plan.manifest); delete missing.batches[1].supplementalPublication;
  expect(() => validateManifest(missing, baseline, now)).toThrow('Jour de lot');
  expect(() => validatePolicy({ ...policy, supplementalPublication: { ...authorization, reason: '' } })).toThrow();
 });
 it('retains paused and offline protections and never transfers unused compressor slots to tools', () => {
  expect(planIndexation({ ...options, policy: { ...authorizedPolicy, paused: true } }).released).toBe(0);
  expect(planIndexation({ ...options, allowRelease: false }).released).toBe(0);
  const fewer = planIndexation({ ...options, candidates: candidates.filter(candidate => !candidate.path.startsWith('/compresseurs/')) });
  expect(dailyIndexationUsage(fewer.manifest, now)).toEqual({ guides: 10, compressors: 2, tools: 400 });
 });
});
