import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fy10",
	"slug": "fiam-fy10",
	"brand": "Fiam",
	"model": "FY10",
	"mpn": "126309023",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FY10",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fy10.webp",
		"alt": "Repères techniques Fiam FY10, référence 126309023",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fy10/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FY10, référence 126309023. Le tableau fabricant publie 660 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 1800 tr/min. Masse publiée : 0.97 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 11 L/s, soit 660 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 126309023.",
			"Vitesse à vide : 1800 tr/min.",
			"Masse publiée : 0.97 kg.",
			"Dimensions publiées : Ø 46 x L 213 mm."
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
				"fiam-126309023-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 11 L/s, soit 660 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-126309023-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1800 tr/min",
			"evidenceIds": [
				"fiam-126309023-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.97 kg",
			"evidenceIds": [
				"fiam-126309023-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 46 x L 213 mm",
			"evidenceIds": [
				"fiam-126309023-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-126309023-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-126309023-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fy10/",
			"sourceLabel": "Fiam, fiche technique FY10, réf. 126309023",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 11 L/s, soit 660 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-126309023-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=9",
			"sourceLabel": "Fiam, brochure technique en-34, p. 9",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-126309023-20260926"
		],
		"workingPressureBar": [
			"fiam-126309023-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-126309023-20260926"
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
