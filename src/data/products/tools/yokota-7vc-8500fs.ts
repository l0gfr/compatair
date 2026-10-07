import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-7vc-8500fs",
	"slug": "yokota-7vc-8500fs",
	"brand": "Yokota",
	"model": "7VC-8500FS",
	"mpn": "7VC-8500FS",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota 7VC-8500FS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-7vc-8500fs.webp",
		"alt": "Repères techniques Yokota 7VC-8500FS, référence 7VC-8500FS",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota 7VC-8500FS, référence 7VC-8500FS. Le tableau fabricant publie 1 380 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 8500 tr/min. Masse publiée : 4,1 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 23 L/s, convertis en 1380 L/min par multiplication par 60.",
			"Référence fabricant : 7VC-8500FS.",
			"Vitesse à vide publiée : 8500 tr/min.",
			"Masse publiée : 4,1 kg.",
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
				"yokota-7vc-8500fs-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 23 L/s, convertis en 1380 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-7vc-8500fs-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "8500 tr/min",
			"evidenceIds": [
				"yokota-7vc-8500fs-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "4,1 kg",
			"evidenceIds": [
				"yokota-7vc-8500fs-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"yokota-7vc-8500fs-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"yokota-7vc-8500fs-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-7vc-8500fs-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. 7VC-8500FS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 23 L/s, convertis en 1380 L/min par multiplication par 60."
		},
		{
			"id": "yokota-7vc-8500fs-20260926-workingpressurebar-1",
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
			"yokota-7vc-8500fs-20260926"
		],
		"workingPressureBar": [
			"yokota-7vc-8500fs-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-7vc-8500fs-20260926"
		],
		"recommendedHose": [
			"yokota-7vc-8500fs-20260926"
		],
		"connectorSize": [
			"yokota-7vc-8500fs-20260926"
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
	"connectorSize": "PT 3/8\""
};

export default product;
