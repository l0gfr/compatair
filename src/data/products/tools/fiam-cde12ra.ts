const product = {
	"id": "fiam-cde12ra",
	"slug": "fiam-cde12ra",
	"brand": "Fiam",
	"model": "CDE12RA",
	"mpn": "114814312",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam CDE12RA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-cde12ra.webp",
		"alt": "Repères techniques Fiam CDE12RA, référence 114814312",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/cde12ra/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam CDE12RA, référence 114814312. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 3 ÷ 12 Nm. Vitesse à vide : 700 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114814312.",
			"Couple de serrage indicatif : 3 ÷ 12 Nm.",
			"Vitesse à vide : 700 tr/min.",
			"Masse publiée : 1.00 kg."
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
				"fiam-114814312-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114814312-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "3 ÷ 12 Nm",
			"evidenceIds": [
				"fiam-114814312-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "700 tr/min",
			"evidenceIds": [
				"fiam-114814312-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.00 kg",
			"evidenceIds": [
				"fiam-114814312-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 250 mm",
			"evidenceIds": [
				"fiam-114814312-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-114814312-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push start",
			"evidenceIds": [
				"fiam-114814312-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114814312-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/cde12ra/",
			"sourceLabel": "Fiam, fiche technique CDE12RA, réf. 114814312",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114814312-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-56.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-56, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114814312-20260926"
		],
		"workingPressureBar": [
			"fiam-114814312-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114814312-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	}
};

export default product;
