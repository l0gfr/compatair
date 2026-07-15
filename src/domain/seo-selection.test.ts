import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import type { CompatibilityResult } from './compatibility';
import { createCompressorCompatibilitySummary, createToolCompatibilitySummary, rankCompatibleCompressors } from './seo-selection';

const continuousResult = (availableFadLpm: number): CompatibilityResult => ({
	verdict: 'continuous', confidence: 'high', requiredFadLpm: 100, availableFadLpm,
	warnings: [], calculationVersion: '1.2.0',
});

describe('sélections SEO de compatibilité', () => {
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

	it('borne les résultats statiques des fiches outil et pages d’usage', () => {
		const tool = tools.find((item) => item.demandModel === 'fixed-flow')!;
		const summary = createToolCompatibilitySummary(compressors, tool);
		expect(summary.examples.length).toBeGreaterThanOrEqual(3);
		expect(summary.examples.length).toBeLessThanOrEqual(5);
		expect(summary.compatibleSelection.length + summary.incompatibleSelection.length).toBeLessThanOrEqual(25);
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
