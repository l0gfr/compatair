const product = {
	id: 'chicago-pneumatic-cp9779', slug: 'ponceuse-bande-chicago-pneumatic-cp9779', category: 'Ponceuse à bande', label: 'Ponceuse à bande pneumatique Chicago Pneumatic CP9779', brand: 'Chicago Pneumatic', model: 'CP9779', mpn: '6151939779',
	demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 1680, typical: 1680, max: 1680 }, connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m', usagePattern: 'continuous', recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 }, confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp9779.webp', alt: 'Ponceuse à bande Chicago Pneumatic CP9779', sourceUrl: 'https://tools.cp.com/en/products/sanders/cp9779-sku6151939779', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: { overview: 'La CP9779 est une ponceuse à bande de 10 × 330 mm. Sa consommation en charge est 28 L/s, soit 1 680 L/min à 6,3 bar.', verifiedFacts: ['La puissance maximale publiée est 260 W et la vitesse à vide 22 000 tr/min.', 'Le flexible minimal fait 10 mm de diamètre intérieur sur 5 m.'], limitations: ['La consommation élevée en charge est conservée telle quelle ; elle ne doit pas être confondue avec les 6,3 L/s à vide.'] },
	evidence: [{ id: 'cp-6151939779-official', sourceUrl: 'https://tools.cp.com/en/products/sanders/cp9779-sku6151939779', sourceLabel: 'Chicago Pneumatic, fiche officielle CP9779', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: '28 L/s en charge convertis exactement en 1 680 L/min.' }],
	fieldSources: { airflowLpm: ['cp-6151939779-official'], workingPressureBar: ['cp-6151939779-official'], connectorSize: ['cp-6151939779-official'], recommendedHose: ['cp-6151939779-official'] }, notes: ['Conversion exacte : 28 L/s × 60 = 1 680 L/min.'],
};

export default product;
