const product = {
		id: 'metabo-mega-400-50-w', slug: 'metabo-mega-400-50-w', brand: 'Metabo', model: 'Mega 400-50 W', mpn: '601536000', ean: '4007430244451',
		tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 8, litersPerMinute: 260 }], intakeFlowLpm: 400, oilType: 'oil', noiseDb: 86, powerKw: 2.2, weightKg: 73, mobility: 'mobile', voltage: '220-240 V', phase: 'single-phase', confidence: 'A', status: 'active',
		image: { src: '/images/products/metabo-mega-400-50-w.webp', alt: 'Compresseur Metabo Mega 400-50 W', sourceUrl: 'https://at.metabo.com/de/maschinen/druckluft/kompressoren/mobile-werkstatt-kompressoren/mega-400-50-w-601536000-kompressor.html', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'Le Mega 400-50 W est un compresseur d’atelier lubrifié de 50 litres alimenté en monophasé. Metabo publie 260 L/min effectifs à 8 bar, sans confondre cette valeur avec les 400 L/min aspirés.', verifiedFacts: ['Le débit effectif annoncé est de 260 L/min à 8 bar pour une pression maximale de 10 bar.', 'La fiche publie 2,2 kW, 73 kg, une alimentation de 220 à 240 V et 86 dB(A) de pression acoustique.'], limitations: ['Le point à 8 bar ne prouve pas le débit disponible à 6,2, 6,3 ou 7 bar.', 'Le poids de 73 kg et l’alimentation doivent être vérifiés avant installation.'] },
		evidence: [{ id: 'metabo-601536000-official', sourceUrl: 'https://at.metabo.com/de/maschinen/druckluft/kompressoren/mobile-werkstatt-kompressoren/mega-400-50-w-601536000-kompressor.html', sourceLabel: 'Metabo, fiche produit officielle Mega 400-50 W', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A', notes: 'Débit effectif publié à 80 % de la pression maximale.' }],
		fieldSources: { fadCurve: ['metabo-601536000-official'], ean: ['metabo-601536000-official'], noiseDb: ['metabo-601536000-official'], maxPressureBar: ['metabo-601536000-official'] }, notes: ['Point effectif unique à 8 bar.'],
	};

export default product;
