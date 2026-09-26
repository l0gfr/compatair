const product = {
	"id": "toku-mg-1b",
	"slug": "toku-mg-1b",
	"brand": "Toku",
	"model": "MG-1B",
	"mpn": "MG-1B",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Toku MG-1B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-mg-1b.webp",
		"alt": "Repères techniques Toku MG-1B, référence MG-1B",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=44",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku MG-1B, référence MG-1B. Le tableau fabricant publie 480 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 18000 tr/min. Masse publiée : 0,6 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 8 L/s, convertis en 480 L/min par multiplication par 60.",
			"Référence fabricant : MG-1B.",
			"Vitesse à vide publiée : 18000 tr/min.",
			"Masse publiée : 0,6 kg.",
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
				"toku-mg-1b-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 8 L/s, convertis en 480 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-mg-1b-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "18000 tr/min",
			"evidenceIds": [
				"toku-mg-1b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,6 kg",
			"evidenceIds": [
				"toku-mg-1b-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"toku-mg-1b-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"toku-mg-1b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-mg-1b-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=44",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 44, réf. MG-1B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8 L/s, convertis en 480 L/min par multiplication par 60."
		},
		{
			"id": "toku-mg-1b-20260926-workingpressurebar-1",
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
			"toku-mg-1b-20260926"
		],
		"workingPressureBar": [
			"toku-mg-1b-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-mg-1b-20260926"
		],
		"recommendedHose": [
			"toku-mg-1b-20260926"
		],
		"connectorSize": [
			"toku-mg-1b-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\""
};

export default product;
