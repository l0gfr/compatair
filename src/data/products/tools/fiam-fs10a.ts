const product = {
	"id": "fiam-fs10a",
	"slug": "fiam-fs10a",
	"brand": "Fiam",
	"model": "FS10A",
	"mpn": "124609046",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FS10A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fs10a.webp",
		"alt": "Repères techniques Fiam FS10A, référence 124609046",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fs10a/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FS10A, référence 124609046. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 1000 tr/min. Masse publiée : 1.09 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 124609046.",
			"Vitesse à vide : 1000 tr/min.",
			"Masse publiée : 1.09 kg.",
			"Dimensions publiées : Ø 40 x L 255 mm."
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
				"fiam-124609046-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-124609046-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1000 tr/min",
			"evidenceIds": [
				"fiam-124609046-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.09 kg",
			"evidenceIds": [
				"fiam-124609046-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 255 mm",
			"evidenceIds": [
				"fiam-124609046-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-124609046-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-124609046-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fs10a/",
			"sourceLabel": "Fiam, fiche technique FS10A, réf. 124609046",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-124609046-20260926-workingpressurebar-1",
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
			"fiam-124609046-20260926"
		],
		"workingPressureBar": [
			"fiam-124609046-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-124609046-20260926"
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
