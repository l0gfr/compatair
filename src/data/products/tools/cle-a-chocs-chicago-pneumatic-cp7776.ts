const product = {
	id: 'chicago-pneumatic-cp7776', slug: 'cle-a-chocs-chicago-pneumatic-cp7776', categoryId: 'cle-a-chocs', category: 'Clé à chocs', label: 'Clé à chocs pneumatique Chicago Pneumatic CP7776 1 pouce', brand: 'Chicago Pneumatic', model: 'CP7776', mpn: '8941077760',
	demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 900, typical: 900, max: 900 }, connectorSize: 'Entrée 1/2 pouce, flexible intérieur 13 mm sur 5 m', usagePattern: 'burst', recommendedHose: { innerDiameterMm: 13, maximumLengthMeters: 5 }, confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp7776.webp', alt: 'Clé à chocs Chicago Pneumatic CP7776', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7776-sku8941077760', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: { overview: 'La CP7776 est une clé à chocs 1 pouce destinée à la maintenance générale. Sa consommation en charge est 15 L/s, soit 900 L/min à 6,3 bar.', verifiedFacts: ['Chicago Pneumatic publie 2 400 Nm de couple maximal en marche arrière.', 'La fiche exige un flexible intérieur de 13 mm sur 5 m et une entrée d’air 1/2 pouce.'], limitations: ['Le besoin en charge ne représente pas la moyenne sur une opération intermittente.'] },
	evidence: [{ id: 'cp-8941077760-official', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7776-sku8941077760', sourceLabel: 'Chicago Pneumatic, fiche officielle CP7776', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: '15 L/s convertis exactement en 900 L/min.' }],
	fieldSources: { airflowLpm: ['cp-8941077760-official'], workingPressureBar: ['cp-8941077760-official'], connectorSize: ['cp-8941077760-official'], recommendedHose: ['cp-8941077760-official'] }, notes: ['Conversion exacte : 15 L/s × 60 = 900 L/min.'],
};

export default product;
