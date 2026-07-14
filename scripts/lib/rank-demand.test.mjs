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
		expect(report.priorities.categories).toEqual([{ category: 'Ponçage', demandCount: 12 }]);
		expect(JSON.stringify(report)).not.toContain('tool-b');
	});
});
