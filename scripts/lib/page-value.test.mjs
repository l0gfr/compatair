import { describe, expect, it } from 'vitest';
import { assessGuideValue, assessProductValue } from './page-value.mjs';
import { analyzeCandidates, consolidateEquivalentAnswers, productCandidate } from './indexation-planner.mjs';

// Synthetic fixtures exercise admission rules; these are not editorial content.
const source = 'https://manufacturer.test/manual.pdf';
const paragraphs = Array.from({ length: 150 }, (_, i) => `mot${String.fromCharCode(97 + Math.floor(i / 26))}${String.fromCharCode(97 + i % 26)}`).join(' ');
const article = `## Pression et débit\n${paragraphs}\n[Notice](${source}#page=3)\n## Limites et mesure\n[Vérifier le besoin](/calculateur/)`;
const policy = { similarityThreshold: .82, containmentThreshold: .92 };
const product = {
 id: 'fixture-a', slug: 'fixture-a', model: 'Fixture A', brand: 'Fixture', mpn: 'TEST-A',
 categoryId: 'impact-wrench', demandModel: 'fixed-flow', workingPressureBar: { typical: 6 }, airflowLpm: { typical: 100 },
 fieldSources: { workingPressureBar: ['manual'], airflowLpm: ['manual'] },
 evidence: [{ id: 'manual', sourceUrl: source, retrievedAt: '2026-09-27' }],
 editorial: { overview: 'Pression et débit documentés pour cet outil.', verifiedFacts: ['Le débit est de 100 litres par minute.', 'La pression publiée est de 6 bar.'], limitations: ['La durée de service ne figure pas dans la notice.'] },
};

describe('page-specific evidence and equivalent-answer consolidation', () => {
 it('accepts a precise PDF location but rejects an undeclared document or an empty answer', () => {
  const data = { title: 'Fixture', sources: [source] };
  expect(assessGuideValue(data, article).reasons).toEqual([]);
  expect(assessGuideValue(data, article.replace(source, 'https://unlisted.test/claim')).reasons).toContain('missing-in-text-source');
  expect(assessGuideValue(data, '## Sources\n[Notice](' + source + ')').reasons).toContain('answer-too-thin');
 });
 it('requires evidence for each critical field and visible limitations', () => {
  expect(assessProductValue(product, 'tool').reasons).toEqual([]);
  expect(assessProductValue({ ...product, fieldSources: { workingPressureBar: ['manual'] } }, 'tool').reasons).toContain('missing-critical-source:airflowLpm');
  expect(assessProductValue({ ...product, editorial: { ...product.editorial, limitations: [] } }, 'tool').reasons).toContain('missing-facts-or-limits');
 });
 it('consolidates only admitted equivalent answers while retaining distinct identities', () => {
  const clone = { ...product, id: 'fixture-b', slug: 'fixture-b', model: 'Fixture B', mpn: 'TEST-B' };
  const candidates = [product, clone].map(item => ({ ...productCandidate(item, 'tools'), value: assessProductValue(item, 'tool') }));
  const admitted = new Set(candidates.map(item => item.path));
  const result = consolidateEquivalentAnswers(analyzeCandidates(candidates, admitted, policy), admitted);
  expect(result.canonicalAliases).toEqual({ '/outils-pneumatiques/fixture-b/': '/outils-pneumatiques/fixture-a/' });
  expect(result.groups[0].members.map(item => item.identity.mpn)).toEqual(['TEST-A', 'TEST-B']);
  expect(consolidateEquivalentAnswers(analyzeCandidates(candidates, new Set(), policy), new Set()).canonicalAliases).toEqual({});
 });
 it('does not merge equal air demand when another documented technical fact differs', () => {
  const a = { ...product, specifications: [{ label: 'Couple', value: '300 Nm' }] };
  const b = { ...product, id: 'fixture-b', slug: 'fixture-b', specifications: [{ label: 'Couple', value: '500 Nm' }] };
  const candidates = [a, b].map(item => productCandidate(item, 'tools'));
  expect(analyzeCandidates(candidates, new Set(), policy).every(item => !item.reason)).toBe(true);
 });
});
