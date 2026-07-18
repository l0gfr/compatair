import { createHash } from 'node:crypto';
import { UCP_CAPABILITY_NAME, UCP_CAPABILITY_VERSION, UCP_PROTOCOL_VERSION } from './ucp-core.mjs';
import { CORE_TOOL_NAMES, LEGACY_SUCCESSORS, outputSchemas, receiptSchema } from './mcp-output-schemas.mjs';

const ENGINE_VERSION = '1.3.0';
const MCP_SERVER_VERSION = '2.1.0';
const METHOD_VERSION = '2026.07';
const VERDICT_SCHEMA_VERSION = '2.0.0';
const PROTOCOL_VERSION = '2025-11-25';
const SUPPORTED_PROTOCOL_VERSIONS = [PROTOCOL_VERSION, '2025-06-18', '2025-03-26'];
const STANDARD_ATMOSPHERE_BAR = 1.01325;
const MAX_SHORT_TEXT = 256;
const MAX_URL_TEXT = 4_096;
const PUBLIC_ORIGIN = 'https://compatair.fr';

function isRecord(value) { return value !== null && typeof value === 'object' && !Array.isArray(value); }
function hasOnlyKeys(value, allowed) { return isRecord(value) && Object.keys(value).every((key) => allowed.includes(key)); }
function isShortString(value) { return typeof value === 'string' && value.length <= MAX_SHORT_TEXT; }
function isFiniteNumber(value, minimum, maximum, exclusiveMinimum = false) {
	return typeof value === 'number' && Number.isFinite(value) && (exclusiveMinimum ? value > minimum : value >= minimum) && (maximum === undefined || value <= maximum);
}
function isOptionalInteger(value, minimum, maximum) { return value === undefined || (Number.isInteger(value) && value >= minimum && value <= maximum); }
function isOptionalShortString(value) { return value === undefined || isShortString(value); }
function isOptionalUrlString(value) { return value === undefined || (typeof value === 'string' && value.length > 0 && value.length <= MAX_URL_TEXT); }
function normalizedText(value) { return String(value ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }
function unique(values) { return [...new Set(values.filter((value) => typeof value === 'string' && value.length > 0))]; }
function withoutUndefined(value) {
	if (Array.isArray(value)) return value.filter((item) => item !== undefined).map(withoutUndefined);
	if (isRecord(value)) return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined).map(([key, item]) => [key, withoutUndefined(item)]));
	return value;
}
function publicCorpusUrl(value) {
	try {
		const url = new URL(value, PUBLIC_ORIGIN);
		return url.origin === PUBLIC_ORIGIN && url.protocol === 'https:' && !url.username && !url.password ? url.toString() : undefined;
	} catch { return undefined; }
}
function productUrl(type, item) { return `${PUBLIC_ORIGIN}/${type === 'compressor' ? 'compresseurs' : 'outils-pneumatiques'}/${encodeURIComponent(item.slug)}/`; }
function compatibilityUrl(compressor, tool) { return `${PUBLIC_ORIGIN}/calculateur/?outil=${encodeURIComponent(tool.id)}&compresseur=${encodeURIComponent(compressor.id)}`; }
function proofUrl(compressor, tool) { return `${PUBLIC_ORIGIN}/graphe-preuve/#compresseur=${encodeURIComponent(compressor.id)}&outil=${encodeURIComponent(tool.id)}`; }
function compatAirId(type, id) { return `ca:${type}:${id}`; }
function stableConfigurationId(value) {
	const normalized = { compressorId: value.compressorId ?? null, mode: value.mode ?? 'successive', toolIds: [...(value.toolIds ?? [])].sort() };
	return compatAirId('configuration', createHash('sha256').update(JSON.stringify(normalized)).digest('hex').slice(0, 24));
}
function stableJson(value) {
	if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
	if (isRecord(value)) return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(',')}}`;
	return JSON.stringify(value);
}
function publicVerdict(verdict) {
	if (verdict === 'continuous') return 'compatible';
	if (verdict === 'intermittent') return 'compatible_with_limits';
	if (verdict === 'incompatible') return 'incompatible';
	if (verdict === 'insufficient_data') return 'insufficient_data';
	return 'information';
}
function sourceUrls(products) { return unique(products.flatMap((product) => (product?.evidence ?? []).map((item) => item.sourceUrl))); }
function productSummary(type, item) {
	return {
		compat_air_id: compatAirId(type, item.id), type, id: item.id, slug: item.slug, brand: item.brand, model: item.model,
		...(item.label ? { label: item.label } : {}), ...(item.mpn ? { mpn: item.mpn } : {}), ...(item.ean ? { ean: item.ean } : {}),
		canonical_url: productUrl(type, item),
	};
}

function validDemand(item) {
	if (!isRecord(item)) return false;
	if (item.model === 'per-action') return hasOnlyKeys(item, ['model', 'litersPerAction', 'actionsPerMinute', 'pressureBar', 'quantity'])
		&& isFiniteNumber(item.litersPerAction, 0, undefined, true) && isFiniteNumber(item.actionsPerMinute, 0, undefined, true)
		&& isFiniteNumber(item.pressureBar, 0, undefined, true) && isOptionalInteger(item.quantity, 1, 20);
	if (item.model === 'inflation') return hasOnlyKeys(item, ['model', 'volumeLiters', 'initialPressureBar', 'targetPressureBar', 'targetMinutes', 'quantity'])
		&& isFiniteNumber(item.volumeLiters, 0, undefined, true) && isFiniteNumber(item.initialPressureBar, 0)
		&& isFiniteNumber(item.targetPressureBar, 0, undefined, true) && item.targetPressureBar > item.initialPressureBar
		&& isFiniteNumber(item.targetMinutes, 0, undefined, true) && isOptionalInteger(item.quantity, 1, 20);
	return (item.model === undefined || item.model === 'fixed-flow') && hasOnlyKeys(item, ['model', 'flowLpm', 'pressureBar', 'quantity', 'dutyFactor'])
		&& isFiniteNumber(item.flowLpm, 0, undefined, true) && isFiniteNumber(item.pressureBar, 0, undefined, true)
		&& isOptionalInteger(item.quantity, 1, 20) && (item.dutyFactor === undefined || isFiniteNumber(item.dutyFactor, 0, 1, true));
}

function validToolArguments(name, args) {
	if (!isRecord(args)) return false;
	switch (name) {
		case 'search_tools': return hasOnlyKeys(args, ['query', 'category', 'cursor', 'limit'])
			&& (args.query === undefined || isShortString(args.query)) && (args.category === undefined || isShortString(args.category))
			&& (args.cursor === undefined || isShortString(args.cursor)) && isOptionalInteger(args.limit, 1, 50);
		case 'get_tool_requirements': return hasOnlyKeys(args, ['id']) && isShortString(args.id) && args.id.length > 0;
		case 'search_compressors': return hasOnlyKeys(args, ['query', 'minTankLiters', 'minPressureBar', 'oilType', 'cursor', 'limit'])
			&& (args.query === undefined || isShortString(args.query)) && (args.cursor === undefined || isShortString(args.cursor))
			&& (args.minTankLiters === undefined || isFiniteNumber(args.minTankLiters, 0)) && (args.minPressureBar === undefined || isFiniteNumber(args.minPressureBar, 0))
			&& (args.oilType === undefined || ['oil', 'oil-free'].includes(args.oilType)) && isOptionalInteger(args.limit, 1, 50);
		case 'get_compressor_specs': return hasOnlyKeys(args, ['id']) && isShortString(args.id) && args.id.length > 0;
		case 'size_compressor': return hasOnlyKeys(args, ['demands', 'mode', 'safetyMargin', 'measuredLeakLpm', 'measuredPressureDropBar']) && Array.isArray(args.demands)
			&& args.demands.length >= 1 && args.demands.length <= 20 && args.demands.every(validDemand)
			&& (args.mode === undefined || ['simultaneous', 'successive'].includes(args.mode))
			&& (args.safetyMargin === undefined || isFiniteNumber(args.safetyMargin, 0, 1))
			&& (args.measuredLeakLpm === undefined || isFiniteNumber(args.measuredLeakLpm, 0, 10_000))
			&& (args.measuredPressureDropBar === undefined || isFiniteNumber(args.measuredPressureDropBar, 0, 50));
		case 'check_compatibility': return hasOnlyKeys(args, ['compressorId', 'toolId', 'safetyMargin'])
			&& isShortString(args.compressorId) && args.compressorId.length > 0 && isShortString(args.toolId) && args.toolId.length > 0
			&& (args.safetyMargin === undefined || isFiniteNumber(args.safetyMargin, 0, 1));
		case 'compare_compressors': return hasOnlyKeys(args, ['ids']) && Array.isArray(args.ids) && args.ids.length >= 2 && args.ids.length <= 3
			&& args.ids.every((id) => isShortString(id) && id.length > 0);
		case 'find_accessories': return hasOnlyKeys(args, ['toolId']) && isShortString(args.toolId) && args.toolId.length > 0;
		case 'find_offers': return hasOnlyKeys(args, ['productId', 'cursor', 'limit']) && isShortString(args.productId) && args.productId.length > 0
			&& (args.cursor === undefined || isShortString(args.cursor)) && isOptionalInteger(args.limit, 1, 50);
		case 'identify_product': return hasOnlyKeys(args, ['query', 'url', 'ean', 'reference', 'limit'])
			&& isOptionalShortString(args.query) && isOptionalUrlString(args.url) && isOptionalShortString(args.ean) && isOptionalShortString(args.reference)
			&& [args.query, args.url, args.ean, args.reference].some((value) => typeof value === 'string' && value.trim().length > 0)
			&& isOptionalInteger(args.limit, 1, 10);
		case 'build_complete_air_system': return hasOnlyKeys(args, ['toolIds', 'mode', 'compressorId', 'limit'])
			&& Array.isArray(args.toolIds) && args.toolIds.length >= 1 && args.toolIds.length <= 20 && args.toolIds.every((id) => isShortString(id) && id.length > 0)
			&& (args.mode === undefined || ['simultaneous', 'successive'].includes(args.mode)) && isOptionalShortString(args.compressorId) && isOptionalInteger(args.limit, 1, 10);
		case 'explain_compatibility_verdict':
		case 'get_compatibility_evidence': return hasOnlyKeys(args, ['compressorId', 'toolId'])
			&& isShortString(args.compressorId) && args.compressorId.length > 0 && isShortString(args.toolId) && args.toolId.length > 0;
		case 'find_compatible_alternatives': return hasOnlyKeys(args, ['compressorId', 'toolIds', 'mode', 'limit'])
			&& isShortString(args.compressorId) && args.compressorId.length > 0 && Array.isArray(args.toolIds) && args.toolIds.length >= 1 && args.toolIds.length <= 20
			&& args.toolIds.every((id) => isShortString(id) && id.length > 0) && (args.mode === undefined || ['simultaneous', 'successive'].includes(args.mode)) && isOptionalInteger(args.limit, 1, 10);
		case 'compare_complete_systems': return hasOnlyKeys(args, ['systems']) && Array.isArray(args.systems) && args.systems.length >= 2 && args.systems.length <= 5
			&& args.systems.every((system) => isRecord(system) && hasOnlyKeys(system, ['compressorId', 'toolIds', 'mode'])
				&& isShortString(system.compressorId) && system.compressorId.length > 0 && Array.isArray(system.toolIds) && system.toolIds.length >= 1 && system.toolIds.length <= 20
				&& system.toolIds.every((id) => isShortString(id) && id.length > 0) && (system.mode === undefined || ['simultaneous', 'successive'].includes(system.mode)));
		case 'search_knowledge': return hasOnlyKeys(args, ['query', 'type', 'locale', 'cursor', 'limit']) && isShortString(args.query) && args.query.trim().length > 0
			&& (args.type === undefined || ['Guide', 'Glossaire', 'Compresseur', 'Outil'].includes(args.type)) && (args.locale === undefined || ['fr', 'en'].includes(args.locale)) && isOptionalShortString(args.cursor) && isOptionalInteger(args.limit, 1, 20);
		case 'get_current_offers': return hasOnlyKeys(args, ['productIds', 'cursor', 'limit']) && Array.isArray(args.productIds) && args.productIds.length >= 1 && args.productIds.length <= 20
			&& args.productIds.every((id) => isShortString(id) && id.length > 0) && isOptionalShortString(args.cursor) && isOptionalInteger(args.limit, 1, 50);
		case 'get_changefeed': return hasOnlyKeys(args, ['since', 'cursor', 'limit']) && isOptionalShortString(args.since) && isOptionalShortString(args.cursor) && isOptionalInteger(args.limit, 1, 20);
		case 'evaluate_air_compatibility': {
			if (!hasOnlyKeys(args, ['meta', 'ucp', 'intent', 'configuration', 'constraints', 'requested_outputs']) || !isRecord(args.meta) || !hasOnlyKeys(args.meta, ['ucp-agent']) || !isRecord(args.meta['ucp-agent']) || !hasOnlyKeys(args.meta['ucp-agent'], ['profile']) || !isOptionalUrlString(args.meta['ucp-agent'].profile)) return false;
			if (!isRecord(args.ucp) || !hasOnlyKeys(args.ucp, ['version']) || args.ucp.version !== UCP_PROTOCOL_VERSION) return false;
			const intent = args.intent ?? 'will_it_work';
			if (!['will_it_work', 'explain_limits', 'find_minimal_change', 'build_complete_system'].includes(intent)) return false;
			const configuration = args.configuration;
			if (!isRecord(configuration) || !hasOnlyKeys(configuration, ['compressor', 'tools', 'mode']) || !Array.isArray(configuration.tools) || configuration.tools.length < 1 || configuration.tools.length > 20) return false;
			if (configuration.compressor !== undefined && (!isRecord(configuration.compressor) || !hasOnlyKeys(configuration.compressor, ['id']) || !isShortString(configuration.compressor.id))) return false;
			if (intent !== 'build_complete_system' && configuration.compressor === undefined) return false;
			if (configuration.mode !== undefined && !['simultaneous', 'successive'].includes(configuration.mode)) return false;
			if (!configuration.tools.every((tool) => isRecord(tool) && hasOnlyKeys(tool, ['id']) && isShortString(tool.id) && tool.id.length > 0)) return false;
			if (args.constraints !== undefined && (!isRecord(args.constraints) || !hasOnlyKeys(args.constraints, ['max_total_minor', 'currency', 'minimum_merchants', 'country'])
				|| (args.constraints.max_total_minor !== undefined && !isOptionalInteger(args.constraints.max_total_minor, 0, 100_000_000))
				|| (args.constraints.currency !== undefined && args.constraints.currency !== 'EUR') || (args.constraints.country !== undefined && args.constraints.country !== 'FR')
				|| (args.constraints.minimum_merchants !== undefined && !isOptionalInteger(args.constraints.minimum_merchants, 1, 10)))) return false;
			const allowedOutputs = ['compatibility', 'mandatory_accessories', 'limits', 'alternatives', 'complete_configuration', 'attribution', 'evidence'];
			return args.requested_outputs === undefined || (Array.isArray(args.requested_outputs) && args.requested_outputs.length <= allowedOutputs.length && args.requested_outputs.every((item) => allowedOutputs.includes(item)) && new Set(args.requested_outputs).size === args.requested_outputs.length);
		}
		default: return true;
	}
}

function page(values, cursor, limit = 20) {
	let decoded = '';
	try { decoded = typeof cursor === 'string' && cursor.length <= MAX_SHORT_TEXT ? Buffer.from(cursor, 'base64url').toString('utf8') : ''; } catch {}
	const start = /^\d{1,10}$/.test(decoded) ? Number.parseInt(decoded, 10) : 0;
	const safeStart = Number.isInteger(start) && start >= 0 ? start : 0;
	const safeLimit = Math.min(Math.max(Number(limit) || 20, 1), 50);
	const items = values.slice(safeStart, safeStart + safeLimit);
	const next = safeStart + safeLimit < values.length ? Buffer.from(String(safeStart + safeLimit)).toString('base64url') : undefined;
	return { items, ...(next ? { nextCursor: next } : {}) };
}

function interpolateFad(compressor, pressureBar) {
	const curve = [...(compressor.fadCurve ?? [])].sort((a, b) => a.pressureBar - b.pressureBar);
	if (!curve.length) return undefined;
	if (curve.length === 1) return pressureBar === curve[0].pressureBar ? curve[0].litersPerMinute : undefined;
	if (pressureBar < curve[0].pressureBar || pressureBar > curve.at(-1).pressureBar) return undefined;
	const exact = curve.find((point) => point.pressureBar === pressureBar); if (exact) return exact.litersPerMinute;
	const upperIndex = curve.findIndex((point) => point.pressureBar > pressureBar); const lower = curve[upperIndex - 1], upper = curve[upperIndex];
	return lower.litersPerMinute + ((pressureBar - lower.pressureBar) / (upper.pressureBar - lower.pressureBar)) * (upper.litersPerMinute - lower.litersPerMinute);
}

function resolveAvailableFad(compressor, pressureBar) {
	const curve = [...(compressor.fadCurve ?? [])].sort((a, b) => a.pressureBar - b.pressureBar);
	if (!curve.length) return undefined;
	const exact = curve.find((point) => point.pressureBar === pressureBar);
	if (exact) return { litersPerMinute: exact.litersPerMinute, basis: 'exact', referencePressureBar: exact.pressureBar };
	const interpolated = interpolateFad(compressor, pressureBar);
	if (interpolated !== undefined) return { litersPerMinute: interpolated, basis: 'interpolated' };
	const lowestHigherPressurePoint = curve.find((point) => point.pressureBar > pressureBar);
	if (!lowestHigherPressurePoint) return undefined;
	return { litersPerMinute: lowestHigherPressurePoint.litersPerMinute, basis: 'higher-pressure-bound', referencePressureBar: lowestHigherPressurePoint.pressureBar };
}

function compatibility(compressor, tool, safetyMargin = .25) {
	if (tool.demandModel !== 'fixed-flow') return {
		verdict: 'insufficient_data',
		limitingFactor: 'data',
		warnings: [tool.demandModel === 'per-action' ? 'Un rythme d’actions par minute est requis pour convertir le volume par action en débit.' : tool.demandExplanation],
		calculationVersion: ENGINE_VERSION,
	};
	const requiredFadLpm = tool.airflowLpm.typical * (1 + safetyMargin);
	if (compressor.maxPressureBar < tool.workingPressureBar.typical) return { verdict: 'incompatible', limitingFactor: 'pressure', requiredFadLpm, calculationVersion: ENGINE_VERSION };
	const fadResolution = resolveAvailableFad(compressor, tool.workingPressureBar.typical);
	const availableFadLpm = fadResolution?.litersPerMinute;
	if (availableFadLpm === undefined || ['C', 'D'].includes(compressor.confidence)) return { verdict: 'insufficient_data', limitingFactor: 'data', requiredFadLpm, calculationVersion: ENGINE_VERSION };
	const effectiveAverageCapacityLpm = availableFadLpm * (compressor.dutyCycle ?? 1);
	const continuous = availableFadLpm >= tool.airflowLpm.typical && effectiveAverageCapacityLpm >= tool.airflowLpm.typical;
	return {
		verdict: continuous ? 'continuous' : 'incompatible', limitingFactor: continuous ? undefined : compressor.dutyCycle && effectiveAverageCapacityLpm < tool.airflowLpm.typical ? 'duty_cycle' : 'flow',
		requiredFadLpm, availableFadLpm, effectiveAverageCapacityLpm, marginPercent: ((availableFadLpm - tool.airflowLpm.typical) / tool.airflowLpm.typical) * 100,
		availableFadBasis: fadResolution.basis, availableFadReferencePressureBar: fadResolution.referencePressureBar,
		warnings: [
			...(continuous && availableFadLpm < requiredFadLpm ? [`Le débit nominal est couvert, mais la marge recommandée de ${Math.round(safetyMargin * 100)} % n’est pas atteinte.`] : []),
			...(fadResolution.basis === 'higher-pressure-bound' ? [`Borne conservatrice : ${availableFadLpm} L/min mesurés à ${fadResolution.referencePressureBar} bar sont retenus pour le besoin à ${tool.workingPressureBar.typical} bar ; aucun point de courbe n’est inventé.`] : []),
		],
		calculationVersion: ENGINE_VERSION,
	};
}

function evaluateSystem(compressor, selectedTools, mode = 'successive') {
	const limitations = [];
	if (selectedTools.some((tool) => tool.demandModel !== 'fixed-flow')) {
		limitations.push('Au moins un outil ne publie pas un débit continu directement comparable ; une cadence ou un volume d’usage explicite est requis.');
		return { verdict: 'insufficient_data', limitingFactor: 'data', limitations, mode };
	}
	const requiredPressureBar = Math.max(...selectedTools.map((tool) => tool.workingPressureBar.typical));
	const demandFlowLpm = mode === 'simultaneous'
		? selectedTools.reduce((sum, tool) => sum + tool.airflowLpm.typical, 0)
		: Math.max(...selectedTools.map((tool) => tool.airflowLpm.typical));
	const recommendedFadLpm = demandFlowLpm * 1.25;
	if (compressor.maxPressureBar < requiredPressureBar) return { verdict: 'incompatible', limitingFactor: 'pressure', requiredPressureBar, demandFlowLpm, recommendedFadLpm, limitations, mode };
	const fadResolution = ['C', 'D'].includes(compressor.confidence) ? undefined : resolveAvailableFad(compressor, requiredPressureBar);
	const availableFadLpm = fadResolution?.litersPerMinute;
	if (availableFadLpm === undefined) {
		limitations.push('Le FAD du compresseur à la pression demandée est absent ou insuffisamment fiable.');
		return { verdict: 'insufficient_data', limitingFactor: 'data', requiredPressureBar, demandFlowLpm, recommendedFadLpm, limitations, mode };
	}
	const effectiveAverageCapacityLpm = availableFadLpm * (compressor.dutyCycle ?? 1);
	if (fadResolution.basis === 'higher-pressure-bound') limitations.push(`Borne conservatrice : ${availableFadLpm} L/min mesurés à ${fadResolution.referencePressureBar} bar sont retenus pour le besoin à ${requiredPressureBar} bar ; aucun point de courbe n’est inventé.`);
	const verdict = availableFadLpm >= demandFlowLpm && effectiveAverageCapacityLpm >= demandFlowLpm ? 'continuous' : 'incompatible';
	if (verdict === 'continuous' && availableFadLpm < recommendedFadLpm) limitations.push('Le débit demandé est couvert, mais la réserve recommandée de 25 % n’est pas atteinte.');
	if (verdict === 'incompatible') limitations.push(effectiveAverageCapacityLpm < demandFlowLpm ? 'La capacité moyenne documentée ne couvre pas la demande.' : 'Le débit de pointe documenté ne couvre pas la demande.');
	return {
		verdict, limitingFactor: verdict === 'incompatible' ? compressor.dutyCycle && effectiveAverageCapacityLpm < demandFlowLpm ? 'duty_cycle' : 'flow' : undefined,
		requiredPressureBar, demandFlowLpm, recommendedFadLpm, availableFadLpm, effectiveAverageCapacityLpm,
		availableFadBasis: fadResolution.basis, availableFadReferencePressureBar: fadResolution.referencePressureBar, limitations, mode,
	};
}

function airSupplyVerdict(evaluation, extraLimitations = []) {
	const limitations = unique([...(evaluation?.limitations ?? []), ...(evaluation?.warnings ?? []), ...extraLimitations]);
	return {
		schema_version: VERDICT_SCHEMA_VERSION,
		scope: 'air_supply',
		verdict: publicVerdict(evaluation?.verdict ?? 'insufficient_data'),
		...(evaluation?.verdict ? { engine_verdict: evaluation.verdict } : {}),
		limiting_factor: evaluation?.limitingFactor ?? null,
		limitations,
		metrics: {
			required_fad_lpm: evaluation?.requiredFadLpm ?? null,
			available_fad_lpm: evaluation?.availableFadLpm ?? null,
			effective_average_capacity_lpm: evaluation?.effectiveAverageCapacityLpm ?? null,
			required_pressure_bar: evaluation?.requiredPressureBar ?? null,
			available_pressure_bar: evaluation?.availablePressureBar ?? null,
			demand_flow_lpm: evaluation?.demandFlowLpm ?? null,
			recommended_fad_lpm: evaluation?.recommendedFadLpm ?? null,
			margin_percent: evaluation?.marginPercent ?? null,
			mode: evaluation?.mode ?? null,
		},
	};
}

function completeSystemVerdict(airVerdict, limitations = []) {
	const normalizedLimitations = unique(limitations);
	return {
		schema_version: VERDICT_SCHEMA_VERSION,
		scope: 'complete_air_system',
		verdict: normalizedLimitations.length ? 'insufficient_data' : airVerdict.verdict,
		limiting_factor: normalizedLimitations.length ? 'unverified_components' : airVerdict.limiting_factor,
		limitations: unique([...airVerdict.limitations, ...normalizedLimitations]),
	};
}

function commercialConstraintsVerdict(verified, limitations = []) {
	return {
		schema_version: VERDICT_SCHEMA_VERSION,
		scope: 'commercial_constraints',
		verdict: verified ? 'compatible' : 'insufficient_data',
		limiting_factor: verified ? null : 'offers',
		limitations: unique(limitations),
	};
}

function compatibilityReceipt(catalog, { configurationId, overallSystemVerdict, airSupplyVerdict: airVerdict, canonicalUrl, sources }) {
	const payload = {
		schema_version: '1.0.0', configuration_id: configurationId,
		overall_system_verdict: overallSystemVerdict, air_supply_verdict: airVerdict,
		method_version: METHOD_VERSION, catalog_version: catalog.catalogVersion,
		observed_at: catalog.verifiedAt ?? new Date(0).toISOString().slice(0, 10), canonical_url: canonicalUrl, source_urls: unique(sources),
	};
	const digest = createHash('sha256').update(stableJson(payload)).digest('hex');
	return {
		...payload, receipt_id: `ca:receipt:${digest}`,
		integrity: { algorithm: 'sha-256', digest, canonicalization: 'json-sort-keys-v1' },
		verification_url: `${PUBLIC_ORIGIN}/recu-compatibilite/#${digest}`,
	};
}

