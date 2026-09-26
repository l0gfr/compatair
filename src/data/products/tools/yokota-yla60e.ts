const product = {
	"id": "yokota-yla60e",
	"slug": "yokota-yla60e",
	"brand": "Yokota",
	"model": "YLA60E",
	"mpn": "YLA60E",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLA60E",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 5,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yla60e.webp",
		"alt": "Repères techniques Yokota YLA60E, référence YLA60E",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YLA60E, référence YLA60E. Le tableau fabricant publie 330 L/min et une plage d’utilisation de 5 à 6 bar. Couple indicatif publié : 13 à 22 Nm. Vitesse à vide : 4000 tr/min.",
		"verifiedFacts": [
			"La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar.",
			"Le maximum entre la consommation en charge et à vide est retenu : 5.5 L/s, convertis en 330 L/min par multiplication par 60.",
			"Référence fabricant : YLA60E.",
			"Couple indicatif publié : 13 à 22 Nm.",
			"Vitesse à vide : 4000 tr/min.",
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
			"value": "La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar.",
			"evidenceIds": [
				"yokota-yla60e-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le maximum entre la consommation en charge et à vide est retenu : 5.5 L/s, convertis en 330 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yla60e-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "13 à 22 Nm",
			"evidenceIds": [
				"yokota-yla60e-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"yokota-yla60e-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "3/8\" carré",
			"evidenceIds": [
				"yokota-yla60e-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,78 kg",
			"evidenceIds": [
				"yokota-yla60e-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-yla60e-20260926"
			]
		},
		{
			"label": "Consommation en charge / à vide",
			"value": "5.0 / 5.5 L/s",
			"evidenceIds": [
				"yokota-yla60e-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yla60e-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17, réf. YLA60E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le maximum entre la consommation en charge et à vide est retenu : 5.5 L/s, convertis en 330 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yla60e-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Condition de pression spécifique du tableau Yokota à impulsions."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-yla60e-20260926"
		],
		"workingPressureBar": [
			"yokota-yla60e-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yla60e-20260926"
		],
		"recommendedHose": [
			"yokota-yla60e-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 330,
		"typical": 330,
		"max": 330
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	}
};

export default product;
