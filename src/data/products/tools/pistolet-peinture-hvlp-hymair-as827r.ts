import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-hymair-as827r",
	"slug": "pistolet-peinture-hvlp-hymair-as827r",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Hymair AS827R",
	"brand": "Hymair",
	"model": "AS827R",
	"mpn": "AS827R",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2,
		"max": 3.5
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-hymair-as827r.webp",
		"alt": "Repères techniques : Hymair AS827R",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-as827r",
		"label": "Référence AS827R",
		"distinguishingAttributes": {
			"reference": "AS827R",
			"Capacité du godet": "600 ml",
			"Buse standard déclarée": "1.4 mm"
		}
	},
	"editorial": {
		"overview": "Hymair AS827R. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité du godet : 600 ml. Buse standard déclarée : 1.4 mm.",
		"verifiedFacts": [
			"Capacité du godet : 600 ml.",
			"Buse standard déclarée : 1.4 mm.",
			"Largeur de jet publiée : 190 mm."
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
			"label": "Buse standard déclarée",
			"value": "1.4 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Largeur de jet publiée",
			"value": "190 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 2.0~3.5 bar",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "8.8 cfm",
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
