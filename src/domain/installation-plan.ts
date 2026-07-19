import { z } from 'zod';
import type { PassportConfiguration } from './passport';
import type { SizingResult } from './sizing';

export const INSTALLATION_PLAN_VERSION = '1.0.0' as const;

export const installationPlanItemSchema = z.object({
	id: z.string().regex(/^[a-z0-9-]{1,160}$/),
	phase: z.enum(['before-purchase', 'before-commissioning']),
	status: z.enum(['source-confirmed', 'site-measurement', 'undocumented']),
	completed: z.boolean(),
	title: z.string().min(1).max(240),
	summary: z.string().min(1).max(2_000),
	action: z.string().min(1).max(2_000),
	sourceRefs: z.array(z.string().min(3).max(400)).max(100),
	guidePath: z.string().regex(/^\/[a-z0-9\-/]+\/$/).optional(),
	guideLabel: z.string().min(1).max(240).optional(),
});

export const installationPlanSchema = z.object({
	version: z.literal(INSTALLATION_PLAN_VERSION),
	primaryReserve: z.string().min(1).max(2_000),
	items: z.array(installationPlanItemSchema).min(1).max(60),
	counts: z.object({
		sourceConfirmed: z.number().int().nonnegative().max(60),
		siteMeasurements: z.number().int().nonnegative().max(60),
		siteCompleted: z.number().int().nonnegative().max(60),
		undocumented: z.number().int().nonnegative().max(60),
	}),
});

export type InstallationPlanItem = z.infer<typeof installationPlanItemSchema>;
export type InstallationPlan = z.infer<typeof installationPlanSchema>;

type InstallationEvidence = { id: string };
type InstallationProduct = { id: string; evidence: InstallationEvidence[]; fieldSources?: Record<string, string[]> };
type InstallationCompressor = InstallationProduct & {
	brand: string;
	model: string;
	voltage?: string;
	phase?: 'single-phase' | 'three-phase';
	powerKw?: number;
	noiseDb?: number;
};
type InstallationTool = InstallationProduct & {
	label: string;
	connectorSize?: string;
	filtrationRequirement?: string;
	lubricationRequirement?: string;
	recommendedHose?: { innerDiameterMm?: number; maximumLengthMeters?: number };
};

export type InstallationPlanInput = {
	configuration: PassportConfiguration;
	result: SizingResult;
	compressor?: InstallationCompressor;
	tools: InstallationTool[];
	availableFadLpm?: number;
	compatAirMarginCovered?: boolean;
};

function format(value: number, digits = 1) {
	return value.toLocaleString('fr-FR', { maximumFractionDigits: digits });
}

function sourceRefs(product: InstallationProduct | undefined, fields: string[]) {
	if (!product?.fieldSources) return [];
	const evidenceIds = new Set(product.evidence.map((evidence) => evidence.id));
	return [...new Set(fields.flatMap((field) => product.fieldSources?.[field] ?? []))]
		.filter((id) => evidenceIds.has(id))
		.map((id) => `${product.id}:${id}`);
}

function allProductsHaveSourcedField(products: InstallationProduct[], fields: string[]) {
	return products.length > 0 && products.every((product) => sourceRefs(product, fields).length > 0);
}

function hasSourcesForEveryField(product: InstallationProduct | undefined, fields: string[]) {
	return Boolean(product && fields.length && fields.every((field) => sourceRefs(product, [field]).length > 0));
}

function phaseLabel(phase: InstallationCompressor['phase']) {
	return phase === 'single-phase' ? 'monophasé' : phase === 'three-phase' ? 'triphasé' : undefined;
}

