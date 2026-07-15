import { describe, expect, it } from 'vitest';
import { rankDemand } from './rank-demand.mjs';

describe('demand prioritization', () => {
	it('suppresses small cohorts and prioritizes demanded under-covered tools', () => {
		const report = rankDemand({
			aggregates: { schemaVersion: '1.0.0', totalContributions: 20, dimensions: { tools: { 'tool-a': 12, 'tool-b': 4 }, categories: { Ponçage: 12, Peinture: 4 }, needProfiles: { '200-399@6-7.9': 9 } } },
			catalog: { catalogVersion: 'catalog', tools: [{ id: 'tool-a', label: 'Outil A', category: 'Ponçage' }, { id: 'tool-b', label: 'Outil B', category: 'Peinture' }] },
			verdicts: { verdictVersion: 'verdicts', pairs: [{ toolId: 'tool-a', verdict: 'continuous' }, { toolId: 'tool-a', verdict: 'insufficient_data' }] },
		});
		expect(report.priorities.tools).toHaveLength(1);
		expect(report.priorities.tools[0]).toMatchObject({ toolId: 'tool-a', demandCount: 12, continuousCompressorCount: 1, insufficientDataCount: 1 });
		expect(report.priorities.deficits).toHaveLength(0);
		expect(report.coverage).toMatchObject({ status: 'measured', weightedCoveragePercent: 50, unweightedCoveragePercent: 50, targetPercent: 80, targetStatus: 'below_target', gapPercentagePoints: 30, visibleDemandContributions: 12, totalToolSelections: 16, visibleDemandSharePercent: 75 });
		expect(report.priorities.categories).toEqual([{ category: 'Ponçage', demandCount: 12 }]);
		expect(JSON.stringify(report)).not.toContain('tool-b');
	});

	it('weights each tool coverage by observed demand and ranks recoverable missing pairs', () => {
		const report = rankDemand({
			aggregates: { schemaVersion: '1.0.0', totalContributions: 100, dimensions: { tools: { popular: 70, niche: 30 } } },
			catalog: { catalogVersion: 'catalog', compressors: Array.from({ length: 10 }, (_, index) => ({ id: `c-${index}`, brand: 'Marque', model: `C${index}` })), tools: [{ id: 'popular', label: 'Populaire' }, { id: 'niche', label: 'Niche' }] },
			verdicts: { verdictVersion: 'verdicts', pairs: [
				...Array.from({ length: 8 }, (_, index) => ({ compressorId: `c-${index}`, toolId: 'popular', verdict: 'continuous', requiredFadLpm: 100 })),
				...Array.from({ length: 2 }, (_, index) => ({ compressorId: `c-${index + 8}`, toolId: 'popular', verdict: 'insufficient_data', requiredFadLpm: 100 })),
				...Array.from({ length: 2 }, (_, index) => ({ compressorId: `c-${index}`, toolId: 'niche', verdict: 'continuous', requiredFadLpm: 100 })),
				...Array.from({ length: 8 }, (_, index) => ({ compressorId: `c-${index + 2}`, toolId: 'niche', verdict: 'insufficient_data', requiredFadLpm: 100 })),
			] },
		});
		expect(report.coverage).toMatchObject({ weightedCoveragePercent: 62, unweightedCoveragePercent: 50, targetStatus: 'below_target', visibleDemandSharePercent: 100 });
		expect(report.priorities.tools.map((tool) => tool.toolId)).toEqual(['niche', 'popular']);
		expect(report.priorities.deficits).toHaveLength(10);
		expect(report.priorities.deficits[0]).toMatchObject({ rank: 1, toolId: 'popular', demandCount: 70, requiredFadLpm: 100 });
		expect(report.priorities.compressorSources[0]).toMatchObject({ compressorId: 'c-8', weightedInsufficientDemand: 100, missingPairCount: 2, affectedVisibleToolCount: 2 });
	});

	it('caps the actionable deficit list at twenty pairs', () => {
		const report = rankDemand({
			aggregates: { schemaVersion: '1.0.0', totalContributions: 50, dimensions: { tools: { popular: 50 } } },
			catalog: { catalogVersion: 'catalog', compressors: Array.from({ length: 30 }, (_, index) => ({ id: `c-${index}`, brand: 'Marque', model: `C${index}` })), tools: [{ id: 'popular', label: 'Populaire', category: 'Atelier' }] },
			verdicts: { verdictVersion: 'verdicts', pairs: Array.from({ length: 30 }, (_, index) => ({ id: `c-${index}--popular`, compressorId: `c-${index}`, toolId: 'popular', verdict: 'insufficient_data', limitingFactor: 'data', requiredFadLpm: 250 })) },
		});
		expect(report.priorities.deficits).toHaveLength(20);
		expect(report.priorities.candidateDeficitCount).toBe(30);
		expect(report.priorities.deficits.at(-1)?.rank).toBe(20);
	});

	it('refuses to fabricate coverage when visible demand has no matching verdicts', () => {
		const report = rankDemand({
			aggregates: { schemaVersion: '1.0.0', totalContributions: 7, dimensions: { tools: { unknown: 7 } } },
			catalog: { catalogVersion: 'catalog', tools: [] },
			verdicts: { verdictVersion: 'verdicts', pairs: [] },
		});
		expect(report.coverage).toMatchObject({ status: 'insufficient_data', weightedCoveragePercent: null, targetStatus: 'insufficient_data', excludedVisibleToolCount: 1 });
	});
});