function verifyCompatibilityReceipt(value) {
	if (!isRecord(value)) return { valid: false, error: 'invalid_receipt' };
	const allowed = ['schema_version', 'receipt_id', 'configuration_id', 'overall_system_verdict', 'air_supply_verdict', 'method_version', 'catalog_version', 'observed_at', 'canonical_url', 'source_urls', 'integrity', 'verification_url'];
	if (!hasOnlyKeys(value, allowed) || !allowed.every((key) => Object.hasOwn(value, key))) return { valid: false, error: 'invalid_receipt' };
	const validScopedVerdict = (verdict, scope) => isRecord(verdict)
		&& hasOnlyKeys(verdict, ['schema_version', 'scope', 'verdict', 'engine_verdict', 'limiting_factor', 'limitations', 'metrics'])
		&& verdict.schema_version === VERDICT_SCHEMA_VERSION && verdict.scope === scope
		&& ['information', 'compatible', 'compatible_with_limits', 'incompatible', 'insufficient_data'].includes(verdict.verdict)
		&& (verdict.engine_verdict === undefined || ['continuous', 'intermittent', 'incompatible', 'insufficient_data'].includes(verdict.engine_verdict))
		&& (verdict.limiting_factor === null || typeof verdict.limiting_factor === 'string')
		&& Array.isArray(verdict.limitations) && verdict.limitations.every((item) => typeof item === 'string' && item.length <= 4_000)
		&& (verdict.metrics === undefined || (isRecord(verdict.metrics) && hasOnlyKeys(verdict.metrics, ['required_fad_lpm', 'available_fad_lpm', 'effective_average_capacity_lpm', 'required_pressure_bar', 'available_pressure_bar', 'demand_flow_lpm', 'recommended_fad_lpm', 'margin_percent', 'mode']) && Object.values(verdict.metrics).every((item) => item === null || typeof item === 'number' || typeof item === 'string')));
	if (value.schema_version !== '1.0.0' || value.method_version !== METHOD_VERSION || !/^ca:configuration:[a-f0-9]{24}$/.test(value.configuration_id ?? '')
		|| !Array.isArray(value.source_urls) || !value.source_urls.every((item) => typeof item === 'string') || !isRecord(value.integrity)
		|| value.integrity.algorithm !== 'sha-256' || value.integrity.canonicalization !== 'json-sort-keys-v1'
		|| !validScopedVerdict(value.overall_system_verdict, 'complete_air_system') || !validScopedVerdict(value.air_supply_verdict, 'air_supply')) return { valid: false, error: 'invalid_receipt' };
	const payload = {
		schema_version: value.schema_version, configuration_id: value.configuration_id,
		overall_system_verdict: value.overall_system_verdict, air_supply_verdict: value.air_supply_verdict,
		method_version: value.method_version, catalog_version: value.catalog_version, observed_at: value.observed_at,
		canonical_url: value.canonical_url, source_urls: value.source_urls,
	};
	const digest = createHash('sha256').update(stableJson(payload)).digest('hex');
	const valid = value.integrity.digest === digest && value.receipt_id === `ca:receipt:${digest}` && value.verification_url === `${PUBLIC_ORIGIN}/recu-compatibilite/#${digest}`;
	return valid ? { valid: true, receipt_id: value.receipt_id, digest, catalog_version: value.catalog_version, observed_at: value.observed_at } : { valid: false, error: 'integrity_mismatch' };
}

