import type { Compressor, ToolProfile } from './catalog';
import { evaluateCompatibility, type CompatibilityResult } from './compatibility';
import type { GuideAudienceId } from './editorial-taxonomy';
import { latestEvidenceDate } from './provenance';

export const TOOL_DETAIL_EXAMPLE_LIMIT = 5;
export const USE_PAGE_COMPATIBLE_LIMIT = 3;
export const USE_PAGE_INCOMPATIBLE_LIMIT = 3;
export const COMPRESSOR_COMPATIBLE_EXAMPLE_LIMIT = 5;
export const COMPRESSOR_INCOMPATIBLE_EXAMPLE_LIMIT = 3;
export const STATIC_COMPATIBILITY_RESULT_LIMIT = 30;

export type ToolCompatibilityMatch = { compressor: Compressor; result: CompatibilityResult };
export type CompressorCompatibilityMatch = { tool: ToolProfile; result: CompatibilityResult };

type RankingOptions = {
	audiences?: readonly GuideAudienceId[];
	availableProductIds?: ReadonlySet<string>;
};

const confidenceRank = { A: 0, B: 1, C: 2, D: 3 } as const;
const verdictRank = { continuous: 0, intermittent: 1, incompatible: 2, insufficient_data: 3 } as const;
const isCompatible = (result: CompatibilityResult) => result.verdict === 'continuous' || result.verdict === 'intermittent';

function audiencePenalty(compressor: Compressor, audiences: readonly GuideAudienceId[]) {
	if (!audiences.includes('particulier')) return 0;
	return Number(compressor.phase === 'three-phase') * 2 + Number(compressor.mobility === 'fixed');
}

function compressorLabel(compressor: Compressor) {
	return `${compressor.brand} ${compressor.model} ${compressor.id}`;
}

export function rankCompatibleCompressors(matches: ToolCompatibilityMatch[], options: RankingOptions = {}) {
	const audiences = options.audiences ?? ['particulier', 'professionnel'];
	const availableProductIds = options.availableProductIds ?? new Set<string>();
	return [...matches].sort((a, b) => {
		const audienceDifference = audiencePenalty(a.compressor, audiences) - audiencePenalty(b.compressor, audiences);
		if (audienceDifference) return audienceDifference;
		const verdictDifference = verdictRank[a.result.verdict] - verdictRank[b.result.verdict];
		if (verdictDifference) return verdictDifference;
		const flowDifference = (a.result.availableFadLpm ?? Number.POSITIVE_INFINITY) - (b.result.availableFadLpm ?? Number.POSITIVE_INFINITY);
		if (flowDifference) return flowDifference;
		const tankDifference = a.compressor.tankLiters - b.compressor.tankLiters;
		if (tankDifference) return tankDifference;
		const availabilityDifference = Number(availableProductIds.has(b.compressor.id)) - Number(availableProductIds.has(a.compressor.id));
		if (availabilityDifference) return availabilityDifference;
		const confidenceDifference = confidenceRank[a.compressor.confidence] - confidenceRank[b.compressor.confidence];
		if (confidenceDifference) return confidenceDifference;
		const freshnessDifference = latestEvidenceDate(b.compressor).localeCompare(latestEvidenceDate(a.compressor));
		return freshnessDifference || compressorLabel(a.compressor).localeCompare(compressorLabel(b.compressor), 'fr');
	});
}

function rankIncompatibleCompressors(matches: ToolCompatibilityMatch[], options: RankingOptions = {}) {
	const audiences = options.audiences ?? ['particulier', 'professionnel'];
	return [...matches].sort((a, b) => {
		const audienceDifference = audiencePenalty(a.compressor, audiences) - audiencePenalty(b.compressor, audiences);
		if (audienceDifference) return audienceDifference;
		const aShortfall = a.result.requiredFadLpm !== undefined && a.result.availableFadLpm !== undefined
			? Math.max(0, a.result.requiredFadLpm - a.result.availableFadLpm)
			: Number.POSITIVE_INFINITY;
		const bShortfall = b.result.requiredFadLpm !== undefined && b.result.availableFadLpm !== undefined
			? Math.max(0, b.result.requiredFadLpm - b.result.availableFadLpm)
			: Number.POSITIVE_INFINITY;
		return aShortfall - bShortfall || compressorLabel(a.compressor).localeCompare(compressorLabel(b.compressor), 'fr');
	});
}

