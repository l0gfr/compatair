const evidenceId = 'kaeser-eurocomp-2026-brochure';

const product = {
	id: 'kaeser-eurocomp-epc-630-100', slug: 'kaeser-eurocomp-epc-630-100', brand: 'KAESER', model: 'EUROCOMP EPC 630-100',
	variant: { familyId: 'kaeser-eurocomp-horizontal', label: '10 bar, cuve 90 l', distinguishingAttributes: { pression: '10 bar', cuve: '90 l', puissance: '3 kW' } },
	tankLiters: 90, maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 410 }, { pressureBar: 8, litersPerMinute: 375 }], oilType: 'oil', noiseDb: 75, powerKw: 3, weightKg: 95, mobility: 'fixed', voltage: '400 V / 50 Hz', phase: 'three-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/kaeser-eurocomp-horizontal.webp', alt: 'Compresseur KAESER EUROCOMP à cuve horizontale', sourceUrl: 'https://nz.kaeser.com/products/reciprocating-compressors/stationary-reciprocating-compressors/oil-lubricated-workshop-compressors/', sourceLabel: 'Visuel officiel de la gamme KAESER EUROCOMP horizontale' },
	editorial: { overview: 'Le KAESER EUROCOMP EPC 630-100 associe un bloc de 3 kW à une cuve horizontale de 90 litres. Les débits mesurés selon ISO 1217 sont de 410 L/min à 6 bar et 375 L/min à 8 bar.', verifiedFacts: ['La pression maximale publiée est de 10 bar.', 'KAESER indique 75 dB(A) de pression acoustique et 95 kg.'], limitations: ['La source ne publie pas de débit à 10 bar.', 'Le visuel officiel est un visuel de gamme.'] },
	specifications: [
		{ label: 'Débit mesuré selon ISO 1217', value: '410 L/min à 6 bar ; 375 L/min à 8 bar', evidenceIds: [evidenceId] }, { label: 'Pression maximale', value: '10 bar', evidenceIds: [evidenceId] }, { label: 'Cuve', value: '90 l', evidenceIds: [evidenceId] }, { label: 'Puissance moteur', value: '3 kW', evidenceIds: [evidenceId] },
		{ label: 'Alimentation', value: '400 V triphasé, 50 Hz', evidenceIds: [evidenceId] }, { label: 'Niveau de pression acoustique', value: '75 dB(A) à la pression maximale, selon ISO 2151 / ISO 9614-2, tolérance ±3 dB', evidenceIds: [evidenceId] }, { label: 'Poids', value: '95 kg', evidenceIds: [evidenceId] },
		{ label: 'Cylindres', value: '2', evidenceIds: [evidenceId] }, { label: 'Dimensions (L × P × H)', value: '1 150 × 570 × 950 mm', evidenceIds: [evidenceId] },
		{ label: 'Entraînement', value: 'Accouplement direct 1:1, sans courroie', evidenceIds: [evidenceId] }, { label: 'Lubrification', value: 'Anneau d’huile', evidenceIds: [evidenceId] },
	],
	evidence: [{ id: evidenceId, sourceUrl: 'https://th.kaeser.com/EN/download.ashx?id=tcm%3A58-5902', sourceLabel: 'KAESER, brochure EUROCOMP, édition 02/2026', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Tableaux des variantes horizontales 10 et 15 bar ; débits déclarés comme mesurés selon ISO 1217.' }],
	fieldSources: { tankLiters: [evidenceId], maxPressureBar: [evidenceId], fadCurve: [evidenceId], oilType: [evidenceId], noiseDb: [evidenceId], powerKw: [evidenceId], weightKg: [evidenceId], mobility: [evidenceId], voltage: [evidenceId], phase: [evidenceId], status: [evidenceId] }, notes: ['Le champ fadCurve ne contient aucune valeur extrapolée.'],
};

export default product;
