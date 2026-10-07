import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-hymair-ash-02",
	"slug": "pistolet-peinture-hvlp-hymair-ash-02",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Hymair ASH-02",
	"brand": "Hymair",
	"model": "ASH-02",
	"mpn": "ASH-02",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2.5,
		"max": 3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-hymair-ash-02.webp",
		"alt": "Repères techniques : Hymair ASH-02",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-ash-02",
		"label": "Référence ASH-02",
		"distinguishingAttributes": {
			"reference": "ASH-02",
			"Capacité du godet": "1,000 ml",
			"Buse standard déclarée": "1.4 mm"
		}
	},
	"editorial": {
		"overview": "Hymair ASH-02. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité du godet : 1,000 ml. Buse standard déclarée : 1.4 mm.",
		"verifiedFacts": [
			"Capacité du godet : 1,000 ml.",
			"Buse standard déclarée : 1.4 mm.",
			"Largeur de jet publiée : 170-230 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité du godet",
			"value": "1,000 ml",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		},
		{
			"label": "Buse standard déclarée",
			"value": "1.4 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		},
		{
			"label": "Largeur de jet publiée",
			"value": "170-230 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 2.5-3.0 Bar",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6.5 cfm",
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
