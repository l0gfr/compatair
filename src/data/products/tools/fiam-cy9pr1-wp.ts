import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-cy9pr1-wp",
	"slug": "fiam-cy9pr1-wp",
	"brand": "Fiam",
	"model": "CY9PR1-WP",
	"mpn": "116509084",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam CY9PR1-WP",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-cy9pr1-wp.webp",
		"alt": "Repères techniques Fiam CY9PR1-WP, référence 116509084",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/cy9pr1-wp/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam CY9PR1-WP, référence 116509084. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 6÷16 Nm. Vitesse à vide : 700 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 116509084.",
			"Couple de serrage indicatif : 6÷16 Nm.",
			"Vitesse à vide : 700 tr/min.",
			"Masse publiée : 1.57 kg."
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
				"fiam-116509084-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-116509084-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "6÷16 Nm",
			"evidenceIds": [
				"fiam-116509084-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "700 tr/min",
			"evidenceIds": [
				"fiam-116509084-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.57 kg",
			"evidenceIds": [
				"fiam-116509084-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 46 x L 238 x H 175 mm",
			"evidenceIds": [
				"fiam-116509084-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-116509084-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-116509084-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-116509084-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/cy9pr1-wp/",
			"sourceLabel": "Fiam, fiche technique CY9PR1-WP, réf. 116509084",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-116509084-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-86.pdf#page=10",
			"sourceLabel": "Fiam, brochure technique en-86, p. 10",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-116509084-20260926"
		],
		"workingPressureBar": [
			"fiam-116509084-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-116509084-20260926"
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
