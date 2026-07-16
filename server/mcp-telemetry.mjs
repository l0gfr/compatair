import { createHash, createHmac, randomBytes } from 'node:crypto';
import { readFile, rename, writeFile } from 'node:fs/promises';

export const MCP_TELEMETRY_SCHEMA_VERSION = '1.0.0';
export const MCP_TELEMETRY_RETENTION_DAYS = 91;
export const MCP_TELEMETRY_MINIMUM_PUBLIC_COHORT = 5;

const CLIENT_FAMILIES = [
	['chatgpt', /chatgpt|openai/i],
	['claude', /claude|anthropic/i],
	['gemini', /gemini|google/i],
	['codex', /codex/i],
	['cursor', /cursor/i],
	['vscode', /visual studio code|vscode/i],
	['mcp-inspector', /mcp.?inspector/i],
];

function emptyCounters() { return { success: 0, insufficient_data: 0, error: 0 }; }
function emptyAggregate() { return { schemaVersion: MCP_TELEMETRY_SCHEMA_VERSION, updatedAt: null, totalEvents: 0, weeks: [], actors: [] }; }
function weekKey(date) {
	const value = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
	const day = value.getUTCDay() || 7;
	value.setUTCDate(value.getUTCDate() - day + 1);
	return value.toISOString().slice(0, 10);
}
function dayKey(date) { return date.toISOString().slice(0, 10); }
function isCount(value) { return Number.isSafeInteger(value) && value >= 0; }
function isIsoDate(value) { return typeof value === 'string' && Number.isFinite(Date.parse(value)); }
function validOutcome(value) { return ['success', 'insufficient_data', 'error'].includes(value); }
function incrementOutcome(target, outcome) { target[outcome] += 1; }
function incrementRow(rows, match, create) {
	let row = rows.find(match);
	if (!row) { row = create(); rows.push(row); }
	return row;
}
function sortAggregate(value) {
	value.weeks.sort((left, right) => left.week.localeCompare(right.week));
	for (const week of value.weeks) {
		week.clients.sort((left, right) => left.family.localeCompare(right.family));
		week.tools.sort((left, right) => left.name.localeCompare(right.name));
		week.products.sort((left, right) => left.type.localeCompare(right.type) || left.id.localeCompare(right.id));
		week.compatibilities.sort((left, right) => left.compressorId.localeCompare(right.compressorId) || left.toolId.localeCompare(right.toolId));
	}
	value.actors.sort((left, right) => left.id.localeCompare(right.id));
	return value;
}

export function classifyMcpClient(clientInfo) {
	if (!clientInfo || typeof clientInfo !== 'object' || Array.isArray(clientInfo) || typeof clientInfo.name !== 'string') return 'undeclared';
	const name = clientInfo.name.trim().slice(0, 120);
	if (!name) return 'undeclared';
	return CLIENT_FAMILIES.find(([, pattern]) => pattern.test(name))?.[0] ?? 'other';
}

export function truncateNetworkAddress(address) {
	if (typeof address !== 'string') return 'unknown';
	const ipv4 = address.replace(/^::ffff:/, '').match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.\d{1,3}$/);
	if (ipv4 && ipv4.slice(1).every((part) => Number(part) <= 255)) return `${ipv4[1]}.${ipv4[2]}.${ipv4[3]}.0/24`;
	if (/^[0-9a-f:]+$/i.test(address) && address.includes(':')) return `${address.toLowerCase().split(':').slice(0, 4).join(':')}::/64`;
	return 'unknown';
}

function normalizeUserAgent(value) {
	if (typeof value !== 'string') return 'unknown';
	return value.toLowerCase().replace(/\d+(?:\.\d+)+/g, '#').replace(/\s+/g, ' ').trim().slice(0, 160) || 'unknown';
}

export function callerFingerprint(secret, address, userAgent) {
	if (!(secret instanceof Uint8Array) || secret.byteLength < 16) throw new Error('mcp_telemetry_secret_invalid');
	return createHmac('sha256', secret).update(`${truncateNetworkAddress(address)}\n${normalizeUserAgent(userAgent)}`).digest('hex');
}

