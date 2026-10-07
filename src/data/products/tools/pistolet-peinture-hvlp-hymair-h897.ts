import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-hymair-h897",
	"slug": "pistolet-peinture-hvlp-hymair-h897",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Hymair H897",
	"brand": "Hymair",
	"model": "H897",
	"mpn": "H897",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 1.5,
		"max": 3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-hymair-h897.webp",
		"alt": "Repères techniques : Hymair H897",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-h897",
		"label": "Référence H897",
		"distinguishingAttributes": {
			"reference": "H897",
			"Capacité du godet": "600 ml",
			"Largeur de jet publiée": "240 mm"
		}
	},
	"editorial": {
		"overview": "Hymair H897. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité du godet : 600 ml. Largeur de jet publiée : 240 mm.",
		"verifiedFacts": [
			"Capacité du godet : 600 ml.",
			"Largeur de jet publiée : 240 mm.",
			"Buses publiées : 1.4-1.7-2.0 mm."
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
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Largeur de jet publiée",
			"value": "240 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Buses publiées",
			"value": "1.4-1.7-2.0 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Pressure: 1.5-3.0 Bar",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "12 cfm",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-7-p5",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU#page=5",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 971e9f3f662af10d3c638d5e9c29c8847ee04672c40e29957ad4ca4eb13d61c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-7-p5"
		],
		"workingPressureBar": [
			"october2-tools-steed-7-p5"
		],
		"demandExplanation": [
			"october2-tools-steed-7-p5"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
