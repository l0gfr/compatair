const product = {
		id: 'metabo-basic-250-24-w', slug: 'metabo-basic-250-24-w', brand: 'Metabo', model: 'Basic 250-24 W', mpn: '601533000', ean: '4007430244420',
		variant: { familyId: 'metabo-basic-250-w', label: 'Cuve 24 L', distinguishingAttributes: { tank: '24 L' } },
		tankLiters: 24, maxPressureBar: 8, fadCurve: [{ pressureBar: 6.4, litersPerMinute: 95 }], intakeFlowLpm: 200, oilType: 'oil', noiseDb: 81, powerKw: 1.5, weightKg: 27, mobility: 'mobile', voltage: '220-240 V / 50 Hz', phase: 'single-phase', confidence: 'A', status: 'active',
		image: { src: '/images/products/metabo-basic-250-24-w.webp', alt: 'Compresseur Metabo Basic 250-24 W', sourceUrl: 'https://www.metabo.com/com/en/products/tools/compressed-air/compressors/mobile-workshop-compressors', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'Le Basic 250-24 W est un compresseur lubrifié de 24 litres. Metabo distingue 200 L/min aspirés du débit effectif de 95 L/min mesuré à 80 % de la pression maximale, soit 6,4 bar.', verifiedFacts: ['Metabo publie un débit effectif de 95 L/min à 6,4 bar pour une pression maximale de 8 bar.', 'La fiche indique 1,5 kW, 27 kg et un niveau de pression acoustique de 81 dB(A).'], limitations: ['Le point unique à 6,4 bar ne permet pas de reconstituer une courbe.', 'CompatAir ne transpose pas automatiquement ce débit vers 6,3 bar.'] },
		evidence: [{ id: 'metabo-601533000-official', sourceUrl: 'https://de.metabo.com/de/maschinen/druckluft/kompressoren/mobile-werkstatt-kompressoren/basic-250-24-w-601533000-kompressor.html', sourceLabel: 'Metabo, fiche produit officielle Basic 250-24 W', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A', notes: 'Débit effectif publié à 80 % de la pression maximale.' }],
		fieldSources: { fadCurve: ['metabo-601533000-official'], ean: ['metabo-601533000-official'], noiseDb: ['metabo-601533000-official'], maxPressureBar: ['metabo-601533000-official'] }, notes: ['Point effectif unique à 6,4 bar.'],
	};

export default product;
