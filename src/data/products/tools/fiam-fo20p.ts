const product = {
	"id": "fiam-fo20p",
	"slug": "fiam-fo20p",
	"brand": "Fiam",
	"model": "FO20P",
	"mpn": "127011520",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FO20P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fo20p.webp",
		"alt": "Repères techniques Fiam FO20P, référence 127011520",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fo20p/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FO20P, référence 127011520. Le tableau fabricant publie 840 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 600 tr/min. Masse publiée : 3.6 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 14 L/s, soit 840 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 127011520.",
			"Vitesse à vide : 600 tr/min.",
			"Masse publiée : 3.6 kg.",
			"Dimensions publiées : Ø 65 x L 236 x H 360 mm."
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
				"fiam-127011520-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 14 L/s, soit 840 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-127011520-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "600 tr/min",
			"evidenceIds": [
				"fiam-127011520-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3.6 kg",
			"evidenceIds": [
				"fiam-127011520-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 65 x L 236 x H 360 mm",
			"evidenceIds": [
				"fiam-127011520-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-127011520-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "745 W",
			"evidenceIds": [
				"fiam-127011520-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-127011520-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fo20p/",
			"sourceLabel": "Fiam, fiche technique FO20P, réf. 127011520",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 14 L/s, soit 840 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-127011520-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-34, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-127011520-20260926"
		],
		"workingPressureBar": [
			"fiam-127011520-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-127011520-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	}
};

export default product;
