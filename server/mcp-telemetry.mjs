import { createHash, createHmac, randomBytes } from 'node:crypto';
import { readFile, rename, writeFile } from 'node:fs/promises';

export const MCP_TELEMETRY_SCHEMA_VERSION = '2.1.0';
export const MCP_TELEMETRY_EVENT_SCHEMA_VERSION = '2.0.0';
export const MCP_TELEMETRY_RETENTION_DAYS = 91;
export const MCP_TELEMETRY_MINIMUM_PUBLIC_COHORT = 5;
export const MCP_TRAFFIC_CLASSES = ['smoke_ci', 'automatic_retry', 'probe', 'plausible_session', 'unknown', 'historical_unclassified'];

const PREVIOUS_MCP_TELEMETRY_SCHEMA_VERSION = '2.0.0';
const MCP_OUTCOME_BREAKDOWN_VALUES = ['success', 'insufficient_data', 'error', 'unclassified'];
const MCP_ERROR_CODE_PATTERN = /^[a-z][a-z0-9_-]{0,79}$/;
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
function emptyTrafficCounters() { return Object.fromEntries(MCP_TRAFFIC_CLASSES.map((name) => [name, 0])); }
function emptyScopedCounters() { return { air_supply: emptyCounters(), complete_air_system: emptyCounters() }; }
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
		for (const tool of week.tools) tool.outcomeBreakdown.sort((left, right) =>
			left.trafficClass.localeCompare(right.trafficClass)
			|| left.outcome.localeCompare(right.outcome)
			|| left.errorCode.localeCompare(right.errorCode));
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

function isAsciiWhitespace(character) {
	return character === ' ' || character === '\t' || character === '\n' || character === '\r' || character === '\f';
}

function normalizeUserAgent(value) {
	if (typeof value !== 'string') return 'unknown';
	const input = value.toLowerCase().slice(0, 512);
	let normalized = '';
	let pendingSpace = false;
	for (let index = 0; index < input.length && normalized.length < 160;) {
		const character = input[index];
		if (isAsciiWhitespace(character)) {
			pendingSpace = normalized.length > 0;
			index += 1;
			continue;
		}
		if (pendingSpace) {
			normalized += ' ';
			pendingSpace = false;
			if (normalized.length >= 160) break;
		}
		if (character >= '0' && character <= '9') {
			const start = index;
			while (index < input.length && input[index] >= '0' && input[index] <= '9') index += 1;
			let versionEnd = index;
			let segments = 0;
			while (input[versionEnd] === '.' && input[versionEnd + 1] >= '0' && input[versionEnd + 1] <= '9') {
				segments += 1;
				versionEnd += 2;
				while (versionEnd < input.length && input[versionEnd] >= '0' && input[versionEnd] <= '9') versionEnd += 1;
			}
			if (segments > 0) {
				normalized += '#';
				index = versionEnd;
			} else {
				normalized += input.slice(start, index);
			}
			continue;
		}
		normalized += character;
		index += 1;
	}
	return normalized.slice(0, 160) || 'unknown';
}

export function callerFingerprint(secret, address, userAgent) {
	if (!(secret instanceof Uint8Array) || secret.byteLength < 16) throw new Error('mcp_telemetry_secret_invalid');
	return createHmac('sha256', secret).update(`${truncateNetworkAddress(address)}\n${normalizeUserAgent(userAgent)}`).digest('hex');
}

