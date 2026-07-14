const product = {
	id: 'chicago-pneumatic-cp9780', slug: 'ponceuse-bande-chicago-pneumatic-cp9780', category: 'Ponceuse à bande', label: 'Ponceuse à bande pneumatique Chicago Pneumatic CP9780', brand: 'Chicago Pneumatic', model: 'CP9780', mpn: '6151939780',
	demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 1800, typical: 1800, max: 1800 }, connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m', usagePattern: 'continuous', recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 }, confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp9780.webp', alt: 'Ponceuse à bande Chicago Pneumatic CP9780', sourceUrl: 'https://tools.cp.com/en/products/sanders/cp9780-sku6151939780', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: { overview: 'La CP9780 est une ponceuse à bande de 20 × 520 mm. Chicago Pneumatic publie 30 L/s en charge, soit 1 800 L/min à 6,3 bar.', verifiedFacts: ['La puissance maximale est 380 W et la vitesse à vide 20 000 tr/min.', 'Le flexible intérieur minimal publié est 10 mm sur 5 m.'], limitations: ['La valeur en charge de 30 L/s est distincte des 6,9 L/s à vide et impose un réseau très dimensionné.'] },
	evidence: [{ id: 'cp-6151939780-official', sourceUrl: 'https://tools.cp.com/en/products/sanders/cp9780-sku6151939780', sourceLabel: 'Chicago Pneumatic, fiche officielle CP9780', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: '30 L/s en charge convertis exactement en 1 800 L/min.' }],
	fieldSources: { airflowLpm: ['cp-6151939780-official'], workingPressureBar: ['cp-6151939780-official'], connectorSize: ['cp-6151939780-official'], recommendedHose: ['cp-6151939780-official'] }, notes: ['Conversion exacte : 30 L/s × 60 = 1 800 L/min.'],
};

export default product;
