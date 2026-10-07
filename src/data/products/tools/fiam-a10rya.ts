import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-a10rya",
	"slug": "fiam-a10rya",
	"brand": "Fiam",
	"model": "A10RYA",
	"mpn": "116300012",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam A10RYA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-a10rya.webp",
		"alt": "Repères techniques Fiam A10RYA, référence 116300012",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/a10rya/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam A10RYA, référence 116300012. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 12 ÷ 33 Nm. Vitesse à vide : 250 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 116300012.",
			"Couple de serrage indicatif : 12 ÷ 33 Nm.",
			"Vitesse à vide : 250 tr/min.",
			"Masse publiée : 2.75 kg."
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
				"fiam-116300012-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-116300012-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "12 ÷ 33 Nm",
			"evidenceIds": [
				"fiam-116300012-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "250 tr/min",
			"evidenceIds": [
				"fiam-116300012-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.75 kg",
			"evidenceIds": [
				"fiam-116300012-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "ø 46 x L 520 mm",
			"evidenceIds": [
				"fiam-116300012-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE  14 mm",
			"evidenceIds": [
				"fiam-116300012-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-116300012-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-116300012-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/a10rya/",
			"sourceLabel": "Fiam, fiche technique A10RYA, réf. 116300012",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-116300012-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-26.pdf#page=8",
			"sourceLabel": "Fiam, brochure technique en-26, p. 8",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-116300012-20260926"
		],
		"workingPressureBar": [
			"fiam-116300012-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-116300012-20260926"
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
