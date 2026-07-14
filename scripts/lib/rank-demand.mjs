export function rankDemand({ aggregates, catalog, verdicts, minimumCohort = 5 }) {
	if (!Number.isInteger(minimumCohort) || minimumCohort < 5) throw new Error('minimumCohort doit être supérieur ou égal à 5');
	const toolById = new Map((catalog.tools ?? []).map((tool) => [tool.id, tool]));
	const verdictsByTool = new Map();
	for (const pair of verdicts.pairs ?? []) {
		const counts = verdictsByTool.get(pair.toolId) ?? { continuous: 0, incompatible: 0, insufficient_data: 0, intermittent: 0 };
		counts[pair.verdict] = (counts[pair.verdict] ?? 0) + 1;
		verdictsByTool.set(pair.toolId, counts);
	}
	const visibleEntries = (values = {}) => Object.entries(values)
		.filter(([, count]) => Number.isInteger(count) && count >= minimumCohort)
		.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
	const tools = visibleEntries(aggregates.dimensions?.tools).map(([toolId, demandCount]) => {
		const tool = toolById.get(toolId);
		const coverage = verdictsByTool.get(toolId) ?? { continuous: 0, incompatible: 0, insufficient_data: 0, intermittent: 0 };
		const conclusive = coverage.continuous + coverage.incompatible + coverage.intermittent;
		return {
			toolId,
			label: tool?.label ?? toolId,
			category: tool?.category ?? 'unknown',
			demandCount,
			continuousCompressorCount: coverage.continuous,
			conclusiveCompressorCount: conclusive,
			insufficientDataCount: coverage.insufficient_data,
			priorityScore: Number((demandCount / (1 + coverage.continuous)).toFixed(3)),
		};
	}).sort((a, b) => b.priorityScore - a.priorityScore || b.demandCount - a.demandCount);
	return {
		schemaVersion: '1.0.0',
		minimumCohort,
		source: {
			aggregateSchemaVersion: aggregates.schemaVersion,
			catalogVersion: catalog.catalogVersion,
			verdictVersion: verdicts.verdictVersion,
		},
		totalContributions: aggregates.totalContributions,
		priorities: {
			tools,
			categories: visibleEntries(aggregates.dimensions?.categories).map(([category, demandCount]) => ({ category, demandCount })),
			needProfiles: visibleEntries(aggregates.dimensions?.needProfiles).map(([profile, demandCount]) => ({ profile, demandCount })),
		},
		suppressionRule: `Toute dimension comptant moins de ${minimumCohort} contributions est exclue du rapport.`,
	};
}
