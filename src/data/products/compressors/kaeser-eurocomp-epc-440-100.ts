const evidenceId = 'kaeser-eurocomp-2026-brochure';

const product = {
	id: 'kaeser-eurocomp-epc-440-100', slug: 'kaeser-eurocomp-epc-440-100', brand: 'KAESER', model: 'EUROCOMP EPC 440-100',
	variant: { familyId: 'kaeser-eurocomp-horizontal', label: '10 bar, cuve 90 l', distinguishingAttributes: { pression: '10 bar', cuve: '90 l', puissance: '2,4 kW' } },
	tankLiters: 90, maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 280 }, { pressureBar: 8, litersPerMinute: 260 }], oilType: 'oil', noiseDb: 72, powerKw: 2.4, weightKg: 89, mobility: 'fixed', voltage: '400 V / 50 Hz', phase: 'three-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/kaeser-eurocomp-horizontal.webp', alt: 'Compresseur KAESER EUROCOMP à cuve horizontale', sourceUrl: 'https://nz.kaeser.com/products/reciprocating-compressors/stationary-reciprocating-compressors/oil-lubricated-workshop-compressors/', sourceLabel: 'Visuel officiel de la gamme KAESER EUROCOMP horizontale' },
	editorial: {
		overview: 'Le KAESER EUROCOMP EPC 440-100 est un compresseur triphasé fixe sur cuve horizontale de 90 litres. La brochure 2026 publie 280 L/min à 6 bar et 260 L/min à 8 bar, mesurés selon ISO 1217.',
		verifiedFacts: ['La pression maximale est de 10 bar et la puissance moteur de 2,4 kW.', 'La fiche de gamme indique 72 dB(A) de pression acoustique et un poids de 89 kg.'],
		limitations: ['Aucun débit n’est publié à 10 bar ; aucune extrapolation n’est appliquée.', 'Le visuel officiel est commun à la gamme horizontale.'],
	},
	specifications: [
		{ label: 'Débit mesuré selon ISO 1217', value: '280 L/min à 6 bar ; 260 L/min à 8 bar', evidenceIds: [evidenceId] },
		{ label: 'Pression maximale', value: '10 bar', evidenceIds: [evidenceId] }, { label: 'Cuve', value: '90 l', evidenceIds: [evidenceId] }, { label: 'Puissance moteur', value: '2,4 kW', evidenceIds: [evidenceId] },
		{ label: 'Alimentation', value: '400 V triphasé, 50 Hz', evidenceIds: [evidenceId] }, { label: 'Niveau de pression acoustique', value: '72 dB(A) à la pression maximale, selon ISO 2151 / ISO 9614-2, tolérance ±3 dB', evidenceIds: [evidenceId] },
		{ label: 'Poids', value: '89 kg', evidenceIds: [evidenceId] }, { label: 'Cylindres', value: '2', evidenceIds: [evidenceId] }, { label: 'Dimensions (L × P × H)', value: '1 130 × 500 × 870 mm', evidenceIds: [evidenceId] },
		{ label: 'Entraînement', value: 'Accouplement direct 1:1, sans courroie', evidenceIds: [evidenceId] }, { label: 'Lubrification', value: 'Injection d’huile', evidenceIds: [evidenceId] },
	],
	evidence: [{ id: evidenceId, sourceUrl: 'https://th.kaeser.com/EN/download.ashx?id=tcm%3A58-5902', sourceLabel: 'KAESER, brochure EUROCOMP, édition 02/2026', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Tableaux des variantes horizontales 10 et 15 bar ; débits déclarés comme mesurés selon ISO 1217.' }],
	fieldSources: { tankLiters: [evidenceId], maxPressureBar: [evidenceId], fadCurve: [evidenceId], oilType: [evidenceId], noiseDb: [evidenceId], powerKw: [evidenceId], weightKg: [evidenceId], mobility: [evidenceId], voltage: [evidenceId], phase: [evidenceId], status: [evidenceId] },
	notes: ['Le champ fadCurve conserve uniquement les deux points publiés par KAESER.'],
};

export default product;
