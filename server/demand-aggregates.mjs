import { readFile, rename, writeFile } from 'node:fs/promises';

export const DEMAND_EVENT_SCHEMA_VERSION = '1.0.0';
const FLOW_BUCKETS = new Set(['lt-100', '100-199', '200-399', '400-699', '700-plus']);
const PRESSURE_BUCKETS = new Set(['lt-4', '4-5.9', '6-7.9', '8-plus']);
const SESSION_BUCKETS = new Set(['lt-15', '15-59', '60-plus']);
const MODES = new Set(['successive', 'simultaneous']);
const COMPRESSOR_SELECTIONS = new Set(['none', 'catalog', 'custom']);

function emptyAggregate() {
	return {
		schemaVersion: DEMAND_EVENT_SCHEMA_VERSION,
		updatedAt: null,
		totalContributions: 0,
		dimensions: {
			tools: {},
			categories: {},
			modes: {},
			flowBuckets: {},
			pressureBuckets: {},
			sessionBuckets: {},
			compressorSelections: {},
			calculationVersions: {},
			needProfiles: {},
		},
	};
}

function increment(target, key) {
	target[key] = (target[key] ?? 0) + 1;
}

export function validateDemandEvent(value, catalog) {
	if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
	const allowedKeys = new Set(['event', 'schemaVersion', 'calculationVersion', 'toolIds', 'mode', 'flowBucket', 'pressureBucket', 'sessionBucket', 'compressorSelection']);
	if (Object.keys(value).some((key) => !allowedKeys.has(key))) return undefined;
	if (value.event !== 'calculator_demand_aggregate' || value.schemaVersion !== DEMAND_EVENT_SCHEMA_VERSION) return undefined;
	if (typeof value.calculationVersion !== 'string' || !/^\d+\.\d+\.\d+$/.test(value.calculationVersion)) return undefined;
	if (!Array.isArray(value.toolIds) || value.toolIds.length < 1 || value.toolIds.length > 8 || new Set(value.toolIds).size !== value.toolIds.length) return undefined;
	const catalogToolIds = new Set((catalog.tools ?? []).map((tool) => tool.id));
	if (value.toolIds.some((id) => typeof id !== 'string' || !catalogToolIds.has(id))) return undefined;
	if (!MODES.has(value.mode) || !FLOW_BUCKETS.has(value.flowBucket) || !PRESSURE_BUCKETS.has(value.pressureBucket) || !SESSION_BUCKETS.has(value.sessionBucket) || !COMPRESSOR_SELECTIONS.has(value.compressorSelection)) return undefined;
	return {
		calculationVersion: value.calculationVersion,
		toolIds: [...value.toolIds],
		mode: value.mode,
		flowBucket: value.flowBucket,
		pressureBucket: value.pressureBucket,
		sessionBucket: value.sessionBucket,
		compressorSelection: value.compressorSelection,
	};
}

export function aggregateDemand(state, event, catalog, now = new Date()) {
	const next = structuredClone(state);
	const toolById = new Map((catalog.tools ?? []).map((tool) => [tool.id, tool]));
	next.schemaVersion = DEMAND_EVENT_SCHEMA_VERSION;
	next.updatedAt = now.toISOString();
	next.totalContributions += 1;
	for (const toolId of event.toolIds) {
		increment(next.dimensions.tools, toolId);
		const category = toolById.get(toolId)?.category;
		if (category) increment(next.dimensions.categories, category);
	}
	increment(next.dimensions.modes, event.mode);
	increment(next.dimensions.flowBuckets, event.flowBucket);
	increment(next.dimensions.pressureBuckets, event.pressureBucket);
	increment(next.dimensions.sessionBuckets, event.sessionBucket);
	increment(next.dimensions.compressorSelections, event.compressorSelection);
	increment(next.dimensions.calculationVersions, event.calculationVersion);
	increment(next.dimensions.needProfiles, `${event.flowBucket}@${event.pressureBucket}`);
	return next;
}

async function readAggregate(filePath) {
	if (!filePath) return emptyAggregate();
	try {
		const parsed = JSON.parse(await readFile(filePath, 'utf8'));
		if (parsed?.schemaVersion !== DEMAND_EVENT_SCHEMA_VERSION || !parsed.dimensions || !Number.isInteger(parsed.totalContributions)) throw new Error('aggregate_schema_mismatch');
		return parsed;
	} catch (error) {
		if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') return emptyAggregate();
		throw error;
	}
}

async function writeAggregate(filePath, state) {
	if (!filePath) return;
	const temporaryPath = `${filePath}.tmp`;
	await writeFile(temporaryPath, `${JSON.stringify(state, null, 2)}\n`, { mode: 0o600 });
	await rename(temporaryPath, filePath);
}

export function createDemandAggregateStore({ filePath = undefined, catalog, clock = () => new Date() }) {
	let queue = Promise.resolve();
	let statePromise = readAggregate(filePath);
	return {
		enabled: Boolean(filePath),
		async record(event) {
			queue = queue.then(async () => {
				const state = await statePromise;
				const next = aggregateDemand(state, event, catalog, clock());
				await writeAggregate(filePath, next);
				statePromise = Promise.resolve(next);
			});
			await queue;
		},
		async snapshot() { await queue; return structuredClone(await statePromise); },
	};
}