export function classifyMcpOutcome(result) {
	if (!result || result.error || result.result?.isError || result.result?.structuredContent?.error) return 'error';
	return result.result?.structuredContent?.verdict === 'insufficient_data' ? 'insufficient_data' : 'success';
}

export function extractMcpDemand(toolName, args, structuredContent, catalog) {
	const compressorIds = new Set((catalog?.compressors ?? []).map((item) => item.id));
	const toolIds = new Set((catalog?.tools ?? []).map((item) => item.id));
	const products = new Map();
	const compatibilities = new Map();
	const addProduct = (type, id) => {
		if (typeof id !== 'string' || !(type === 'compressor' ? compressorIds : toolIds).has(id)) return;
		products.set(`${type}:${id}`, { type, id });
	};
	const addCompatibility = (compressorId, toolId) => {
		if (!compressorIds.has(compressorId) || !toolIds.has(toolId)) return;
		compatibilities.set(`${compressorId}:${toolId}`, { compressorId, toolId });
		addProduct('compressor', compressorId); addProduct('tool', toolId);
	};
	const addSystem = (system) => {
		if (!system || typeof system !== 'object') return;
		addProduct('compressor', system.compressorId);
		for (const toolId of Array.isArray(system.toolIds) ? system.toolIds : []) {
			addProduct('tool', toolId);
			if (typeof system.compressorId === 'string') addCompatibility(system.compressorId, toolId);
		}
	};
	if (args && typeof args === 'object' && !Array.isArray(args)) {
		addProduct('compressor', args.compressorId);
		addProduct('tool', args.toolId);
		addProduct(compressorIds.has(args.productId) ? 'compressor' : 'tool', args.productId);
		for (const id of Array.isArray(args.ids) ? args.ids : []) addProduct('compressor', id);
		for (const id of Array.isArray(args.toolIds) ? args.toolIds : []) addProduct('tool', id);
		for (const id of Array.isArray(args.productIds) ? args.productIds : []) addProduct(compressorIds.has(id) ? 'compressor' : 'tool', id);
		if (args.compressorId && args.toolId) addCompatibility(args.compressorId, args.toolId);
		if (args.compressorId) for (const id of Array.isArray(args.toolIds) ? args.toolIds : []) addCompatibility(args.compressorId, id);
		for (const system of Array.isArray(args.systems) ? args.systems : []) addSystem(system);
		const configuration = args.configuration;
		if (configuration && typeof configuration === 'object') {
			const compressorId = configuration.compressor?.id;
			addProduct('compressor', compressorId);
			for (const item of Array.isArray(configuration.tools) ? configuration.tools : []) {
				addProduct('tool', item?.id);
				if (compressorId) addCompatibility(compressorId, item?.id);
			}
		}
	}
	if (toolName === 'identify_product') {
		const exact = (structuredContent?.matches ?? []).filter((item) => item?.match_confidence === 'exact');
		if (exact.length === 1) addProduct(exact[0].type, exact[0].id);
	}
	return { products: [...products.values()], compatibilities: [...compatibilities.values()] };
}

function normalizeAggregate(value) {
	if (!value || typeof value !== 'object' || Array.isArray(value) || value.schemaVersion !== MCP_TELEMETRY_SCHEMA_VERSION || !Array.isArray(value.weeks) || !Array.isArray(value.actors)) return undefined;
	if (!isCount(value.totalEvents) || (value.updatedAt !== null && !isIsoDate(value.updatedAt))) return undefined;
	for (const week of value.weeks) {
		if (!week || typeof week !== 'object' || !/^\d{4}-\d{2}-\d{2}$/.test(week.week) || !isCount(week.initializations) || !isCount(week.calls) || !isCount(week.canonicalFollows) || !isCount(week.clientInfoDeclared)) return undefined;
		if (!week.outcomes || !['success', 'insufficient_data', 'error'].every((key) => isCount(week.outcomes[key]))) return undefined;
		if (![week.clients, week.tools, week.products, week.compatibilities].every(Array.isArray)) return undefined;
		if (week.clients.some((row) => typeof row.family !== 'string' || !isCount(row.initializations))) return undefined;
		if (week.tools.some((row) => typeof row.name !== 'string' || !isCount(row.calls) || !isCount(row.canonicalIssued) || !isCount(row.canonicalFollows) || !row.outcomes || !['success', 'insufficient_data', 'error'].every((key) => isCount(row.outcomes[key])))) return undefined;
		if (week.products.some((row) => !['compressor', 'tool'].includes(row.type) || typeof row.id !== 'string' || !isCount(row.requests))) return undefined;
		if (week.compatibilities.some((row) => typeof row.compressorId !== 'string' || typeof row.toolId !== 'string' || !isCount(row.requests))) return undefined;
	}
	for (const actor of value.actors) {
		if (!actor || typeof actor.id !== 'string' || !/^[a-f0-9]{64}$/.test(actor.id) || !isIsoDate(actor.firstSeen) || !isIsoDate(actor.lastSeen) || !isCount(actor.initializations) || !isCount(actor.calls) || !Array.isArray(actor.days) || !Array.isArray(actor.clients)) return undefined;
		if (actor.days.some((day) => !/^\d{4}-\d{2}-\d{2}$/.test(day)) || actor.clients.some((client) => typeof client !== 'string')) return undefined;
	}
	return sortAggregate(structuredClone(value));
}

