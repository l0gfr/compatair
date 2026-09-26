const product = {
	"id": "red-rooster-rri-sl40513",
	"slug": "red-rooster-rri-sl40513",
	"brand": "Red Rooster",
	"model": "RRI-SL40513",
	"mpn": "RRI-SL40513",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Red Rooster RRI-SL40513",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-sl40513.webp",
		"alt": "Repères techniques Red Rooster RRI-SL40513, référence RRI-SL40513",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=28",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-SL40513, référence RRI-SL40513. Le tableau fabricant publie 660 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple indicatif publié : 7,0 à 13,0 Nm. Vitesse à vide : 520 tr/min.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 11 L/s, convertis en 660 L/min par multiplication par 60.",
			"Référence fabricant : RRI-SL40513.",
			"Couple indicatif publié : 7,0 à 13,0 Nm.",
			"Vitesse à vide : 520 tr/min.",
			"Masse publiée : 1,29 kg."
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
				"red-rooster-rri-sl40513-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 11 L/s, convertis en 660 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-sl40513-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "7,0 à 13,0 Nm",
			"evidenceIds": [
				"red-rooster-rri-sl40513-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "520 tr/min",
			"evidenceIds": [
				"red-rooster-rri-sl40513-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,29 kg",
			"evidenceIds": [
				"red-rooster-rri-sl40513-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rri-sl40513-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "1/4\"",
			"evidenceIds": [
				"red-rooster-rri-sl40513-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-sl40513-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=28",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 28, réf. RRI-SL40513",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 11 L/s, convertis en 660 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-sl40513-20260926-workingpressurebar-1",
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
			"red-rooster-rri-sl40513-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-sl40513-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-sl40513-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-sl40513-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-sl40513-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "1/4\""
};

export default product;
