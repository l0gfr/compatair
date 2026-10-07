import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hymair-s770s",
	"slug": "pistolet-peinture-hymair-s770s",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Hymair S770S",
	"brand": "Hymair",
	"model": "S770S",
	"mpn": "S770S",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.5,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hymair-s770s.webp",
		"alt": "Repères techniques : Hymair S770S",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-s770s",
		"label": "Référence S770S",
		"distinguishingAttributes": {
			"reference": "S770S",
			"Capacité du godet": "1000 ml",
			"Buse standard déclarée": "1.5 mm"
		}
	},
	"editorial": {
		"overview": "Hymair S770S. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité du godet : 1000 ml. Buse standard déclarée : 1.5 mm.",
		"verifiedFacts": [
			"Capacité du godet : 1000 ml.",
			"Buse standard déclarée : 1.5 mm.",
			"Largeur de jet publiée : 180~230 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité du godet",
			"value": "1000 ml",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		},
		{
			"label": "Buse standard déclarée",
			"value": "1.5 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		},
		{
			"label": "Largeur de jet publiée",
			"value": "180~230 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 4.5~6 bar",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "7.2 cfm",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-7-p6",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU#page=6",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 971e9f3f662af10d3c638d5e9c29c8847ee04672c40e29957ad4ca4eb13d61c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-7-p6"
		],
		"workingPressureBar": [
			"october2-tools-steed-7-p6"
		],
		"demandExplanation": [
			"october2-tools-steed-7-p6"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
