import { z } from 'zod';
import type { PassportConfiguration, PassportReport } from './passport';

export const COMMISSIONING_VERSION = '1.0.0' as const;

export const commissioningRecordSchema = z.object({
	version: z.literal(COMMISSIONING_VERSION),
	observedOn: z.iso.date(),
	sourcePressureBar: z.number().positive().max(50).optional(),
	toolPressureBar: z.number().positive().max(50).optional(),
	measuredLeakLpm: z.number().nonnegative().max(10_000).optional(),
	hoseLengthMeters: z.number().nonnegative().max(500).optional(),
	hoseInnerDiameterMm: z.number().positive().max(100).optional(),
	networkDistanceMeters: z.number().nonnegative().max(2_000).optional(),
	fittingStandard: z.enum(['unknown', 'euro-7.2', 'iso-6150-b', 'other']).default('unknown'),
	fittingCount: z.number().int().nonnegative().max(200).optional(),
	filtration: z.enum(['unknown', 'none', 'particle', 'water-separator', 'coalescing', 'dryer']).default('unknown'),
	siteLocationChecked: z.boolean().default(false),
	manufacturerInstructionsLocated: z.boolean().default(false),
	representativeUseObserved: z.boolean().default(false),
	note: z.string().trim().max(600).optional(),
}).superRefine((value, context) => {
	if (value.sourcePressureBar !== undefined && value.toolPressureBar !== undefined && value.toolPressureBar > value.sourcePressureBar) {
		context.addIssue({
			code: 'custom',
			message: 'La pression mesurée au poste ne peut pas dépasser la pression mesurée à la source dans cette recette.',
			path: ['toolPressureBar'],
		});
	}
});

export type CommissioningRecord = z.infer<typeof commissioningRecordSchema>;
export type CommissioningVerdict = 'ready' | 'ready_with_reserve' | 'correction_required' | 'insufficient_data';

export type CommissioningCheck = {
	id: string;
	label: string;
	completed: boolean;
	value: string;
	action: string;
};

export type CommissioningGuide = {
	path: string;
	label: string;
};

export type CommissioningAssessment = {
	version: typeof COMMISSIONING_VERSION;
	verdict: CommissioningVerdict;
	primaryFinding: string;
	checks: CommissioningCheck[];
	counts: { completed: number; total: number };
	actions: string[];
	guides: CommissioningGuide[];
	comparison: {
		requiredToolPressureBar?: number;
		sourcePressureBar?: number;
		toolPressureBar?: number;
		pressureDropBar?: number;
		recommendedFadLpm: number;
		availableFadLpm?: number;
		measuredLeakLpm?: number;
		nominalMarginPercent?: number;
	};
};

function format(value: number, digits = 1) {
	return value.toLocaleString('fr-FR', { maximumFractionDigits: digits });
}

function pressureDrop(record: CommissioningRecord) {
	if (record.sourcePressureBar === undefined || record.toolPressureBar === undefined) return undefined;
	return Math.round((record.sourcePressureBar - record.toolPressureBar) * 1_000) / 1_000;
}

function fittingLabel(value: CommissioningRecord['fittingStandard']) {
	if (value === 'euro-7.2') return 'Euro 7,2 mm';
	if (value === 'iso-6150-b') return 'ISO 6150-B';
	if (value === 'other') return 'autre standard';
	return 'non identifié';
}

function filtrationLabel(value: CommissioningRecord['filtration']) {
	if (value === 'none') return 'aucun traitement déclaré';
	if (value === 'particle') return 'filtration particulaire';
	if (value === 'water-separator') return 'séparateur d’eau';
	if (value === 'coalescing') return 'filtration coalescente';
	if (value === 'dryer') return 'sécheur';
	return 'non identifié';
}

export function configurationFromCommissioning(configuration: PassportConfiguration, input: unknown): PassportConfiguration {
	const commissioning = commissioningRecordSchema.parse(input);
	return {
		...configuration,
		hoseLengthMeters: commissioning.hoseLengthMeters,
		hoseInnerDiameterMm: commissioning.hoseInnerDiameterMm,
		networkDistanceMeters: commissioning.networkDistanceMeters,
		fittingStandard: commissioning.fittingStandard,
		fittingCount: commissioning.fittingCount,
		filtration: commissioning.filtration,
		supplyPressureBar: commissioning.sourcePressureBar,
		measuredPressureDropBar: pressureDrop(commissioning),
		measuredLeakLpm: commissioning.measuredLeakLpm,
		commissioning,
	};
}

