import { createHash, randomUUID } from 'node:crypto';
import { lstatSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync, gunzipSync } from 'node:zlib';
import { z } from 'zod';
import type { Compressor, ToolProfile } from './catalog';
import { evaluateCompatibility, type CompatibilityResult } from './compatibility';
import { CALCULATION_VERSION } from './sizing';

const hash = (value: string | Buffer) => createHash('sha256').update(value).digest('hex');
const fingerprint = (value: unknown) => hash(JSON.stringify(value));
const digest = z.string().regex(/^[a-f0-9]{64}$/);
const resultSchema = z.strictObject({
 verdict: z.enum(['continuous', 'intermittent', 'incompatible', 'insufficient_data']), confidence: z.enum(['high', 'medium', 'low']),
 limitingFactor: z.enum(['flow', 'pressure', 'tank', 'duty_cycle', 'data']).optional(), requiredFadLpm: z.number().nonnegative().optional(),
 averageDemandLpm: z.number().nonnegative().optional(), availableFadLpm: z.number().nonnegative().optional(), marginPercent: z.number().optional(),
 availableFadBasis: z.enum(['exact', 'interpolated', 'higher-pressure-bound']).optional(), availableFadReferencePressureBar: z.number().nonnegative().optional(),
 warnings: z.array(z.string().max(16_384)).max(100), calculationVersion: z.literal(CALCULATION_VERSION),
});
const rowSchema = z.strictObject({ columns: digest, values: z.array(resultSchema).max(100_000), indexes: z.array(z.number().int().nonnegative()).max(100_000) });
const owned = /^(?:row-[a-f0-9]{64}\.json\.gz|columns-[a-f0-9]{64}\.json|engine\.json|stats\.json)$/;
const empty = 0xffff_ffff;
type Row = { values: CompatibilityResult[]; indexes: Uint32Array; seen: Uint8Array; intern: Map<string, number>; remaining: number; dirty: boolean };
export type PageCacheOptions = { directory: string; fingerprint: string; maxBytes?: number };

function freeze(result: CompatibilityResult) { Object.freeze(result.warnings); return Object.freeze(result); }
function bounded(path: string, limit: number) {
 const info = lstatSync(path);
 if (!info.isFile() || info.size > limit) throw new Error('unsafe_cache_file');
 return readFileSync(path);
}

