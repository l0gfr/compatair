const product = {
		id: 'einhell-tc-ac-270-50-10', slug: 'einhell-tc-ac-270-50-10', brand: 'Einhell', model: 'TC-AC 270/50/10', mpn: '4007361', ean: '4006825683974',
		tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 140 }, { pressureBar: 4, litersPerMinute: 125 }, { pressureBar: 7, litersPerMinute: 100 }], intakeFlowLpm: 270, oilType: 'oil', noiseDb: 75, powerKw: 1.8, weightKg: 30.35, mobility: 'mobile', voltage: '220-240 V', phase: 'single-phase', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-tc-ac-270-50-10.webp', alt: 'Compresseur Einhell TC-AC 270/50/10', sourceUrl: 'https://www.einhell.de/p/4007361-tc-ac-270-50-10/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le TC-AC 270/50/10 associe une cuve de 50 litres à une pompe lubrifiée et une pression maximale de 10 bar. Sa fiche publie trois débits de sortie exploitables sans assimiler les 270 L/min aspirés au débit utile.', verifiedFacts: ['Einhell publie 140 L/min à 0 bar, 125 L/min à 4 bar et 100 L/min à 7 bar.', 'La fiche indique 1,8 kW, 30,35 kg et un niveau de pression acoustique de 75 dB(A).'], limitations: ['Le débit disponible au-delà de 7 bar n’est pas documenté.', 'La cuve de 50 litres ne compense pas durablement un débit inférieur au besoin continu de l’outil.'] },
		evidence: [{ id: 'einhell-4007361-official', sourceUrl: 'https://www.einhell.de/p/4007361-tc-ac-270-50-10/', sourceLabel: 'Einhell Allemagne, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4007361-official'], ean: ['einhell-4007361-official'], noiseDb: ['einhell-4007361-official'], maxPressureBar: ['einhell-4007361-official'] }, notes: ['Le niveau sonore publié mesure la pression acoustique au poste d’écoute (LpA).'],
	};

export default product;