function buildChecks(record: CommissioningRecord): CommissioningCheck[] {
	const drop = pressureDrop(record);
	return [
		{
			id: 'representative-use', label: 'Essai pendant un usage représentatif', completed: record.representativeUseObserved,
			value: record.representativeUseObserved ? 'Essai déclaré réalisé sous charge' : 'Essai sous charge non confirmé',
			action: 'Faire fonctionner l’outil dans une séquence représentative avant de conclure sur la pression disponible.',
		},
		{
			id: 'loaded-pressure', label: 'Pressions mesurées en charge', completed: drop !== undefined,
			value: drop === undefined ? 'Mesure source ou poste manquante' : `${format(record.sourcePressureBar!, 2)} bar à la source · ${format(record.toolPressureBar!, 2)} bar au poste · chute ${format(drop, 2)} bar`,
			action: 'Relever les deux pressions pendant le même essai et au même débit.',
		},
		{
			id: 'leak-flow', label: 'Fuite mesurée ou bornée', completed: record.measuredLeakLpm !== undefined,
			value: record.measuredLeakLpm === undefined ? 'Débit de fuite non renseigné' : `${format(record.measuredLeakLpm)} L/min ajoutés au besoin`,
			action: 'Mesurer ou borner les fuites ; ne pas les absorber dans une marge implicite.',
		},
		{
			id: 'installed-hose', label: 'Flexible installé', completed: record.hoseLengthMeters !== undefined && record.hoseInnerDiameterMm !== undefined,
			value: record.hoseLengthMeters === undefined || record.hoseInnerDiameterMm === undefined ? 'Longueur ou diamètre intérieur manquant' : `${format(record.hoseLengthMeters)} m · diamètre intérieur ${format(record.hoseInnerDiameterMm)} mm`,
			action: 'Mesurer la longueur utile et le diamètre intérieur, sans les déduire du diamètre extérieur.',
		},
		{
			id: 'network-distance', label: 'Trajet total jusqu’au poste', completed: record.networkDistanceMeters !== undefined,
			value: record.networkDistanceMeters === undefined ? 'Distance totale non renseignée' : `${format(record.networkDistanceMeters)} m`,
			action: 'Consigner le trajet réel, y compris les parties fixes et flexibles.',
		},
		{
			id: 'installed-fittings', label: 'Raccords et restrictions inventoriés', completed: record.fittingStandard !== 'unknown' && record.fittingCount !== undefined,
			value: record.fittingStandard === 'unknown' || record.fittingCount === undefined ? 'Standard ou nombre manquant' : `${record.fittingCount} élément${record.fittingCount > 1 ? 's' : ''} · ${fittingLabel(record.fittingStandard)}`,
			action: 'Compter les coupleurs, vannes, filtres, détendeurs et enrouleurs situés sur le trajet.',
		},
		{
			id: 'air-treatment', label: 'Traitement d’air identifié', completed: record.filtration !== 'unknown',
			value: record.filtration === 'unknown' ? 'Traitement non renseigné' : filtrationLabel(record.filtration),
			action: 'Identifier la chaîne réellement présente et la confronter aux exigences publiées de l’outil.',
		},
		{
			id: 'site-location', label: 'Implantation contrôlée avec la notice', completed: record.siteLocationChecked,
			value: record.siteLocationChecked ? 'Contrôle déclaré réalisé' : 'Contrôle non confirmé',
			action: 'Vérifier stabilité, ventilation, dégagements et accès selon la notice du modèle.',
		},
		{
			id: 'manufacturer-instructions', label: 'Consignes initiales retrouvées', completed: record.manufacturerInstructionsLocated,
			value: record.manufacturerInstructionsLocated ? 'Notice et premières échéances déclarées retrouvées' : 'Consignes propres au modèle non confirmées',
			action: 'Retrouver dans la notice les opérations initiales, la purge et la première échéance d’entretien.',
		},
	];
}

function uniqueGuides(guides: CommissioningGuide[]) {
	return [...new Map(guides.map((guide) => [guide.path, guide])).values()];
}

