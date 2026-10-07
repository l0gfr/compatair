import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yrd-6nbk",
	"slug": "yokota-yrd-6nbk",
	"brand": "Yokota",
	"model": "YRD-6NBK",
	"mpn": "YRD-6NBK",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Yokota YRD-6NBK",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yrd-6nbk.webp",
		"alt": "Repères techniques Yokota YRD-6NBK, référence YRD-6NBK",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YRD-6NBK, référence YRD-6NBK. Le tableau fabricant publie 498 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 2800 tr/min. Masse publiée : 0,9 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60.",
			"Référence fabricant : YRD-6NBK.",
			"Vitesse à vide publiée : 2800 tr/min.",
			"Masse publiée : 0,9 kg.",
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
				"yokota-yrd-6nbk-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yrd-6nbk-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "2800 tr/min",
			"evidenceIds": [
				"yokota-yrd-6nbk-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,9 kg",
			"evidenceIds": [
				"yokota-yrd-6nbk-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"yokota-yrd-6nbk-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-yrd-6nbk-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yrd-6nbk-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. YRD-6NBK",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yrd-6nbk-20260926-workingpressurebar-1",
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
			"yokota-yrd-6nbk-20260926"
		],
		"workingPressureBar": [
			"yokota-yrd-6nbk-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yrd-6nbk-20260926"
		],
		"recommendedHose": [
			"yokota-yrd-6nbk-20260926"
		],
		"connectorSize": [
			"yokota-yrd-6nbk-20260926"
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
