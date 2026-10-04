import { describe, expect, it } from 'vitest';
import { compressorSchema, toolProfileSchema, type Compressor, type ToolProfile } from './catalog';
import { evaluateCompatibility } from './compatibility';
import { getToolVerdictSummaries } from './catalog-insights';
import lowFlow from '../data/products/compressors/einhell-tc-ac-190-of-set';
import highFlow from '../data/products/compressors/atlas-copco-lz-10-10-bm';
import loaded from '../data/products/tools/cle-a-chocs-chicago-pneumatic-cp7732c';
import perAction from '../data/products/tools/agrafeuse-cloueuse-einhell-tc-pn-50';

function oracle(compressors: Compressor[], tools: ToolProfile[]) {
 return tools.filter(tool => tool.demandModel === 'fixed-flow').map(tool => {
  const verdicts = compressors.map(compressor => evaluateCompatibility(compressor, tool).verdict);
  const continuous = verdicts.filter(verdict => verdict === 'continuous').length;
  const incompatible = verdicts.filter(verdict => verdict === 'incompatible').length;
  return { tool, continuous, incompatible, insufficientData: verdicts.filter(verdict => verdict === 'insufficient_data').length, verdictable: continuous + incompatible };
 });
}

describe('catalog summary demand boundaries', () => {
 it('keeps exact pair counts for loaded, mean, idle and unqualified demand, including an empty compressor catalog', () => {
  const compressors = [lowFlow, highFlow].map(product => compressorSchema.parse(product));
  const tools = [toolProfileSchema.parse(loaded), ...(['average', 'free-speed', 'unqualified'] as const).map(airflowBasis => toolProfileSchema.parse({ ...loaded, id: `fixture-${airflowBasis}`, airflowBasis })), toolProfileSchema.parse(perAction)];
  for (const catalog of [compressors, []]) expect(getToolVerdictSummaries(catalog, tools)).toEqual(oracle(catalog, tools));
  expect(getToolVerdictSummaries(compressors, tools)[0]).toMatchObject({ continuous: 1, incompatible: 1, insufficientData: 0, verdictable: 2 });
  expect(getToolVerdictSummaries(compressors, tools).slice(1).every(summary => summary.insufficientData === 2 && summary.verdictable === 0)).toBe(true);
 });
});