export function aggregateMcpTelemetry(state, event, now = new Date()) {
	const normalized = normalizeAggregate(state);
	if (!normalized || !event || typeof event !== 'object' || !(now instanceof Date) || !Number.isFinite(now.getTime())) throw new Error('mcp_telemetry_schema_mismatch');
	if (!['initialize', 'tool_call', 'canonical_follow'].includes(event.type) || typeof event.actorId !== 'string' || !/^[a-f0-9]{64}$/.test(event.actorId)) throw new Error('mcp_telemetry_event_invalid');
	const oldest = new Date(now); oldest.setUTCDate(oldest.getUTCDate() - MCP_TELEMETRY_RETENTION_DAYS);
	const next = structuredClone(normalized);
	next.weeks = next.weeks.filter((week) => Date.parse(week.week) >= oldest.getTime());
	next.actors = next.actors.filter((actor) => Date.parse(actor.lastSeen) >= oldest.getTime());
	const week = incrementRow(next.weeks, (item) => item.week === weekKey(now), () => ({ week: weekKey(now), initializations: 0, calls: 0, clientInfoDeclared: 0, outcomes: emptyCounters(), canonicalFollows: 0, clients: [], tools: [], products: [], compatibilities: [] }));
	const actor = incrementRow(next.actors, (item) => item.id === event.actorId, () => ({ id: event.actorId, firstSeen: now.toISOString(), lastSeen: now.toISOString(), days: [], initializations: 0, calls: 0, clients: [] }));
	actor.lastSeen = now.toISOString();
	if (!actor.days.includes(dayKey(now))) actor.days.push(dayKey(now));
	actor.days.sort();
	if (event.type === 'initialize') {
		const family = typeof event.clientFamily === 'string' ? event.clientFamily : 'undeclared';
		week.initializations += 1; actor.initializations += 1;
		if (family !== 'undeclared') week.clientInfoDeclared += 1;
		incrementRow(week.clients, (item) => item.family === family, () => ({ family, initializations: 0 })).initializations += 1;
		if (!actor.clients.includes(family)) actor.clients.push(family);
	} else {
		const name = typeof event.toolName === 'string' && /^[a-z0-9_]{1,80}$/.test(event.toolName) ? event.toolName : 'unknown';
		const tool = incrementRow(week.tools, (item) => item.name === name, () => ({ name, calls: 0, outcomes: emptyCounters(), canonicalIssued: 0, canonicalFollows: 0 }));
		if (event.type === 'canonical_follow') { week.canonicalFollows += 1; tool.canonicalFollows += 1; }
		else {
			if (!validOutcome(event.outcome)) throw new Error('mcp_telemetry_event_invalid');
			week.calls += 1; actor.calls += 1; tool.calls += 1; incrementOutcome(week.outcomes, event.outcome); incrementOutcome(tool.outcomes, event.outcome);
			if (event.canonicalIssued === true) tool.canonicalIssued += 1;
			for (const product of event.products ?? []) {
				if (!product || !['compressor', 'tool'].includes(product.type) || typeof product.id !== 'string') continue;
				incrementRow(week.products, (item) => item.type === product.type && item.id === product.id, () => ({ ...product, requests: 0 })).requests += 1;
			}
			for (const pair of event.compatibilities ?? []) {
				if (!pair || typeof pair.compressorId !== 'string' || typeof pair.toolId !== 'string') continue;
				incrementRow(week.compatibilities, (item) => item.compressorId === pair.compressorId && item.toolId === pair.toolId, () => ({ ...pair, requests: 0 })).requests += 1;
			}
		}
	}
	next.updatedAt = now.toISOString();
	next.totalEvents = next.weeks.reduce((sum, item) => sum + item.initializations + item.calls + item.canonicalFollows, 0);
	return sortAggregate(next);
}

