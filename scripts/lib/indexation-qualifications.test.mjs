import { describe, expect, it } from 'vitest';
import { readFile } from 'node:fs/promises';
import { assertQualificationExtension, assertQualificationSources, currentQualifications, editorialSelection, emptyQualifications, qualificationContexts, qualificationId, qualificationRulesHash, validateQualifications } from './indexation-qualifications.mjs';
import { assertReviewedAdmissions, createIndexationReviewProposal, indexationCorpusHash, indexationPolicyHash, planReviewedIndexation } from './indexation-editorial-review.mjs';
import { planIndexation } from './indexation-planner.mjs';

const now = new Date('2026-11-01T09:00:00Z'), rulesHash = 'f'.repeat(64);
const policy = { schemaVersion: 2, paused: false, timeZone: 'Europe/Paris', dailyLimits: { guides: 10, compressors: 100, tools: 400 }, maximumTopicShare: 0.25, similarityThreshold: 0.82, containmentThreshold: 0.92 };
const baseline = { schemaVersion: 1, sourceSha: 'a'.repeat(40), paths: ['/'] };
const previous = { schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha: 'b'.repeat(40), builtAt: '2026-10-31T12:00:00Z', batches: [] };
const source = { url: 'https://example.org/manufacturer.pdf', sha256: 'd'.repeat(64) };
const sourceChecks = [{ ...source, checkedAt: '2026-11-01T08:00:00Z', httpStatus: 200, complete: true }];
const candidates = Array.from({ length: 5 }, (_, i) => ({ path: `/compresseurs/reference-${i}/`, family: 'catalog', topic: 'marque:compressors', signature: String(i),
 text: Array.from({ length: 35 }, (_, k) => `terme${String.fromCharCode(97 + i, 97 + k % 26)}`).join(' '),
 value: { contentHash: String(i).repeat(64), claims: [{ sources: [{ url: source.url }] }] } }));
const options = { candidates, baseline, previous, policy, now, rulesHash, gitSha: 'c'.repeat(40) };
const entry = { path: candidates[0].path, contentHash: candidates[0].value.contentHash, rulesHash, neighbors: [candidates[1].path],
 contextHash: qualificationContexts(candidates, rulesHash, policy)(candidates[0], [candidates[1].path]),
 sourceReleaseSha: previous.gitSha, reviewedAt: '2026-10-31T14:00:00Z', sourceDocuments: [source], note: 'Lecture primaire des lignes exactes, régime et pression contrôlés, voisins distincts.' };
const qualifications = { schemaVersion: 1, entries: [entry] };
const empty = { schemaVersion: 1, timeZone: 'Europe/Paris', reviews: [] };
const makeReview = (pages, overrides = {}) => ({ publicationDay: '2026-11-01', sourceReleaseSha: previous.gitSha, policyHash: indexationPolicyHash(policy), corpusHash: indexationCorpusHash(candidates), reviewedAt: '2026-11-01T08:30:00Z', status: 'partial', note: 'Dossier documentaire vérifié.', pages, sourceChecks, ...overrides });
function registryForProposal() {
 const pages = createIndexationReviewProposal(options, empty, qualifications).pages.map(page => ({ path: page.path, contentHash: page.value.contentHash, decision: page.path === entry.path ? 'approved' : 'deferred', note: 'Décision explicite.', ...(page.path === entry.path ? { qualificationId: qualificationId(entry) } : {}) }));
 return { ...empty, reviews: [makeReview(pages)] };
}

