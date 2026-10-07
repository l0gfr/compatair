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
		"overview": "Toku MS-4125B, référence MS-4125B. Le tableau fabricant publie 498 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 20000 tr/min. Masse publiée : 1,0 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60.",
			"Référence fabricant : MS-4125B.",
			"Vitesse à vide publiée : 20000 tr/min.",
			"Masse publiée : 1,0 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm."
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
				"toku-ms-4125b-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-ms-4125b-20260926"
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
	"connectorSize": "PT 1/4\""
};

export default product;
