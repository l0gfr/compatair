const product = {
	"id": "fiam-fy8-90c",
	"slug": "fiam-fy8-90c",
	"brand": "Fiam",
	"model": "FY8/90C",
	"mpn": "126391101",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FY8/90C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fy8-90c.webp",
		"alt": "Repères techniques Fiam FY8/90C, référence 126391101",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fy8-90c/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FY8/90C, référence 126391101. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 1600 tr/min. Masse publiée : 1.70 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 126391101.",
			"Vitesse à vide : 1600 tr/min.",
			"Masse publiée : 1.70 kg.",
			"Dimensions publiées : Ø 46 x L 320 x H 103 mm."
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
				"fiam-126391101-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-126391101-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1600 tr/min",
			"evidenceIds": [
				"fiam-126391101-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.70 kg",
			"evidenceIds": [
				"fiam-126391101-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 46 x L 320 x H 103 mm",
			"evidenceIds": [
				"fiam-126391101-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-126391101-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-126391101-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fy8-90c/",
			"sourceLabel": "Fiam, fiche technique FY8/90C, réf. 126391101",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-126391101-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=9",
			"sourceLabel": "Fiam, brochure technique en-34, p. 9",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-126391101-20260926"
		],
		"workingPressureBar": [
			"fiam-126391101-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-126391101-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	}
};

export default product;
