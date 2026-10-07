import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-ihe90pa-2cs",
	"slug": "fiam-ihe90pa-2cs",
	"brand": "Fiam",
	"model": "IHE90PA-2CS",
	"mpn": "119550041",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam IHE90PA-2CS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-ihe90pa-2cs.webp",
		"alt": "Repères techniques Fiam IHE90PA-2CS, référence 119550041",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ihe90pa-2cs/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam IHE90PA-2CS, référence 119550041. Le tableau fabricant publie 498 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 64÷90 Nm. Vitesse à vide : 5400 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 8.3 L/s, soit 498 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 119550041.",
			"Couple de serrage indicatif : 64÷90 Nm.",
			"Vitesse à vide : 5400 tr/min.",
			"Masse publiée : 1.55 kg."
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
				"fiam-119550041-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 8.3 L/s, soit 498 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-119550041-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "64÷90 Nm",
			"evidenceIds": [
				"fiam-119550041-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5400 tr/min",
			"evidenceIds": [
				"fiam-119550041-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.55 kg",
			"evidenceIds": [
				"fiam-119550041-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 53,5 x H 192 x L 200 mm",
			"evidenceIds": [
				"fiam-119550041-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "MALE SQUARE  DRIVE 1/2\"",
			"evidenceIds": [
				"fiam-119550041-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-119550041-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-119550041-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ihe90pa-2cs/",
			"sourceLabel": "Fiam, fiche technique IHE90PA-2CS, réf. 119550041",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 8.3 L/s, soit 498 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-119550041-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-99.pdf#page=10",
			"sourceLabel": "Fiam, brochure technique en-99, p. 10",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-119550041-20260926"
		],
		"workingPressureBar": [
			"fiam-119550041-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-119550041-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 498,
		"typical": 498,
		"max": 498
	}
};

export default product;
