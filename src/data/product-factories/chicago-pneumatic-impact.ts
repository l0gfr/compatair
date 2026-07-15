import { litersPerSecondToLitersPerMinute } from '../../domain/units.ts';

const catalogUrl = 'https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_general-industry/cp-general-industry-ENG.pdf';
const catalogEvidenceId = 'cp-general-industry-2026-impact-wrenches';

type ImpactWrenchData = {
	id: string;
	model: string;
	mpn: string;
	sourceUrl: string;
	catalogPage: number;
	drive: '3/8 pouce' | '1/2 pouce';
	impactMechanism: string;
	blowsPerMinute: number;
	freeSpeedRpm: number;
	workingTorqueNm: { min: number; max: number };
	maxReverseTorqueNm: number;
	weightKg: number;
	lengthMm: number;
	airLitersPerSecond: number;
	vibration: number;
	vibrationUncertainty: number;
	soundPressureDb: number;
	soundPowerDb: number;
	sourceDiscrepancy?: string;
};

export function chicagoPneumaticImpactWrench(data: ImpactWrenchData) {
	const evidenceId = `cp-${data.mpn.toLowerCase()}-official`;
	const airflowLpm = litersPerSecondToLitersPerMinute(data.airLitersPerSecond);
	const slug = `cle-a-chocs-${data.id}`;

	return {
		id: data.id,
		slug,
		categoryId: 'cle-a-chocs',
		category: 'Clé à chocs',
		label: `Clé à chocs pneumatique Chicago Pneumatic ${data.model} ${data.drive}`,
		brand: 'Chicago Pneumatic',
		model: data.model,
		mpn: data.mpn,
		variant: {
			familyId: `chicago-pneumatic-${data.model.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
			label: `${data.drive}, ${data.maxReverseTorqueNm} Nm maximum en marche arrière`,
			distinguishingAttributes: {
				carré: data.drive,
				couple: `${data.maxReverseTorqueNm} Nm`,
				mécanisme: data.impactMechanism,
			},
		},
		demandModel: 'fixed-flow',
		workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 },
		airflowLpm: { min: airflowLpm, typical: airflowLpm, max: airflowLpm },
		connectorSize: 'Entrée 1/4 pouce ; flexible intérieur 10 mm recommandé sur 5 m',
		usagePattern: 'burst',
		recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 },
		confidence: 'A',
		image: {
			src: `/images/products/${data.id}.webp`,
			alt: `Clé à chocs Chicago Pneumatic ${data.model}`,
			sourceUrl: catalogUrl,
			sourceLabel: `Visuel officiel Chicago Pneumatic ${data.model}, catalogue General Industry 2026`,
		},
		editorial: {
			overview: `La Chicago Pneumatic ${data.model} est une clé à chocs ${data.drive} fonctionnant à 6,3 bar. Sa consommation en charge publiée de ${String(data.airLitersPerSecond).replace('.', ',')} L/s correspond à ${airflowLpm} L/min pour le calcul de compatibilité.`,
			verifiedFacts: [
				`Le couple de travail s’étend de ${data.workingTorqueNm.min} à ${data.workingTorqueNm.max} Nm et le couple maximal en marche arrière atteint ${data.maxReverseTorqueNm} Nm.`,
				`La fiche constructeur publie ${data.freeSpeedRpm.toLocaleString('fr-FR')} tr/min, ${data.blowsPerMinute.toLocaleString('fr-FR')} coups/min, ${data.lengthMm} mm et ${String(data.weightKg).replace('.', ',')} kg.`,
			],
			limitations: [
				'La consommation en charge est conservée comme besoin instantané ; aucune réduction arbitraire liée au cycle d’usage n’est appliquée.',
				'Le couple maximal en marche arrière ne constitue pas un couple de serrage contrôlé.',
				...(data.sourceDiscrepancy ? [data.sourceDiscrepancy] : []),
			],
		},
		specifications: [
			{ label: 'Pression dynamique de service', value: '6,3 bar', evidenceIds: [evidenceId, catalogEvidenceId] },
			{ label: 'Consommation en charge', value: `${String(data.airLitersPerSecond).replace('.', ',')} L/s (${airflowLpm} L/min)`, evidenceIds: [catalogEvidenceId] },
			{ label: 'Carré d’entraînement', value: data.drive, evidenceIds: [evidenceId, catalogEvidenceId] },
			{ label: 'Mécanisme de frappe', value: data.impactMechanism, evidenceIds: [evidenceId, catalogEvidenceId] },
			{ label: 'Cadence de frappe', value: `${data.blowsPerMinute.toLocaleString('fr-FR')} coups/min`, evidenceIds: [evidenceId, catalogEvidenceId] },
			{ label: 'Vitesse à vide', value: `${data.freeSpeedRpm.toLocaleString('fr-FR')} tr/min`, evidenceIds: [evidenceId] },
			{ label: 'Plage de couple de travail', value: `${data.workingTorqueNm.min} à ${data.workingTorqueNm.max} Nm`, evidenceIds: [evidenceId, catalogEvidenceId] },
			{ label: 'Couple maximal en marche arrière', value: `${data.maxReverseTorqueNm} Nm`, evidenceIds: [evidenceId, catalogEvidenceId] },
			{ label: 'Entrée d’air', value: '1/4 pouce', evidenceIds: [evidenceId, catalogEvidenceId] },
			{ label: 'Flexible recommandé', value: '10 mm de diamètre intérieur sur 5 m', evidenceIds: [evidenceId, catalogEvidenceId] },
			{ label: 'Longueur', value: `${data.lengthMm} mm`, evidenceIds: [evidenceId, catalogEvidenceId] },
			{ label: 'Poids net', value: `${String(data.weightKg).replace('.', ',')} kg`, evidenceIds: [evidenceId, catalogEvidenceId] },
			{ label: 'Vibrations ISO 28927', value: `${String(data.vibration).replace('.', ',')} m/s² ; incertitude K ${String(data.vibrationUncertainty).replace('.', ',')} m/s²`, evidenceIds: [evidenceId, catalogEvidenceId] },
			{ label: 'Pression acoustique ISO 15744', value: `${String(data.soundPressureDb).replace('.', ',')} dB(A)`, evidenceIds: [evidenceId, catalogEvidenceId] },
			{ label: 'Puissance acoustique ISO 15744', value: `${String(data.soundPowerDb).replace('.', ',')} dB(A)`, evidenceIds: [evidenceId, catalogEvidenceId] },
		],
		evidence: [
			{
				id: evidenceId,
				sourceUrl: data.sourceUrl,
				sourceLabel: `Chicago Pneumatic, fiche officielle ${data.model}`,
				sourceType: 'manufacturer',
				retrievedAt: '2026-07-15',
				confidence: 'A',
				notes: 'Fiche produit constructeur utilisée pour l’identifiant, le couple, la pression, les dimensions et les caractéristiques de fonctionnement.',
			},
			{
				id: catalogEvidenceId,
				sourceUrl: catalogUrl,
				sourceLabel: 'Chicago Pneumatic, catalogue General Industry v4.04.2026, clés à chocs',
				sourceType: 'manufacturer',
				retrievedAt: '2026-07-15',
				confidence: 'A',
				notes: 'Les caractéristiques sont publiées à 90 psi, soit 6,3 bar ; consommation en charge lue dans la colonne métrique L/s.',
			},
		],
		fieldSources: {
			model: [evidenceId, catalogEvidenceId],
			mpn: [evidenceId, catalogEvidenceId],
			workingPressureBar: [evidenceId, catalogEvidenceId],
			airflowLpm: [catalogEvidenceId],
			connectorSize: [evidenceId, catalogEvidenceId],
			recommendedHose: [evidenceId, catalogEvidenceId],
			specifications: [evidenceId, catalogEvidenceId],
		},
			notes: [
			`Conversion exacte : ${String(data.airLitersPerSecond).replace('.', ',')} L/s × 60 = ${airflowLpm} L/min.`,
			`Tableau constructeur vérifié page ${data.catalogPage} du catalogue General Industry 2026.`,
			...(data.sourceDiscrepancy ? [data.sourceDiscrepancy] : []),
		],
	};
}
