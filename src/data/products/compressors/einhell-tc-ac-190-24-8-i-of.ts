const product = {
		id: 'einhell-tc-ac-190-24-8-i-of', slug: 'einhell-tc-ac-190-24-8-i-of', brand: 'Einhell', model: 'TC-AC 190/24/8 I OF', mpn: '4007375', ean: '4006825684025',
		tankLiters: 24, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 110 }, { pressureBar: 4, litersPerMinute: 75 }, { pressureBar: 7, litersPerMinute: 55 }], intakeFlowLpm: 190, dutyCycle: .5, oilType: 'oil-free', noiseDb: 76, powerKw: 1.1, weightKg: 21.5, mobility: 'mobile', voltage: '220-240 V', phase: 'single-phase', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-tc-ac-190-24-8-i-of.webp', alt: 'Compresseur Einhell TC-AC 190/24/8 I OF', sourceUrl: 'https://www.einhell.fr/p/4007375-tc-ac-190-24-8-i-of/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Ce compresseur sans huile combine une cuve de 24 litres et un moteur à induction. Son débit restitué est documenté jusqu’à 7 bar, avec un fonctionnement intermittent (S3, 50 %) qui limite sa capacité moyenne.', verifiedFacts: ['La fiche publie 110 L/min à 0 bar, 75 L/min à 4 bar et 55 L/min à 7 bar.', 'Einhell indique une pression maximale de 8 bar, un fonctionnement intermittent (S3, 50 %) et un poids de 21,5 kg.'], limitations: ['Le fonctionnement intermittent (S3, 50 %) doit être pris en compte pour une session prolongée.', 'La fiche ne fournit pas de débit restitué à 8 bar.'] },
		evidence: [{ id: 'einhell-4007375-official', sourceUrl: 'https://www.einhell.fr/p/4007375-tc-ac-190-24-8-i-of/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4007375-official'], ean: ['einhell-4007375-official'], dutyCycle: ['einhell-4007375-official'] }, notes: ['Fonctionnement intermittent annoncé à 50 % (code S3 du fabricant).'],
	};

export default product;
