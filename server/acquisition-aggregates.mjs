import { readFile, rename, writeFile } from 'node:fs/promises';

export const ACQUISITION_SCHEMA_VERSION = '1.0.0';
export const ACQUISITION_CHANNELS = ['organic', 'agent_referral', 'referral', 'direct', 'widget', 'api', 'mcp', 'ucp'];
export const ACQUISITION_TEMPLATES = ['home', 'calculator', 'compatibility', 'compressor', 'tool', 'guide', 'mcp_docs', 'ucp_docs', 'api_docs', 'benchmark', 'receipt', 'offers', 'other'];
export const ACQUISITION_ACTIONS = ['view', 'calculator_intent', 'merchant_interest', 'decision_request', 'canonical_follow', 'offer_outbound', 'conversion', 'citation_acknowledged'];
export const ACQUISITION_OUTCOMES = ['success', 'insufficient_data', 'incompatible', 'error', 'unknown'];
const publicChannels = new Set(['organic', 'agent_referral', 'referral', 'direct', 'widget']);
const calculatorIntentTemplates = new Set(['home', 'compatibility', 'compressor', 'tool', 'guide', 'benchmark', 'receipt', 'offers', 'other']);
const merchantInterestTemplates = new Set(['calculator', 'compressor']);
const channelSet = new Set(ACQUISITION_CHANNELS);
const templateSet = new Set(ACQUISITION_TEMPLATES);
const actionSet = new Set(ACQUISITION_ACTIONS);
const outcomeSet = new Set(ACQUISITION_OUTCOMES);

function weekKey(date) {
	const value = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
	const day = value.getUTCDay() || 7;
	value.setUTCDate(value.getUTCDate() - day + 1);
	return value.toISOString().slice(0, 10);
}
function validEvent(value) {
	return value && typeof value === 'object' && !Array.isArray(value)
		&& channelSet.has(value.channel) && templateSet.has(value.template) && actionSet.has(value.action) && outcomeSet.has(value.outcome)
		&& ['channel', 'template', 'action', 'outcome'].every((key) => Object.hasOwn(value, key));
}
function emptyAggregate() { return { schemaVersion: ACQUISITION_SCHEMA_VERSION, updatedAt: null, totalEvents: 0, buckets: [] }; }
function normalizeAggregate(value) {
	if (!value || typeof value !== 'object' || Array.isArray(value) || value.schemaVersion !== ACQUISITION_SCHEMA_VERSION || !Array.isArray(value.buckets)) return undefined;
	if (!Number.isSafeInteger(value.totalEvents) || value.totalEvents < 0 || (value.updatedAt !== null && (typeof value.updatedAt !== 'string' || !Number.isFinite(Date.parse(value.updatedAt))))) return undefined;
	let total = 0;
	for (const bucket of value.buckets) {
		if (!bucket || typeof bucket !== 'object' || Array.isArray(bucket) || Object.keys(bucket).length !== 6 || !/^\d{4}-\d{2}-\d{2}$/.test(bucket.week) || !validEvent(bucket) || !Number.isSafeInteger(bucket.count) || bucket.count < 1) return undefined;
		total += bucket.count;
	}
	return total === value.totalEvents ? structuredClone(value) : undefined;
}

export function validateAcquisitionEvent(value) {
	if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
	const allowed = ['event', 'schemaVersion', 'channel', 'template', 'action', 'outcome'];
	if (Object.keys(value).length !== allowed.length || Object.keys(value).some((key) => !allowed.includes(key))) return undefined;
	if (value.event !== 'acquisition_aggregate' || value.schemaVersion !== ACQUISITION_SCHEMA_VERSION || !publicChannels.has(value.channel) || value.outcome !== 'unknown') return undefined;
	const publicActionAllowed = value.action === 'view'
		|| (value.action === 'calculator_intent' && calculatorIntentTemplates.has(value.template))
		|| (value.action === 'merchant_interest' && merchantInterestTemplates.has(value.template));
	if (!publicActionAllowed) return undefined;
	const event = { channel: value.channel, template: value.template, action: value.action, outcome: value.outcome };
	return validEvent(event) ? event : undefined;
}

export function aggregateAcquisition(state, event, now = new Date()) {
	const normalized = normalizeAggregate(state);
	if (!normalized || !validEvent(event) || !(now instanceof Date) || !Number.isFinite(now.getTime())) throw new Error('acquisition_aggregate_schema_mismatch');
	const next = structuredClone(normalized);
	const week = weekKey(now);
	const oldest = new Date(now); oldest.setUTCDate(oldest.getUTCDate() - 91);
	next.buckets = next.buckets.filter((bucket) => Date.parse(bucket.week) >= oldest.getTime());
	const bucket = next.buckets.find((item) => item.week === week && item.channel === event.channel && item.template === event.template && item.action === event.action && item.outcome === event.outcome);
	if (bucket) bucket.count += 1;
	else next.buckets.push({ week, ...event, count: 1 });
	next.buckets.sort((left, right) => left.week.localeCompare(right.week) || left.channel.localeCompare(right.channel) || left.template.localeCompare(right.template) || left.action.localeCompare(right.action) || left.outcome.localeCompare(right.outcome));
	next.totalEvents = next.buckets.reduce((sum, item) => sum + item.count, 0);
	next.updatedAt = now.toISOString();
	return next;
}

async function readAggregate(filePath) {
	if (!filePath) return emptyAggregate();
	try {
		const value = normalizeAggregate(JSON.parse(await readFile(filePath, 'utf8')));
		if (!value) throw new Error('acquisition_aggregate_schema_mismatch');
		return value;
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

export function createAcquisitionAggregateStore({ filePath = undefined, clock = () => new Date() } = {}) {
	let queue = Promise.resolve();
	let statePromise = readAggregate(filePath);
	let pendingEvents = [];
	let scheduledFlush;
	function scheduleFlush() {
		if (!scheduledFlush) {
			scheduledFlush = new Promise((resolve, reject) => {
				setImmediate(() => {
					const batch = pendingEvents;
					pendingEvents = [];
					scheduledFlush = undefined;
					queue = queue.then(async () => {
						let next = await statePromise;
						for (const event of batch) next = aggregateAcquisition(next, event, clock());
						await writeAggregate(filePath, next);
						statePromise = Promise.resolve(next);
					});
					queue.then(resolve, reject);
				});
			});
		}
		return scheduledFlush;
	}
	async function waitForIdle() {
		while (scheduledFlush) await scheduledFlush;
		await queue;
	}
	return {
		enabled: Boolean(filePath),
		async record(event) {
			pendingEvents.push(event);
			await scheduleFlush();
		},
		async snapshot() { await waitForIdle(); return structuredClone(await statePromise); },
	};
}