function stableJson(value) {
	if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
	if (value && typeof value === 'object') return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(',')}}`;
	return JSON.stringify(value);
}

export function mcpRequestFingerprint(secret, toolName, args) {
	if (!(secret instanceof Uint8Array) || secret.byteLength < 16) throw new Error('mcp_telemetry_secret_invalid');
	return createHmac('sha256', secret).update(`${toolName}\n${stableJson(args ?? {})}`).digest('hex');
}

export function classifyMcpTrafficHint(userAgent) {
	return ['compatair deployment smoke', 'compatair mcp profile contract smoke'].includes(normalizeUserAgent(userAgent)) ? 'smoke_ci' : undefined;
}

function outcomeFromVerdict(verdict) {
	return verdict === 'insufficient_data' ? 'insufficient_data' : 'success';
}

export function classifyMcpOutcomes(result) {
	if (!result || result.error || result.result?.isError || result.result?.structuredContent?.error) return 'error';
	const content = result.result?.structuredContent;
	return {
		primary: outcomeFromVerdict(content?.verdict),
		air_supply: content?.air_supply_verdict ? outcomeFromVerdict(content.air_supply_verdict.verdict) : undefined,
		complete_air_system: content?.overall_system_verdict ? outcomeFromVerdict(content.overall_system_verdict.verdict) : undefined,
	};
}

export function classifyMcpOutcome(result) {
	const outcomes = classifyMcpOutcomes(result);
	return outcomes === 'error' ? 'error' : outcomes.primary;
}

export function classifyMcpErrorCode(result) {
	const jsonRpcCode = result?.error?.code;
	if (Number.isSafeInteger(jsonRpcCode)) return `jsonrpc_${jsonRpcCode}`;
	if (result?.error) return 'jsonrpc_error';
	const toolCode = result?.result?.structuredContent?.error?.code;
	if (typeof toolCode === 'string' && /^[a-z][a-z0-9_]{0,63}$/.test(toolCode)) return `tool_${toolCode}`;
	if (result?.result?.structuredContent?.error) return 'structured_error';
	if (result?.result?.isError) return 'tool_error';
	return null;
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

function migrateV1Aggregate(value) {
	if (!value || value.schemaVersion !== '1.0.0' || !Array.isArray(value.weeks) || !Array.isArray(value.actors)) return value;
	return {
		...structuredClone(value), schemaVersion: PREVIOUS_MCP_TELEMETRY_SCHEMA_VERSION,
		weeks: value.weeks.map((week) => ({
			...week, traffic: { ...emptyTrafficCounters(), historical_unclassified: week.calls }, scopedOutcomes: emptyScopedCounters(),
			tools: week.tools.map((tool) => ({ ...tool, traffic: { ...emptyTrafficCounters(), historical_unclassified: tool.calls }, scopedOutcomes: emptyScopedCounters(), profiles: {} })),
			products: week.products.map((row) => ({ ...row, plausibleRequests: 0 })),
			compatibilities: week.compatibilities.map((row) => ({ ...row, plausibleRequests: 0 })),
		})),
		actors: value.actors.map((actor) => ({ ...actor, lastRequestHash: null, lastRequestAt: null, repeatedRequestCount: 0 })),
	};
}

function migrateV2Aggregate(value) {
	if (!value || value.schemaVersion !== PREVIOUS_MCP_TELEMETRY_SCHEMA_VERSION || !Array.isArray(value.weeks) || !Array.isArray(value.actors)) return value;
	return {
		...structuredClone(value), schemaVersion: MCP_TELEMETRY_SCHEMA_VERSION,
		weeks: value.weeks.map((week) => ({
			...week,
			tools: week.tools.map((tool) => ({
				...tool,
				outcomeBreakdown: tool.calls > 0 ? [{
					trafficClass: 'historical_unclassified',
					outcome: 'unclassified',
					errorCode: 'not_recorded',
					calls: tool.calls,
				}] : [],
			})),
		})),
	};
}

function validCounters(value) { return value && ['success', 'insufficient_data', 'error'].every((key) => isCount(value[key])); }
function validTraffic(value) { return value && MCP_TRAFFIC_CLASSES.every((key) => isCount(value[key])); }
function validScoped(value) { return value && validCounters(value.air_supply) && validCounters(value.complete_air_system); }
function validOutcomeBreakdown(value, expectedCalls) {
	return Array.isArray(value)
		&& value.every((row) => row && MCP_TRAFFIC_CLASSES.includes(row.trafficClass)
			&& MCP_OUTCOME_BREAKDOWN_VALUES.includes(row.outcome)
			&& typeof row.errorCode === 'string' && MCP_ERROR_CODE_PATTERN.test(row.errorCode)
			&& isCount(row.calls))
		&& value.reduce((sum, row) => sum + row.calls, 0) === expectedCalls;
}

function normalizeAggregate(input) {
	const value = migrateV2Aggregate(migrateV1Aggregate(input));
	if (!value || typeof value !== 'object' || Array.isArray(value) || value.schemaVersion !== MCP_TELEMETRY_SCHEMA_VERSION || !Array.isArray(value.weeks) || !Array.isArray(value.actors)) return undefined;
	if (!isCount(value.totalEvents) || (value.updatedAt !== null && !isIsoDate(value.updatedAt))) return undefined;
	for (const week of value.weeks) {
		if (!week || typeof week !== 'object' || !/^\d{4}-\d{2}-\d{2}$/.test(week.week) || !isCount(week.initializations) || !isCount(week.calls) || !isCount(week.canonicalFollows) || !isCount(week.clientInfoDeclared)) return undefined;
		if (!validCounters(week.outcomes) || !validTraffic(week.traffic) || !validScoped(week.scopedOutcomes)) return undefined;
		if (![week.clients, week.tools, week.products, week.compatibilities].every(Array.isArray)) return undefined;
		if (week.clients.some((row) => typeof row.family !== 'string' || !isCount(row.initializations))) return undefined;
		if (week.tools.some((row) => typeof row.name !== 'string' || !isCount(row.calls) || !isCount(row.canonicalIssued) || !isCount(row.canonicalFollows) || !validCounters(row.outcomes) || !validTraffic(row.traffic) || !validScoped(row.scopedOutcomes) || !row.profiles || typeof row.profiles !== 'object' || !validOutcomeBreakdown(row.outcomeBreakdown, row.calls))) return undefined;
		if (week.products.some((row) => !['compressor', 'tool'].includes(row.type) || typeof row.id !== 'string' || !isCount(row.requests) || !isCount(row.plausibleRequests))) return undefined;
		if (week.compatibilities.some((row) => typeof row.compressorId !== 'string' || typeof row.toolId !== 'string' || !isCount(row.requests) || !isCount(row.plausibleRequests))) return undefined;
	}
	for (const actor of value.actors) {
		if (!actor || typeof actor.id !== 'string' || !/^[a-f0-9]{64}$/.test(actor.id) || !isIsoDate(actor.firstSeen) || !isIsoDate(actor.lastSeen) || !isCount(actor.initializations) || !isCount(actor.calls) || !Array.isArray(actor.days) || !Array.isArray(actor.clients)) return undefined;
		if (actor.days.some((day) => !/^\d{4}-\d{2}-\d{2}$/.test(day)) || actor.clients.some((client) => typeof client !== 'string')) return undefined;
		if (!(actor.lastRequestHash === null || (typeof actor.lastRequestHash === 'string' && /^[a-f0-9]{64}$/.test(actor.lastRequestHash))) || !(actor.lastRequestAt === null || isIsoDate(actor.lastRequestAt)) || !isCount(actor.repeatedRequestCount)) return undefined;
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
	const week = incrementRow(next.weeks, (item) => item.week === weekKey(now), () => ({ week: weekKey(now), initializations: 0, calls: 0, clientInfoDeclared: 0, outcomes: emptyCounters(), traffic: emptyTrafficCounters(), scopedOutcomes: emptyScopedCounters(), canonicalFollows: 0, clients: [], tools: [], products: [], compatibilities: [] }));
	const actor = incrementRow(next.actors, (item) => item.id === event.actorId, () => ({ id: event.actorId, firstSeen: now.toISOString(), lastSeen: now.toISOString(), days: [], initializations: 0, calls: 0, clients: [], lastRequestHash: null, lastRequestAt: null, repeatedRequestCount: 0 }));
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
		const tool = incrementRow(week.tools, (item) => item.name === name, () => ({ name, calls: 0, outcomes: emptyCounters(), traffic: emptyTrafficCounters(), scopedOutcomes: emptyScopedCounters(), outcomeBreakdown: [], profiles: {}, canonicalIssued: 0, canonicalFollows: 0 }));
		if (event.type === 'canonical_follow') { week.canonicalFollows += 1; tool.canonicalFollows += 1; }
		else {
			if (!validOutcome(event.outcome)) throw new Error('mcp_telemetry_event_invalid');
			const sameRequest = typeof event.requestHash === 'string' && event.requestHash === actor.lastRequestHash;
			const secondsSinceLast = actor.lastRequestAt ? (now.getTime() - Date.parse(actor.lastRequestAt)) / 1_000 : Number.POSITIVE_INFINITY;
			actor.repeatedRequestCount = sameRequest ? actor.repeatedRequestCount + 1 : 1;
			let trafficClass = MCP_TRAFFIC_CLASSES.includes(event.trafficHint) ? event.trafficHint : undefined;
			if (!trafficClass && sameRequest && actor.repeatedRequestCount >= 5 && actor.initializations === 0) trafficClass = 'probe';
			if (!trafficClass && sameRequest && secondsSinceLast >= 0 && secondsSinceLast <= 60) trafficClass = 'automatic_retry';
			if (!trafficClass && actor.initializations > 0 && actor.clients.some((client) => client !== 'undeclared')) trafficClass = 'plausible_session';
			trafficClass ??= 'unknown';
			actor.lastRequestHash = typeof event.requestHash === 'string' && /^[a-f0-9]{64}$/.test(event.requestHash) ? event.requestHash : null;
			actor.lastRequestAt = now.toISOString();
			week.calls += 1; actor.calls += 1; tool.calls += 1; incrementOutcome(week.outcomes, event.outcome); incrementOutcome(tool.outcomes, event.outcome);
			week.traffic[trafficClass] += 1; tool.traffic[trafficClass] += 1;
			const errorCode = event.outcome === 'error' && typeof event.errorCode === 'string' && event.errorCode !== 'none' && MCP_ERROR_CODE_PATTERN.test(event.errorCode)
				? event.errorCode
				: event.outcome === 'error' ? 'unclassified_error' : 'none';
			incrementRow(tool.outcomeBreakdown,
				(item) => item.trafficClass === trafficClass && item.outcome === event.outcome && item.errorCode === errorCode,
				() => ({ trafficClass, outcome: event.outcome, errorCode, calls: 0 })).calls += 1;
			for (const scope of ['air_supply', 'complete_air_system']) {
				const outcome = event.scopedOutcomes?.[scope];
				if (validOutcome(outcome)) { incrementOutcome(week.scopedOutcomes[scope], outcome); incrementOutcome(tool.scopedOutcomes[scope], outcome); }
			}
			const profile = ['core', 'extended', 'legacy'].includes(event.profile) ? event.profile : 'unknown';
			tool.profiles[profile] = (tool.profiles[profile] ?? 0) + 1;
			if (event.canonicalIssued === true) tool.canonicalIssued += 1;
			for (const product of event.products ?? []) {
				if (!product || !['compressor', 'tool'].includes(product.type) || typeof product.id !== 'string') continue;
				const row = incrementRow(week.products, (item) => item.type === product.type && item.id === product.id, () => ({ ...product, requests: 0, plausibleRequests: 0 }));
				row.requests += 1; if (trafficClass === 'plausible_session') row.plausibleRequests += 1;
			}
			for (const pair of event.compatibilities ?? []) {
				if (!pair || typeof pair.compressorId !== 'string' || typeof pair.toolId !== 'string') continue;
				const row = incrementRow(week.compatibilities, (item) => item.compressorId === pair.compressorId && item.toolId === pair.toolId, () => ({ ...pair, requests: 0, plausibleRequests: 0 }));
				row.requests += 1; if (trafficClass === 'plausible_session') row.plausibleRequests += 1;
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
	const traffic = value.weeks.reduce((acc, week) => { for (const name of MCP_TRAFFIC_CLASSES) acc[name] += week.traffic[name]; return acc; }, emptyTrafficCounters());
	const scopedOutcomes = value.weeks.reduce((acc, week) => { for (const scope of ['air_supply', 'complete_air_system']) for (const outcome of ['success', 'insufficient_data', 'error']) acc[scope][outcome] += week.scopedOutcomes[scope][outcome]; return acc; }, emptyScopedCounters());
	const actors = value.actors;
	const recurrentActors = actors.filter((actor) => actor.calls >= 2 && actor.days.length >= 2);
	const recurrentIntegrations = actors.filter((actor) => actor.initializations >= 2 && actor.days.length >= 2 && actor.clients.some((client) => client !== 'undeclared'));
	const publishCount = (count) => actors.length >= minimumCohort ? count : null;
	const compressorLabels = new Map((catalog?.compressors ?? []).map((item) => [item.id, `${item.brand} ${item.model}`]));
	const toolLabels = new Map((catalog?.tools ?? []).map((item) => [item.id, item.label ?? `${item.brand} ${item.model}`]));
	const clients = sumRows(value.weeks, ['family'], 'clients', 'initializations').filter((row) => row.initializations >= minimumCohort);
	const tools = new Map();
	for (const week of value.weeks) for (const source of week.tools) {
		const row = tools.get(source.name) ?? { name: source.name, calls: 0, success: 0, insufficient_data: 0, errors: 0, traffic: emptyTrafficCounters(), scoped_outcomes: emptyScopedCounters(), outcome_breakdown: [], profiles: {}, canonical_issued: 0, canonical_follows: 0 };
		row.calls += source.calls; row.success += source.outcomes.success; row.insufficient_data += source.outcomes.insufficient_data; row.errors += source.outcomes.error; row.canonical_issued += source.canonicalIssued; row.canonical_follows += source.canonicalFollows; tools.set(source.name, row);
		for (const name of MCP_TRAFFIC_CLASSES) row.traffic[name] += source.traffic[name];
		for (const scope of ['air_supply', 'complete_air_system']) for (const outcome of ['success', 'insufficient_data', 'error']) row.scoped_outcomes[scope][outcome] += source.scopedOutcomes[scope][outcome];
		for (const breakdown of source.outcomeBreakdown) {
			incrementRow(row.outcome_breakdown,
				(item) => item.traffic_class === breakdown.trafficClass && item.outcome === breakdown.outcome && item.error_code === breakdown.errorCode,
				() => ({ traffic_class: breakdown.trafficClass, outcome: breakdown.outcome, error_code: breakdown.errorCode, calls: 0 })).calls += breakdown.calls;
		}
		for (const [profile, count] of Object.entries(source.profiles)) row.profiles[profile] = (row.profiles[profile] ?? 0) + count;
	}
	const toolValues = [...tools.values()].sort((left, right) => right.calls - left.calls || left.name.localeCompare(right.name));
	const toolOutcomeBreakdown = toolValues.flatMap((row) => row.outcome_breakdown.map((breakdown) => ({
		traffic_class: breakdown.traffic_class,
		tool: row.name,
		outcome: breakdown.outcome,
		error_code: breakdown.error_code === 'none' ? null : breakdown.error_code,
		calls: breakdown.calls,
	}))).sort((left, right) => left.traffic_class.localeCompare(right.traffic_class)
		|| left.tool.localeCompare(right.tool)
		|| left.outcome.localeCompare(right.outcome)
		|| (left.error_code ?? '').localeCompare(right.error_code ?? ''));
	const toolRows = toolValues.map(({ outcome_breakdown: _outcomeBreakdown, ...row }) => ({ ...row, success_rate: ratio(row.success, row.calls), insufficient_data_rate: ratio(row.insufficient_data, row.calls), error_rate: ratio(row.errors, row.calls), canonical_follow_rate: ratio(row.canonical_follows, row.canonical_issued) }));
	const plausibleProducts = sumRows(value.weeks, ['type', 'id'], 'products', 'plausibleRequests').filter((row) => row.plausibleRequests >= minimumCohort).slice(0, 20).map((row) => ({ type: row.type, id: row.id, requests: row.plausibleRequests, label: row.type === 'compressor' ? compressorLabels.get(row.id) ?? row.id : toolLabels.get(row.id) ?? row.id }));
	const plausibleCompatibilities = sumRows(value.weeks, ['compressorId', 'toolId'], 'compatibilities', 'plausibleRequests').filter((row) => row.plausibleRequests >= minimumCohort).slice(0, 20).map((row) => ({ compressorId: row.compressorId, toolId: row.toolId, requests: row.plausibleRequests, compressor: compressorLabels.get(row.compressorId) ?? row.compressorId, tool: toolLabels.get(row.toolId) ?? row.toolId }));
	const decisionCalls = traffic.plausible_session;
	return {
		schema_version: MCP_TELEMETRY_SCHEMA_VERSION, updated_at: value.updatedAt, retention_days: MCP_TELEMETRY_RETENTION_DAYS, minimum_public_cohort: minimumCohort,
		measurement: { users: 'Estimated anonymous callers, not identified people.', recurrent: 'At least two calls or initializations on at least two distinct days.', decision_calls: 'Only plausible sessions; CI smoke, repeated retries, probes, unknown and historical unclassified traffic are reported separately.', tool_outcome_breakdown: 'Exact traffic class × tool × outcome × normalized error code counts. Calls predating schema 2.1.0 remain explicitly unclassified.', canonical_follows: 'Attributed consultations through canonical_follow_url; URL emission alone is never counted as a follow.' },
		totals: { initializations: totals.initializations, tool_calls: totals.calls, success: totals.success, insufficient_data: totals.insufficientData, errors: totals.errors, success_rate: ratio(totals.success, totals.calls), insufficient_data_rate: ratio(totals.insufficientData, totals.calls), error_rate: ratio(totals.errors, totals.calls), client_info_declared: totals.clientInfoDeclared, client_info_declaration_rate: ratio(totals.clientInfoDeclared, totals.initializations), canonical_follows: totals.canonicalFollows, estimated_callers: publishCount(actors.length), recurrent_callers: publishCount(recurrentActors.length), recurrent_integrations: publishCount(recurrentIntegrations.length) },
		decision_usage: { tool_calls: decisionCalls, share_of_all_calls: ratio(decisionCalls, totals.calls) },
		traffic_classes: traffic,
		scoped_outcomes: scopedOutcomes,
		tool_outcome_breakdown: toolOutcomeBreakdown,
		clients, tools: toolRows, products: plausibleProducts, compatibilities: plausibleCompatibilities,
		limitations: ['Traffic classes are heuristic observability labels, never proof that a caller is human.', 'The deployment smoke label relies on the exact operational user agent and is not an authentication mechanism.', 'Calls recorded before telemetry schema 2.1.0 have no recoverable joint traffic/tool/outcome/error distribution and remain grouped as unclassified.', 'Small client, product and compatibility cohorts are withheld.', 'A returned canonical URL is not counted as consulted until the attributed URL is actually opened.'],
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

/** @param {{ filePath?: string, secretFilePath?: string, configuredSecret?: string, catalog?: any, clock?: () => Date }} options */
export function createMcpTelemetryStore({ filePath = undefined, secretFilePath = undefined, configuredSecret = undefined, catalog = { compressors: [], tools: [] }, clock = () => new Date() } = {}) {
	let queue = Promise.resolve();
	let statePromise = readAggregate(filePath);
	let secretPromise = readOrCreateSecret(secretFilePath, configuredSecret);
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
						for (const event of batch) next = aggregateMcpTelemetry(next, event, clock());
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
		async actorId(address, userAgent) { return callerFingerprint(await secretPromise, address, userAgent); },
		async requestHash(toolName, args) { return mcpRequestFingerprint(await secretPromise, toolName, args); },
		async record(event) { pendingEvents.push(event); await scheduleFlush(); },
		async snapshot() { await waitForIdle(); return structuredClone(await statePromise); },
		async publicReport() { await waitForIdle(); return buildPublicMcpUsageReport(await statePromise, catalog); },
	};
}
