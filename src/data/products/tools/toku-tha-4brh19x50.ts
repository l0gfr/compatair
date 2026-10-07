import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-tha-4brh19x50",
	"slug": "toku-tha-4brh19x50",
	"brand": "Toku",
	"model": "THA-4BRH19x50",
	"mpn": "THA-4BRH19x50",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Toku THA-4BRH19x50",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-tha-4brh19x50.webp",
		"alt": "Repères techniques Toku THA-4BRH19x50, référence THA-4BRH19x50",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku THA-4BRH19x50, référence THA-4BRH19x50. Le tableau fabricant publie 948 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 7,8 kg. Diamètre intérieur de flexible conseillé : 13 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 15.8 L/s, convertis en 948 L/min par multiplication par 60.",
			"Référence fabricant : THA-4BRH19x50.",
			"Masse publiée : 7,8 kg.",
			"Diamètre intérieur de flexible conseillé : 13 mm.",
			"Raccord pneumatique : PT 3/8\"."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"toku-tha-4brh19x50-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 15.8 L/s, convertis en 948 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-tha-4brh19x50-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "7,8 kg",
			"evidenceIds": [
				"toku-tha-4brh19x50-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"toku-tha-4brh19x50-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"toku-tha-4brh19x50-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-tha-4brh19x50-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 50, réf. THA-4BRH19x50",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 15.8 L/s, convertis en 948 L/min par multiplication par 60."
		},
		{
			"id": "toku-tha-4brh19x50-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-tha-4brh19x50-20260926"
		],
		"workingPressureBar": [
			"toku-tha-4brh19x50-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-tha-4brh19x50-20260926"
		],
		"recommendedHose": [
			"toku-tha-4brh19x50-20260926"
		],
		"connectorSize": [
			"toku-tha-4brh19x50-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 948,
		"typical": 948,
		"max": 948
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 3/8\""
};

export default product;
