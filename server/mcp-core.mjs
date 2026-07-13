const ENGINE_VERSION = '1.0.0';
const PROTOCOL_VERSION = '2025-06-18';

function page(values, cursor, limit = 20) {
	const start = cursor ? Number.parseInt(Buffer.from(cursor, 'base64url').toString('utf8'), 10) : 0;
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
	['size_compressor', 'Dimensionner un besoin de débit déterministe.', { demands: { type: 'array', minItems: 1, maxItems: 20, items: { type: 'object', properties: { flowLpm: { type: 'number', exclusiveMinimum: 0 }, pressureBar: { type: 'number', exclusiveMinimum: 0 }, quantity: { type: 'integer', minimum: 1 }, dutyFactor: { type: 'number', exclusiveMinimum: 0, maximum: 1 } }, required: ['flowLpm', 'pressureBar'] } }, mode: { type: 'string', enum: ['simultaneous', 'successive'] }, safetyMargin: { type: 'number', minimum: 0, maximum: 1 } }, ['demands']],
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
		switch (name) {
			case 'search_tools': { const q = String(args.query ?? '').toLowerCase(); const values = catalog.tools.filter((item) => (!q || `${item.label} ${item.category} ${item.brand} ${item.model}`.toLowerCase().includes(q)) && (!args.category || item.category === args.category)); const found = page(values, args.cursor, args.limit); return result({ tools: found.items, ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) }, catalog); }
			case 'get_tool_requirements': { const item = toolMap.get(args.id); return item ? result({ tool: item }, catalog) : failure('Outil inconnu.', catalog); }
			case 'search_compressors': { const q = String(args.query ?? '').toLowerCase(); const values = catalog.compressors.filter((item) => (!q || `${item.brand} ${item.model} ${item.mpn ?? ''}`.toLowerCase().includes(q)) && (!args.minTankLiters || item.tankLiters >= args.minTankLiters) && (!args.minPressureBar || item.maxPressureBar >= args.minPressureBar) && (!args.oilType || item.oilType === args.oilType)); const found = page(values, args.cursor, args.limit); return result({ compressors: found.items, ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) }, catalog); }
			case 'get_compressor_specs': { const item = compressorMap.get(args.id); return item ? result({ compressor: item }, catalog) : failure('Compresseur inconnu.', catalog); }
			case 'size_compressor': { const mode = args.mode === 'simultaneous' ? 'simultaneous' : 'successive'; const safetyMargin = Number.isFinite(args.safetyMargin) ? args.safetyMargin : .25; if (!Array.isArray(args.demands) || !args.demands.length) return failure('Au moins une demande est requise.', catalog); const demands = args.demands.map((item) => ({ peak: Number(item.flowLpm) * Number(item.quantity ?? 1), average: Number(item.flowLpm) * Number(item.quantity ?? 1) * Number(item.dutyFactor ?? 1), pressure: Number(item.pressureBar) })); if (demands.some((item) => !Number.isFinite(item.peak) || item.peak <= 0 || !Number.isFinite(item.pressure) || item.pressure <= 0)) return failure('Demande invalide.', catalog); const peakFlowLpm = mode === 'simultaneous' ? demands.reduce((sum, item) => sum + item.peak, 0) : Math.max(...demands.map((item) => item.peak)); const averageFlowLpm = Math.min(peakFlowLpm, demands.reduce((sum, item) => sum + item.average, 0)); return result({ sizing: { verdict: 'insufficient_data', peakFlowLpm, averageFlowLpm, requiredPressureBar: Math.max(...demands.map((item) => item.pressure)), recommendedFadLpm: peakFlowLpm * (1 + safetyMargin), limitingFactor: 'data', hypotheses: [`mode=${mode}`, `safetyMargin=${safetyMargin}`], calculationVersion: ENGINE_VERSION } }, catalog); }
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
			'compatair://methodology': { engineVersion: ENGINE_VERSION, rules: ['FAD comparé à pression égale', 'aucune extrapolation hors courbe', 'débit aspiré jamais substitué', 'insufficient_data si donnée déterminante absente'] },
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
			let value;
			switch (method) {
				case 'initialize': value = { protocolVersion: PROTOCOL_VERSION, capabilities: { tools: { listChanged: false }, resources: { subscribe: false, listChanged: false }, prompts: { listChanged: false } }, serverInfo: { name: 'compatair-mcp', title: 'CompatAir MCP', version: '1.0.0' }, instructions: 'Serveur en lecture seule. Conserver insufficient_data et les versions dans chaque résultat.' }; break;
				case 'ping': value = {}; break;
				case 'tools/list': { const found = page(toolDefinitions, params.cursor, 20); value = { tools: found.items, ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) }; break; }
				case 'tools/call': { const called = callTool(params.name, params.arguments); if (called === undefined) return { jsonrpc: '2.0', id, error: { code: -32602, message: `Outil inconnu : ${params.name}` } }; value = called; break; }
				case 'resources/list': value = { resources }; break;
				case 'resources/read': { const content = readResource(params.uri); if (!content) return { jsonrpc: '2.0', id, error: { code: -32602, message: 'Ressource inconnue.' } }; value = { contents: [{ uri: params.uri, mimeType: 'application/json', text: JSON.stringify(content) }] }; break; }
				case 'prompts/list': value = { prompts }; break;
				case 'prompts/get': { const prompt = prompts.find((item) => item.name === params.name); if (!prompt) return { jsonrpc: '2.0', id, error: { code: -32602, message: 'Prompt inconnu.' } }; const supplied = Object.values(params.arguments ?? {}).join('\n'); value = { description: prompt.description, messages: [{ role: 'user', content: { type: 'text', text: `${prompt.description}\n\n${supplied}\n\nUtiliser uniquement les données et outils CompatAir. Signaler toute donnée insuffisante.` } }] }; break; }
				default: return { jsonrpc: '2.0', id, error: { code: -32601, message: 'Méthode inconnue.' } };
			}
			return { jsonrpc: '2.0', id, result: value };
		},
	};
}

export { ENGINE_VERSION, PROTOCOL_VERSION, compatibility, interpolateFad };