export function createToolCompatibilitySummary(
	compressors: Compressor[],
	tool: ToolProfile,
	options: RankingOptions = {},
) {
	const matches = compressors.map((compressor) => ({ compressor, result: evaluateCompatibility(compressor, tool) }));
	const continuous = rankCompatibleCompressors(matches.filter((item) => item.result.verdict === 'continuous'), options);
	const intermittent = rankCompatibleCompressors(matches.filter((item) => item.result.verdict === 'intermittent'), options);
	const compatible = rankCompatibleCompressors([...continuous, ...intermittent], options);
	const incompatible = rankIncompatibleCompressors(matches.filter((item) => item.result.verdict === 'incompatible'), options);
	const insufficient = matches
		.filter((item) => item.result.verdict === 'insufficient_data')
		.sort((a, b) => confidenceRank[a.compressor.confidence] - confidenceRank[b.compressor.confidence]
			|| latestEvidenceDate(b.compressor).localeCompare(latestEvidenceDate(a.compressor))
			|| compressorLabel(a.compressor).localeCompare(compressorLabel(b.compressor), 'fr'));

	const examples: ToolCompatibilityMatch[] = [];
	const add = (items: ToolCompatibilityMatch[], limit: number) => {
		for (const item of items.slice(0, limit)) if (!examples.some((example) => example.compressor.id === item.compressor.id)) examples.push(item);
	};
	add(continuous, 2);
	add(intermittent, 1);
	add(incompatible, 1);
	add(insufficient, 1);
	add([...compatible, ...incompatible, ...insufficient], TOOL_DETAIL_EXAMPLE_LIMIT - examples.length);

	return {
		matches,
		counts: {
			compatible: compatible.length,
			continuous: continuous.length,
			intermittent: intermittent.length,
			incompatible: incompatible.length,
			insufficient: insufficient.length,
		},
		examples: examples.slice(0, TOOL_DETAIL_EXAMPLE_LIMIT),
		compatibleSelection: compatible.slice(0, USE_PAGE_COMPATIBLE_LIMIT),
		incompatibleSelection: incompatible.slice(0, USE_PAGE_INCOMPATIBLE_LIMIT),
	};
}

function balancedCompatibleTools(matches: CompressorCompatibilityMatch[]) {
	const byCategory = Object.values(Object.groupBy(matches, (item) => item.tool.category));
	const rankedCategories = byCategory
		.filter((items): items is CompressorCompatibilityMatch[] => Boolean(items?.length))
		.sort((a, b) => b.length - a.length || a[0].tool.category.localeCompare(b[0].tool.category, 'fr'));
	const selected = rankedCategories.map((items) => [...items].sort((a, b) =>
		(b.result.requiredFadLpm ?? 0) - (a.result.requiredFadLpm ?? 0) || a.tool.label.localeCompare(b.tool.label, 'fr'))[0]);
	const remaining = matches
		.filter((item) => !selected.some((selectedItem) => selectedItem.tool.id === item.tool.id))
		.sort((a, b) => a.tool.category.localeCompare(b.tool.category, 'fr') || a.tool.label.localeCompare(b.tool.label, 'fr'));
	return [...selected, ...remaining].slice(0, COMPRESSOR_COMPATIBLE_EXAMPLE_LIMIT);
}

export function createCompressorCompatibilitySummary(compressor: Compressor, tools: ToolProfile[]) {
	const matches = tools.map((tool) => ({ tool, result: evaluateCompatibility(compressor, tool) }));
	const compatible = matches.filter((item) => isCompatible(item.result));
	const incompatible = matches.filter((item) => item.result.verdict === 'incompatible').sort((a, b) => {
		const aShortfall = a.result.requiredFadLpm !== undefined && a.result.availableFadLpm !== undefined
			? Math.max(0, a.result.requiredFadLpm - a.result.availableFadLpm)
			: Number.POSITIVE_INFINITY;
		const bShortfall = b.result.requiredFadLpm !== undefined && b.result.availableFadLpm !== undefined
			? Math.max(0, b.result.requiredFadLpm - b.result.availableFadLpm)
			: Number.POSITIVE_INFINITY;
		return aShortfall - bShortfall || a.tool.label.localeCompare(b.tool.label, 'fr');
	});
	const insufficient = matches.filter((item) => item.result.verdict === 'insufficient_data');
	const categorySummary = Object.values(Object.groupBy(matches, (item) => item.tool.category))
		.filter((items): items is CompressorCompatibilityMatch[] => Boolean(items?.length))
		.map((items) => ({
			category: items[0].tool.category,
			compatible: items.filter((item) => isCompatible(item.result)).length,
			incompatible: items.filter((item) => item.result.verdict === 'incompatible').length,
			insufficient: items.filter((item) => item.result.verdict === 'insufficient_data').length,
		}))
		.sort((a, b) => b.compatible - a.compatible || a.category.localeCompare(b.category, 'fr'));

	return {
		matches,
		counts: { compatible: compatible.length, incompatible: incompatible.length, insufficient: insufficient.length },
		compatibleExamples: balancedCompatibleTools(compatible),
		incompatibleExamples: incompatible.slice(0, COMPRESSOR_INCOMPATIBLE_EXAMPLE_LIMIT),
		categorySummary,
	};
}
