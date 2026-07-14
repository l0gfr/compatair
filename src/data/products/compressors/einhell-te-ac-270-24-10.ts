const product = {
		id: 'einhell-te-ac-270-24-10', slug: 'einhell-te-ac-270-24-10', brand: 'Einhell', model: 'TE-AC 270/24/10', mpn: '4010450', ean: '4006825594461',
		tankLiters: 24, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 140 }, { pressureBar: 4, litersPerMinute: 127 }, { pressureBar: 7, litersPerMinute: 100 }], intakeFlowLpm: 270, oilType: 'oil', noiseDb: 74, powerKw: 1.8, weightKg: 26.95, mobility: 'mobile', voltage: '220-240 V', phase: 'single-phase', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-te-ac-270-24-10.webp', alt: 'Compresseur Einhell TE-AC 270/24/10', sourceUrl: 'https://www.einhell.de/p/4010450-te-ac-270-24-10/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Ce modèle lubrifié de 24 litres conserve 100 L/min à 7 bar selon la fiche constructeur. Sa pression maximale de 10 bar ne doit pas être confondue avec la pression du dernier point de débit publié.', verifiedFacts: ['Einhell publie 140 L/min à 0 bar, 127 L/min à 4 bar et 100 L/min à 7 bar.', 'La fiche indique 1,8 kW, 270 L/min aspirés, 74 dB(A) et un poids de 26,95 kg.'], limitations: ['Aucun débit restitué n’est publié entre 7 et 10 bar.', 'Le débit aspiré de 270 L/min ne participe pas au résultat.'] },
		evidence: [{ id: 'einhell-4010450-official', sourceUrl: 'https://www.einhell.de/p/4010450-te-ac-270-24-10/', sourceLabel: 'Einhell Allemagne, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4010450-official'], ean: ['einhell-4010450-official'], noiseDb: ['einhell-4010450-official'] }, notes: ['Le niveau sonore publié mesure la pression acoustique au poste d’écoute (LpA).'],
	};

export default product;
