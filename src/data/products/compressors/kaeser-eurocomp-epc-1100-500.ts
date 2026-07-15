const evidenceId = 'kaeser-eurocomp-2026-brochure';

const product = {
	id: 'kaeser-eurocomp-epc-1100-500', slug: 'kaeser-eurocomp-epc-1100-500', brand: 'KAESER', model: 'EUROCOMP EPC 1100-500',
	variant: { familyId: 'kaeser-eurocomp-horizontal', label: '10 bar, cuve 500 l', distinguishingAttributes: { pression: '10 bar', cuve: '500 l', puissance: '5,5 kW' } },
	tankLiters: 500, maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 750 }, { pressureBar: 8, litersPerMinute: 690 }], oilType: 'oil', noiseDb: 79, powerKw: 5.5, weightKg: 235, mobility: 'fixed', voltage: '400 V / 50 Hz', phase: 'three-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/kaeser-eurocomp-horizontal.webp', alt: 'Compresseur KAESER EUROCOMP à cuve horizontale', sourceUrl: 'https://nz.kaeser.com/products/reciprocating-compressors/stationary-reciprocating-compressors/oil-lubricated-workshop-compressors/', sourceLabel: 'Visuel officiel de la gamme KAESER EUROCOMP horizontale' },
	editorial: { overview: 'Le KAESER EUROCOMP EPC 1100-500 est un compresseur fixe de 5,5 kW sur cuve horizontale de 500 litres. Le constructeur publie des débits mesurés selon ISO 1217 de 750 L/min à 6 bar et 690 L/min à 8 bar.', verifiedFacts: ['La pression maximale est de 10 bar et l’alimentation de 400 V triphasé.', 'La brochure indique 79 dB(A) et 235 kg.'], limitations: ['Aucun débit n’est publié à 10 bar.', 'Le visuel officiel est commun aux variantes horizontales.'] },
	specifications: [
		{ label: 'Débit mesuré selon ISO 1217', value: '750 L/min à 6 bar ; 690 L/min à 8 bar', evidenceIds: [evidenceId] }, { label: 'Pression maximale', value: '10 bar', evidenceIds: [evidenceId] }, { label: 'Cuve', value: '500 l', evidenceIds: [evidenceId] }, { label: 'Puissance moteur', value: '5,5 kW', evidenceIds: [evidenceId] },
		{ label: 'Alimentation', value: '400 V triphasé, 50 Hz', evidenceIds: [evidenceId] }, { label: 'Niveau de pression acoustique', value: '79 dB(A) à la pression maximale, selon ISO 2151 / ISO 9614-2, tolérance ±3 dB', evidenceIds: [evidenceId] }, { label: 'Poids', value: '235 kg', evidenceIds: [evidenceId] },
		{ label: 'Cylindres', value: '2', evidenceIds: [evidenceId] }, { label: 'Dimensions (L × P × H)', value: '1 970 × 720 × 1 300 mm', evidenceIds: [evidenceId] },
		{ label: 'Entraînement', value: 'Accouplement direct 1:1, sans courroie', evidenceIds: [evidenceId] }, { label: 'Lubrification', value: 'Anneau d’huile', evidenceIds: [evidenceId] },
	],
	evidence: [{ id: evidenceId, sourceUrl: 'https://th.kaeser.com/EN/download.ashx?id=tcm%3A58-5902', sourceLabel: 'KAESER, brochure EUROCOMP, édition 02/2026', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Tableaux des variantes horizontales 10 et 15 bar ; débits déclarés comme mesurés selon ISO 1217.' }],
	fieldSources: { tankLiters: [evidenceId], maxPressureBar: [evidenceId], fadCurve: [evidenceId], oilType: [evidenceId], noiseDb: [evidenceId], powerKw: [evidenceId], weightKg: [evidenceId], mobility: [evidenceId], voltage: [evidenceId], phase: [evidenceId], status: [evidenceId] }, notes: ['Le champ fadCurve contient seulement les points officiels.'],
};

export default product;
