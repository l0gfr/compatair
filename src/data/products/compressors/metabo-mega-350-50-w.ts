const product = {
	id: 'metabo-mega-350-50-w', slug: 'metabo-mega-350-50-w', brand: 'Metabo', model: 'Mega 350-50 W', mpn: '601589000',
	tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 8, litersPerMinute: 220 }], intakeFlowLpm: 320, oilType: 'oil', powerKw: 2.2, mobility: 'mobile', voltage: '220-240 V / 50 Hz', phase: 'single-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/metabo-mega-350-50-w.webp', alt: 'Compresseur Metabo Mega 350-50 W', sourceUrl: 'https://www.metabo.com/com/en/tools/compressed-air/compressors/mobile-workshop-compressors/mega-350-50-w-compressor/601589000', sourceLabel: 'Visuel officiel Metabo' },
	editorial: { overview: 'Le Mega 350-50 W est un compresseur monophasé lubrifié à cuve de 50 litres. Metabo publie 220 L/min effectifs à 8 bar.', verifiedFacts: ['Le groupe aspire 320 L/min et fournit 250 L/min de remplissage.', 'La puissance nominale est de 2,2 kW pour une pression maximale de 10 bar.'], limitations: ['Le point à 8 bar ne permet pas de calculer un débit à 6,3 ou 10 bar.'] },
	evidence: [{ id: 'metabo-601589000-official', sourceUrl: 'https://www.metabo.com/com/en/tools/compressed-air/compressors/mobile-workshop-compressors/mega-350-50-w-compressor/601589000', sourceLabel: 'Metabo, fiche officielle Mega 350-50 W', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Débit effectif publié à 80 % de 10 bar.' }],
	fieldSources: { fadCurve: ['metabo-601589000-official'], intakeFlowLpm: ['metabo-601589000-official'], oilType: ['metabo-601589000-official'], powerKw: ['metabo-601589000-official'], maxPressureBar: ['metabo-601589000-official'] }, notes: ['Point effectif unique à 8 bar.'],
};

export default product;
