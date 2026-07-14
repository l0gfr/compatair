const product = {
		id: 'metabo-basic-250-50-w', slug: 'metabo-basic-250-50-w', brand: 'Metabo', model: 'Basic 250-50 W', mpn: '601534000', ean: '4007430244437',
		variant: { familyId: 'metabo-basic-250-w', label: 'Cuve 50 L', distinguishingAttributes: { tank: '50 L' } },
		tankLiters: 50, maxPressureBar: 8, fadCurve: [{ pressureBar: 6.4, litersPerMinute: 95 }], intakeFlowLpm: 200, oilType: 'oil', noiseDb: 81, powerKw: 1.5, weightKg: 32, mobility: 'mobile', voltage: '220-240 V / 50 Hz', phase: 'single-phase', confidence: 'A', status: 'active',
		image: { src: '/images/products/metabo-basic-250-50-w.webp', alt: 'Compresseur Metabo Basic 250-50 W', sourceUrl: 'https://www.metabo.com/com/en/products/tools/compressed-air/compressors/mobile-workshop-compressors', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'Le Basic 250-50 W utilise le même débit effectif publié de 95 L/min à 6,4 bar que la version 24 litres, avec une cuve portée à 50 litres. Le volume de stockage supplémentaire ne devient pas un débit supérieur.', verifiedFacts: ['Metabo publie 95 L/min effectifs à 6,4 bar, 200 L/min aspirés et 8 bar maximum.', 'La fiche indique une puissance de 1,5 kW, un poids de 32 kg et 81 dB(A) de pression acoustique.'], limitations: ['Un seul point de débit effectif est publié.', 'La cuve de 50 litres ne justifie aucune extrapolation du débit à une autre pression.'] },
		evidence: [{ id: 'metabo-601534000-official', sourceUrl: 'https://at.metabo.com/de/maschinen/druckluft/kompressoren/mobile-werkstatt-kompressoren/basic-250-50-w-601534000-kompressor.html', sourceLabel: 'Metabo, fiche produit officielle Basic 250-50 W', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A', notes: 'Débit effectif publié à 80 % de la pression maximale.' }],
		fieldSources: { fadCurve: ['metabo-601534000-official'], ean: ['metabo-601534000-official'], noiseDb: ['metabo-601534000-official'] }, notes: ['Point effectif unique à 6,4 bar.'],
	};

export default product;
