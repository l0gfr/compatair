const product = {
	id: 'einhell-pressito-18-25', slug: 'einhell-pressito-18-25', brand: 'Einhell', model: 'PRESSITO 18/25', mpn: '4020420', ean: '4006825667325',
	tankLiters: 0, maxPressureBar: 11, fadCurve: [{ pressureBar: 0, litersPerMinute: 17 }, { pressureBar: 4, litersPerMinute: 11 }, { pressureBar: 7, litersPerMinute: 9 }], intakeFlowLpm: 25, oilType: 'oil-free', weightKg: 2.28, mobility: 'portable', voltage: '18 V', confidence: 'A', status: 'active',
	image: { src: '/images/products/einhell-pressito-18-25.jpg', alt: 'Compresseur sans fil Einhell PRESSITO 18/25', sourceUrl: 'https://www.einhell.fr/p/4020420-pressito-18-25/', sourceLabel: 'Visuel officiel Einhell' },
	editorial: { overview: 'Le PRESSITO 18/25 est un gonfleur sans fil haute et basse pression. Son profil officiel atteint 17 L/min à 0 bar, 11 L/min à 4 bar et 9 L/min à 7 bar.', verifiedFacts: ['Einhell publie 25 L/min aspirés et 11 bar de pression maximale.', 'La fiche indique 2,28 kg et une alimentation 18 V Power X-Change.'], limitations: ['Le produit n’a pas de cuve et ne remplace pas un compresseur destiné aux outils continus.', 'Le débit au-delà de 7 bar reste non documenté.'] },
	evidence: [{ id: 'einhell-4020420-official', sourceUrl: 'https://www.einhell.fr/p/4020420-pressito-18-25/', sourceLabel: 'Einhell France, fiche officielle PRESSITO 18/25', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A' }],
	fieldSources: { fadCurve: ['einhell-4020420-official'], intakeFlowLpm: ['einhell-4020420-official'], ean: ['einhell-4020420-official'], weightKg: ['einhell-4020420-official'] }, notes: ['Profil multipoint constructeur.'],
};

export default product;
