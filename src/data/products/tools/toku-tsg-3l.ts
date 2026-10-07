import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-tsg-3l",
	"slug": "toku-tsg-3l",
	"brand": "Toku",
	"model": "TSG-3L",
	"mpn": "TSG-3L",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Toku TSG-3L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-tsg-3l.webp",
		"alt": "Repères techniques Toku TSG-3L, référence TSG-3L",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku TSG-3L, référence TSG-3L. Le tableau fabricant publie 498 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 11500 tr/min. Masse publiée : 1,66 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60.",
			"Référence fabricant : TSG-3L.",
			"Vitesse à vide publiée : 11500 tr/min.",
			"Masse publiée : 1,66 kg.",
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
				"toku-tsg-3l-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-tsg-3l-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "11500 tr/min",
			"evidenceIds": [
				"toku-tsg-3l-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,66 kg",
			"evidenceIds": [
				"toku-tsg-3l-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"toku-tsg-3l-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"toku-tsg-3l-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-tsg-3l-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. TSG-3L",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60."
		},
		{
			"id": "toku-tsg-3l-20260926-workingpressurebar-1",
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
			"toku-tsg-3l-20260926"
		],
		"workingPressureBar": [
			"toku-tsg-3l-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-tsg-3l-20260926"
		],
		"recommendedHose": [
			"toku-tsg-3l-20260926"
		],
		"connectorSize": [
			"toku-tsg-3l-20260926"
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
	"connectorSize": "PT 3/8\""
};

export default product;
