import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-hymair-ash-03",
	"slug": "pistolet-peinture-hvlp-hymair-ash-03",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Hymair ASH-03",
	"brand": "Hymair",
	"model": "ASH-03",
	"mpn": "ASH-03",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 1.5,
		"max": 2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-hymair-ash-03.webp",
		"alt": "Repères techniques : Hymair ASH-03",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-ash-03",
		"label": "Référence ASH-03",
		"distinguishingAttributes": {
			"reference": "ASH-03",
			"Capacité du godet": "100 ml",
			"Buse standard déclarée": "0.8 mm"
		}
	},
	"editorial": {
		"overview": "Hymair ASH-03. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité du godet : 100 ml. Buse standard déclarée : 0.8 mm.",
		"verifiedFacts": [
			"Capacité du godet : 100 ml.",
			"Buse standard déclarée : 0.8 mm.",
			"Largeur de jet publiée : 120-180 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité du godet",
			"value": "100 ml",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		},
		{
			"label": "Buse standard déclarée",
			"value": "0.8 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		},
		{
			"label": "Largeur de jet publiée",
			"value": "120-180 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 1.5-2.0 Bar",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-7-p2",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU#page=2",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 971e9f3f662af10d3c638d5e9c29c8847ee04672c40e29957ad4ca4eb13d61c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-7-p2"
		],
		"workingPressureBar": [
			"october2-tools-steed-7-p2"
		],
		"demandExplanation": [
			"october2-tools-steed-7-p2"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
