const product = {
	id: 'boge-po-2-l',
	slug: 'boge-po-2-l',
	brand: 'BOGE',
	model: 'PO 2 L',
	variant: { familyId: 'boge-po-l', label: '10 bar, 150 L/min', distinguishingAttributes: { pression: '10 bar', debitEffectif: '150 L/min', puissance: '1,5 kW' } },
	tankLiters: 0,
	maxPressureBar: 10,
	fadCurve: [{ pressureBar: 8, litersPerMinute: 150 }],
	oilType: 'oil-free',
	powerKw: 1.5,
	weightKg: 64,
	confidence: 'A',
	status: 'active',
	image: { src: '/images/products/boge-po-series.webp', alt: 'Groupe compresseur sans huile BOGE série PO', sourceUrl: 'https://www.boge.com/en-sg/products/compressors/piston-compressors/po-series-up-to-11-kw/', sourceLabel: 'Visuel officiel BOGE' },
	editorial: {
		overview: 'Le PO 2 L est un groupe compresseur fixe sans réservoir. BOGE publie 150 L/min de débit d’air effectif à 80 % de la pression maximale, soit à 8 bar pour cette version 10 bar.',
		verifiedFacts: ['Le groupe comprime sans huile et développe une puissance moteur de 1,5 kW.', 'Le tableau actuel indique un poids maximal de 64 kg pour le PO 2 L et distingue le débit effectif du débit aspiré.'],
		limitations: ['Cette fiche porte sur le groupe compresseur sans cuve : le réservoir et le traitement d’air doivent être dimensionnés séparément.', 'Un seul point de débit effectif est publié, aucune courbe complète ne peut être reconstruite.'],
	},
	evidence: [
		{ id: 'boge-po-current-range', sourceUrl: 'https://www.boge.com/en-sg/products/compressors/piston-compressors/po-series-up-to-11-kw/', sourceLabel: 'BOGE, gamme actuelle de compresseurs à piston PO', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A', notes: 'Tableau actuel des variantes : pression, débit effectif maximal, puissance, absence de réservoir et poids maximal.' },
		{ id: 'boge-po-technical-brochure', sourceUrl: 'https://row.boge.com/sites/default/files/382-en-po-series_19.pdf', sourceLabel: 'BOGE, brochure technique de la série PO', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A', notes: 'La brochure précise que le débit d’air effectif est mesuré selon VDMA 4362 à 80 % de la pression maximale.' },
	],
	fieldSources: { tankLiters: ['boge-po-current-range'], maxPressureBar: ['boge-po-current-range'], fadCurve: ['boge-po-current-range', 'boge-po-technical-brochure'], oilType: ['boge-po-current-range', 'boge-po-technical-brochure'], powerKw: ['boge-po-current-range'], weightKg: ['boge-po-current-range'], status: ['boge-po-current-range'] },
	notes: ['Point FAD : 150 L/min à 8 bar, car BOGE mesure le débit effectif à 80 % des 10 bar maximaux.'],
};

export default product;
