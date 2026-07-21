import { compactOutputSchemas, DECISION_CORE_TOOL_NAMES, LEGACY_SUCCESSORS } from './mcp-output-schemas.mjs';

const MAX_SHORT_TEXT = 256;
const MAX_URL_TEXT = 4_096;

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
	['orient_decision', 'Route a pneumatic-air question to the smallest suitable CompatAir tool and profile. Use this when the next action is unclear.', { goal: { type: 'string', enum: ['identify', 'evaluate', 'find_solution', 'knowledge', 'offers', 'evidence', 'compare', 'changes', 'legacy'] } }, ['goal']],
	['evaluate_air_compatibility', 'Evaluate documented air-supply compatibility for one compressor and one or more tools. Returns air-supply and complete-system verdicts separately; commercial data never changes either verdict.', { compressorId: { type: 'string' }, toolIds: { type: 'array', minItems: 1, maxItems: 20, items: { type: 'string' } }, mode: { type: 'string', enum: ['simultaneous', 'successive'] } }, ['compressorId', 'toolIds']],
	['identify_product', 'Identify a catalog product from a name, CompatAir or merchant URL, EAN/GTIN, MPN, evidenced distributor SKU, reference, or stable CompatAir ID. No network fetch is performed.', { query: { type: 'string', maxLength: MAX_SHORT_TEXT }, url: { type: 'string', maxLength: MAX_URL_TEXT }, ean: { type: 'string', maxLength: MAX_SHORT_TEXT }, reference: { type: 'string', maxLength: MAX_SHORT_TEXT }, limit: { type: 'integer', minimum: 1, maximum: 10 } }],
	['build_complete_air_system', 'Build a source-backed compressor, pneumatic tool, hose, connector, filtration and lubrication system. Missing component data stays explicit.', { toolIds: { type: 'array', minItems: 1, maxItems: 20, items: { type: 'string' } }, mode: { type: 'string', enum: ['simultaneous', 'successive'] }, compressorId: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 10 } }, ['toolIds']],
	['explain_compatibility_verdict', 'Explain each documented pressure, flow, duty-cycle or missing-data factor behind a published compatibility verdict.', { compressorId: { type: 'string' }, toolId: { type: 'string' } }, ['compressorId', 'toolId']],
	['find_compatible_alternatives', 'Find the smallest verified compressor substitution for an incompatible documented system. Commercial commission never affects ordering.', { compressorId: { type: 'string' }, toolIds: { type: 'array', minItems: 1, maxItems: 20, items: { type: 'string' } }, mode: { type: 'string', enum: ['simultaneous', 'successive'] }, limit: { type: 'integer', minimum: 1, maximum: 10 } }, ['compressorId', 'toolIds']],
	['compare_complete_systems', 'Compare two to five complete configurations on documented technical facts without a commercial score.', { systems: { type: 'array', minItems: 2, maxItems: 5, items: { type: 'object', properties: { compressorId: { type: 'string' }, toolIds: { type: 'array', minItems: 1, maxItems: 20, items: { type: 'string' } }, mode: { type: 'string', enum: ['simultaneous', 'successive'] } }, required: ['compressorId', 'toolIds'], additionalProperties: false } } }, ['systems']],
	['get_compatibility_evidence', 'Return the exact characteristics, evidence references, source URLs and AirGraph edges used for one compatibility result.', { compressorId: { type: 'string' }, toolId: { type: 'string' } }, ['compressorId', 'toolId']],
	['search_knowledge', 'Search the published CompatAir guides, glossary, methods and product pages. The server never fetches arbitrary external content.', { query: { type: 'string', maxLength: MAX_SHORT_TEXT }, type: { type: 'string', enum: ['Guide', 'Glossaire', 'Compresseur', 'Outil'] }, locale: { type: 'string', enum: ['fr', 'en'] }, cursor: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 20 } }, ['query']],
	['get_current_offers', 'Return dated current prices and availability separately from technical verdicts. Only allowlisted, fresh merchant destinations are returned.', { productIds: { type: 'array', minItems: 1, maxItems: 20, items: { type: 'string' } }, cursor: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 50 } }, ['productIds']],
	['get_changefeed', 'Return catalog, method and offer snapshot changes visible since a date or version supplied by the client.', { since: { type: 'string', maxLength: MAX_SHORT_TEXT }, cursor: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 20 } }],
];

