const product = {
	"id": "fiam-scz3r",
	"slug": "fiam-scz3r",
	"brand": "Fiam",
	"model": "SCZ3R",
	"mpn": "112511303",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam SCZ3R",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-scz3r.webp",
		"alt": "Repères techniques Fiam SCZ3R, référence 112511303",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/scz3r/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam SCZ3R, référence 112511303. Le tableau fabricant publie 300 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 0.8÷3 Nm. Vitesse à vide : 1300 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 5 L/s, soit 300 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 112511303.",
			"Couple de serrage indicatif : 0.8÷3 Nm.",
			"Vitesse à vide : 1300 tr/min.",
			"Masse publiée : 0.49 kg."
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
				"fiam-112511303-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 5 L/s, soit 300 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-112511303-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "0.8÷3 Nm",
			"evidenceIds": [
				"fiam-112511303-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1300 tr/min",
			"evidenceIds": [
				"fiam-112511303-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.49 kg",
			"evidenceIds": [
				"fiam-112511303-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 32 x L 204 mm",
			"evidenceIds": [
				"fiam-112511303-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-112511303-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push start",
			"evidenceIds": [
				"fiam-112511303-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-112511303-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/scz3r/",
			"sourceLabel": "Fiam, fiche technique SCZ3R, réf. 112511303",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 5 L/s, soit 300 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-112511303-20260926-workingpressurebar-1",
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
			"fiam-112511303-20260926"
		],
		"workingPressureBar": [
			"fiam-112511303-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-112511303-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	}
};

export default product;
