import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-cg100lra-q1-2",
	"slug": "fiam-cg100lra-q1-2",
	"brand": "Fiam",
	"model": "CG100LRA-Q1/2",
	"mpn": "114807586",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam CG100LRA-Q1/2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-cg100lra-q1-2.webp",
		"alt": "Repères techniques Fiam CG100LRA-Q1/2, référence 114807586",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/cg100lra-q1-2/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam CG100LRA-Q1/2, référence 114807586. Le tableau fabricant publie 960 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 20 ÷ 103 Nm. Vitesse à vide : 150 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 16 L/s, soit 960 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114807586.",
			"Couple de serrage indicatif : 20 ÷ 103 Nm.",
			"Vitesse à vide : 150 tr/min.",
			"Masse publiée : 4.00 kg."
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
				"fiam-114807586-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 16 L/s, soit 960 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114807586-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "20 ÷ 103 Nm",
			"evidenceIds": [
				"fiam-114807586-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "150 tr/min",
			"evidenceIds": [
				"fiam-114807586-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "4.00 kg",
			"evidenceIds": [
				"fiam-114807586-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 60 x L 422 mm",
			"evidenceIds": [
				"fiam-114807586-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "MALE SQUARE  DRIVE 1/2\"",
			"evidenceIds": [
				"fiam-114807586-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-114807586-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114807586-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/cg100lra-q1-2/",
			"sourceLabel": "Fiam, fiche technique CG100LRA-Q1/2, réf. 114807586",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 16 L/s, soit 960 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114807586-20260926-workingpressurebar-1",
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
			"fiam-114807586-20260926"
		],
		"workingPressureBar": [
			"fiam-114807586-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114807586-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 960,
		"typical": 960,
		"max": 960
	}
};

export default product;
