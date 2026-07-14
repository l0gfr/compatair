const product = {
	id: 'chicago-pneumatic-cp3000-420f', slug: 'meuleuse-droite-chicago-pneumatic-cp3000-420f', category: 'Meuleuse droite', label: 'Meuleuse droite pneumatique Chicago Pneumatic CP3000-420F', brand: 'Chicago Pneumatic', model: 'CP3000-420F', mpn: '6151600250',
	demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 600, typical: 600, max: 600 }, connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m', usagePattern: 'continuous', recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 }, confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp3000-420f.webp', alt: 'Meuleuse droite Chicago Pneumatic CP3000-420F', sourceUrl: 'https://tools.cp.com/en/products/grinders/cp3000-420f-sku6151600250', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: { overview: 'La CP3000-420F est une meuleuse droite industrielle de 400 W à échappement avant. Sa consommation en charge est 10 L/s, soit 600 L/min à 6,3 bar.', verifiedFacts: ['La vitesse à vide publiée est 20 000 tr/min et le poids 0,77 kg.', 'Le diamètre intérieur minimal du flexible est 10 mm sur 5 m.'], limitations: ['La réserve de cuve ne remplace pas un débit continu suffisant pour le meulage prolongé.'] },
	evidence: [{ id: 'cp-6151600250-official', sourceUrl: 'https://tools.cp.com/en/products/grinders/cp3000-420f-sku6151600250', sourceLabel: 'Chicago Pneumatic, fiche officielle CP3000-420F', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: '10 L/s convertis exactement en 600 L/min.' }],
	fieldSources: { airflowLpm: ['cp-6151600250-official'], workingPressureBar: ['cp-6151600250-official'], connectorSize: ['cp-6151600250-official'], recommendedHose: ['cp-6151600250-official'] }, notes: ['Conversion exacte : 10 L/s × 60 = 600 L/min.'],
};

export default product;
