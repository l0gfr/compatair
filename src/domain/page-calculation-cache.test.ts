import { mkdtempSync, readFileSync, readdirSync, renameSync, rmSync, statSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { gzipSync, gunzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { afterEach, describe, expect, it, vi } from 'vitest';
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
vi.mock('node:fs', async importOriginal => {
 const fs = await importOriginal<typeof import('node:fs')>();
 return { ...fs, writeFileSync: vi.fn(fs.writeFileSync), renameSync: vi.fn(fs.renameSync), rmSync: vi.fn(fs.rmSync) };
});
const roots: string[] = [];
afterEach(() => { vi.restoreAllMocks(); vi.resetAllMocks(); for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true }); });
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
function retainedInternKeys(cache: PageCalculationCache) {
 const rows = (cache as unknown as { rows: Map<string, { intern: Map<string, number> }> }).rows;
 return [...rows.values()].reduce((count, row) => count + row.intern.size, 0);
}
function diskBytes(directory: string) {
 return readdirSync(directory).reduce((total, name) => total + statSync(join(directory, name)).size, 0);
}
describe('page calculation reuse across catalog revisions', () => {
 it('keeps byte accounting exact when stats grow, shrink and are rewritten', () => {
  const input = fixture(), cache = evaluate(input);
  for (const memoryHits of [1_000_000_000, 0, 100, 10]) {
   cache.stats.memoryHits = memoryHits; cache.flush();
   expect(cache.stats.bytes).toBe(diskBytes(input.options.directory));
  }
 });
 it.each(['engine', 'removed-compressor', 'oversized-cache'])('accounts for constructor cleanup: %s', kind => {
  const input = fixture(); evaluate(input);
  if (kind === 'engine') input.options.fingerprint = 'b'.repeat(64);
  if (kind === 'removed-compressor') input.compressors.pop();
  if (kind === 'oversized-cache') Object.assign(input.options, { maxBytes: 1 });
  const cache = evaluate(input);
  expect(cache.stats.bytes).toBe(diskBytes(input.options.directory));
 });
 it.each(['write', 'rename'])('keeps the previous bytes and exact results after a failed stats %s', kind => {
  const input = fixture(), cache = evaluate(input), bytes = diskBytes(input.options.directory);
  const fail = () => { throw new Error('fixture filesystem failure'); };
  if (kind === 'write') vi.mocked(writeFileSync).mockImplementationOnce(fail);
  else vi.mocked(renameSync).mockImplementationOnce(fail);
  cache.stats.memoryHits = 1_000_000_000; cache.flush();
  expect(cache.stats).toMatchObject({ bytes, writable: false });
  expect(diskBytes(input.options.directory)).toBe(bytes);
  expect(readdirSync(input.options.directory).some(name => name.endsWith('.partial'))).toBe(false);
  for (const compressor of input.compressors) for (const tool of input.tools) {
   expect(cache.evaluate(compressor, tool)).toEqual(evaluateCompatibility(compressor, tool));
  }
 });
 it('prunes an orphaned new column after a failed row replacement while retaining old useful columns', () => {
  const input = fixture(); evaluate(input);
  const oldColumn = readdirSync(input.options.directory).find(name => name.startsWith('columns-'))!;
  input.tools.push({ ...input.tools[0], id: 'new-tool-failed-row-write' });
  const cache = new PageCalculationCache(input.compressors, input.tools, input.options);
  const rename = vi.mocked(renameSync).getMockImplementation()!;
  vi.mocked(renameSync).mockImplementationOnce(rename).mockImplementationOnce(() => { throw new Error('fixture row rename failure'); });
  for (const tool of input.tools) cache.evaluate(input.compressors[0], tool);
  expect(cache.stats.writable).toBe(false);
  expect(readdirSync(input.options.directory).filter(name => name.startsWith('columns-'))).toHaveLength(2);
  cache.flush(); // Other disk rows have not yet been validated.
  expect(readdirSync(input.options.directory).filter(name => name.startsWith('columns-'))).toHaveLength(2);
  for (const compressor of input.compressors.slice(1)) cache.evaluate(compressor, input.tools[0]);
  cache.flush();
  expect(readdirSync(input.options.directory).filter(name => name.startsWith('columns-'))).toEqual([oldColumn]);
  expect(cache.stats.bytes).toBe(diskBytes(input.options.directory));
 });
 it('retries a failed column deletion without losing its bytes or restoring writes', () => {
  const input = fixture(); evaluate(input);
  const oldColumn = readdirSync(input.options.directory).find(name => name.startsWith('columns-'))!;
  input.tools.push({ ...input.tools[0], id: 'new-tool-prune-retry' });
  const cache = new PageCalculationCache(input.compressors, input.tools, input.options);
  for (const compressor of input.compressors) for (const tool of input.tools) cache.evaluate(compressor, tool);
  vi.mocked(rmSync).mockImplementationOnce(() => { throw new Error('fixture prune failure'); });
  cache.flush();
  expect(readdirSync(input.options.directory)).toContain(oldColumn);
  expect(cache.stats).toMatchObject({ bytes: diskBytes(input.options.directory), writable: false });
  cache.flush();
  expect(readdirSync(input.options.directory)).not.toContain(oldColumn);
  expect(cache.stats).toMatchObject({ bytes: diskBytes(input.options.directory), writable: false });
 });
 it('avoids repeated scans after the row and column state has stopped changing', () => {
  const input = fixture(), cache = evaluate(input);
  const sizes = (cache as unknown as { sizes: Map<string, number> }).sizes;
  const scan = vi.spyOn(sizes, 'keys');
  for (let index = 0; index < 5; index++) cache.flush();
  expect(scan).not.toHaveBeenCalled();
  expect(cache.stats.bytes).toBe(diskBytes(input.options.directory));
 });
 it('releases completed cold and warm dedup keys while retaining exact in-memory hits', () => {
  const input = fixture();
  for (const phase of ['cold', 'warm']) {
   const cache = evaluate(input);
   expect(retainedInternKeys(cache), phase).toBe(0);
   const before = { ...cache.stats };
   for (const compressor of input.compressors) for (const tool of input.tools) {
    expect(JSON.stringify(cache.evaluate(compressor, tool))).toBe(JSON.stringify(evaluateCompatibility(compressor, tool)));
   }
   expect(cache.stats).toMatchObject({ calculated: before.calculated, reused: before.reused, memoryHits: before.memoryHits + 12 });
   expect(retainedInternKeys(cache), phase).toBe(0);
  }
 });
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
  const expanded = new PageCalculationCache(input.compressors, input.tools, input.options);
  expanded.evaluate(input.compressors[0], input.tools[0]);
  expect(retainedInternKeys(expanded)).toBeGreaterThan(0);
  for (const compressor of input.compressors) for (const tool of input.tools) {
   expect(JSON.stringify(expanded.evaluate(compressor, tool))).toBe(JSON.stringify(evaluateCompatibility(compressor, tool)));
  }
  expanded.flush();
  expect(expanded.stats).toMatchObject({ calculated: 3, reused: 12, memoryHits: 1, invalidRows: 0 });
  expect(retainedInternKeys(expanded)).toBe(0);
  const complete = evaluate(input);
  expect(complete.stats).toMatchObject({ calculated: 0, reused: 15 });
  expect(retainedInternKeys(complete)).toBe(0);
 });
 it('still reuses validated old rows after new writes reach the disk budget', () => {
  const input = fixture(); evaluate(input);
  const bytes = readdirSync(input.options.directory).reduce((total, file) => total + statSync(join(input.options.directory, file)).size, 0);
  input.tools.push({ ...input.tools[0], id: 'new-tool-over-budget' });
  Object.assign(input.options, { maxBytes: bytes + 1 });
  const bounded = evaluate(input);
  expect(bounded.stats).toMatchObject({ calculated: 3, reused: 12, invalidRows: 0, writable: false });
  expect(retainedInternKeys(bounded)).toBe(0);
  for (const compressor of input.compressors) for (const tool of input.tools) {
   expect(JSON.stringify(bounded.evaluate(compressor, tool))).toBe(JSON.stringify(evaluateCompatibility(compressor, tool)));
  }
  expect(bounded.stats).toMatchObject({ calculated: 3, reused: 12, memoryHits: 15, writable: false });
  const after = readdirSync(input.options.directory).reduce((total, file) => total + statSync(join(input.options.directory, file)).size, 0);
  expect(after).toBeLessThanOrEqual(bytes + 1);
 });
 it('retains old columns during a partial catalog expansion and prunes them after all retained rows migrate', () => {
  const input = fixture(); evaluate(input);
  const oldColumns = readdirSync(input.options.directory).find(file => file.startsWith('columns-'))!;
  input.tools.push({ ...input.tools[0], id: 'new-tool-for-column-migration' });
  const partial = new PageCalculationCache(input.compressors, input.tools, input.options);
  for (const tool of input.tools) partial.evaluate(input.compressors[0], tool);
  for (let index = 0; index < 3; index++) {
   partial.flush();
   expect(readdirSync(input.options.directory)).toContain(oldColumns);
  }
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