function airGraph(compressor, selectedTools, evaluation, configurationId) {
	const productNodes = [
		{ id: configurationId, type: 'configuration' },
		{ id: compatAirId('compressor', compressor.id), type: 'compressor', label: `${compressor.brand} ${compressor.model}`, canonical_url: productUrl('compressor', compressor) },
		...selectedTools.map((tool) => ({ id: compatAirId('tool', tool.id), type: 'tool', label: tool.label, canonical_url: productUrl('tool', tool) })),
	];
	const compressorNodes = [
		{ id: compatAirId('requirement', `${compressor.id}:tank`), type: 'tank_volume', value: compressor.tankLiters, unit: 'L' },
		...(compressor.dutyCycle !== undefined ? [{ id: compatAirId('requirement', `${compressor.id}:duty-cycle`), type: 'compressor_duty_cycle', value: compressor.dutyCycle, unit: 'ratio' }] : []),
	];
	const requirementNodes = selectedTools.flatMap((tool) => {
		const nodes = [{ id: compatAirId('requirement', `${tool.id}:pressure`), type: 'pressure_requirement', value: tool.workingPressureBar.typical, unit: 'bar' }];
		if (tool.demandModel === 'fixed-flow') nodes.push({ id: compatAirId('requirement', `${tool.id}:flow`), type: 'flow_requirement', value: tool.airflowLpm.typical, unit: 'L/min' });
		if (tool.usagePattern) nodes.push({ id: compatAirId('requirement', `${tool.id}:usage`), type: 'usage_profile', value: tool.usagePattern });
		if (tool.recommendedHose) nodes.push({ id: compatAirId('requirement', `${tool.id}:hose`), type: 'hose_requirement', value: tool.recommendedHose });
		if (tool.connectorSize) nodes.push({ id: compatAirId('requirement', `${tool.id}:connector`), type: 'connector_requirement', value: tool.connectorSize });
		if (tool.filtrationRequirement) nodes.push({ id: compatAirId('requirement', `${tool.id}:filtration`), type: 'filtration_requirement', value: tool.filtrationRequirement });
		if (tool.lubricationRequirement) nodes.push({ id: compatAirId('requirement', `${tool.id}:lubrication`), type: 'lubrication_requirement', value: tool.lubricationRequirement });
		return nodes;
	});
	const configurationEdges = [
		{ from: configurationId, to: compatAirId('compressor', compressor.id), relation: 'uses_compressor' },
		...selectedTools.map((tool) => ({ from: configurationId, to: compatAirId('tool', tool.id), relation: 'uses_tool' })),
		{ from: compatAirId('compressor', compressor.id), to: compatAirId('requirement', `${compressor.id}:tank`), relation: 'has_tank' },
		...(compressor.dutyCycle !== undefined ? [{ from: compatAirId('compressor', compressor.id), to: compatAirId('requirement', `${compressor.id}:duty-cycle`), relation: 'has_duty_cycle' }] : []),
	];
	const requirementEdges = selectedTools.flatMap((tool) => [
		{ from: compatAirId('tool', tool.id), to: compatAirId('requirement', `${tool.id}:pressure`), relation: 'requires_pressure' },
		...(tool.demandModel === 'fixed-flow' ? [{ from: compatAirId('tool', tool.id), to: compatAirId('requirement', `${tool.id}:flow`), relation: 'requires_flow' }] : []),
		...(tool.usagePattern ? [{ from: compatAirId('tool', tool.id), to: compatAirId('requirement', `${tool.id}:usage`), relation: 'has_usage_profile' }] : []),
		...(tool.recommendedHose ? [{ from: compatAirId('tool', tool.id), to: compatAirId('requirement', `${tool.id}:hose`), relation: 'requires_hose' }] : []),
		...(tool.connectorSize ? [{ from: compatAirId('tool', tool.id), to: compatAirId('requirement', `${tool.id}:connector`), relation: 'requires_connector' }] : []),
		...(tool.filtrationRequirement ? [{ from: compatAirId('tool', tool.id), to: compatAirId('requirement', `${tool.id}:filtration`), relation: 'requires_filtration' }] : []),
		...(tool.lubricationRequirement ? [{ from: compatAirId('tool', tool.id), to: compatAirId('requirement', `${tool.id}:lubrication`), relation: 'requires_lubrication' }] : []),
		{ from: compatAirId('compressor', compressor.id), to: compatAirId('tool', tool.id), relation: publicVerdict(evaluation.verdict) },
	]);
	return {
		schema_version: '0.1.0', configuration_id: configurationId,
		nodes: [...productNodes, ...compressorNodes, ...requirementNodes], edges: [...configurationEdges, ...requirementEdges],
	};
}

