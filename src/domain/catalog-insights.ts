import type { Compressor, ToolProfile } from './catalog';
import { evaluateCompatibility, type CompatibilityVerdict } from './compatibility';

export type ToolVerdictSummary = {
	tool: ToolProfile;
	continuous: number;
	incompatible: number;
	insufficientData: number;
	verdictable: number;
};

export function getFadDocumentationSummary(compressors: Compressor[]) {
	return compressors.reduce((summary, compressor) => {
		if (compressor.fadCurve.length === 0) summary.withoutPoint += 1;
		else if (compressor.fadCurve.length === 1) summary.singlePoint += 1;
		else summary.multiplePoints += 1;
		return summary;
	}, { multiplePoints: 0, singlePoint: 0, withoutPoint: 0 });
}

export function getToolVerdictSummaries(compressors: Compressor[], tools: ToolProfile[]): ToolVerdictSummary[] {
	// Fixed-flow calculations depend on these tool fields. Product labels,
	// identifiers and documents remain attached to their own summary.
	const countsByDemand = new Map<string, Omit<ToolVerdictSummary, 'tool'>>();
	return tools.filter((tool) => tool.demandModel === 'fixed-flow').map((tool) => {
		const key = JSON.stringify([tool.airflowLpm.typical, tool.workingPressureBar.typical, tool.confidence, tool.airflowBasis]);
		const cached = countsByDemand.get(key);
		if (cached) return { tool, ...cached };
		const verdicts = compressors.map((compressor) => evaluateCompatibility(compressor, tool).verdict);
		const count = (verdict: CompatibilityVerdict) => verdicts.filter((item) => item === verdict).length;
		const continuous = count('continuous');
		const incompatible = count('incompatible');
		const counts = {
			continuous,
			incompatible,
			insufficientData: count('insufficient_data'),
			verdictable: continuous + incompatible,
		};
		countsByDemand.set(key, counts);
		return { tool, ...counts };
	});
}

export function getCatalogMetrics(compressors: Compressor[], tools: ToolProfile[]) {
	const toolVerdicts = getToolVerdictSummaries(compressors, tools);
	return {
		compressorCount: compressors.length,
		toolCount: tools.length,
		fixedFlowToolCount: toolVerdicts.length,
		compatibilityPageCount: toolVerdicts.reduce((total, item) => total + item.verdictable, 0),
		fadDocumentation: getFadDocumentationSummary(compressors),
		toolVerdicts,
	};
}
