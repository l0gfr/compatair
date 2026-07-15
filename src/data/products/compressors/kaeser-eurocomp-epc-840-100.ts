const evidenceId = 'kaeser-eurocomp-2026-brochure';

const product = {
	id: 'kaeser-eurocomp-epc-840-100', slug: 'kaeser-eurocomp-epc-840-100', brand: 'KAESER', model: 'EUROCOMP EPC 840-100',
	variant: { familyId: 'kaeser-eurocomp-horizontal', label: '10 bar, cuve 90 l', distinguishingAttributes: { pression: '10 bar', cuve: '90 l', puissance: '4 kW' } },
	tankLiters: 90, maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 590 }, { pressureBar: 8, litersPerMinute: 530 }], oilType: 'oil', noiseDb: 77, powerKw: 4, weightKg: 100, mobility: 'fixed', voltage: '400 V / 50 Hz', phase: 'three-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/kaeser-eurocomp-horizontal.webp', alt: 'Compresseur KAESER EUROCOMP à cuve horizontale', sourceUrl: 'https://nz.kaeser.com/products/reciprocating-compressors/stationary-reciprocating-compressors/oil-lubricated-workshop-compressors/', sourceLabel: 'Visuel officiel de la gamme KAESER EUROCOMP horizontale' },
	editorial: { overview: 'Le KAESER EUROCOMP EPC 840-100 est une version triphasée de 4 kW sur cuve de 90 litres. Les points de débit publiés selon ISO 1217 sont 590 L/min à 6 bar et 530 L/min à 8 bar.', verifiedFacts: ['La pression maximale est de 10 bar.', 'Le constructeur publie 77 dB(A) et un poids de 100 kg.'], limitations: ['Le débit à 10 bar n’est pas documenté.', 'Le visuel est celui de la gamme horizontale, pas une photo contractuelle de la variante.'] },
	specifications: [
		{ label: 'Débit mesuré selon ISO 1217', value: '590 L/min à 6 bar ; 530 L/min à 8 bar', evidenceIds: [evidenceId] }, { label: 'Pression maximale', value: '10 bar', evidenceIds: [evidenceId] }, { label: 'Cuve', value: '90 l', evidenceIds: [evidenceId] }, { label: 'Puissance moteur', value: '4 kW', evidenceIds: [evidenceId] },
		{ label: 'Alimentation', value: '400 V triphasé, 50 Hz', evidenceIds: [evidenceId] }, { label: 'Niveau de pression acoustique', value: '77 dB(A) à la pression maximale, selon ISO 2151 / ISO 9614-2, tolérance ±3 dB', evidenceIds: [evidenceId] }, { label: 'Poids', value: '100 kg', evidenceIds: [evidenceId] },
		{ label: 'Cylindres', value: '2', evidenceIds: [evidenceId] }, { label: 'Dimensions (L × P × H)', value: '1 150 × 600 × 960 mm', evidenceIds: [evidenceId] },
		{ label: 'Entraînement', value: 'Accouplement direct 1:1, sans courroie', evidenceIds: [evidenceId] }, { label: 'Lubrification', value: 'Anneau d’huile', evidenceIds: [evidenceId] },
	],
	evidence: [{ id: evidenceId, sourceUrl: 'https://th.kaeser.com/EN/download.ashx?id=tcm%3A58-5902', sourceLabel: 'KAESER, brochure EUROCOMP, édition 02/2026', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Tableaux des variantes horizontales 10 et 15 bar ; débits déclarés comme mesurés selon ISO 1217.' }],
	fieldSources: { tankLiters: [evidenceId], maxPressureBar: [evidenceId], fadCurve: [evidenceId], oilType: [evidenceId], noiseDb: [evidenceId], powerKw: [evidenceId], weightKg: [evidenceId], mobility: [evidenceId], voltage: [evidenceId], phase: [evidenceId], status: [evidenceId] }, notes: ['Débits limités aux deux points officiels.'],
};

export default product;
