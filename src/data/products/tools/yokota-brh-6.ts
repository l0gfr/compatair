const product = {
	"id": "yokota-brh-6",
	"slug": "yokota-brh-6",
	"brand": "Yokota",
	"model": "BRH-6",
	"mpn": "BRH-6",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Yokota BRH-6",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-brh-6.webp",
		"alt": "Repères techniques Yokota BRH-6, référence BRH-6",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota BRH-6, référence BRH-6. Le tableau fabricant publie 396 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 1,4 kg. Diamètre intérieur de flexible conseillé : 10 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 6.6 L/s, convertis en 396 L/min par multiplication par 60.",
			"Référence fabricant : BRH-6.",
			"Masse publiée : 1,4 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm.",
			"Raccord pneumatique : PT 1/4\"."
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
				"yokota-brh-6-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.6 L/s, convertis en 396 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-brh-6-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,4 kg",
			"evidenceIds": [
				"yokota-brh-6-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"yokota-brh-6-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-brh-6-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-brh-6-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 49, réf. BRH-6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6.6 L/s, convertis en 396 L/min par multiplication par 60."
		},
		{
			"id": "yokota-brh-6-20260926-workingpressurebar-1",
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
			"yokota-brh-6-20260926"
		],
		"workingPressureBar": [
			"yokota-brh-6-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-brh-6-20260926"
		],
		"recommendedHose": [
			"yokota-brh-6-20260926"
		],
		"connectorSize": [
			"yokota-brh-6-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 396,
		"typical": 396,
		"max": 396
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\""
};

export default product;
