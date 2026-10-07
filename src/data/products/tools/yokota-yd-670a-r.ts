import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yd-670a-r",
	"slug": "yokota-yd-670a-r",
	"brand": "Yokota",
	"model": "YD-670A-R",
	"mpn": "YD-670A-R",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Yokota YD-670A-R",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yd-670a-r.webp",
		"alt": "Repères techniques Yokota YD-670A-R, référence YD-670A-R",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YD-670A-R, référence YD-670A-R. Le tableau fabricant publie 366 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 7500 tr/min. Masse publiée : 1 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 6.1 L/s, convertis en 366 L/min par multiplication par 60.",
			"Référence fabricant : YD-670A-R.",
			"Vitesse à vide publiée : 7500 tr/min.",
			"Masse publiée : 1 kg.",
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
				"yokota-yd-670a-r-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.1 L/s, convertis en 366 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yd-670a-r-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "7500 tr/min",
			"evidenceIds": [
				"yokota-yd-670a-r-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1 kg",
			"evidenceIds": [
				"yokota-yd-670a-r-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-yd-670a-r-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-yd-670a-r-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yd-670a-r-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 41, réf. YD-670A-R",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6.1 L/s, convertis en 366 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yd-670a-r-20260926-workingpressurebar-1",
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
			"yokota-yd-670a-r-20260926"
		],
		"workingPressureBar": [
			"yokota-yd-670a-r-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yd-670a-r-20260926"
		],
		"recommendedHose": [
			"yokota-yd-670a-r-20260926"
		],
		"connectorSize": [
			"yokota-yd-670a-r-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 366,
		"typical": 366,
		"max": 366
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\""
};

export default product;
