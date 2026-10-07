import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-ihe400pa",
	"slug": "fiam-ihe400pa",
	"brand": "Fiam",
	"model": "IHE400PA",
	"mpn": "119550046",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam IHE400PA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-ihe400pa.webp",
		"alt": "Repères techniques Fiam IHE400PA, référence 119550046",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ihe400pa/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam IHE400PA, référence 119550046. Le tableau fabricant publie 1 380 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 200 ÷ 400 Nm. Vitesse à vide : 3400 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 23 L/s, soit 1380 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 119550046.",
			"Couple de serrage indicatif : 200 ÷ 400 Nm.",
			"Vitesse à vide : 3400 tr/min.",
			"Masse publiée : 4.25 kg."
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
				"fiam-119550046-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 23 L/s, soit 1380 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-119550046-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "200 ÷ 400 Nm",
			"evidenceIds": [
				"fiam-119550046-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3400 tr/min",
			"evidenceIds": [
				"fiam-119550046-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "4.25 kg",
			"evidenceIds": [
				"fiam-119550046-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 82 x H 240 x L 250 mm",
			"evidenceIds": [
				"fiam-119550046-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "MALE SQUARE  DRIVE 3/4\"",
			"evidenceIds": [
				"fiam-119550046-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-119550046-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-119550046-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ihe400pa/",
			"sourceLabel": "Fiam, fiche technique IHE400PA, réf. 119550046",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 23 L/s, soit 1380 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-119550046-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-69.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-69, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-119550046-20260926"
		],
		"workingPressureBar": [
			"fiam-119550046-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-119550046-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1380,
		"typical": 1380,
		"max": 1380
	}
};

export default product;
