import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-md-3312b",
	"slug": "toku-md-3312b",
	"brand": "Toku",
	"model": "MD-3312B",
	"mpn": "MD-3312B",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Toku MD-3312B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-md-3312b.webp",
		"alt": "Repères techniques Toku MD-3312B, référence MD-3312B",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku MD-3312B, référence MD-3312B. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 1900 tr/min. Masse publiée : 0,9 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60.",
			"Référence fabricant : MD-3312B.",
			"Vitesse à vide publiée : 1900 tr/min.",
			"Masse publiée : 0,9 kg.",
			"Diamètre intérieur de flexible conseillé : 6,5 mm."
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
				"toku-md-3312b-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-md-3312b-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1900 tr/min",
			"evidenceIds": [
				"toku-md-3312b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,9 kg",
			"evidenceIds": [
				"toku-md-3312b-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"toku-md-3312b-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"toku-md-3312b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-md-3312b-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. MD-3312B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60."
		},
		{
			"id": "toku-md-3312b-20260926-workingpressurebar-1",
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
			"toku-md-3312b-20260926"
		],
		"workingPressureBar": [
			"toku-md-3312b-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-md-3312b-20260926"
		],
		"recommendedHose": [
			"toku-md-3312b-20260926"
		],
		"connectorSize": [
			"toku-md-3312b-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\""
};

export default product;
