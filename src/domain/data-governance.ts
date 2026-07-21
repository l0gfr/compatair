import type { Compressor, ToolProfile } from './catalog';
import { normalizeMpn, sourceRoleForEvidence } from './catalog-normalization';

type CatalogProduct = Compressor | ToolProfile;
type Evidence = CatalogProduct['evidence'][number];

export const DATA_FRESHNESS_SLA = [
	{ id: 'technical_catalog', label: 'Caractéristiques techniques', maximumAgeDays: 90, refreshTrigger: 'Nouvelle preuve, correction ou échéance de revue', breachBehavior: 'Statut stale ; aucun renouvellement implicite de la vérification' },
	{ id: 'merchant_identifiers', label: 'EAN/GTIN, MPN normalisés et SKU distributeur', maximumAgeDays: 90, refreshTrigger: 'Nouvel identifiant, conflit, retrait ou échéance de revue', breachBehavior: 'Identifiant conservé avec date ; appariement commercial non élargi sans preuve fraîche' },
	{ id: 'technical_evidence', label: 'Preuves techniques et provenance', maximumAgeDays: 90, refreshTrigger: 'Document modifié, indisponible, contradictoire ou échéance de revue', breachBehavior: 'Statut stale ; la source reste historisée et la lacune est publiée' },
	{ id: 'fixed_verdicts', label: 'Verdicts fixes audités', maximumAgeDays: 90, refreshTrigger: 'Toute modification du catalogue ou du moteur, plus échéance de revue', breachBehavior: 'Snapshot déclaré stale ou indisponible ; aucune décision de secours inventée' },
	{ id: 'editorial_knowledge', label: 'Guides et connaissances éditoriales', maximumAgeDays: 365, refreshTrigger: 'Correction, changement de source ou échéance de revue', breachBehavior: 'Statut stale ; date de publication conservée' },
	{ id: 'commercial_offers', label: 'Prix, disponibilité et offres', maximumAgeHours: 48, refreshTrigger: 'Nouvel import marchand', breachBehavior: 'Offre retirée des résultats actifs après 48 heures' },
	{ id: 'agent_benchmark', label: 'Benchmarks agentiques', maximumAgeDays: 90, refreshTrigger: 'Changement de contrat, de corpus ou échéance de revue', breachBehavior: 'Statut stale ; aucun score présenté comme courant' },
	{ id: 'compatibility_impact', label: 'Flux d’impact de compatibilité', maximumAgeDays: 90, refreshTrigger: 'Changement de preuve, catalogue ou verdict', breachBehavior: 'Statut stale ; aucun delta avant/après n’est inventé' },
] as const;

export function freshnessPolicy(id: typeof DATA_FRESHNESS_SLA[number]['id']) {
	return DATA_FRESHNESS_SLA.find((policy) => policy.id === id)!;
}

export function evaluateFreshness(input: {
	policy: typeof DATA_FRESHNESS_SLA[number];
	path: string;
	observedAt: string;
	evaluatedAt: string;
	available?: boolean;
}) {
	const observed = Date.parse(`${input.observedAt}T00:00:00Z`);
	const evaluated = Date.parse(`${input.evaluatedAt}T00:00:00Z`);
	if (!Number.isFinite(observed) || !Number.isFinite(evaluated) || observed > evaluated) throw new Error(`Dates de fraîcheur invalides pour ${input.policy.id}`);
	const ageHours = Math.floor((evaluated - observed) / 3_600_000);
	const maximumAgeHours = 'maximumAgeHours' in input.policy ? input.policy.maximumAgeHours : input.policy.maximumAgeDays * 24;
	return {
		id: input.policy.id,
		data_type: input.policy.label,
		path: input.path,
		observed_at: input.observedAt,
		age_hours: ageHours,
		service_level: 'maximum_review_age',
		...('maximumAgeHours' in input.policy ? { maximum_age_hours: input.policy.maximumAgeHours } : { maximum_age_days: input.policy.maximumAgeDays }),
		refresh_trigger: input.policy.refreshTrigger,
		breach_behavior: input.policy.breachBehavior,
		status: input.available === false ? 'unavailable' as const : ageHours <= maximumAgeHours ? 'current' as const : 'stale' as const,
	};
}

