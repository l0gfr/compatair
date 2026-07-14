const product = {
	id: 'einhell-pressito-18-21', slug: 'einhell-pressito-18-21', brand: 'Einhell', model: 'PRESSITO 18/21', mpn: '4020467',
	tankLiters: 0, maxPressureBar: 10.5, fadCurve: [{ pressureBar: 0, litersPerMinute: 14 }, { pressureBar: 4, litersPerMinute: 9 }, { pressureBar: 7, litersPerMinute: 6 }], intakeFlowLpm: 21, oilType: 'oil-free', weightKg: 2.06, mobility: 'portable', voltage: '18 V', confidence: 'A', status: 'active',
	image: { src: '/images/products/einhell-pressito-18-21.jpg', alt: 'Compresseur sans fil Einhell PRESSITO 18/21', sourceUrl: 'https://www.einhell.fr/p/4020467-pressito-18-21/', sourceLabel: 'Visuel officiel Einhell' },
	editorial: { overview: 'Le PRESSITO 18/21 est un gonfleur sans fil sans réservoir. Einhell documente 14 L/min à 0 bar, 9 L/min à 4 bar et 6 L/min à 7 bar.', verifiedFacts: ['La pression maximale publiée est 10,5 bar et le débit aspiré 21 L/min.', 'Le poids produit est 2,06 kg et l’alimentation utilise une batterie 18 V.'], limitations: ['Ce gonfleur sans cuve n’est pas assimilé à un compresseur d’atelier.', 'Aucun débit n’est extrapolé entre 7 et 10,5 bar.'] },
	evidence: [{ id: 'einhell-4020467-official', sourceUrl: 'https://www.einhell.fr/p/4020467-pressito-18-21/', sourceLabel: 'Einhell France, fiche officielle PRESSITO 18/21', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A' }],
	fieldSources: { fadCurve: ['einhell-4020467-official'], intakeFlowLpm: ['einhell-4020467-official'], weightKg: ['einhell-4020467-official'] }, notes: ['Profil multipoint constructeur, sans estimation silencieuse.'],
};

export default product;
