const product = {
	id: 'einhell-te-ac-240-24-silent', slug: 'einhell-te-ac-240-24-silent', brand: 'Einhell', model: 'TE-AC 240/24 Silent', mpn: '4010452', ean: '4006825673210',
	tankLiters: 24, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 166 }, { pressureBar: 4, litersPerMinute: 120 }, { pressureBar: 7, litersPerMinute: 92 }], intakeFlowLpm: 240, oilType: 'oil-free', noiseDb: 70, powerKw: 1.5, weightKg: 26.15, mobility: 'mobile', phase: 'single-phase', confidence: 'A', status: 'active',
	image: { src: '/images/products/einhell-te-ac-240-24-silent.jpg', alt: 'Compresseur silencieux Einhell TE-AC 240/24 Silent', sourceUrl: 'https://www.einhell.fr/p/4010452-te-ac-240-24-silent/', sourceLabel: 'Visuel officiel Einhell' },
	editorial: { overview: 'Le TE-AC 240/24 Silent est un compresseur vertical sans huile à cuve de 24 litres. Einhell documente 166 L/min à 0 bar, 120 L/min à 4 bar et 92 L/min à 7 bar.', verifiedFacts: ['La fiche publie 240 L/min aspirés, 10 bar maximum et une puissance de 1,5 kW.', 'Le niveau de pression acoustique annoncé est 70 dB(A), pour un poids de 26,15 kg.'], limitations: ['Le débit à 10 bar n’est pas publié et n’est pas extrapolé.', 'La qualification « silencieux » reprend la catégorie commerciale du constructeur ; la valeur chiffrée publiée reste 70 dB(A).'] },
	evidence: [{ id: 'einhell-4010452-official', sourceUrl: 'https://www.einhell.fr/p/4010452-te-ac-240-24-silent/', sourceLabel: 'Einhell France, fiche officielle TE-AC 240/24 Silent', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Débits restitués multipoints distincts du débit aspiré de 240 L/min.' }],
	fieldSources: { fadCurve: ['einhell-4010452-official'], intakeFlowLpm: ['einhell-4010452-official'], noiseDb: ['einhell-4010452-official'], ean: ['einhell-4010452-official'], weightKg: ['einhell-4010452-official'] }, notes: ['Courbe limitée aux trois points constructeur.'],
};

export default product;
