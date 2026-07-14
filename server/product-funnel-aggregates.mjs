import { readFile, rename, writeFile } from 'node:fs/promises';

export const PRODUCT_FUNNEL_SCHEMA_VERSION = '1.0.0';
export const PRODUCT_FUNNEL_STEPS = new Set(['started', 'completed']);

function emptyStepCounts() { return { started: 0, completed: 0 }; }

function emptyAggregate() {
	return {
		schemaVersion: PRODUCT_FUNNEL_SCHEMA_VERSION,
		updatedAt: null,
		totalEvents: 0,
		calculator: emptyStepCounts(),
	};
}

function validCount(value) { return Number.isSafeInteger(value) && value >= 0; }

function isValidAggregate(value) {
	if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
	if (Object.keys(value).length !== 4 || Object.keys(value).some((key) => !['schemaVersion', 'updatedAt', 'totalEvents', 'calculator'].includes(key))) return false;
	if (value.schemaVersion !== PRODUCT_FUNNEL_SCHEMA_VERSION || !validCount(value.totalEvents)) return false;
	if (value.updatedAt !== null && (typeof value.updatedAt !== 'string' || Number.isNaN(Date.parse(value.updatedAt)))) return false;
	if (!value.calculator || !validCount(value.calculator.started) || !validCount(value.calculator.completed)) return false;
	if (Object.keys(value.calculator).length !== 2 || Object.keys(value.calculator).some((key) => !PRODUCT_FUNNEL_STEPS.has(key))) return false;
	return value.totalEvents === value.calculator.started + value.calculator.completed;
}

export function validateProductFunnelEvent(value) {
	if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
	const allowedKeys = new Set(['event', 'schemaVersion', 'step']);
	if (Object.keys(value).some((key) => !allowedKeys.has(key))) return undefined;
	if (value.event !== 'calculator_funnel_aggregate' || value.schemaVersion !== PRODUCT_FUNNEL_SCHEMA_VERSION) return undefined;
	if (!PRODUCT_FUNNEL_STEPS.has(value.step)) return undefined;
	return { step: value.step };
}

export function aggregateProductFunnel(state, event, now = new Date()) {
	const next = structuredClone(state);
	next.schemaVersion = PRODUCT_FUNNEL_SCHEMA_VERSION;
	next.updatedAt = now.toISOString();
	next.totalEvents += 1;
	next.calculator[event.step] += 1;
	return next;
}

async function readAggregate(filePath) {
	if (!filePath) return emptyAggregate();
	try {
		const parsed = JSON.parse(await readFile(filePath, 'utf8'));
		if (!isValidAggregate(parsed)) throw new Error('product_funnel_aggregate_schema_mismatch');
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

/** @param {{ filePath?: string, clock?: () => Date }} options */
export function createProductFunnelAggregateStore({ filePath = undefined, clock = () => new Date() } = {}) {
	let queue = Promise.resolve();
	let statePromise = readAggregate(filePath);
	return {
		enabled: Boolean(filePath),
		async record(event) {
			queue = queue.then(async () => {
				const state = await statePromise;
				const next = aggregateProductFunnel(state, event, clock());
				await writeAggregate(filePath, next);
				statePromise = Promise.resolve(next);
			});
			await queue;
		},
		async snapshot() { await queue; return structuredClone(await statePromise); },
	};
}
