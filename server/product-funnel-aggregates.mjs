import { readFile, rename, writeFile } from 'node:fs/promises';

export const PRODUCT_FUNNEL_SCHEMA_VERSION = '2.0.0';
export const PRODUCT_FUNNEL_FAMILIES = ['pressure', 'flexible', 'simultaneity', 'leak', 'cadence', 'machine'];
export const PRODUCT_FUNNEL_STEPS = ['started', 'completed', 'recommendation_displayed', 'recommendation_selected', 'recalculation_succeeded'];

const familySet = new Set(PRODUCT_FUNNEL_FAMILIES);
const stepSet = new Set(PRODUCT_FUNNEL_STEPS);
const counterfactualStepSet = new Set(['recommendation_displayed', 'recommendation_selected', 'recalculation_succeeded']);

function emptyStepCounts() { return { started: 0, completed: 0 }; }
function emptyCounterfactualCounts() { return { displayed: 0, selected: 0, recalculated: 0 }; }
function emptyFamilyCounts() { return Object.fromEntries(PRODUCT_FUNNEL_FAMILIES.map((family) => [family, emptyCounterfactualCounts()])); }

function emptyAggregate() {
	return {
		schemaVersion: PRODUCT_FUNNEL_SCHEMA_VERSION,
		updatedAt: null,
		totalEvents: 0,
		calculator: emptyStepCounts(),
		counterfactual: { ...emptyCounterfactualCounts(), byFamily: emptyFamilyCounts() },
	};
}

function validCount(value) { return Number.isSafeInteger(value) && value >= 0; }
function hasOnlyKeys(value, keys) { return Object.keys(value).length === keys.size && Object.keys(value).every((key) => keys.has(key)); }

function isLegacyAggregate(value) {
	if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
	if (!hasOnlyKeys(value, new Set(['schemaVersion', 'updatedAt', 'totalEvents', 'calculator']))) return false;
	if (value.schemaVersion !== '1.0.0' || !validCount(value.totalEvents)) return false;
	if (value.updatedAt !== null && (typeof value.updatedAt !== 'string' || Number.isNaN(Date.parse(value.updatedAt)))) return false;
	if (!value.calculator || !hasOnlyKeys(value.calculator, new Set(['started', 'completed']))) return false;
	if (![value.calculator.started, value.calculator.completed].every(validCount)) return false;
	return value.totalEvents === value.calculator.started + value.calculator.completed;
}

function isCurrentAggregate(value) {
	if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
	if (!hasOnlyKeys(value, new Set(['schemaVersion', 'updatedAt', 'totalEvents', 'calculator', 'counterfactual']))) return false;
	if (value.schemaVersion !== PRODUCT_FUNNEL_SCHEMA_VERSION || !validCount(value.totalEvents)) return false;
	if (value.updatedAt !== null && (typeof value.updatedAt !== 'string' || Number.isNaN(Date.parse(value.updatedAt)))) return false;
	if (!value.calculator || !hasOnlyKeys(value.calculator, new Set(['started', 'completed']))) return false;
	if (![value.calculator.started, value.calculator.completed].every(validCount)) return false;
	if (!value.counterfactual || !hasOnlyKeys(value.counterfactual, new Set(['displayed', 'selected', 'recalculated', 'byFamily']))) return false;
	if (![value.counterfactual.displayed, value.counterfactual.selected, value.counterfactual.recalculated].every(validCount)) return false;
	if (!value.counterfactual.byFamily || !hasOnlyKeys(value.counterfactual.byFamily, familySet)) return false;
	for (const family of PRODUCT_FUNNEL_FAMILIES) {
		const counts = value.counterfactual.byFamily[family];
		if (!counts || !hasOnlyKeys(counts, new Set(['displayed', 'selected', 'recalculated']))) return false;
		if (![counts.displayed, counts.selected, counts.recalculated].every(validCount)) return false;
	}
	const familyTotals = PRODUCT_FUNNEL_FAMILIES.reduce((totals, family) => {
		const counts = value.counterfactual.byFamily[family];
		return { displayed: totals.displayed + counts.displayed, selected: totals.selected + counts.selected, recalculated: totals.recalculated + counts.recalculated };
	}, emptyCounterfactualCounts());
	if (familyTotals.displayed !== value.counterfactual.displayed || familyTotals.selected !== value.counterfactual.selected || familyTotals.recalculated !== value.counterfactual.recalculated) return false;
	return value.totalEvents === value.calculator.started + value.calculator.completed + value.counterfactual.displayed + value.counterfactual.selected + value.counterfactual.recalculated;
}

export function normalizeProductFunnelAggregate(value) {
	if (isCurrentAggregate(value)) return structuredClone(value);
	if (!isLegacyAggregate(value)) return undefined;
	return {
		...emptyAggregate(),
		updatedAt: value.updatedAt,
		totalEvents: value.totalEvents,
		calculator: structuredClone(value.calculator),
	};
}

export function validateProductFunnelEvent(value) {
	if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
	const allowedKeys = new Set(['event', 'schemaVersion', 'step', 'family']);
	if (Object.keys(value).some((key) => !allowedKeys.has(key))) return undefined;
	if (value.event !== 'calculator_funnel_aggregate' || value.schemaVersion !== PRODUCT_FUNNEL_SCHEMA_VERSION) return undefined;
	if (!stepSet.has(value.step)) return undefined;
	if (counterfactualStepSet.has(value.step)) {
		if (!familySet.has(value.family) || !hasOnlyKeys(value, allowedKeys)) return undefined;
		return { step: value.step, family: value.family };
	}
	if ('family' in value || !hasOnlyKeys(value, new Set(['event', 'schemaVersion', 'step']))) return undefined;
	return { step: value.step };
}

export function aggregateProductFunnel(state, event, now = new Date()) {
	const normalized = normalizeProductFunnelAggregate(state);
	if (!normalized) throw new Error('product_funnel_aggregate_schema_mismatch');
	const next = structuredClone(normalized);
	next.schemaVersion = PRODUCT_FUNNEL_SCHEMA_VERSION;
	next.updatedAt = now.toISOString();
	next.totalEvents += 1;
	if (event.step === 'started' || event.step === 'completed') next.calculator[event.step] += 1;
	else {
		const counterKey = event.step === 'recommendation_displayed' ? 'displayed' : event.step === 'recommendation_selected' ? 'selected' : 'recalculated';
		next.counterfactual[counterKey] += 1;
		next.counterfactual.byFamily[event.family][counterKey] += 1;
	}
	return next;
}

async function readAggregate(filePath) {
	if (!filePath) return emptyAggregate();
	try {
		const parsed = JSON.parse(await readFile(filePath, 'utf8'));
		const normalized = normalizeProductFunnelAggregate(parsed);
		if (!normalized) throw new Error('product_funnel_aggregate_schema_mismatch');
		return normalized;
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
