const product = {
	"id": "fiam-smy115a",
	"slug": "fiam-smy115a",
	"brand": "Fiam",
	"model": "SMY115A",
	"mpn": "146395012",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Fiam SMY115A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-smy115a.webp",
		"alt": "Repères techniques Fiam SMY115A, référence 146395012",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/smy115a/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam SMY115A, référence 146395012. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 9000 tr/min. Masse publiée : 1.65 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 146395012.",
			"Vitesse à vide : 9000 tr/min.",
			"Masse publiée : 1.65 kg.",
			"Dimensions publiées : Ø 47 x L 225 x H 80 mm."
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
				"fiam-146395012-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-146395012-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9000 tr/min",
			"evidenceIds": [
				"fiam-146395012-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.65 kg",
			"evidenceIds": [
				"fiam-146395012-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 47 x L 225 x H 80 mm",
			"evidenceIds": [
				"fiam-146395012-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-146395012-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "400 W",
			"evidenceIds": [
				"fiam-146395012-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-146395012-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/smy115a/",
			"sourceLabel": "Fiam, fiche technique SMY115A, réf. 146395012",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-146395012-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=9",
			"sourceLabel": "Fiam, brochure technique en-44, p. 9",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-146395012-20260926"
		],
		"workingPressureBar": [
			"fiam-146395012-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-146395012-20260926"
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
