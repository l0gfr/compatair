const product = {
	id: 'chicago-pneumatic-cp875', slug: 'meuleuse-angle-chicago-pneumatic-cp875', category: 'Meuleuse d’angle', label: 'Meuleuse d’angle pneumatique Chicago Pneumatic CP875', brand: 'Chicago Pneumatic', model: 'CP875', mpn: 'T023995',
	demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 600, typical: 600, max: 600 }, connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m', usagePattern: 'continuous', recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 }, confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp875.jpg', alt: 'Meuleuse pneumatique Chicago Pneumatic CP875', sourceUrl: 'https://tools.cp.com/en/products/grinders/cp875-skuT023995', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: { overview: 'La CP875 est une meuleuse pneumatique compacte à tête à 90°. Sa consommation en charge est 10 L/s, soit 600 L/min à 6,3 bar.', verifiedFacts: ['La puissance maximale publiée est 220 W et la vitesse à vide 22 500 tr/min.', 'Le flexible minimal fait 10 mm de diamètre intérieur sur 5 m.'], limitations: ['Un outil rotatif continu exige le débit disponible pendant toute la phase de meulage.'] },
	evidence: [{ id: 'cp-t023995-official', sourceUrl: 'https://tools.cp.com/en/products/grinders/cp875-skuT023995', sourceLabel: 'Chicago Pneumatic, fiche officielle CP875', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: '10 L/s convertis exactement en 600 L/min.' }],
	fieldSources: { airflowLpm: ['cp-t023995-official'], workingPressureBar: ['cp-t023995-official'], connectorSize: ['cp-t023995-official'], recommendedHose: ['cp-t023995-official'] }, notes: ['Conversion exacte : 10 L/s × 60 = 600 L/min.'],
};

export default product;
