const product = {
	id: 'metabo-basic-250-24-w-of', slug: 'metabo-basic-250-24-w-of', brand: 'Metabo', model: 'Basic 250-24 W OF', mpn: '601532000',
	variant: { familyId: 'metabo-basic-250-w-of', label: 'Cuve 24 L', distinguishingAttributes: { tank: '24 L' } },
	tankLiters: 24, maxPressureBar: 8, fadCurve: [{ pressureBar: 6.4, litersPerMinute: 100 }], intakeFlowLpm: 220, oilType: 'oil-free', noiseDb: 84, powerKw: 1.5, weightKg: 24, mobility: 'mobile', voltage: '220-240 V / 50 Hz', phase: 'single-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/metabo-basic-250-24-w-of.webp', alt: 'Compresseur Metabo Basic 250-24 W OF', sourceUrl: 'https://www.metabo.com/com/en/products/tools/compressed-air/compressors/mobile-workshop-compressors/basic-250-24-w-of-compressor/601532000', sourceLabel: 'Visuel officiel Metabo' },
	editorial: { overview: 'Le Basic 250-24 W OF est la variante sans huile et à cuve de 24 litres de la famille Basic 250. Son point effectif officiel est de 100 L/min à 6,4 bar.', verifiedFacts: ['Metabo publie 220 L/min aspirés, 120 L/min de remplissage et 100 L/min effectifs.', 'La fiche indique 8 bar maximum, 1,5 kW et un poids de 24 kg.'], limitations: ['Un seul point effectif est documenté ; le débit à 6 ou 7 bar n’est pas reconstruit.'] },
	evidence: [{ id: 'metabo-601532000-official', sourceUrl: 'https://www.metabo.com/com/en/products/tools/compressed-air/compressors/mobile-workshop-compressors/basic-250-24-w-of-compressor/601532000', sourceLabel: 'Metabo, fiche officielle Basic 250-24 W OF', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Débit effectif publié à 80 % de 8 bar.' }],
	fieldSources: { fadCurve: ['metabo-601532000-official'], intakeFlowLpm: ['metabo-601532000-official'], oilType: ['metabo-601532000-official'], noiseDb: ['metabo-601532000-official'], maxPressureBar: ['metabo-601532000-official'] }, notes: ['Point effectif unique à 6,4 bar.'],
};

export default product;
