const ENGINE_VERSION = '1.2.0';
const PROTOCOL_VERSION = '2025-06-18';
const STANDARD_ATMOSPHERE_BAR = 1.01325;
const MAX_SHORT_TEXT = 256;

function isRecord(value) { return value !== null && typeof value === 'object' && !Array.isArray(value); }
function hasOnlyKeys(value, allowed) { return isRecord(value) && Object.keys(value).every((key) => allowed.includes(key)); }
function isShortString(value) { return typeof value === 'string' && value.length <= MAX_SHORT_TEXT; }
function isFiniteNumber(value, minimum, maximum, exclusiveMinimum = false) {
	return typeof value === 'number' && Number.isFinite(value) && (exclusiveMinimum ? value > minimum : value >= minimum) && (maximum === undefined || value <= maximum);
}
function isOptionalInteger(value, minimum, maximum) { return value === undefined || (Number.isInteger(value) && value >= minimum && value <= maximum); }

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

function compatibility(compressor, tool, safetyMargin = .25) {
	if (tool.demandModel !== 'fixed-flow') return {
		verdict: 'insufficient_data',
		limitingFactor: 'data',
		warnings: [tool.demandModel === 'per-action' ? 'Un rythme d’actions par minute est requis pour convertir le volume par action en débit.' : tool.demandExplanation],
		calculationVersion: ENGINE_VERSION,
	};
	const requiredFadLpm = tool.airflowLpm.typical * (1 + safetyMargin);
	if (compressor.maxPressureBar < tool.workingPressureBar.typical) return { verdict: 'incompatible', limitingFactor: 'pressure', requiredFadLpm, calculationVersion: ENGINE_VERSION };
	const availableFadLpm = interpolateFad(compressor, tool.workingPressureBar.typical);
	if (availableFadLpm === undefined || ['C', 'D'].includes(compressor.confidence)) return { verdict: 'insufficient_data', limitingFactor: 'data', requiredFadLpm, calculationVersion: ENGINE_VERSION };
	return { verdict: availableFadLpm >= tool.airflowLpm.typical ? 'continuous' : 'incompatible', limitingFactor: availableFadLpm >= tool.airflowLpm.typical ? undefined : 'flow', requiredFadLpm, availableFadLpm, marginPercent: ((availableFadLpm - tool.airflowLpm.typical) / tool.airflowLpm.typical) * 100, calculationVersion: ENGINE_VERSION };
}

const toolDefinitions = [
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
].map(([name, description, properties, required = []]) => ({ name, description, inputSchema: { type: 'object', properties, required, additionalProperties: false }, annotations: { readOnlyHint: true, destructiveHint: false, openWorldHint: false } }));

const resources = [
	['compatair://catalog/version', 'Version du catalogue', 'Version et date de vérification du snapshot.'],
	['compatair://methodology', 'Méthodologie', 'Règles du moteur déterministe.'],
	['compatair://tools/taxonomy', 'Taxonomie des outils', 'Catégories présentes dans le catalogue.'],
	['compatair://confidence-scale', 'Échelle de confiance', 'Définition des niveaux A à D.'],
	['compatair://affiliation-policy', 'Politique d’affiliation', 'Indépendance des verdicts et offres.'],
	['compatair://engine/version', 'Version du moteur', 'Version des formules de calcul.'],
].map(([uri, name, description]) => ({ uri, name, description, mimeType: 'application/json' }));

const prompts = [
	{ name: 'choisir_un_compresseur', description: 'Dimensionner un compresseur à partir d’outils et d’un profil d’usage.', arguments: [{ name: 'besoin', description: 'Outils, simultanéité et durée.', required: true }] },
	{ name: 'auditer_une_installation', description: 'Identifier les données manquantes et facteurs limitants.', arguments: [{ name: 'installation', description: 'Compresseur, réseau et outils.', required: true }] },
	{ name: 'comparer_des_configurations', description: 'Comparer plusieurs configurations sans extrapoler les données.', arguments: [{ name: 'configurations', description: 'Configurations à comparer.', required: true }] },
];

function result(value, catalog) {
	const structuredContent = { catalogVersion: catalog.catalogVersion, engineVersion: ENGINE_VERSION, ...value };
	return { content: [{ type: 'text', text: JSON.stringify(structuredContent) }], structuredContent, isError: false };
}
function failure(message, catalog) { return { content: [{ type: 'text', text: message }], structuredContent: { catalogVersion: catalog.catalogVersion, engineVersion: ENGINE_VERSION, error: message }, isError: true }; }

