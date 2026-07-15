const evidenceId = 'kaeser-eurocomp-2026-brochure';

const product = {
	id: 'kaeser-eurocomp-epc-1500-500', slug: 'kaeser-eurocomp-epc-1500-500', brand: 'KAESER', model: 'EUROCOMP EPC 1500-500',
	variant: { familyId: 'kaeser-eurocomp-horizontal', label: '10 bar, cuve 500 l', distinguishingAttributes: { pression: '10 bar', cuve: '500 l', puissance: '7,5 kW' } },
	tankLiters: 500, maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 1000 }, { pressureBar: 8, litersPerMinute: 900 }], oilType: 'oil', noiseDb: 80, powerKw: 7.5, weightKg: 245, mobility: 'fixed', voltage: '400 V / 50 Hz', phase: 'three-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/kaeser-eurocomp-horizontal.webp', alt: 'Compresseur KAESER EUROCOMP à cuve horizontale', sourceUrl: 'https://nz.kaeser.com/products/reciprocating-compressors/stationary-reciprocating-compressors/oil-lubricated-workshop-compressors/', sourceLabel: 'Visuel officiel de la gamme KAESER EUROCOMP horizontale' },
	editorial: { overview: 'Le KAESER EUROCOMP EPC 1500-500 est une variante de 7,5 kW sur cuve horizontale de 500 litres. La brochure publie 1 000 L/min à 6 bar et 900 L/min à 8 bar, mesurés selon ISO 1217.', verifiedFacts: ['La pression maximale est de 10 bar.', 'Le niveau de pression acoustique publié est de 80 dB(A), pour 245 kg.'], limitations: ['La source ne fournit pas de débit à 10 bar.', 'Le visuel est commun à la gamme horizontale.'] },
	specifications: [
		{ label: 'Débit mesuré selon ISO 1217', value: '1 000 L/min à 6 bar ; 900 L/min à 8 bar', evidenceIds: [evidenceId] }, { label: 'Pression maximale', value: '10 bar', evidenceIds: [evidenceId] }, { label: 'Cuve', value: '500 l', evidenceIds: [evidenceId] }, { label: 'Puissance moteur', value: '7,5 kW', evidenceIds: [evidenceId] },
		{ label: 'Alimentation', value: '400 V triphasé, 50 Hz', evidenceIds: [evidenceId] }, { label: 'Niveau de pression acoustique', value: '80 dB(A) à la pression maximale, selon ISO 2151 / ISO 9614-2, tolérance ±3 dB', evidenceIds: [evidenceId] }, { label: 'Poids', value: '245 kg', evidenceIds: [evidenceId] },
		{ label: 'Cylindres', value: '2', evidenceIds: [evidenceId] }, { label: 'Dimensions (L × P × H)', value: '1 970 × 770 × 1 330 mm', evidenceIds: [evidenceId] },
		{ label: 'Entraînement', value: 'Accouplement direct 1:1, sans courroie', evidenceIds: [evidenceId] }, { label: 'Lubrification', value: 'Anneau d’huile', evidenceIds: [evidenceId] },
	],
	evidence: [{ id: evidenceId, sourceUrl: 'https://th.kaeser.com/EN/download.ashx?id=tcm%3A58-5902', sourceLabel: 'KAESER, brochure EUROCOMP, édition 02/2026', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Tableaux des variantes horizontales 10 et 15 bar ; débits déclarés comme mesurés selon ISO 1217.' }],
	fieldSources: { tankLiters: [evidenceId], maxPressureBar: [evidenceId], fadCurve: [evidenceId], oilType: [evidenceId], noiseDb: [evidenceId], powerKw: [evidenceId], weightKg: [evidenceId], mobility: [evidenceId], voltage: [evidenceId], phase: [evidenceId], status: [evidenceId] }, notes: ['Le champ fadCurve ne contient aucune estimation.'],
};

export default product;
