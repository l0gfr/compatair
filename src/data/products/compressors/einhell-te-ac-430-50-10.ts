const product = {
		id: 'einhell-te-ac-430-50-10', slug: 'einhell-te-ac-430-50-10', brand: 'Einhell', model: 'TE-AC 430/50/10', mpn: '4010810', ean: '4006825672053',
		variant: { familyId: 'einhell-te-ac-430-10', label: 'Cuve 50 L', distinguishingAttributes: { tank: '50 L' } },
		tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 230 }, { pressureBar: 4, litersPerMinute: 210 }, { pressureBar: 7, litersPerMinute: 200 }], intakeFlowLpm: 430, oilType: 'oil', noiseDb: 73.5, powerKw: 3, weightKg: 56.4, mobility: 'mobile', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-te-ac-430-50-10.webp', alt: 'Compresseur Einhell TE-AC 430/50/10', sourceUrl: 'https://www.einhell.fr/p/4010810-te-ac-430-50-10/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le TE-AC 430/50/10 reprend une courbe de débit élevée dans un format de 50 litres. Il fournit 200 L/min à 7 bar selon Einhell, malgré un débit aspiré affiché de 430 L/min.', verifiedFacts: ['La fiche publie 230 L/min à 0 bar, 210 L/min à 4 bar et 200 L/min à 7 bar.', 'Einhell annonce 10 bar maximum, 3 kW, 56,4 kg et 73,5 dB(A) de pression acoustique.'], limitations: ['Aucun débit restitué n’est documenté entre 7 et 10 bar.', 'Le poids et la puissance électrique doivent être vérifiés face aux contraintes du lieu d’utilisation.'] },
		evidence: [{ id: 'einhell-4010810-official', sourceUrl: 'https://www.einhell.fr/p/4010810-te-ac-430-50-10/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4010810-official'], ean: ['einhell-4010810-official'], noiseDb: ['einhell-4010810-official'] }, notes: ['Le niveau sonore publié mesure la pression acoustique au poste d’écoute (LpA).'],
	};

export default product;
