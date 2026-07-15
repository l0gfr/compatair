const evidenceId = 'kaeser-eurocomp-2026-brochure-base-mounted';
const sourceUrl = 'https://th.kaeser.com/EN/download.ashx?id=tcm%3A58-5902';

type BaseMountedEurocompData = {
	id: string;
	model: string;
	maxPressureBar: 10 | 15;
	fadCurve: Array<{ pressureBar: number; litersPerMinute: number }>;
	powerKw: number;
	cylinders: number;
	noiseDb: number;
	dimensions: string;
	weightKg: number;
};

export function baseMountedEurocomp(data: BaseMountedEurocompData) {
	const flow = data.fadCurve
		.map((point) => `${point.litersPerMinute} L/min à ${point.pressureBar} bar`)
		.join(' ; ');
	const lubrication = data.powerKw <= 2.4 ? "Injection d’huile" : "Anneau d’huile";

	return {
		id: data.id,
		slug: data.id,
		brand: 'KAESER',
		model: `EUROCOMP ${data.model}`,
		variant: {
			familyId: 'kaeser-eurocomp-base-mounted',
			label: `${data.maxPressureBar} bar, sur bâti sans réservoir`,
			distinguishingAttributes: {
				pression: `${data.maxPressureBar} bar`,
				installation: 'Sur bâti, sans réservoir',
				puissance: `${String(data.powerKw).replace('.', ',')} kW`,
			},
		},
		tankLiters: 0,
		maxPressureBar: data.maxPressureBar,
		fadCurve: data.fadCurve,
		oilType: 'oil',
		noiseDb: data.noiseDb,
		powerKw: data.powerKw,
		weightKg: data.weightKg,
		mobility: 'fixed',
		voltage: '400 V / 50 Hz',
		phase: 'three-phase',
		confidence: 'A',
		status: 'active',
		image: {
			src: '/images/products/kaeser-eurocomp-base-mounted.webp',
			alt: `Groupe compresseur KAESER EUROCOMP ${data.model} sur bâti`,
			sourceUrl,
			sourceLabel: 'Visuel officiel KAESER, version EUROCOMP sur bâti',
		},
		editorial: {
			overview: `Le KAESER EUROCOMP ${data.model} est un groupe compresseur fixe sur bâti, livré sans réservoir. La brochure 2026 publie ${flow}, mesurés selon ISO 1217.`,
			verifiedFacts: [
				`La pression maximale est de ${data.maxPressureBar} bar et la puissance d’arbre de ${String(data.powerKw).replace('.', ',')} kW en 400 V triphasé.`,
				`Le groupe mesure ${data.dimensions}, pèse ${data.weightKg} kg et utilise ${data.cylinders} cylindre${data.cylinders > 1 ? 's' : ''}.`,
			],
			limitations: [
				`Aucun débit n’est extrapolé au-delà des ${data.fadCurve.length} points ISO 1217 publiés.`,
				'Cette version sans réservoir doit être intégrée à une installation dimensionnée et protégée séparément.',
			],
		},
		specifications: [
			{ label: 'Débit mesuré selon ISO 1217', value: flow, evidenceIds: [evidenceId] },
			{ label: 'Pression maximale', value: `${data.maxPressureBar} bar`, evidenceIds: [evidenceId] },
			{ label: 'Configuration', value: 'Sur bâti, sans réservoir d’air', evidenceIds: [evidenceId] },
			{ label: 'Puissance d’arbre du bloc', value: `${String(data.powerKw).replace('.', ',')} kW`, evidenceIds: [evidenceId] },
			{ label: 'Alimentation', value: '400 V triphasé, 50 Hz', evidenceIds: [evidenceId] },
			{ label: 'Nombre de cylindres', value: String(data.cylinders), evidenceIds: [evidenceId] },
			{ label: 'Niveau de pression acoustique', value: `${data.noiseDb} dB(A) à la pression maximale, selon ISO 2151 / ISO 9614-2, tolérance ±3 dB`, evidenceIds: [evidenceId] },
			{ label: 'Dimensions (L × P × H)', value: data.dimensions, evidenceIds: [evidenceId] },
			{ label: 'Poids', value: `${data.weightKg} kg`, evidenceIds: [evidenceId] },
			{ label: 'Entraînement', value: 'Accouplement direct 1:1, sans courroie', evidenceIds: [evidenceId] },
			{ label: 'Lubrification du bloc', value: lubrication, evidenceIds: [evidenceId] },
			{ label: 'Protection moteur', value: 'IP54', evidenceIds: [evidenceId] },
		],
		evidence: [{
			id: evidenceId,
			sourceUrl,
			sourceLabel: 'KAESER, brochure EUROCOMP, édition 02/2026, tableau des versions sur bâti page 14',
			sourceType: 'manufacturer',
			retrievedAt: '2026-07-15',
			confidence: 'A',
			notes: 'Débits déclarés comme mesurés selon ISO 1217 ; dimensions, masse, acoustique et alimentation reprises du tableau constructeur.',
		}],
		fieldSources: {
			tankLiters: [evidenceId],
			maxPressureBar: [evidenceId],
			fadCurve: [evidenceId],
			oilType: [evidenceId],
			noiseDb: [evidenceId],
			powerKw: [evidenceId],
			weightKg: [evidenceId],
			mobility: [evidenceId],
			voltage: [evidenceId],
			phase: [evidenceId],
			status: [evidenceId],
			specifications: [evidenceId],
		},
		notes: ['tankLiters = 0 représente explicitement la version constructeur sans réservoir.'],
	};
}
