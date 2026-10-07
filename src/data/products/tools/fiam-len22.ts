import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-len22",
	"slug": "fiam-len22",
	"brand": "Fiam",
	"model": "LEN22",
	"mpn": "146095200",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Fiam LEN22",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-len22.webp",
		"alt": "Repères techniques Fiam LEN22, référence 146095200",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/len22/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam LEN22, référence 146095200. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 2200 tr/min. Masse publiée : 2.1 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 146095200.",
			"Vitesse à vide : 2200 tr/min.",
			"Masse publiée : 2.1 kg.",
			"Dimensions publiées : Ø 51 x L 280 x H 112 mm."
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
				"fiam-146095200-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-146095200-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2200 tr/min",
			"evidenceIds": [
				"fiam-146095200-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.1 kg",
			"evidenceIds": [
				"fiam-146095200-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 51 x L 280 x H 112 mm",
			"evidenceIds": [
				"fiam-146095200-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-146095200-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "375 W",
			"evidenceIds": [
				"fiam-146095200-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-146095200-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/len22/",
			"sourceLabel": "Fiam, fiche technique LEN22, réf. 146095200",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-146095200-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-44, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-146095200-20260926"
		],
		"workingPressureBar": [
			"fiam-146095200-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-146095200-20260926"
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
