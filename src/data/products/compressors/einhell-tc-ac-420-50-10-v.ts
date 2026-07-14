const product = {
		id: 'einhell-tc-ac-420-50-10-v', slug: 'einhell-tc-ac-420-50-10-v', brand: 'Einhell', model: 'TC-AC 420/50/10 V', mpn: '4010495', ean: '4006825638264',
		tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 245 }, { pressureBar: 4, litersPerMinute: 200 }, { pressureBar: 7, litersPerMinute: 150 }], intakeFlowLpm: 420, oilType: 'oil', noiseDb: 75.1, powerKw: 2.2, weightKg: 38.95, mobility: 'mobile', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-tc-ac-420-50-10-v.webp', alt: 'Compresseur Einhell TC-AC 420/50/10 V', sourceUrl: 'https://www.einhell.fr/p/4010495/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le TC-AC 420/50/10 V est un compresseur vertical lubrifié de 50 litres. Sa fiche distingue les 420 L/min aspirés des trois points de débit restitué, dont 150 L/min à 7 bar.', verifiedFacts: ['Einhell publie 245 L/min à 0 bar, 200 L/min à 4 bar et 150 L/min à 7 bar.', 'La fiche indique 10 bar maximum, 2,2 kW, 38,95 kg et un niveau de pression acoustique de 75,1 dB(A).'], limitations: ['Aucun point de débit restitué n’est publié entre 7 et 10 bar.', 'Le niveau sonore est repris comme LpA et ne doit pas être comparé directement à une puissance acoustique LwA.'] },
		evidence: [{ id: 'einhell-4010495-official', sourceUrl: 'https://www.einhell.fr/p/4010495/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4010495-official'], ean: ['einhell-4010495-official'], noiseDb: ['einhell-4010495-official'] }, notes: ['Le niveau sonore publié mesure la pression acoustique au poste d’écoute (LpA).'],
	};

export default product;
