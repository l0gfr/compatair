import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { summarizeVerdicts } from './verdict-audit';
import type { ToolProfile } from './catalog';

describe('current catalog verdict audit', () => {
 it('includes incomplete evidence in the denominator and excludes parametric tools', () => {
  const base = { ...compressors[0], maxPressureBar: 8, dutyCycle: 1, confidence: 'A' as const, fadCurve: [{ pressureBar: 6, litersPerMinute: 300 }] };
  const original = tools.find(tool => tool.demandModel === 'fixed-flow')!;
  if (original.demandModel !== 'fixed-flow') throw new Error('Fixed tool required');
  const tool = { ...original, workingPressureBar: { min: 6, typical: 6, max: 6 }, airflowBasis: undefined, airflowLpm: { min: 100, typical: 100, max: 100 } };
  const average = { ...tool, airflowBasis: 'average' as const };
  const parametric = tools.find(tool => tool.demandModel === 'per-action') as ToolProfile;
  expect(summarizeVerdicts([base, { ...base, fadCurve: [] }, { ...base, dutyCycle: undefined }, { ...base, maxPressureBar: 5 }], [tool, average, parametric])).toEqual({
   pairCount: 8, summary: { continuous: 1, intermittent: 0, incompatible: 1, insufficient_data: 6 }, conclusive: { count: 2, percentage: 25 },
  });
 });
 it('keeps an empty audit finite', () => {
  expect(summarizeVerdicts([], []).conclusive).toEqual({ count: 0, percentage: 0 });
 });
});
