import { describe, expect, it } from 'vitest';
import { assertReviewedAdmissions, createIndexationReviewProposal, indexationCorpusHash, indexationPolicyHash, planReviewedIndexation, validateEditorialReviews } from './indexation-editorial-review.mjs';
import { planIndexation } from './indexation-planner.mjs';

const now = new Date('2026-10-08T18:00:00Z');
const baseline = { schemaVersion: 1, sourceSha: 'a'.repeat(40), paths: ['/'] };
const previous = { schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha: baseline.sourceSha, builtAt: now.toISOString(), batches: [] };
const policy = { schemaVersion: 2, paused: false, timeZone: 'Europe/Paris', dailyLimits: { guides: 2, compressors: 2, tools: 6 }, maximumTopicShare: 0.25, similarityThreshold: 0.82, containmentThreshold: 0.92 };
const candidates = ['guides', 'compressors', 'tools'].flatMap((group, g) => Array.from({ length: 10 }, (_, i) => ({
	path: `/${{ guides: 'guides', compressors: 'compresseurs', tools: 'outils-pneumatiques' }[group]}/ref-${i}/`,
	family: group === 'guides' ? 'guides' : 'catalog', topic: `${group}:${i}`, signature: `${g}:${i}`,
	text: Array.from({ length: 35 }, (_, j) => `mot${String.fromCharCode(97 + g)}${String.fromCharCode(97 + i)}${String.fromCharCode(97 + j % 26)}`).join(' '),
	value: { contentHash: `${g}${i}`.padEnd(64, 'a') },
})));
const options = { candidates, baseline, previous, policy, now, gitSha: 'b'.repeat(40) };
const proposed = planIndexation(options).manifest.batches[0].paths;
const empty = { schemaVersion: 1, timeZone: 'Europe/Paris', reviews: [] };
const review = { publicationDay: '2026-10-08', sourceReleaseSha: previous.gitSha, policyHash: indexationPolicyHash(policy), corpusHash: indexationCorpusHash(candidates), reviewedAt: '2026-10-08T17:00:00Z', status: 'approved', note: 'Sources et comparaison du corpus contrôlées dans le dossier versionné.', pages: proposed.map(path => ({ path, contentHash: candidates.find(entry => entry.path === path).value.contentHash, decision: 'approved', note: 'Réponse autonome et sources contrôlées.' })) };
const registry = (changes = {}) => ({ ...empty, reviews: [{ ...structuredClone(review), ...changes }] });

