import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-15c5a-ft",
	"slug": "fiam-15c5a-ft",
	"brand": "Fiam",
	"model": "15C5A-FT",
	"mpn": "112509913",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 15C5A-FT",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-15c5a-ft.webp",
		"alt": "Repères techniques Fiam 15C5A-FT, référence 112509913",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c5a-ft/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam 15C5A-FT, référence 112509913. Le tableau fabricant publie 330 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 0.4 ÷ 5 Nm. Vitesse à vide : 650 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 5.5 L/s, soit 330 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 112509913.",
			"Couple de serrage indicatif : 0.4 ÷ 5 Nm.",
			"Vitesse à vide : 650 tr/min.",
			"Masse publiée : 0.59 kg."
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
				"fiam-112509913-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 5.5 L/s, soit 330 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-112509913-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "0.4 ÷ 5 Nm",
			"evidenceIds": [
				"fiam-112509913-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "650 tr/min",
			"evidenceIds": [
				"fiam-112509913-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.59 kg",
			"evidenceIds": [
				"fiam-112509913-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 38 x L 230 mm",
			"evidenceIds": [
				"fiam-112509913-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-112509913-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push start",
			"evidenceIds": [
				"fiam-112509913-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-112509913-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c5a-ft/",
			"sourceLabel": "Fiam, fiche technique 15C5A-FT, réf. 112509913",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 5.5 L/s, soit 330 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-112509913-20260926-workingpressurebar-1",
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
			"fiam-112509913-20260926"
		],
		"workingPressureBar": [
			"fiam-112509913-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-112509913-20260926"
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
