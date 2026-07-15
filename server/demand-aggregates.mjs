import { readFile, rename, writeFile } from 'node:fs/promises';

export const DEMAND_EVENT_SCHEMA_VERSION = '1.0.0';
const CALCULATION_VERSION_PATTERN = /^\d{1,4}\.\d{1,4}\.\d{1,4}$/;
const FLOW_BUCKETS = new Set(['lt-100', '100-199', '200-399', '400-699', '700-plus']);
const PRESSURE_BUCKETS = new Set(['lt-4', '4-5.9', '6-7.9', '8-plus']);
const SESSION_BUCKETS = new Set(['lt-15', '15-59', '60-plus']);
const MODES = new Set(['successive', 'simultaneous']);
const COMPRESSOR_SELECTIONS = new Set(['none', 'catalog', 'custom']);
const DIMENSION_KEYS = ['tools', 'categories', 'modes', 'flowBuckets', 'pressureBuckets', 'sessionBuckets', 'compressorSelections', 'calculationVersions', 'needProfiles'];

/** @param {unknown} value */
export function isValidCalculationVersion(value) { return typeof value === 'string' && CALCULATION_VERSION_PATTERN.test(value); }

function emptyCounts() { return Object.create(null); }

function emptyAggregate() {
	return {
		schemaVersion: DEMAND_EVENT_SCHEMA_VERSION,
		updatedAt: null,
		totalContributions: 0,
		dimensions: {
			tools: emptyCounts(),
			categories: emptyCounts(),
			modes: emptyCounts(),
			flowBuckets: emptyCounts(),
			pressureBuckets: emptyCounts(),
			sessionBuckets: emptyCounts(),
			compressorSelections: emptyCounts(),
			calculationVersions: emptyCounts(),
			needProfiles: emptyCounts(),
		},
	};
}

function increment(target, key) {
	const current = Object.hasOwn(target, key) ? target[key] : 0;
	if (!Number.isSafeInteger(current) || current < 0 || current === Number.MAX_SAFE_INTEGER) throw new Error('aggregate_counter_invalid');
	target[key] = current + 1;
}

function validCounts(value) {
	return value !== null && typeof value === 'object' && !Array.isArray(value)
		&& Object.values(value).every((count) => Number.isSafeInteger(count) && count >= 0);
}

function isValidAggregate(value) {
	if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
	if (Object.keys(value).length !== 4 || Object.keys(value).some((key) => !['schemaVersion', 'updatedAt', 'totalContributions', 'dimensions'].includes(key))) return false;
	if (value.schemaVersion !== DEMAND_EVENT_SCHEMA_VERSION || !Number.isSafeInteger(value.totalContributions) || value.totalContributions < 0) return false;
	if (value.updatedAt !== null && (typeof value.updatedAt !== 'string' || Number.isNaN(Date.parse(value.updatedAt)))) return false;
	if (!value.dimensions || Object.keys(value.dimensions).length !== DIMENSION_KEYS.length || DIMENSION_KEYS.some((key) => !validCounts(value.dimensions[key]))) return false;
	return ['modes', 'flowBuckets', 'pressureBuckets', 'sessionBuckets', 'compressorSelections', 'calculationVersions', 'needProfiles']
		.every((key) => Object.values(value.dimensions[key]).reduce((sum, count) => sum + count, 0) === value.totalContributions);
}

/** @param {any} value @param {any} catalog @param {string | undefined} expectedCalculationVersion */
export function validateDemandEvent(value, catalog, expectedCalculationVersion = undefined) {
	if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
	const allowedKeys = new Set(['event', 'schemaVersion', 'calculationVersion', 'toolIds', 'mode', 'flowBucket', 'pressureBucket', 'sessionBucket', 'compressorSelection']);
	if (Object.keys(value).some((key) => !allowedKeys.has(key))) return undefined;
	if (value.event !== 'calculator_demand_aggregate' || value.schemaVersion !== DEMAND_EVENT_SCHEMA_VERSION) return undefined;
	if (!isValidCalculationVersion(value.calculationVersion)) return undefined;
	if (expectedCalculationVersion !== undefined && value.calculationVersion !== expectedCalculationVersion) return undefined;
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
		if (!isValidAggregate(parsed)) throw new Error('aggregate_schema_mismatch');
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

/** @param {{ filePath?: string, catalog: any, clock?: () => Date }} options */
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
