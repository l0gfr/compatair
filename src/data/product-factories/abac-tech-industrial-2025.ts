const abacCatalogUrl = 'https://www.abacaircompressors.com/content/dam/brands/ABAC/products/leaflet/fra/ABAC_catalogue_2025_FRA.pdf.coredownload.pdf';
const pressureSourceUrl = 'https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/produkte/2023-09_SD-Industrial-Tech_FINAL_SCREEN.pdf';
const pressureEvidenceId = 'schneider-industrial-tech-2023-atl-atf-flow-pressure';

type CompressorData = {
	model: string;
	mpn: string;
	series: 'ATL' | 'ATF';
	configuration: 'PP' | 'BM';
	airflowLpm: number;
	powerKw: number;
	horsepower: number;
	noiseDb: number;
	enclosedNoiseDb: number;
	weightKg: number;
	dimensionsMm: string;
	startMethod: 'DOL' | 'YD';
};

const compressors = {
	'abac-atl-2-10-pp': { model: 'ATL 2 10 PP', mpn: '4116002326', series: 'ATL', configuration: 'PP', airflowLpm: 204, powerKw: 1.5, horsepower: 2, noiseDb: 78, enclosedNoiseDb: 63, weightKg: 50, dimensionsMm: '646 × 530 × 547', startMethod: 'DOL' },
	'abac-atl-3-10-pp': { model: 'ATL 3 10 PP', mpn: '4116002343', series: 'ATL', configuration: 'PP', airflowLpm: 264, powerKw: 2.2, horsepower: 3, noiseDb: 79, enclosedNoiseDb: 64, weightKg: 52, dimensionsMm: '704 × 530 × 547', startMethod: 'DOL' },
	'abac-atl-5-5-10-pp': { model: 'ATL 5.5 10 PP', mpn: '4116002360', series: 'ATL', configuration: 'PP', airflowLpm: 504, powerKw: 4, horsepower: 5.5, noiseDb: 79, enclosedNoiseDb: 64, weightKg: 66, dimensionsMm: '704 × 530 × 547', startMethod: 'DOL' },
	'abac-atl-7-5-10-pp': { model: 'ATL 7.5 10 PP', mpn: '4116002389', series: 'ATL', configuration: 'PP', airflowLpm: 702, powerKw: 5.5, horsepower: 7.5, noiseDb: 80, enclosedNoiseDb: 68, weightKg: 103, dimensionsMm: '830 × 591 × 625', startMethod: 'DOL' },
	'abac-atl-10-10-pp': { model: 'ATL 10 10 PP', mpn: '4116002402', series: 'ATL', configuration: 'PP', airflowLpm: 942, powerKw: 7.5, horsepower: 10, noiseDb: 81, enclosedNoiseDb: 69, weightKg: 110, dimensionsMm: '868 × 591 × 625', startMethod: 'YD' },
	'abac-atl-2-10-bm': { model: 'ATL 2 10 BM', mpn: '4116002322', series: 'ATL', configuration: 'BM', airflowLpm: 204, powerKw: 1.5, horsepower: 2, noiseDb: 78, enclosedNoiseDb: 63, weightKg: 65, dimensionsMm: '646 × 700 × 682', startMethod: 'DOL' },
	'abac-atl-3-10-bm': { model: 'ATL 3 10 BM', mpn: '4116002353', series: 'ATL', configuration: 'BM', airflowLpm: 264, powerKw: 2.2, horsepower: 3, noiseDb: 79, enclosedNoiseDb: 64, weightKg: 80, dimensionsMm: '704 × 700 × 682', startMethod: 'DOL' },
	'abac-atl-5-5-10-bm': { model: 'ATL 5.5 10 BM', mpn: '4116002375', series: 'ATL', configuration: 'BM', airflowLpm: 504, powerKw: 4, horsepower: 5.5, noiseDb: 79, enclosedNoiseDb: 64, weightKg: 82, dimensionsMm: '704 × 700 × 682', startMethod: 'YD' },
	'abac-atl-7-5-10-bm': { model: 'ATL 7.5 10 BM', mpn: '4116002394', series: 'ATL', configuration: 'BM', airflowLpm: 702, powerKw: 5.5, horsepower: 7.5, noiseDb: 80, enclosedNoiseDb: 68, weightKg: 118, dimensionsMm: '830 × 750 × 760', startMethod: 'YD' },
	'abac-atl-10-10-bm': { model: 'ATL 10 10 BM', mpn: '4116002407', series: 'ATL', configuration: 'BM', airflowLpm: 942, powerKw: 7.5, horsepower: 10, noiseDb: 81, enclosedNoiseDb: 69, weightKg: 125, dimensionsMm: '868 × 750 × 760', startMethod: 'YD' },
	'abac-atf-2-10-pp': { model: 'ATF 2 10 PP', mpn: '4116002333', series: 'ATF', configuration: 'PP', airflowLpm: 186, powerKw: 1.5, horsepower: 2, noiseDb: 82, enclosedNoiseDb: 69, weightKg: 50, dimensionsMm: '646 × 530 × 547', startMethod: 'DOL' },
	'abac-atf-3-10-pp': { model: 'ATF 3 10 PP', mpn: '4116002352', series: 'ATF', configuration: 'PP', airflowLpm: 240, powerKw: 2.2, horsepower: 3, noiseDb: 83, enclosedNoiseDb: 70, weightKg: 52, dimensionsMm: '704 × 530 × 547', startMethod: 'DOL' },
	'abac-atf-5-5-10-pp': { model: 'ATF 5.5 10 PP', mpn: '4116002369', series: 'ATF', configuration: 'PP', airflowLpm: 492, powerKw: 4, horsepower: 5.5, noiseDb: 83, enclosedNoiseDb: 70, weightKg: 66, dimensionsMm: '704 × 530 × 547', startMethod: 'DOL' },
	'abac-atf-7-5-10-pp': { model: 'ATF 7.5 10 PP', mpn: '4116002392', series: 'ATF', configuration: 'PP', airflowLpm: 660, powerKw: 5.5, horsepower: 7.5, noiseDb: 84, enclosedNoiseDb: 74, weightKg: 103, dimensionsMm: '830 × 591 × 625', startMethod: 'DOL' },
	'abac-atf-10-10-pp': { model: 'ATF 10 10 PP', mpn: '4116002405', series: 'ATF', configuration: 'PP', airflowLpm: 930, powerKw: 7.5, horsepower: 10, noiseDb: 86, enclosedNoiseDb: 77, weightKg: 110, dimensionsMm: '868 × 591 × 625', startMethod: 'YD' },
	'abac-atf-2-10-bm': { model: 'ATF 2 10 BM', mpn: '4116002329', series: 'ATF', configuration: 'BM', airflowLpm: 186, powerKw: 1.5, horsepower: 2, noiseDb: 82, enclosedNoiseDb: 69, weightKg: 65, dimensionsMm: '646 × 700 × 682', startMethod: 'DOL' },
	'abac-atf-3-10-bm': { model: 'ATF 3 10 BM', mpn: '4116002355', series: 'ATF', configuration: 'BM', airflowLpm: 240, powerKw: 2.2, horsepower: 3, noiseDb: 83, enclosedNoiseDb: 70, weightKg: 80, dimensionsMm: '704 × 700 × 682', startMethod: 'DOL' },
	'abac-atf-5-5-10-bm': { model: 'ATF 5.5 10 BM', mpn: '4116002381', series: 'ATF', configuration: 'BM', airflowLpm: 492, powerKw: 4, horsepower: 5.5, noiseDb: 83, enclosedNoiseDb: 70, weightKg: 82, dimensionsMm: '704 × 700 × 682', startMethod: 'YD' },
	'abac-atf-7-5-10-bm': { model: 'ATF 7.5 10 BM', mpn: '4116002398', series: 'ATF', configuration: 'BM', airflowLpm: 660, powerKw: 5.5, horsepower: 7.5, noiseDb: 84, enclosedNoiseDb: 74, weightKg: 118, dimensionsMm: '830 × 750 × 760', startMethod: 'YD' },
	'abac-atf-10-10-bm': { model: 'ATF 10 10 BM', mpn: '4116002408', series: 'ATF', configuration: 'BM', airflowLpm: 930, powerKw: 7.5, horsepower: 10, noiseDb: 86, enclosedNoiseDb: 77, weightKg: 125, dimensionsMm: '868 × 750 × 760', startMethod: 'YD' },
} as const satisfies Record<string, CompressorData>;

