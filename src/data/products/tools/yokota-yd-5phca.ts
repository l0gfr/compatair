const product = {
	"id": "yokota-yd-5phca",
	"slug": "yokota-yd-5phca",
	"brand": "Yokota",
	"model": "YD-5PHCA",
	"mpn": "YD-5PHCA",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Yokota YD-5PHCA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yd-5phca.webp",
		"alt": "Repères techniques Yokota YD-5PHCA, référence YD-5PHCA",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YD-5PHCA, référence YD-5PHCA. Le tableau fabricant publie 348 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 1650 tr/min. Masse publiée : 1,2 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 5.8 L/s, convertis en 348 L/min par multiplication par 60.",
			"Référence fabricant : YD-5PHCA.",
			"Vitesse à vide publiée : 1650 tr/min.",
			"Masse publiée : 1,2 kg.",
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
				"yokota-yd-5phca-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 5.8 L/s, convertis en 348 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yd-5phca-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1650 tr/min",
			"evidenceIds": [
				"yokota-yd-5phca-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,2 kg",
			"evidenceIds": [
				"yokota-yd-5phca-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-yd-5phca-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-yd-5phca-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yd-5phca-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. YD-5PHCA",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 5.8 L/s, convertis en 348 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yd-5phca-20260926-workingpressurebar-1",
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
			"yokota-yd-5phca-20260926"
		],
		"workingPressureBar": [
			"yokota-yd-5phca-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yd-5phca-20260926"
		],
		"recommendedHose": [
			"yokota-yd-5phca-20260926"
		],
		"connectorSize": [
			"yokota-yd-5phca-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 348,
		"typical": 348,
		"max": 348
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\""
};

export default product;
