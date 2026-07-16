const PUBLIC_VERDICTS = ['information', 'compatible', 'compatible_with_limits', 'incompatible', 'insufficient_data'];
const ENGINE_VERDICTS = ['continuous', 'intermittent', 'incompatible', 'insufficient_data'];
const VERDICT_SCOPES = ['information', 'request', 'air_supply', 'complete_air_system', 'commercial_constraints'];

const string = { type: 'string' };
const number = { type: 'number' };
const nullableString = { type: ['string', 'null'] };
const nullableNumber = { type: ['number', 'null'] };
const stringArray = { type: 'array', items: string };
const uri = { type: 'string', format: 'uri' };
const uriArray = { type: 'array', items: uri, uniqueItems: true };
const strict = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });

const evidenceSchema = strict({
	id: string, sourceUrl: uri, sourceLabel: string,
	sourceType: { type: 'string', enum: ['manufacturer', 'manual', 'merchant', 'measured'] },
	retrievedAt: { type: 'string', format: 'date' }, confidence: { type: 'string', enum: ['A', 'B', 'C', 'D'] }, notes: string,
}, ['id', 'sourceUrl', 'sourceLabel', 'sourceType', 'retrievedAt', 'confidence']);

const imageSchema = strict({ src: string, alt: string, sourceUrl: uri, sourceLabel: string }, ['src', 'alt', 'sourceUrl', 'sourceLabel']);
const editorialSchema = strict({ overview: string, verifiedFacts: stringArray, limitations: stringArray }, ['overview', 'verifiedFacts', 'limitations']);
const specificationSchema = strict({ label: string, value: string, evidenceIds: stringArray }, ['label', 'value', 'evidenceIds']);
const aliasSchema = strict({ type: { type: 'string', enum: ['mpn', 'ean', 'gtin', 'legacy_mpn'] }, value: string, evidenceIds: stringArray }, ['type', 'value', 'evidenceIds']);
const variantSchema = strict({ familyId: string, label: string, distinguishingAttributes: { type: 'object', additionalProperties: string } }, ['familyId', 'label', 'distinguishingAttributes']);
const rangeSchema = strict({ min: number, typical: number, max: number }, ['max']);
const hoseSchema = strict({ innerDiameterMm: number, maximumLengthMeters: number });
const fadPointSchema = strict({ pressureBar: number, litersPerMinute: number }, ['pressureBar', 'litersPerMinute']);

const productBase = {
	id: string, slug: string, brand: string, model: string, label: string, category: string, categoryId: string,
	mpn: string, ean: string, gtin: string, identifierAliases: { type: 'array', items: aliasSchema }, variant: variantSchema,
	confidence: { type: 'string', enum: ['A', 'B', 'C', 'D'] }, status: { type: 'string', enum: ['active', 'discontinued', 'unknown'] },
	image: imageSchema, editorial: editorialSchema, specifications: { type: 'array', items: specificationSchema },
	evidence: { type: 'array', items: evidenceSchema }, fieldSources: { type: 'object', additionalProperties: { type: 'array', items: string } }, notes: stringArray,
	compat_air_id: string, canonical_url: uri,
};
const compressorSchema = strict({
	...productBase, tankLiters: number, maxPressureBar: number, fadCurve: { type: 'array', items: fadPointSchema }, intakeFlowLpm: number,
	dutyCycle: number, oilType: { type: 'string', enum: ['oil', 'oil-free'] }, noiseDb: number, powerKw: number, weightKg: number,
	mobility: { type: 'string', enum: ['portable', 'mobile', 'fixed'] }, voltage: string, phase: { type: 'string', enum: ['single-phase', 'three-phase'] },
}, ['id', 'slug', 'brand', 'model', 'tankLiters', 'maxPressureBar', 'fadCurve', 'oilType', 'confidence', 'image', 'editorial', 'specifications', 'evidence', 'fieldSources', 'notes']);
const toolSchema = strict({
	...productBase, demandModel: { type: 'string', enum: ['fixed-flow', 'per-action', 'variable-volume'] }, workingPressureBar: rangeSchema,
	airflowLpm: rangeSchema, airPerActionLiters: number, actionLabel: string, demandExplanation: string, connectorSize: string,
	usagePattern: { type: 'string', enum: ['burst', 'intermittent', 'continuous'] }, dutyFactor: number,
	filtrationRequirement: string, lubricationRequirement: string, recommendedHose: hoseSchema, minimumCompressorPowerKw: number,
}, ['id', 'slug', 'categoryId', 'category', 'label', 'brand', 'model', 'demandModel', 'workingPressureBar', 'confidence', 'image', 'editorial', 'specifications', 'evidence', 'fieldSources', 'notes']);