export function createMcpCore(catalog, offerSnapshot = { offers: [], snapshotVersion: 'empty' }) {
	const toolMap = new Map((catalog.tools ?? []).map((item) => [item.id, item])); const compressorMap = new Map((catalog.compressors ?? []).map((item) => [item.id, item]));
	function callTool(name, args = {}) {
		if (!validToolArguments(name, args)) return failure('Arguments invalides.', catalog);
		switch (name) {
			case 'search_tools': { const q = String(args.query ?? '').toLowerCase(); const values = catalog.tools.filter((item) => (!q || `${item.label} ${item.category} ${item.brand} ${item.model}`.toLowerCase().includes(q)) && (!args.category || item.category === args.category)); const found = page(values, args.cursor, args.limit); return result({ tools: found.items, ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) }, catalog); }
			case 'get_tool_requirements': { const item = toolMap.get(args.id); return item ? result({ tool: item }, catalog) : failure('Outil inconnu.', catalog); }
			case 'search_compressors': { const q = String(args.query ?? '').toLowerCase(); const values = catalog.compressors.filter((item) => (!q || `${item.brand} ${item.model} ${item.mpn ?? ''}`.toLowerCase().includes(q)) && (!args.minTankLiters || item.tankLiters >= args.minTankLiters) && (!args.minPressureBar || item.maxPressureBar >= args.minPressureBar) && (!args.oilType || item.oilType === args.oilType)); const found = page(values, args.cursor, args.limit); return result({ compressors: found.items, ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) }, catalog); }
			case 'get_compressor_specs': { const item = compressorMap.get(args.id); return item ? result({ compressor: item }, catalog) : failure('Compresseur inconnu.', catalog); }
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
				return result({ sizing: { verdict: 'insufficient_data', peakFlowLpm, averageFlowLpm, toolPressureBar, requiredPressureBar, measuredLeakLpm, measuredPressureDropBar, recommendedFadLpm: peakFlowLpm * (1 + safetyMargin), flowBasis, limitingFactor: 'data', hypotheses: [`mode=${mode}`, `safetyMargin=${safetyMargin}`, `measuredLeakLpm=${measuredLeakLpm}`, `measuredPressureDropBar=${measuredPressureDropBar}`, ...demands.flatMap((item) => item.hypothesis ? [item.hypothesis] : [])], calculationVersion: ENGINE_VERSION } }, catalog);
			}
			case 'check_compatibility': { const compressor = compressorMap.get(args.compressorId), tool = toolMap.get(args.toolId); if (!compressor || !tool) return failure('Compresseur ou outil inconnu.', catalog); return result({ compatibility: compatibility(compressor, tool, args.safetyMargin ?? .25) }, catalog); }
			case 'compare_compressors': { if (!Array.isArray(args.ids) || args.ids.length < 2 || args.ids.length > 3) return failure('Deux ou trois identifiants sont requis.', catalog); const values = args.ids.map((id) => compressorMap.get(id)); return values.some((item) => !item) ? failure('Un compresseur est inconnu.', catalog) : result({ compressors: values }, catalog); }
			case 'find_accessories': { const tool = toolMap.get(args.toolId); if (!tool) return failure('Outil inconnu.', catalog); return result({ status: tool.connectorSize ? 'documented' : 'insufficient_data', accessories: tool.connectorSize ? [{ type: 'connector_or_hose', requirement: tool.connectorSize, source: tool.evidence?.[0] }] : [] }, catalog); }
			case 'find_offers': { const values = (offerSnapshot.offers ?? []).filter((offer) => offer.productId === args.productId); const found = page(values, args.cursor, args.limit); return result({ offerSnapshotVersion: offerSnapshot.snapshotVersion, offers: found.items, ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) }, catalog); }
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
			'compatair://engine/version': { engineVersion: ENGINE_VERSION, verdicts: ['continuous', 'intermittent', 'incompatible', 'insufficient_data'] },
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
				case 'initialize': value = { protocolVersion: PROTOCOL_VERSION, capabilities: { tools: { listChanged: false }, resources: { subscribe: false, listChanged: false }, prompts: { listChanged: false } }, serverInfo: { name: 'compatair-mcp', title: 'CompatAir MCP', version: ENGINE_VERSION }, instructions: 'Serveur en lecture seule. Conserver insufficient_data et les versions dans chaque résultat.' }; break;
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

export { ENGINE_VERSION, PROTOCOL_VERSION, compatibility, interpolateFad };
