const product = {
		id: 'einhell-tc-ac-270-50-8', slug: 'einhell-tc-ac-270-50-8', brand: 'Einhell', model: 'TC-AC 270/50/8', mpn: '4007360', ean: '4006825665628',
		tankLiters: 50, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 140 }, { pressureBar: 4, litersPerMinute: 125 }, { pressureBar: 7, litersPerMinute: 100 }], intakeFlowLpm: 270, oilType: 'oil', noiseDb: 75, powerKw: 1.8, weightKg: 30.35, mobility: 'mobile', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-tc-ac-270-50-8.webp', alt: 'Compresseur Einhell TC-AC 270/50/8', sourceUrl: 'https://www.einhell.fr/p/4007360-tc-ac-270-50-8/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le TC-AC 270/50/8 est un compresseur lubrifié de 50 litres. Ses trois valeurs restituées permettent une interpolation bornée jusqu’à 7 bar sans utiliser les 270 L/min aspirés.', verifiedFacts: ['Einhell publie 140 L/min à 0 bar, 125 L/min à 4 bar et 100 L/min à 7 bar.', 'La fiche indique 8 bar maximum, 1,8 kW, 30,35 kg et 75 dB(A) de pression acoustique.'], limitations: ['Aucun point de débit restitué n’est publié à 8 bar.', 'La cuve de 50 litres ne compense pas un déficit de débit lors d’un usage continu.'] },
		evidence: [{ id: 'einhell-4007360-official', sourceUrl: 'https://www.einhell.fr/p/4007360-tc-ac-270-50-8/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4007360-official'], ean: ['einhell-4007360-official'], noiseDb: ['einhell-4007360-official'] }, notes: ['Niveau sonore publié en LpA.'],
	};

export default product;
