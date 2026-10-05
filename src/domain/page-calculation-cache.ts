import { createHash, randomUUID } from 'node:crypto';
import { lstatSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync, gunzipSync } from 'node:zlib';
import { z } from 'zod';
import type { Compressor, ToolProfile } from './catalog';
import { compatibilityWithoutCompressor, evaluateCompatibility, type CompatibilityResult } from './compatibility';
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
const packedResultSchema = z.tuple([
 resultSchema.shape.verdict, resultSchema.shape.confidence,
 resultSchema.shape.limitingFactor.unwrap().nullable(),
 z.number().nonnegative().nullable(), z.number().nonnegative().nullable(), z.number().nonnegative().nullable(),
 z.number().nullable(), resultSchema.shape.availableFadBasis.unwrap().nullable(), z.number().nonnegative().nullable(),
 z.number().int().nonnegative(),
]);
const packedRowSchema = z.strictObject({
 format: z.literal(2), columns: digest, values: z.array(packedResultSchema).max(100_000),
 warnings: z.array(resultSchema.shape.warnings).max(100_000), indexes: rowSchema.shape.indexes,
});

// Warning text and field names are shared once per row. This is a lossless disk
// representation: no rounded numbers, inferred values or changed verdicts.
function packRow(columns: string, row: Row) {
 const warnings: string[][] = [], warningIndexes = new Map<string, number>();
 const retained: CompatibilityResult[] = [], valueIndexes = new Map<number, number>();
 const indexes = Array.from(row.indexes, previousIndex => {
  let index = valueIndexes.get(previousIndex);
  if (index === undefined) { index = retained.length; valueIndexes.set(previousIndex, index); retained.push(row.values[previousIndex]); }
  return index;
 });
 const values = retained.map(value => {
  const key = JSON.stringify(value.warnings);
  let warningIndex = warningIndexes.get(key);
  if (warningIndex === undefined) { warningIndex = warnings.length; warningIndexes.set(key, warningIndex); warnings.push(value.warnings); }
  return [value.verdict, value.confidence, value.limitingFactor ?? null, value.requiredFadLpm ?? null,
   value.averageDemandLpm ?? null, value.availableFadLpm ?? null, value.marginPercent ?? null,
   value.availableFadBasis ?? null, value.availableFadReferencePressureBar ?? null, warningIndex];
 });
 return { format: 2, columns, values, warnings, indexes };
}