const productSummarySchema = strict({
	compat_air_id: string, type: { type: 'string', enum: ['compressor', 'tool'] }, id: string, slug: string, brand: string, model: string,
	label: string, mpn: string, ean: string, canonical_url: uri, match_confidence: { type: 'string', enum: ['exact', 'candidate'] },
}, ['compat_air_id', 'type', 'id', 'slug', 'brand', 'model', 'canonical_url']);

const verdictMetricsSchema = strict({
	required_fad_lpm: nullableNumber, available_fad_lpm: nullableNumber, effective_average_capacity_lpm: nullableNumber,
	required_pressure_bar: nullableNumber, available_pressure_bar: nullableNumber, demand_flow_lpm: nullableNumber,
	recommended_fad_lpm: nullableNumber, margin_percent: nullableNumber, mode: nullableString,
});
const scopedVerdictSchema = strict({
	schema_version: { const: '2.0.0' }, scope: { type: 'string', enum: VERDICT_SCOPES }, verdict: { type: 'string', enum: PUBLIC_VERDICTS },
	engine_verdict: { type: 'string', enum: ENGINE_VERDICTS }, limiting_factor: nullableString, limitations: stringArray, metrics: verdictMetricsSchema,
}, ['schema_version', 'scope', 'verdict', 'limitations']);

const requirementSchema = strict({ tool_id: string, requirement: { oneOf: [string, hoseSchema, { type: 'null' }] } }, ['tool_id', 'requirement']);
const componentsSchema = strict({
	compressor: { oneOf: [productSummarySchema, { type: 'null' }] }, tools: { type: 'array', items: productSummarySchema },
	hoses: { type: 'array', items: requirementSchema }, connectors: { type: 'array', items: requirementSchema },
	filtration: { type: 'array', items: requirementSchema }, lubrication: { type: 'array', items: requirementSchema },
}, ['compressor', 'tools', 'hoses', 'connectors', 'filtration', 'lubrication']);

const airGraphValueSchema = { oneOf: [string, number, hoseSchema] };
const airGraphNodeSchema = strict({ id: string, type: string, label: string, canonical_url: uri, value: airGraphValueSchema, unit: string }, ['id', 'type']);
const airGraphEdgeSchema = strict({ from: string, to: string, relation: string }, ['from', 'to', 'relation']);
const airGraphSchema = strict({ schema_version: string, configuration_id: string, nodes: { type: 'array', items: airGraphNodeSchema }, edges: { type: 'array', items: airGraphEdgeSchema } }, ['schema_version', 'configuration_id', 'nodes', 'edges']);

const receiptSchema = strict({
	schema_version: { const: '1.0.0' }, receipt_id: { type: 'string', pattern: '^ca:receipt:[a-f0-9]{64}$' }, configuration_id: string,
	overall_system_verdict: scopedVerdictSchema, air_supply_verdict: scopedVerdictSchema,
	method_version: string, catalog_version: string, observed_at: { type: 'string', format: 'date' }, canonical_url: uri, source_urls: uriArray,
	integrity: strict({ algorithm: { const: 'sha-256' }, digest: { type: 'string', pattern: '^[a-f0-9]{64}$' }, canonicalization: { const: 'json-sort-keys-v1' } }, ['algorithm', 'digest', 'canonicalization']),
	verification_url: uri,
}, ['schema_version', 'receipt_id', 'configuration_id', 'overall_system_verdict', 'air_supply_verdict', 'method_version', 'catalog_version', 'observed_at', 'canonical_url', 'source_urls', 'integrity', 'verification_url']);

const evaluationSchema = strict({
	verdict: { type: 'string', enum: ENGINE_VERDICTS }, limitingFactor: string, requiredFadLpm: number, availableFadLpm: number,
	effectiveAverageCapacityLpm: number, requiredPressureBar: number, demandFlowLpm: number, recommendedFadLpm: number,
	marginPercent: number, calculationVersion: string, warnings: stringArray, limitations: stringArray, mode: { type: 'string', enum: ['simultaneous', 'successive'] },
}, ['verdict']);
const candidateSchema = strict({ compressor: productSummarySchema, evaluation: evaluationSchema, air_supply_verdict: scopedVerdictSchema }, ['compressor', 'evaluation']);
const alternativeSchema = strict({
	change: strict({ field: { const: 'compressorId' }, from: string, to: string }, ['field', 'from', 'to']),
	compressor: productSummarySchema, evaluation: evaluationSchema, air_supply_verdict: scopedVerdictSchema,
}, ['change', 'compressor', 'evaluation']);
const factorSchema = strict({ factor: { type: 'string', enum: ['pressure', 'flow', 'duty_cycle'] }, required_bar: number, available_bar: number, required_fad_lpm: number, available_fad_lpm: number, documented: nullableNumber, status: { type: 'string', enum: ['pass', 'block', 'insufficient_data', 'not_applicable_to_published_pair'] } }, ['factor', 'status']);
const evidenceBundleSchema = strict({
	compressor: { type: 'array', items: evidenceSchema }, tool: { type: 'array', items: evidenceSchema },
	field_sources: strict({ compressor: { type: 'object', additionalProperties: stringArray }, tool: { type: 'object', additionalProperties: stringArray } }, ['compressor', 'tool']),
}, ['compressor', 'tool', 'field_sources']);

