import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-cy9am",
	"slug": "fiam-cy9am",
	"brand": "Fiam",
	"model": "CY9AM",
	"mpn": "116309039",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam CY9AM",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-cy9am.webp",
		"alt": "Repères techniques Fiam CY9AM, référence 116309039",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/cy9am/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam CY9AM, référence 116309039. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 7 ÷ 18 Nm. Vitesse à vide : 800 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 116309039.",
			"Couple de serrage indicatif : 7 ÷ 18 Nm.",
			"Vitesse à vide : 800 tr/min.",
			"Masse publiée : 1.50 kg."
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
				"fiam-116309039-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-116309039-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "7 ÷ 18 Nm",
			"evidenceIds": [
				"fiam-116309039-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "800 tr/min",
			"evidenceIds": [
				"fiam-116309039-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.50 kg",
			"evidenceIds": [
				"fiam-116309039-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 46 x L 315 mm",
			"evidenceIds": [
				"fiam-116309039-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-116309039-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push start",
			"evidenceIds": [
				"fiam-116309039-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-116309039-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/cy9am/",
			"sourceLabel": "Fiam, fiche technique CY9AM, réf. 116309039",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-116309039-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-24.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-24, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-116309039-20260926"
		],
		"workingPressureBar": [
			"fiam-116309039-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-116309039-20260926"
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
