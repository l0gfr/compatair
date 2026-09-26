const product = {
	"id": "fiam-fz45",
	"slug": "fiam-fz45",
	"brand": "Fiam",
	"model": "FZ45",
	"mpn": "122309007",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FZ45",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fz45.webp",
		"alt": "Repères techniques Fiam FZ45, référence 122309007",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fz45/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FZ45, référence 122309007. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 4500 tr/min. Masse publiée : 0.35 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 122309007.",
			"Vitesse à vide : 4500 tr/min.",
			"Masse publiée : 0.35 kg.",
			"Dimensions publiées : Ø 32 x L 153 mm."
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
				"fiam-122309007-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-122309007-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4500 tr/min",
			"evidenceIds": [
				"fiam-122309007-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.35 kg",
			"evidenceIds": [
				"fiam-122309007-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 32 x L 153 mm",
			"evidenceIds": [
				"fiam-122309007-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-122309007-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-122309007-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fz45/",
			"sourceLabel": "Fiam, fiche technique FZ45, réf. 122309007",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-122309007-20260926-workingpressurebar-1",
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
			"fiam-122309007-20260926"
		],
		"workingPressureBar": [
			"fiam-122309007-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-122309007-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	}
};

export default product;
