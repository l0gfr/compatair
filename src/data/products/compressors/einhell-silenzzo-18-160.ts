const product = {
		id: 'einhell-silenzzo-18-160', slug: 'einhell-silenzzo-18-160', brand: 'Einhell', model: 'SILENZZO 18/160', mpn: '4020385', ean: '4006825681314',
		tankLiters: 6, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 95 }, { pressureBar: 4, litersPerMinute: 60 }, { pressureBar: 7, litersPerMinute: 40 }], intakeFlowLpm: 160, oilType: 'oil-free', weightKg: 17.27, mobility: 'portable', voltage: '18 V', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-silenzzo-18-160.webp', alt: 'Compresseur à batterie Einhell SILENZZO 18/160', sourceUrl: 'https://www.einhell.de/p/4020385-silenzzo-18-160/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le SILENZZO 18/160 est un compresseur portable sans huile, alimenté par une batterie 18 V et doté d’une cuve de 6 litres. Son débit de sortie est documenté jusqu’à 7 bar.', verifiedFacts: ['Einhell publie 95 L/min à 0 bar, 60 L/min à 4 bar et 40 L/min à 7 bar.', 'La fiche indique une cuve de 6 litres, une pression maximale de 8 bar et un poids de 17,27 kg.'], limitations: ['L’autonomie réelle varie avec la capacité et l’état de la batterie.', 'Les 160 L/min aspirés ne sont pas utilisés pour le verdict.'] },
		evidence: [{ id: 'einhell-4020385-official', sourceUrl: 'https://www.einhell.de/p/4020385-silenzzo-18-160/', sourceLabel: 'Einhell Allemagne, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4020385-official'], ean: ['einhell-4020385-official'] }, notes: ['Batterie et chargeur non inclus selon la fiche constructeur.'],
	};

export default product;
