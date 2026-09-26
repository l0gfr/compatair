import { createReadStream } from 'node:fs';

const indexes = new WeakMap();

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
function compactPair(pair, payloads) {
	const keys = Object.keys(pair);
	if (keys.slice(0, 3).join(',') !== 'id,compressorId,toolId' || pair.id !== `${pair.compressorId}--${pair.toolId}` || keys.slice(3).some(key => !payloadFields.has(key))) return pair;
	const { id: _id, compressorId, toolId, ...fields } = pair;
	const key = JSON.stringify(fields);
	let payload = payloads.get(key);
	if (!payload) {
		payload = fields;
		// Keep sharing later catalogue entries after the bounded cache fills.
		// Existing pairs retain their payload; only the lookup keys are evicted.
		if (payloads.size >= 5_000) payloads.clear();
		payloads.set(key, payload);
	}
	return new CompactPair(compressorId, toolId, payload);
}

export function verdictIndex(snapshot) {
	let index = indexes.get(snapshot);
	if (!index) {
		const compressors = new Map();
		for (const pair of snapshot.pairs ?? []) {
			let tools = compressors.get(pair.compressorId);
			if (!tools) { tools = []; compressors.set(pair.compressorId, tools); }
			tools.push(pair);
		}
		// Sorted references avoid a second hash-table entry for every verdict.
		for (const tools of compressors.values()) tools.sort((a, b) => a.toolId < b.toolId ? -1 : a.toolId > b.toolId ? 1 : 0);
		index = { get: (compressorId, toolId) => {
			const tools = compressors.get(compressorId);
			if (!tools) return undefined;
			let low = 0;
			let high = tools.length;
			while (low < high) {
				const middle = Math.floor((low + high) / 2);
				if (tools[middle].toolId <= toolId) low = middle + 1;
				else high = middle;
			}
			const pair = tools[low - 1];
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
	const pairs = [];
	const strings = new Map();
	const warningLists = new Map();
	const payloads = new Map();
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
					for (const key of ['compressorId', 'toolId', 'verdict', 'confidence', 'limitingFactor', 'availableFadBasis']) if (Object.hasOwn(pair, key)) pair[key] = intern(pair[key]);
					if (Array.isArray(pair.warnings)) {
						const key = JSON.stringify(pair.warnings);
						let warnings = warningLists.get(key);
						if (!warnings) {
							warnings = pair.warnings.map(intern);
							if (warningLists.size < 100_000) warningLists.set(key, warnings);
						}
						pair.warnings = warnings;
					}
					pairs.push(compactIds ? compactPair(pair, payloads) : pair);
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
	return { ...metadata, pairs };
}
