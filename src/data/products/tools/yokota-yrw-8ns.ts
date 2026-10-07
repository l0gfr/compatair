import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yrw-8ns",
	"slug": "yokota-yrw-8ns",
	"brand": "Yokota",
	"model": "YRW-8NS",
	"mpn": "YRW-8NS",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Yokota YRW-8NS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yrw-8ns.webp",
		"alt": "Repères techniques Yokota YRW-8NS, référence YRW-8NS",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YRW-8NS, référence YRW-8NS. Le tableau fabricant publie 498 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 2 kg. Diamètre intérieur de flexible conseillé : 10 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60.",
			"Référence fabricant : YRW-8NS.",
			"Masse publiée : 2 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm.",
			"Raccord pneumatique : PT 1/4\"."
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
				"yokota-yrw-8ns-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yrw-8ns-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2 kg",
			"evidenceIds": [
				"yokota-yrw-8ns-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"yokota-yrw-8ns-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-yrw-8ns-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yrw-8ns-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 40, réf. YRW-8NS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yrw-8ns-20260926-workingpressurebar-1",
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
			"yokota-yrw-8ns-20260926"
		],
		"workingPressureBar": [
			"yokota-yrw-8ns-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yrw-8ns-20260926"
		],
		"recommendedHose": [
			"yokota-yrw-8ns-20260926"
		],
		"connectorSize": [
			"yokota-yrw-8ns-20260926"
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
