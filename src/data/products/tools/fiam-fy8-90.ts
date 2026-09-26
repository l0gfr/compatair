const product = {
	"id": "fiam-fy8-90",
	"slug": "fiam-fy8-90",
	"brand": "Fiam",
	"model": "FY8/90",
	"mpn": "126309062",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FY8/90",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fy8-90.webp",
		"alt": "Repères techniques Fiam FY8/90, référence 126309062",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fy8-90/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FY8/90, référence 126309062. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 1600 tr/min. Masse publiée : 1.48 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 126309062.",
			"Vitesse à vide : 1600 tr/min.",
			"Masse publiée : 1.48 kg.",
			"Dimensions publiées : Ø 46 x L 320 x H 65 mm."
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
				"fiam-126309062-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-126309062-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1600 tr/min",
			"evidenceIds": [
				"fiam-126309062-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.48 kg",
			"evidenceIds": [
				"fiam-126309062-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 46 x L 320 x H 65 mm",
			"evidenceIds": [
				"fiam-126309062-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-126309062-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-126309062-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fy8-90/",
			"sourceLabel": "Fiam, fiche technique FY8/90, réf. 126309062",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-126309062-20260926-workingpressurebar-1",
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
			"fiam-126309062-20260926"
		],
		"workingPressureBar": [
			"fiam-126309062-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-126309062-20260926"
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
