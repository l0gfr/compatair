const product = {
	"id": "toku-tpb-60",
	"slug": "toku-tpb-60",
	"brand": "Toku",
	"model": "TPB-60",
	"mpn": "TPB-60",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Toku TPB-60",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-tpb-60.webp",
		"alt": "Repères techniques Toku TPB-60, référence TPB-60",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku TPB-60, référence TPB-60. Le tableau fabricant publie 1 620 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 30 kg. Diamètre intérieur de flexible conseillé : 19 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 27 L/s, convertis en 1620 L/min par multiplication par 60.",
			"Référence fabricant : TPB-60.",
			"Masse publiée : 30 kg.",
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
				"toku-tpb-60-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 27 L/s, convertis en 1620 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-tpb-60-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "30 kg",
			"evidenceIds": [
				"toku-tpb-60-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "19 mm",
			"evidenceIds": [
				"toku-tpb-60-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/4\"",
			"evidenceIds": [
				"toku-tpb-60-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-tpb-60-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 50, réf. TPB-60",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 27 L/s, convertis en 1620 L/min par multiplication par 60."
		},
		{
			"id": "toku-tpb-60-20260926-workingpressurebar-1",
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
			"toku-tpb-60-20260926"
		],
		"workingPressureBar": [
			"toku-tpb-60-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-tpb-60-20260926"
		],
		"recommendedHose": [
			"toku-tpb-60-20260926"
		],
		"connectorSize": [
			"toku-tpb-60-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1620,
		"typical": 1620,
		"max": 1620
	},
	"recommendedHose": {
		"innerDiameterMm": 19
	},
	"connectorSize": "PT 3/4\""
};

export default product;
