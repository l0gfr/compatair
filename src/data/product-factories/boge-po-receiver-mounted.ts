const brochureEvidenceId = 'boge-po-fr-official-brochure-2026';
const currentRangeEvidenceId = 'boge-po-current-range-2026';
const brochureUrl = 'https://www.boge.com/sites/default/files/382-fr-po-series_6.pdf';
const currentRangeUrl = 'https://www.boge.com/fr-fr/produits/compresseurs/compresseurs-a-piston/serie-po-jusqu-a-11-kw-/';

type BogePoReceiverMountedData = {
	id: string;
	model: string;
	configuration: 'LR' | 'LTR';
	tankLiters: 50 | 90 | 160 | 270;
	fadLpmAtEightBar: number;
	powerKw: number;
	weightKg: number;
	dimensions: string;
};

export function bogePoReceiverMounted(data: BogePoReceiverMountedData) {
	const isTwin = data.configuration === 'LTR';
	const configurationLabel = isTwin ? 'station double sur réservoir' : 'groupe sur réservoir';
	return {
		id: data.id,
		slug: data.id,
		brand: 'BOGE',
		model: data.model,
		variant: {
			familyId: isTwin ? 'boge-po-ltr' : 'boge-po-lr',
			label: `10 bar, ${configurationLabel}, cuve ${data.tankLiters} L`,
			distinguishingAttributes: {
				configuration: isTwin ? 'Double groupe sur réservoir' : 'Groupe sur réservoir',
				cuve: `${data.tankLiters} L`,
				débit: `${data.fadLpmAtEightBar.toLocaleString('fr-FR')} L/min à 8 bar`,
			},
		},
		tankLiters: data.tankLiters,
		maxPressureBar: 10,
		fadCurve: [{ pressureBar: 8, litersPerMinute: data.fadLpmAtEightBar }],
		oilType: 'oil-free',
		powerKw: data.powerKw,
		weightKg: data.weightKg,
		mobility: 'fixed',
		confidence: 'A',
		status: 'active',
		image: {
			src: '/images/products/boge-po-series.webp',
			alt: `Compresseur sans huile BOGE ${data.model}, gamme PO`,
			sourceUrl: currentRangeUrl,
			sourceLabel: 'Visuel officiel de la gamme BOGE PO',
		},
		editorial: {
			overview: `Le BOGE ${data.model} est un ${configurationLabel} sans huile, avec une cuve de ${data.tankLiters} litres. BOGE publie un débit d’air effectif de ${data.fadLpmAtEightBar.toLocaleString('fr-FR')} L/min à 8 bar.`,
			verifiedFacts: [
				`Le débit d’air effectif à 50 Hz est de ${data.fadLpmAtEightBar.toLocaleString('fr-FR')} L/min, mesuré selon VDMA 4362 à 80 % de la pression maximale de 10 bar.`,
				`La puissance nominale totale est de ${String(data.powerKw).replace('.', ',')} kW, la masse publiée de ${data.weightKg} kg et l’encombrement de ${data.dimensions}.`,
			],
			limitations: [
				'Un seul point de débit effectif est publié : aucune courbe complète ne peut être reconstruite au-delà de la borne documentée à 8 bar.',
				'Le visuel officiel illustre la gamme PO et peut différer dans certains détails de cette configuration sur réservoir.',
				'La tension, la phase, le sécheur et les options doivent être confirmés sur la configuration commandée.',
			],
		},
		specifications: [
			{ label: 'Débit d’air effectif à 50 Hz', value: `${data.fadLpmAtEightBar.toLocaleString('fr-FR')} L/min à 8 bar`, evidenceIds: [brochureEvidenceId] },
			{ label: 'Méthode de mesure', value: 'VDMA 4362, à 80 % de la pression maximale', evidenceIds: [brochureEvidenceId] },
			{ label: 'Configuration', value: isTwin ? 'Deux groupes sur réservoir horizontal' : 'Groupe sur réservoir horizontal', evidenceIds: [brochureEvidenceId, currentRangeEvidenceId] },
			{ label: 'Cuve', value: `${data.tankLiters} L`, evidenceIds: [brochureEvidenceId] },
			{ label: 'Puissance nominale totale', value: `${String(data.powerKw).replace('.', ',')} kW`, evidenceIds: [brochureEvidenceId] },
			{ label: 'Dimensions (L × P × H)', value: data.dimensions, evidenceIds: [brochureEvidenceId] },
			{ label: 'Poids', value: `${data.weightKg} kg`, evidenceIds: [brochureEvidenceId] },
		],
		evidence: [
			{
				id: brochureEvidenceId,
				sourceUrl: brochureUrl,
				sourceLabel: 'BOGE, brochure officielle française série PO, tableaux des variantes LR et LTR',
				sourceType: 'manufacturer',
				retrievedAt: '2026-07-19',
				confidence: 'A',
				notes: 'Débit effectif 50 Hz, pression maximale, cuve, puissance, dimensions et masse repris des tableaux constructeur ; le débit est mesuré selon VDMA 4362 à 80 % de la pression maximale.',
			},
			{
				id: currentRangeEvidenceId,
				sourceUrl: currentRangeUrl,
				sourceLabel: 'BOGE France, gamme actuelle de compresseurs à pistons sans huile PO',
				sourceType: 'manufacturer',
				retrievedAt: '2026-07-19',
				confidence: 'A',
				notes: 'La page actuelle présente 36 variantes, dont les configurations sur réservoir et doubles, avec une plage publiée jusqu’à 1 336 L/min.',
			},
		],
		fieldSources: {
			tankLiters: [brochureEvidenceId],
			maxPressureBar: [brochureEvidenceId, currentRangeEvidenceId],
			fadCurve: [brochureEvidenceId],
			oilType: [brochureEvidenceId, currentRangeEvidenceId],
			powerKw: [brochureEvidenceId],
			weightKg: [brochureEvidenceId],
			mobility: [brochureEvidenceId],
			status: [currentRangeEvidenceId],
			specifications: [brochureEvidenceId, currentRangeEvidenceId],
		},
		notes: [
			'Le point de débit reste attaché à sa pression de mesure de 8 bar ; aucune valeur n’est déduite à une autre pression.',
			isTwin ? 'Le débit et la puissance correspondent au fonctionnement des deux groupes de la station LTR.' : 'La référence LR désigne le groupe monté sur son réservoir.',
		],
	};
}
