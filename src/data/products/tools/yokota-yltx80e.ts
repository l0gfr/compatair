const product = {
	"id": "yokota-yltx80e",
	"slug": "yokota-yltx80e",
	"brand": "Yokota",
	"model": "YLTX80E",
	"mpn": "YLTX80E",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLTX80E",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 5,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yltx80e.webp",
		"alt": "Repères techniques Yokota YLTX80E, référence YLTX80E",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YLTX80E, référence YLTX80E. Le tableau fabricant publie 552 L/min et une plage d’utilisation de 5 à 6 bar. Couple indicatif publié : 30 à 55 Nm. Vitesse à vide : 6800 tr/min.",
		"verifiedFacts": [
			"La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar.",
			"Le maximum entre la consommation en charge et à vide est retenu : 9.2 L/s, convertis en 552 L/min par multiplication par 60.",
			"Référence fabricant : YLTX80E.",
			"Couple indicatif publié : 30 à 55 Nm.",
			"Vitesse à vide : 6800 tr/min.",
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
				"yokota-yltx80e-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le maximum entre la consommation en charge et à vide est retenu : 9.2 L/s, convertis en 552 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yltx80e-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "30 à 55 Nm",
			"evidenceIds": [
				"yokota-yltx80e-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6800 tr/min",
			"evidenceIds": [
				"yokota-yltx80e-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "3/8\" carré",
			"evidenceIds": [
				"yokota-yltx80e-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,12 kg",
			"evidenceIds": [
				"yokota-yltx80e-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "9,5 mm",
			"evidenceIds": [
				"yokota-yltx80e-20260926"
			]
		},
		{
			"label": "Consommation en charge / à vide",
			"value": "7.3 / 9.2 L/s",
			"evidenceIds": [
				"yokota-yltx80e-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yltx80e-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17, réf. YLTX80E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le maximum entre la consommation en charge et à vide est retenu : 9.2 L/s, convertis en 552 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yltx80e-20260926-workingpressurebar-1",
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
			"yokota-yltx80e-20260926"
		],
		"workingPressureBar": [
			"yokota-yltx80e-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yltx80e-20260926"
		],
		"recommendedHose": [
			"yokota-yltx80e-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 552,
		"typical": 552,
		"max": 552
	},
	"recommendedHose": {
		"innerDiameterMm": 9.5
	}
};

export default product;
