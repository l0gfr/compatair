const product = {
	"id": "fiam-fy10pc",
	"slug": "fiam-fy10pc",
	"brand": "Fiam",
	"model": "FY10PC",
	"mpn": "126309015",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FY10PC",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fy10pc.webp",
		"alt": "Repères techniques Fiam FY10PC, référence 126309015",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fy10pc/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FY10PC, référence 126309015. Le tableau fabricant publie 660 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 1800 tr/min. Masse publiée : 1.4 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 11 L/s, soit 660 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 126309015.",
			"Vitesse à vide : 1800 tr/min.",
			"Masse publiée : 1.4 kg.",
			"Dimensions publiées : Ø 46 x L 200 x H 170 mm."
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
				"fiam-126309015-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 11 L/s, soit 660 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-126309015-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1800 tr/min",
			"evidenceIds": [
				"fiam-126309015-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.4 kg",
			"evidenceIds": [
				"fiam-126309015-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 46 x L 200 x H 170 mm",
			"evidenceIds": [
				"fiam-126309015-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-126309015-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-126309015-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fy10pc/",
			"sourceLabel": "Fiam, fiche technique FY10PC, réf. 126309015",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 11 L/s, soit 660 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-126309015-20260926-workingpressurebar-1",
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
			"fiam-126309015-20260926"
		],
		"workingPressureBar": [
			"fiam-126309015-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-126309015-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	}
};

export default product;
