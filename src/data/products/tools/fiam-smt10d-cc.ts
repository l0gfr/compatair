const product = {
	"id": "fiam-smt10d-cc",
	"slug": "fiam-smt10d-cc",
	"brand": "Fiam",
	"model": "SMT10D/CC",
	"mpn": "140113005",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Fiam SMT10D/CC",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-smt10d-cc.webp",
		"alt": "Repères techniques Fiam SMT10D/CC, référence 140113005",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/smt10d-cc/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam SMT10D/CC, référence 140113005. Le tableau fabricant publie 150 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 70.000 tr/min. Masse publiée : 0.31 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 2.5 L/s, soit 150 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 140113005.",
			"Vitesse à vide : 70.000 tr/min.",
			"Masse publiée : 0.31 kg.",
			"Dimensions publiées : Ø 50 x L 182 mm."
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
				"fiam-140113005-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 2.5 L/s, soit 150 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-140113005-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "70.000 tr/min",
			"evidenceIds": [
				"fiam-140113005-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.31 kg",
			"evidenceIds": [
				"fiam-140113005-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 50 x L 182 mm",
			"evidenceIds": [
				"fiam-140113005-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With rotary valve",
			"evidenceIds": [
				"fiam-140113005-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "50 W",
			"evidenceIds": [
				"fiam-140113005-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-140113005-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/smt10d-cc/",
			"sourceLabel": "Fiam, fiche technique SMT10D/CC, réf. 140113005",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 2.5 L/s, soit 150 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-140113005-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=11",
			"sourceLabel": "Fiam, brochure technique en-44, p. 11",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-140113005-20260926"
		],
		"workingPressureBar": [
			"fiam-140113005-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-140113005-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	}
};

export default product;
