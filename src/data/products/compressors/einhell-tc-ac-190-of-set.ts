const product = {
		id: 'einhell-tc-ac-190-of-set', slug: 'einhell-tc-ac-190-of-set', brand: 'Einhell', model: 'TC-AC 190 OF Set', mpn: '4020660', ean: '4006825642346',
		tankLiters: 0, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 165 }, { pressureBar: 4, litersPerMinute: 83 }], intakeFlowLpm: 190, oilType: 'oil-free', confidence: 'B', status: 'active',
		image: { src: '/images/products/einhell-tc-ac-190-of-set.webp', alt: 'Compresseur Einhell TC-AC 190 OF Set', sourceUrl: 'https://www.einhell.fr/p/4020660-tc-ac-190-of-set/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le TC-AC 190 OF Set est un compresseur sans cuve et sans huile. Sa fiche documente le débit jusqu’à 4 bar, mais pas à 6,3 ou 7 bar, pressions courantes dans les fiches des outils étudiés.', verifiedFacts: ['Einhell publie 165 L/min à 0 bar et 83 L/min à 4 bar.', 'La pression maximale annoncée est de 8 bar et le débit aspiré de 190 L/min.'], limitations: ['CompatAir ne prolonge pas la courbe au-delà de 4 bar.', 'L’absence de cuve ne permet pas de déduire la tenue d’un usage continu sans débit restitué à la pression demandée.'] },
		evidence: [{ id: 'einhell-4020660-official', sourceUrl: 'https://www.einhell.fr/p/4020660', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-13', confidence: 'B' }],
		fieldSources: { mpn: ['einhell-4020660-official'], ean: ['einhell-4020660-official'], tankLiters: ['einhell-4020660-official'], maxPressureBar: ['einhell-4020660-official'], fadCurve: ['einhell-4020660-official'], intakeFlowLpm: ['einhell-4020660-official'], oilType: ['einhell-4020660-official'] }, notes: ['Aucune valeur publiée à 6,3 ou 7 bar dans la fiche consultée.'],
	};

export default product;
