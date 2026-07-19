const brochureEvidenceId = 'atlas-copco-lz-7-20-official-brochure';
const currentRangeEvidenceId = 'atlas-copco-lz-current-product-page';
const brochureUrl = 'https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/industrial-air/documents/leaflets/compressors/lz_7-20/LZ_7-20_antwerp_leaflet_EN_2935080544.pdf';
const currentRangeUrl = 'https://www.atlascopco.com/en-in/compressors/products/air-compressor/oil-free-air-compressors/lz-premium';

type AtlasCopcoLzData = {
	id: 'atlas-copco-lz-7-10-bm' | 'atlas-copco-lz-10-10-bm' | 'atlas-copco-lz-15-10-bm' | 'atlas-copco-lz-20-10-bm';
	model: 'LZ 7-10 BM' | 'LZ 10-10 BM' | 'LZ 15-10 BM' | 'LZ 20-10 BM';
	fadLpmAtSevenBar: 660 | 930 | 1320 | 1860;
	powerKw: 5.5 | 7.5 | 11 | 15;
	noiseDb: 67 | 69 | 74 | 76;
	dimensions: string;
	imageSrc: string;
	imageSourceUrl: string;
	imageSourceLabel: string;
	imageIsFamilyVisual?: boolean;
};

export function atlasCopcoLzBaseMounted(data: AtlasCopcoLzData) {
	return {
		id: data.id,
		slug: data.id,
		brand: 'Atlas Copco',
		model: data.model,
		variant: {
			familyId: 'atlas-copco-lz-base-mounted',
			label: '10 bar, sur bâti sans réservoir, 400 V / 50 Hz',
			distinguishingAttributes: {
				installation: 'Sur bâti, sans réservoir',
				puissance: `${String(data.powerKw).replace('.', ',')} kW`,
				débit: `${data.fadLpmAtSevenBar.toLocaleString('fr-FR')} L/min à 7 bar`,
			},
		},
		tankLiters: 0,
		maxPressureBar: 10,
		fadCurve: [{ pressureBar: 7, litersPerMinute: data.fadLpmAtSevenBar }],
		dutyCycle: 1,
		oilType: 'oil-free',
		noiseDb: data.noiseDb,
		powerKw: data.powerKw,
		mobility: 'fixed',
		voltage: '400 V / 50 Hz',
		phase: 'three-phase',
		confidence: 'A',
		status: 'active',
		image: {
			src: data.imageSrc,
			alt: `Compresseur Atlas Copco ${data.model} sur bâti`,
			sourceUrl: data.imageSourceUrl,
			sourceLabel: data.imageSourceLabel,
		},
		editorial: {
			overview: `L’Atlas Copco ${data.model} est un compresseur à pistons sans huile, fixe et livré sans réservoir intégré. Le constructeur publie un FAD de ${data.fadLpmAtSevenBar.toLocaleString('fr-FR')} L/min à 7 bar, en 400 V / 50 Hz, avec un cycle de service de 100 %.`,
			verifiedFacts: [
				`Le débit d’air libre à 50 Hz est de ${data.fadLpmAtSevenBar.toLocaleString('fr-FR')} L/min, mesuré à 7 bar selon ISO 1217, édition 3, annexe C.`,
				`La pression de travail maximale est de 10 bar, la puissance recommandée de ${String(data.powerKw).replace('.', ',')} kW et le niveau sonore publié de ${data.noiseDb} dB(A).`,
				'Atlas Copco présente toujours la gamme LZ sur sa page produit actuelle, avec une alimentation 400 V et un fonctionnement continu.',
			],
			limitations: [
				'Le FAD est documenté à 7 bar : CompatAir peut l’utiliser comme borne conservatrice pour un besoin inférieur, mais ne l’utilise jamais pour un outil demandant plus de 7 bar.',
				'La version BM est livrée sans réservoir ; le stockage, le traitement d’air et les protections de l’installation doivent être dimensionnés séparément.',
				...(data.imageIsFamilyVisual ? ['Le visuel officiel illustre la gamme LZ 7-20 et peut différer dans certains détails de cette puissance.'] : []),
			],
		},
		specifications: [
			{ label: 'Débit d’air libre à 50 Hz', value: `${data.fadLpmAtSevenBar.toLocaleString('fr-FR')} L/min à 7 bar`, evidenceIds: [brochureEvidenceId] },
			{ label: 'Référence de mesure du FAD', value: 'ISO 1217, édition 3, annexe C ; aspiration 1 bar absolu et 20 °C', evidenceIds: [brochureEvidenceId] },
			{ label: 'Pression de travail maximale', value: '10 bar', evidenceIds: [brochureEvidenceId, currentRangeEvidenceId] },
			{ label: 'Cycle de service', value: '100 %', evidenceIds: [brochureEvidenceId, currentRangeEvidenceId] },
			{ label: 'Configuration', value: 'BM : sur bâti, sans réservoir intégré', evidenceIds: [brochureEvidenceId] },
			{ label: 'Puissance recommandée installée', value: `${String(data.powerKw).replace('.', ',')} kW`, evidenceIds: [brochureEvidenceId] },
			{ label: 'Alimentation retenue', value: '400 V triphasé, 50 Hz', evidenceIds: [brochureEvidenceId, currentRangeEvidenceId] },
			{ label: 'Niveau sonore publié', value: `${data.noiseDb} dB(A), tolérance 3 dB(A)`, evidenceIds: [brochureEvidenceId] },
			{ label: 'Dimensions sur bâti (L × P × H)', value: data.dimensions, evidenceIds: [brochureEvidenceId] },
			{ label: 'Qualité d’air', value: 'Pompe sans huile certifiée ISO 8573-1 Classe 0', evidenceIds: [brochureEvidenceId, currentRangeEvidenceId] },
		],
		evidence: [
			{
				id: brochureEvidenceId,
				sourceUrl: brochureUrl,
				sourceLabel: 'Atlas Copco, brochure officielle LZ 7-20, tableau des performances et conditions de référence page 7',
				sourceType: 'manufacturer',
				retrievedAt: '2026-07-18',
				confidence: 'A',
				notes: 'Le tableau publie les variantes LZ 7-10, LZ 10-10, LZ 15-10 et LZ 20-10 à 50/60 Hz ; le FAD est déclaré mesuré à 7 bar selon ISO 1217 Ed. 3 annexe C.',
			},
			{
				id: currentRangeEvidenceId,
				sourceUrl: currentRangeUrl,
				sourceLabel: 'Atlas Copco, page produit actuelle LZ Premium',
				sourceType: 'manufacturer',
				retrievedAt: '2026-07-18',
				confidence: 'A',
				notes: 'La page actuelle maintient la gamme LZ dans le catalogue Atlas Copco et publie une plage de 11 à 31 L/s, 4 à 10 bar, 5,5 à 15 kW, avec options 400 V.',
			},
		],
		fieldSources: {
			tankLiters: [brochureEvidenceId],
			maxPressureBar: [brochureEvidenceId, currentRangeEvidenceId],
			fadCurve: [brochureEvidenceId],
			dutyCycle: [brochureEvidenceId, currentRangeEvidenceId],
			oilType: [brochureEvidenceId, currentRangeEvidenceId],
			noiseDb: [brochureEvidenceId],
			powerKw: [brochureEvidenceId, currentRangeEvidenceId],
			mobility: [brochureEvidenceId],
			voltage: [brochureEvidenceId, currentRangeEvidenceId],
			phase: [brochureEvidenceId],
			status: [currentRangeEvidenceId],
			specifications: [brochureEvidenceId, currentRangeEvidenceId],
		},
		notes: [
			'Le champ tankLiters = 0 décrit explicitement la version constructeur BM sans réservoir intégré.',
			'Le point FAD reste attaché à sa pression de mesure de 7 bar ; aucune copie artificielle du point à 6,3 bar n’est ajoutée au catalogue.',
		],
	};
}
