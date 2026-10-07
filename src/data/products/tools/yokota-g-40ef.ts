import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-g-40ef",
	"slug": "yokota-g-40ef",
	"brand": "Yokota",
	"model": "G-40EF",
	"mpn": "G-40EF",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota G-40EF",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-g-40ef.webp",
		"alt": "Repères techniques Yokota G-40EF, référence G-40EF",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota G-40EF, référence G-40EF. Le tableau fabricant publie 648 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 13000 tr/min. Masse publiée : 1,4 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 10.8 L/s, convertis en 648 L/min par multiplication par 60.",
			"Référence fabricant : G-40EF.",
			"Vitesse à vide publiée : 13000 tr/min.",
			"Masse publiée : 1,4 kg.",
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
				"yokota-g-40ef-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 10.8 L/s, convertis en 648 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-g-40ef-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "13000 tr/min",
			"evidenceIds": [
				"yokota-g-40ef-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,4 kg",
			"evidenceIds": [
				"yokota-g-40ef-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"yokota-g-40ef-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-g-40ef-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-g-40ef-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. G-40EF",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 10.8 L/s, convertis en 648 L/min par multiplication par 60."
		},
		{
			"id": "yokota-g-40ef-20260926-workingpressurebar-1",
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
			"yokota-g-40ef-20260926"
		],
		"workingPressureBar": [
			"yokota-g-40ef-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-g-40ef-20260926"
		],
		"recommendedHose": [
			"yokota-g-40ef-20260926"
		],
		"connectorSize": [
			"yokota-g-40ef-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 648,
		"typical": 648,
		"max": 648
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 1/4\""
};

export default product;
