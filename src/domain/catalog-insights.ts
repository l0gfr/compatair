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
	return tools.filter((tool) => tool.demandModel === 'fixed-flow').map((tool) => {
		const verdicts = compressors.map((compressor) => evaluateCompatibility(compressor, tool).verdict);
		const count = (verdict: CompatibilityVerdict) => verdicts.filter((item) => item === verdict).length;
		const continuous = count('continuous');
		const incompatible = count('incompatible');
		return {
			tool,
			continuous,
			incompatible,
			insufficientData: count('insufficient_data'),
			verdictable: continuous + incompatible,
		};
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
