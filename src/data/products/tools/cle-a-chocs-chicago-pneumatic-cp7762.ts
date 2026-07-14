const product = {
	id: 'chicago-pneumatic-cp7762',
	slug: 'cle-a-chocs-chicago-pneumatic-cp7762',
	category: 'Clé à chocs',
	label: 'Clé à chocs pneumatique Chicago Pneumatic CP7762 3/4 pouce',
	brand: 'Chicago Pneumatic',
	model: 'CP7762',
	mpn: '8941077620',
	demandModel: 'fixed-flow',
	workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 },
	airflowLpm: { min: 960, typical: 960, max: 960 },
	connectorSize: 'Entrée 3/8 pouce, flexible intérieur 13 mm sur 5 m',
	usagePattern: 'burst',
	recommendedHose: { innerDiameterMm: 13, maximumLengthMeters: 5 },
	confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp7762.webp', alt: 'Clé à chocs pneumatique Chicago Pneumatic CP7762', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7762-sku8941077620', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: {
		overview: 'La CP7762 est une clé à chocs compacte à carré 3/4 pouce. Chicago Pneumatic publie 16 L/s en charge, soit exactement 960 L/min, sous 6,3 bar.',
		verifiedFacts: ['La fiche constructeur indique 1 420 Nm de couple maximal au desserrage et 900 Nm au serrage.', 'La clé pèse 2,9 kg et demande un flexible de 13 mm de diamètre intérieur sur 5 m.'],
		limitations: ['La consommation en charge décrit le besoin lorsque la clé fonctionne, pas une consommation moyenne pendant toute une intervention.', 'La cuve peut aider sur une impulsion brève, mais aucune autonomie n’est inventée sans durée d’usage mesurée.'],
	},
	evidence: [{ id: 'cp-8941077620-official', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7762-sku8941077620', sourceLabel: 'Chicago Pneumatic, fiche officielle CP7762', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A', notes: 'Consommation en charge de 16 L/s convertie exactement en 960 L/min, pression dynamique maximale de 6,3 bar.' }],
	fieldSources: { airflowLpm: ['cp-8941077620-official'], workingPressureBar: ['cp-8941077620-official'], connectorSize: ['cp-8941077620-official'], recommendedHose: ['cp-8941077620-official'] },
	notes: ['Conversion exacte : 16 L/s × 60 = 960 L/min.'],
};

export default product;
