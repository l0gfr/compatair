import { createHash, randomUUID } from 'node:crypto';
import { lstatSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync, gunzipSync } from 'node:zlib';
import { z } from 'zod';
import type { PairCalculation } from './snapshots';

export type VerdictCacheOptions = { directory: string; fingerprint: string; maxBytes?: number };
export type CalculationRow = { values: PairCalculation[]; indexes: Uint32Array };
const hash = (bytes: string | Buffer) => createHash('sha256').update(bytes).digest('hex');
export const productFingerprint = (product: unknown) => hash(JSON.stringify(product));
const digestSchema = z.string().regex(/^[a-f0-9]{64}$/);
const manifestSchema = z.strictObject({
	format: z.literal(1), engine: digestSchema,
	compressors: z.array(digestSchema).max(100_000),
	tools: z.record(digestSchema, digestSchema),
	output: z.strictObject({ key: digestSchema, digest: digestSchema }).optional(),
});
type Manifest = z.infer<typeof manifestSchema>;
const envelopeSchema = z.strictObject({ digest: digestSchema, data: manifestSchema });
const calculationSchema = z.strictObject({
	verdict: z.enum(['continuous', 'intermittent', 'incompatible', 'insufficient_data']),
	confidence: z.enum(['high', 'medium', 'low']),
	limitingFactor: z.enum(['flow', 'pressure', 'tank', 'duty_cycle', 'data']).optional(),
	requiredFadLpm: z.number().nonnegative().optional(),
	availableFadLpm: z.number().nonnegative().optional(),
	availableFadBasis: z.enum(['exact', 'interpolated', 'higher-pressure-bound']).optional(),
	availableFadReferencePressureBar: z.number().nonnegative().optional(),
	marginPercent: z.number().optional(),
	warnings: z.array(z.string().max(16_384)).max(100),
});
const rowSchema = z.strictObject({
	values: z.array(calculationSchema).max(100_000),
	indexes: z.array(z.number().int().nonnegative()).max(100_000),
});

function readBounded(path: string, limit: number) {
	const stat = lstatSync(path);
	if (!stat.isFile() || stat.size > limit) throw new Error('invalid_cache_file');
	return readFileSync(path);
}
function atomicWrite(path: string, bytes: string | Buffer) {
	const temporary = `${path}.${randomUUID()}.partial`;
	try { writeFileSync(temporary, bytes, { flag: 'wx', mode: 0o600 }); renameSync(temporary, path); }
	finally { rmSync(temporary, { force: true }); }
}

// A disposable acceleration cache, never published or used as source evidence.
// Each tool has a compressed row; the manifest binds it to every complete input
// record (including provenance) and to the engine/dependency fingerprint.
export class VerdictCalculationCache {
	private previous: Manifest | undefined;
	private next: Manifest;
	private positions = new Map<string, number>();
	private files = new Map<string, number>();
	private budget: number;
	private writable = true;
	private directoryReady = false;
	readonly stats = { reused: 0, calculated: 0, invalidRows: 0, bytes: 0, stored: false };
	constructor(private options: VerdictCacheOptions, compressorHashes: string[]) {
		this.budget = options.maxBytes ?? 64 * 1024 * 1024;
		this.next = { format: 1, engine: options.fingerprint, compressors: compressorHashes, tools: {} };
		try {
			mkdirSync(options.directory, { recursive: true });
			this.directoryReady = lstatSync(options.directory).isDirectory();
		} catch { /* Unavailable storage must not prevent a correct calculation. */ }
		if (!this.directoryReady) { this.writable = false; return; }
		try {
			const envelope = envelopeSchema.parse(JSON.parse(readBounded(join(options.directory, 'manifest.json'), 16 * 1024 * 1024).toString('utf8')));
			if (hash(JSON.stringify(envelope.data)) !== envelope.digest) throw new Error('cache_manifest_checksum_mismatch');
			const previous = envelope.data;
			if (previous.engine === options.fingerprint) {
				this.previous = previous;
				previous.compressors.forEach((fingerprint, index) => this.positions.set(fingerprint, index));
			}
		} catch { /* A missing, obsolete or damaged cache is a cold build. */ }
	}

	row(toolHash: string): { values: PairCalculation[]; indexes: number[] } | undefined {
		const digest = this.previous?.tools[toolHash];
		if (!digest) return undefined;
		try {
			const bytes = readBounded(join(this.options.directory, `${digest}.json.gz`), 4 * 1024 * 1024);
			if (hash(bytes) !== digest) throw new Error('cache_checksum_mismatch');
			const parsed: unknown = JSON.parse(gunzipSync(bytes, { maxOutputLength: 32 * 1024 * 1024 }).toString('utf8'));
			const row = rowSchema.parse(parsed);
			// Parsing must not normalize property order or values used in public hashes.
			if (JSON.stringify(row) !== JSON.stringify(parsed) || row.indexes.length !== this.previous!.compressors.length
				|| row.indexes.some(index => index >= row.values.length)) throw new Error('invalid_cache_row');
			this.files.set(digest, bytes.length);
			return row;
		} catch { this.stats.invalidRows++; return undefined; }
	}

	previousIndex(compressorHash: string) { return this.positions.get(compressorHash); }
	version(key: string) {
		return this.stats.calculated === 0 && this.stats.invalidRows === 0 && this.previous?.output?.key === key ? this.previous.output.digest : undefined;
	}

	store(toolHash: string, row: CalculationRow, unchanged: boolean) {
		if (!this.writable) return;
		const previousDigest = this.previous?.tools[toolHash];
		if (unchanged && previousDigest) { this.next.tools[toolHash] = previousDigest; return; }
		try {
			const bytes = gzipSync(JSON.stringify({ values: row.values, indexes: Array.from(row.indexes) }), { level: 1 });
			const digest = hash(bytes);
			if (!this.files.has(digest)) {
				const currentBytes = [...this.files.values()].reduce((sum, size) => sum + size, 0);
				if (currentBytes + bytes.length > this.budget) { this.writable = false; return; }
				atomicWrite(join(this.options.directory, `${digest}.json.gz`), bytes);
				this.files.set(digest, bytes.length);
			}
			this.next.tools[toolHash] = digest;
		} catch { this.writable = false; }
	}

	finish(output?: { key: string; digest: string }) {
		if (!this.directoryReady) return { ...this.stats };
		try {
			this.next.output = output;
			const manifest = JSON.stringify({ digest: hash(JSON.stringify(this.next)), data: this.next });
			const keep = new Set(Object.values(this.next.tools).map(digest => `${digest}.json.gz`));
			const bytes = Buffer.byteLength(manifest) + [...new Set(Object.values(this.next.tools))].reduce((sum, digest) => sum + (this.files.get(digest) ?? 0), 0);
			if (!this.writable || bytes > this.budget) {
				// Never grow an unbounded build cache or publish a partial manifest.
				keep.clear();
				rmSync(join(this.options.directory, 'manifest.json'), { force: true });
			} else {
				atomicWrite(join(this.options.directory, 'manifest.json'), manifest);
				this.stats.bytes = bytes; this.stats.stored = true;
			}
			for (const name of readdirSync(this.options.directory)) {
				const owned = /^[a-f0-9]{64}\.json\.gz(?:\.[a-f0-9-]+\.partial)?$/.test(name) || /^manifest\.json\.[a-f0-9-]+\.partial$/.test(name);
				if (owned && !keep.has(name)) rmSync(join(this.options.directory, name), { force: true });
			}
		} catch { this.stats.stored = false; }
		return { ...this.stats };
	}
}
