const product = {
		id: 'einhell-te-ac-400-50-10-v', slug: 'einhell-te-ac-400-50-10-v', brand: 'Einhell', model: 'TE-AC 400/50/10 V', mpn: '4010472', ean: '4006825622720',
		tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 270 }, { pressureBar: 4, litersPerMinute: 210 }, { pressureBar: 7, litersPerMinute: 155 }], intakeFlowLpm: 400, oilType: 'oil', noiseDb: 76, powerKw: 2.2, weightKg: 42.2, mobility: 'mobile', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-te-ac-400-50-10-v.webp', alt: 'Compresseur Einhell TE-AC 400/50/10 V', sourceUrl: 'https://www.einhell.fr/p/4010472', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le TE-AC 400/50/10 V est un modèle vertical lubrifié de 50 litres. La fiche fournit trois débits restitués et conserve 155 L/min à 7 bar.', verifiedFacts: ['Einhell publie 270 L/min à 0 bar, 210 L/min à 4 bar et 155 L/min à 7 bar.', 'La pression maximale annoncée est de 10 bar, la puissance de 2,2 kW et le poids de 42,2 kg.'], limitations: ['Les 400 L/min aspirés ne sont pas le débit disponible à l’outil.', 'La fiche ne publie aucun point de débit restitué au-delà de 7 bar.'] },
		evidence: [{ id: 'einhell-4010472-official', sourceUrl: 'https://www.einhell.fr/p/4010472', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4010472-official'], ean: ['einhell-4010472-official'], noiseDb: ['einhell-4010472-official'] }, notes: ['Niveau sonore publié en LpA.'],
	};

export default product;
