const product = {
		id: 'einhell-tc-ac-190-50-8', slug: 'einhell-tc-ac-190-50-8', brand: 'Einhell', model: 'TC-AC 190/50/8', mpn: '4007332', ean: '4006825651720',
		tankLiters: 50, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 110 }, { pressureBar: 4, litersPerMinute: 75 }, { pressureBar: 7, litersPerMinute: 55 }], intakeFlowLpm: 165, oilType: 'oil', noiseDb: 75, powerKw: 1.5, weightKg: 26.4, mobility: 'mobile', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-tc-ac-190-50-8.webp', alt: 'Compresseur Einhell TC-AC 190/50/8', sourceUrl: 'https://www.einhell.fr/p/4007332-tc-ac-190-50-8/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le TC-AC 190/50/8 associe une cuve de 50 litres à un groupe lubrifié. Son débit restitué publié tombe à 55 L/min à 7 bar, loin des 165 L/min aspirés.', verifiedFacts: ['La fiche publie 110 L/min à 0 bar, 75 L/min à 4 bar et 55 L/min à 7 bar.', 'Einhell indique 8 bar maximum, 1,5 kW, 26,4 kg et un fonctionnement moteur S2 de 15 minutes.'], limitations: ['La durée S2 de 15 minutes n’est pas convertie en pourcentage de cycle de service.', 'Aucun débit restitué n’est documenté à la pression maximale de 8 bar.'] },
		evidence: [{ id: 'einhell-4007332-official', sourceUrl: 'https://www.einhell.fr/p/4007332-tc-ac-190-50-8/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4007332-official'], ean: ['einhell-4007332-official'], noiseDb: ['einhell-4007332-official'] }, notes: ['Fonctionnement S2 de 15 minutes publié par le constructeur, non assimilé à un duty cycle.'],
	};

export default product;
