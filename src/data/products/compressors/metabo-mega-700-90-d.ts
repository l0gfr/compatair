const product = {
	id: 'metabo-mega-700-90-d', slug: 'metabo-mega-700-90-d', brand: 'Metabo', model: 'Mega 700-90 D', mpn: '601542000', ean: '4007430244833',
	tankLiters: 90, maxPressureBar: 11, fadCurve: [{ pressureBar: 8.8, litersPerMinute: 450 }], intakeFlowLpm: 650, oilType: 'oil', noiseDb: 88, powerKw: 4, weightKg: 119, mobility: 'mobile', voltage: '380-415 V / 50 Hz', phase: 'three-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/metabo-mega-700-90-d.png', alt: 'Compresseur Metabo Mega 700-90 D', sourceUrl: 'https://www.metabo.com/no/no/maskiner/trykkluft/kompressorer/mobile-verksted-kompressorer/mega-700-90-d-kompressor/601542000', sourceLabel: 'Visuel officiel Metabo' },
	editorial: { overview: 'Le Mega 700-90 D est un compresseur triphasé deux étages sur cuve de 90 litres. Metabo publie 450 L/min effectifs à 8,8 bar.', verifiedFacts: ['La fiche constructeur indique 650 L/min aspirés et 520 L/min de remplissage.', 'La pression maximale est 11 bar, la puissance 4 kW et le poids 119 kg.'], limitations: ['Le débit effectif n’est documenté qu’à 80 % de la pression maximale.'] },
	evidence: [{ id: 'metabo-601542000-official', sourceUrl: 'https://www.metabo.com/no/no/maskiner/trykkluft/kompressorer/mobile-verksted-kompressorer/mega-700-90-d-kompressor/601542000', sourceLabel: 'Metabo, fiche officielle Mega 700-90 D', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Débit effectif publié à 80 % de 11 bar.' }],
	fieldSources: { fadCurve: ['metabo-601542000-official'], ean: ['metabo-601542000-official'], powerKw: ['metabo-601542000-official'], weightKg: ['metabo-601542000-official'] }, notes: ['Point effectif unique à 8,8 bar.'],
};

export default product;
