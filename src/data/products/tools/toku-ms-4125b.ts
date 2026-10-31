import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-ms-4125b",
	"slug": "toku-ms-4125b",
	"brand": "Toku",
	"model": "MS-4125B",
	"mpn": "MS-4125B",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Toku MS-4125B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-ms-4125b.webp",
		"alt": "Repères techniques Toku MS-4125B, référence MS-4125B",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku MS-4125B. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge. La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement. Référence fabricant : MS-4125B. Vitesse à vide publiée : 20000 tr/min. Masse publiée : 1,0 kg. Diamètre intérieur de flexible conseillé : 10 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Référence fabricant : MS-4125B.",
			"Vitesse à vide publiée : 20000 tr/min.",
			"Masse publiée : 1,0 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm.",
			"Consommation de régime non précisé publiée : 498 L/min."
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
				"toku-ms-4125b-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 498 L/min.",
			"evidenceIds": [
				"toku-ms-4125b-reserved-20261031-1",
				"toku-ms-4125b-reserved-20261031-2"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "20000 tr/min",
			"evidenceIds": [
				"toku-ms-4125b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,0 kg",
			"evidenceIds": [
				"toku-ms-4125b-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"toku-ms-4125b-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"toku-ms-4125b-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":498,\"typical\":498,\"max\":498},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"toku-ms-4125b-20260926",
				"toku-ms-4125b-reserved-20261031-1",
				"toku-ms-4125b-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-ms-4125b-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 47, réf. MS-4125B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60."
		},
		{
			"id": "toku-ms-4125b-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "toku-ms-4125b-reserved-20261031-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
			"sourceLabel": "Toku MS-4125B : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		},
		{
			"id": "toku-ms-4125b-reserved-20261031-2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Toku MS-4125B : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-ms-4125b-20260926"
		],
		"workingPressureBar": [
			"toku-ms-4125b-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-ms-4125b-20260926"
		],
		"recommendedHose": [
			"toku-ms-4125b-20260926"
		],
		"connectorSize": [
			"toku-ms-4125b-20260926"
		],
		"airflowBasis": [
			"toku-ms-4125b-reserved-20261031-1",
			"toku-ms-4125b-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 498,
		"typical": 498,
		"max": 498
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
