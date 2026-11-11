import { describe, expect, it } from 'vitest';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pcpEditorial } from '../../src/data/pcp-editorial.ts';
import { pcpReferences, pcpGuides } from '../../src/data/pcp.ts';
import { collectPcpEditorialCandidate, pcpEditorialCandidate, pcpEditorialInputPaths } from './pcp-editorial.mjs';
import { candidateFamily, candidateQuotaGroup, createIndexationPolicy, isNavigationPath } from './indexation-policy.mjs';
import { createIndexationReviewProposal, indexationPolicyHash, planReviewedIndexation } from './indexation-editorial-review.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const now = new Date('2026-11-11T18:00:00Z');
const inputs = Object.fromEntries(await Promise.all(pcpEditorialInputPaths.map(async path => [path, await readFile(join(root, path), 'utf8')])));
const fixture = () => structuredClone({ editorial: pcpEditorial, references: pcpReferences, guides: pcpGuides, inputs, now });

describe('reviewed PCP editorial hub', () => {
	it('collects the shared visible answer and all source provenance without admitting brief dossiers', async () => {
		const candidate = await collectPcpEditorialCandidate(root, { now });
		expect(candidate).toEqual(pcpEditorialCandidate(fixture()));
		expect(candidate).toMatchObject({ path: '/pcp/', family: 'guides', blockedReason: undefined });
		expect(candidate.value.reasons).toEqual([]);
		for (const paragraph of pcpEditorial.paragraphs) {
			expect(candidate.text).toContain(paragraph.text);
			expect(candidate.value.sources).toContain(paragraph.source.url);
		}
		for (const source of pcpReferences.flatMap(reference => reference.sources)) expect(candidate.value.sources).toContain(source.url);
		expect(candidate.value.nextSteps).toContain('/guides/pcp-lire-documentation-remplissage/');
		expect(candidate.text).not.toContain('grid-template-columns');
		expect(candidate.text).not.toContain('import BaseLayout');
	});

	it('charges only the exact reviewed hub to guide quotas without any navigation exemption', () => {
		expect(candidateFamily('/pcp/')).toBe('guides');
		expect(candidateQuotaGroup('/pcp/')).toBe('guides');
		expect(isNavigationPath('/pcp/')).toBe(false);
		const baseline = { paths: ['/'] }, closed = { batches: [] };
		expect(createIndexationPolicy(baseline, closed)('/pcp/')).toBe(false);
		const admitted = { batches: [{ paths: ['/pcp/'] }] };
		expect(createIndexationPolicy(baseline, admitted)('/pcp/')).toBe(true);
		for (const path of [...pcpReferences.map(reference => `/pcp/${reference.slug}/`), '/pcp/page/2/', '/pcp/unknown/']) {
			expect(candidateFamily(path)).toBeUndefined();
			expect(candidateQuotaGroup(path)).toBeUndefined();
			expect(isNavigationPath(path)).toBe(false);
			expect(createIndexationPolicy(baseline, admitted)(path)).toBe(false);
		}
	});

	it.each([
		value => { value.editorial.paragraphs[0].source.url = 'http://example.org/source'; },
		value => { value.editorial.paragraphs[0].source.url = 'https://user:password@example.org/source'; },
		value => { value.editorial.paragraphs[0].source.checkedAt = '2026-02-30'; },
		value => { value.editorial.paragraphs[0].source.checkedAt = '2026-11-12'; },
		value => { value.references[0].sources[0].url = 'javascript:alert(1)'; },
		value => { value.references[0].facts[0].sourceId = 'missing'; },
		value => { value.references[0].sources.push({ ...value.references[0].sources[0] }); },
		value => { value.references.push({ ...value.references[0] }); },
		value => { value.guides[0].slug = '../outside'; },
		value => { delete value.inputs['src/components/PcpReferenceCard.astro']; },
	])('fails closed on unresolved, unsafe, incomplete or future provenance %#', mutate => {
		const value = fixture(); mutate(value);
		expect(() => pcpEditorialCandidate(value)).toThrow();
	});

	it('fingerprints facts, source dates, shared copy and every rendering input even when comparison prose stays unchanged', () => {
		const candidate = pcpEditorialCandidate(fixture());
		const mutations = [
			value => { value.references[0].facts[0].value += ' (correction)'; },
			value => { value.references[0].sources[0].checkedAt = '2026-11-10'; },
			value => { value.editorial.paragraphs[0].source.checkedAt = '2026-11-10'; },
			...pcpEditorialInputPaths.map(path => value => { value.inputs[path] += '\n'; }),
		];
		for (const mutate of mutations) {
			const value = fixture(); mutate(value);
			const changed = pcpEditorialCandidate(value);
			expect(changed.text).toBe(candidate.text);
			expect(changed.value.contentHash).not.toBe(candidate.value.contentHash);
		}
		const value = fixture(); value.editorial.lead += ' Une correction documentaire est identifiée.';
		expect(pcpEditorialCandidate(value).value.contentHash).not.toBe(candidate.value.contentHash);
	});

	it('does not use rendering code to conceal an answer that is too thin', () => {
		const value = fixture();
		for (const field of Object.keys(value.editorial)) if (typeof value.editorial[field] === 'string') value.editorial[field] = 'Document PCP';
		value.editorial.paragraphs = [{ text: 'Une notice.', source: value.editorial.paragraphs[0].source }];
		value.references = [{ ...value.references[0], brand: 'Marque', model: 'Modèle', summary: 'Une référence.' }];
		value.guides = [{ slug: 'guide-pcp', title: 'Lire la notice', description: 'Une source.' }];
		for (const path of pcpEditorialInputPaths) value.inputs[path] = 'renderingcode '.repeat(1000);
		const candidate = pcpEditorialCandidate(value);
		expect(candidate.text).not.toContain('renderingcode');
		expect(candidate.blockedReason).toBe('answer-too-thin');
	});

	it('requires exact current review and invalidates it for a changed unpublished fact or template', () => {
		const candidate = pcpEditorialCandidate(fixture());
		const baseline = { schemaVersion: 1, sourceSha: 'a'.repeat(40), paths: ['/'] };
		const previous = { schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha: 'b'.repeat(40), builtAt: '2026-11-10T18:00:00Z', batches: [] };
		const policy = { schemaVersion: 2, paused: false, timeZone: 'Europe/Paris', dailyLimits: { guides: 10, compressors: 100, tools: 400 }, maximumTopicShare: 0.25, similarityThreshold: 0.82, containmentThreshold: 0.92 };
		const options = { candidates: [candidate], baseline, previous, policy, now, gitSha: 'c'.repeat(40) };
		const empty = { schemaVersion: 1, timeZone: 'Europe/Paris', reviews: [] };
		expect(planReviewedIndexation(options, empty).released).toBe(0);
		const proposal = createIndexationReviewProposal(options, empty);
		expect(proposal.pages.map(page => page.path)).toEqual(['/pcp/']);
		const registry = { ...empty, reviews: [{ publicationDay: proposal.publicationDay, sourceReleaseSha: previous.gitSha, policyHash: indexationPolicyHash(policy), corpusHash: proposal.corpusHash, reviewedAt: '2026-11-11T17:00:00Z', status: 'approved', note: 'Dossier et sources relus.', pages: [{ path: '/pcp/', contentHash: candidate.value.contentHash, decision: 'approved', note: 'Une réponse documentaire autonome.' }] }] };
		expect(planReviewedIndexation(options, registry).manifest.batches.at(-1).paths).toEqual(['/pcp/']);
		for (const mutate of [value => { value.references[0].facts[0].value += ' (correction)'; }, value => { value.inputs['src/pages/pcp/index.astro'] += '\n'; }]) {
			const value = fixture(); mutate(value);
			const result = planReviewedIndexation({ ...options, candidates: [pcpEditorialCandidate(value)] }, registry);
			expect(result.released).toBe(0);
			expect(result.editorialReview.reason).toBe('changed-editorial-corpus');
		}
	});
});
