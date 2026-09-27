import type { Compressor, ToolProfile } from './catalog';
import { evaluateCompatibility, type CompatibilityVerdict } from './compatibility';

export function summarizeVerdicts(compressors: Compressor[], tools: ToolProfile[], evaluate = evaluateCompatibility) {
 const summary: Record<CompatibilityVerdict, number> = { continuous: 0, intermittent: 0, incompatible: 0, insufficient_data: 0 };
 const fixedTools = tools.filter(tool => tool.demandModel === 'fixed-flow');
 for (const compressor of compressors) for (const tool of fixedTools) summary[evaluate(compressor, tool).verdict] += 1;
 const pairCount = compressors.length * fixedTools.length;
 const conclusiveCount = pairCount - summary.insufficient_data;
 return { pairCount, summary, conclusive: { count: conclusiveCount, percentage: pairCount ? Number((100 * conclusiveCount / pairCount).toFixed(1)) : 0 } };
}
