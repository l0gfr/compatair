const product = {
	id: 'chicago-pneumatic-cp7741',
	slug: 'cle-a-chocs-chicago-pneumatic-cp7741',
	category: 'Clé à chocs',
	label: 'Clé à chocs pneumatique Chicago Pneumatic CP7741 1/2 pouce',
	brand: 'Chicago Pneumatic',
	model: 'CP7741',
	mpn: '8941077410',
	demandModel: 'fixed-flow',
	workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 },
	airflowLpm: { min: 558, typical: 558, max: 558 },
	connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m',
	usagePattern: 'burst',
	recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 },
	confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp7741.webp', alt: 'Clé à chocs pneumatique Chicago Pneumatic CP7741', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7741-sku8941077410', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: {
		overview: 'La CP7741 est une clé à chocs 1/2 pouce pour l’entretien automobile et le changement de pneus. Chicago Pneumatic publie 9,3 L/s en charge, soit exactement 558 L/min, sous 6,3 bar.',
		verifiedFacts: ['La fiche constructeur indique 970 Nm de couple maximal au desserrage et 690 Nm au serrage.', 'La clé pèse 2,25 kg et demande un flexible de 10 mm de diamètre intérieur sur 5 m.'],
		limitations: ['La consommation en charge décrit le besoin lorsque la clé fonctionne, pas une consommation moyenne pendant toute une intervention.', 'La cuve peut aider sur une impulsion brève, mais aucune autonomie n’est inventée sans durée d’usage mesurée.'],
	},
	evidence: [{ id: 'cp-8941077410-official', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7741-sku8941077410', sourceLabel: 'Chicago Pneumatic, fiche officielle CP7741', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A', notes: 'Consommation en charge de 9,3 L/s convertie exactement en 558 L/min, pression dynamique maximale de 6,3 bar.' }],
	fieldSources: { airflowLpm: ['cp-8941077410-official'], workingPressureBar: ['cp-8941077410-official'], connectorSize: ['cp-8941077410-official'], recommendedHose: ['cp-8941077410-official'] },
	notes: ['Conversion exacte : 9,3 L/s × 60 = 558 L/min.'],
};

export default product;
