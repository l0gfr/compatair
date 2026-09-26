const product = {
	"id": "yokota-yltx70e",
	"slug": "yokota-yltx70e",
	"brand": "Yokota",
	"model": "YLTX70E",
	"mpn": "YLTX70E",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLTX70E",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 5,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yltx70e.webp",
		"alt": "Repères techniques Yokota YLTX70E, référence YLTX70E",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YLTX70E, référence YLTX70E. Le tableau fabricant publie 528 L/min et une plage d’utilisation de 5 à 6 bar. Couple indicatif publié : 15 à 32 Nm. Vitesse à vide : 6800 tr/min.",
		"verifiedFacts": [
			"La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar.",
			"Le maximum entre la consommation en charge et à vide est retenu : 8.8 L/s, convertis en 528 L/min par multiplication par 60.",
			"Référence fabricant : YLTX70E.",
			"Couple indicatif publié : 15 à 32 Nm.",
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
				"yokota-yltx70e-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le maximum entre la consommation en charge et à vide est retenu : 8.8 L/s, convertis en 528 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yltx70e-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "15 à 32 Nm",
			"evidenceIds": [
				"yokota-yltx70e-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6800 tr/min",
			"evidenceIds": [
				"yokota-yltx70e-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "3/8\" carré",
			"evidenceIds": [
				"yokota-yltx70e-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,01 kg",
			"evidenceIds": [
				"yokota-yltx70e-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-yltx70e-20260926"
			]
		},
		{
			"label": "Consommation en charge / à vide",
			"value": "6.0 / 8.8 L/s",
			"evidenceIds": [
				"yokota-yltx70e-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yltx70e-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17, réf. YLTX70E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le maximum entre la consommation en charge et à vide est retenu : 8.8 L/s, convertis en 528 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yltx70e-20260926-workingpressurebar-1",
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
			"yokota-yltx70e-20260926"
		],
		"workingPressureBar": [
			"yokota-yltx70e-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yltx70e-20260926"
		],
		"recommendedHose": [
			"yokota-yltx70e-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 528,
		"typical": 528,
		"max": 528
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	}
};

export default product;
