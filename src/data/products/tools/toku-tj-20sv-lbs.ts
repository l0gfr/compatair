const product = {
	"id": "toku-tj-20sv-lbs",
	"slug": "toku-tj-20sv-lbs",
	"brand": "Toku",
	"model": "TJ-20SV LBS",
	"mpn": "TJ-20SV LBS",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Toku TJ-20SV LBS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-tj-20sv-lbs.webp",
		"alt": "Repères techniques Toku TJ-20SV LBS, référence TJ-20SV LBS",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku TJ-20SV LBS, référence TJ-20SV LBS. Le tableau fabricant publie 2 460 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 19 kg. Diamètre intérieur de flexible conseillé : 19 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 41 L/s, convertis en 2460 L/min par multiplication par 60.",
			"Référence fabricant : TJ-20SV LBS.",
			"Masse publiée : 19 kg.",
			"Diamètre intérieur de flexible conseillé : 19 mm.",
			"Raccord pneumatique : PT 3/4\"."
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
				"toku-tj-20sv-lbs-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 41 L/s, convertis en 2460 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-tj-20sv-lbs-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "19 kg",
			"evidenceIds": [
				"toku-tj-20sv-lbs-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "19 mm",
			"evidenceIds": [
				"toku-tj-20sv-lbs-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/4\"",
			"evidenceIds": [
				"toku-tj-20sv-lbs-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-tj-20sv-lbs-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 50, réf. TJ-20SV LBS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 41 L/s, convertis en 2460 L/min par multiplication par 60."
		},
		{
			"id": "toku-tj-20sv-lbs-20260926-workingpressurebar-1",
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
			"toku-tj-20sv-lbs-20260926"
		],
		"workingPressureBar": [
			"toku-tj-20sv-lbs-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-tj-20sv-lbs-20260926"
		],
		"recommendedHose": [
			"toku-tj-20sv-lbs-20260926"
		],
		"connectorSize": [
			"toku-tj-20sv-lbs-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 2460,
		"typical": 2460,
		"max": 2460
	},
	"recommendedHose": {
		"innerDiameterMm": 19
	},
	"connectorSize": "PT 3/4\""
};

export default product;
