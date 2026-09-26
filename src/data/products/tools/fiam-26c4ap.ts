const product = {
	"id": "fiam-26c4ap",
	"slug": "fiam-26c4ap",
	"brand": "Fiam",
	"model": "26C4AP",
	"mpn": "114814576",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 26C4AP",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-26c4ap.webp",
		"alt": "Repères techniques Fiam 26C4AP, référence 114814576",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/26c4ap/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam 26C4AP, référence 114814576. Le tableau fabricant publie 420 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 0.4 ÷ 4 Nm. Vitesse à vide : 2000 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 7 L/s, soit 420 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114814576.",
			"Couple de serrage indicatif : 0.4 ÷ 4 Nm.",
			"Vitesse à vide : 2000 tr/min.",
			"Masse publiée : 0.87 kg."
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
				"fiam-114814576-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 7 L/s, soit 420 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114814576-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "0.4 ÷ 4 Nm",
			"evidenceIds": [
				"fiam-114814576-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2000 tr/min",
			"evidenceIds": [
				"fiam-114814576-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.87 kg",
			"evidenceIds": [
				"fiam-114814576-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 38 x L 190 x H 155 mm",
			"evidenceIds": [
				"fiam-114814576-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-114814576-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-114814576-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114814576-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/26c4ap/",
			"sourceLabel": "Fiam, fiche technique 26C4AP, réf. 114814576",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 7 L/s, soit 420 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114814576-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-88.pdf#page=9",
			"sourceLabel": "Fiam, brochure technique en-88, p. 9",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114814576-20260926"
		],
		"workingPressureBar": [
			"fiam-114814576-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114814576-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	}
};

export default product;
