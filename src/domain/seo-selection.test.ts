import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import type { Compressor } from './catalog';
import type { CompatibilityResult } from './compatibility';
import { createCompressorCompatibilitySummary, createToolCompatibilitySummary, rankCompatibleCompressors } from './seo-selection';
import type { ToolCompatibilityMatch } from './seo-selection';

const continuousResult = (availableFadLpm: number): CompatibilityResult => ({
	verdict: 'continuous', confidence: 'high', requiredFadLpm: 100, availableFadLpm,
	warnings: [], calculationVersion: '1.4.4',
});

describe('sélections SEO de compatibilité', () => {
	it.each([undefined, ['particulier'] as const, ['professionnel'] as const])('conserve le tri global en concaténant les groupes déjà classés (%j)', (audiences) => {
		const matches: ToolCompatibilityMatch[] = [];
		const variants: Partial<Compressor>[] = [
			{ phase: undefined }, { phase: 'single-phase' }, { phase: 'three-phase' },
			{ mobility: undefined }, { mobility: 'mobile' }, { mobility: 'fixed' },
			{ phase: 'three-phase', mobility: 'fixed' },
			{ tankLiters: undefined }, { tankLiters: 0 }, { tankLiters: 50 },
			...['2026-09-01', '2026-10-01'].map(retrievedAt => ({ evidence: compressors[0].evidence.map(item => ({ ...item, retrievedAt })) })),
			{ model: 'Égalité' }, { model: 'Zulu' },
		];
		for (const verdict of ['continuous', 'intermittent'] as const) {
			for (const confidence of ['A', 'B', 'C', 'D'] as const) {
				for (const availableFadLpm of [undefined, 120, 150]) {
					for (const variant of variants) {
						const compressor = { ...compressors[0], ...variant, id: `fixture-${matches.length}`, confidence };
						matches.push({ compressor, result: { ...continuousResult(120), verdict, availableFadLpm } });
					}
				}
			}
		}
		const tied = matches[0];
		const cases = [
			[], matches, [...matches].reverse(),
			matches.filter(item => item.result.verdict === 'continuous'),
			matches.filter(item => item.result.verdict === 'intermittent'),
			[tied, { compressor: { ...tied.compressor }, result: { ...tied.result } }, tied],
		];
		for (const input of cases) {
			const originalOrder = [...input];
			const continuous = rankCompatibleCompressors(input.filter(item => item.result.verdict === 'continuous'), { audiences });
			const intermittent = rankCompatibleCompressors(input.filter(item => item.result.verdict === 'intermittent'), { audiences });
			const concatenated = [...continuous, ...intermittent];
			const globallyRanked = rankCompatibleCompressors(input, { audiences });
			expect(concatenated).toHaveLength(globallyRanked.length);
			for (const [index, match] of concatenated.entries()) expect(match).toBe(globallyRanked[index]);
			for (const [index, match] of input.entries()) expect(match).toBe(originalOrder[index]);
		}
	});

	it('ranks undocumented tanks after documented ones when the technical criteria are tied', () => {
		const base = compressors[0];
		const matches = [undefined, 50, 0].map((tankLiters, index) => ({ compressor: { ...base, id: `fixture-${index}`, tankLiters }, result: continuousResult(120) }));
		expect(rankCompatibleCompressors(matches).map(item => item.compressor.tankLiters)).toEqual([0, 50, undefined]);
	});
	it('privilégie un débit suffisant proche du besoin et une alimentation adaptée à un particulier', () => {
		const base = compressors[0];
		const accessible = { ...base, id: 'accessible', model: 'Accessible', phase: 'single-phase' as const, mobility: 'mobile' as const, tankLiters: 24 };
		const oversized = { ...base, id: 'oversized', model: 'Oversized', phase: 'single-phase' as const, mobility: 'mobile' as const, tankLiters: 50 };
		const industrial = { ...base, id: 'industrial', model: 'Industrial', phase: 'three-phase' as const, mobility: 'fixed' as const, tankLiters: 90 };
		const ranked = rankCompatibleCompressors([
			{ compressor: industrial, result: continuousResult(105) },
			{ compressor: oversized, result: continuousResult(150) },
			{ compressor: accessible, result: continuousResult(120) },
		], { audiences: ['particulier'] });

		expect(ranked.map((item) => item.compressor.id)).toEqual(['accessible', 'oversized', 'industrial']);
	});

	it('classe la qualité documentaire avant la proximité de débit et ignore la présence d’une offre', () => {
		const base = compressors[0];
		const complete = { ...base, id: 'complete', model: 'Complete', confidence: 'A' as const };
		const partial = { ...base, id: 'partial', model: 'Partial', confidence: 'B' as const };
		const ranked = rankCompatibleCompressors([
			{ compressor: partial, result: continuousResult(101) },
			{ compressor: complete, result: continuousResult(120) },
		], { availableProductIds: new Set(['partial']) });

		expect(ranked.map((item) => item.compressor.id)).toEqual(['complete', 'partial']);
	});

	it('borne les résultats statiques des fiches outil et pages d’usage', () => {
		const tool = tools.find((item) => item.demandModel === 'fixed-flow')!;
		const summary = createToolCompatibilitySummary(compressors, tool);
		expect(summary.examples.length).toBeGreaterThanOrEqual(3);
		expect(summary.examples.length).toBeLessThanOrEqual(5);
		expect(summary.compatibleSelection.length).toBeLessThanOrEqual(3);
		expect(summary.incompatibleSelection.length).toBeLessThanOrEqual(3);
		expect(summary.counts.compatible + summary.counts.incompatible + summary.counts.insufficient).toBe(compressors.length);
	});

	it('équilibre les exemples d’une fiche compresseur et conserve les totaux', () => {
		const summary = createCompressorCompatibilitySummary(compressors[0], tools);
		expect(summary.compatibleExamples.length).toBeLessThanOrEqual(5);
		expect(summary.incompatibleExamples.length).toBeLessThanOrEqual(3);
		expect(summary.counts.compatible + summary.counts.incompatible + summary.counts.insufficient).toBe(tools.length);
		expect(summary.categorySummary.reduce((total, item) => total + item.compatible + item.incompatible + item.insufficient, 0)).toBe(tools.length);
	});
});
