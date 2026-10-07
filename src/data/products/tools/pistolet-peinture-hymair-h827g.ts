import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hymair-h827g",
	"slug": "pistolet-peinture-hymair-h827g",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Hymair H827G",
	"brand": "Hymair",
	"model": "H827G",
	"mpn": "H827G",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2,
		"max": 3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hymair-h827g.webp",
		"alt": "Repères techniques : Hymair H827G",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-h827g",
		"label": "Référence H827G",
		"distinguishingAttributes": {
			"reference": "H827G",
			"Capacité du godet": "600 ml",
			"Masse publiée": "660 g"
		}
	},
	"editorial": {
		"overview": "Hymair H827G. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité du godet : 600 ml. Masse publiée : 660 g.",
		"verifiedFacts": [
			"Capacité du godet : 600 ml.",
			"Masse publiée : 660 g.",
			"Buses publiées : 1.4mm, 1.7mm, 2.0mm.",
			"Distance de peinture publiée : 17-22 cm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité du godet",
			"value": "600 ml",
			"evidenceIds": [
				"october2-tools-steed-7-p3"
			]
		},
		{
			"label": "Masse publiée",
			"value": "660 g",
			"evidenceIds": [
				"october2-tools-steed-7-p3"
			]
		},
		{
			"label": "Buses publiées",
			"value": "1.4mm, 1.7mm, 2.0mm",
			"evidenceIds": [
				"october2-tools-steed-7-p3"
			]
		},
		{
			"label": "Distance de peinture publiée",
			"value": "17-22 cm",
			"evidenceIds": [
				"october2-tools-steed-7-p3"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Pressure: 2-3 bar",
			"evidenceIds": [
				"october2-tools-steed-7-p3"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "8.8 cfm",
			"evidenceIds": [
				"october2-tools-steed-7-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-7-p3",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU#page=3",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 971e9f3f662af10d3c638d5e9c29c8847ee04672c40e29957ad4ca4eb13d61c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-7-p3"
		],
		"workingPressureBar": [
			"october2-tools-steed-7-p3"
		],
		"demandExplanation": [
			"october2-tools-steed-7-p3"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