function identifyCandidates(catalog, args) {
	const products = [
		...(catalog.compressors ?? []).map((item) => ({ type: 'compressor', item })),
		...(catalog.tools ?? []).map((item) => ({ type: 'tool', item })),
	];
	const rawInputs = [args.ean, args.reference, args.query].filter((value) => typeof value === 'string' && value.trim()).flatMap((value) => {
		const trimmed = value.trim();
		const stableId = trimmed.match(/^ca:(?:compressor|tool):(.+)$/i);
		return stableId ? [trimmed, stableId[1]] : [trimmed];
	});
	if (args.url) {
		try {
			const url = new URL(args.url);
			if (url.protocol === 'https:' || url.protocol === 'http:') rawInputs.push(...url.pathname.split('/').filter(Boolean).slice(-2), ...url.searchParams.values());
		} catch {}
	}
	const inputs = unique(rawInputs.map(normalizedText).filter(Boolean));
	return products.map(({ type, item }) => {
		const identifiers = [item.id, item.slug, item.ean, item.gtin, item.mpn, ...(item.identifierAliases ?? []).map((alias) => alias.value)].filter(Boolean);
		const exact = inputs.some((input) => identifiers.some((identifier) => normalizedText(identifier) === input));
		const label = normalizedText(`${item.brand} ${item.model} ${item.label ?? ''}`);
		const candidate = !exact && inputs.some((input) => input.length >= 4 && input.split(' ').every((token) => label.includes(token)));
		return { type, item, confidence: exact ? 'exact' : candidate ? 'candidate' : undefined };
	}).filter((match) => match.confidence).sort((left, right) => (left.confidence === 'exact' ? -1 : 1) - (right.confidence === 'exact' ? -1 : 1));
}

const legacyToolDefinitions = [
	['search_tools', 'Rechercher des outils pneumatiques documentés.', { query: { type: 'string' }, category: { type: 'string' }, cursor: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 50 } }],
	['get_tool_requirements', 'Retourner les exigences publiées d’un outil.', { id: { type: 'string' } }, ['id']],
	['search_compressors', 'Rechercher des compresseurs selon des critères techniques.', { query: { type: 'string' }, minTankLiters: { type: 'number', minimum: 0 }, minPressureBar: { type: 'number', minimum: 0 }, oilType: { type: 'string', enum: ['oil', 'oil-free'] }, cursor: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 50 } }],
	['get_compressor_specs', 'Retourner les caractéristiques et sources d’un compresseur.', { id: { type: 'string' } }, ['id']],
	['size_compressor', 'Dimensionner un débit continu, un besoin par action ou un gonflage paramétré.', { demands: { type: 'array', minItems: 1, maxItems: 20, items: { oneOf: [
		{ type: 'object', properties: { model: { type: 'string', enum: ['fixed-flow'] }, flowLpm: { type: 'number', exclusiveMinimum: 0 }, pressureBar: { type: 'number', exclusiveMinimum: 0 }, quantity: { type: 'integer', minimum: 1, maximum: 20 }, dutyFactor: { type: 'number', exclusiveMinimum: 0, maximum: 1 } }, required: ['flowLpm', 'pressureBar'], additionalProperties: false },
		{ type: 'object', properties: { model: { type: 'string', enum: ['per-action'] }, litersPerAction: { type: 'number', exclusiveMinimum: 0 }, actionsPerMinute: { type: 'number', exclusiveMinimum: 0 }, pressureBar: { type: 'number', exclusiveMinimum: 0 }, quantity: { type: 'integer', minimum: 1, maximum: 20 } }, required: ['model', 'litersPerAction', 'actionsPerMinute', 'pressureBar'], additionalProperties: false },
		{ type: 'object', properties: { model: { type: 'string', enum: ['inflation'] }, volumeLiters: { type: 'number', exclusiveMinimum: 0 }, initialPressureBar: { type: 'number', minimum: 0 }, targetPressureBar: { type: 'number', exclusiveMinimum: 0 }, targetMinutes: { type: 'number', exclusiveMinimum: 0 }, quantity: { type: 'integer', minimum: 1, maximum: 20 } }, required: ['model', 'volumeLiters', 'initialPressureBar', 'targetPressureBar', 'targetMinutes'], additionalProperties: false },
	] } }, mode: { type: 'string', enum: ['simultaneous', 'successive'] }, safetyMargin: { type: 'number', minimum: 0, maximum: 1 }, measuredLeakLpm: { type: 'number', minimum: 0, maximum: 10000 }, measuredPressureDropBar: { type: 'number', minimum: 0, maximum: 50 } }, ['demands']],
	['check_compatibility', 'Comparer un compresseur et un outil avec un verdict normalisé.', { compressorId: { type: 'string' }, toolId: { type: 'string' }, safetyMargin: { type: 'number', minimum: 0, maximum: 1 } }, ['compressorId', 'toolId']],
	['compare_compressors', 'Comparer deux ou trois compresseurs sans score commercial.', { ids: { type: 'array', minItems: 2, maxItems: 3, items: { type: 'string' } } }, ['ids']],
	['find_accessories', 'Retourner uniquement les raccords ou accessoires documentés pour un outil.', { toolId: { type: 'string' } }, ['toolId']],
	['find_offers', 'Retourner les offres actives issues de flux autorisés.', { productId: { type: 'string' }, cursor: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 50 } }, ['productId']],
];

const airGraphToolDefinitions = [
	['evaluate_air_compatibility', 'UCP read-only compatibility decision for one documented compressor and one or more pneumatic tools. It never accepts identity, payment, checkout or order data.', {
		meta: { type: 'object', properties: { 'ucp-agent': { type: 'object', properties: { profile: { type: 'string', format: 'uri', maxLength: MAX_URL_TEXT } }, required: ['profile'], additionalProperties: false } }, required: ['ucp-agent'], additionalProperties: false },
		ucp: { type: 'object', properties: { version: { type: 'string', const: UCP_PROTOCOL_VERSION } }, required: ['version'], additionalProperties: false },
		intent: { type: 'string', enum: ['will_it_work', 'explain_limits', 'find_minimal_change', 'build_complete_system'] },
		configuration: { type: 'object', properties: { compressor: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'], additionalProperties: false }, tools: { type: 'array', minItems: 1, maxItems: 20, items: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'], additionalProperties: false } }, mode: { type: 'string', enum: ['simultaneous', 'successive'] } }, required: ['tools'], additionalProperties: false },
		constraints: { type: 'object', properties: { max_total_minor: { type: 'integer', minimum: 0, maximum: 100000000 }, currency: { type: 'string', const: 'EUR' }, minimum_merchants: { type: 'integer', minimum: 1, maximum: 10 }, country: { type: 'string', const: 'FR' } }, additionalProperties: false },
		requested_outputs: { type: 'array', maxItems: 7, uniqueItems: true, items: { type: 'string', enum: ['compatibility', 'mandatory_accessories', 'limits', 'alternatives', 'complete_configuration', 'attribution', 'evidence'] } },
	}, ['meta', 'ucp', 'configuration']],
	['identify_product', 'Identify a catalog product from a name, CompatAir or merchant URL, EAN/GTIN, MPN, reference, or stable CompatAir ID. No network fetch is performed.', {
		query: { type: 'string', maxLength: MAX_SHORT_TEXT }, url: { type: 'string', maxLength: MAX_URL_TEXT }, ean: { type: 'string', maxLength: MAX_SHORT_TEXT }, reference: { type: 'string', maxLength: MAX_SHORT_TEXT }, limit: { type: 'integer', minimum: 1, maximum: 10 },
	}],
	['build_complete_air_system', 'Build a source-backed compressor, pneumatic tool, hose, connector, filtration and lubrication system. Missing component data stays explicit.', {
		toolIds: { type: 'array', minItems: 1, maxItems: 20, items: { type: 'string' } }, mode: { type: 'string', enum: ['simultaneous', 'successive'] }, compressorId: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 10 },
	}, ['toolIds']],
	['explain_compatibility_verdict', 'Explain each documented pressure, flow, duty-cycle or missing-data factor behind a published compatibility verdict.', {
		compressorId: { type: 'string' }, toolId: { type: 'string' },
	}, ['compressorId', 'toolId']],
	['find_compatible_alternatives', 'Find the smallest verified compressor substitution for an incompatible documented system. Commercial commission never affects ordering.', {
		compressorId: { type: 'string' }, toolIds: { type: 'array', minItems: 1, maxItems: 20, items: { type: 'string' } }, mode: { type: 'string', enum: ['simultaneous', 'successive'] }, limit: { type: 'integer', minimum: 1, maximum: 10 },
	}, ['compressorId', 'toolIds']],
	['compare_complete_systems', 'Compare two to five complete configurations on documented technical facts without a commercial score.', {
		systems: { type: 'array', minItems: 2, maxItems: 5, items: { type: 'object', properties: { compressorId: { type: 'string' }, toolIds: { type: 'array', minItems: 1, maxItems: 20, items: { type: 'string' } }, mode: { type: 'string', enum: ['simultaneous', 'successive'] } }, required: ['compressorId', 'toolIds'], additionalProperties: false } },
	}, ['systems']],
	['get_compatibility_evidence', 'Return the exact characteristics, evidence references, source URLs and AirGraph edges used for one compatibility result.', {
		compressorId: { type: 'string' }, toolId: { type: 'string' },
	}, ['compressorId', 'toolId']],
	['search_knowledge', 'Search the published CompatAir guides, glossary, methods and product pages. The server never fetches arbitrary external content.', {
		query: { type: 'string', maxLength: MAX_SHORT_TEXT }, type: { type: 'string', enum: ['Guide', 'Glossaire', 'Compresseur', 'Outil'] }, locale: { type: 'string', enum: ['fr', 'en'] }, cursor: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 20 },
	}, ['query']],
	['get_current_offers', 'Return dated current prices and availability separately from technical verdicts. Only allowlisted, fresh merchant destinations are returned.', {
		productIds: { type: 'array', minItems: 1, maxItems: 20, items: { type: 'string' } }, cursor: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 50 },
	}, ['productIds']],
	['get_changefeed', 'Return catalog, method and offer snapshot changes visible since a date or version supplied by the client.', {
		since: { type: 'string', maxLength: MAX_SHORT_TEXT }, cursor: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 20 },
	}],
];

const toolDefinitions = [...legacyToolDefinitions, ...airGraphToolDefinitions].map(([name, description, properties, required = []]) => ({
	name,
	description: LEGACY_SUCCESSORS[name] ? `[LEGACY : préférer ${LEGACY_SUCCESSORS[name]}] ${description}` : description,
	inputSchema: { type: 'object', properties, required, additionalProperties: false },
	outputSchema: outputSchemas[name],
	annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
	_meta: LEGACY_SUCCESSORS[name]
		? { 'fr.compatair/lifecycle': 'legacy', 'fr.compatair/successor': LEGACY_SUCCESSORS[name], 'fr.compatair/profile': 'compatibility' }
		: { 'fr.compatair/lifecycle': CORE_TOOL_NAMES.includes(name) ? 'core' : 'extended', 'fr.compatair/profile': CORE_TOOL_NAMES.includes(name) ? 'core' : 'compatibility' },
}));

