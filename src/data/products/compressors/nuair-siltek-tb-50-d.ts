const product = {
		id: 'nuair-siltek-tb-50-d', slug: 'nuair-siltek-tb-50-d', brand: 'Nuair', model: 'SILTEK TB 50 D', mpn: 'B2DC504NUA', ean: '8016738796766',
		tankLiters: 50, maxPressureBar: 8, fadCurve: [], intakeFlowLpm: 320, oilType: 'oil-free', noiseDb: 64, powerKw: 2.2, mobility: 'mobile', voltage: '230 V / 50 Hz', phase: 'single-phase', confidence: 'B', status: 'active',
		image: { src: '/images/products/nuair-siltek-tb-50-d.webp', alt: 'Compresseur silencieux Nuair SILTEK TB 50 D', sourceUrl: 'https://www.nuair.it/index.php/en/products/piston-compressors/standard-range/item/download/211_5c4af607a87834a0b44ec71f33187d0a', sourceLabel: 'Visuel du catalogue officiel Nuair' },
		editorial: { overview: 'Le Nuair SILTEK TB 50 D est un compresseur silencieux sans huile de 50 litres à deux cylindres. Le catalogue ne publie que le débit aspiré : aucune compatibilité d’outil à débit fixe ne peut être conclue.', verifiedFacts: ['Nuair publie 320 L/min aspirés, 8 bar maximum, 2,2 kW et 1 450 tr/min.', 'Le modèle est sans huile, monophasé 230 V et annoncé à 64 dB(A).'], limitations: ['Aucun débit restitué à une pression donnée n’est publié.', 'Les 43 kg indiqués sont un poids brut d’expédition et ne sont pas enregistrés comme poids net du compresseur.'] },
		specifications: [{ label: 'Poids brut', value: '43 kg', evidenceIds: ['nuair-siltek-brochure'] }, { label: 'Cylindres', value: '2', evidenceIds: ['nuair-siltek-brochure'] }],
		evidence: [{ id: 'nuair-siltek-brochure', sourceUrl: 'https://www.nuair.it/index.php/en/products/piston-compressors/standard-range/item/download/211_5c4af607a87834a0b44ec71f33187d0a', sourceLabel: 'Nuair, catalogue compresseurs SILTEK', sourceType: 'manufacturer', retrievedAt: '2026-07-16', confidence: 'A' }],
		fieldSources: { fadCurve: ['nuair-siltek-brochure'], ean: ['nuair-siltek-brochure'], noiseDb: ['nuair-siltek-brochure'], maxPressureBar: ['nuair-siltek-brochure'] }, notes: ['La courbe FAD reste vide : 320 L/min est explicitement un débit aspiré.'],
	};

export default product;
