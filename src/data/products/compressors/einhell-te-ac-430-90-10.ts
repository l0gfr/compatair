const product = {
		id: 'einhell-te-ac-430-90-10', slug: 'einhell-te-ac-430-90-10', brand: 'Einhell', model: 'TE-AC 430/90/10', mpn: '4010800', ean: '4006825642339',
		variant: { familyId: 'einhell-te-ac-430-10', label: 'Cuve 90 L', distinguishingAttributes: { tank: '90 L' } },
		tankLiters: 90, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 230 }, { pressureBar: 4, litersPerMinute: 210 }, { pressureBar: 7, litersPerMinute: 200 }], intakeFlowLpm: 430, dutyCycle: 1, oilType: 'oil', noiseDb: 73, confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-te-ac-430-90-10.webp', alt: 'Compresseur Einhell TE-AC 430/90/10', sourceUrl: 'https://www.einhell.fr/p/4010800-te-ac-430-90-10/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le TE-AC 430/90/10 est un compresseur lubrifié de 90 litres. Sa courbe constructeur conserve 200 L/min à 7 bar, valeur directement exploitable pour les outils dont la pression de travail se situe dans la plage documentée.', verifiedFacts: ['Einhell publie 230 L/min à 0 bar, 210 L/min à 4 bar et 200 L/min à 7 bar.', 'La pression maximale annoncée est de 10 bar et le débit aspiré de 430 L/min.'], limitations: ['Les 430 L/min aspirés ne décrivent pas le débit disponible à l’outil.', 'La fiche consultée ne fournit pas de point de débit restitué au-delà de 7 bar.'] },
		evidence: [{ id: 'einhell-4010800-official', sourceUrl: 'https://www.einhell.fr/p/4010800-te-ac-430-90-10/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-13', confidence: 'A' }], notes: [],
	};

export default product;
