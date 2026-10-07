import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-ad14ra1-2cs",
	"slug": "fiam-ad14ra1-2cs",
	"brand": "Fiam",
	"model": "AD14RA1-2CS",
	"mpn": "114807129",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam AD14RA1-2CS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-ad14ra1-2cs.webp",
		"alt": "Repères techniques Fiam AD14RA1-2CS, référence 114807129",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ad14ra1-2cs/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam AD14RA1-2CS, référence 114807129. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 3÷14 Nm. Vitesse à vide : 600 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114807129.",
			"Couple de serrage indicatif : 3÷14 Nm.",
			"Vitesse à vide : 600 tr/min.",
			"Masse publiée : 1.4 kg."
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
				"fiam-114807129-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114807129-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "3÷14 Nm",
			"evidenceIds": [
				"fiam-114807129-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "600 tr/min",
			"evidenceIds": [
				"fiam-114807129-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.4 kg",
			"evidenceIds": [
				"fiam-114807129-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "MALE SQUARE  DRIVE 3/8\"",
			"evidenceIds": [
				"fiam-114807129-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-114807129-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114807129-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ad14ra1-2cs/",
			"sourceLabel": "Fiam, fiche technique AD14RA1-2CS, réf. 114807129",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114807129-20260926-workingpressurebar-1",
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
			"fiam-114807129-20260926"
		],
		"workingPressureBar": [
			"fiam-114807129-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114807129-20260926"
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
