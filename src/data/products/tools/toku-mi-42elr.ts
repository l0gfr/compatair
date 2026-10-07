import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-mi-42elr",
	"slug": "toku-mi-42elr",
	"brand": "Toku",
	"model": "MI-42ELR",
	"mpn": "MI-42ELR",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Toku MI-42ELR",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-mi-42elr.webp",
		"alt": "Repères techniques Toku MI-42ELR, référence MI-42ELR",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=39",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku MI-42ELR, référence MI-42ELR. Le tableau fabricant publie 1 380 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 3900 tr/min. Masse publiée : 10,6 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation en charge publiée : 23 L/s, convertis en 1380 L/min par multiplication par 60.",
			"Référence fabricant : MI-42ELR.",
			"Vitesse à vide publiée : 3900 tr/min.",
			"Masse publiée : 10,6 kg.",
			"Diamètre intérieur de flexible conseillé : 13 mm."
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
				"toku-mi-42elr-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 23 L/s, convertis en 1380 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-mi-42elr-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "3900 tr/min",
			"evidenceIds": [
				"toku-mi-42elr-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "10,6 kg",
			"evidenceIds": [
				"toku-mi-42elr-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"toku-mi-42elr-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/2\"",
			"evidenceIds": [
				"toku-mi-42elr-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-mi-42elr-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=39",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 39, réf. MI-42ELR",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 23 L/s, convertis en 1380 L/min par multiplication par 60."
		},
		{
			"id": "toku-mi-42elr-20260926-workingpressurebar-1",
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
			"toku-mi-42elr-20260926"
		],
		"workingPressureBar": [
			"toku-mi-42elr-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-mi-42elr-20260926"
		],
		"recommendedHose": [
			"toku-mi-42elr-20260926"
		],
		"connectorSize": [
			"toku-mi-42elr-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1380,
		"typical": 1380,
		"max": 1380
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 1/2\""
};

export default product;