export type AbacTechIndustrial2025Id = keyof typeof compressors;

export function abacTechIndustrial2025(id: AbacTechIndustrial2025Id) {
	const data = compressors[id];
	const evidenceId = `abac-${data.mpn}-catalog-2025`;
	const catalogPage = data.series === 'ATL' ? 18 : 20;
	const oilFree = data.series === 'ATF';
	const configurationLabel = data.configuration === 'PP' ? 'Power Pack' : 'monté sur base';
	return {
		id,
		slug: id,
		brand: 'ABAC',
		model: data.model,
		mpn: data.mpn,
		variant: {
			familyId: `abac-tech-${data.series.toLowerCase()}-${data.configuration.toLowerCase()}`,
			label: `${configurationLabel}, ${data.powerKw} kW`,
			distinguishingAttributes: {
				configuration: data.configuration,
				puissance: `${String(data.powerKw).replace('.', ',')} kW`,
				débit: `${data.airflowLpm} L/min à 7 bar`,
			},
		},
		tankLiters: 0,
		maxPressureBar: 10,
		fadCurve: [{ pressureBar: 7, litersPerMinute: data.airflowLpm }],
		dutyCycle: 1,
		oilType: oilFree ? 'oil-free' : 'oil',
		noiseDb: data.noiseDb,
		powerKw: data.powerKw,
		weightKg: data.weightKg,
		mobility: 'fixed',
		voltage: '400 V / 50 Hz',
		phase: 'three-phase',
		confidence: 'A',
		status: 'unknown',
		image: {
			src: `/images/products/abac-tech-${data.series.toLowerCase()}-${data.configuration.toLowerCase()}-2025.webp`,
			alt: `Compresseur industriel ABAC ${data.model}`,
			sourceUrl: abacCatalogUrl,
			sourceLabel: `Visuel de gamme officiel ABAC ${data.series}-${data.configuration}, catalogue 2025 page ${catalogPage}`,
		},
		editorial: {
			overview: `L’ABAC ${data.model} est un compresseur industriel ${oilFree ? 'sans huile' : 'lubrifié'} en configuration ${configurationLabel}. Le tableau constructeur publie ${data.airflowLpm} L/min ; la documentation technique ATL/ATF rattache ce débit au point de service de 7 bar utilisé par CompatAir.`,
			verifiedFacts: [
				`Le catalogue ABAC 2025 associe la référence ${data.mpn} à une pression maximale de 10 bar, un moteur de ${String(data.powerKw).replace('.', ',')} kW et une alimentation 400 V triphasée à 50 Hz.`,
				`La même ligne publie ${data.weightKg} kg, ${data.noiseDb} dB(A), ${data.enclosedNoiseDb} dB(A) en version fermée et des dimensions de ${data.dimensionsMm} mm.`,
			],
			limitations: [
				'Un seul point de débit utile est documenté à 7 bar ; aucune interpolation ni extrapolation n’est effectuée.',
				'Le visuel illustre la famille de configuration ; les détails visibles peuvent différer selon la puissance.',
				'Le statut commercial courant n’est pas déduit du catalogue 2025 et reste donc inconnu.',
			],
		},
		specifications: [
			{ label: 'Configuration', value: `${data.configuration} (${configurationLabel})`, evidenceIds: [evidenceId] },
			{ label: 'Débit documenté', value: `${data.airflowLpm} L/min à 7 bar`, evidenceIds: [evidenceId, pressureEvidenceId] },
			{ label: 'Pression maximale', value: '10 bar', evidenceIds: [evidenceId] },
			{ label: 'Cycle de fonctionnement', value: '100 % (S1)', evidenceIds: [evidenceId] },
			{ label: 'Puissance moteur', value: `${String(data.powerKw).replace('.', ',')} kW (${String(data.horsepower).replace('.', ',')} ch)`, evidenceIds: [evidenceId] },
			{ label: 'Vitesse moteur', value: '1 400 tr/min', evidenceIds: [evidenceId] },
			{ label: 'Démarrage', value: data.startMethod, evidenceIds: [evidenceId] },
			{ label: 'Alimentation', value: '400 V triphasé / 50 Hz', evidenceIds: [evidenceId] },
			{ label: 'Niveaux sonores publiés', value: `${data.noiseDb} dB(A) ; ${data.enclosedNoiseDb} dB(A) en version fermée`, evidenceIds: [evidenceId] },
			{ label: 'Dimensions L × l × H', value: `${data.dimensionsMm} mm`, evidenceIds: [evidenceId] },
			{ label: 'Poids', value: `${data.weightKg} kg`, evidenceIds: [evidenceId] },
		],
		evidence: [
			{
				id: evidenceId,
				sourceUrl: abacCatalogUrl,
				sourceLabel: `ABAC, Catalogue général 2025, ${data.series}-${data.configuration}, page ${catalogPage}`,
				sourceType: 'manufacturer',
				sourceRole: 'primary',
				retrievedAt: '2026-08-29',
				confidence: 'A',
				notes: `Ligne ${data.model} vérifiée dans le tableau officiel : numéro de pièce, débit, lubrification, puissance, régime, alimentation, pression, bruit, dimensions et poids.`,
			},
			{
				id: pressureEvidenceId,
				sourceUrl: pressureSourceUrl,
				sourceLabel: 'Schneider Airsystems, documentation technique Industrial Tech ATL et ATF',
				sourceType: 'manufacturer',
				sourceRole: 'primary',
				retrievedAt: '2026-08-29',
				confidence: 'A',
				notes: 'Les tableaux techniques des familles ATL et ATF publient les débits des groupes au point de service de 7 bar.',
			},
		],
		fieldSources: {
			model: [evidenceId],
			mpn: [evidenceId],
			fadCurve: [evidenceId, pressureEvidenceId],
			dutyCycle: [evidenceId],
			noiseDb: [evidenceId],
			maxPressureBar: [evidenceId],
			powerKw: [evidenceId],
			weightKg: [evidenceId],
			specifications: [evidenceId, pressureEvidenceId],
		},
		notes: [
			'Le débit aspiré n’est pas renseigné : la valeur du tableau industriel est conservée uniquement comme point de débit utile à 7 bar.',
			'Le premier niveau sonore publié est exposé dans noiseDb ; le second, explicitement marqué « Fermé », reste visible dans les spécifications.',
		],
	};
}
