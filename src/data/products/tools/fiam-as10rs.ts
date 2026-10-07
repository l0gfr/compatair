import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-as10rs",
	"slug": "fiam-as10rs",
	"brand": "Fiam",
	"model": "AS10RS",
	"mpn": "114890910",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam AS10RS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-as10rs.webp",
		"alt": "Repères techniques Fiam AS10RS, référence 114890910",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/as10rs/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam AS10RS, référence 114890910. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 0.0÷36 Nm. Vitesse à vide : 350 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114890910.",
			"Couple de serrage indicatif : 0.0÷36 Nm.",
			"Vitesse à vide : 350 tr/min.",
			"Masse publiée : 1.3 kg."
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
				"fiam-114890910-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114890910-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "0.0÷36 Nm",
			"evidenceIds": [
				"fiam-114890910-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "350 tr/min",
			"evidenceIds": [
				"fiam-114890910-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.3 kg",
			"evidenceIds": [
				"fiam-114890910-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 339 mm",
			"evidenceIds": [
				"fiam-114890910-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "MALE SQUARE  DRIVE 3/8\"",
			"evidenceIds": [
				"fiam-114890910-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-114890910-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114890910-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/as10rs/",
			"sourceLabel": "Fiam, fiche technique AS10RS, réf. 114890910",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114890910-20260926-workingpressurebar-1",
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
			"fiam-114890910-20260926"
		],
		"workingPressureBar": [
			"fiam-114890910-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114890910-20260926"
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