const resources = [
	['compatair://catalog/version', 'Version du catalogue', 'Version et date de vérification du snapshot.'],
	['compatair://methodology', 'Méthodologie', 'Règles du moteur déterministe.'],
	['compatair://tools/taxonomy', 'Taxonomie des outils', 'Catégories présentes dans le catalogue.'],
	['compatair://confidence-scale', 'Échelle de confiance', 'Définition des niveaux A à D.'],
	['compatair://affiliation-policy', 'Politique d’affiliation', 'Indépendance des verdicts et offres.'],
	['compatair://engine/version', 'Version du moteur', 'Version des formules de calcul.'],
	['compatair://airgraph/schema', 'AirGraph schema', 'Stable node identifiers, relations and evidence boundaries.'],
	['compatair://responses/schema', 'MCP response contracts', 'Strict tool-specific output schemas and scoped verdict contracts.'],
	['compatair://tools/core-profile', 'Recommended core tool profile', 'Eight non-overlapping tools recommended for general agent integrations.'],
	['compatair://receipts/schema', 'Compatibility receipt schema', 'Deterministic, versioned and independently hash-verifiable compatibility receipt.'],
	['compatair://changefeed/current', 'Current changefeed state', 'Current method, catalog and offer snapshot versions.'],
].map(([uri, name, description]) => ({ uri, name, description, mimeType: 'application/json' }));

const prompts = [
	{ name: 'choisir_un_compresseur', description: 'Dimensionner un compresseur à partir d’outils et d’un profil d’usage.', arguments: [{ name: 'besoin', description: 'Outils, simultanéité et durée.', required: true }] },
	{ name: 'auditer_une_installation', description: 'Identifier les données manquantes et facteurs limitants.', arguments: [{ name: 'installation', description: 'Compresseur, réseau et outils.', required: true }] },
	{ name: 'comparer_des_configurations', description: 'Comparer plusieurs configurations sans extrapoler les données.', arguments: [{ name: 'configurations', description: 'Configurations à comparer.', required: true }] },
];

function result(value, catalog) {
	const structuredContent = withoutUndefined({
		verdict: 'information', verdict_scope: 'information', verdict_schema_version: VERDICT_SCHEMA_VERSION,
		canonical_url: `${PUBLIC_ORIGIN}/mcp-documentation/`, product_urls: [], source_urls: [], method_version: METHOD_VERSION,
		catalog_version: catalog.catalogVersion, observed_at: catalog.verifiedAt ?? new Date(0).toISOString().slice(0, 10), limitations: [], next_actions: [],
		catalogVersion: catalog.catalogVersion, engineVersion: ENGINE_VERSION, ...value,
	});
	return { content: [{ type: 'text', text: JSON.stringify(structuredContent) }], structuredContent, isError: false };
}
function failure(message, catalog, value = {}) {
	const structuredContent = withoutUndefined({
		verdict: 'insufficient_data', verdict_scope: 'request', verdict_schema_version: VERDICT_SCHEMA_VERSION,
		canonical_url: `${PUBLIC_ORIGIN}/mcp-documentation/`, product_urls: [], source_urls: [], method_version: METHOD_VERSION,
		catalog_version: catalog.catalogVersion, observed_at: catalog.verifiedAt ?? new Date(0).toISOString().slice(0, 10), limitations: [message], next_actions: [],
		catalogVersion: catalog.catalogVersion, engineVersion: ENGINE_VERSION,
		error: { code: message === 'Arguments invalides.' ? 'invalid_arguments' : 'insufficient_data', message, scope: 'request', retryable: false }, ...value,
	});
	return { content: [{ type: 'text', text: JSON.stringify(structuredContent) }], structuredContent, isError: true };
}

/**
 * @param {any} catalog
 * @param {{ offers?: any[], snapshotVersion?: string }} offerSnapshot
 * @param {{ isOfferActive?: (offer: any) => boolean, verdictSnapshot?: { pairs?: any[], verdictVersion?: string, calculationVersion?: string }, knowledgeItems?: any[], changefeedEvents?: any[], now?: () => number }} options
 */
