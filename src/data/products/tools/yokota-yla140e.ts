const product = {
	"id": "yokota-yla140e",
	"slug": "yokota-yla140e",
	"brand": "Yokota",
	"model": "YLA140E",
	"mpn": "YLA140E",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLA140E",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 5,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yla140e.webp",
		"alt": "Repères techniques Yokota YLA140E, référence YLA140E",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YLA140E, référence YLA140E. Le tableau fabricant publie 1 134 L/min et une plage d’utilisation de 5 à 6 bar. Couple indicatif publié : 100 à 160 Nm. Vitesse à vide : 6000 tr/min.",
		"verifiedFacts": [
			"La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar.",
			"Le maximum entre la consommation en charge et à vide est retenu : 18.9 L/s, convertis en 1134 L/min par multiplication par 60.",
			"Référence fabricant : YLA140E.",
			"Couple indicatif publié : 100 à 160 Nm.",
			"Vitesse à vide : 6000 tr/min.",
			"Entraînement : 1/2\" carré."
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
				"yokota-yla140e-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le maximum entre la consommation en charge et à vide est retenu : 18.9 L/s, convertis en 1134 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yla140e-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "100 à 160 Nm",
			"evidenceIds": [
				"yokota-yla140e-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6000 tr/min",
			"evidenceIds": [
				"yokota-yla140e-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "1/2\" carré",
			"evidenceIds": [
				"yokota-yla140e-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,2 kg",
			"evidenceIds": [
				"yokota-yla140e-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "9,5 mm",
			"evidenceIds": [
				"yokota-yla140e-20260926"
			]
		},
		{
			"label": "Consommation en charge / à vide",
			"value": "13.0 / 18.9 L/s",
			"evidenceIds": [
				"yokota-yla140e-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yla140e-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17, réf. YLA140E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le maximum entre la consommation en charge et à vide est retenu : 18.9 L/s, convertis en 1134 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yla140e-20260926-workingpressurebar-1",
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
			"yokota-yla140e-20260926"
		],
		"workingPressureBar": [
			"yokota-yla140e-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yla140e-20260926"
		],
		"recommendedHose": [
			"yokota-yla140e-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1134,
		"typical": 1134,
		"max": 1134
	},
	"recommendedHose": {
		"innerDiameterMm": 9.5
	}
};

export default product;
