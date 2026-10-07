import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-40a20af19b7-5-hex-19",
	"slug": "fiam-40a20af19b7-5-hex-19",
	"brand": "Fiam",
	"model": "40A20AF19B7,5-HEX.19",
	"mpn": "114807493",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 40A20AF19B7,5-HEX.19",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-40a20af19b7-5-hex-19.webp",
		"alt": "Repères techniques Fiam 40A20AF19B7,5-HEX.19, référence 114807493",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/40a20af19b75-hex-19/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam 40A20AF19B7,5-HEX.19, référence 114807493. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 7 ÷ 20 Nm. Vitesse à vide : 240 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114807493.",
			"Couple de serrage indicatif : 7 ÷ 20 Nm.",
			"Vitesse à vide : 240 tr/min.",
			"Masse publiée : 1.9 kg."
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
				"fiam-114807493-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114807493-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "7 ÷ 20 Nm",
			"evidenceIds": [
				"fiam-114807493-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "240 tr/min",
			"evidenceIds": [
				"fiam-114807493-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.9 kg",
			"evidenceIds": [
				"fiam-114807493-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 19 mm",
			"evidenceIds": [
				"fiam-114807493-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114807493-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/40a20af19b75-hex-19/",
			"sourceLabel": "Fiam, fiche technique 40A20AF19B7,5-HEX.19, réf. 114807493",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114807493-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-26.pdf#page=9",
			"sourceLabel": "Fiam, brochure technique en-26, p. 9",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114807493-20260926"
		],
		"workingPressureBar": [
			"fiam-114807493-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114807493-20260926"
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
