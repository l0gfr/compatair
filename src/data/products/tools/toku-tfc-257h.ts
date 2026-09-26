const product = {
	"id": "toku-tfc-257h",
	"slug": "toku-tfc-257h",
	"brand": "Toku",
	"model": "TFC-257H",
	"mpn": "TFC-257H",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Toku TFC-257H",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-tfc-257h.webp",
		"alt": "Repères techniques Toku TFC-257H, référence TFC-257H",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku TFC-257H, référence TFC-257H. Le tableau fabricant publie 402 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 1,7 kg. Diamètre intérieur de flexible conseillé : 10 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 6.7 L/s, convertis en 402 L/min par multiplication par 60.",
			"Référence fabricant : TFC-257H.",
			"Masse publiée : 1,7 kg.",
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
				"toku-tfc-257h-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.7 L/s, convertis en 402 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-tfc-257h-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,7 kg",
			"evidenceIds": [
				"toku-tfc-257h-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"toku-tfc-257h-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"toku-tfc-257h-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-tfc-257h-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 49, réf. TFC-257H",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6.7 L/s, convertis en 402 L/min par multiplication par 60."
		},
		{
			"id": "toku-tfc-257h-20260926-workingpressurebar-1",
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
			"toku-tfc-257h-20260926"
		],
		"workingPressureBar": [
			"toku-tfc-257h-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-tfc-257h-20260926"
		],
		"recommendedHose": [
			"toku-tfc-257h-20260926"
		],
		"connectorSize": [
			"toku-tfc-257h-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 402,
		"typical": 402,
		"max": 402
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\""
};

export default product;
