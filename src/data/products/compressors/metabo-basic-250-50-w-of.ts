const product = {
	id: 'metabo-basic-250-50-w-of', slug: 'metabo-basic-250-50-w-of', brand: 'Metabo', model: 'Basic 250-50 W OF', mpn: '601535000',
	variant: { familyId: 'metabo-basic-250-w-of', label: 'Cuve 50 L', distinguishingAttributes: { tank: '50 L' } },
	tankLiters: 50, maxPressureBar: 8, fadCurve: [{ pressureBar: 6.4, litersPerMinute: 100 }], intakeFlowLpm: 220, oilType: 'oil-free', noiseDb: 84, powerKw: 1.5, weightKg: 29, mobility: 'mobile', voltage: '220-240 V / 50 Hz', phase: 'single-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/metabo-basic-250-50-w-of.webp', alt: 'Compresseur Metabo Basic 250-50 W OF', sourceUrl: 'https://www.metabo.com/com/en/products/tools/compressed-air/compressors/mobile-workshop-compressors/basic-250-50-w-of-compressor/601535000', sourceLabel: 'Visuel officiel Metabo' },
	editorial: { overview: 'Le Basic 250-50 W OF reprend le groupe sans huile de la version 24 litres avec une cuve de 50 litres. Le débit effectif reste 100 L/min à 6,4 bar.', verifiedFacts: ['Metabo sépare 220 L/min aspirés, 120 L/min de remplissage et 100 L/min effectifs.', 'La cuve passe à 50 litres sans modifier le débit effectif publié.'], limitations: ['Le volume de cuve ne doit pas être interprété comme une hausse de débit.', 'Aucune valeur n’est déduite hors du point officiel à 6,4 bar.'] },
	evidence: [{ id: 'metabo-601535000-official', sourceUrl: 'https://www.metabo.com/com/en/products/tools/compressed-air/compressors/mobile-workshop-compressors/basic-250-50-w-of-compressor/601535000', sourceLabel: 'Metabo, fiche officielle Basic 250-50 W OF', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Débit effectif publié à 80 % de 8 bar.' }],
	fieldSources: { fadCurve: ['metabo-601535000-official'], intakeFlowLpm: ['metabo-601535000-official'], oilType: ['metabo-601535000-official'], weightKg: ['metabo-601535000-official'] }, notes: ['Point effectif unique à 6,4 bar.'],
};

export default product;
