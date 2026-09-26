const product = {
	"id": "fiam-ihe18p-mr",
	"slug": "fiam-ihe18p-mr",
	"brand": "Fiam",
	"model": "IHE18P-MR",
	"mpn": "119550001",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam IHE18P-MR",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-ihe18p-mr.webp",
		"alt": "Repères techniques Fiam IHE18P-MR, référence 119550001",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ihe18p-mr/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam IHE18P-MR, référence 119550001. Le tableau fabricant publie 252 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 10 ÷ 18 Nm. Vitesse à vide : 4400 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 4.2 L/s, soit 252 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 119550001.",
			"Couple de serrage indicatif : 10 ÷ 18 Nm.",
			"Vitesse à vide : 4400 tr/min.",
			"Masse publiée : 0.9 kg."
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
				"fiam-119550001-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 4.2 L/s, soit 252 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-119550001-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "10 ÷ 18 Nm",
			"evidenceIds": [
				"fiam-119550001-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4400 tr/min",
			"evidenceIds": [
				"fiam-119550001-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.9 kg",
			"evidenceIds": [
				"fiam-119550001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 46 x L 170 x H 168 mm",
			"evidenceIds": [
				"fiam-119550001-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-119550001-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-119550001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-119550001-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ihe18p-mr/",
			"sourceLabel": "Fiam, fiche technique IHE18P-MR, réf. 119550001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 4.2 L/s, soit 252 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-119550001-20260926-workingpressurebar-1",
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
			"fiam-119550001-20260926"
		],
		"workingPressureBar": [
			"fiam-119550001-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-119550001-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 252,
		"typical": 252,
		"max": 252
	}
};

export default product;
