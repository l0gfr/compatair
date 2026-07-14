const product = {
	id: 'metabo-mega-350-100-d', slug: 'metabo-mega-350-100-d', brand: 'Metabo', model: 'Mega 350-100 D', mpn: '601539000', ean: '4007430244765',
	tankLiters: 90, maxPressureBar: 10, fadCurve: [{ pressureBar: 8, litersPerMinute: 220 }], intakeFlowLpm: 320, oilType: 'oil', noiseDb: 86, powerKw: 2.2, weightKg: 69, mobility: 'mobile', voltage: '380-415 V / 50 Hz', phase: 'three-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/metabo-mega-350-100-d.png', alt: 'Compresseur Metabo Mega 350-100 D', sourceUrl: 'https://www.metabo.com/com/en/tools/compressed-air/compressors/mobile-workshop-compressors/mega-350-100-d-compressor/601539000', sourceLabel: 'Visuel officiel Metabo' },
	editorial: { overview: 'Le Mega 350-100 D est la variante triphasée à cuve de 90 litres. Son débit effectif officiel est de 220 L/min à 8 bar.', verifiedFacts: ['Metabo indique 320 L/min aspirés et 250 L/min de remplissage.', 'La fiche publie 2,2 kW, 69 kg et 86 dB(A) de pression acoustique.'], limitations: ['La cuve de 90 litres ne change pas le débit effectif du groupe.', 'Le seul point officiel reste attaché à 8 bar.'] },
	evidence: [{ id: 'metabo-601539000-official', sourceUrl: 'https://www.metabo.com/com/en/tools/compressed-air/compressors/mobile-workshop-compressors/mega-350-100-d-compressor/601539000', sourceLabel: 'Metabo, fiche officielle Mega 350-100 D', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Débit effectif publié à 80 % de 10 bar.' }],
	fieldSources: { fadCurve: ['metabo-601539000-official'], phase: ['metabo-601539000-official'], ean: ['metabo-601539000-official'], noiseDb: ['metabo-601539000-official'] }, notes: ['Point effectif unique à 8 bar.'],
};

export default product;
