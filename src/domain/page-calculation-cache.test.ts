import { mkdtempSync, readFileSync, readdirSync, rmSync, statSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { gzipSync, gunzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { afterEach, describe, expect, it } from 'vitest';
import { compressorSchema, toolProfileSchema } from './catalog';
import compressor1 from '../data/products/compressors/abac-atf-10-10-bm';
import compressor2 from '../data/products/compressors/abac-atf-10-10-pp';
import compressor3 from '../data/products/compressors/abac-atf-2-10-bm';
import tool1 from '../data/products/tools/agrafeuse-cloueuse-einhell-tc-pn-50';
import tool2 from '../data/products/tools/agrafeuse-cloueuse-hymair-9021a';
import tool3 from '../data/products/tools/agrafeuse-cloueuse-hymair-cn45a';
import tool4 from '../data/products/tools/agrafeuse-cloueuse-hymair-cn90';
import loadedTool from '../data/products/tools/cle-a-chocs-chicago-pneumatic-cp7732c';
import lowFlowCompressor from '../data/products/compressors/einhell-tc-ac-190-of-set';
import highFlowCompressor from '../data/products/compressors/atlas-copco-lz-10-10-bm';
import fixedTool2 from '../data/products/tools/cle-a-chocs-einhell-tc-pw-340';
import fixedTool3 from '../data/products/tools/pistolet-peinture-lvlp-metabo-fsp-600';
import fixedTool4 from '../data/products/tools/cle-a-chocs-chicago-pneumatic-cp7748';
import variableTool from '../data/products/tools/pistolet-gonflage-manometre-einhell-4137000';
import { PageCalculationCache } from './page-calculation-cache';
import { evaluateCompatibility } from './compatibility';
const roots: string[] = [];
afterEach(() => { for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true }); });
function fixture() {
 const directory = mkdtempSync(join(tmpdir(), 'compatair-page-results-')); roots.push(directory);
 return { compressors: [compressor1, compressor2, compressor3].map(product => compressorSchema.parse(product)),
  tools: [loadedTool, fixedTool2, fixedTool3, fixedTool4].map(product => toolProfileSchema.parse(product)), options: { directory, fingerprint: 'a'.repeat(64) } };
}
function evaluate(input: ReturnType<typeof fixture>) {
 const cache = new PageCalculationCache(input.compressors, input.tools, input.options);
 for (const compressor of input.compressors) for (const tool of input.tools) expect(JSON.stringify(cache.evaluate(compressor, tool))).toBe(JSON.stringify(evaluateCompatibility(compressor, tool)));
 cache.flush();
 return cache;
}
describe('page calculation reuse across catalog revisions', () => {
 it('keeps average, idle, unqualified and variable demand outside the matrix, including changed cloned evidence', () => {
  const input = fixture();
  const independent = [
   ...(['average', 'free-speed', 'unqualified'] as const).map(airflowBasis => toolProfileSchema.parse({ ...loadedTool, id: `fixture-${airflowBasis}`, airflowBasis })),
   toolProfileSchema.parse(variableTool),
  ];
  input.tools.push(...independent);
  const cache = evaluate(input);
  expect(cache.stats).toMatchObject({ calculated: 12, independentCalculated: 4, independentHits: 12 });
  for (const tool of independent) {
   expect(cache.evaluate(input.compressors[0], tool).verdict).toBe('insufficient_data');
   expect(cache.evaluate(input.compressors[1], tool)).toBe(cache.evaluate(input.compressors[2], tool));
  }
  const changed = toolProfileSchema.parse({ ...independent[0], airflowBasis: undefined });
  const result = cache.evaluate(input.compressors[0], changed);
  expect(result).toEqual(evaluateCompatibility(input.compressors[0], changed));
  expect(result.warnings).not.toContain('Débit moyen seul : cycle et débit en charge requis.');
  const changedVolume = toolProfileSchema.parse({ ...independent[3], demandExplanation: 'Autre condition documentée pour cette révision.' });
  expect(cache.evaluate(input.compressors[0], changedVolume).warnings).toEqual(['Autre condition documentée pour cette révision.']);
 });
 it('shares compressor-independent insufficient data once per exact tool without filling disk matrix columns', () => {
  const input = fixture();
  const independent = [tool1, tool2, tool3, tool4].map(product => toolProfileSchema.parse(product));
  input.tools.push(...independent);
  const first = evaluate(input);
  expect(first.stats).toMatchObject({ calculated: 12, independentCalculated: 4, independentHits: 12 });
  const diskColumns = JSON.parse(readFileSync(join(input.options.directory, readdirSync(input.options.directory).find(file => file.startsWith('columns-'))!), 'utf8'));
  expect(diskColumns).toHaveLength(4);
  for (const tool of independent) {
   const actual = first.evaluate(structuredClone(input.compressors[0]), structuredClone(tool));
   expect(actual).toEqual(evaluateCompatibility(input.compressors[0], tool));
   expect(Object.isFrozen(actual.warnings)).toBe(true);
  }
  expect(evaluate(input).stats).toMatchObject({ calculated: 0, reused: 12, independentCalculated: 4, independentHits: 12 });
 });
 it('round-trips conclusive numeric results, negative margins, interpolated FAD and conservative pressure bounds', () => {
  const input = fixture();
  input.compressors = [lowFlowCompressor, highFlowCompressor].map(product => compressorSchema.parse(product));
  input.tools = [toolProfileSchema.parse(loadedTool)];
  const expected = input.compressors.map(compressor => evaluateCompatibility(compressor, input.tools[0]));
  expect(expected[0]).toMatchObject({ verdict: 'incompatible', availableFadBasis: 'interpolated' });
  expect(expected[0].marginPercent).toBeLessThan(0);
  expect(expected[1]).toMatchObject({ verdict: 'continuous', availableFadBasis: 'higher-pressure-bound', availableFadReferencePressureBar: 7 });
  expect(evaluate(input).stats).toMatchObject({ calculated: 2, reused: 0 });
  expect(evaluate(input).stats).toMatchObject({ calculated: 0, reused: 2, invalidRows: 0 });
 });
 it('reads legacy object rows alongside packed rows without recalculating', () => {
  const input = fixture(); evaluate(input);
  const rows = readdirSync(input.options.directory).filter(file => file.startsWith('row-'));
  expect(rows).toHaveLength(input.compressors.length);
  const path = join(input.options.directory, rows[0]);
  const envelope = JSON.parse(gunzipSync(readFileSync(path)).toString());
  const compressor = input.compressors.find(product => rows[0] === `row-${createHash('sha256').update(JSON.stringify(product)).digest('hex')}.json.gz`)!;
  const data = { columns: envelope.data.columns, values: input.tools.map(tool => evaluateCompatibility(compressor, tool)), indexes: [0, 1, 2, 3] };
  writeFileSync(path, gzipSync(JSON.stringify({ digest: createHash('sha256').update(JSON.stringify(data)).digest('hex'), data }), { level: 1 }));
  expect(evaluate(input).stats).toMatchObject({ calculated: 0, reused: 12, invalidRows: 0 });
 });
 it('drops obsolete values when a previously qualified tool no longer needs a compressor', () => {
  const input = fixture(); evaluate(input);
  const old = input.tools[0];
  input.tools[0] = toolProfileSchema.parse({ ...old, airflowBasis: 'average' });
  expect(evaluate(input).stats).toMatchObject({ calculated: 0, reused: 9, independentHits: 3 });
  for (const file of readdirSync(input.options.directory).filter(name => name.startsWith('row-'))) {
   const { data } = JSON.parse(gunzipSync(readFileSync(join(input.options.directory, file))).toString());
   expect(data.indexes).toHaveLength(3);
   expect(new Set(data.indexes).size).toBe(data.values.length);
   expect(data.warnings.flat()).not.toContain('Débit moyen seul : cycle et débit en charge requis.');
  }
  expect(evaluate(input).stats).toMatchObject({ calculated: 0, reused: 9, independentHits: 3, invalidRows: 0 });
 });
 it.each(['warning-index', 'negative-demand', 'unknown-field', 'extra-tuple-item', 'non-finite'])('rejects a checksum-valid malformed packed row: %s', kind => {
  const input = fixture(); evaluate(input);
  const path = join(input.options.directory, readdirSync(input.options.directory).find(file => file.startsWith('row-'))!);
  const { data } = JSON.parse(gunzipSync(readFileSync(path)).toString());
  expect(data.format).toBe(2);
  if (kind === 'warning-index') data.values[0][9] = data.warnings.length;
  if (kind === 'negative-demand') data.values[0][3] = -1;
  if (kind === 'unknown-field') data.inferred = true;
  if (kind === 'extra-tuple-item') data.values[0].push(0);
  // JSON itself cannot represent infinity. A string must never become a number.
  if (kind === 'non-finite') data.values[0][6] = 'Infinity';
  writeFileSync(path, gzipSync(JSON.stringify({ digest: createHash('sha256').update(JSON.stringify(data)).digest('hex'), data })));
  expect(evaluate(input).stats).toMatchObject({ calculated: 4, reused: 8, invalidRows: 1 });
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
 it('still reuses validated old rows after new writes reach the disk budget', () => {
  const input = fixture(); evaluate(input);
  const bytes = readdirSync(input.options.directory).reduce((total, file) => total + statSync(join(input.options.directory, file)).size, 0);
  input.tools.push({ ...input.tools[0], id: 'new-tool-over-budget' });
  Object.assign(input.options, { maxBytes: bytes + 1 });
  expect(evaluate(input).stats).toMatchObject({ calculated: 3, reused: 12, invalidRows: 0, writable: false });
  const after = readdirSync(input.options.directory).reduce((total, file) => total + statSync(join(input.options.directory, file)).size, 0);
  expect(after).toBeLessThanOrEqual(bytes + 1);
 });
 it('retains old columns during a partial catalog expansion and prunes them after all retained rows migrate', () => {
  const input = fixture(); evaluate(input);
  const oldColumns = readdirSync(input.options.directory).find(file => file.startsWith('columns-'))!;
  input.tools.push({ ...input.tools[0], id: 'new-tool-for-column-migration' });
  const partial = new PageCalculationCache(input.compressors, input.tools, input.options);
  for (const tool of input.tools) partial.evaluate(input.compressors[0], tool);
  partial.flush();
  expect(readdirSync(input.options.directory)).toContain(oldColumns);
  expect(readdirSync(input.options.directory).filter(file => file.startsWith('columns-'))).toHaveLength(2);
  expect(evaluate(input).stats).toMatchObject({ calculated: 2, reused: 13, invalidRows: 0 });
  expect(readdirSync(input.options.directory)).not.toContain(oldColumns);
  expect(readdirSync(input.options.directory).filter(file => file.startsWith('columns-'))).toHaveLength(1);
  expect(evaluate(input).stats).toMatchObject({ calculated: 0, reused: 15, invalidRows: 0 });
 });
 it.each(['compressor', 'tool', 'source', 'engine', 'new-compressor', 'reorder', 'remove'])('handles %s changes without altering results', kind => {
  const input = fixture(); evaluate(input);
  if (kind === 'compressor') input.compressors[0].maxPressureBar++;
  if (kind === 'tool') {
   expect(input.tools[0].demandModel).toBe('fixed-flow');
   if (input.tools[0].demandModel !== 'fixed-flow') throw new Error('Fixed-flow cache fixture required');
   input.tools[0].airflowLpm.typical++;
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
