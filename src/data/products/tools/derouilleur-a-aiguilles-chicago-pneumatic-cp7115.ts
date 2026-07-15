const product = {
	id: 'chicago-pneumatic-cp7115', slug: 'derouilleur-a-aiguilles-chicago-pneumatic-cp7115', categoryId: 'derouilleur-a-aiguilles', category: 'Dérouilleur à aiguilles', label: 'Dérouilleur à aiguilles pneumatique Chicago Pneumatic CP7115', brand: 'Chicago Pneumatic', model: 'CP7115', mpn: '8941071150',
	demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 120, typical: 120, max: 120 }, connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m', usagePattern: 'intermittent', recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 }, confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp7115.webp', alt: 'Dérouilleur à aiguilles Chicago Pneumatic CP7115', sourceUrl: 'https://tools.cp.com/en-uk/products/percussivetools/cp7115-sku8941071150', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: { overview: 'Le CP7115 est un dérouilleur pneumatique compact à 12 aiguilles. La consommation en charge publiée est 2 L/s, soit 120 L/min à 6,3 bar.', verifiedFacts: ['La cadence atteint 4 000 coups par minute pour une énergie publiée de 2,2 J.', 'Le diamètre intérieur minimal du flexible est 10 mm sur 5 m.'], limitations: ['La cadence de travail réelle varie avec le support ; le profil conserve le besoin constructeur en charge.'] },
	evidence: [{ id: 'cp-8941071150-official', sourceUrl: 'https://tools.cp.com/en-uk/products/percussivetools/cp7115-sku8941071150', sourceLabel: 'Chicago Pneumatic, fiche officielle CP7115', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: '2 L/s convertis exactement en 120 L/min.' }],
	fieldSources: { airflowLpm: ['cp-8941071150-official'], workingPressureBar: ['cp-8941071150-official'], connectorSize: ['cp-8941071150-official'], recommendedHose: ['cp-8941071150-official'] }, notes: ['Conversion exacte : 2 L/s × 60 = 120 L/min.'],
};

export default product;
