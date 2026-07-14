const product = {
	id: 'chicago-pneumatic-cp7630', slug: 'cle-a-chocs-chicago-pneumatic-cp7630', category: 'Clé à chocs', label: 'Clé à chocs pneumatique Chicago Pneumatic CP7630 3/4 pouce', brand: 'Chicago Pneumatic', model: 'CP7630', mpn: '8941076300',
	demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 576, typical: 576, max: 576 }, connectorSize: 'Entrée 3/8 pouce, flexible intérieur 13 mm sur 5 m', usagePattern: 'burst', recommendedHose: { innerDiameterMm: 13, maximumLengthMeters: 5 }, confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp7630.jpg', alt: 'Clé à chocs Chicago Pneumatic CP7630', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7630-sku8941076300', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: { overview: 'La CP7630 est une clé à chocs 3/4 pouce à mécanisme double marteau. Le constructeur publie 9,6 L/s en charge, soit 576 L/min à 6,3 bar.', verifiedFacts: ['Le couple maximal en marche arrière atteint 1 500 Nm.', 'Le flexible minimal publié est 13 mm de diamètre intérieur sur 5 m.'], limitations: ['Une impulsion brève peut solliciter la cuve, mais aucune autonomie n’est déduite sans durée mesurée.'] },
	evidence: [{ id: 'cp-8941076300-official', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7630-sku8941076300', sourceLabel: 'Chicago Pneumatic, fiche officielle CP7630', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: '9,6 L/s convertis exactement en 576 L/min.' }],
	fieldSources: { airflowLpm: ['cp-8941076300-official'], workingPressureBar: ['cp-8941076300-official'], connectorSize: ['cp-8941076300-official'], recommendedHose: ['cp-8941076300-official'] }, notes: ['Conversion exacte : 9,6 L/s × 60 = 576 L/min.'],
};

export default product;
