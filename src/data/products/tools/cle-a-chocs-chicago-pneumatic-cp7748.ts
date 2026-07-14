const product = {
	id: 'chicago-pneumatic-cp7748', slug: 'cle-a-chocs-chicago-pneumatic-cp7748', category: 'Clé à chocs', label: 'Clé à chocs pneumatique Chicago Pneumatic CP7748 1/2 pouce', brand: 'Chicago Pneumatic', model: 'CP7748', mpn: '8941077481',
	demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 720, typical: 720, max: 720 }, connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m', usagePattern: 'burst', recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 }, confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp7748.webp', alt: 'Clé à chocs Chicago Pneumatic CP7748', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7748-sku8941077481', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: { overview: 'La CP7748 est une clé à chocs 1/2 pouce pour l’entretien des véhicules légers. Sa consommation en charge de 12 L/s correspond à 720 L/min à 6,3 bar.', verifiedFacts: ['Chicago Pneumatic annonce 1 300 Nm de couple maximal en marche arrière.', 'La fiche demande un flexible de 10 mm de diamètre intérieur sur 5 m.'], limitations: ['La consommation en charge est conservée comme besoin instantané, sans moyenne arbitraire.'] },
	evidence: [{ id: 'cp-8941077481-official', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7748-sku8941077481', sourceLabel: 'Chicago Pneumatic, fiche officielle CP7748', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: '12 L/s convertis exactement en 720 L/min.' }],
	fieldSources: { airflowLpm: ['cp-8941077481-official'], workingPressureBar: ['cp-8941077481-official'], connectorSize: ['cp-8941077481-official'], recommendedHose: ['cp-8941077481-official'] }, notes: ['Conversion exacte : 12 L/s × 60 = 720 L/min.'],
};

export default product;