const offerSchema = strict({
	id: string, productId: string, merchantId: string, merchantProductId: string, productName: string, imageUrl: uri, url: uri,
	priceEur: number, shippingEur: number, availability: { type: 'string', enum: ['in_stock', 'out_of_stock', 'preorder', 'unknown'] },
	collectedAt: string, sourceId: string, sourceChecksum: string,
	identifiers: strict({ ean: string, gtin: string, mpn: string }),
}, ['id', 'productId', 'url']);
const changeSchema = strict({ id: string, type: string, version: string, observed_at: { type: 'string', format: 'date' }, summary: string, breaking: { type: 'boolean' }, canonical_url: uri, affected_product_ids: stringArray, decision_impact: string }, ['id', 'type', 'version', 'observed_at', 'summary']);
const knowledgeSchema = strict({
	id: string, title: string, description: string, type: string, locale: string, url: uri, keywords: string, excerpt: string,
	observed_at: { type: 'string', format: 'date' }, source_urls: uriArray,
	content_sha256: { type: 'string', pattern: '^[a-f0-9]{64}$' },
	translation: strict({
		status: { type: 'string', enum: ['source', 'machine_translated_unreviewed', 'human_reviewed'] },
		source_locale: { const: 'fr' }, source_id: string,
	}, ['status']),
}, ['id', 'title', 'description', 'type', 'locale', 'url', 'keywords', 'observed_at', 'source_urls', 'content_sha256']);

const commonProperties = {
	verdict: { type: 'string', enum: PUBLIC_VERDICTS }, verdict_scope: { type: 'string', enum: VERDICT_SCOPES }, verdict_schema_version: { const: '2.0.0' },
	canonical_url: uri, canonical_follow_url: uri, product_urls: uriArray, source_urls: uriArray, method_version: string, catalog_version: string,
	observed_at: { type: 'string', format: 'date' }, limitations: stringArray, next_actions: stringArray,
	catalogVersion: string, engineVersion: string,
	error: strict({ code: { type: 'string', enum: ['invalid_arguments', 'insufficient_data'] }, message: string, scope: { const: 'request' }, retryable: { type: 'boolean' } }, ['code', 'message', 'scope', 'retryable']),
};
const commonRequired = ['verdict', 'verdict_scope', 'verdict_schema_version', 'canonical_url', 'product_urls', 'source_urls', 'method_version', 'catalog_version', 'observed_at', 'limitations', 'next_actions', 'catalogVersion', 'engineVersion'];
const output = (extra = {}, required = []) => strict({ ...commonProperties, ...extra }, [...commonRequired, ...required]);

const decisionProperties = {
	overall_system_verdict: scopedVerdictSchema, air_supply_verdict: scopedVerdictSchema, compatibility: scopedVerdictSchema,
	compatibility_receipt: receiptSchema,
};

