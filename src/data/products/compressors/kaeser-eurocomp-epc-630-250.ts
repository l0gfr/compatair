const evidenceId = 'kaeser-eurocomp-2026-brochure';

const product = {
	id: 'kaeser-eurocomp-epc-630-250', slug: 'kaeser-eurocomp-epc-630-250', brand: 'KAESER', model: 'EUROCOMP EPC 630-250',
	variant: { familyId: 'kaeser-eurocomp-horizontal', label: '10 bar, cuve 250 l', distinguishingAttributes: { pression: '10 bar', cuve: '250 l', puissance: '3 kW' } },
	tankLiters: 250, maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 410 }, { pressureBar: 8, litersPerMinute: 375 }], oilType: 'oil', noiseDb: 76, powerKw: 3, weightKg: 166, mobility: 'fixed', voltage: '400 V / 50 Hz', phase: 'three-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/kaeser-eurocomp-horizontal.webp', alt: 'Compresseur KAESER EUROCOMP à cuve horizontale', sourceUrl: 'https://nz.kaeser.com/products/reciprocating-compressors/stationary-reciprocating-compressors/oil-lubricated-workshop-compressors/', sourceLabel: 'Visuel officiel de la gamme KAESER EUROCOMP horizontale' },
	editorial: { overview: 'Le KAESER EUROCOMP EPC 630-250 reprend le groupe de 3 kW sur une cuve horizontale de 250 litres. KAESER publie 410 L/min à 6 bar et 375 L/min à 8 bar, mesurés selon ISO 1217.', verifiedFacts: ['La pression maximale est de 10 bar et la cuve de 250 litres.', 'La documentation indique 76 dB(A) et un poids de 166 kg.'], limitations: ['Aucun débit n’est fourni à la pression maximale de 10 bar.', 'Le visuel officiel est commun aux versions horizontales.'] },
	specifications: [
		{ label: 'Débit mesuré selon ISO 1217', value: '410 L/min à 6 bar ; 375 L/min à 8 bar', evidenceIds: [evidenceId] }, { label: 'Pression maximale', value: '10 bar', evidenceIds: [evidenceId] }, { label: 'Cuve', value: '250 l', evidenceIds: [evidenceId] }, { label: 'Puissance moteur', value: '3 kW', evidenceIds: [evidenceId] },
		{ label: 'Alimentation', value: '400 V triphasé, 50 Hz', evidenceIds: [evidenceId] }, { label: 'Niveau de pression acoustique', value: '76 dB(A) à la pression maximale, selon ISO 2151 / ISO 9614-2, tolérance ±3 dB', evidenceIds: [evidenceId] }, { label: 'Poids', value: '166 kg', evidenceIds: [evidenceId] },
		{ label: 'Cylindres', value: '2', evidenceIds: [evidenceId] }, { label: 'Dimensions (L × P × H)', value: '1 540 × 570 × 1 130 mm', evidenceIds: [evidenceId] },
		{ label: 'Entraînement', value: 'Accouplement direct 1:1, sans courroie', evidenceIds: [evidenceId] }, { label: 'Lubrification', value: 'Anneau d’huile', evidenceIds: [evidenceId] },
	],
	evidence: [{ id: evidenceId, sourceUrl: 'https://th.kaeser.com/EN/download.ashx?id=tcm%3A58-5902', sourceLabel: 'KAESER, brochure EUROCOMP, édition 02/2026', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Tableaux des variantes horizontales 10 et 15 bar ; débits déclarés comme mesurés selon ISO 1217.' }],
	fieldSources: { tankLiters: [evidenceId], maxPressureBar: [evidenceId], fadCurve: [evidenceId], oilType: [evidenceId], noiseDb: [evidenceId], powerKw: [evidenceId], weightKg: [evidenceId], mobility: [evidenceId], voltage: [evidenceId], phase: [evidenceId], status: [evidenceId] }, notes: ['Le champ fadCurve ne contient que les points constructeur.'],
};

export default product;
