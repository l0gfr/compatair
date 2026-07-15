const product = {
	id: 'chicago-pneumatic-cp5000',
	slug: 'cle-a-chocs-chicago-pneumatic-cp5000',
	categoryId: 'cle-a-chocs', category: 'Clé à chocs',
	label: 'Clé à chocs pneumatique Chicago Pneumatic CP5000 1 pouce',
	brand: 'Chicago Pneumatic',
	model: 'CP5000',
	mpn: 'T024585',
	demandModel: 'fixed-flow',
	workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 },
	airflowLpm: { min: 1500, typical: 1500, max: 1500 },
	connectorSize: 'Entrée 1/2 pouce, flexible intérieur 13 mm sur 5 m',
	usagePattern: 'burst',
	recommendedHose: { innerDiameterMm: 13, maximumLengthMeters: 5 },
	confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp5000.webp', alt: 'Clé à chocs pneumatique Chicago Pneumatic CP5000', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp5000-skuT024585', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: {
		overview: 'La CP5000 est une clé à chocs 1 pouce à enclume longue pour les assemblages lourds. Chicago Pneumatic publie 25 L/s en charge, soit exactement 1 500 L/min, sous 6,3 bar.',
		verifiedFacts: ['La fiche constructeur indique 3 390 Nm de couple maximal au desserrage et 2 800 Nm au serrage.', 'La clé pèse 16,2 kg et demande un flexible de 13 mm de diamètre intérieur sur 5 m.'],
		limitations: ['La consommation en charge décrit le besoin lorsque la clé fonctionne, pas une consommation moyenne pendant toute une intervention.', 'Le besoin de 1 500 L/min place cet outil hors de portée de la plupart des compresseurs d’atelier grand public.'],
	},
	evidence: [{ id: 'cp-t024585-official', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp5000-skuT024585', sourceLabel: 'Chicago Pneumatic, fiche officielle CP5000', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A', notes: 'Consommation en charge de 25 L/s convertie exactement en 1 500 L/min, pression dynamique maximale de 6,3 bar.' }],
	fieldSources: { airflowLpm: ['cp-t024585-official'], workingPressureBar: ['cp-t024585-official'], connectorSize: ['cp-t024585-official'], recommendedHose: ['cp-t024585-official'] },
	notes: ['Conversion exacte : 25 L/s × 60 = 1 500 L/min.'],
};

export default product;
