const product = {
		id: 'einhell-silenzzo-36-210', slug: 'einhell-silenzzo-36-210', brand: 'Einhell', model: 'SILENZZO 36/210', mpn: '4020380', ean: '4006825679359',
		tankLiters: 8, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 120 }, { pressureBar: 4, litersPerMinute: 80 }, { pressureBar: 7, litersPerMinute: 56 }], intakeFlowLpm: 210, oilType: 'oil-free', weightKg: 18.9, mobility: 'portable', voltage: '36 V (2 × 18 V)', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-silenzzo-36-210.webp', alt: 'Compresseur à batterie Einhell SILENZZO 36/210', sourceUrl: 'https://www.einhell.de/p/4020380-silenzzo-36-210/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le SILENZZO 36/210 utilise deux batteries 18 V et une cuve de 8 litres. Malgré 210 L/min aspirés, le débit de sortie publié atteint 56 L/min à 7 bar.', verifiedFacts: ['La fiche publie 120 L/min à 0 bar, 80 L/min à 4 bar et 56 L/min à 7 bar.', 'Einhell documente une pression maximale de 8 bar, une cuve de 8 litres et un poids de 18,9 kg.'], limitations: ['Les deux batteries et le chargeur ne sont pas inclus dans la version Solo.', 'La durée d’usage ne peut pas être déduite sans capacité et profil de décharge des batteries.'] },
		evidence: [{ id: 'einhell-4020380-official', sourceUrl: 'https://www.einhell.de/p/4020380-silenzzo-36-210/', sourceLabel: 'Einhell Allemagne, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4020380-official'], ean: ['einhell-4020380-official'] }, notes: ['Deux batteries 18 V nécessaires et non incluses selon la fiche constructeur.'],
	};

export default product;