export function createMcpCore(catalog, offerSnapshot = { offers: [], snapshotVersion: 'empty' }, options = {}) {
	const { isOfferActive = () => true, verdictSnapshot = { pairs: [], verdictVersion: 'unavailable', calculationVersion: ENGINE_VERSION }, knowledgeItems = [], changefeedEvents = [] } = options;
	const toolMap = new Map((catalog.tools ?? []).map((item) => [item.id, item]));
	const compressorMap = new Map((catalog.compressors ?? []).map((item) => [item.id, item]));
	const verdictMap = new Map((verdictSnapshot.pairs ?? []).map((item) => [`${item.compressorId}--${item.toolId}`, item]));
	function publishedCompatibility(compressor, tool) { return verdictMap.get(`${compressor.id}--${tool.id}`) ?? compatibility(compressor, tool); }
	function selectedProducts(toolIds) { return toolIds.map((id) => toolMap.get(id)); }
	function callTool(name, args = {}) {
		if (!validToolArguments(name, args)) return failure('Arguments invalides.', catalog);
		switch (name) {
			case 'evaluate_air_compatibility': {
				const compressorId = args.configuration.compressor?.id;
				const toolIds = args.configuration.tools.map((tool) => tool.id);
				const mode = args.configuration.mode ?? 'successive';
				const systemResult = callTool('build_complete_air_system', { ...(compressorId ? { compressorId } : {}), toolIds, mode, limit: 5 });
				if (systemResult.isError) return systemResult;
				const alternativesResult = compressorId ? callTool('find_compatible_alternatives', { compressorId, toolIds, mode, limit: 5 }) : undefined;
				const system = systemResult.structuredContent;
				const alternatives = !alternativesResult || alternativesResult.isError ? [] : alternativesResult.structuredContent.alternatives ?? [];
				const selectedProductIds = [system.components?.compressor?.id, ...(system.components?.tools ?? []).map((tool) => tool.id)].filter(Boolean);
				const offersResult = args.constraints && selectedProductIds.length ? callTool('get_current_offers', { productIds: selectedProductIds, limit: 50 }) : undefined;
				const offers = offersResult?.structuredContent?.offers ?? [];
				const offerProductIds = new Set(offers.filter((offer) => offer.availability === 'in_stock').map((offer) => offer.productId));
				const merchantIds = new Set(offers.filter((offer) => offer.availability === 'in_stock').map((offer) => offer.merchantId));
				const completeOfferCoverage = selectedProductIds.length > 0 && selectedProductIds.every((id) => offerProductIds.has(id));
				const merchantCoverage = !args.constraints?.minimum_merchants || merchantIds.size >= args.constraints.minimum_merchants;
				const minimumTotalMinor = completeOfferCoverage ? selectedProductIds.reduce((total, productId) => {
					const prices = offers.filter((offer) => offer.productId === productId && offer.availability === 'in_stock').map((offer) => Math.round((offer.priceEur + (offer.shippingEur ?? 0)) * 100));
					return total + Math.min(...prices);
				}, 0) : undefined;
				const budgetCoverage = args.constraints?.max_total_minor === undefined || (minimumTotalMinor !== undefined && minimumTotalMinor <= args.constraints.max_total_minor);
				const commercialLimitations = args.constraints && (!completeOfferCoverage || !merchantCoverage || !budgetCoverage)
					? ['Les contraintes de prix ou de disponibilité ne peuvent pas être prouvées avec des offres fraîches couvrant chaque composant et le nombre de marchands demandé.'] : [];
				const requested = new Set(args.requested_outputs ?? ['compatibility', 'mandatory_accessories', 'limits', 'alternatives', 'complete_configuration', 'attribution', 'evidence']);
				const airVerdict = system.air_supply_verdict;
				const overallVerdict = system.overall_system_verdict;
				const commercialVerdict = args.constraints ? commercialConstraintsVerdict(commercialLimitations.length === 0, commercialLimitations) : undefined;
				return result({
					// Backward-compatible alias: the root verdict always has the explicit complete-system scope.
					verdict: overallVerdict.verdict,
					verdict_scope: 'complete_air_system',
					canonical_url: system.canonical_url,
					product_urls: system.product_urls,
					source_urls: system.source_urls,
					limitations: [...system.limitations, ...commercialLimitations],
					next_actions: system.next_actions,
					ucp: { version: UCP_PROTOCOL_VERSION, capabilities: { [UCP_CAPABILITY_NAME]: [{ version: UCP_CAPABILITY_VERSION }] } },
					capability: UCP_CAPABILITY_NAME,
					capability_version: UCP_CAPABILITY_VERSION,
					intent: args.intent ?? 'will_it_work',
					security: { access: 'anonymous_read_only', accepts_pii: false, accepts_payment: false, mutates_commerce_state: false },
					overall_system_verdict: overallVerdict,
					air_supply_verdict: airVerdict,
					...(system.compatibility_receipt ? { compatibility_receipt: system.compatibility_receipt } : {}),
					...(requested.has('compatibility') ? { compatibility: airVerdict } : {}),
					...(requested.has('mandatory_accessories') ? { mandatory_accessories: { hoses: system.components?.hoses ?? [], connectors: system.components?.connectors ?? [], filtration: system.components?.filtration ?? [], lubrication: system.components?.lubrication ?? [] } } : {}),
					...(requested.has('limits') ? { limits: [...system.limitations, ...commercialLimitations] } : {}),
					...(requested.has('alternatives') ? { alternatives } : {}),
					...(requested.has('complete_configuration') ? {
						complete_configuration: system.components,
						...(system.configuration_id ? { configuration_id: system.configuration_id } : {}),
						...(system.airgraph ? { airgraph: system.airgraph } : {}),
					} : {}),
					...(requested.has('attribution') ? { attribution: { provider: 'CompatAir', canonical_url: system.canonical_url, method_version: METHOD_VERSION } } : {}),
					...(requested.has('evidence') ? { evidence_urls: system.source_urls, proof_urls: system.next_actions.filter((value) => typeof value === 'string' && value.startsWith(`${PUBLIC_ORIGIN}/graphe-preuve/`)) } : {}),
					...(args.constraints ? { commercial_constraints: { requested: args.constraints, verified: commercialLimitations.length === 0, verdict: commercialVerdict, offer_snapshot_version: offersResult?.structuredContent?.offerSnapshotVersion ?? null, covered_products: [...offerProductIds], merchant_count: merchantIds.size, minimum_total_minor: minimumTotalMinor ?? null, currency: 'EUR' } } : {}),
				}, catalog);
			}
			case 'search_tools': {
				const q = String(args.query ?? '').toLowerCase();
				const values = catalog.tools.filter((item) => (!q || `${item.label} ${item.category} ${item.brand} ${item.model}`.toLowerCase().includes(q)) && (!args.category || item.category === args.category));
				const found = page(values, args.cursor, args.limit);
				return result({ canonical_url: `${PUBLIC_ORIGIN}/outils-pneumatiques/`, product_urls: found.items.map((item) => productUrl('tool', item)), source_urls: sourceUrls(found.items), tools: found.items.map((item) => ({ ...item, compat_air_id: compatAirId('tool', item.id), canonical_url: productUrl('tool', item) })), ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) }, catalog);
			}
			case 'get_tool_requirements': {
				const item = toolMap.get(args.id);
				return item ? result({ canonical_url: productUrl('tool', item), product_urls: [productUrl('tool', item)], source_urls: sourceUrls([item]), tool: { ...item, compat_air_id: compatAirId('tool', item.id), canonical_url: productUrl('tool', item) } }, catalog) : failure('Outil inconnu.', catalog, { canonical_url: `${PUBLIC_ORIGIN}/scanner/`, next_actions: ['Vérifier la référence avec identify_product.'] });
			}
			case 'search_compressors': {
				const q = String(args.query ?? '').toLowerCase();
				const values = catalog.compressors.filter((item) => (!q || `${item.brand} ${item.model} ${item.mpn ?? ''}`.toLowerCase().includes(q)) && (!args.minTankLiters || item.tankLiters >= args.minTankLiters) && (!args.minPressureBar || item.maxPressureBar >= args.minPressureBar) && (!args.oilType || item.oilType === args.oilType));
				const found = page(values, args.cursor, args.limit);
				return result({ canonical_url: `${PUBLIC_ORIGIN}/compresseurs/`, product_urls: found.items.map((item) => productUrl('compressor', item)), source_urls: sourceUrls(found.items), compressors: found.items.map((item) => ({ ...item, compat_air_id: compatAirId('compressor', item.id), canonical_url: productUrl('compressor', item) })), ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) }, catalog);
			}
			case 'get_compressor_specs': {
				const item = compressorMap.get(args.id);
				return item ? result({ canonical_url: productUrl('compressor', item), product_urls: [productUrl('compressor', item)], source_urls: sourceUrls([item]), compressor: { ...item, compat_air_id: compatAirId('compressor', item.id), canonical_url: productUrl('compressor', item) } }, catalog) : failure('Compresseur inconnu.', catalog, { canonical_url: `${PUBLIC_ORIGIN}/scanner/`, next_actions: ['Vérifier la référence avec identify_product.'] });
			}
			case 'size_compressor': {
				const mode = args.mode === 'simultaneous' ? 'simultaneous' : 'successive';
				const safetyMargin = Number.isFinite(args.safetyMargin) ? args.safetyMargin : .25;
				if (!Array.isArray(args.demands) || !args.demands.length) return failure('Au moins une demande est requise.', catalog);
				const demands = args.demands.map((item) => {
					const quantity = Number(item.quantity ?? 1);
					if (!Number.isInteger(quantity) || quantity < 1 || quantity > 20) return undefined;
					if (item.model === 'per-action') {
						const average = Number(item.litersPerAction) * Number(item.actionsPerMinute) * quantity;
						return { peak: average, average, pressure: Number(item.pressureBar), derived: true, hypothesis: `${item.litersPerAction} L/action × ${item.actionsPerMinute} action(s)/min × ${quantity}` };
					}
					if (item.model === 'inflation') {
						const initial = Number(item.initialPressureBar), target = Number(item.targetPressureBar), minutes = Number(item.targetMinutes), volume = Number(item.volumeLiters);
						if (target <= initial) return undefined;
						const freeAirLiters = volume * quantity * (target - initial) / STANDARD_ATMOSPHERE_BAR;
						const average = freeAirLiters / minutes;
						return { peak: average, average, pressure: target, derived: true, hypothesis: `${freeAirLiters} L d’air libre idéal en ${minutes} min` };
					}
					const peak = Number(item.flowLpm) * quantity;
					return { peak, average: peak * Number(item.dutyFactor ?? 1), pressure: Number(item.pressureBar), derived: false };
				});
				if (demands.some((item) => !item || !Number.isFinite(item.peak) || item.peak <= 0 || !Number.isFinite(item.pressure) || item.pressure <= 0)) return failure('Demande invalide.', catalog);
				const measuredLeakLpm = Number(args.measuredLeakLpm ?? 0);
				const measuredPressureDropBar = Number(args.measuredPressureDropBar ?? 0);
				const demandPeakFlowLpm = mode === 'simultaneous' ? demands.reduce((sum, item) => sum + item.peak, 0) : Math.max(...demands.map((item) => item.peak));
				const peakFlowLpm = demandPeakFlowLpm + measuredLeakLpm;
				const averageFlowLpm = Math.min(peakFlowLpm, demands.reduce((sum, item) => sum + item.average, 0) + measuredLeakLpm);
				const toolPressureBar = Math.max(...demands.map((item) => item.pressure));
				const requiredPressureBar = toolPressureBar + measuredPressureDropBar;
				if (requiredPressureBar > 50) return failure('La pression outil et la chute mesurée dépassent ensemble la limite de calcul de 50 bar.', catalog);
				const flowBasis = demands.some((item) => item.derived) ? 'derived-average' : 'documented-continuous';
				return result({ verdict: 'insufficient_data', canonical_url: `${PUBLIC_ORIGIN}/calculateur/`, limitations: ['Aucun compresseur n’a été fourni ; le résultat décrit uniquement le besoin en air.'], next_actions: ['Comparer le FAD d’un compresseur à la pression requise.'], sizing: { verdict: 'insufficient_data', peakFlowLpm, averageFlowLpm, toolPressureBar, requiredPressureBar, measuredLeakLpm, measuredPressureDropBar, recommendedFadLpm: peakFlowLpm * (1 + safetyMargin), flowBasis, limitingFactor: 'data', hypotheses: [`mode=${mode}`, `safetyMargin=${safetyMargin}`, `measuredLeakLpm=${measuredLeakLpm}`, `measuredPressureDropBar=${measuredPressureDropBar}`, ...demands.flatMap((item) => item.hypothesis ? [item.hypothesis] : [])], calculationVersion: ENGINE_VERSION } }, catalog);
			}
			case 'check_compatibility': {
				const compressor = compressorMap.get(args.compressorId), tool = toolMap.get(args.toolId);
				if (!compressor || !tool) return failure('Compresseur ou outil inconnu.', catalog, { canonical_url: `${PUBLIC_ORIGIN}/scanner/` });
				const evaluation = args.safetyMargin === undefined ? publishedCompatibility(compressor, tool) : compatibility(compressor, tool, args.safetyMargin);
				const airVerdict = airSupplyVerdict(evaluation);
				const overallVerdict = completeSystemVerdict(airVerdict, ['Le flexible, les raccords, le traitement d’air et les pertes de charge du réseau ne sont pas évalués par cet outil historique.']);
				const configurationId = stableConfigurationId({ compressorId: compressor.id, toolIds: [tool.id], mode: 'successive' });
				const canonicalUrl = compatibilityUrl(compressor, tool), sources = sourceUrls([compressor, tool]);
				return result({
					verdict: airVerdict.verdict, verdict_scope: 'air_supply', canonical_url: canonicalUrl,
					product_urls: [productUrl('compressor', compressor), productUrl('tool', tool)], source_urls: sources,
					limitations: airVerdict.limitations, next_actions: [proofUrl(compressor, tool)], compatibility: airVerdict,
					overall_system_verdict: overallVerdict, air_supply_verdict: airVerdict,
					compatibility_receipt: compatibilityReceipt(catalog, { configurationId, overallSystemVerdict: overallVerdict, airSupplyVerdict: airVerdict, canonicalUrl, sources }),
				}, catalog);
			}
			case 'compare_compressors': {
				const values = args.ids.map((id) => compressorMap.get(id));
				return values.some((item) => !item) ? failure('Un compresseur est inconnu.', catalog) : result({ canonical_url: `${PUBLIC_ORIGIN}/comparateur/`, product_urls: values.map((item) => productUrl('compressor', item)), source_urls: sourceUrls(values), compressors: values }, catalog);
			}
			case 'find_accessories': {
				const tool = toolMap.get(args.toolId);
				if (!tool) return failure('Outil inconnu.', catalog);
				const documented = Boolean(tool.connectorSize || tool.recommendedHose || tool.filtrationRequirement || tool.lubricationRequirement);
				return result({ verdict: documented ? 'information' : 'insufficient_data', canonical_url: productUrl('tool', tool), product_urls: [productUrl('tool', tool)], source_urls: sourceUrls([tool]), limitations: documented ? [] : ['Aucun accessoire déterminant n’est documenté pour cet outil.'], status: documented ? 'documented' : 'insufficient_data', accessories: [{ type: 'connector', requirement: tool.connectorSize }, { type: 'hose', requirement: tool.recommendedHose }, { type: 'filtration', requirement: tool.filtrationRequirement }, { type: 'lubrication', requirement: tool.lubricationRequirement }].filter((item) => item.requirement !== undefined) }, catalog);
			}
			case 'find_offers':
			case 'get_current_offers': {
				const productIds = name === 'find_offers' ? [args.productId] : args.productIds;
				const values = (offerSnapshot.offers ?? []).filter((offer) => productIds.includes(offer.productId) && isOfferActive(offer));
				const found = page(values, args.cursor, args.limit);
				const safeOffers = found.items.map((offer) => ({ ...offer, url: `${PUBLIC_ORIGIN}/go/${encodeURIComponent(offer.id)}` }));
				const products = productIds.map((id) => compressorMap.get(id) ?? toolMap.get(id)).filter(Boolean);
				return result({ verdict: safeOffers.length ? 'information' : 'insufficient_data', canonical_url: `${PUBLIC_ORIGIN}/offres/`, product_urls: products.map((item) => productUrl(compressorMap.has(item.id) ? 'compressor' : 'tool', item)), source_urls: [], limitations: safeOffers.length ? ['Prix et disponibilité sont datés et séparés du verdict technique.'] : ['Aucune offre fraîche et autorisée n’est disponible pour les produits demandés.'], next_actions: safeOffers.length ? ['Revalider le verdict technique indépendamment du prix.'] : [], offerSnapshotVersion: offerSnapshot.snapshotVersion, offers: safeOffers, ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) }, catalog);
			}
			case 'identify_product': {
				const found = identifyCandidates(catalog, args).slice(0, args.limit ?? 5);
				const exact = found.filter((item) => item.confidence === 'exact');
				const definitive = exact.length === 1;
				const matches = found.map(({ type, item, confidence }) => ({ ...productSummary(type, item), match_confidence: confidence }));
				return result({ verdict: found.length ? 'information' : 'insufficient_data', canonical_url: definitive ? productUrl(exact[0].type, exact[0].item) : `${PUBLIC_ORIGIN}/scanner/`, product_urls: found.map(({ type, item }) => productUrl(type, item)), source_urls: sourceUrls(found.map(({ item }) => item)), limitations: definitive ? [] : found.length ? ['Plusieurs candidats ou une correspondance textuelle non unique : aucune identité certaine n’est affirmée.'] : ['Aucun identifiant ou libellé du catalogue ne correspond. Aucune page distante n’a été téléchargée.'], next_actions: definitive ? [] : ['Fournir un EAN/GTIN, un MPN ou une référence constructeur exacte.'], matches }, catalog);
			}
			case 'build_complete_air_system': {
				const tools = selectedProducts(args.toolIds);
				if (tools.some((item) => !item)) return failure('Un outil est inconnu.', catalog, { canonical_url: `${PUBLIC_ORIGIN}/scanner/` });
				const mode = args.mode ?? 'successive';
				const candidates = (catalog.compressors ?? []).map((compressor) => ({ compressor, evaluation: evaluateSystem(compressor, tools, mode) }))
					.filter(({ evaluation }) => evaluation.verdict === 'continuous')
					.sort((left, right) => (left.evaluation.availableFadLpm - left.evaluation.demandFlowLpm) - (right.evaluation.availableFadLpm - right.evaluation.demandFlowLpm) || left.compressor.tankLiters - right.compressor.tankLiters)
					.slice(0, args.limit ?? 5);
				const requested = args.compressorId ? compressorMap.get(args.compressorId) : undefined;
				if (args.compressorId && !requested) return failure('Compresseur inconnu.', catalog, { canonical_url: `${PUBLIC_ORIGIN}/scanner/` });
				const selected = requested ?? candidates[0]?.compressor;
				const evaluation = selected ? evaluateSystem(selected, tools, mode) : { verdict: 'insufficient_data', limitations: ['Aucun compresseur documenté ne couvre complètement cette demande.'] };
				const componentLimitations = [];
				if (tools.some((tool) => !tool.connectorSize)) componentLimitations.push('Raccord non documenté pour au moins un outil.');
					if (tools.some((tool) => !tool.recommendedHose)) componentLimitations.push('Diamètre ou longueur de flexible non documenté pour au moins un outil.');
					if (tools.some((tool) => !tool.filtrationRequirement)) componentLimitations.push('Filtration non documentée pour au moins un outil.');
					if (tools.some((tool) => !tool.lubricationRequirement)) componentLimitations.push('Lubrification non documentée pour au moins un outil.');
					componentLimitations.push('Les pertes de charge réelles du réseau restent indéterminées sans longueur, diamètre, raccords et mesure ou courbe documentée de l’installation.');
				const configurationId = selected ? stableConfigurationId({ compressorId: selected.id, toolIds: args.toolIds, mode }) : undefined;
				const products = [...(selected ? [selected] : []), ...tools];
				const airVerdict = airSupplyVerdict(evaluation);
				const overallVerdict = completeSystemVerdict(airVerdict, componentLimitations);
				const canonicalUrl = selected && tools.length === 1 ? compatibilityUrl(selected, tools[0]) : `${PUBLIC_ORIGIN}/calculateur/`;
				const sources = sourceUrls(products);
				return result({
					verdict: overallVerdict.verdict, verdict_scope: 'complete_air_system', canonical_url: canonicalUrl,
					product_urls: products.map((item) => productUrl(compressorMap.has(item.id) ? 'compressor' : 'tool', item)), source_urls: sources,
					limitations: [...(evaluation.limitations ?? []), ...componentLimitations], next_actions: selected ? [`${PUBLIC_ORIGIN}/calculateur/`, ...(tools.length === 1 ? [proofUrl(selected, tools[0])] : [])] : ['Compléter les données déterminantes ou réduire la demande.'],
					configuration_id: configurationId, evaluation, compatibility: airVerdict,
					overall_system_verdict: overallVerdict, air_supply_verdict: airVerdict,
					components: { compressor: selected ? productSummary('compressor', selected) : null, tools: tools.map((tool) => productSummary('tool', tool)), hoses: tools.map((tool) => ({ tool_id: tool.id, requirement: tool.recommendedHose ?? null })), connectors: tools.map((tool) => ({ tool_id: tool.id, requirement: tool.connectorSize ?? null })), filtration: tools.map((tool) => ({ tool_id: tool.id, requirement: tool.filtrationRequirement ?? null })), lubrication: tools.map((tool) => ({ tool_id: tool.id, requirement: tool.lubricationRequirement ?? null })) },
					compressor_candidates: candidates.map(({ compressor, evaluation: candidateEvaluation }) => ({ compressor: productSummary('compressor', compressor), evaluation: candidateEvaluation, air_supply_verdict: airSupplyVerdict(candidateEvaluation) })),
					...(selected ? { airgraph: airGraph(selected, tools, evaluation, configurationId) } : {}),
					...(selected ? { compatibility_receipt: compatibilityReceipt(catalog, { configurationId, overallSystemVerdict: overallVerdict, airSupplyVerdict: airVerdict, canonicalUrl, sources }) } : {}),
				}, catalog);
			}
			case 'explain_compatibility_verdict':
			case 'get_compatibility_evidence': {
				const compressor = compressorMap.get(args.compressorId), tool = toolMap.get(args.toolId);
				if (!compressor || !tool) return failure('Compresseur ou outil inconnu.', catalog, { canonical_url: `${PUBLIC_ORIGIN}/scanner/` });
				const evaluation = publishedCompatibility(compressor, tool);
				const configurationId = stableConfigurationId({ compressorId: compressor.id, toolIds: [tool.id], mode: 'successive' });
				const factors = [
					{ factor: 'pressure', required_bar: tool.workingPressureBar.typical, available_bar: compressor.maxPressureBar, status: compressor.maxPressureBar >= tool.workingPressureBar.typical ? 'pass' : 'block' },
					{ factor: 'flow', required_fad_lpm: evaluation.requiredFadLpm, available_fad_lpm: evaluation.availableFadLpm, status: evaluation.availableFadLpm === undefined ? 'insufficient_data' : evaluation.limitingFactor === 'flow' ? 'block' : 'pass' },
					{ factor: 'duty_cycle', documented: compressor.dutyCycle ?? null, status: evaluation.limitingFactor === 'duty_cycle' ? 'block' : compressor.dutyCycle === undefined ? 'not_applicable_to_published_pair' : 'pass' },
				];
				const airVerdict = airSupplyVerdict(evaluation);
				const overallVerdict = completeSystemVerdict(airVerdict, ['Cette réponse explique la chaîne pression-débit-cycle ; elle ne valide pas à elle seule le flexible, les raccords, le traitement d’air ni les pertes du réseau.']);
				const canonicalUrl = name === 'get_compatibility_evidence' ? proofUrl(compressor, tool) : compatibilityUrl(compressor, tool), sources = sourceUrls([compressor, tool]);
				return result({
					verdict: airVerdict.verdict, verdict_scope: 'air_supply', canonical_url: canonicalUrl,
					product_urls: [productUrl('compressor', compressor), productUrl('tool', tool)], source_urls: sources,
					limitations: airVerdict.limitations, next_actions: [proofUrl(compressor, tool)], compatibility: airVerdict,
					overall_system_verdict: overallVerdict, air_supply_verdict: airVerdict,
					compatibility_receipt: compatibilityReceipt(catalog, { configurationId, overallSystemVerdict: overallVerdict, airSupplyVerdict: airVerdict, canonicalUrl, sources }),
					factors, evidence: { compressor: compressor.evidence, tool: tool.evidence, field_sources: { compressor: compressor.fieldSources ?? {}, tool: tool.fieldSources ?? {} } }, airgraph: airGraph(compressor, [tool], evaluation, configurationId),
				}, catalog);
			}
			case 'find_compatible_alternatives': {
				const current = compressorMap.get(args.compressorId), tools = selectedProducts(args.toolIds);
				if (!current || tools.some((item) => !item)) return failure('Compresseur ou outil inconnu.', catalog);
				const mode = args.mode ?? 'successive';
				const currentEvaluation = evaluateSystem(current, tools, mode);
				const currentAirVerdict = airSupplyVerdict(currentEvaluation);
				const currentOverallVerdict = completeSystemVerdict(currentAirVerdict, ['Les composants du réseau et les pertes de charge ne sont pas fournis à cet outil de substitution.']);
				const currentConfigurationId = stableConfigurationId({ compressorId: current.id, toolIds: args.toolIds, mode });
				const canonicalUrl = tools.length === 1 ? compatibilityUrl(current, tools[0]) : `${PUBLIC_ORIGIN}/calculateur/`;
				if (currentEvaluation.verdict === 'continuous') {
					const products = [current, ...tools];
					const sources = sourceUrls(products);
					return result({
						verdict: currentAirVerdict.verdict, verdict_scope: 'air_supply', canonical_url: canonicalUrl,
						product_urls: products.map((item) => productUrl(compressorMap.has(item.id) ? 'compressor' : 'tool', item)),
						source_urls: sources,
						limitations: ['La chaîne pression-débit-cycle actuelle couvre la demande documentée ; aucune substitution corrective de compresseur n’est nécessaire.'],
						next_actions: [],
						current: currentEvaluation, compatibility: currentAirVerdict,
						overall_system_verdict: currentOverallVerdict, air_supply_verdict: currentAirVerdict,
						compatibility_receipt: compatibilityReceipt(catalog, { configurationId: currentConfigurationId, overallSystemVerdict: currentOverallVerdict, airSupplyVerdict: currentAirVerdict, canonicalUrl, sources }),
						alternatives: [],
					}, catalog);
				}
				const alternatives = (catalog.compressors ?? []).filter((item) => item.id !== current.id).map((compressor) => ({ compressor, evaluation: evaluateSystem(compressor, tools, mode) }))
					.filter(({ evaluation }) => evaluation.verdict === 'continuous')
					.sort((left, right) => (left.evaluation.availableFadLpm - left.evaluation.demandFlowLpm) - (right.evaluation.availableFadLpm - right.evaluation.demandFlowLpm) || left.compressor.tankLiters - right.compressor.tankLiters)
					.slice(0, args.limit ?? 5);
				const products = [current, ...tools, ...alternatives.map(({ compressor }) => compressor)];
				const sources = sourceUrls(products);
				return result({
					verdict: currentAirVerdict.verdict, verdict_scope: 'air_supply', canonical_url: canonicalUrl,
					product_urls: products.map((item) => productUrl(compressorMap.has(item.id) ? 'compressor' : 'tool', item)), source_urls: sources,
					limitations: alternatives.length ? ['Le changement minimal est technique, pas une recommandation de prix faute d’offres comparables complètes.'] : ['Aucune substitution concluante n’est documentée dans le catalogue actuel.'],
					next_actions: alternatives.map(({ compressor }) => productUrl('compressor', compressor)), current: currentEvaluation, compatibility: currentAirVerdict,
					overall_system_verdict: currentOverallVerdict, air_supply_verdict: currentAirVerdict,
					compatibility_receipt: compatibilityReceipt(catalog, { configurationId: currentConfigurationId, overallSystemVerdict: currentOverallVerdict, airSupplyVerdict: currentAirVerdict, canonicalUrl, sources }),
					alternatives: alternatives.map(({ compressor, evaluation }) => ({ change: { field: 'compressorId', from: current.id, to: compressor.id }, compressor: productSummary('compressor', compressor), evaluation, air_supply_verdict: airSupplyVerdict(evaluation) })),
				}, catalog);
			}
			case 'compare_complete_systems': {
				const systems = [];
				for (const input of args.systems) {
					const compressor = compressorMap.get(input.compressorId), tools = selectedProducts(input.toolIds);
					if (!compressor || tools.some((item) => !item)) return failure('Une configuration contient un produit inconnu.', catalog);
					const mode = input.mode ?? 'successive', evaluation = evaluateSystem(compressor, tools, mode);
					const configurationId = stableConfigurationId({ compressorId: compressor.id, toolIds: input.toolIds, mode });
					const airVerdict = airSupplyVerdict(evaluation);
					const overallVerdict = completeSystemVerdict(airVerdict, ['Les composants du réseau et les pertes de charge ne sont pas fournis à cet outil de comparaison.']);
					const canonicalUrl = tools.length === 1 ? compatibilityUrl(compressor, tools[0]) : `${PUBLIC_ORIGIN}/calculateur/`;
					const sources = sourceUrls([compressor, ...tools]);
					systems.push({
						configuration_id: configurationId, compressor: productSummary('compressor', compressor), tools: tools.map((tool) => productSummary('tool', tool)), mode, evaluation,
						overall_system_verdict: overallVerdict, air_supply_verdict: airVerdict,
						compatibility_receipt: compatibilityReceipt(catalog, { configurationId, overallSystemVerdict: overallVerdict, airSupplyVerdict: airVerdict, canonicalUrl, sources }),
					});
				}
				const products = systems.flatMap((system) => [compressorMap.get(system.compressor.id), ...system.tools.map((tool) => toolMap.get(tool.id))]).filter(Boolean);
				return result({ canonical_url: `${PUBLIC_ORIGIN}/comparateur/`, product_urls: unique(systems.flatMap((system) => [system.compressor.canonical_url, ...system.tools.map((tool) => tool.canonical_url)])), source_urls: sourceUrls(products), limitations: ['Aucun score commercial ni classement par commission n’est calculé.'], next_actions: systems.map((system) => system.tools.length === 1 ? compatibilityUrl(compressorMap.get(system.compressor.id), toolMap.get(system.tools[0].id)) : `${PUBLIC_ORIGIN}/calculateur/`), systems }, catalog);
			}
			case 'search_knowledge': {
				const query = normalizedText(args.query);
					const matches = knowledgeItems.map((item) => ({ ...item, url: publicCorpusUrl(item.url) })).filter((item) => item.url && (!args.type || item.type === args.type) && (!args.locale || item.locale === args.locale) && normalizedText(`${item.title} ${item.description ?? ''} ${item.keywords ?? ''} ${item.body_markdown ?? ''} ${item.type ?? ''}`).includes(query));
					const found = page(matches, args.cursor, args.limit ?? 10);
					const items = found.items.map(({ body_markdown, ...item }) => ({ ...item, ...(typeof body_markdown === 'string' ? { excerpt: body_markdown.slice(0, 1_200) } : {}) }));
				return result({ verdict: items.length ? 'information' : 'insufficient_data', canonical_url: items[0]?.url ?? `${PUBLIC_ORIGIN}/recherche/`, product_urls: items.filter((item) => item.type === 'Compresseur' || item.type === 'Outil').map((item) => item.url), source_urls: [], limitations: items.length ? ['Recherche limitée au corpus CompatAir publié ; aucun contenu externe n’est téléchargé.'] : ['Aucun document publié ne correspond exactement aux termes fournis.'], next_actions: items.map((item) => item.url), items, ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) }, catalog);
			}
			case 'get_changefeed': {
				const latestOfferAt = (offerSnapshot.offers ?? []).map((offer) => offer.collectedAt).filter(Boolean).sort().at(-1);
				const fallbackEvents = [
					{ id: `method:${METHOD_VERSION}`, type: 'method', version: METHOD_VERSION, observed_at: catalog.verifiedAt, summary: 'Current public compatibility response contract and AirGraph method.' },
					{ id: `catalog:${catalog.catalogVersion}`, type: 'catalog', version: catalog.catalogVersion, observed_at: catalog.verifiedAt, summary: 'Current signed catalog snapshot.' },
					...(offerSnapshot.snapshotVersion ? [{ id: `offers:${offerSnapshot.snapshotVersion}`, type: 'offers', version: offerSnapshot.snapshotVersion, observed_at: latestOfferAt ?? catalog.verifiedAt, summary: 'Current commercial snapshot, independent from technical verdicts.' }] : []),
				];
				const allEvents = changefeedEvents.length ? changefeedEvents : fallbackEvents;
				const sinceTime = typeof args.since === 'string' ? Date.parse(args.since) : Number.NaN;
				const events = args.since ? allEvents.filter((event) => event.version !== args.since && event.id !== args.since && (!Number.isFinite(sinceTime) || Date.parse(event.observed_at) > sinceTime)) : allEvents;
				const found = page(events, args.cursor, args.limit ?? 20);
				return result({ canonical_url: `${PUBLIC_ORIGIN}/corrections/`, limitations: ['Le changefeed expose les versions publiées ; il ne fabrique pas de diff de champs absent des snapshots.'], next_actions: found.items.length ? ['Invalider le cache des outils ou données si une version a changé.'] : [], changes: found.items, ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) }, catalog);
			}
			default: return undefined;
		}
	}

	function readResource(uri) {
		const values = {
			'compatair://catalog/version': { catalogVersion: catalog.catalogVersion, schemaVersion: catalog.schemaVersion, verifiedAt: catalog.verifiedAt },
			'compatair://methodology': { engineVersion: ENGINE_VERSION, standardAtmosphereBar: STANDARD_ATMOSPHERE_BAR, rules: ['FAD comparé à pression égale', 'aucune extrapolation hors courbe', 'débit aspiré jamais substitué', 'fuite et chute de pression ajoutées seulement depuis une mesure explicite', 'débit par action calculé seulement avec une cadence explicite', 'gonflage calculé seulement avec volume, pressions et temps explicites', 'insufficient_data si donnée déterminante absente'] },
			'compatair://tools/taxonomy': { categories: catalog.toolTaxonomy ?? [...new Set(catalog.tools.map((item) => ({ label: item.category })))].sort() },
			'compatair://confidence-scale': { A: 'documentation constructeur exploitable', B: 'source officielle incomplète ou interpolation encadrée', C: 'donnée ambiguë, aucun verdict positif', D: 'information non confirmée, aucun verdict positif' },
			'compatair://affiliation-policy': { verdictBeforeOffers: true, commissionAffectsVerdict: false, staleOfferHours: 48 },
			'compatair://engine/version': { mcpServerVersion: MCP_SERVER_VERSION, methodVersion: METHOD_VERSION, engineVersion: ENGINE_VERSION, verdictSchemaVersion: VERDICT_SCHEMA_VERSION, verdicts: ['continuous', 'intermittent', 'incompatible', 'insufficient_data'] },
			'compatair://airgraph/schema': { schemaVersion: '0.1.0', idPattern: '^ca:(compressor|tool|configuration|requirement):', nodeTypes: ['configuration', 'compressor', 'tool', 'pressure_requirement', 'flow_requirement', 'usage_profile', 'tank_volume', 'compressor_duty_cycle', 'hose_requirement', 'connector_requirement', 'filtration_requirement', 'lubrication_requirement'], relations: ['uses_compressor', 'uses_tool', 'has_tank', 'has_duty_cycle', 'has_usage_profile', 'requires_pressure', 'requires_flow', 'requires_hose', 'requires_connector', 'requires_filtration', 'requires_lubrication', 'compatible', 'compatible_with_limits', 'incompatible', 'insufficient_data'] },
			'compatair://responses/schema': { schemaVersion: '2.0.0', outputSchemas },
			'compatair://tools/core-profile': { schemaVersion: '1.0.0', profile: 'core', tools: CORE_TOOL_NAMES, legacySuccessors: LEGACY_SUCCESSORS },
			'compatair://receipts/schema': receiptSchema,
			'compatair://changefeed/current': { methodVersion: METHOD_VERSION, catalogVersion: catalog.catalogVersion, catalogObservedAt: catalog.verifiedAt, offerSnapshotVersion: offerSnapshot.snapshotVersion },
		};
		return values[uri];
	}

	return {
		handle(message) {
			const { id, method, params = {} } = message;
			if (method === 'notifications/initialized' || method?.startsWith('notifications/')) return null;
			if (!isRecord(params)) return { jsonrpc: '2.0', id, error: { code: -32602, message: 'Paramètres invalides.' } };
			let value;
			switch (method) {
				case 'initialize': value = { protocolVersion: SUPPORTED_PROTOCOL_VERSIONS.includes(params.protocolVersion) ? params.protocolVersion : PROTOCOL_VERSION, capabilities: { tools: { listChanged: false }, resources: { subscribe: false, listChanged: false }, prompts: { listChanged: false } }, serverInfo: { name: 'compatair-mcp', title: 'CompatAir MCP', version: MCP_SERVER_VERSION, description: 'Read-only, deterministic pneumatic compatibility data with canonical CompatAir URLs and evidence.' }, instructions: 'Serveur en lecture seule. Conserver verdict_scope, overall_system_verdict, air_supply_verdict, canonical_url, limitations, source_urls, insufficient_data et toutes les versions. Le champ verdict historique est un alias dont la portée est toujours donnée par verdict_scope. Ne jamais laisser une offre commerciale modifier un verdict technique.' }; break;
				case 'ping': value = {}; break;
				case 'tools/list': { if (params.cursor !== undefined && !isShortString(params.cursor)) return { jsonrpc: '2.0', id, error: { code: -32602, message: 'Curseur invalide.' } }; const found = page(toolDefinitions, params.cursor, 20); value = { tools: found.items, ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) }; break; }
				case 'tools/call': { if (!isShortString(params.name)) return { jsonrpc: '2.0', id, error: { code: -32602, message: 'Nom d’outil invalide.' } }; const called = callTool(params.name, params.arguments ?? {}); if (called === undefined) return { jsonrpc: '2.0', id, error: { code: -32602, message: 'Outil inconnu.' } }; value = called; break; }
				case 'resources/list': value = { resources }; break;
				case 'resources/read': { if (!isShortString(params.uri)) return { jsonrpc: '2.0', id, error: { code: -32602, message: 'URI invalide.' } }; const content = readResource(params.uri); if (!content) return { jsonrpc: '2.0', id, error: { code: -32602, message: 'Ressource inconnue.' } }; value = { contents: [{ uri: params.uri, mimeType: 'application/json', text: JSON.stringify(content) }] }; break; }
				case 'prompts/list': value = { prompts }; break;
				case 'prompts/get': { const prompt = isShortString(params.name) ? prompts.find((item) => item.name === params.name) : undefined; if (!prompt) return { jsonrpc: '2.0', id, error: { code: -32602, message: 'Prompt inconnu.' } }; const promptArguments = params.arguments ?? {}; if (!isRecord(promptArguments) || Object.values(promptArguments).some((item) => typeof item !== 'string' || item.length > 4_000)) return { jsonrpc: '2.0', id, error: { code: -32602, message: 'Arguments de prompt invalides.' } }; const supplied = Object.values(promptArguments).join('\n').slice(0, 8_000); value = { description: prompt.description, messages: [{ role: 'user', content: { type: 'text', text: `${prompt.description}\n\n${supplied}\n\nUtiliser uniquement les données et outils CompatAir. Signaler toute donnée insuffisante.` } }] }; break; }
				default: return { jsonrpc: '2.0', id, error: { code: -32601, message: 'Méthode inconnue.' } };
			}
			return { jsonrpc: '2.0', id, result: value };
		},
	};
}

export { ENGINE_VERSION, MCP_SERVER_VERSION, METHOD_VERSION, PROTOCOL_VERSION, VERDICT_SCHEMA_VERSION, compatibility, interpolateFad, verifyCompatibilityReceipt };
