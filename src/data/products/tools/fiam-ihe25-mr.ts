const product = {
	"id": "fiam-ihe25-mr",
	"slug": "fiam-ihe25-mr",
	"brand": "Fiam",
	"model": "IHE25-MR",
	"mpn": "119550030",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam IHE25-MR",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-ihe25-mr.webp",
		"alt": "Repères techniques Fiam IHE25-MR, référence 119550030",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ihe25-mr/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam IHE25-MR, référence 119550030. Le tableau fabricant publie 318 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 15 ÷ 25 Nm. Vitesse à vide : 6800 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 5.3 L/s, soit 318 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 119550030.",
			"Couple de serrage indicatif : 15 ÷ 25 Nm.",
			"Vitesse à vide : 6800 tr/min.",
			"Masse publiée : 0.8 kg."
		],
		"limitations": [
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-119550030-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 5.3 L/s, soit 318 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-119550030-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "15 ÷ 25 Nm",
			"evidenceIds": [
				"fiam-119550030-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6800 tr/min",
			"evidenceIds": [
				"fiam-119550030-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.8 kg",
			"evidenceIds": [
				"fiam-119550030-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 46 x L 224 mm",
			"evidenceIds": [
				"fiam-119550030-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-119550030-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-119550030-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-119550030-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ihe25-mr/",
			"sourceLabel": "Fiam, fiche technique IHE25-MR, réf. 119550030",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 5.3 L/s, soit 318 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-119550030-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-69.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-69, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-119550030-20260926"
		],
		"workingPressureBar": [
			"fiam-119550030-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-119550030-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 318,
		"typical": 318,
		"max": 318
	}
};

export default product;