const percent = (count: number, total: number) => total ? Number((count / total * 100).toFixed(1)) : null;

type FieldDefinition = {
	id: string;
	label: string;
	population: 'all_products' | 'compressors' | 'tools' | 'fixed_flow_tools' | 'per_action_tools' | 'variable_volume_tools';
	products: CatalogProduct[];
	populated: (product: CatalogProduct) => boolean;
	evidenceIds: (product: CatalogProduct) => string[];
};

function fieldDefinition(
	id: string,
	label: string,
	population: FieldDefinition['population'],
	products: CatalogProduct[],
	populated: FieldDefinition['populated'],
	evidenceField = id,
): FieldDefinition {
	return { id, label, population, products, populated, evidenceIds: (product) => product.fieldSources[evidenceField] ?? [] };
}

function coverageRow(definition: FieldDefinition) {
	const populatedProducts = definition.products.filter(definition.populated);
	const sourced = populatedProducts.filter((product) => definition.evidenceIds(product).length > 0);
	const sourceRoleLinked = (role: ReturnType<typeof sourceRoleForEvidence>) => populatedProducts.filter((product) => {
		const evidenceIds = new Set(definition.evidenceIds(product));
		return product.evidence.some((evidence) => evidenceIds.has(evidence.id) && sourceRoleForEvidence(evidence) === role);
	});
	const primary = sourceRoleLinked('primary');
	const corroborated = sourceRoleLinked('independent_corroboration');
	return {
		field: definition.id,
		label: definition.label,
		population: definition.population,
		eligible_count: definition.products.length,
		populated_count: populatedProducts.length,
		population_coverage_percent: percent(populatedProducts.length, definition.products.length),
		explicitly_sourced_count: sourced.length,
		explicit_source_coverage_percent: percent(sourced.length, populatedProducts.length),
		primary_source_count: primary.length,
		primary_source_coverage_percent: percent(primary.length, populatedProducts.length),
		independently_corroborated_count: corroborated.length,
		independent_corroboration_coverage_percent: percent(corroborated.length, populatedProducts.length),
	};
}

export function createCatalogScope(compressors: Compressor[], tools: ToolProfile[]) {
	const fixedFlowTools = tools.filter((tool) => tool.demandModel === 'fixed-flow');
	const parametricTools = tools.filter((tool) => tool.demandModel !== 'fixed-flow');
	return {
		compressor_count: compressors.length,
		tool_count: tools.length,
		explorable_combination_count: compressors.length * tools.length,
		fixed_flow_tool_count: fixedFlowTools.length,
		fixed_verdict_count: compressors.length * fixedFlowTools.length,
		parametric_tool_count: parametricTools.length,
		parametric_combination_count: compressors.length * parametricTools.length,
		parametric_inputs: ['action_rate', 'volume_and_target_time'],
	};
}

