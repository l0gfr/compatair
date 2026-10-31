import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-mid-600",
	"slug": "toku-mid-600",
	"brand": "Toku",
	"model": "MID-600",
	"mpn": "MID-600",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Toku MID-600",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-mid-600.webp",
		"alt": "Repères techniques Toku MID-600, référence MID-600",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku MID-600. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge. La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement. Référence fabricant : MID-600. Vitesse à vide publiée : 9500 tr/min. Masse publiée : 0,9 kg. Diamètre intérieur de flexible conseillé : 6,5 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Référence fabricant : MID-600.",
			"Vitesse à vide publiée : 9500 tr/min.",
			"Masse publiée : 0,9 kg.",
			"Diamètre intérieur de flexible conseillé : 6,5 mm.",
			"Consommation de régime non précisé publiée : 300 L/min."
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
				"toku-mid-600-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 300 L/min.",
			"evidenceIds": [
				"toku-mid-600-reserved-20261031-1",
				"toku-mid-600-reserved-20261031-2"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "9500 tr/min",
			"evidenceIds": [
				"toku-mid-600-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,9 kg",
			"evidenceIds": [
				"toku-mid-600-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"toku-mid-600-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"toku-mid-600-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":300,\"typical\":300,\"max\":300},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"toku-mid-600-20260926",
				"toku-mid-600-reserved-20261031-1",
				"toku-mid-600-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-mid-600-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 41, réf. MID-600",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 5 L/s, convertis en 300 L/min par multiplication par 60."
		},
		{
			"id": "toku-mid-600-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "toku-mid-600-reserved-20261031-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
			"sourceLabel": "Toku MID-600 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		},
		{
			"id": "toku-mid-600-reserved-20261031-2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Toku MID-600 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-mid-600-20260926"
		],
		"workingPressureBar": [
			"toku-mid-600-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-mid-600-20260926"
		],
		"recommendedHose": [
			"toku-mid-600-20260926"
		],
		"connectorSize": [
			"toku-mid-600-20260926"
		],
		"airflowBasis": [
			"toku-mid-600-reserved-20261031-1",
			"toku-mid-600-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
