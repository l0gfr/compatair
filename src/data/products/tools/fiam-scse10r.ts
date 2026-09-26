const product = {
	"id": "fiam-scse10r",
	"slug": "fiam-scse10r",
	"brand": "Fiam",
	"model": "SCSE10R",
	"mpn": "114812335",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam SCSE10R",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-scse10r.webp",
		"alt": "Repères techniques Fiam SCSE10R, référence 114812335",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/scse10r/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam SCSE10R, référence 114812335. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 1.5÷10 Nm. Vitesse à vide : 500 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114812335.",
			"Couple de serrage indicatif : 1.5÷10 Nm.",
			"Vitesse à vide : 500 tr/min.",
			"Masse publiée : 0.82 kg."
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
				"fiam-114812335-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114812335-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "1.5÷10 Nm",
			"evidenceIds": [
				"fiam-114812335-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"fiam-114812335-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.82 kg",
			"evidenceIds": [
				"fiam-114812335-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 226 mm",
			"evidenceIds": [
				"fiam-114812335-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-114812335-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push start",
			"evidenceIds": [
				"fiam-114812335-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114812335-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/scse10r/",
			"sourceLabel": "Fiam, fiche technique SCSE10R, réf. 114812335",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114812335-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-86.pdf#page=6",
			"sourceLabel": "Fiam, brochure technique en-86, p. 6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114812335-20260926"
		],
		"workingPressureBar": [
			"fiam-114812335-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114812335-20260926"
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