function primaryReserve(input: InstallationPlanInput) {
	const { configuration, result, availableFadLpm, compatAirMarginCovered } = input;
	if (!configuration.selectedCompressor) return 'Aucun compresseur n’est encore retenu : le plan décrit le besoin, mais pas une machine à installer.';
	if (result.verdict === 'incompatible' && result.limitingFactor === 'pressure') return `La pression disponible ne couvre pas les ${format(result.requiredPressureBar)} bar requis par la configuration.`;
	if (result.verdict === 'incompatible') return `Le débit disponible ne couvre pas les ${format(result.recommendedFadLpm)} L/min recommandés avec marge.`;
	if (result.verdict === 'insufficient_data' || availableFadLpm === undefined) return `Le débit restitué de la machine n’est pas documenté à ${format(result.requiredPressureBar)} bar : la compatibilité ne peut pas être confirmée.`;
	if (compatAirMarginCovered === false) return `La machine couvre le besoin publié, mais pas la marge indicative de ${Math.round(configuration.safetyMargin * 100)} %.`;
	if (configuration.measuredPressureDropBar === undefined) return 'La compatibilité est documentaire : la chute de pression réelle entre la machine et l’outil reste à mesurer en charge.';
	if (configuration.measuredLeakLpm === undefined) return 'La chute de pression est renseignée, mais le débit de fuite du réseau reste à mesurer.';
	return 'Les mesures principales sont renseignées ; le plan doit être revu si le réseau, le réglage ou les outils changent.';
}

function planCounts(items: InstallationPlanItem[]) {
	return {
		sourceConfirmed: items.filter((item) => item.status === 'source-confirmed').length,
		siteMeasurements: items.filter((item) => item.status === 'site-measurement').length,
		siteCompleted: items.filter((item) => item.status === 'site-measurement' && item.completed).length,
		undocumented: items.filter((item) => item.status === 'undocumented').length,
	};
}

