import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-pm1",
	"slug": "fiam-pm1",
	"brand": "Fiam",
	"model": "PM1",
	"mpn": "169900001",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "Fiam PM1",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-pm1.webp",
		"alt": "Repères techniques Fiam PM1, référence 169900001",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-marking-pen/pm1/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam PM1, référence 169900001. Le tableau fabricant publie 27 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 0.16 kg. Dimensions publiées : Ø 17 x L 162 mm.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 0.45 L/s, soit 27 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 169900001.",
			"Masse publiée : 0.16 kg.",
			"Dimensions publiées : Ø 17 x L 162 mm."
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
				"fiam-169900001-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 0.45 L/s, soit 27 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-169900001-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.16 kg",
			"evidenceIds": [
				"fiam-169900001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 17 x L 162 mm",
			"evidenceIds": [
				"fiam-169900001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-169900001-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-marking-pen/pm1/",
			"sourceLabel": "Fiam, fiche technique PM1, réf. 169900001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 0.45 L/s, soit 27 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-169900001-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-3.pdf#page=2",
			"sourceLabel": "Fiam, brochure technique en-3, p. 2",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-169900001-20260926"
		],
		"workingPressureBar": [
			"fiam-169900001-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-169900001-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 27,
		"typical": 27,
		"max": 27
	}
};

export default product;
