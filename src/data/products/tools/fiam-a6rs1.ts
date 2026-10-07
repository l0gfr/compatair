import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-a6rs1",
	"slug": "fiam-a6rs1",
	"brand": "Fiam",
	"model": "A6RS1",
	"mpn": "114890924",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam A6RS1",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-a6rs1.webp",
		"alt": "Repères techniques Fiam A6RS1, référence 114890924",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/a6rs1/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam A6RS1, référence 114890924. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 0.0÷12.5 Nm. Vitesse à vide : 550 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114890924.",
			"Couple de serrage indicatif : 0.0÷12.5 Nm.",
			"Vitesse à vide : 550 tr/min.",
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
				"fiam-114890924-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114890924-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "0.0÷12.5 Nm",
			"evidenceIds": [
				"fiam-114890924-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "550 tr/min",
			"evidenceIds": [
				"fiam-114890924-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.4 kg",
			"evidenceIds": [
				"fiam-114890924-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 317 mm",
			"evidenceIds": [
				"fiam-114890924-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-114890924-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-114890924-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114890924-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/a6rs1/",
			"sourceLabel": "Fiam, fiche technique A6RS1, réf. 114890924",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114890924-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-91.pdf#page=7",
			"sourceLabel": "Fiam, brochure technique en-91, p. 7",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114890924-20260926"
		],
		"workingPressureBar": [
			"fiam-114890924-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114890924-20260926"
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
