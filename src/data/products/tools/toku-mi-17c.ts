import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-mi-17c",
	"slug": "toku-mi-17c",
	"brand": "Toku",
	"model": "MI-17C",
	"mpn": "MI-17C",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Toku MI-17C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-mi-17c.webp",
		"alt": "Repères techniques Toku MI-17C, référence MI-17C",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku MI-17C, référence MI-17C. Le tableau fabricant publie 798 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 8800 tr/min. Masse publiée : 1,8 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation en charge publiée : 13.3 L/s, convertis en 798 L/min par multiplication par 60.",
			"Référence fabricant : MI-17C.",
			"Vitesse à vide publiée : 8800 tr/min.",
			"Masse publiée : 1,8 kg.",
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
				"toku-mi-17c-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 13.3 L/s, convertis en 798 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-mi-17c-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "8800 tr/min",
			"evidenceIds": [
				"toku-mi-17c-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,8 kg",
			"evidenceIds": [
				"toku-mi-17c-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"toku-mi-17c-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"toku-mi-17c-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-mi-17c-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. MI-17C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 13.3 L/s, convertis en 798 L/min par multiplication par 60."
		},
		{
			"id": "toku-mi-17c-20260926-workingpressurebar-1",
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
			"toku-mi-17c-20260926"
		],
		"workingPressureBar": [
			"toku-mi-17c-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-mi-17c-20260926"
		],
		"recommendedHose": [
			"toku-mi-17c-20260926"
		],
		"connectorSize": [
			"toku-mi-17c-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 798,
		"typical": 798,
		"max": 798
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\""
};

export default product;
