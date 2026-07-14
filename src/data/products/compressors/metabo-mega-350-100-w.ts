const product = {
		id: 'metabo-mega-350-100-w', slug: 'metabo-mega-350-100-w', brand: 'Metabo', model: 'Mega 350-100 W', mpn: '601538000', ean: '4007430244734',
		tankLiters: 90, maxPressureBar: 10, fadCurve: [{ pressureBar: 8, litersPerMinute: 220 }], intakeFlowLpm: 320, oilType: 'oil', noiseDb: 86, confidence: 'A', status: 'active',
		image: { src: '/images/products/metabo-mega-350-100-w.webp', alt: 'Compresseur Metabo Mega 350-100 W', sourceUrl: 'https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/mega-350-100-w-601538000-compresseur.html', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'Le Mega 350-100 W est un modèle lubrifié à cuve de 90 litres. Metabo publie 220 L/min effectifs à 80 % de la pression maximale, soit 8 bar.', verifiedFacts: ['La fiche distingue 320 L/min aspirés, 250 L/min de remplissage et 220 L/min effectifs.', 'La pression maximale est de 10 bar et le niveau sonore publié de 86 dB.'], limitations: ['La source ne fournit qu’un point de débit effectif à 8 bar.', 'Une interpolation vers une pression inférieure n’est pas effectuée faute de second point documenté.'] },
		evidence: [{ id: 'metabo-601538000-official', sourceUrl: 'https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/mega-350-100-w-601538000-compresseur.html', sourceLabel: 'Metabo France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-13', confidence: 'A', notes: 'Débit effectif annoncé à 80 % de la pression maximale.' }], notes: [],
	};

export default product;
