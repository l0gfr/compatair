const product = {
		id: 'einhell-te-ac-18-75-li-of-solo', slug: 'einhell-te-ac-18-75-li-of-solo', brand: 'Einhell', model: 'TE-AC 18/75 Li OF-Solo', mpn: '4020410', ean: '4006825672404',
		tankLiters: 5, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 50 }, { pressureBar: 4, litersPerMinute: 32 }, { pressureBar: 7, litersPerMinute: 23 }], intakeFlowLpm: 75, oilType: 'oil-free', weightKg: 7.76, mobility: 'portable', voltage: '18 V', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-te-ac-18-75-li-of-solo.webp', alt: 'Compresseur à batterie Einhell TE-AC 18/75 Li OF-Solo', sourceUrl: 'https://www.einhell.de/p/4020410-te-ac-18-75-li-of-solo/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le TE-AC 18/75 Li OF-Solo est un compresseur sans huile alimenté par une batterie 18 V, avec une cuve de 5 litres. Sa courbe constructeur montre un débit limité à mesure que la pression augmente.', verifiedFacts: ['Le débit publié est de 50 L/min à 0 bar, 32 L/min à 4 bar et 23 L/min à 7 bar.', 'La fiche officielle publie une cuve de 5 litres, une pression maximale de 8 bar et un poids de 7,76 kg.'], limitations: ['L’autonomie dépend de la batterie utilisée et n’est pas convertie en durée de travail.', 'La livraison Solo ne comprend ni batterie ni chargeur.'] },
		evidence: [{ id: 'einhell-4020410-official', sourceUrl: 'https://www.einhell.de/p/4020410-te-ac-18-75-li-of-solo/', sourceLabel: 'Einhell Allemagne, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4020410-official'], ean: ['einhell-4020410-official'], maxPressureBar: ['einhell-4020410-official'] }, notes: ['Batterie et chargeur non inclus selon la fiche constructeur.'],
	};

export default product;