describe('reusable factual qualifications', () => {
 it('links a receipt to the complete product, neighboring group, explicit neighbors and rules', () => {
  expect(currentQualifications(candidates, qualifications, options).has(entry.path)).toBe(true);
  for (const changes of [{ rulesHash: 'e'.repeat(64) }, { policy: { ...policy, similarityThreshold: 0.9 } }]) expect(currentQualifications(candidates, qualifications, { ...options, ...changes }).size).toBe(0);
  for (const index of [0, 1, 2]) {
   const changed = structuredClone(candidates); changed[index].value.contentHash = 'e'.repeat(64);
   expect(currentQualifications(changed, qualifications, options).size).toBe(0);
  }
  expect(currentQualifications([...candidates, { ...candidates[2], path: '/compresseurs/nouveau/' }], qualifications, options).size).toBe(0);
  expect(currentQualifications(candidates.filter(candidate => candidate.path !== entry.neighbors[0]), qualifications, options).size).toBe(0);
  expect(currentQualifications(candidates.map(candidate => ({ ...candidate, editorialHold: true })), qualifications, options).size).toBe(0);
 });
 it('does not expire factual work on an unrelated release or quota change', () => {
  expect(currentQualifications(candidates, qualifications, { ...options, policy: { ...policy, dailyLimits: { guides: 2, compressors: 2, tools: 6 } } }).size).toBe(1);
  expect(currentQualifications([...candidates, { ...candidates[2], topic: 'autre-marque', path: '/compresseurs/autre/' }], qualifications, options).size).toBe(1);
 });
 it('requires all current complete source hashes and rejects a changed, missing, partial, old or future observation', () => {
  expect(() => assertQualificationSources(entry, sourceChecks, now)).not.toThrow();
  for (const checks of [undefined, [], [...sourceChecks, ...sourceChecks], [{ ...sourceChecks[0], sha256: 'e'.repeat(64) }], [{ ...sourceChecks[0], complete: false }], [{ ...sourceChecks[0], httpStatus: 404 }], [{ ...sourceChecks[0], checkedAt: '2026-11-01T10:00:00Z' }]]) {
   expect(() => assertQualificationSources(entry, checks, now)).toThrow();
  }
  expect(() => assertQualificationSources(entry, [{ ...sourceChecks[0], checkedAt: '2026-10-31T12:00:00Z' }], now)).toThrow();
 });
 it('never turns a qualification into an admission without the daily exact review', () => {
  expect(createIndexationReviewProposal(options, empty, qualifications).pages.find(page => page.path === entry.path).qualification.id).toBe(qualificationId(entry));
  expect(planReviewedIndexation(options, empty, qualifications).released).toBe(0);
  const registry = registryForProposal(), plan = planReviewedIndexation(options, registry, qualifications);
  expect(plan.released).toBe(1);
  expect(plan.manifest.batches[0].paths).toEqual([entry.path]);
  expect(() => assertReviewedAdmissions(plan, previous, registry, policy, now, qualifications, rulesHash)).not.toThrow();
  for (const modified of [[], [{ ...sourceChecks[0], sha256: 'e'.repeat(64) }], [{ ...sourceChecks[0], httpStatus: 429 }]]) {
   const bad = structuredClone(registry); bad.reviews[0].sourceChecks = modified;
   expect(() => planReviewedIndexation(options, bad, qualifications)).toThrow();
   expect(() => assertReviewedAdmissions(plan, previous, bad, policy, now, qualifications, rulesHash)).toThrow();
  }
  expect(() => assertReviewedAdmissions(plan, previous, registry, policy, now, emptyQualifications(), rulesHash)).toThrow();
  expect(() => assertReviewedAdmissions(plan, previous, registry, policy, now, qualifications, 'e'.repeat(64))).toThrow();
  const tampered = structuredClone(plan); delete tampered.editorialReview.pages[0].qualificationId;
  expect(() => assertReviewedAdmissions(tampered, previous, registry, policy, now, qualifications, rulesHash)).toThrow();
 });
 it('keeps paused, offline, consumed-day and policy guards for reusable reviews', () => {
  const registry = registryForProposal();
  const plan = planReviewedIndexation(options, registry, qualifications);
  for (const changes of [{ allowRelease: false }, { previous: plan.manifest }, { policy: { ...policy, paused: true } }, { policy: { ...policy, dailyLimits: { guides: 1, compressors: 1, tools: 1 } } }]) {
   expect(planReviewedIndexation({ ...options, ...changes }, registry, qualifications).released).toBe(0);
  }
 });
 it('rejects malformed, future, duplicate and incomplete receipts', () => {
  expect(() => validateQualifications(qualifications, now)).not.toThrow();
  for (const changes of [{ reviewedAt: '2026-11-02T10:00:00Z' }, { rulesHash: 'short' }, { neighbors: [] }, { neighbors: ['/compresseurs/missing/../../'] }, { sourceDocuments: [{ ...source, url: 'http://example.org/' }] }, { sourceDocuments: [source, source] }, { note: '' }, { path: '/quel-compresseur-pour/ref/' }]) {
   expect(() => validateQualifications({ schemaVersion: 1, entries: [{ ...entry, ...changes }] }, now)).toThrow();
  }
  expect(() => validateQualifications({ schemaVersion: 1, entries: [entry, entry] }, now)).toThrow();
  const missing = { ...entry, sourceDocuments: [{ ...source, url: 'https://example.org/autre.pdf' }] };
  expect(currentQualifications(candidates, { schemaVersion: 1, entries: [missing] }, options).size).toBe(0);
 });
 it('preserves receipts append-only and refuses removal, reordering or silent edits', () => {
  const later = { ...entry, reviewedAt: '2026-11-01T08:00:00Z', note: 'Nouvelle lecture explicite.' };
  expect(() => assertQualificationExtension(qualifications, { schemaVersion: 1, entries: [entry, later] }, now)).not.toThrow();
  for (const entries of [[], [later], [{ ...entry, note: 'Modification silencieuse.' }], [later, entry]]) {
   expect(() => assertQualificationExtension(qualifications, { schemaVersion: 1, entries }, now)).toThrow();
  }
 });
 it('hashes the actual source rules reproducibly', async () => {
  const hash = await qualificationRulesHash(process.cwd());
  expect(hash).toMatch(/^[a-f0-9]{64}$/);
  expect(await qualificationRulesHash(process.cwd())).toBe(hash);
  expect(JSON.parse(await readFile('config/indexation-policy.json', 'utf8')).dailyLimits).toEqual(policy.dailyLimits);
 });
});

