const product = {
	"id": "red-rooster-rri-sp20907",
	"slug": "red-rooster-rri-sp20907",
	"brand": "Red Rooster",
	"model": "RRI-SP20907",
	"mpn": "RRI-SP20907",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Red Rooster RRI-SP20907",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-sp20907.webp",
		"alt": "Repères techniques Red Rooster RRI-SP20907, référence RRI-SP20907",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=27",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-SP20907, référence RRI-SP20907. Le tableau fabricant publie 660 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple indicatif publié : 1,2 à 7 Nm. Vitesse à vide : 950 tr/min.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 11 L/s, convertis en 660 L/min par multiplication par 60.",
			"Référence fabricant : RRI-SP20907.",
			"Couple indicatif publié : 1,2 à 7 Nm.",
			"Vitesse à vide : 950 tr/min.",
			"Masse publiée : 1,02 kg."
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
				"red-rooster-rri-sp20907-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 11 L/s, convertis en 660 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-sp20907-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "1,2 à 7 Nm",
			"evidenceIds": [
				"red-rooster-rri-sp20907-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "950 tr/min",
			"evidenceIds": [
				"red-rooster-rri-sp20907-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,02 kg",
			"evidenceIds": [
				"red-rooster-rri-sp20907-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rri-sp20907-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "1/4\"",
			"evidenceIds": [
				"red-rooster-rri-sp20907-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-sp20907-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=27",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 27, réf. RRI-SP20907",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 11 L/s, convertis en 660 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-sp20907-20260926-workingpressurebar-1",
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
			"red-rooster-rri-sp20907-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-sp20907-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-sp20907-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-sp20907-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-sp20907-20260926"
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
