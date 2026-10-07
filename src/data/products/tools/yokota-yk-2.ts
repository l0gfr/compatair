import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yk-2",
	"slug": "yokota-yk-2",
	"brand": "Yokota",
	"model": "YK-2",
	"mpn": "YK-2",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Yokota YK-2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yk-2.webp",
		"alt": "Repères techniques Yokota YK-2, référence YK-2",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YK-2, référence YK-2. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 2,5 kg. Diamètre intérieur de flexible conseillé : 6,5 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60.",
			"Référence fabricant : YK-2.",
			"Masse publiée : 2,5 kg.",
			"Diamètre intérieur de flexible conseillé : 6,5 mm.",
			"Raccord pneumatique : PT 3/8\"."
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
				"yokota-yk-2-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yk-2-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,5 kg",
			"evidenceIds": [
				"yokota-yk-2-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-yk-2-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"yokota-yk-2-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yk-2-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 55, réf. YK-2",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yk-2-20260926-workingpressurebar-1",
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
			"yokota-yk-2-20260926"
		],
		"workingPressureBar": [
			"yokota-yk-2-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yk-2-20260926"
		],
		"recommendedHose": [
			"yokota-yk-2-20260926"
		],
		"connectorSize": [
			"yokota-yk-2-20260926"
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
	"connectorSize": "PT 3/8\""
};

export default product;