const outputSchemas = {
	search_tools: output({ tools: { type: 'array', items: toolSchema }, nextCursor: string }),
	get_tool_requirements: output({ tool: toolSchema }),
	search_compressors: output({ compressors: { type: 'array', items: compressorSchema }, nextCursor: string }),
	get_compressor_specs: output({ compressor: compressorSchema }),
	size_compressor: output({ sizing: strict({ verdict: { const: 'insufficient_data' }, peakFlowLpm: number, averageFlowLpm: number, toolPressureBar: number, requiredPressureBar: number, measuredLeakLpm: number, measuredPressureDropBar: number, recommendedFadLpm: number, flowBasis: { type: 'string', enum: ['derived-average', 'documented-continuous'] }, limitingFactor: { const: 'data' }, hypotheses: stringArray, calculationVersion: string }, ['verdict', 'peakFlowLpm', 'averageFlowLpm', 'toolPressureBar', 'requiredPressureBar', 'recommendedFadLpm', 'flowBasis', 'limitingFactor', 'hypotheses', 'calculationVersion']) }),
	check_compatibility: output(decisionProperties),
	compare_compressors: output({ compressors: { type: 'array', items: compressorSchema } }),
	find_accessories: output({ status: { type: 'string', enum: ['documented', 'insufficient_data'] }, accessories: { type: 'array', items: strict({ type: { type: 'string', enum: ['connector', 'hose', 'filtration', 'lubrication'] }, requirement: { oneOf: [string, hoseSchema] } }, ['type', 'requirement']) } }),
	find_offers: output({ offerSnapshotVersion: string, offers: { type: 'array', items: offerSchema }, nextCursor: string }),
	identify_product: output({ matches: { type: 'array', items: productSummarySchema } }),
	build_complete_air_system: output({ ...decisionProperties, configuration_id: string, evaluation: evaluationSchema, components: componentsSchema, compressor_candidates: { type: 'array', items: candidateSchema }, airgraph: airGraphSchema }),
	explain_compatibility_verdict: output({ ...decisionProperties, factors: { type: 'array', items: factorSchema }, evidence: evidenceBundleSchema, airgraph: airGraphSchema }),
	find_compatible_alternatives: output({ ...decisionProperties, current: evaluationSchema, alternatives: { type: 'array', items: alternativeSchema } }),
	compare_complete_systems: output({ systems: { type: 'array', items: strict({ configuration_id: string, compressor: productSummarySchema, tools: { type: 'array', items: productSummarySchema }, mode: { type: 'string', enum: ['simultaneous', 'successive'] }, evaluation: evaluationSchema, overall_system_verdict: scopedVerdictSchema, air_supply_verdict: scopedVerdictSchema, compatibility_receipt: receiptSchema }, ['configuration_id', 'compressor', 'tools', 'mode', 'evaluation', 'overall_system_verdict', 'air_supply_verdict', 'compatibility_receipt']) } }),
	get_compatibility_evidence: output({ ...decisionProperties, factors: { type: 'array', items: factorSchema }, evidence: evidenceBundleSchema, airgraph: airGraphSchema }),
	search_knowledge: output({ items: { type: 'array', items: knowledgeSchema }, nextCursor: string }),
	get_current_offers: output({ offerSnapshotVersion: string, offers: { type: 'array', items: offerSchema }, nextCursor: string }),
	get_changefeed: output({ changes: { type: 'array', items: changeSchema }, nextCursor: string }),
	evaluate_air_compatibility: output({
		...decisionProperties,
		ucp: strict({ version: string, capabilities: { type: 'object', additionalProperties: { type: 'array', items: strict({ version: string }, ['version']) } } }, ['version', 'capabilities']),
		capability: string, capability_version: string, intent: string,
		security: strict({ access: { const: 'anonymous_read_only' }, accepts_pii: { const: false }, accepts_payment: { const: false }, mutates_commerce_state: { const: false } }, ['access', 'accepts_pii', 'accepts_payment', 'mutates_commerce_state']),
		mandatory_accessories: strict({ hoses: { type: 'array', items: requirementSchema }, connectors: { type: 'array', items: requirementSchema }, filtration: { type: 'array', items: requirementSchema }, lubrication: { type: 'array', items: requirementSchema } }, ['hoses', 'connectors', 'filtration', 'lubrication']),
		limits: stringArray, alternatives: { type: 'array', items: alternativeSchema }, complete_configuration: componentsSchema, configuration_id: string, airgraph: airGraphSchema,
		attribution: strict({ provider: { const: 'CompatAir' }, canonical_url: uri, method_version: string }, ['provider', 'canonical_url', 'method_version']),
		evidence_urls: uriArray, proof_urls: uriArray,
		commercial_constraints: strict({ requested: strict({ max_total_minor: number, currency: { const: 'EUR' }, minimum_merchants: number, country: { const: 'FR' } }), verified: { type: 'boolean' }, verdict: scopedVerdictSchema, offer_snapshot_version: nullableString, covered_products: stringArray, merchant_count: { type: 'integer' }, minimum_total_minor: nullableNumber, currency: { const: 'EUR' } }, ['requested', 'verified', 'verdict', 'offer_snapshot_version', 'covered_products', 'merchant_count', 'minimum_total_minor', 'currency']),
	}),
};

export const CORE_TOOL_NAMES = ['identify_product', 'evaluate_air_compatibility', 'build_complete_air_system', 'find_compatible_alternatives', 'get_compatibility_evidence', 'search_knowledge', 'get_current_offers', 'get_changefeed'];
export const LEGACY_SUCCESSORS = {
	search_tools: 'identify_product', get_tool_requirements: 'identify_product', search_compressors: 'identify_product', get_compressor_specs: 'identify_product',
	size_compressor: 'build_complete_air_system', check_compatibility: 'evaluate_air_compatibility', compare_compressors: 'compare_complete_systems',
	find_accessories: 'build_complete_air_system', find_offers: 'get_current_offers',
};

export { PUBLIC_VERDICTS, VERDICT_SCOPES, outputSchemas, scopedVerdictSchema, receiptSchema, airGraphSchema, componentsSchema, alternativeSchema };
