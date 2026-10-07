import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fo12p",
	"slug": "fiam-fo12p",
	"brand": "Fiam",
	"model": "FO12P",
	"mpn": "127011512",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FO12P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fo12p.webp",
		"alt": "Repères techniques Fiam FO12P, référence 127011512",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fo12p/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FO12P, référence 127011512. Le tableau fabricant publie 840 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 2000 tr/min. Masse publiée : 3.05 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 14 L/s, soit 840 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 127011512.",
			"Vitesse à vide : 2000 tr/min.",
			"Masse publiée : 3.05 kg.",
			"Dimensions publiées : Ø 65 x L 200 x H 360 mm."
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
				"fiam-127011512-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 14 L/s, soit 840 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-127011512-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2000 tr/min",
			"evidenceIds": [
				"fiam-127011512-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3.05 kg",
			"evidenceIds": [
				"fiam-127011512-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 65 x L 200 x H 360 mm",
			"evidenceIds": [
				"fiam-127011512-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-127011512-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "745 W",
			"evidenceIds": [
				"fiam-127011512-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-127011512-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fo12p/",
			"sourceLabel": "Fiam, fiche technique FO12P, réf. 127011512",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 14 L/s, soit 840 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-127011512-20260926-workingpressurebar-1",
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
			"fiam-127011512-20260926"
		],
		"workingPressureBar": [
			"fiam-127011512-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-127011512-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	}
};

export default product;
