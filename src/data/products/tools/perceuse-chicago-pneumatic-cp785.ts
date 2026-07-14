const product = {
	id: 'chicago-pneumatic-cp785', slug: 'perceuse-chicago-pneumatic-cp785', category: 'Perceuse pneumatique', label: 'Perceuse pneumatique Chicago Pneumatic CP785 10 mm', brand: 'Chicago Pneumatic', model: 'CP785', mpn: 'T022698',
	demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 480, typical: 480, max: 480 }, connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m', usagePattern: 'intermittent', recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 }, confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp785.webp', alt: 'Perceuse pneumatique Chicago Pneumatic CP785', sourceUrl: 'https://tools.cp.com/en/products/drills/cp785-skuT022698', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: { overview: 'La CP785 est une perceuse pneumatique à mandrin de 10 mm. Sa consommation en charge de 8 L/s correspond à 480 L/min à 6,3 bar.', verifiedFacts: ['Chicago Pneumatic publie 375 W de puissance maximale et 2 400 tr/min à vide.', 'Le flexible minimal mesure 10 mm de diamètre intérieur sur 5 m.'], limitations: ['La consommation en charge est retenue sans appliquer de facteur de marche supposé.'] },
	evidence: [{ id: 'cp-t022698-official', sourceUrl: 'https://tools.cp.com/en/products/drills/cp785-skuT022698', sourceLabel: 'Chicago Pneumatic, fiche officielle CP785', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: '8 L/s convertis exactement en 480 L/min.' }],
	fieldSources: { airflowLpm: ['cp-t022698-official'], workingPressureBar: ['cp-t022698-official'], connectorSize: ['cp-t022698-official'], recommendedHose: ['cp-t022698-official'] }, notes: ['Conversion exacte : 8 L/s × 60 = 480 L/min.'],
};

export default product;
