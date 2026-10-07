import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fy8pa",
	"slug": "fiam-fy8pa",
	"brand": "Fiam",
	"model": "FY8PA",
	"mpn": "126311558",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FY8PA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fy8pa.webp",
		"alt": "Repères techniques Fiam FY8PA, référence 126311558",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fy8pa/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FY8PA, référence 126311558. Le tableau fabricant publie 660 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 2600 tr/min. Masse publiée : 1.54 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 11 L/s, soit 660 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 126311558.",
			"Vitesse à vide : 2600 tr/min.",
			"Masse publiée : 1.54 kg.",
			"Dimensions publiées : Ø 46 x L 222 x H 170 mm."
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
				"fiam-126311558-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 11 L/s, soit 660 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-126311558-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2600 tr/min",
			"evidenceIds": [
				"fiam-126311558-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.54 kg",
			"evidenceIds": [
				"fiam-126311558-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 46 x L 222 x H 170 mm",
			"evidenceIds": [
				"fiam-126311558-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-126311558-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-126311558-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fy8pa/",
			"sourceLabel": "Fiam, fiche technique FY8PA, réf. 126311558",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 11 L/s, soit 660 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-126311558-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-34, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-126311558-20260926"
		],
		"workingPressureBar": [
			"fiam-126311558-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-126311558-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	}
};

export default product;
