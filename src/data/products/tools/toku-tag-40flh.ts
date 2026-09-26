const product = {
	"id": "toku-tag-40flh",
	"slug": "toku-tag-40flh",
	"brand": "Toku",
	"model": "TAG-40FLH",
	"mpn": "TAG-40FLH",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Toku TAG-40FLH",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-tag-40flh.webp",
		"alt": "Repères techniques Toku TAG-40FLH, référence TAG-40FLH",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku TAG-40FLH, référence TAG-40FLH. Le tableau fabricant publie 648 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 13000 tr/min. Masse publiée : 1,7 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 10.8 L/s, convertis en 648 L/min par multiplication par 60.",
			"Référence fabricant : TAG-40FLH.",
			"Vitesse à vide publiée : 13000 tr/min.",
			"Masse publiée : 1,7 kg.",
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
				"toku-tag-40flh-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 10.8 L/s, convertis en 648 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-tag-40flh-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "13000 tr/min",
			"evidenceIds": [
				"toku-tag-40flh-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,7 kg",
			"evidenceIds": [
				"toku-tag-40flh-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"toku-tag-40flh-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"toku-tag-40flh-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-tag-40flh-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. TAG-40FLH",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 10.8 L/s, convertis en 648 L/min par multiplication par 60."
		},
		{
			"id": "toku-tag-40flh-20260926-workingpressurebar-1",
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
			"toku-tag-40flh-20260926"
		],
		"workingPressureBar": [
			"toku-tag-40flh-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-tag-40flh-20260926"
		],
		"recommendedHose": [
			"toku-tag-40flh-20260926"
		],
		"connectorSize": [
			"toku-tag-40flh-20260926"
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
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 3/8\""
};

export default product;