// Only complete rows are persisted. Values are shared within a row; the complete
// tool fingerprints are stored once, independently of the number of compressors.
export class PageCalculationCache {
 readonly stats = { calculated: 0, reused: 0, memoryHits: 0, invalidRows: 0, storedRows: 0, bytes: 0, writable: true };
 private compressors = new WeakMap<Compressor, string>();
 private tools = new WeakMap<ToolProfile, number>();
 private compressorHashes: Set<string>;
 private toolColumns: Map<string, number>;
 private columns: string[];
 private columnsJson: string;
 private columnsVersion: string;
 private previousColumns = new Map<string, Map<string, number>>();
 private rows = new Map<string, Row>();
 private sizes = new Map<string, number>();
 private budget: number;
 constructor(compressors: Compressor[], tools: ToolProfile[], private options: PageCacheOptions) {
  this.budget = options.maxBytes ?? 64 * 1024 * 1024;
  const compressorHashes = new Set(compressors.map(product => { const key = fingerprint(product); this.compressors.set(product, key); return key; }));
  this.columns = tools.map((tool, index) => { this.tools.set(tool, index); return fingerprint(tool); });
  this.compressorHashes = compressorHashes;
  this.toolColumns = new Map(this.columns.map((key, index) => [key, index]));
  this.columnsJson = JSON.stringify(this.columns); this.columnsVersion = hash(this.columnsJson);
  this.previousColumns.set(this.columnsVersion, new Map(this.columns.map((key, index) => [key, index])));
  try {
   digest.parse(options.fingerprint);
   mkdirSync(options.directory, { recursive: true });
   if (!lstatSync(options.directory).isDirectory()) throw new Error('unsafe_cache_directory');
   for (const name of readdirSync(options.directory)) {
    const info = lstatSync(join(options.directory, name));
    if (!owned.test(name) || !info.isFile()) throw new Error('unsafe_cache_entry');
    this.sizes.set(name, info.size);
   }
   let previousEngine;
   try { previousEngine = JSON.parse(bounded(join(options.directory, 'engine.json'), 1024).toString()); } catch { /* Cold cache. */ }
   const reset = previousEngine !== options.fingerprint || [...this.sizes.values()].reduce((a, b) => a + b, 0) > this.budget;
   for (const name of this.sizes.keys()) if (reset || name.startsWith('row-') && !compressorHashes.has(name.slice(4, -8))) {
    rmSync(join(options.directory, name)); this.sizes.delete(name);
   }
   this.write('engine.json', JSON.stringify(options.fingerprint));
  } catch { this.stats.writable = false; }
 }
 private write(name: string, bytes: string | Buffer) {
  if (!this.stats.writable) return false;
  const size = Buffer.byteLength(bytes), total = [...this.sizes.values()].reduce((a, b) => a + b, 0) - (this.sizes.get(name) ?? 0) + size;
  if (total > this.budget) { this.stats.writable = false; return false; }
  const path = join(this.options.directory, name), temporary = `${path}.${randomUUID()}.partial`;
  try { writeFileSync(temporary, bytes, { flag: 'wx', mode: 0o600 }); renameSync(temporary, path); this.sizes.set(name, size); this.stats.bytes = total; return true; }
  catch { this.stats.writable = false; return false; }
  finally { try { rmSync(temporary, { force: true }); } catch { this.stats.writable = false; } }
 }
 private row(key: string) {
  let row = this.rows.get(key);
  if (row) return row;
  row = { values: [], indexes: new Uint32Array(this.columns.length).fill(empty), seen: new Uint8Array(this.columns.length), intern: new Map(), remaining: this.columns.length, dirty: false };
  if (this.stats.writable && this.sizes.has(`row-${key}.json.gz`)) try {
   const envelope = JSON.parse(gunzipSync(bounded(join(this.options.directory, `row-${key}.json.gz`), 4 * 1024 * 1024), { maxOutputLength: 32 * 1024 * 1024 }).toString());
   if (fingerprint(envelope.data) !== envelope.digest) throw new Error('cache_checksum');
   const previous = rowSchema.parse(envelope.data);
   let columns = this.previousColumns.get(previous.columns);
   if (!columns) {
    const bytes = bounded(join(this.options.directory, `columns-${previous.columns}.json`), 8 * 1024 * 1024);
    if (hash(bytes) !== previous.columns) throw new Error('columns_checksum');
    const keys = z.array(digest).max(100_000).parse(JSON.parse(bytes.toString()));
    if (new Set(keys).size !== keys.length) throw new Error('duplicate_columns');
    columns = new Map(keys.map((value, index) => [value, index])); this.previousColumns.set(previous.columns, columns);
   }
   if (previous.indexes.length !== columns.size || previous.indexes.some(index => index >= previous.values.length)) throw new Error('invalid_row_index');
   row.values = previous.values.map(freeze);
   row.intern = new Map(row.values.map((value, index) => [JSON.stringify(value), index]));
   this.columns.forEach((value, index) => { const position = columns.get(value); if (position !== undefined) { row!.indexes[index] = previous.indexes[position]; row!.remaining--; } });
   row.dirty = previous.columns !== this.columnsVersion;
  } catch { this.stats.invalidRows++; }
  this.rows.set(key, row);
  return row;
 }
 evaluate(compressor: Compressor, tool: ToolProfile): CompatibilityResult {
  let key = this.compressors.get(compressor), column = this.tools.get(tool);
  // Astro may clone getStaticPaths props across its renderer boundary.
  if (key === undefined) { const candidate = fingerprint(compressor); if (this.compressorHashes.has(candidate)) { key = candidate; this.compressors.set(compressor, key); } }
  if (column === undefined) { column = this.toolColumns.get(fingerprint(tool)); if (column !== undefined) this.tools.set(tool, column); }
  if (key === undefined || column === undefined) return evaluateCompatibility(compressor, tool);
  const row = this.row(key);
  if (row.indexes[column] !== empty) {
   if (row.seen[column]) this.stats.memoryHits++; else this.stats.reused++;
  } else {
   const result = freeze(resultSchema.parse(evaluateCompatibility(compressor, tool)));
   const serialized = JSON.stringify(result);
   let index = row.intern.get(serialized);
   if (index === undefined) { index = row.values.length; row.values.push(result); row.intern.set(serialized, index); }
   row.indexes[column] = index; row.remaining--; row.dirty = true; this.stats.calculated++;
  }
  row.seen[column] = 1;
  if (row.remaining === 0 && row.dirty) {
   const data = { columns: this.columnsVersion, values: row.values, indexes: Array.from(row.indexes) };
   if (!this.sizes.has(`columns-${this.columnsVersion}.json`)) this.write(`columns-${this.columnsVersion}.json`, this.columnsJson);
   if (this.stats.writable && this.write(`row-${key}.json.gz`, gzipSync(JSON.stringify({ digest: fingerprint(data), data }), { level: 6 }))) this.stats.storedRows++;
   row.dirty = false;
  }
  return row.values[row.indexes[column]];
 }
 flush() { this.write('stats.json', JSON.stringify(this.stats)); }
}
