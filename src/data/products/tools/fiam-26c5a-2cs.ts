import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-26c5a-2cs",
	"slug": "fiam-26c5a-2cs",
	"brand": "Fiam",
	"model": "26C5A-2CS",
	"mpn": "114807520",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 26C5A-2CS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-26c5a-2cs.webp",
		"alt": "Repères techniques Fiam 26C5A-2CS, référence 114807520",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/26c5a-2cs/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam 26C5A-2CS, référence 114807520. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 0.4÷5 Nm. Vitesse à vide : 1350 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114807520.",
			"Couple de serrage indicatif : 0.4÷5 Nm.",
			"Vitesse à vide : 1350 tr/min.",
			"Masse publiée : 0.85 kg."
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
				"fiam-114807520-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114807520-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "0.4÷5 Nm",
			"evidenceIds": [
				"fiam-114807520-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1350 tr/min",
			"evidenceIds": [
				"fiam-114807520-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.85 kg",
			"evidenceIds": [
				"fiam-114807520-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 235 mm",
			"evidenceIds": [
				"fiam-114807520-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-114807520-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push start",
			"evidenceIds": [
				"fiam-114807520-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114807520-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/26c5a-2cs/",
			"sourceLabel": "Fiam, fiche technique 26C5A-2CS, réf. 114807520",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114807520-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-88.pdf#page=14",
			"sourceLabel": "Fiam, brochure technique en-88, p. 14",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114807520-20260926"
		],
		"workingPressureBar": [
			"fiam-114807520-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114807520-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	}
};

export default product;
