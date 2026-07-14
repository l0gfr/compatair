const product = {
	id: 'einhell-pressito-18-25-hybrid', slug: 'einhell-pressito-18-25-hybrid', brand: 'Einhell', model: 'PRESSITO 18/25 Hybrid', mpn: '4020430', ean: '4006825667318',
	tankLiters: 0, maxPressureBar: 11, fadCurve: [{ pressureBar: 0, litersPerMinute: 19 }, { pressureBar: 4, litersPerMinute: 12 }, { pressureBar: 7, litersPerMinute: 10 }], oilType: 'oil-free', weightKg: 2.52, mobility: 'portable', voltage: '18 V ou secteur', confidence: 'A', status: 'active',
	image: { src: '/images/products/einhell-pressito-18-25-hybrid.webp', alt: 'Compresseur hybride Einhell PRESSITO 18/25', sourceUrl: 'https://www.einhell.fr/p/4020430-pressito-18-25-hybrid/', sourceLabel: 'Visuel officiel Einhell' },
	editorial: { overview: 'Le PRESSITO 18/25 Hybrid fonctionne sur batterie ou sur secteur. Einhell publie 19 L/min à 0 bar, 12 L/min à 4 bar et 10 L/min à 7 bar.', verifiedFacts: ['La pompe haute pression monte à 11 bar et l’appareil pèse 2,52 kg.', 'La fiche distingue le débit à trois pressions au lieu de communiquer uniquement une aspiration.'], limitations: ['L’absence de cuve limite l’usage aux opérations de gonflage prévues.', 'Le débit entre 7 et 11 bar n’est pas estimé.'] },
	evidence: [{ id: 'einhell-4020430-official', sourceUrl: 'https://www.einhell.fr/p/4020430-pressito-18-25-hybrid/', sourceLabel: 'Einhell France, fiche officielle PRESSITO 18/25 Hybrid', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A' }],
	fieldSources: { fadCurve: ['einhell-4020430-official'], voltage: ['einhell-4020430-official'], ean: ['einhell-4020430-official'], weightKg: ['einhell-4020430-official'] }, notes: ['Profil multipoint constructeur.'],
};

export default product;
