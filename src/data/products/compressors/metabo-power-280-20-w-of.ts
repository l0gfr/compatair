const product = {
	id: 'metabo-power-280-20-w-of', slug: 'metabo-power-280-20-w-of', brand: 'Metabo', model: 'Power 280-20 W OF', mpn: '601545000', ean: '4007430244864',
	tankLiters: 20, maxPressureBar: 10, fadCurve: [{ pressureBar: 8, litersPerMinute: 140 }], intakeFlowLpm: 280, oilType: 'oil-free', noiseDb: 83, powerKw: 1.7, weightKg: 40, mobility: 'mobile', voltage: '230 V / 50 Hz', phase: 'single-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/metabo-power-280-20-w-of.png', alt: 'Compresseur Metabo Power 280-20 W OF', sourceUrl: 'https://www.metabo.com/no/no/maskiner/trykkluft/kompressorer/kompressorer-for-byggeplassen/power-280-20-w-of-kompressor/601545000', sourceLabel: 'Visuel officiel Metabo' },
	editorial: { overview: 'Le Power 280-20 W OF est un compresseur de chantier sans huile sur cuve de 20 litres. Le débit effectif officiel est 140 L/min à 8 bar.', verifiedFacts: ['Metabo publie 280 L/min aspirés et 150 L/min de remplissage.', 'La fiche indique 1,7 kW, 40 kg et 83 dB(A) de pression acoustique.'], limitations: ['Aucun débit n’est interpolé en dehors du point à 8 bar.'] },
	evidence: [{ id: 'metabo-601545000-official', sourceUrl: 'https://www.metabo.com/no/no/maskiner/trykkluft/kompressorer/kompressorer-for-byggeplassen/power-280-20-w-of-kompressor/601545000', sourceLabel: 'Metabo, fiche officielle Power 280-20 W OF', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Débit effectif publié à 80 % de 10 bar.' }],
	fieldSources: { fadCurve: ['metabo-601545000-official'], ean: ['metabo-601545000-official'], noiseDb: ['metabo-601545000-official'], weightKg: ['metabo-601545000-official'] }, notes: ['Point effectif unique à 8 bar.'],
};

export default product;
