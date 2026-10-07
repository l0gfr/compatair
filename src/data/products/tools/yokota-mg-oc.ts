import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-mg-oc",
	"slug": "yokota-mg-oc",
	"brand": "Yokota",
	"model": "MG-OC",
	"mpn": "MG-OC",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota MG-OC",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-mg-oc.webp",
		"alt": "Repères techniques Yokota MG-OC, référence MG-OC",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=44",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota MG-OC, référence MG-OC. Le tableau fabricant publie 180 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 33000 tr/min. Masse publiée : 0,4 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 3 L/s, convertis en 180 L/min par multiplication par 60.",
			"Référence fabricant : MG-OC.",
			"Vitesse à vide publiée : 33000 tr/min.",
			"Masse publiée : 0,4 kg.",
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
				"yokota-mg-oc-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 3 L/s, convertis en 180 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-mg-oc-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "33000 tr/min",
			"evidenceIds": [
				"yokota-mg-oc-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,4 kg",
			"evidenceIds": [
				"yokota-mg-oc-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-mg-oc-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-mg-oc-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-mg-oc-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=44",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 44, réf. MG-OC",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 3 L/s, convertis en 180 L/min par multiplication par 60."
		},
		{
			"id": "yokota-mg-oc-20260926-workingpressurebar-1",
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
			"yokota-mg-oc-20260926"
		],
		"workingPressureBar": [
			"yokota-mg-oc-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-mg-oc-20260926"
		],
		"recommendedHose": [
			"yokota-mg-oc-20260926"
		],
		"connectorSize": [
			"yokota-mg-oc-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 180,
		"typical": 180,
		"max": 180
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\""
};

export default product;