export function createCatalogQualityReport(compressors: Compressor[], tools: ToolProfile[], observedAt: string) {
	const products: CatalogProduct[] = [...compressors, ...tools];
	const fixedFlowTools = tools.filter((tool) => tool.demandModel === 'fixed-flow');
	const perActionTools = tools.filter((tool) => tool.demandModel === 'per-action');
	const variableVolumeTools = tools.filter((tool) => tool.demandModel === 'variable-volume');
	const valuePresent = (field: string) => (product: CatalogProduct) => (product as Record<string, unknown>)[field] !== undefined;
	const definitions: FieldDefinition[] = [
		fieldDefinition('normalizedMpn', 'MPN normalisé', 'all_products', products, (product) => Boolean(product.mpn && normalizeMpn(product.mpn)), 'mpn'),
		fieldDefinition('ean', 'EAN', 'all_products', products, valuePresent('ean')),
		fieldDefinition('gtin', 'GTIN', 'all_products', products, valuePresent('gtin')),
		{ id: 'distributorSku', label: 'SKU distributeur', population: 'all_products', products, populated: (product) => product.distributorSkus.length > 0, evidenceIds: (product) => product.distributorSkus.flatMap((identifier) => identifier.evidenceIds) },
		fieldDefinition('tankLiters', 'Volume de cuve', 'compressors', compressors, valuePresent('tankLiters')),
		fieldDefinition('maxPressureBar', 'Pression maximale', 'compressors', compressors, valuePresent('maxPressureBar')),
		fieldDefinition('fadCurve', 'Courbe FAD', 'compressors', compressors, (product) => 'fadCurve' in product && product.fadCurve.length > 0),
		fieldDefinition('dutyCycle', 'Cycle de service', 'compressors', compressors, valuePresent('dutyCycle')),
		fieldDefinition('noiseDb', 'Niveau sonore', 'compressors', compressors, valuePresent('noiseDb')),
		fieldDefinition('powerKw', 'Puissance', 'compressors', compressors, valuePresent('powerKw')),
		fieldDefinition('weightKg', 'Poids', 'compressors', compressors, valuePresent('weightKg')),
		fieldDefinition('mobility', 'Mobilité', 'compressors', compressors, valuePresent('mobility')),
		fieldDefinition('voltage', 'Alimentation électrique', 'compressors', compressors, valuePresent('voltage')),
		fieldDefinition('phase', 'Phase électrique', 'compressors', compressors, valuePresent('phase')),
		fieldDefinition('workingPressureBar', 'Pression de travail', 'tools', tools, valuePresent('workingPressureBar')),
		fieldDefinition('airflowLpm', 'Débit outil fixe', 'fixed_flow_tools', fixedFlowTools, valuePresent('airflowLpm')),
		fieldDefinition('airPerActionLiters', 'Volume par action', 'per_action_tools', perActionTools, valuePresent('airPerActionLiters')),
		fieldDefinition('demandExplanation', 'Besoin à volume variable', 'variable_volume_tools', variableVolumeTools, valuePresent('demandExplanation')),
		fieldDefinition('connectorSize', 'Raccord', 'tools', tools, valuePresent('connectorSize')),
		fieldDefinition('usagePattern', 'Profil d’usage', 'tools', tools, valuePresent('usagePattern')),
		fieldDefinition('dutyFactor', 'Facteur d’utilisation', 'tools', tools, valuePresent('dutyFactor')),
		fieldDefinition('filtrationRequirement', 'Filtration requise', 'tools', tools, valuePresent('filtrationRequirement')),
		fieldDefinition('lubricationRequirement', 'Lubrification requise', 'tools', tools, valuePresent('lubricationRequirement')),
		fieldDefinition('recommendedHose', 'Flexible recommandé', 'tools', tools, valuePresent('recommendedHose')),
	];
	const evidenceById = new Map<string, Evidence>();
	for (const evidence of products.flatMap((product) => product.evidence)) evidenceById.set(evidence.id, evidence);
	const sourceRoleCounts = { primary: 0, independent_corroboration: 0, secondary: 0 };
	for (const evidence of evidenceById.values()) sourceRoleCounts[sourceRoleForEvidence(evidence)] += 1;
	return {
		schemaVersion: '1.0.0',
		observedAt,
		scope: createCatalogScope(compressors, tools),
		source_roles: {
			definitions: {
				primary: 'Document ou donnée émis par l’entité responsable du produit : fabricant ou notice constructeur.',
				independent_corroboration: 'Mesure documentée distincte du fabricant et du vendeur ; elle confirme ou contredit sans remplacer la source primaire.',
				secondary: 'Source marchande ou autre reprise secondaire ; elle ne vaut pas corroboration indépendante.',
			},
			document_counts: sourceRoleCounts,
		},
		field_coverage: definitions.map(coverageRow),
		limitations: [
			'La couverture de population mesure la présence du champ dans le corpus CompatAir, pas sa disponibilité sur l’ensemble du marché.',
			'La couverture de source explicite exige un lien fieldSources ou evidenceIds propre au champ ; la présence générale d’un document sur la fiche ne suffit pas.',
			'La corroboration indépendante est comptée séparément et n’augmente jamais artificiellement la couverture de source primaire.',
			'Un taux nul pour les SKU distributeur signifie qu’aucun identifiant n’a été publié avec une preuve suffisante ; aucune valeur n’est inventée.',
		],
	};
}