export function createInstallationPlan(input: InstallationPlanInput): InstallationPlan {
	const { configuration, result, compressor, tools, availableFadLpm, compatAirMarginCovered } = input;
	const capacitySources = sourceRefs(compressor, ['fadCurve', 'maxPressureBar']);
	const electricalSources = sourceRefs(compressor, ['voltage', 'phase', 'powerKw']);
	const electricalFields = compressor ? [compressor.voltage ? 'voltage' : undefined, compressor.phase ? 'phase' : undefined, compressor.powerKw !== undefined ? 'powerKw' : undefined].filter((field): field is string => Boolean(field)) : [];
	const noiseSources = sourceRefs(compressor, ['noiseDb']);
	const selectedCompressorIsCatalog = Boolean(compressor && configuration.selectedCompressor !== 'custom');
	const toolHoseSources = tools.flatMap((tool) => sourceRefs(tool, ['recommendedHose']));
	const toolConnectorSources = tools.flatMap((tool) => sourceRefs(tool, ['connectorSize']));
	const toolTreatmentSources = tools.flatMap((tool) => sourceRefs(tool, ['filtrationRequirement', 'lubricationRequirement']));
	const hoseRequirements = tools.filter((tool) => tool.recommendedHose).map((tool) => {
		const diameter = tool.recommendedHose?.innerDiameterMm;
		const maximumLength = tool.recommendedHose?.maximumLengthMeters;
		return `${tool.label} : ${diameter !== undefined ? `diamètre intérieur ${format(diameter)} mm` : 'diamètre non publié'}${maximumLength !== undefined ? `, longueur maximale ${format(maximumLength)} m` : ''}`;
	});
	const connectorRequirements = tools.filter((tool) => tool.connectorSize).map((tool) => `${tool.label} : ${tool.connectorSize}`);
	const treatmentRequirements = tools.flatMap((tool) => [
		...(tool.filtrationRequirement ? [`${tool.label} : ${tool.filtrationRequirement}`] : []),
		...(tool.lubricationRequirement ? [`${tool.label} : ${tool.lubricationRequirement}`] : []),
	]);

	const items: InstallationPlanItem[] = [
		{
			id: 'capacity-at-working-pressure', phase: 'before-purchase',
			status: selectedCompressorIsCatalog && availableFadLpm !== undefined && hasSourcesForEveryField(compressor, ['fadCurve', 'maxPressureBar']) ? 'source-confirmed' : 'undocumented',
			completed: selectedCompressorIsCatalog && availableFadLpm !== undefined && hasSourcesForEveryField(compressor, ['fadCurve', 'maxPressureBar']),
			title: 'Débit et pression au point de travail',
			summary: availableFadLpm === undefined
				? `Besoin publié : ${format(result.recommendedFadLpm)} L/min à ${format(result.requiredPressureBar)} bar. Aucun FAD exploitable de la machine n’est disponible à ce point.`
				: `${format(availableFadLpm)} L/min documentés pour ${format(result.recommendedFadLpm)} L/min recommandés à ${format(result.requiredPressureBar)} bar.`,
			action: compatAirMarginCovered === true
				? 'Conserver ce point de comparaison dans le dossier d’achat ; il ne couvre pas encore les pertes réelles du réseau.'
				: 'Ne pas valider l’achat sur le débit aspiré. Exiger un débit restitué documenté au point de pression utile.',
			sourceRefs: capacitySources,
		},
		{
			id: 'electrical-supply', phase: 'before-purchase',
			status: electricalFields.length && hasSourcesForEveryField(compressor, electricalFields) ? 'source-confirmed' : 'undocumented',
			completed: electricalFields.length > 0 && hasSourcesForEveryField(compressor, electricalFields),
			title: 'Alimentation électrique de la machine',
			summary: compressor && (compressor.voltage || compressor.phase || compressor.powerKw)
				? [compressor.voltage, phaseLabel(compressor.phase), compressor.powerKw !== undefined ? `${format(compressor.powerKw)} kW` : undefined].filter(Boolean).join(' · ')
				: 'Tension, phase et puissance électrique non documentées dans le catalogue d’exécution.',
			action: 'Faire confirmer le circuit, les protections et le raccordement par la notice du modèle et un professionnel qualifié avant installation.',
			sourceRefs: electricalSources,
		},
		{
			id: 'published-hose-requirements', phase: 'before-purchase',
			status: hoseRequirements.length === tools.length && allProductsHaveSourcedField(tools, ['recommendedHose']) ? 'source-confirmed' : 'undocumented',
			completed: hoseRequirements.length === tools.length && allProductsHaveSourcedField(tools, ['recommendedHose']),
			title: 'Exigences publiées pour les flexibles',
			summary: hoseRequirements.length ? hoseRequirements.join(' · ') : 'Aucun diamètre ni aucune longueur de flexible n’est publié pour les outils sélectionnés.',
			action: hoseRequirements.length === tools.length
				? 'Comparer ces exigences au diamètre intérieur et à la longueur réellement installés.'
				: 'Ne pas déduire un diamètre de flexible du seul débit. Obtenir la notice ou mesurer la perte en charge.',
			sourceRefs: [...new Set(toolHoseSources)],
			guidePath: '/guides/diametre-longueur-flexible-air-comprime/',
			guideLabel: 'Comprendre le contrôle du flexible',
		},
		{
			id: 'published-connectors', phase: 'before-purchase',
			status: connectorRequirements.length === tools.length && allProductsHaveSourcedField(tools, ['connectorSize']) ? 'source-confirmed' : 'undocumented',
			completed: connectorRequirements.length === tools.length && allProductsHaveSourcedField(tools, ['connectorSize']),
			title: 'Raccordement publié des outils',
			summary: connectorRequirements.length ? connectorRequirements.join(' · ') : 'Le raccordement des outils sélectionnés n’est pas documenté.',
			action: 'Vérifier le filetage et le passage interne de chaque coupleur ; une dimension de filetage ne décrit pas à elle seule la restriction.',
			sourceRefs: [...new Set(toolConnectorSources)],
			guidePath: '/guides/flexible-enrouleur-raccords-garage-debit/',
			guideLabel: 'Contrôler flexibles et raccords',
		},
		{
			id: 'published-air-treatment', phase: 'before-purchase',
			status: tools.length > 0 && tools.every((tool) => Boolean(tool.filtrationRequirement || tool.lubricationRequirement)) && allProductsHaveSourcedField(tools, ['filtrationRequirement', 'lubricationRequirement']) ? 'source-confirmed' : 'undocumented',
			completed: tools.length > 0 && tools.every((tool) => Boolean(tool.filtrationRequirement || tool.lubricationRequirement)) && allProductsHaveSourcedField(tools, ['filtrationRequirement', 'lubricationRequirement']),
			title: 'Traitement d’air demandé par les outils',
			summary: treatmentRequirements.length ? treatmentRequirements.join(' · ') : 'Aucune exigence structurée de filtration, séchage ou lubrification n’est disponible pour les outils sélectionnés.',
			action: 'Ne pas choisir un filtre ou un sécheur par défaut : vérifier les exigences propres à chaque usage et leur compatibilité entre branches.',
			sourceRefs: [...new Set(toolTreatmentSources)],
			guidePath: '/guides/point-rosee-secheur-filtre-air-comprime/',
			guideLabel: 'Choisir le traitement d’air',
		},
		{
			id: 'published-noise', phase: 'before-purchase',
			status: compressor?.noiseDb !== undefined && noiseSources.length ? 'source-confirmed' : 'undocumented',
			completed: compressor?.noiseDb !== undefined && noiseSources.length > 0,
			title: 'Niveau sonore publié',
			summary: compressor?.noiseDb !== undefined ? `${format(compressor.noiseDb)} dB(A) publiés ; la nature exacte de l’indicateur reste celle de la source du modèle.` : 'Aucun niveau sonore structuré n’est disponible pour la machine retenue.',
			action: 'Comparer la donnée publiée aux conditions réelles d’implantation ; elle ne prédit pas seule l’exposition au poste.',
			sourceRefs: noiseSources,
		},
		{
			id: 'site-location', phase: 'before-purchase', status: 'site-measurement', completed: configuration.commissioning?.siteLocationChecked ?? false,
			title: 'Emplacement, ventilation et accès',
			summary: configuration.commissioning?.siteLocationChecked
				? `Contrôle avec la notice déclaré réalisé le ${configuration.commissioning.observedOn}.`
				: 'Les dégagements, la ventilation, la stabilité du support et l’accès pour l’entretien dépendent du site réel.',
			action: 'Contrôler le local avec la notice de la référence retenue avant de fixer la machine ou de commander le raccordement.',
			sourceRefs: [],
		},
		{
			id: 'installed-hose', phase: 'before-commissioning', status: 'site-measurement',
			completed: configuration.hoseLengthMeters !== undefined && configuration.hoseInnerDiameterMm !== undefined,
			title: 'Flexible réellement installé',
			summary: configuration.hoseLengthMeters !== undefined && configuration.hoseInnerDiameterMm !== undefined
				? `${format(configuration.hoseLengthMeters)} m et ${format(configuration.hoseInnerDiameterMm)} mm de diamètre intérieur déclarés.`
				: 'Longueur et diamètre intérieur ne sont pas tous les deux renseignés.',
			action: 'Mesurer le diamètre intérieur et la longueur utile, puis confronter le montage aux exigences publiées sans estimer silencieusement la perte de charge.',
			sourceRefs: [],
			guidePath: '/guides/installer-reseau-air-comprime-atelier/',
			guideLabel: 'Préparer le réseau de l’atelier',
		},
		{
			id: 'installed-fittings', phase: 'before-commissioning', status: 'site-measurement',
			completed: configuration.fittingStandard !== 'unknown' && configuration.fittingCount !== undefined,
			title: 'Inventaire des raccords et restrictions',
			summary: configuration.fittingStandard !== 'unknown' && configuration.fittingCount !== undefined
				? `${configuration.fittingCount} raccord${configuration.fittingCount > 1 ? 's' : ''} déclarés · standard ${configuration.fittingStandard}.`
				: 'Le standard et le nombre de raccords ne sont pas entièrement renseignés.',
			action: 'Compter coupleurs, enrouleurs, vannes, filtres et détendeurs entre la machine et le poste ; relever les passages internes si une restriction est suspectée.',
			sourceRefs: [],
		},
		{
			id: 'installed-air-treatment', phase: 'before-commissioning', status: 'site-measurement',
			completed: configuration.filtration !== 'unknown',
			title: 'Chaîne de traitement installée',
			summary: configuration.filtration === 'unknown' ? 'La filtration ou le séchage réellement présent n’est pas renseigné.' : `Traitement déclaré : ${configuration.filtration}.`,
			action: 'Vérifier que la chaîne installée répond aux exigences documentées de chaque outil et ne crée pas une restriction incompatible avec le débit.',
			sourceRefs: [],
		},
		{
			id: 'loaded-pressure-test', phase: 'before-commissioning', status: 'site-measurement',
			completed: configuration.supplyPressureBar !== undefined && configuration.measuredPressureDropBar !== undefined,
			title: 'Pression mesurée en charge au poste',
			summary: configuration.supplyPressureBar !== undefined && configuration.measuredPressureDropBar !== undefined
				? `${format(configuration.supplyPressureBar, 2)} bar disponibles et ${format(configuration.measuredPressureDropBar, 2)} bar de chute déclarée.`
				: 'La pression disponible et la chute entre la machine et l’outil ne sont pas toutes les deux mesurées.',
			action: `Mesurer pendant l’usage représentatif, au raccord de l’outil, puis comparer aux ${format(result.requiredPressureBar)} bar retenus par le calcul.`,
			sourceRefs: [],
			guidePath: '/guides/diagnostiquer-chute-pression-air-comprime/',
			guideLabel: 'Diagnostiquer une chute de pression',
		},
		{
			id: 'leak-test', phase: 'before-commissioning', status: 'site-measurement',
			completed: configuration.measuredLeakLpm !== undefined,
			title: 'Débit de fuite du réseau',
			summary: configuration.measuredLeakLpm === undefined ? 'Le débit de fuite n’est pas mesuré.' : `${format(configuration.measuredLeakLpm)} L/min de fuite déclarés et intégrés au besoin.`,
			action: 'Mesurer ou borner les fuites avant la réception ; une fuite connue doit être ajoutée au besoin et non masquée par une hausse de pression.',
			sourceRefs: [],
			guidePath: '/guides/detecter-mesurer-fuites-air-comprime/',
			guideLabel: 'Mesurer les fuites',
		},
		{
			id: 'maintenance-baseline', phase: 'before-commissioning', status: 'undocumented', completed: configuration.commissioning?.manufacturerInstructionsLocated ?? false,
			title: 'Purge et maintenance initiales',
			summary: configuration.commissioning?.manufacturerInstructionsLocated
				? `La notice et les premières échéances ont été déclarées retrouvées lors de la recette du ${configuration.commissioning.observedOn}. Leur contenu reste celui du constructeur.`
				: 'Le calendrier de purge, les consommables et les opérations propres au modèle ne sont pas structurés dans ce Passeport.',
			action: 'Reprendre exclusivement la notice de la référence et consigner la première échéance avant la mise en service.',
			sourceRefs: [],
			guidePath: '/guides/entretien-compresseur-purge-condensats/',
			guideLabel: 'Préparer purge et entretien',
		},
	];

	return installationPlanSchema.parse({ version: INSTALLATION_PLAN_VERSION, primaryReserve: primaryReserve(input), items, counts: planCounts(items) });
}
