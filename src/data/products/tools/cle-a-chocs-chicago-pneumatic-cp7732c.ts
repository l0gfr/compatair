import { chicagoPneumaticImpact2026 } from '../../product-factories/chicago-pneumatic-general-industry-2026.ts';

const generated = chicagoPneumaticImpact2026('chicago-pneumatic-cp7732c');
const product = {
	...generated,
	id: generated.id,
	evidence: [...generated.evidence,
		{ id: 'cp7732c-leaflet-2016-reviewed-2026-09-25', sourceUrl: 'https://tools.cp.com/content/dam/brands/Chicago%20Pneumatic/cp-tools-literature/leaflets-and-brochures/cp7732c-impact-wrench/CP7732C_Leaflet_EN.pdf', sourceLabel: 'Chicago Pneumatic, brochure CP7732C (2016), page 2', sourceType: 'manual', retrievedAt: '2026-09-25', confidence: 'A', notes: 'La ligne du MPN 8941077321 distingue 2,6 L/s moyens et 10,2 L/s en charge, sous 6,3 bar.' },
		{ id: 'cp7732c-web-2026-09-25', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7732c-sku8941077321', sourceLabel: 'Chicago Pneumatic, fiche CP7732C, données métriques', sourceType: 'manufacturer', retrievedAt: '2026-09-25', confidence: 'A', notes: 'La fiche affiche 10 L/s en charge et 14 L/s à vide ; aucun arrondi explicatif n’est indiqué.' },
	],
	fieldSources: { ...generated.fieldSources, airflowLpm: [...generated.fieldSources.airflowLpm, 'cp7732c-leaflet-2016-reviewed-2026-09-25'] },
	editorial: { ...generated.editorial, limitations: [...generated.editorial.limitations, 'La fiche web affiche 10 L/s en charge contre 10,2 L/s dans la brochure. CompatAir conserve 612 L/min comme besoin conservateur documenté ; les 156 L/min moyens ne sont pas le besoin en charge.'] },
};

export default product;
