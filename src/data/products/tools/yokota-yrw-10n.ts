const product = {
	"id": "yokota-yrw-10n",
	"slug": "yokota-yrw-10n",
	"brand": "Yokota",
	"model": "YRW-10N",
	"mpn": "YRW-10N",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Yokota YRW-10N",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yrw-10n.webp",
		"alt": "Repères techniques Yokota YRW-10N, référence YRW-10N",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YRW-10N, référence YRW-10N. Le tableau fabricant publie 696 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 2,7 kg. Diamètre intérieur de flexible conseillé : 10 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 11.6 L/s, convertis en 696 L/min par multiplication par 60.",
			"Référence fabricant : YRW-10N.",
			"Masse publiée : 2,7 kg.",
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
				"yokota-yrw-10n-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 11.6 L/s, convertis en 696 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yrw-10n-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,7 kg",
			"evidenceIds": [
				"yokota-yrw-10n-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"yokota-yrw-10n-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-yrw-10n-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yrw-10n-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 40, réf. YRW-10N",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 11.6 L/s, convertis en 696 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yrw-10n-20260926-workingpressurebar-1",
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
			"yokota-yrw-10n-20260926"
		],
		"workingPressureBar": [
			"yokota-yrw-10n-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yrw-10n-20260926"
		],
		"recommendedHose": [
			"yokota-yrw-10n-20260926"
		],
		"connectorSize": [
			"yokota-yrw-10n-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 696,
		"typical": 696,
		"max": 696
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\""
};

export default product;
