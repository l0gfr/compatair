const product = {
	id: 'metabo-basic-280-50-w-of', slug: 'metabo-basic-280-50-w-of', brand: 'Metabo', model: 'Basic 280-50 W OF', mpn: '601529000',
	tankLiters: 50, maxPressureBar: 8, fadCurve: [{ pressureBar: 6.4, litersPerMinute: 130 }], intakeFlowLpm: 280, oilType: 'oil-free', powerKw: 1.7, mobility: 'mobile', voltage: '230 V / 50 Hz', phase: 'single-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/metabo-basic-280-50-w-of.webp', alt: 'Compresseur Metabo Basic 280-50 W OF', sourceUrl: 'https://www.metabo.com/com/en/products/tools/compressed-air/compressors/mobile-workshop-compressors/basic-280-50-w-of-compressor/601529000', sourceLabel: 'Visuel officiel Metabo' },
	editorial: { overview: 'Le Basic 280-50 W OF est un compresseur mobile sans huile de 50 litres. Metabo publie 130 L/min de débit effectif à 80 % de la pression maximale, soit 6,4 bar.', verifiedFacts: ['La fiche constructeur distingue 280 L/min aspirés, 140 L/min de remplissage et 130 L/min effectifs.', 'La pression maximale est de 8 bar et la puissance nominale de 1,7 kW.'], limitations: ['Le constructeur ne publie qu’un point de débit effectif : aucune valeur n’est extrapolée à une autre pression.'] },
	evidence: [{ id: 'metabo-601529000-official', sourceUrl: 'https://www.metabo.com/com/en/products/tools/compressed-air/compressors/mobile-workshop-compressors/basic-280-50-w-of-compressor/601529000', sourceLabel: 'Metabo, fiche officielle Basic 280-50 W OF', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Débit effectif publié à 80 % de la pression maximale.' }],
	fieldSources: { fadCurve: ['metabo-601529000-official'], intakeFlowLpm: ['metabo-601529000-official'], oilType: ['metabo-601529000-official'], powerKw: ['metabo-601529000-official'], maxPressureBar: ['metabo-601529000-official'] }, notes: ['Point effectif unique à 6,4 bar.'],
};

export default product;
