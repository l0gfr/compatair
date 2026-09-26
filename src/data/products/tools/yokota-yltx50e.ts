const product = {
	"id": "yokota-yltx50e",
	"slug": "yokota-yltx50e",
	"brand": "Yokota",
	"model": "YLTX50E",
	"mpn": "YLTX50E",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLTX50E",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 5,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yltx50e.webp",
		"alt": "Repères techniques Yokota YLTX50E, référence YLTX50E",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YLTX50E, référence YLTX50E. Le tableau fabricant publie 276 L/min et une plage d’utilisation de 5 à 6 bar. Couple indicatif publié : 4,5 à 8 Nm. Vitesse à vide : 4300 tr/min.",
		"verifiedFacts": [
			"La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar.",
			"Le maximum entre la consommation en charge et à vide est retenu : 4.6 L/s, convertis en 276 L/min par multiplication par 60.",
			"Référence fabricant : YLTX50E.",
			"Couple indicatif publié : 4,5 à 8 Nm.",
			"Vitesse à vide : 4300 tr/min.",
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
				"yokota-yltx50e-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le maximum entre la consommation en charge et à vide est retenu : 4.6 L/s, convertis en 276 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yltx50e-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "4,5 à 8 Nm",
			"evidenceIds": [
				"yokota-yltx50e-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4300 tr/min",
			"evidenceIds": [
				"yokota-yltx50e-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "3/8\" carré",
			"evidenceIds": [
				"yokota-yltx50e-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,95 kg",
			"evidenceIds": [
				"yokota-yltx50e-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-yltx50e-20260926"
			]
		},
		{
			"label": "Consommation en charge / à vide",
			"value": "4.2 / 4.6 L/s",
			"evidenceIds": [
				"yokota-yltx50e-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yltx50e-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17, réf. YLTX50E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le maximum entre la consommation en charge et à vide est retenu : 4.6 L/s, convertis en 276 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yltx50e-20260926-workingpressurebar-1",
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
			"yokota-yltx50e-20260926"
		],
		"workingPressureBar": [
			"yokota-yltx50e-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yltx50e-20260926"
		],
		"recommendedHose": [
			"yokota-yltx50e-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 276,
		"typical": 276,
		"max": 276
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	}
};

export default product;
