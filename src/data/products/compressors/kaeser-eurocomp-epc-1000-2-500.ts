const evidenceId = 'kaeser-eurocomp-2026-brochure';

const product = {
	id: 'kaeser-eurocomp-epc-1000-2-500', slug: 'kaeser-eurocomp-epc-1000-2-500', brand: 'KAESER', model: 'EUROCOMP EPC 1000-2-500',
	variant: { familyId: 'kaeser-eurocomp-horizontal', label: '15 bar, cuve 500 l', distinguishingAttributes: { pression: '15 bar', cuve: '500 l', puissance: '7,5 kW' } },
	tankLiters: 500, maxPressureBar: 15, fadCurve: [{ pressureBar: 8, litersPerMinute: 836 }, { pressureBar: 12, litersPerMinute: 820 }], oilType: 'oil', noiseDb: 80, powerKw: 7.5, weightKg: 285, mobility: 'fixed', voltage: '400 V / 50 Hz', phase: 'three-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/kaeser-eurocomp-horizontal.webp', alt: 'Compresseur KAESER EUROCOMP à cuve horizontale', sourceUrl: 'https://nz.kaeser.com/products/reciprocating-compressors/stationary-reciprocating-compressors/oil-lubricated-workshop-compressors/', sourceLabel: 'Visuel officiel de la gamme KAESER EUROCOMP horizontale' },
	editorial: { overview: 'Le KAESER EUROCOMP EPC 1000-2-500 est une version 15 bar de 7,5 kW sur cuve horizontale de 500 litres. KAESER publie 836 L/min à 8 bar et 820 L/min à 12 bar, mesurés selon ISO 1217.', verifiedFacts: ['La pression maximale est de 15 bar.', 'Le constructeur indique 80 dB(A) de pression acoustique et 285 kg.'], limitations: ['Le débit à 15 bar n’est pas documenté.', 'Le visuel officiel est commun aux versions horizontales.'] },
	specifications: [
		{ label: 'Débit mesuré selon ISO 1217', value: '836 L/min à 8 bar ; 820 L/min à 12 bar', evidenceIds: [evidenceId] }, { label: 'Pression maximale', value: '15 bar', evidenceIds: [evidenceId] }, { label: 'Cuve', value: '500 l', evidenceIds: [evidenceId] }, { label: 'Puissance moteur', value: '7,5 kW', evidenceIds: [evidenceId] },
		{ label: 'Alimentation', value: '400 V triphasé, 50 Hz', evidenceIds: [evidenceId] }, { label: 'Niveau de pression acoustique', value: '80 dB(A) à la pression maximale, selon ISO 2151 / ISO 9614-2, tolérance ±3 dB', evidenceIds: [evidenceId] }, { label: 'Poids', value: '285 kg', evidenceIds: [evidenceId] },
		{ label: 'Cylindres', value: '2', evidenceIds: [evidenceId] }, { label: 'Dimensions (L × P × H)', value: '1 970 × 810 × 1 340 mm', evidenceIds: [evidenceId] },
		{ label: 'Entraînement', value: 'Accouplement direct 1:1, sans courroie', evidenceIds: [evidenceId] }, { label: 'Lubrification', value: 'Anneau d’huile', evidenceIds: [evidenceId] },
	],
	evidence: [{ id: evidenceId, sourceUrl: 'https://th.kaeser.com/EN/download.ashx?id=tcm%3A58-5902', sourceLabel: 'KAESER, brochure EUROCOMP, édition 02/2026', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Tableaux des variantes horizontales 10 et 15 bar ; débits déclarés comme mesurés selon ISO 1217.' }],
	fieldSources: { tankLiters: [evidenceId], maxPressureBar: [evidenceId], fadCurve: [evidenceId], oilType: [evidenceId], noiseDb: [evidenceId], powerKw: [evidenceId], weightKg: [evidenceId], mobility: [evidenceId], voltage: [evidenceId], phase: [evidenceId], status: [evidenceId] }, notes: ['Débits limités aux points officiels à 8 et 12 bar.'],
};

export default product;
