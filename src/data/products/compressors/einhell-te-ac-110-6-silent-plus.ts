const product = {
		id: 'einhell-te-ac-110-6-silent-plus', slug: 'einhell-te-ac-110-6-silent-plus', brand: 'Einhell', model: 'TE-AC 110/6 Silent Plus', mpn: '4020600', ean: '4006825640885',
		tankLiters: 6, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 79 }, { pressureBar: 4, litersPerMinute: 55 }, { pressureBar: 7, litersPerMinute: 40 }], intakeFlowLpm: 110, oilType: 'oil-free', noiseDb: 57, powerKw: .55, weightKg: 14.95, mobility: 'portable', voltage: '220-240 V', phase: 'single-phase', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-te-ac-110-6-silent-plus.webp', alt: 'Compresseur silencieux Einhell TE-AC 110/6 Silent Plus', sourceUrl: 'https://www.einhell.de/p/4020600-te-ac-110-6-silent-plus/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Ce compresseur silencieux sans huile associe une cuve de 6 litres à trois débits de sortie publiés. Les 40 L/min annoncés à 7 bar le destinent surtout aux usages peu consommateurs et aux travaux courts.', verifiedFacts: ['Einhell publie 79 L/min à 0 bar, 55 L/min à 4 bar et 40 L/min à 7 bar.', 'La fiche indique 57 dB(A), une cuve de 6 litres, une puissance de 550 W et un poids de 14,95 kg.'], limitations: ['La petite cuve ne compense pas un déficit durable de débit.', 'Le constructeur ne publie pas de débit à la pression maximale de 8 bar.'] },
		evidence: [{ id: 'einhell-4020600-official', sourceUrl: 'https://www.einhell.de/p/4020600-te-ac-110-6-silent-plus/', sourceLabel: 'Einhell Allemagne, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4020600-official'], ean: ['einhell-4020600-official'], noiseDb: ['einhell-4020600-official'] }, notes: ['Le niveau sonore publié mesure la pression acoustique au poste d’écoute (LpA).'],
	};

export default product;
