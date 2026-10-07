import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-40a17af12b-hex-12",
	"slug": "fiam-40a17af12b-hex-12",
	"brand": "Fiam",
	"model": "40A17AF12B-HEX.12",
	"mpn": "114899930",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 40A17AF12B-HEX.12",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-40a17af12b-hex-12.webp",
		"alt": "Repères techniques Fiam 40A17AF12B-HEX.12, référence 114899930",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/40a17af12b-hex-12/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam 40A17AF12B-HEX.12, référence 114899930. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 7 ÷ 17 Nm. Vitesse à vide : 300 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114899930.",
			"Couple de serrage indicatif : 7 ÷ 17 Nm.",
			"Vitesse à vide : 300 tr/min.",
			"Masse publiée : 1.90 kg."
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
				"fiam-114899930-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114899930-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "7 ÷ 17 Nm",
			"evidenceIds": [
				"fiam-114899930-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "300 tr/min",
			"evidenceIds": [
				"fiam-114899930-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.90 kg",
			"evidenceIds": [
				"fiam-114899930-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE  12 mm",
			"evidenceIds": [
				"fiam-114899930-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-114899930-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114899930-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/40a17af12b-hex-12/",
			"sourceLabel": "Fiam, fiche technique 40A17AF12B-HEX.12, réf. 114899930",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114899930-20260926-workingpressurebar-1",
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
			"fiam-114899930-20260926"
		],
		"workingPressureBar": [
			"fiam-114899930-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114899930-20260926"
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