describe('positive editorial admission at build and deployment', () => {
	it('provides the exact reading list without admitting pages or producing a release manifest', () => {
		const proposal = createIndexationReviewProposal(options);
		expect(proposal.proposalOnly).toBe(true);
		expect(proposal.pages.map(page => page.path).sort()).toEqual(proposed);
		expect(proposal.pages.every(page => page.status === 'proposed' && page.value.contentHash)).toBe(true);
		expect(proposal).not.toHaveProperty('manifest');
		expect(proposal).not.toHaveProperty('allowRelease');
		expect(proposal.corpusHash).toBe(indexationCorpusHash(candidates));
		expect(planReviewedIndexation(options, empty).released).toBe(0);
	});
	it('keeps proposed lists empty while paused or after the Paris day was consumed', () => {
		expect(createIndexationReviewProposal({ ...options, policy: { ...policy, paused: true } }).proposed).toBe(0);
		expect(createIndexationReviewProposal({ ...options, previous: planIndexation(options).manifest }).pages).toEqual([]);
	});
	it('requires a new editorial approval when the ceilings rise to 10/30/60', () => {
		const increased = { ...policy, dailyLimits: { guides: 10, compressors: 30, tools: 60 } };
		const result = planReviewedIndexation({ ...options, policy: increased }, registry());
		expect(result.released).toBe(0);
		expect(result.editorialReview.reason).toBe('stale-editorial-review');
		expect(planReviewedIndexation({ ...options, policy: increased }, empty).released).toBe(0);
	});
	it('keeps a deployable catalog release without opening admissions when no review exists', () => {
		const plan = planReviewedIndexation(options, empty);
		expect(plan.released).toBe(0);
		expect(plan.allowRelease).toBe(true);
		expect(plan.manifest.batches).toEqual(previous.batches);
		expect(plan.editorialReview.reason).toBe('missing-editorial-review');
		expect(plan.report.filter(page => page.status === 'queued').every(page => page.reason === 'missing-editorial-review')).toBe(true);
		expect(() => assertReviewedAdmissions(plan, previous, empty, policy, now)).not.toThrow();
	});
	it('admits the exact reviewed 2/2/6 selection and validates it independently', () => {
		const plan = planReviewedIndexation(options, registry());
		expect(plan.released).toBe(10);
		expect(plan.manifest.batches[0].paths).toEqual(proposed);
		expect(() => assertReviewedAdmissions(plan, previous, registry(), policy, now)).not.toThrow();
	});
	it('refuses the whole rejected proposal without selecting replacements', () => {
		const pages = structuredClone(review.pages);
		pages[0].decision = 'rejected';
		const plan = planReviewedIndexation(options, registry({ status: 'blocked', pages }));
		expect(plan.released).toBe(0);
		expect(plan.manifest.pending).toHaveLength(candidates.length);
		expect(plan.editorialReview.reason).toBe('editorial-review-rejected');
	});
	it.each([
		{ sourceReleaseSha: 'c'.repeat(40) },
		{ policyHash: 'd'.repeat(64) },
		{ publicationDay: '2026-10-07', reviewedAt: '2026-10-07T17:00:00Z' },
		{ reviewedAt: '2026-10-08T19:00:00Z' },
	])('refuses stale, wrong-day and future reviews: %j', changes => {
		expect(planReviewedIndexation(options, registry(changes)).released).toBe(0);
	});
	it('expires review at Paris midnight including the summer offset', () => {
		expect(planReviewedIndexation({ ...options, now: new Date('2026-10-08T22:00:00Z') }, registry()).released).toBe(0);
	});
	it('requires complete input fingerprints, not just unchanged editorial prose', () => {
		const changed = candidates.map(entry => entry.path === proposed[0] ? { ...entry, value: { contentHash: 'f'.repeat(64) } } : entry);
		const plan = planReviewedIndexation({ ...options, candidates: changed }, registry());
		expect(plan.released).toBe(0);
		expect(plan.editorialReview.reason).toBe('changed-editorial-corpus');
	});
	it('requires a fresh comparison when a neighboring page changes, even with the same selected pages', () => {
		const neighbor = candidates.find(entry => !proposed.includes(entry.path));
		const changed = candidates.map(entry => entry === neighbor ? { ...entry, value: { contentHash: 'f'.repeat(64) } } : entry);
		expect(planIndexation({ ...options, candidates: changed }).manifest.batches[0].paths).toEqual(proposed);
		expect(planReviewedIndexation({ ...options, candidates: changed }, registry())).toMatchObject({ released: 0, editorialReview: { reason: 'changed-editorial-corpus' } });
		expect(indexationCorpusHash([...candidates].reverse())).toBe(indexationCorpusHash(candidates));
		expect(() => indexationCorpusHash([{ path: '/guides/ref/', value: {} }])).toThrow('Empreinte');
	});
	it('refuses a changed selection, a partial review and an extra reviewed page', () => {
		for (const pages of [review.pages.slice(1), [...review.pages, { ...review.pages[0], path: '/guides/extra/' }]]) {
			expect(planReviewedIndexation(options, registry({ pages })).released).toBe(0);
		}
		const changed = candidates.map(entry => entry.path === proposed[0] ? { ...entry, blockedReason: 'missing-critical-source' } : entry);
		expect(planReviewedIndexation({ ...options, candidates: changed }, registry()).released).toBe(0);
	});
	it('preserves previous admissions during an ordinary rebuild and stays offline in previews', () => {
		const admitted = planReviewedIndexation(options, registry());
		const ordinary = planReviewedIndexation({ ...options, previous: admitted.manifest }, empty);
		expect(ordinary.manifest.batches).toEqual(admitted.manifest.batches);
		expect(() => assertReviewedAdmissions(ordinary, admitted.manifest, empty, policy, now)).not.toThrow();
		expect(planReviewedIndexation({ ...options, allowRelease: false }, registry())).toMatchObject({ released: 0, allowRelease: false });
	});
	it('rejects absent or divergent proof at deployment even if a planner admitted pages', () => {
		const ungated = planIndexation(options);
		expect(() => assertReviewedAdmissions(ungated, previous, empty, policy, now)).toThrow('sans revue');
		const admitted = planReviewedIndexation(options, registry());
		const wrongProof = structuredClone(admitted);
		wrongProof.editorialReview.pages[0].contentHash = 'f'.repeat(64);
		expect(() => assertReviewedAdmissions(wrongProof, previous, registry(), policy, now)).toThrow('sans revue');
		const wrongCorpus = structuredClone(admitted);
		wrongCorpus.editorialReview.corpusHash = 'f'.repeat(64);
		expect(() => assertReviewedAdmissions(wrongCorpus, previous, registry(), policy, now)).toThrow('sans revue');
		expect(() => assertReviewedAdmissions(admitted, previous, registry(), policy, new Date('2026-10-08T22:00:00Z'))).toThrow('sans revue');
	});
	it('validates decisions, paths, full hashes, source SHA and unique Paris dates', () => {
		const badPage = changes => registry({ pages: [{ ...review.pages[0], ...changes }] });
		for (const bad of [
			{ ...empty, timeZone: 'UTC' }, registry({ sourceReleaseSha: 'development' }), registry({ reviewedAt: 'bad' }),
			{ ...empty, reviews: [review, review] }, registry({ sourceReleaseSha: [review.sourceReleaseSha] }),
			badPage({ contentHash: [review.pages[0].contentHash] }), badPage({ path: '/quel-compresseur-pour/ref/' }),
			badPage({ path: '/guides/../../other/' }), badPage({ contentHash: 'abc' }), badPage({ decision: 'rejected' }),
			registry({ pages: [review.pages[0], review.pages[0]] }), registry({ status: 'blocked' }),
		]) expect(() => validateEditorialReviews(bad)).toThrow();
	});
});
