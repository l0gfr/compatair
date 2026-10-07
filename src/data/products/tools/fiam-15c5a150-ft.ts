import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-15c5a150-ft",
	"slug": "fiam-15c5a150-ft",
	"brand": "Fiam",
	"model": "15C5A150-FT",
	"mpn": "112507072",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 15C5A150-FT",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-15c5a150-ft.webp",
		"alt": "Repères techniques Fiam 15C5A150-FT, référence 112507072",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c5a150-ft/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam 15C5A150-FT, référence 112507072. Le tableau fabricant publie 330 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 0.4 ÷ 5 Nm. Vitesse à vide : 150 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 5.5 L/s, soit 330 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 112507072.",
			"Couple de serrage indicatif : 0.4 ÷ 5 Nm.",
			"Vitesse à vide : 150 tr/min.",
			"Masse publiée : 0.65 kg."
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
				"fiam-112507072-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 5.5 L/s, soit 330 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-112507072-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "0.4 ÷ 5 Nm",
			"evidenceIds": [
				"fiam-112507072-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "150 tr/min",
			"evidenceIds": [
				"fiam-112507072-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.65 kg",
			"evidenceIds": [
				"fiam-112507072-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 38 x L 240 mm",
			"evidenceIds": [
				"fiam-112507072-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-112507072-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push start",
			"evidenceIds": [
				"fiam-112507072-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-112507072-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c5a150-ft/",
			"sourceLabel": "Fiam, fiche technique 15C5A150-FT, réf. 112507072",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 5.5 L/s, soit 330 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-112507072-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=9",
			"sourceLabel": "Fiam, brochure technique en-85, p. 9",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-112507072-20260926"
		],
		"workingPressureBar": [
			"fiam-112507072-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-112507072-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 330,
		"typical": 330,
		"max": 330
	}
};

export default product;
