const product = {
	"id": "red-rooster-rri-30",
	"slug": "red-rooster-rri-30",
	"brand": "Red Rooster",
	"model": "RRI-30",
	"mpn": "RRI-30",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Red Rooster RRI-30",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-30.webp",
		"alt": "Repères techniques Red Rooster RRI-30, référence RRI-30",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=23",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-30, référence RRI-30. Le tableau fabricant publie 222 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple indicatif publié : 7 à 12,5 Nm. Vitesse à vide : 4600 tr/min.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 3.7 L/s, convertis en 222 L/min par multiplication par 60.",
			"Référence fabricant : RRI-30.",
			"Couple indicatif publié : 7 à 12,5 Nm.",
			"Vitesse à vide : 4600 tr/min.",
			"Entraînement : 3/8\" carré."
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
				"red-rooster-rri-30-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 3.7 L/s, convertis en 222 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-30-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "7 à 12,5 Nm",
			"evidenceIds": [
				"red-rooster-rri-30-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4600 tr/min",
			"evidenceIds": [
				"red-rooster-rri-30-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "3/8\" carré",
			"evidenceIds": [
				"red-rooster-rri-30-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,9 kg",
			"evidenceIds": [
				"red-rooster-rri-30-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rri-30-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-30-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=23",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 23, réf. RRI-30",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 3.7 L/s, convertis en 222 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-30-20260926-workingpressurebar-1",
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
			"red-rooster-rri-30-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-30-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-30-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-30-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 222,
		"typical": 222,
		"max": 222
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	}
};

export default product;
