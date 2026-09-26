const product = {
	"id": "fiam-fs17c",
	"slug": "fiam-fs17c",
	"brand": "Fiam",
	"model": "FS17C",
	"mpn": "124611112",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FS17C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fs17c.webp",
		"alt": "Repères techniques Fiam FS17C, référence 124611112",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fs17c/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FS17C, référence 124611112. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 1700 tr/min. Masse publiée : 0.96 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 124611112.",
			"Vitesse à vide : 1700 tr/min.",
			"Masse publiée : 0.96 kg.",
			"Dimensions publiées : Ø 40 x L 235 mm."
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
				"fiam-124611112-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-124611112-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1700 tr/min",
			"evidenceIds": [
				"fiam-124611112-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.96 kg",
			"evidenceIds": [
				"fiam-124611112-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 235 mm",
			"evidenceIds": [
				"fiam-124611112-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-124611112-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-124611112-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fs17c/",
			"sourceLabel": "Fiam, fiche technique FS17C, réf. 124611112",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-124611112-20260926-workingpressurebar-1",
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
			"fiam-124611112-20260926"
		],
		"workingPressureBar": [
			"fiam-124611112-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-124611112-20260926"
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
