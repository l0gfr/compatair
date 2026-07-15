const product = {
		id: 'metabo-power-180-5-w-of', slug: 'metabo-power-180-5-w-of', brand: 'Metabo', model: 'Power 180-5 W OF', mpn: '601531000', ean: '4007430244406',
		tankLiters: 5, maxPressureBar: 8, fadCurve: [{ pressureBar: 6.4, litersPerMinute: 75 }], intakeFlowLpm: 160, oilType: 'oil-free', noiseDb: 82, powerKw: 1.1, weightKg: 16, mobility: 'portable', voltage: '230 V / 50 Hz', phase: 'single-phase', confidence: 'A', status: 'active',
		image: { src: '/images/products/metabo-power-180-5-w-of.webp', alt: 'Compresseur Metabo Power 180-5 W OF', sourceUrl: 'https://de.metabo.com/de/maschinen/druckluft/kompressoren/baustellen-kompressoren/power-180-5-w-of-601531000-kompressor.html', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'Le Power 180-5 W OF est un compresseur de chantier portable et sans huile. La fiche officielle publie 75 L/min effectifs à 6,4 bar, contre 160 L/min aspirés.', verifiedFacts: ['Le débit effectif publié est de 75 L/min à 80 % de la pression maximale de 8 bar.', 'Metabo indique une cuve de 5 litres, 1,1 kW, un poids de 16 kg et 82 dB(A) de pression acoustique.'], limitations: ['Un seul point de débit effectif est disponible.', 'La fiche ne permet pas de conclure automatiquement pour un outil spécifié à 6,2 ou 6,3 bar.'] },
		evidence: [{ id: 'metabo-601531000-official', sourceUrl: 'https://de.metabo.com/de/maschinen/druckluft/kompressoren/baustellen-kompressoren/power-180-5-w-of-601531000-kompressor.html', sourceLabel: 'Metabo, fiche produit officielle Power 180-5 W OF', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A', notes: 'Débit effectif publié à 80 % de la pression maximale.' }],
		fieldSources: { fadCurve: ['metabo-601531000-official'], ean: ['metabo-601531000-official'], noiseDb: ['metabo-601531000-official'], maxPressureBar: ['metabo-601531000-official'] }, notes: ['Point effectif unique à 6,4 bar.'],
	};

export default product;