function unpackRow(data: unknown) {
 if (!(data && typeof data === 'object' && 'format' in data)) return rowSchema.parse(data);
 const packed = packedRowSchema.parse(data);
 const values = packed.values.map(value => {
  const [verdict, confidence, limitingFactor, requiredFadLpm, averageDemandLpm, availableFadLpm, marginPercent,
   availableFadBasis, availableFadReferencePressureBar, warningIndex] = value;
  if (warningIndex >= packed.warnings.length) throw new Error('invalid_warning_index');
  return resultSchema.parse({ verdict, confidence,
   ...(limitingFactor === null ? {} : { limitingFactor }), ...(requiredFadLpm === null ? {} : { requiredFadLpm }),
   ...(averageDemandLpm === null ? {} : { averageDemandLpm }), ...(availableFadLpm === null ? {} : { availableFadLpm }),
   ...(marginPercent === null ? {} : { marginPercent }), ...(availableFadBasis === null ? {} : { availableFadBasis }),
   ...(availableFadReferencePressureBar === null ? {} : { availableFadReferencePressureBar }),
   warnings: packed.warnings[warningIndex], calculationVersion: CALCULATION_VERSION,
  });
 });
 return { columns: packed.columns, values, indexes: packed.indexes };
}
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
 readonly stats = { calculated: 0, reused: 0, memoryHits: 0, independentCalculated: 0, independentHits: 0, invalidRows: 0, storedRows: 0, bytes: 0, writable: true };
 private compressors = new WeakMap<Compressor, string>();
 private tools = new WeakMap<ToolProfile, number>();
 private independentTools = new WeakMap<ToolProfile, CompatibilityResult>();
 private independentHashes = new Map<string, CompatibilityResult>();
 private compressorHashes: Set<string>;
 private toolColumns: Map<string, number>;
 private columns: string[];
 private columnsJson: string;
 private columnsVersion: string;
 private previousColumns = new Map<string, Map<string, number>>();
 private rows = new Map<string, Row>();
 private rowColumnVersions = new Map<string, string>();
 private sizes = new Map<string, number>();
 private budget: number;
 private readable = false;
 constructor(compressors: Compressor[], tools: ToolProfile[], private options: PageCacheOptions) {
  this.budget = options.maxBytes ?? 64 * 1024 * 1024;
  const compressorHashes = new Set(compressors.map(product => { const key = fingerprint(product); this.compressors.set(product, key); return key; }));
  this.columns = [];
  for (const tool of tools) {
   const key = fingerprint(tool), independent = compatibilityWithoutCompressor(tool);
   if (independent) {
    const result = freeze(resultSchema.parse(independent));
    this.independentTools.set(tool, result); this.independentHashes.set(key, result); this.stats.independentCalculated++;
   } else { this.tools.set(tool, this.columns.length); this.columns.push(key); }
  }
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
   this.readable = true;
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
  if (this.readable && this.sizes.has(`row-${key}.json.gz`)) try {
   const envelope = JSON.parse(gunzipSync(bounded(join(this.options.directory, `row-${key}.json.gz`), 4 * 1024 * 1024), { maxOutputLength: 32 * 1024 * 1024 }).toString());
   if (fingerprint(envelope.data) !== envelope.digest) throw new Error('cache_checksum');
   const previous = unpackRow(envelope.data);
   let columns = this.previousColumns.get(previous.columns);
   if (!columns) {
    const bytes = bounded(join(this.options.directory, `columns-${previous.columns}.json`), 8 * 1024 * 1024);
    if (hash(bytes) !== previous.columns) throw new Error('columns_checksum');
    const keys = z.array(digest).max(100_000).parse(JSON.parse(bytes.toString()));
    if (new Set(keys).size !== keys.length) throw new Error('duplicate_columns');
    columns = new Map(keys.map((value, index) => [value, index])); this.previousColumns.set(previous.columns, columns);
   }
   if (previous.indexes.length !== columns.size || previous.indexes.some(index => index >= previous.values.length)) throw new Error('invalid_row_index');
   this.rowColumnVersions.set(`row-${key}.json.gz`, previous.columns);
   row.values = previous.values.map(freeze);
   this.columns.forEach((value, index) => { const position = columns.get(value); if (position !== undefined) { row!.indexes[index] = previous.indexes[position]; row!.remaining--; } });
   // Fully covered rows resolve hits through indexes; no new values need interning.
   row.intern = row.remaining === 0 ? new Map() : new Map(row.values.map((value, index) => [JSON.stringify(value), index]));
   row.dirty = previous.columns !== this.columnsVersion;
  } catch { this.stats.invalidRows++; }
  this.rows.set(key, row);
  return row;
 }
 evaluate(compressor: Compressor, tool: ToolProfile): CompatibilityResult {
  let independent = this.independentTools.get(tool);
  if (!independent && this.independentHashes.size) {
   // Cloned Astro props need a fingerprint only once per object. A qualified
   // registered tool already has its column and cannot be an independent case.
   if (!this.tools.has(tool)) { independent = this.independentHashes.get(fingerprint(tool)); if (independent) this.independentTools.set(tool, independent); }
  }
  if (independent) { this.stats.independentHits++; return independent; }
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
   const data = packRow(this.columnsVersion, row);
   if (!this.sizes.has(`columns-${this.columnsVersion}.json`)) this.write(`columns-${this.columnsVersion}.json`, this.columnsJson);
   if (this.stats.writable && this.write(`row-${key}.json.gz`, gzipSync(JSON.stringify({ digest: fingerprint(data), data }), { level: 9 }))) {
    this.stats.storedRows++; this.rowColumnVersions.set(`row-${key}.json.gz`, this.columnsVersion);
   }
   row.dirty = false;
   row.intern.clear();
  }
  return row.values[row.indexes[column]];
 }
 flush() {
  const rowFiles = [...this.sizes.keys()].filter(name => name.startsWith('row-'));
  // A partial build cannot prove which columns its untouched disk rows need.
  // Prune only after every retained row's validated column version is known.
  if (this.readable && rowFiles.every(name => this.rowColumnVersions.has(name))) {
   const referenced = new Set(this.rowColumnVersions.values());
   for (const name of this.sizes.keys()) if (name.startsWith('columns-') && !referenced.has(name.slice(8, -5))) {
    try { rmSync(join(this.options.directory, name)); this.sizes.delete(name); }
    catch { this.stats.writable = false; }
   }
  }
  this.stats.bytes = [...this.sizes.values()].reduce((total, bytes) => total + bytes, 0);
  this.write('stats.json', JSON.stringify(this.stats));
 }
}
