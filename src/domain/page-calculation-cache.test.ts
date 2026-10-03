import { mkdtempSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { gzipSync, gunzipSync } from 'node:zlib';
import { afterEach, describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { PageCalculationCache } from './page-calculation-cache';
import { evaluateCompatibility } from './compatibility';
const roots: string[] = [];
afterEach(() => { for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true }); });
function fixture() {
 const directory = mkdtempSync(join(tmpdir(), 'compatair-page-results-')); roots.push(directory);
 const toolIds = ['einhell-tc-pn-50', 'agrafeuse-cloueuse-hymair-9021a', 'agrafeuse-cloueuse-hymair-cn45a', 'agrafeuse-cloueuse-hymair-cn90'];
 const fixtureTools = toolIds.map(id => {
  const tool = tools.find(product => product.id === id);
  if (!tool) throw new Error(`Missing cache fixture ${id}`);
  return tool;
 });
 return { compressors: structuredClone(compressors.slice(0, 3)), tools: structuredClone(fixtureTools), options: { directory, fingerprint: 'a'.repeat(64) } };
}
function evaluate(input: ReturnType<typeof fixture>) {
 const cache = new PageCalculationCache(input.compressors, input.tools, input.options);
 for (const compressor of input.compressors) for (const tool of input.tools) expect(JSON.stringify(cache.evaluate(compressor, tool))).toBe(JSON.stringify(evaluateCompatibility(compressor, tool)));
 cache.flush();
 return cache;
}
describe('page calculation reuse across catalog revisions', () => {
 it('reads legacy fast-compressed rows alongside new rows without recalculating', () => {
  const input = fixture(); evaluate(input);
  const rows = readdirSync(input.options.directory).filter(file => file.startsWith('row-'));
  expect(rows).toHaveLength(input.compressors.length);
  const path = join(input.options.directory, rows[0]);
  writeFileSync(path, gzipSync(gunzipSync(readFileSync(path)), { level: 1 }));
  expect(evaluate(input).stats).toMatchObject({ calculated: 0, reused: 12, invalidRows: 0 });
 });
 it('reuses complete rows and recalculates only a new tool, including after an intervening partial build', () => {
  const input = fixture();
  expect(evaluate(input).stats.calculated).toBe(12);
  const partial = new PageCalculationCache(input.compressors, input.tools, input.options);
  partial.evaluate(structuredClone(input.compressors[0]), structuredClone(input.tools[0])); partial.flush();
  expect(partial.stats).toMatchObject({ calculated: 0, reused: 1 });
  const added = { ...input.tools[0], id: 'fixture-new-tool' };
  input.tools.push(added);
  expect(evaluate(input).stats).toMatchObject({ calculated: 3, reused: 12, invalidRows: 0 });
  expect(evaluate(input).stats).toMatchObject({ calculated: 0, reused: 15 });
 });
 it.each(['compressor', 'tool', 'source', 'engine', 'new-compressor', 'reorder', 'remove'])('handles %s changes without altering results', kind => {
  const input = fixture(); evaluate(input);
  if (kind === 'compressor') input.compressors[0].maxPressureBar++;
  if (kind === 'tool') {
   expect(input.tools[0].demandModel).toBe('per-action');
   if (input.tools[0].demandModel !== 'per-action') throw new Error('Per-action cache fixture required');
   input.tools[0].airPerActionLiters++;
  }
  if (kind === 'source') input.tools[0].evidence[0].notes = 'Changed source context';
  if (kind === 'engine') input.options.fingerprint = 'b'.repeat(64);
  if (kind === 'new-compressor') input.compressors.push({ ...input.compressors[0], id: 'new-compressor' });
  if (kind === 'reorder') { input.tools.reverse(); input.compressors.reverse(); }
  if (kind === 'remove') input.tools.pop();
  const expected = { compressor: 4, tool: 3, source: 3, engine: 12, 'new-compressor': 4, reorder: 0, remove: 0 }[kind];
  expect(evaluate(input).stats.calculated).toBe(expected);
 });
 it.each(['corrupt-row', 'corrupt-columns', 'budget', 'symlink'])('falls back to exact calculation for %s', kind => {
  const input = fixture(); evaluate(input);
  const files = readdirSync(input.options.directory);
  if (kind === 'corrupt-row') writeFileSync(join(input.options.directory, files.find(file => file.startsWith('row-'))!), 'broken');
  if (kind === 'corrupt-columns') { writeFileSync(join(input.options.directory, files.find(file => file.startsWith('columns-'))!), '[]'); input.tools.push({ ...input.tools[0], id: 'extra' }); }
  if (kind === 'budget') Object.assign(input.options, { maxBytes: 1 });
  if (kind === 'symlink') { const target = join(input.options.directory, files.find(file => file.startsWith('row-'))!); const bytes = readFileSync(target); rmSync(target); const outside = mkdtempSync(join(tmpdir(), 'compatair-outside-')); roots.push(outside); const other = join(outside, 'fixture'); writeFileSync(other, bytes); symlinkSync(other, target); }
  expect(evaluate(input).stats.calculated).toBeGreaterThan(0);
 });
});
