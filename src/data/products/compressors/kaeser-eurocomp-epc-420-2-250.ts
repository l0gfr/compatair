const evidenceId = 'kaeser-eurocomp-2026-brochure';

const product = {
	id: 'kaeser-eurocomp-epc-420-2-250', slug: 'kaeser-eurocomp-epc-420-2-250', brand: 'KAESER', model: 'EUROCOMP EPC 420-2-250',
	variant: { familyId: 'kaeser-eurocomp-horizontal', label: '15 bar, cuve 250 l', distinguishingAttributes: { pression: '15 bar', cuve: '250 l', puissance: '3 kW' } },
	tankLiters: 250, maxPressureBar: 15, fadCurve: [{ pressureBar: 8, litersPerMinute: 344 }, { pressureBar: 12, litersPerMinute: 336 }], oilType: 'oil', noiseDb: 75, powerKw: 3, weightKg: 175, mobility: 'fixed', voltage: '400 V / 50 Hz', phase: 'three-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/kaeser-eurocomp-horizontal.webp', alt: 'Compresseur KAESER EUROCOMP à cuve horizontale', sourceUrl: 'https://nz.kaeser.com/products/reciprocating-compressors/stationary-reciprocating-compressors/oil-lubricated-workshop-compressors/', sourceLabel: 'Visuel officiel de la gamme KAESER EUROCOMP horizontale' },
	editorial: { overview: 'Le KAESER EUROCOMP EPC 420-2-250 est une version 15 bar de 3 kW sur cuve horizontale de 250 litres. Les débits mesurés selon ISO 1217 publiés sont de 344 L/min à 8 bar et 336 L/min à 12 bar.', verifiedFacts: ['La pression maximale est de 15 bar.', 'La brochure indique 75 dB(A) et 175 kg.'], limitations: ['Aucun débit n’est disponible à 15 bar.', 'Le visuel est commun à la gamme horizontale.'] },
	specifications: [
		{ label: 'Débit mesuré selon ISO 1217', value: '344 L/min à 8 bar ; 336 L/min à 12 bar', evidenceIds: [evidenceId] }, { label: 'Pression maximale', value: '15 bar', evidenceIds: [evidenceId] }, { label: 'Cuve', value: '250 l', evidenceIds: [evidenceId] }, { label: 'Puissance moteur', value: '3 kW', evidenceIds: [evidenceId] },
		{ label: 'Alimentation', value: '400 V triphasé, 50 Hz', evidenceIds: [evidenceId] }, { label: 'Niveau de pression acoustique', value: '75 dB(A) à la pression maximale, selon ISO 2151 / ISO 9614-2, tolérance ±3 dB', evidenceIds: [evidenceId] }, { label: 'Poids', value: '175 kg', evidenceIds: [evidenceId] },
		{ label: 'Cylindres', value: '2', evidenceIds: [evidenceId] }, { label: 'Dimensions (L × P × H)', value: '1 540 × 570 × 1 210 mm', evidenceIds: [evidenceId] },
		{ label: 'Entraînement', value: 'Accouplement direct 1:1, sans courroie', evidenceIds: [evidenceId] }, { label: 'Lubrification', value: 'Anneau d’huile', evidenceIds: [evidenceId] },
	],
	evidence: [{ id: evidenceId, sourceUrl: 'https://th.kaeser.com/EN/download.ashx?id=tcm%3A58-5902', sourceLabel: 'KAESER, brochure EUROCOMP, édition 02/2026', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Tableaux des variantes horizontales 10 et 15 bar ; débits déclarés comme mesurés selon ISO 1217.' }],
	fieldSources: { tankLiters: [evidenceId], maxPressureBar: [evidenceId], fadCurve: [evidenceId], oilType: [evidenceId], noiseDb: [evidenceId], powerKw: [evidenceId], weightKg: [evidenceId], mobility: [evidenceId], voltage: [evidenceId], phase: [evidenceId], status: [evidenceId] }, notes: ['Débits limités aux points officiels à 8 et 12 bar.'],
};

export default product;