export function assessCommissioning(report: PassportReport, input: unknown): CommissioningAssessment {
	const record = commissioningRecordSchema.parse(input);
	const checks = buildChecks(record);
	const missingChecks = checks.filter((check) => !check.completed);
	const essentialComplete = record.representativeUseObserved
		&& record.sourcePressureBar !== undefined
		&& record.toolPressureBar !== undefined
		&& record.measuredLeakLpm !== undefined;
	let verdict: CommissioningVerdict;
	if (report.result.verdict === 'incompatible') verdict = 'correction_required';
	else if (report.result.verdict === 'insufficient_data' || !essentialComplete) verdict = 'insufficient_data';
	else if (
		report.result.verdict === 'intermittent'
		|| report.result.flowBasis === 'derived-average'
		|| report.compatAirMarginCovered !== true
		|| missingChecks.length > 0
	) verdict = 'ready_with_reserve';
	else verdict = 'ready';

	let primaryFinding: string;
	if (verdict === 'correction_required' && report.result.limitingFactor === 'pressure') {
		primaryFinding = `La pression mesurée au poste ne couvre pas les ${format(report.result.toolPressureBar ?? report.result.requiredPressureBar, 2)} bar demandés par l’outil.`;
	} else if (verdict === 'correction_required' && report.result.limitingFactor === 'duty_cycle') {
		primaryFinding = 'La capacité moyenne documentée de la machine ne couvre pas la demande observée avec son cycle de service.';
	} else if (verdict === 'correction_required') {
		primaryFinding = `Le débit disponible ne couvre pas les ${format(report.result.peakFlowLpm)} L/min incluant les fuites mesurées.`;
	} else if (verdict === 'insufficient_data') {
		primaryFinding = missingChecks[0]?.action ?? 'Les données constructeur disponibles ne permettent pas de conclure sur cette mise en service.';
	} else if (verdict === 'ready_with_reserve' && report.result.verdict === 'intermittent') {
		primaryFinding = 'L’usage peut seulement être soutenu par intermittence dans la configuration mesurée.';
	} else if (verdict === 'ready_with_reserve' && report.compatAirMarginCovered !== true) {
		primaryFinding = `Le besoin publié est couvert, mais la marge indicative de ${Math.round(report.configuration.safetyMargin * 100)} % ne l’est pas entièrement.`;
	} else if (verdict === 'ready_with_reserve') {
		primaryFinding = missingChecks[0]?.action ?? 'Le calcul est cohérent, mais le caractère instantané de l’usage reste à contrôler au poste.';
	} else {
		primaryFinding = 'Les mesures renseignées couvrent le besoin et la marge du scénario testé ; recommencer la recette si le réseau, les réglages ou les outils changent.';
	}

	const actions: string[] = [];
	if (verdict === 'correction_required' && report.result.limitingFactor === 'pressure') actions.push('Localiser la chute de pression par mesures successives avant de relever le réglage ou de remplacer la machine.');
	if (verdict === 'correction_required' && report.result.limitingFactor !== 'pressure') actions.push('Revenir au calculateur avec les mesures conservées et comparer une machine couvrant le débit et le cycle requis.');
	if (verdict === 'insufficient_data') actions.push(...missingChecks.slice(0, 3).map((check) => check.action));
	if (verdict === 'ready_with_reserve') {
		if (report.compatAirMarginCovered !== true) actions.push('Conserver la réserve de marge visible et éviter d’ajouter un outil ou une fuite sans refaire le calcul.');
		actions.push(...missingChecks.slice(0, 2).map((check) => check.action));
	}
	if (verdict === 'ready') actions.push('Conserver ce reçu avec la configuration mesurée et refaire les mêmes relevés après toute modification du réseau.');

	const guides: CommissioningGuide[] = [];
	if (report.result.limitingFactor === 'pressure' || !checks.find((check) => check.id === 'loaded-pressure')?.completed) guides.push({ path: '/guides/diagnostiquer-chute-pression-air-comprime/', label: 'Diagnostiquer la chute de pression' });
	if (!checks.find((check) => check.id === 'leak-flow')?.completed || (record.measuredLeakLpm ?? 0) > 0) guides.push({ path: '/guides/detecter-mesurer-fuites-air-comprime/', label: 'Mesurer et suivre les fuites' });
	if (!checks.find((check) => check.id === 'installed-hose')?.completed) guides.push({ path: '/guides/diametre-longueur-flexible-air-comprime/', label: 'Contrôler le flexible installé' });
	if (!record.manufacturerInstructionsLocated) guides.push({ path: '/guides/entretien-compresseur-purge-condensats/', label: 'Préparer purge et entretien' });

	return {
		version: COMMISSIONING_VERSION,
		verdict,
		primaryFinding,
		checks,
		counts: { completed: checks.length - missingChecks.length, total: checks.length },
		actions: [...new Set(actions)],
		guides: uniqueGuides(guides),
		comparison: {
			requiredToolPressureBar: report.result.toolPressureBar,
			sourcePressureBar: record.sourcePressureBar,
			toolPressureBar: record.toolPressureBar,
			pressureDropBar: pressureDrop(record),
			recommendedFadLpm: report.result.recommendedFadLpm,
			availableFadLpm: report.availableFadLpm,
			measuredLeakLpm: record.measuredLeakLpm,
			nominalMarginPercent: report.nominalMarginPercent,
		},
	};
}

export function commissioningVerdictLabel(verdict: CommissioningVerdict) {
	if (verdict === 'ready') return 'Recette cohérente pour le scénario testé';
	if (verdict === 'ready_with_reserve') return 'Recette avec réserve';
	if (verdict === 'correction_required') return 'Correction requise avant usage';
	return 'Recette impossible à conclure';
}
