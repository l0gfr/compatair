import { describe, expect, it } from 'vitest';
import { calculateSizing } from '../../server/air-sizing.mjs';
import { createMcpCore } from '../../server/mcp-core.mjs';
import { sizingInputSchema, sizeConfiguration, CALCULATION_VERSION } from './sizing';
import { evaluateCompatibility } from './compatibility';
import { compressors, tools } from '../data/catalog';

const tool = tools.find(item => item.id === 'einhell-tc-pe-150')!;
const reference = compressors.find(item => item.id === 'abac-atf-s-3-24')!;

describe('one deterministic air calculation across surfaces', () => {
 it('V4 MCP rejects unsupported custom compressor and burst controls explicitly', () => {
  const core = createMcpCore({ compressors: [reference], tools: [tool], catalogVersion: 'a'.repeat(64) }, undefined, { profile: 'legacy' });
  for (const extra of [{ cutInPressureBar: 4, cutOutPressureBar: 8 }, { cutInPressureBar: 9, cutOutPressureBar: 8 }, { supplyPressureBar: 5 }, { burstSeconds: 30 }]) {
   const reply: any = core.handle({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'check_compatibility', arguments: { compressorId: reference.id, toolId: tool.id, ...extra } } });
   expect(reply.result?.isError ?? Boolean(reply.error)).toBe(true);
  }
 });
 it('never invents endurance from sufficient FAD, tank size or a safety margin', () => {
  for (const availableFadLpm of [100, 125, 1000]) for (const tankLiters of [0, 500]) {
   const input = { demands: [{ id: 'fixture', flowLpm: 100, pressureBar: 6 }], compressor: { maxPressureBar: 8, availableFadLpm, tankLiters } };
   const result = sizeConfiguration(input);
   expect(result).toMatchObject({ verdict: 'insufficient_data', limitingFactor: 'data', confidence: 'low', calculationVersion: CALCULATION_VERSION });
   expect(result.warnings.join(' ')).toContain('endurance');
   expect(result).toEqual(calculateSizing(sizingInputSchema.parse(input)));
  }
 });
 it('retains definite pressure and flow failures even without endurance data', () => {
  const demands = [{ id: 'fixture', flowLpm: 100, pressureBar: 6 }];
  expect(sizeConfiguration({ demands, compressor: { maxPressureBar: 5, availableFadLpm: 1000 } })).toMatchObject({ verdict: 'incompatible', limitingFactor: 'pressure' });
  expect(sizeConfiguration({ demands, compressor: { maxPressureBar: 8, availableFadLpm: 99 } })).toMatchObject({ verdict: 'incompatible', limitingFactor: 'flow' });
 });
 it('distinguishes documented endurance from the optional flow margin at the boundary', () => {
  const demands = [{ id: 'fixture', flowLpm: 100, pressureBar: 6 }];
  expect(sizeConfiguration({ demands, compressor: { maxPressureBar: 8, availableFadLpm: 100, dutyCycle: 1 } }).verdict).toBe('continuous');
  expect(sizeConfiguration({ demands, compressor: { maxPressureBar: 8, availableFadLpm: 100, dutyCycle: .99 } })).toMatchObject({ verdict: 'incompatible', limitingFactor: 'duty_cycle' });
 });
 it('agrees with MCP for pressure, FAD reliability, cycle and margin boundaries', () => {
  for (const maxPressureBar of [5, 8]) for (const fad of [50, 100, 200]) for (const dutyCycle of [undefined, .5, 1]) for (const safetyMargin of [0, .25, 1]) {
   const compressor = { ...reference, maxPressureBar, fadCurve: [{ pressureBar: 6.3, litersPerMinute: fad }], dutyCycle };
   const core = createMcpCore({ compressors: [compressor], tools: [tool], catalogVersion: 'a'.repeat(64), verifiedAt: '2026-09-27' }, undefined, { profile: 'legacy' });
   const reply: any = core.handle({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'check_compatibility', arguments: { compressorId: compressor.id, toolId: tool.id, safetyMargin } } });
   const direct = evaluateCompatibility(compressor, tool, { safetyMargin });
   expect(reply.result.structuredContent.compatibility.engine_verdict).toBe(direct.verdict);
   expect(reply.result.structuredContent.compatibility.limitations).toEqual(direct.warnings);
   expect(reply.result.structuredContent.engineVersion).toBe(CALCULATION_VERSION);
  }
 });
 it('rejects excessive demands on both browser and MCP boundaries', () => {
  const core = createMcpCore({ compressors: [], tools: [], catalogVersion: 'a'.repeat(64) }, undefined, { profile: 'legacy' });
  for (const demand of [{ model: 'fixed-flow', flowLpm: 10_001, pressureBar: 6 }, { model: 'per-action', litersPerAction: 1, actionsPerMinute: 10_001, pressureBar: 6 }, { model: 'inflation', volumeLiters: 1, initialPressureBar: 0, targetPressureBar: 6, targetMinutes: 1_441 }]) {
   expect(() => sizingInputSchema.parse({ demands: [{ id: 'fixture', ...demand }] })).toThrow();
   const reply: any = core.handle({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'size_compressor', arguments: { demands: [demand] } } });
   expect(reply.result?.isError ?? Boolean(reply.error)).toBe(true);
  }
 });
 it('does not treat an insufficient lower bound as proof of incompatibility', () => {
  const input = { demands: [{ id: 'fixture', flowLpm: 100, pressureBar: 6 }], compressor: { maxPressureBar: 8, availableFadLpm: 90, availableFadBasis: 'higher-pressure-bound' as const, dutyCycle: 1 } };
  expect(sizeConfiguration(input)).toMatchObject({ verdict: 'insufficient_data', limitingFactor: 'data' });
  expect(sizeConfiguration({ ...input, compressor: { ...input.compressor, availableFadBasis: 'exact' } }).verdict).toBe('incompatible');
 });
 it('uses only receiver air above the required pressure and honors the actual cutoff', () => {
  const input = { demands: [{ id: 'fixture', flowLpm: 200, pressureBar: 6, dutyFactor: .3 }], compressor: { maxPressureBar: 10, availableFadLpm: 150, dutyCycle: 1, tankLiters: 50, cutInPressureBar: 4, cutOutPressureBar: 8 } };
  expect(sizeConfiguration(input)).toMatchObject({ verdict: 'insufficient_data', limitingFactor: 'pressure', usableTankAirLiters: 100 });
  expect(sizeConfiguration({ ...input, compressor: { ...input.compressor, cutOutPressureBar: 5 } })).toMatchObject({ verdict: 'incompatible', limitingFactor: 'pressure' });
 });

});
