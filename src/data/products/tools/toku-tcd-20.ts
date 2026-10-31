import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-tcd-20",
	"slug": "toku-tcd-20",
	"brand": "Toku",
	"model": "TCD-20",
	"mpn": "TCD-20",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Toku TCD-20",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-tcd-20.webp",
		"alt": "Repères techniques Toku TCD-20, référence TCD-20",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku TCD-20. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge. La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement. Référence fabricant : TCD-20. Masse publiée : 11,4 kg. Diamètre intérieur de flexible conseillé : 13 mm. Raccord pneumatique : PT 1/2\".",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Référence fabricant : TCD-20.",
			"Masse publiée : 11,4 kg.",
			"Diamètre intérieur de flexible conseillé : 13 mm.",
			"Raccord pneumatique : PT 1/2\".",
			"Consommation de régime non précisé publiée : 1080 L/min."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas.",
			"Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"toku-tcd-20-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 1080 L/min.",
			"evidenceIds": [
				"toku-tcd-20-reserved-20261031-1",
				"toku-tcd-20-reserved-20261031-2"
			]
		},
		{
			"label": "Masse publiée",
			"value": "11,4 kg",
			"evidenceIds": [
				"toku-tcd-20-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"toku-tcd-20-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/2\"",
			"evidenceIds": [
				"toku-tcd-20-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":1080,\"typical\":1080,\"max\":1080},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"toku-tcd-20-20260926",
				"toku-tcd-20-reserved-20261031-1",
				"toku-tcd-20-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-tcd-20-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 50, réf. TCD-20",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 18 L/s, convertis en 1080 L/min par multiplication par 60."
		},
		{
			"id": "toku-tcd-20-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "toku-tcd-20-reserved-20261031-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
			"sourceLabel": "Toku TCD-20 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		},
		{
			"id": "toku-tcd-20-reserved-20261031-2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Toku TCD-20 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-tcd-20-20260926"
		],
		"workingPressureBar": [
			"toku-tcd-20-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-tcd-20-20260926"
		],
		"recommendedHose": [
			"toku-tcd-20-20260926"
		],
		"connectorSize": [
			"toku-tcd-20-20260926"
		],
		"airflowBasis": [
			"toku-tcd-20-reserved-20261031-1",
			"toku-tcd-20-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1080,
		"typical": 1080,
		"max": 1080
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 1/2\"",
	"airflowBasis": "unqualified"
};

export default product;
