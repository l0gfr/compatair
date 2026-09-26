import { createReadStream } from 'node:fs';

const indexes = new WeakMap();
const packedArrays = new WeakMap();

// Pair ids and calculation payloads repeat across tools with the same demand.
// Share immutable payloads; materialize complete records only for serialization.
const payloadFields = new Set(['verdict', 'confidence', 'limitingFactor', 'requiredFadLpm', 'averageDemandLpm', 'availableFadLpm', 'availableFadBasis', 'availableFadReferencePressureBar', 'marginPercent', 'warnings', 'calculationVersion']);
class CompactPair {
	#payload;
	constructor(compressorId, toolId, payload) {
		this.compressorId = compressorId;
		this.toolId = toolId;
		this.#payload = payload;
	}
	get id() { return `${this.compressorId}--${this.toolId}`; }
	get verdict() { return this.#payload.verdict; }
	get confidence() { return this.#payload.confidence; }
	get limitingFactor() { return this.#payload.limitingFactor; }
	get requiredFadLpm() { return this.#payload.requiredFadLpm; }
	get averageDemandLpm() { return this.#payload.averageDemandLpm; }
	get availableFadLpm() { return this.#payload.availableFadLpm; }
	get availableFadBasis() { return this.#payload.availableFadBasis; }
	get availableFadReferencePressureBar() { return this.#payload.availableFadReferencePressureBar; }
	get marginPercent() { return this.#payload.marginPercent; }
	get warnings() { return this.#payload.warnings; }
	get calculationVersion() { return this.#payload.calculationVersion; }
	toJSON() { return { id: this.id, compressorId: this.compressorId, toolId: this.toolId, ...this.#payload }; }
}
// Three integers per row replace millions of retained JavaScript objects.
// Full records are reconstructed on access; the public JSON remains unchanged.
function packedPairWriter() {
	const blockRows = 16_384;
	const blocks = [], ids = [], idIndexes = new Map(), payloads = [], payloadIndexes = new Map();
	let length = 0;
	const idIndex = id => {
		if (!idIndexes.has(id)) { idIndexes.set(id, ids.length); ids.push(id); }
		return idIndexes.get(id);
	};
	const cell = (row, field) => blocks[Math.floor(row / blockRows)][(row % blockRows) * 3 + field];
	return {
		push(pair) {
			if (length >= 10_000_000) throw new Error('verdict_snapshot_row_limit');
			const keys = Object.keys(pair);
			const reconstructible = keys.slice(0, 3).join(',') === 'id,compressorId,toolId'
				&& pair.id === `${pair.compressorId}--${pair.toolId}` && keys.slice(3).every(key => payloadFields.has(key));
			const { id: _id, compressorId, toolId, ...fields } = pair;
			const key = `${reconstructible ? 'c' : 'r'}${JSON.stringify(reconstructible ? fields : pair)}`;
			let payloadIndex = payloadIndexes.get(key);
			if (payloadIndex === undefined) { payloadIndex = payloads.length; payloads.push(key); payloadIndexes.set(key, payloadIndex); }
			if (length % blockRows === 0) blocks.push(new Uint32Array(blockRows * 3));
			const block = blocks[Math.floor(length / blockRows)], offset = (length % blockRows) * 3;
			block[offset] = idIndex(compressorId); block[offset + 1] = idIndex(toolId); block[offset + 2] = payloadIndex;
			length++;
		},
		finish() {
			payloadIndexes.clear(); idIndexes.clear();
			const decoded = new Map();
			const get = row => {
				const payloadIndex = cell(row, 2);
				let payload = decoded.get(payloadIndex);
				if (!payload) {
					payload = JSON.parse(payloads[payloadIndex].slice(1));
					if (decoded.size >= 512) decoded.clear();
					decoded.set(payloadIndex, payload);
				}
				return payloads[payloadIndex][0] === 'c' ? new CompactPair(ids[cell(row, 0)], ids[cell(row, 1)], payload) : payload;
			};
			const numericIndex = key => typeof key === 'string' && /^(0|[1-9]\d*)$/.test(key) && Number(key) < length ? Number(key) : undefined;
			const target = []; target.length = length;
			const pairs = new Proxy(target, {
				get(array, key, receiver) { const row = numericIndex(key); return row === undefined ? Reflect.get(array, key, receiver) : get(row); },
				has(array, key) { return numericIndex(key) !== undefined || Reflect.has(array, key); },
				set() { throw new Error('verdict_snapshot_immutable'); },
				deleteProperty() { throw new Error('verdict_snapshot_immutable'); },
			});
			packedArrays.set(pairs, { get, length, compressorId: row => ids[cell(row, 0)], toolId: row => ids[cell(row, 1)] });
			return pairs;
		},
	};
}

export function verdictIndex(snapshot) {
	let index = indexes.get(snapshot);
	if (!index) {
		const packed = packedArrays.get(snapshot.pairs);
		const compressors = new Map();
		for (let row = 0; row < (snapshot.pairs?.length ?? 0); row++) {
			const pair = packed ? undefined : snapshot.pairs[row];
			const compressorId = packed ? packed.compressorId(row) : pair.compressorId;
			let tools = compressors.get(compressorId);
			if (!tools) { tools = []; compressors.set(compressorId, tools); }
			tools.push(packed ? row : pair);
		}
		const toolId = pair => packed ? packed.toolId(pair) : pair.toolId;
		// Sorted references avoid a second hash-table entry for every verdict.
		for (const [compressorId, tools] of compressors) {
			tools.sort((a, b) => toolId(a) < toolId(b) ? -1 : toolId(a) > toolId(b) ? 1 : 0);
			if (packed) compressors.set(compressorId, Uint32Array.from(tools));
		}
		index = { get: (compressorId, toolId) => {
			const tools = compressors.get(compressorId);
			if (!tools) return undefined;
			let low = 0;
			let high = tools.length;
			while (low < high) {
				const middle = Math.floor((low + high) / 2);
				if ((packed ? packed.toolId(tools[middle]) : tools[middle].toolId) <= toolId) low = middle + 1;
				else high = middle;
			}
			const pair = low === 0 ? undefined : packed ? packed.get(tools[low - 1]) : tools[low - 1];
			if (pair?.toolId !== toolId) return undefined;
			return pair instanceof CompactPair ? pair.toJSON() : pair;
		} };
		indexes.set(snapshot, index);
	}
	return index;
}

// The versioned snapshot stores metadata first and its pairs array last.
// Parse one pair at a time so the complete JSON string never resides in memory.
export async function readVerdictSnapshot(path, { compactIds = false } = {}) {
	let buffer = '';
	let metadata;
	const pairs = compactIds ? packedPairWriter() : [];
	const strings = new Map();
	const warningLists = new Map();
	const intern = (value) => {
		if (typeof value !== 'string') return value;
		const existing = strings.get(value);
		if (existing !== undefined) return existing;
		if (strings.size < 100_000) strings.set(value, value);
		return value;
	};
	let state = 'first';
	let position = 0;
	let depth = 0;
	let quoted = false;
	let escaped = false;
	for await (const chunk of createReadStream(path, { encoding: 'utf8', highWaterMark: 64 * 1024 })) {
		buffer += chunk;
		if (!metadata) {
			const marker = /"pairs"[ \t\r\n]*:[ \t\r\n]*\[/.exec(buffer);
			if (!marker) {
				if (buffer.length > 64 * 1024) throw new Error('verdict_snapshot_header_invalid');
				continue;
			}
			if (marker.index > 64 * 1024) throw new Error('verdict_snapshot_header_invalid');
			metadata = JSON.parse(`${buffer.slice(0, marker.index)}"pairs":[]}`);
			buffer = buffer.slice(marker.index + marker[0].length);
		}
		while (position < buffer.length) {
			const char = buffer[position];
			if (state === 'pair') {
				if (quoted) {
					if (escaped) escaped = false;
					else if (char === '\\') escaped = true;
					else if (char === '"') quoted = false;
				} else if (char === '"') quoted = true;
				else if (char === '{' || char === '[') depth++;
				else if (char === '}' || char === ']') depth--;
				position++;
				if (depth === 0) {
					if (position > 1024 * 1024) throw new Error('verdict_snapshot_pair_too_large');
					const pair = JSON.parse(buffer.slice(0, position));
					if (!pair || Array.isArray(pair) || typeof pair.compressorId !== 'string' || typeof pair.toolId !== 'string') throw new Error('verdict_snapshot_pair_invalid');
					if (!compactIds) for (const key of ['compressorId', 'toolId', 'verdict', 'confidence', 'limitingFactor', 'availableFadBasis']) if (Object.hasOwn(pair, key)) pair[key] = intern(pair[key]);
					if (!compactIds && Array.isArray(pair.warnings)) {
						const key = JSON.stringify(pair.warnings);
						let warnings = warningLists.get(key);
						if (!warnings) {
							warnings = pair.warnings.map(intern);
							if (warningLists.size < 100_000) warningLists.set(key, warnings);
						}
						pair.warnings = warnings;
					}
					pairs.push(pair);
					buffer = buffer.slice(position);
					position = 0;
					state = 'comma';
				}
			} else {
				if (/[ \t\r\n]/.test(char)) { position++; continue; }
				if ((state === 'first' || state === 'next') && char === '{') {
					buffer = buffer.slice(position);
					position = 0;
					state = 'pair';
				} else if ((state === 'first' || state === 'comma') && char === ']') { state = 'end'; position++; }
				else if (state === 'comma' && char === ',') { state = 'next'; position++; }
				else if (state === 'end' && char === '}') { state = 'done'; position++; }
				else throw new Error('verdict_snapshot_structure_invalid');
			}
		}
		if (state !== 'pair') { buffer = ''; position = 0; }
		else if (buffer.length > 1024 * 1024) throw new Error('verdict_snapshot_pair_too_large');
	}
	if (!metadata || state !== 'done') throw new Error('verdict_snapshot_truncated');
	return { ...metadata, pairs: compactIds ? pairs.finish() : pairs };
}