export const allToolDefinitions = [...legacyToolDefinitions, ...airGraphToolDefinitions].map(([name, description, properties, required = []]) => ({
	name,
	description: LEGACY_SUCCESSORS[name] ? `[LEGACY : préférer ${LEGACY_SUCCESSORS[name]}] ${description}` : description,
	inputSchema: { type: 'object', properties, required, additionalProperties: false },
	outputSchema: compactOutputSchemas[name] ?? {
		type: 'object',
		properties: { verdict: { type: 'string' }, verdict_scope: { type: 'string' }, canonical_url: { type: 'string', format: 'uri' }, limitations: { type: 'array', items: { type: 'string' } }, next_actions: { type: 'array', items: { type: 'string' } } },
		required: ['verdict', 'verdict_scope', 'canonical_url', 'limitations', 'next_actions'],
		additionalProperties: true,
	},
	annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
	_meta: LEGACY_SUCCESSORS[name]
		? { 'fr.compatair/lifecycle': 'legacy', 'fr.compatair/successor': LEGACY_SUCCESSORS[name], 'fr.compatair/profile': 'legacy' }
		: { 'fr.compatair/lifecycle': DECISION_CORE_TOOL_NAMES.includes(name) ? 'core' : 'extended', 'fr.compatair/profile': DECISION_CORE_TOOL_NAMES.includes(name) ? 'decision-core' : 'extended' },
}));

export const mcpResources = [
	['compatair://catalog/version', 'Version du catalogue', 'Version et date de vérification du snapshot.'],
	['compatair://methodology', 'Méthodologie', 'Règles du moteur déterministe.'],
	['compatair://tools/taxonomy', 'Taxonomie des outils', 'Catégories présentes dans le catalogue.'],
	['compatair://confidence-scale', 'Échelle de confiance', 'Définition des niveaux A à D.'],
	['compatair://affiliation-policy', 'Politique d’affiliation', 'Indépendance des verdicts et offres.'],
	['compatair://engine/version', 'Version du moteur', 'Version des formules de calcul.'],
	['compatair://airgraph/schema', 'AirGraph schema', 'Stable node identifiers, relations and evidence boundaries.'],
	['compatair://responses/schema', 'MCP response contracts', 'Strict tool-specific output schemas and scoped verdict contracts.'],
	['compatair://tools/core-profile', 'Recommended decision-core profile', 'Seven non-overlapping tools recommended for general agent integrations.'],
	['compatair://receipts/schema', 'Compatibility receipt schema', 'Deterministic, versioned and independently hash-verifiable compatibility receipt.'],
	['compatair://changefeed/current', 'Current changefeed state', 'Current method, catalog and offer snapshot versions.'],
].map(([uri, name, description]) => ({ uri, name, description, mimeType: 'application/json' }));

export const mcpPrompts = [
	{ name: 'choisir_un_compresseur', description: 'Dimensionner un compresseur à partir d’outils et d’un profil d’usage.', arguments: [{ name: 'besoin', description: 'Outils, simultanéité et durée.', required: true }] },
	{ name: 'auditer_une_installation', description: 'Identifier les données manquantes et facteurs limitants.', arguments: [{ name: 'installation', description: 'Compresseur, réseau et outils.', required: true }] },
	{ name: 'comparer_des_configurations', description: 'Comparer plusieurs configurations sans extrapoler les données.', arguments: [{ name: 'configurations', description: 'Configurations à comparer.', required: true }] },
];
