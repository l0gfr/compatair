const product = {
	id: 'chicago-pneumatic-cp7120', slug: 'derouilleur-a-aiguilles-chicago-pneumatic-cp7120', categoryId: 'derouilleur-a-aiguilles', category: 'Dérouilleur à aiguilles', label: 'Dérouilleur à aiguilles pneumatique Chicago Pneumatic CP7120', brand: 'Chicago Pneumatic', model: 'CP7120', mpn: '8941071200',
	demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 444, typical: 444, max: 444 }, connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m', usagePattern: 'intermittent', recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 }, confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp7120.webp', alt: 'Dérouilleur à aiguilles Chicago Pneumatic CP7120', sourceUrl: 'https://tools.cp.com/en-us/products/cp7120-sku8941071200', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: { overview: 'Le CP7120 combine dérouilleur à 19 aiguilles et marteau burineur. Le catalogue constructeur publie 7,4 L/s en charge, soit 444 L/min à 6,3 bar.', verifiedFacts: ['La cadence atteint 4 800 coups par minute et l’énergie publiée 5,3 J.', 'Chicago Pneumatic spécifie un flexible intérieur de 10 mm sur 5 m.'], limitations: ['Le mode aiguille et le mode burin ne sont pas séparés par deux consommations distinctes.'] },
	evidence: [{ id: 'cp-8941071200-catalog', sourceUrl: 'https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_general-industry/cp-general-industry-ENG.pdf', sourceLabel: 'Chicago Pneumatic, catalogue General Industry CP7120', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: '7,4 L/s à 6,3 bar dans le tableau constructeur.' }],
	fieldSources: { airflowLpm: ['cp-8941071200-catalog'], workingPressureBar: ['cp-8941071200-catalog'], connectorSize: ['cp-8941071200-catalog'], recommendedHose: ['cp-8941071200-catalog'] }, notes: ['Conversion exacte : 7,4 L/s × 60 = 444 L/min.'],
};

export default product;
