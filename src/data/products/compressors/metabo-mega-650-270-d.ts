const product = {
	id: 'metabo-mega-650-270-d', slug: 'metabo-mega-650-270-d', brand: 'Metabo', model: 'Mega 650-270 D', mpn: '601543000',
	tankLiters: 270, maxPressureBar: 11, fadCurve: [{ pressureBar: 8.8, litersPerMinute: 450 }], intakeFlowLpm: 650, oilType: 'oil', noiseDb: 88, powerKw: 4, weightKg: 170, mobility: 'mobile', voltage: '380-415 V / 50 Hz', phase: 'three-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/metabo-mega-650-270-d.webp', alt: 'Compresseur Metabo Mega 650-270 D', sourceUrl: 'https://www.metabo.com/com/en/tools/compressed-air/compressors/mobile-workshop-compressors/mega-650-270-d-compressor/601543000', sourceLabel: 'Visuel officiel Metabo' },
	editorial: { overview: 'Le Mega 650-270 D est un compresseur triphasé de 4 kW sur cuve de 270 litres. Metabo publie 450 L/min effectifs à 8,8 bar.', verifiedFacts: ['La fiche indique 650 L/min aspirés et 520 L/min de remplissage.', 'La pression maximale est de 11 bar et le poids publié de 170 kg.'], limitations: ['Le point de débit effectif à 8,8 bar ne forme pas une courbe complète.'] },
	evidence: [{ id: 'metabo-601543000-official', sourceUrl: 'https://www.metabo.com/com/en/tools/compressed-air/compressors/mobile-workshop-compressors/mega-650-270-d-compressor/601543000', sourceLabel: 'Metabo, fiche officielle Mega 650-270 D', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Débit effectif publié à 80 % de 11 bar.' }],
	fieldSources: { fadCurve: ['metabo-601543000-official'], intakeFlowLpm: ['metabo-601543000-official'], powerKw: ['metabo-601543000-official'], weightKg: ['metabo-601543000-official'], maxPressureBar: ['metabo-601543000-official'] }, notes: ['Point effectif unique à 8,8 bar.'],
};

export default product;
