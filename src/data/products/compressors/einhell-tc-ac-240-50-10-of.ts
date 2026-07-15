const product = {
		id: 'einhell-tc-ac-240-50-10-of', slug: 'einhell-tc-ac-240-50-10-of', brand: 'Einhell', model: 'TC-AC 240/50/10 OF', mpn: '4010393', ean: '4006825597295',
		tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 173 }, { pressureBar: 4, litersPerMinute: 107 }, { pressureBar: 7, litersPerMinute: 76 }], intakeFlowLpm: 240, dutyCycle: .25, oilType: 'oil-free', noiseDb: 77, confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-tc-ac-240-50-10-of.webp', alt: 'Compresseur Einhell TC-AC 240/50/10 OF', sourceUrl: 'https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Ce modèle sans huile associe une cuve de 50 litres à une pression maximale publiée de 10 bar. Sa fiche fournit trois points de débit restitué, ce qui permet de comparer le compresseur à un outil sans utiliser les 240 L/min aspirés.', verifiedFacts: ['Le débit publié passe de 173 L/min à 0 bar à 107 L/min à 4 bar, puis 76 L/min à 7 bar.', 'La fiche indique un fonctionnement intermittent limité à 25 % (code S3 du fabricant) et un niveau sonore publié de 77 dB.'], limitations: ['La durée exacte d’une phase de fonctionnement ne peut pas être déduite du seul pourcentage publié.', 'Aucun point de débit restitué n’est publié entre 7 et 10 bar.'] },
		evidence: [{ id: 'einhell-4010393-official', sourceUrl: 'https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-13', confidence: 'A' }],
		fieldSources: { mpn: ['einhell-4010393-official'], ean: ['einhell-4010393-official'], tankLiters: ['einhell-4010393-official'], maxPressureBar: ['einhell-4010393-official'], fadCurve: ['einhell-4010393-official'], intakeFlowLpm: ['einhell-4010393-official'], dutyCycle: ['einhell-4010393-official'], oilType: ['einhell-4010393-official'], noiseDb: ['einhell-4010393-official'] },
		notes: ['Le fonctionnement intermittent annoncé est limitée à 25 %.'],
	};

export default product;