describe('reservation selection across civil days', () => {
 const older = decisions => ({ ...empty, reviews: [makeReview(decisions, { publicationDay: '2026-10-31', reviewedAt: '2026-10-31T13:00:00Z', status: 'blocked' })] });
 const reserve = decision => ({ path: entry.path, contentHash: entry.contentHash, decision, note: 'Réserve exacte.' });
 it('excludes unchanged corrections and rejections from the next proposal without altering history', () => {
  for (const decision of ['needs-correction', 'rejected']) {
   const registry = older([reserve(decision)]), proposal = createIndexationReviewProposal(options, registry);
   expect(proposal.reserved).toBe(1);
   expect(proposal.pages.some(page => page.path === entry.path)).toBe(false);
   expect(planReviewedIndexation(options, registry).manifest.batches).toEqual(previous.batches);
  }
  expect(createIndexationReviewProposal(options, older([reserve('deferred')])).pages.some(page => page.path === entry.path)).toBe(true);
 });
 it('keeps an unresolved reserve when a later review only deferred the same URL', () => {
  const registry = older([reserve('needs-correction')]);
  registry.reviews.push(makeReview([reserve('deferred')], { publicationDay: '2026-10-31', reviewedAt: '2026-10-31T16:00:00Z', status: 'blocked' }));
  expect(editorialSelection(candidates, registry, emptyQualifications(), options).reservedPaths).toEqual([entry.path]);
 });
 it('reconsiders changed content or a new qualified resolution, never a stale receipt', () => {
  const registry = older([reserve('needs-correction')]);
  expect(editorialSelection(candidates, registry, qualifications, options).reservedPaths).toEqual([]);
  const stale = { schemaVersion: 1, entries: [{ ...entry, reviewedAt: '2026-10-30T14:00:00Z' }] };
  expect(editorialSelection(candidates, registry, stale, options).reservedPaths).toEqual([entry.path]);
  const changed = structuredClone(candidates); changed[0].value.contentHash = 'e'.repeat(64);
  expect(editorialSelection(changed, registry, emptyQualifications(), options).reservedPaths).toEqual([]);
 });
 it('does not let today own decisions change today proposal or reserve an already admitted page', () => {
  const today = { ...empty, reviews: [makeReview([reserve('needs-correction')], { status: 'blocked' })] };
  expect(createIndexationReviewProposal(options, today).pages.some(page => page.path === entry.path)).toBe(true);
  const published = planIndexation(options).manifest;
  const plan = planReviewedIndexation({ ...options, previous: published, now: new Date('2026-11-02T09:00:00Z') }, today);
  expect(plan.manifest.batches).toEqual(published.batches);
  expect(plan.manifest.heldPaths).toBeUndefined();
 });
});
