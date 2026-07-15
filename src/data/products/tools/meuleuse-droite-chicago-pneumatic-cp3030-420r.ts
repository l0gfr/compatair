const product = {
	id: 'chicago-pneumatic-cp3030-420r', slug: 'meuleuse-droite-chicago-pneumatic-cp3030-420r', categoryId: 'meuleuse', category: 'Meuleuse droite', label: 'Meuleuse droite pneumatique Chicago Pneumatic CP3030-420R', brand: 'Chicago Pneumatic', model: 'CP3030-420R', mpn: '6151604140',
	demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 660, typical: 660, max: 660 }, connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m', usagePattern: 'continuous', recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 }, confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp3030-420r.webp', alt: 'Meuleuse droite Chicago Pneumatic CP3030-420R', sourceUrl: 'https://tools.cp.com/en/products/grinders/cp3030-420r-sku6151604140', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: { overview: 'La CP3030-420R est une meuleuse droite industrielle de 400 W. Le besoin en charge publié est 11 L/s, soit 660 L/min à 6,3 bar.', verifiedFacts: ['La vitesse à vide atteint 20 000 tr/min et le poids outil est 0,84 kg.', 'Le flexible minimal publié est de 10 mm sur 5 m.'], limitations: ['Le débit en charge est traité comme un besoin continu pendant l’enlèvement de matière.'] },
	evidence: [{ id: 'cp-6151604140-official', sourceUrl: 'https://tools.cp.com/en/products/grinders/cp3030-420r-sku6151604140', sourceLabel: 'Chicago Pneumatic, fiche officielle CP3030-420R', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: '11 L/s convertis exactement en 660 L/min.' }],
	fieldSources: { airflowLpm: ['cp-6151604140-official'], workingPressureBar: ['cp-6151604140-official'], connectorSize: ['cp-6151604140-official'], recommendedHose: ['cp-6151604140-official'] }, notes: ['Conversion exacte : 11 L/s × 60 = 660 L/min.'],
};

export default product;
