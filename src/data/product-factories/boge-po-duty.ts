// PO 1–8 L/LR/LTR only: the brochure names this family on pp. 6–7.
export const bogePoDutyEvidence = {
	id: 'boge-po-continuous-duty-20260927',
	sourceUrl: 'https://zh.boge.com/sites/default/files/382-en-po-series_8.pdf#page=3',
	sourceLabel: 'BOGE, brochure série PO, fonctionnement intermittent ou continu, p. 3',
	sourceType: 'manufacturer',
	retrievedAt: '2026-09-27',
	confidence: 'A',
	notes: 'La rubrique « Intermittent or continuous operation » indique que la série PO ne comporte pas de restriction de durée de fonctionnement. Les modèles PO 1 à PO 8, configurations L, LR et LTR, sont identifiés dans les tableaux p. 6–7. Respecter les conditions d’installation et de maintenance de la notice.',
};

export const bogePoDutyFact = 'La brochure BOGE autorise le fonctionnement continu de cette série PO ; taux de marche documenté de 100 %.';

export const bogePoDutySpecification = {
	label: 'Taux de marche constructeur',
	value: '100 %, fonctionnement continu déclaré pour la série PO ; respecter les conditions de la notice.',
	evidenceIds: [bogePoDutyEvidence.id],
};
