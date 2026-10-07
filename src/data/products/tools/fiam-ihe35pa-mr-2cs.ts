import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-ihe35pa-mr-2cs",
	"slug": "fiam-ihe35pa-mr-2cs",
	"brand": "Fiam",
	"model": "IHE35PA-MR-2CS",
	"mpn": "119550048",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam IHE35PA-MR-2CS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-ihe35pa-mr-2cs.webp",
		"alt": "Repères techniques Fiam IHE35PA-MR-2CS, référence 119550048",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ihe35pa-mr-2cs/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam IHE35PA-MR-2CS, référence 119550048. Le tableau fabricant publie 402 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 22÷35 Nm. Vitesse à vide : 6200 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 6.7 L/s, soit 402 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 119550048.",
			"Couple de serrage indicatif : 22÷35 Nm.",
			"Vitesse à vide : 6200 tr/min.",
			"Masse publiée : 1 kg."
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
				"fiam-119550048-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 6.7 L/s, soit 402 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-119550048-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "22÷35 Nm",
			"evidenceIds": [
				"fiam-119550048-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6200 tr/min",
			"evidenceIds": [
				"fiam-119550048-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1 kg",
			"evidenceIds": [
				"fiam-119550048-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 46 x L 178 x H 168 mm",
			"evidenceIds": [
				"fiam-119550048-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-119550048-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-119550048-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-119550048-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ihe35pa-mr-2cs/",
			"sourceLabel": "Fiam, fiche technique IHE35PA-MR-2CS, réf. 119550048",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 6.7 L/s, soit 402 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-119550048-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-99.pdf#page=10",
			"sourceLabel": "Fiam, brochure technique en-99, p. 10",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-119550048-20260926"
		],
		"workingPressureBar": [
			"fiam-119550048-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-119550048-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 402,
		"typical": 402,
		"max": 402
	}
};

export default product;
