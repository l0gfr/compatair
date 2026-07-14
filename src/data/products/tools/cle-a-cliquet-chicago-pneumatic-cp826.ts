const product = {
	id: 'chicago-pneumatic-cp826', slug: 'cle-a-cliquet-chicago-pneumatic-cp826', category: 'Clé à cliquet', label: 'Clé à cliquet pneumatique Chicago Pneumatic CP826 1/4 pouce', brand: 'Chicago Pneumatic', model: 'CP826', mpn: 'T025074',
	demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 396, typical: 396, max: 396 }, connectorSize: 'Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m', usagePattern: 'burst', recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 }, confidence: 'A',
	image: { src: '/images/products/chicago-pneumatic-cp826.webp', alt: 'Clé à cliquet Chicago Pneumatic CP826', sourceUrl: 'https://tools.cp.com/en/products/ratchetwrenches/cp826-skuT025074', sourceLabel: 'Visuel officiel Chicago Pneumatic' },
	editorial: { overview: 'La CP826 est une clé à cliquet 1/4 pouce compacte. Chicago Pneumatic publie 6,6 L/s en charge, soit 396 L/min à 6,3 bar.', verifiedFacts: ['La vitesse à vide est 250 tr/min et le poids outil 0,51 kg.', 'La fiche demande un flexible intérieur de 10 mm sur 5 m.'], limitations: ['Le besoin en charge n’est pas réduit selon une cadence d’utilisation supposée.'] },
	evidence: [{ id: 'cp-t025074-official', sourceUrl: 'https://tools.cp.com/en/products/ratchetwrenches/cp826-skuT025074', sourceLabel: 'Chicago Pneumatic, fiche officielle CP826', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: '6,6 L/s convertis exactement en 396 L/min.' }],
	fieldSources: { airflowLpm: ['cp-t025074-official'], workingPressureBar: ['cp-t025074-official'], connectorSize: ['cp-t025074-official'], recommendedHose: ['cp-t025074-official'] }, notes: ['Conversion exacte : 6,6 L/s × 60 = 396 L/min.'],
};

export default product;
