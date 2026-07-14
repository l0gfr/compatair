const product = {
	id: 'metabo-power-250-10-w-of', slug: 'metabo-power-250-10-w-of', brand: 'Metabo', model: 'Power 250-10 W OF', mpn: '601544000', ean: '4007430244857',
	tankLiters: 10, maxPressureBar: 10, fadCurve: [{ pressureBar: 8, litersPerMinute: 100 }], intakeFlowLpm: 220, oilType: 'oil-free', noiseDb: 84, powerKw: 1.5, weightKg: 24, mobility: 'portable', voltage: '230 V / 50 Hz', phase: 'single-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/metabo-power-250-10-w-of.webp', alt: 'Compresseur Metabo Power 250-10 W OF', sourceUrl: 'https://de.metabo.com/de/maschinen/druckluft/kompressoren/baustellen-kompressoren/power-250-10-w-of-601544000-kompressor.html', sourceLabel: 'Visuel officiel Metabo' },
	editorial: { overview: 'Le Power 250-10 W OF est un compresseur de chantier portable sans huile. Metabo publie 100 L/min effectifs à 8 bar.', verifiedFacts: ['La fiche indique 220 L/min aspirés et 120 L/min de remplissage.', 'La cuve fait 10 litres, la puissance 1,5 kW et le poids 24 kg.'], limitations: ['Le seul débit effectif disponible est attaché à 8 bar.'] },
	evidence: [{ id: 'metabo-601544000-official', sourceUrl: 'https://de.metabo.com/de/maschinen/druckluft/kompressoren/baustellen-kompressoren/power-250-10-w-of-601544000-kompressor.html', sourceLabel: 'Metabo, fiche officielle Power 250-10 W OF', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Débit effectif publié à 80 % de 10 bar.' }],
	fieldSources: { fadCurve: ['metabo-601544000-official'], ean: ['metabo-601544000-official'], oilType: ['metabo-601544000-official'], weightKg: ['metabo-601544000-official'] }, notes: ['Point effectif unique à 8 bar.'],
};

export default product;
