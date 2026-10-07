import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-ag60ra-2cs",
	"slug": "fiam-ag60ra-2cs",
	"brand": "Fiam",
	"model": "AG60RA-2CS",
	"mpn": "114809915",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam AG60RA-2CS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-ag60ra-2cs.webp",
		"alt": "Repères techniques Fiam AG60RA-2CS, référence 114809915",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ag60ra-2cs/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam AG60RA-2CS, référence 114809915. Le tableau fabricant publie 780 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 29÷60 Nm. Vitesse à vide : 300 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 13 L/s, soit 780 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114809915.",
			"Couple de serrage indicatif : 29÷60 Nm.",
			"Vitesse à vide : 300 tr/min.",
			"Masse publiée : 2.3 kg."
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
				"fiam-114809915-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 13 L/s, soit 780 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114809915-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "29÷60 Nm",
			"evidenceIds": [
				"fiam-114809915-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "300 tr/min",
			"evidenceIds": [
				"fiam-114809915-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.3 kg",
			"evidenceIds": [
				"fiam-114809915-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "MALE SQUARE  DRIVE 1/2\"",
			"evidenceIds": [
				"fiam-114809915-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-114809915-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114809915-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ag60ra-2cs/",
			"sourceLabel": "Fiam, fiche technique AG60RA-2CS, réf. 114809915",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 13 L/s, soit 780 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114809915-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-26.pdf#page=21",
			"sourceLabel": "Fiam, brochure technique en-26, p. 21",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114809915-20260926"
		],
		"workingPressureBar": [
			"fiam-114809915-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114809915-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 780,
		"typical": 780,
		"max": 780
	}
};

export default product;