function ratio(numerator, denominator) { return denominator > 0 ? Number((numerator / denominator).toFixed(6)) : null; }
function sumRows(weeks, keyFields, sourceName, countName) {
	const rows = new Map();
	for (const week of weeks) for (const source of week[sourceName]) {
		const key = keyFields.map((field) => source[field]).join('\u0000');
		const row = rows.get(key) ?? Object.fromEntries(keyFields.map((field) => [field, source[field]]));
		row[countName] = (row[countName] ?? 0) + source[countName]; rows.set(key, row);
	}
	return [...rows.values()].sort((left, right) => right[countName] - left[countName] || keyFields.map((field) => left[field]).join(':').localeCompare(keyFields.map((field) => right[field]).join(':')));
}

export function buildPublicMcpUsageReport(state, catalog, minimumCohort = MCP_TELEMETRY_MINIMUM_PUBLIC_COHORT) {
	const value = normalizeAggregate(state);
	if (!value || !Number.isSafeInteger(minimumCohort) || minimumCohort < 2) throw new Error('mcp_telemetry_schema_mismatch');
	const totals = value.weeks.reduce((acc, week) => ({ initializations: acc.initializations + week.initializations, calls: acc.calls + week.calls, clientInfoDeclared: acc.clientInfoDeclared + week.clientInfoDeclared, success: acc.success + week.outcomes.success, insufficientData: acc.insufficientData + week.outcomes.insufficient_data, errors: acc.errors + week.outcomes.error, canonicalFollows: acc.canonicalFollows + week.canonicalFollows }), { initializations: 0, calls: 0, clientInfoDeclared: 0, success: 0, insufficientData: 0, errors: 0, canonicalFollows: 0 });
	const actors = value.actors;
	const recurrentActors = actors.filter((actor) => actor.calls >= 2 && actor.days.length >= 2);
	const recurrentIntegrations = actors.filter((actor) => actor.initializations >= 2 && actor.days.length >= 2 && actor.clients.some((client) => client !== 'undeclared'));
	const publishCount = (count) => actors.length >= minimumCohort ? count : null;
	const compressorLabels = new Map((catalog?.compressors ?? []).map((item) => [item.id, `${item.brand} ${item.model}`]));
	const toolLabels = new Map((catalog?.tools ?? []).map((item) => [item.id, item.label ?? `${item.brand} ${item.model}`]));
	const clients = sumRows(value.weeks, ['family'], 'clients', 'initializations').filter((row) => row.initializations >= minimumCohort);
	const tools = new Map();
	for (const week of value.weeks) for (const source of week.tools) {
		const row = tools.get(source.name) ?? { name: source.name, calls: 0, success: 0, insufficient_data: 0, errors: 0, canonical_issued: 0, canonical_follows: 0 };
		row.calls += source.calls; row.success += source.outcomes.success; row.insufficient_data += source.outcomes.insufficient_data; row.errors += source.outcomes.error; row.canonical_issued += source.canonicalIssued; row.canonical_follows += source.canonicalFollows; tools.set(source.name, row);
	}
	const toolRows = [...tools.values()].sort((left, right) => right.calls - left.calls || left.name.localeCompare(right.name)).map((row) => ({ ...row, success_rate: ratio(row.success, row.calls), insufficient_data_rate: ratio(row.insufficient_data, row.calls), error_rate: ratio(row.errors, row.calls), canonical_follow_rate: ratio(row.canonical_follows, row.canonical_issued) }));
	const products = sumRows(value.weeks, ['type', 'id'], 'products', 'requests').filter((row) => row.requests >= minimumCohort).slice(0, 20).map((row) => ({ ...row, label: row.type === 'compressor' ? compressorLabels.get(row.id) ?? row.id : toolLabels.get(row.id) ?? row.id }));
	const compatibilities = sumRows(value.weeks, ['compressorId', 'toolId'], 'compatibilities', 'requests').filter((row) => row.requests >= minimumCohort).slice(0, 20).map((row) => ({ ...row, compressor: compressorLabels.get(row.compressorId) ?? row.compressorId, tool: toolLabels.get(row.toolId) ?? row.toolId }));
	return {
		schema_version: MCP_TELEMETRY_SCHEMA_VERSION, updated_at: value.updatedAt, retention_days: MCP_TELEMETRY_RETENTION_DAYS, minimum_public_cohort: minimumCohort,
		measurement: { users: 'Estimated anonymous callers, not identified people.', recurrent: 'At least two calls or initializations on at least two distinct days.', canonical_follows: 'Attributed consultations through canonical_follow_url; URL emission alone is never counted as a follow.' },
		totals: { initializations: totals.initializations, tool_calls: totals.calls, success: totals.success, insufficient_data: totals.insufficientData, errors: totals.errors, success_rate: ratio(totals.success, totals.calls), insufficient_data_rate: ratio(totals.insufficientData, totals.calls), error_rate: ratio(totals.errors, totals.calls), client_info_declared: totals.clientInfoDeclared, client_info_declaration_rate: ratio(totals.clientInfoDeclared, totals.initializations), canonical_follows: totals.canonicalFollows, estimated_callers: publishCount(actors.length), recurrent_callers: publishCount(recurrentActors.length), recurrent_integrations: publishCount(recurrentIntegrations.length) },
		clients, tools: toolRows, products, compatibilities,
		limitations: ['Counts can be affected by shared networks, automated retries and blocked browser telemetry.', 'Small client, product and compatibility cohorts are withheld.', 'A returned canonical URL is not counted as consulted until the attributed URL is actually opened.'],
	};
}

