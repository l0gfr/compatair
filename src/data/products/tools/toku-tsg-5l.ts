const product = {
	"id": "toku-tsg-5l",
	"slug": "toku-tsg-5l",
	"brand": "Toku",
	"model": "TSG-5L",
	"mpn": "TSG-5L",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Toku TSG-5L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-tsg-5l.webp",
		"alt": "Repères techniques Toku TSG-5L, référence TSG-5L",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku TSG-5L, référence TSG-5L. Le tableau fabricant publie 996 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 7600 tr/min. Masse publiée : 3,08 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 16.6 L/s, convertis en 996 L/min par multiplication par 60.",
			"Référence fabricant : TSG-5L.",
			"Vitesse à vide publiée : 7600 tr/min.",
			"Masse publiée : 3,08 kg.",
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
				"toku-tsg-5l-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 16.6 L/s, convertis en 996 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-tsg-5l-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "7600 tr/min",
			"evidenceIds": [
				"toku-tsg-5l-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3,08 kg",
			"evidenceIds": [
				"toku-tsg-5l-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"toku-tsg-5l-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"toku-tsg-5l-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-tsg-5l-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. TSG-5L",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 16.6 L/s, convertis en 996 L/min par multiplication par 60."
		},
		{
			"id": "toku-tsg-5l-20260926-workingpressurebar-1",
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
			"toku-tsg-5l-20260926"
		],
		"workingPressureBar": [
			"toku-tsg-5l-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-tsg-5l-20260926"
		],
		"recommendedHose": [
			"toku-tsg-5l-20260926"
		],
		"connectorSize": [
			"toku-tsg-5l-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 996,
		"typical": 996,
		"max": 996
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 3/8\""
};

export default product;
