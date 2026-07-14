const product = {
	id: 'chicago-pneumatic-cp7269p',
	slug: 'polisseuse-chicago-pneumatic-cp7269p',
	category: 'Polisseuse',
	label: 'Polisseuse pneumatique Chicago Pneumatic CP7269P',
	brand: 'Chicago Pneumatic',
	model: 'CP7269P',
	mpn: '8941078691',
	demandModel: 'fixed-flow',
	workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 },
	airflowLpm: { min: 660, typical: 660, max: 660 },
	connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m',
	usagePattern: 'continuous',
	recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 },
	confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp7269p.webp', alt: 'Polisseuse pneumatique Chicago Pneumatic CP7269P', sourceUrl: 'https://tools.cp.com/en/products/sanders/cp7269p-sku8941078691', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: {
		overview: 'La CP7269P est une polisseuse pneumatique destinée notamment aux travaux de carrosserie. Chicago Pneumatic publie une consommation en charge de 11 L/s, soit exactement 660 L/min, sous 6,3 bar.',
		verifiedFacts: ['La fiche constructeur indique une puissance de 500 W, un plateau de 205 mm et un poids de 2,5 kg.', 'Le fabricant demande un flexible de 10 mm de diamètre intérieur pour une longueur de 5 m.'],
		limitations: ['La valeur de 660 L/min est la consommation en charge, pas une moyenne réduite selon les pauses de l’opérateur.', 'CompatAir traite le polissage comme une demande continue afin de ne pas sous-dimensionner le compresseur.'],
	},
	evidence: [{ id: 'cp-8941078691-official', sourceUrl: 'https://tools.cp.com/en/products/sanders/cp7269p-sku8941078691', sourceLabel: 'Chicago Pneumatic, fiche officielle CP7269P', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A', notes: 'Consommation en charge de 11 L/s convertie exactement en 660 L/min, pression dynamique maximale de 6,3 bar.' }],
	fieldSources: { airflowLpm: ['cp-8941078691-official'], workingPressureBar: ['cp-8941078691-official'], connectorSize: ['cp-8941078691-official'], recommendedHose: ['cp-8941078691-official'] },
	notes: ['Conversion exacte : 11 L/s × 60 = 660 L/min.', 'Le profil continu est un choix conservateur de CompatAir pour le dimensionnement.'],
};

export default product;
