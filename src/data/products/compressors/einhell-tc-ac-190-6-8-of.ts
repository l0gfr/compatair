const pageEvidenceId = 'einhell-4020655-official';
const manualEvidenceId = 'einhell-4020655-manual';

const product = {
	id: 'einhell-tc-ac-190-6-8-of',
	slug: 'einhell-tc-ac-190-6-8-of',
	brand: 'Einhell',
	model: 'TC-AC 190/6/8 OF',
	mpn: '4020655',
	tankLiters: 6,
	maxPressureBar: 8,
	fadCurve: [{ pressureBar: 0, litersPerMinute: 130 }, { pressureBar: 4, litersPerMinute: 77 }, { pressureBar: 7, litersPerMinute: 55 }],
	intakeFlowLpm: 190,
	oilType: 'oil-free',
	noiseDb: 77,
	powerKw: 1.2,
	weightKg: 8.9,
	mobility: 'portable',
	voltage: '220–240 V / 50 Hz',
	phase: 'single-phase',
	confidence: 'A',
	status: 'active',
	image: { src: '/images/products/einhell-tc-ac-190-6-8-of.webp', alt: 'Compresseur portable Einhell TC-AC 190/6/8 OF', sourceUrl: 'https://www.einhell.de/p/4020655-tc-ac-190-6-8-of/', sourceLabel: 'Visuel officiel Einhell' },
	editorial: {
		overview: 'Le TC-AC 190/6/8 OF est un compresseur portable sans huile doté d’une cuve de 6 litres. Einhell publie séparément le débit aspiré de 190 L/min et les débits restitués de 130 L/min à 0 bar, 77 L/min à 4 bar et 55 L/min à 7 bar.',
		verifiedFacts: ['La pression maximale est de 8 bar et la puissance absorbée de 1,2 kW.', 'Le constructeur indique une pression acoustique LpA de 77 dB(A) et un poids de 8,9 kg.'],
		limitations: ['Aucun débit restitué n’est publié à 8 bar ; aucune extrapolation n’est faite.', 'Le cycle de service n’est pas intégré faute de valeur chiffrée dans les sources retenues.'],
	},
	specifications: [
		{ label: 'Débit restitué publié', value: '130 L/min à 0 bar ; 77 L/min à 4 bar ; 55 L/min à 7 bar', evidenceIds: [pageEvidenceId, manualEvidenceId] },
		{ label: 'Débit aspiré', value: '190 L/min', evidenceIds: [pageEvidenceId, manualEvidenceId] },
		{ label: 'Pression maximale', value: '8 bar', evidenceIds: [pageEvidenceId, manualEvidenceId] },
		{ label: 'Cuve', value: '6 l', evidenceIds: [pageEvidenceId, manualEvidenceId] },
		{ label: 'Puissance absorbée', value: '1,2 kW', evidenceIds: [pageEvidenceId, manualEvidenceId] },
		{ label: 'Alimentation', value: '220–240 V monophasé, 50 Hz', evidenceIds: [pageEvidenceId, manualEvidenceId] },
		{ label: 'Niveau de pression acoustique', value: '77 dB(A) LpA', evidenceIds: [pageEvidenceId, manualEvidenceId] },
		{ label: 'Poids', value: '8,9 kg', evidenceIds: [pageEvidenceId] },
		{ label: 'Lubrification', value: 'Sans huile', evidenceIds: [pageEvidenceId, manualEvidenceId] },
	],
	evidence: [
		{ id: pageEvidenceId, sourceUrl: 'https://www.einhell.de/p/4020655-tc-ac-190-6-8-of/', sourceLabel: 'Einhell Allemagne, fiche officielle TC-AC 190/6/8 OF', sourceType: 'manufacturer', retrievedAt: '2026-07-15', confidence: 'A', notes: 'Référence fabricant, caractéristiques produit, débits aspiré et restitué.' },
		{ id: manualEvidenceId, sourceUrl: 'https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_4hdl8mkd5p79n2v95l65f4th1c?attachment;filename=4020655_21023_001_SPK13.pdf', sourceLabel: 'Einhell, documentation officielle TC-AC 190/6/8 OF', sourceType: 'manual', retrievedAt: '2026-09-25', confidence: 'A' },
	],
	fieldSources: { mpn: [pageEvidenceId], tankLiters: [pageEvidenceId, manualEvidenceId], maxPressureBar: [pageEvidenceId, manualEvidenceId], fadCurve: [pageEvidenceId, manualEvidenceId], intakeFlowLpm: [pageEvidenceId, manualEvidenceId], oilType: [pageEvidenceId, manualEvidenceId], noiseDb: [pageEvidenceId, manualEvidenceId], powerKw: [pageEvidenceId, manualEvidenceId], weightKg: [pageEvidenceId], mobility: [pageEvidenceId], voltage: [pageEvidenceId, manualEvidenceId], phase: [pageEvidenceId, manualEvidenceId], status: [pageEvidenceId] },
	notes: ['Le débit aspiré de 190 L/min n’est jamais utilisé comme débit restitué.'],
};

export default product;
