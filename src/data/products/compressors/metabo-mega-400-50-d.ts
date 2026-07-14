const product = {
	id: 'metabo-mega-400-50-d', slug: 'metabo-mega-400-50-d', brand: 'Metabo', model: 'Mega 400-50 D', mpn: '601537000', ean: '4007430244468',
	variant: { familyId: 'metabo-mega-400-50', label: 'Triphasé', distinguishingAttributes: { phase: 'triphasé' } },
	tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 8, litersPerMinute: 260 }], intakeFlowLpm: 400, oilType: 'oil', noiseDb: 86, powerKw: 2.2, weightKg: 73, mobility: 'mobile', voltage: '380-415 V / 50 Hz', phase: 'three-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/metabo-mega-400-50-d.png', alt: 'Compresseur Metabo Mega 400-50 D', sourceUrl: 'https://de.metabo.com/de/maschinen/druckluft/kompressoren/mobile-werkstatt-kompressoren/mega-400-50-d-601537000-kompressor.html', sourceLabel: 'Visuel officiel Metabo' },
	editorial: { overview: 'Le Mega 400-50 D est la version triphasée du groupe 400 litres aspirés par minute. Le débit effectif publié est 260 L/min à 8 bar.', verifiedFacts: ['La fiche distingue 400 L/min aspirés, 300 L/min de remplissage et 260 L/min effectifs.', 'Le moteur de 2,2 kW alimente une cuve de 50 litres sous 10 bar maximum.'], limitations: ['Le débit effectif n’est documenté qu’à 8 bar.'] },
	evidence: [{ id: 'metabo-601537000-official', sourceUrl: 'https://de.metabo.com/de/maschinen/druckluft/kompressoren/mobile-werkstatt-kompressoren/mega-400-50-d-601537000-kompressor.html', sourceLabel: 'Metabo, fiche officielle Mega 400-50 D', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Débit effectif publié à 80 % de 10 bar.' }],
	fieldSources: { fadCurve: ['metabo-601537000-official'], phase: ['metabo-601537000-official'], ean: ['metabo-601537000-official'], weightKg: ['metabo-601537000-official'] }, notes: ['Point effectif unique à 8 bar.'],
};

export default product;
