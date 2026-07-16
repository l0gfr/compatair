const product = {
		id: 'mecafer-fifty-50l-2hp', slug: 'mecafer-fifty-50l-2hp', brand: 'Mecafer', model: 'Fifty 50 L 2 HP', mpn: '425090', ean: '3283494250909',
		tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 3, litersPerMinute: 140 }, { pressureBar: 7, litersPerMinute: 126 }], intakeFlowLpm: 230, oilType: 'oil-free', noiseDb: 97, weightKg: 23.1, mobility: 'mobile', confidence: 'A', status: 'active',
		image: { src: '/images/products/mecafer-fifty-50l-2hp.webp', alt: 'Compresseur vertical Mecafer Fifty 50 L 2 HP', sourceUrl: 'https://www.mecafer.com/compresseurs/compresseur-fifty-50l-2hp', sourceLabel: 'Visuel officiel Mecafer' },
		editorial: { overview: 'Le Mecafer Fifty est un compresseur vertical sans huile de 50 litres. Les deux débits restitués publiés autorisent un calcul borné entre 3 et 7 bar, sans assimiler les 230 L/min aspirés à un débit utile.', verifiedFacts: ['Mecafer publie 140 L/min restitués à 3 bar et 126 L/min à 7 bar.', 'La fiche indique une cuve de 50 litres, 10 bar maximum, 23,1 kg et 97 dB(A) de puissance acoustique.'], limitations: ['Aucun débit restitué n’est publié au-delà de 7 bar.', 'Le format vertical réduit l’emprise au sol mais ne change pas la capacité de débit continu.'] },
		specifications: [{ label: 'Dimensions', value: '295 × 310 × 880 mm', evidenceIds: ['mecafer-425090-official'] }],
		evidence: [{ id: 'mecafer-425090-official', sourceUrl: 'https://www.mecafer.com/compresseurs/compresseur-fifty-50l-2hp', sourceLabel: 'Mecafer, fiche officielle Fifty 50 L', sourceType: 'manufacturer', retrievedAt: '2026-07-16', confidence: 'A' }],
		fieldSources: { fadCurve: ['mecafer-425090-official'], ean: ['mecafer-425090-official'], noiseDb: ['mecafer-425090-official'], maxPressureBar: ['mecafer-425090-official'] }, notes: ['Le niveau de 97 dB(A) est une puissance acoustique LwA.'],
	};

export default product;
