const product = {
	id: 'chicago-pneumatic-cp7722',
	slug: 'cle-a-chocs-chicago-pneumatic-cp7722',
	category: 'Clé à chocs',
	label: 'Clé à chocs pneumatique Chicago Pneumatic CP7722 3/8 pouce',
	brand: 'Chicago Pneumatic',
	model: 'CP7722',
	mpn: '8941077220',
	demandModel: 'fixed-flow',
	workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 },
	airflowLpm: { min: 282, typical: 282, max: 282 },
	connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m',
	usagePattern: 'burst',
	recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 },
	confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp7722.webp', alt: 'Clé à chocs pneumatique Chicago Pneumatic CP7722', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7722-sku8941077220', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: {
		overview: 'La CP7722 est une clé à chocs compacte à carré 3/8 pouce. Chicago Pneumatic publie une consommation en charge de 4,7 L/s, soit exactement 282 L/min, sous 6,3 bar.',
		verifiedFacts: ['La fiche constructeur indique 122 Nm de couple maximal au desserrage et 88 Nm au serrage.', 'Le fabricant demande un flexible de 10 mm de diamètre intérieur pour une longueur de 5 m.'],
		limitations: ['La consommation en charge décrit le besoin lorsque la clé fonctionne, pas une consommation moyenne pendant toute une intervention.', 'La cuve peut aider sur une impulsion brève, mais aucune autonomie n’est inventée sans durée d’usage mesurée.'],
	},
	evidence: [{ id: 'cp-8941077220-official', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7722-sku8941077220', sourceLabel: 'Chicago Pneumatic, fiche officielle CP7722', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A', notes: 'Consommation en charge de 4,7 L/s convertie exactement en 282 L/min, pression dynamique maximale de 6,3 bar.' }],
	fieldSources: { airflowLpm: ['cp-8941077220-official'], workingPressureBar: ['cp-8941077220-official'], connectorSize: ['cp-8941077220-official'], recommendedHose: ['cp-8941077220-official'] },
	notes: ['Conversion exacte : 4,7 L/s × 60 = 282 L/min.'],
};

export default product;
