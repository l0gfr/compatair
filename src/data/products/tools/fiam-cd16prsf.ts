import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-cd16prsf",
	"slug": "fiam-cd16prsf",
	"brand": "Fiam",
	"model": "CD16PRSF",
	"mpn": "114807145",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam CD16PRSF",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-cd16prsf.webp",
		"alt": "Repères techniques Fiam CD16PRSF, référence 114807145",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/cd16prsf/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam CD16PRSF, référence 114807145. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 0.0÷16 Nm. Vitesse à vide : 600 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114807145.",
			"Couple de serrage indicatif : 0.0÷16 Nm.",
			"Vitesse à vide : 600 tr/min.",
			"Masse publiée : 0.9 kg."
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
				"fiam-114807145-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114807145-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "0.0÷16 Nm",
			"evidenceIds": [
				"fiam-114807145-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "600 tr/min",
			"evidenceIds": [
				"fiam-114807145-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.9 kg",
			"evidenceIds": [
				"fiam-114807145-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 38 x L 214 x H 154 mm",
			"evidenceIds": [
				"fiam-114807145-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-114807145-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-114807145-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114807145-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/cd16prsf/",
			"sourceLabel": "Fiam, fiche technique CD16PRSF, réf. 114807145",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114807145-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-91.pdf#page=6",
			"sourceLabel": "Fiam, brochure technique en-91, p. 6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114807145-20260926"
		],
		"workingPressureBar": [
			"fiam-114807145-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114807145-20260926"
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
