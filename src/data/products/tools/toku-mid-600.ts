const product = {
	"id": "toku-mid-600",
	"slug": "toku-mid-600",
	"brand": "Toku",
	"model": "MID-600",
	"mpn": "MID-600",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Toku MID-600",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-mid-600.webp",
		"alt": "Repères techniques Toku MID-600, référence MID-600",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku MID-600, référence MID-600. Le tableau fabricant publie 300 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 9500 tr/min. Masse publiée : 0,9 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 5 L/s, convertis en 300 L/min par multiplication par 60.",
			"Référence fabricant : MID-600.",
			"Vitesse à vide publiée : 9500 tr/min.",
			"Masse publiée : 0,9 kg.",
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
				"toku-mid-600-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 5 L/s, convertis en 300 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-mid-600-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "9500 tr/min",
			"evidenceIds": [
				"toku-mid-600-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,9 kg",
			"evidenceIds": [
				"toku-mid-600-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"toku-mid-600-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"toku-mid-600-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-mid-600-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 41, réf. MID-600",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 5 L/s, convertis en 300 L/min par multiplication par 60."
		},
		{
			"id": "toku-mid-600-20260926-workingpressurebar-1",
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
			"toku-mid-600-20260926"
		],
		"workingPressureBar": [
			"toku-mid-600-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-mid-600-20260926"
		],
		"recommendedHose": [
			"toku-mid-600-20260926"
		],
		"connectorSize": [
			"toku-mid-600-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\""
};

export default product;
