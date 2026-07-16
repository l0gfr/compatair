const product = {
		id: 'stanley-dn200-10-5', slug: 'stanley-dn200-10-5', brand: 'Stanley', model: 'DN200/10/5', mpn: 'DN200-10-5', ean: '8016738754438',
		tankLiters: 5, maxPressureBar: 10, fadCurve: [{ pressureBar: 3, litersPerMinute: 105 }, { pressureBar: 7, litersPerMinute: 85 }], intakeFlowLpm: 180, oilType: 'oil-free', noiseDb: 97, weightKg: 8.2, mobility: 'portable', confidence: 'A', status: 'active',
		image: { src: '/images/products/stanley-dn200-10-5.webp', alt: 'Compresseur portable Stanley DN200/10/5', sourceUrl: 'https://www.mecafer.com/compresseurs/compresseur-coaxial-non-lubrifie-5l-15hp', sourceLabel: 'Visuel officiel distribué par Mecafer' },
		editorial: { overview: 'Le Stanley DN200/10/5 est un compresseur portable sans huile de 5 litres. Sa fiche fournit deux valeurs de débit restitué exploitables entre 3 et 7 bar.', verifiedFacts: ['La fiche publie 105 L/min restitués à 3 bar et 85 L/min à 7 bar.', 'Le modèle est donné pour 10 bar maximum, 180 L/min aspirés, 8,2 kg et une cuve de 5 litres.'], limitations: ['Aucun débit restitué n’est publié entre 7 et 10 bar.', 'La petite cuve convient aux appels d’air courts mais ne compense pas un débit continu insuffisant.'] },
		evidence: [{ id: 'stanley-dn200-official', sourceUrl: 'https://www.mecafer.com/compresseurs/compresseur-coaxial-non-lubrifie-5l-15hp', sourceLabel: 'Mecafer, distributeur de la gamme Stanley', sourceType: 'manufacturer', retrievedAt: '2026-07-16', confidence: 'A' }],
		fieldSources: { fadCurve: ['stanley-dn200-official'], ean: ['stanley-dn200-official'], noiseDb: ['stanley-dn200-official'], maxPressureBar: ['stanley-dn200-official'] }, notes: ['Le niveau de 97 dB(A) est une puissance acoustique LwA.'],
	};

export default product;
