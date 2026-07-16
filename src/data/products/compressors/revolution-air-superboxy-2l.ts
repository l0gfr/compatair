const product = {
		id: 'revolution-air-superboxy-2l', slug: 'revolution-air-superboxy-2l', brand: 'Revolution’Air', model: 'SuperBoxy 2 L 1,5 HP', mpn: '425018', ean: '3283494250183',
		tankLiters: 2, maxPressureBar: 8, fadCurve: [{ pressureBar: 3, litersPerMinute: 105 }, { pressureBar: 7, litersPerMinute: 85 }], intakeFlowLpm: 180, oilType: 'oil-free', noiseDb: 97, weightKg: 8.6, mobility: 'portable', confidence: 'A', status: 'active',
		image: { src: '/images/products/revolution-air-superboxy-2l.webp', alt: 'Compresseur portable Revolution Air SuperBoxy 2 L', sourceUrl: 'https://www.mecafer.com/compresseurs/compresseur-superboxy-2l-15hp', sourceLabel: 'Visuel officiel Revolution’Air' },
		editorial: { overview: 'Le SuperBoxy est un compresseur sans huile de 2 litres conçu pour être transporté avec ses accessoires. Deux mesures de débit restitué permettent un dimensionnement entre 3 et 7 bar.', verifiedFacts: ['La fiche publie 105 L/min restitués à 3 bar et 85 L/min à 7 bar.', 'Le modèle est donné pour 8 bar maximum, 180 L/min aspirés, 8,6 kg et une cuve de 2 litres.'], limitations: ['Le fabricant ne publie aucun point de débit restitué à 8 bar.', 'La réserve de 2 litres destine surtout ce modèle aux usages brefs et au gonflage.'] },
		evidence: [{ id: 'revolution-air-425018-official', sourceUrl: 'https://www.mecafer.com/compresseurs/compresseur-superboxy-2l-15hp', sourceLabel: 'Mecafer, fiche officielle SuperBoxy', sourceType: 'manufacturer', retrievedAt: '2026-07-16', confidence: 'A' }],
		fieldSources: { fadCurve: ['revolution-air-425018-official'], ean: ['revolution-air-425018-official'], noiseDb: ['revolution-air-425018-official'], maxPressureBar: ['revolution-air-425018-official'] }, notes: ['Le niveau de 97 dB(A) est une puissance acoustique LwA.'],
	};

export default product;
