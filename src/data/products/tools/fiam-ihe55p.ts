const product = {
	"id": "fiam-ihe55p",
	"slug": "fiam-ihe55p",
	"brand": "Fiam",
	"model": "IHE55P",
	"mpn": "119550007",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam IHE55P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-ihe55p.webp",
		"alt": "Repères techniques Fiam IHE55P, référence 119550007",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ihe55p/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam IHE55P, référence 119550007. Le tableau fabricant publie 450 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 37 ÷ 57 Nm. Vitesse à vide : 7200 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 7.5 L/s, soit 450 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 119550007.",
			"Couple de serrage indicatif : 37 ÷ 57 Nm.",
			"Vitesse à vide : 7200 tr/min.",
			"Masse publiée : 1.33 kg."
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
				"fiam-119550007-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 7.5 L/s, soit 450 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-119550007-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "37 ÷ 57 Nm",
			"evidenceIds": [
				"fiam-119550007-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7200 tr/min",
			"evidenceIds": [
				"fiam-119550007-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.33 kg",
			"evidenceIds": [
				"fiam-119550007-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 53.5 x L 194 x H 192 mm",
			"evidenceIds": [
				"fiam-119550007-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "MALE SQUARE  DRIVE 3/8\"",
			"evidenceIds": [
				"fiam-119550007-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-119550007-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-119550007-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ihe55p/",
			"sourceLabel": "Fiam, fiche technique IHE55P, réf. 119550007",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 7.5 L/s, soit 450 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-119550007-20260926-workingpressurebar-1",
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
			"fiam-119550007-20260926"
		],
		"workingPressureBar": [
			"fiam-119550007-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-119550007-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	}
};

export default product;
