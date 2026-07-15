const percent = (numerator, denominator) => denominator > 0 ? Number((numerator / denominator * 100).toFixed(1)) : null;

export function rankDemand({ aggregates, catalog, verdicts, minimumCohort = 5, weightedCoverageTargetPercent = 80 }) {
	if (!Number.isInteger(minimumCohort) || minimumCohort < 5) throw new Error('minimumCohort doit être supérieur ou égal à 5');
	if (!Number.isFinite(weightedCoverageTargetPercent) || weightedCoverageTargetPercent <= 0 || weightedCoverageTargetPercent > 100) throw new Error('weightedCoverageTargetPercent doit être compris entre 0 et 100');
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
		const eligible = conclusive + coverage.insufficient_data;
		return {
			toolId,
			label: tool?.label ?? toolId,
			category: tool?.category ?? 'unknown',
			demandCount,
			continuousCompressorCount: coverage.continuous,
			conclusiveCompressorCount: conclusive,
			eligibleCompressorCount: eligible,
			insufficientDataCount: coverage.insufficient_data,
			coveragePercent: percent(conclusive, eligible),
			priorityScore: eligible > 0 ? Number((demandCount * coverage.insufficient_data / eligible).toFixed(3)) : 0,
		};
	}).sort((a, b) => b.priorityScore - a.priorityScore || b.demandCount - a.demandCount);
	const measurableTools = tools.filter((tool) => tool.eligibleCompressorCount > 0);
	const weightedConclusive = measurableTools.reduce((sum, tool) => sum + tool.demandCount * tool.conclusiveCompressorCount, 0);
	const weightedEligible = measurableTools.reduce((sum, tool) => sum + tool.demandCount * tool.eligibleCompressorCount, 0);
	const conclusive = measurableTools.reduce((sum, tool) => sum + tool.conclusiveCompressorCount, 0);
	const eligible = measurableTools.reduce((sum, tool) => sum + tool.eligibleCompressorCount, 0);
	const weightedCoveragePercent = percent(weightedConclusive, weightedEligible);
	const visibleDemandContributions = measurableTools.reduce((sum, tool) => sum + tool.demandCount, 0);
	const totalToolSelections = Object.values(aggregates.dimensions?.tools ?? {}).reduce((sum, count) => sum + (Number.isInteger(count) && count >= 0 ? count : 0), 0);
	const visibleDemandByTool = new Map(measurableTools.map((tool) => [tool.toolId, tool.demandCount]));
	const compressorById = new Map((catalog.compressors ?? []).map((compressor) => [compressor.id, compressor]));
	const compressorGaps = new Map();
	for (const pair of verdicts.pairs ?? []) {
		const demandCount = visibleDemandByTool.get(pair.toolId);
		if (pair.verdict !== 'insufficient_data' || !demandCount || typeof pair.compressorId !== 'string' || !Number.isFinite(pair.requiredFadLpm)) continue;
		const gap = compressorGaps.get(pair.compressorId) ?? { weightedInsufficientDemand: 0, missingPairCount: 0, toolIds: new Set() };
		gap.weightedInsufficientDemand += demandCount;
		gap.missingPairCount += 1;
		gap.toolIds.add(pair.toolId);
		compressorGaps.set(pair.compressorId, gap);
	}
	const compressorSourcePriorities = [...compressorGaps].map(([compressorId, gap]) => {
		const compressor = compressorById.get(compressorId);
		return {
			compressorId,
			label: compressor ? `${compressor.brand} ${compressor.model}` : compressorId,
			weightedInsufficientDemand: gap.weightedInsufficientDemand,
			missingPairCount: gap.missingPairCount,
			affectedVisibleToolCount: gap.toolIds.size,
		};
	}).sort((a, b) => b.weightedInsufficientDemand - a.weightedInsufficientDemand || b.affectedVisibleToolCount - a.affectedVisibleToolCount || a.compressorId.localeCompare(b.compressorId));
	return {
		schemaVersion: '1.0.0',
		minimumCohort,
		source: {
			aggregateSchemaVersion: aggregates.schemaVersion,
			catalogVersion: catalog.catalogVersion,
			verdictVersion: verdicts.verdictVersion,
		},
		totalContributions: aggregates.totalContributions,
		coverage: {
			status: weightedCoveragePercent === null ? 'insufficient_data' : 'measured',
			weightedCoveragePercent,
			unweightedCoveragePercent: percent(conclusive, eligible),
			targetPercent: weightedCoverageTargetPercent,
			targetStatus: weightedCoveragePercent === null ? 'insufficient_data' : weightedCoveragePercent >= weightedCoverageTargetPercent ? 'met' : 'below_target',
			gapPercentagePoints: weightedCoveragePercent === null ? null : Number(Math.max(0, weightedCoverageTargetPercent - weightedCoveragePercent).toFixed(1)),
			visibleDemandContributions,
			totalToolSelections,
			visibleDemandSharePercent: percent(visibleDemandContributions, totalToolSelections),
			measurableToolCount: measurableTools.length,
			excludedVisibleToolCount: tools.length - measurableTools.length,
			definition: 'Part des couples concluants, chaque outil étant pondéré par son nombre de contributions visibles après suppression des petites cohortes.',
		},
		priorities: {
			tools,
			compressorSources: compressorSourcePriorities,
			categories: visibleEntries(aggregates.dimensions?.categories).map(([category, demandCount]) => ({ category, demandCount })),
			needProfiles: visibleEntries(aggregates.dimensions?.needProfiles).map(([profile, demandCount]) => ({ profile, demandCount })),
		},
		suppressionRule: `Toute dimension comptant moins de ${minimumCohort} contributions est exclue du rapport.`,
		coverageBoundary: 'La couverture pondérée porte uniquement sur les sélections d’outils agrégées visibles et reliées à des verdicts. Elle ne représente pas les cohortes supprimées ni les requêtes sans identifiant exploitable.',
		priorityDefinition: 'Les outils sont classés par volume pondéré de couples insuffisants. Les compresseurs sont classés uniquement lorsque le besoin FAD de l’outil est connu mais que le couple reste insuffisant, afin de prioriser la recherche de débit restitué ou de pression côté compresseur.',
	};
}