async function readAggregate(filePath) {
	if (!filePath) return emptyAggregate();
	try { const value = normalizeAggregate(JSON.parse(await readFile(filePath, 'utf8'))); if (!value) throw new Error('mcp_telemetry_schema_mismatch'); return value; }
	catch (error) { if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') return emptyAggregate(); throw error; }
}
async function readOrCreateSecret(secretFilePath, configuredSecret) {
	if (configuredSecret) return createHash('sha256').update(configuredSecret).digest();
	if (!secretFilePath) return randomBytes(32);
	try { const value = await readFile(secretFilePath); if (value.byteLength < 32) throw new Error('mcp_telemetry_secret_invalid'); return value; }
	catch (error) {
		if (!(error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT')) throw error;
		const value = randomBytes(32); await writeFile(secretFilePath, value, { mode: 0o600, flag: 'wx' }); return value;
	}
}
async function writeAggregate(filePath, state) {
	if (!filePath) return;
	const temporaryPath = `${filePath}.tmp`;
	await writeFile(temporaryPath, `${JSON.stringify(state, null, 2)}\n`, { mode: 0o600 });
	await rename(temporaryPath, filePath);
}

export function createMcpTelemetryStore({ filePath = undefined, secretFilePath = undefined, configuredSecret = undefined, catalog = { compressors: [], tools: [] }, clock = () => new Date() } = {}) {
	let queue = Promise.resolve();
	let statePromise = readAggregate(filePath);
	let secretPromise = readOrCreateSecret(secretFilePath, configuredSecret);
	return {
		enabled: Boolean(filePath),
		async actorId(address, userAgent) { return callerFingerprint(await secretPromise, address, userAgent); },
		async record(event) { queue = queue.then(async () => { const next = aggregateMcpTelemetry(await statePromise, event, clock()); await writeAggregate(filePath, next); statePromise = Promise.resolve(next); }); await queue; },
		async snapshot() { await queue; return structuredClone(await statePromise); },
		async publicReport() { await queue; return buildPublicMcpUsageReport(await statePromise, catalog); },
	};
}
