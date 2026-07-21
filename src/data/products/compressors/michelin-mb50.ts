const product = {
		id: 'michelin-mb50', slug: 'michelin-mb50', brand: 'Michelin', model: 'MB50', mpn: 'MB50',
		distributorSkus: [{ distributorId: 'leroy-merlin-fr', sku: '66415496', evidenceIds: ['michelin-mb50-merchant'] }],
		tankLiters: 50, maxPressureBar: 8, fadCurve: [], intakeFlowLpm: 170, oilType: 'oil', powerKw: 1.5, weightKg: 30.4, mobility: 'mobile', confidence: 'C', status: 'active',
		image: { src: '/images/products/michelin-mb50.webp', alt: 'Compresseur Michelin MB50 50 litres', sourceUrl: 'https://www.leroymerlin.fr/produits/compresseur-50l-2cv-8-bars-mb50-michelin-66415496.html', sourceLabel: 'Visuel marchand du Michelin MB50' },
		editorial: { overview: 'Le Michelin MB50 est un compresseur lubrifié de 50 litres. Le marchand annonce un débit restitué de 120 L/min, mais sans pression de mesure : CompatAir ne l’intègre donc pas à la courbe FAD.', verifiedFacts: ['La fiche marchande indique 8 bar maximum, une cuve de 50 litres et 170 L/min aspirés.', 'La puissance publiée est de 1 500 W et le poids de 30,4 kg.'], limitations: ['Les 120 L/min restitués sont dépourvus de pression de mesure et ne permettent pas un verdict de compatibilité.', 'La référence n’est documentée ici que par une source marchande, d’où la confiance C.'] },
		specifications: [{ label: 'Débit restitué annoncé', value: '120 L/min, pression de mesure non précisée', evidenceIds: ['michelin-mb50-merchant'] }],
		evidence: [{ id: 'michelin-mb50-merchant', sourceUrl: 'https://www.leroymerlin.fr/produits/compresseur-50l-2cv-8-bars-mb50-michelin-66415496.html', sourceLabel: 'Leroy Merlin, fiche Michelin MB50', sourceType: 'merchant', retrievedAt: '2026-07-16', confidence: 'C', notes: 'La pression associée au débit restitué n’est pas publiée.' }],
		fieldSources: { fadCurve: ['michelin-mb50-merchant'], maxPressureBar: ['michelin-mb50-merchant'] }, notes: ['La courbe FAD reste vide : le débit restitué annoncé n’a pas de pression associée.'],
	};

export default product;
