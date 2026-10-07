import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hymair-as4001b",
	"slug": "pistolet-peinture-hymair-as4001b",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Hymair AS4001B",
	"brand": "Hymair",
	"model": "AS4001B",
	"mpn": "AS4001B",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 3.5,
		"max": 5
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hymair-as4001b.webp",
		"alt": "Repères techniques : Hymair AS4001B",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-as4001b",
		"label": "Référence AS4001B",
		"distinguishingAttributes": {
			"reference": "AS4001B",
			"Capacité du godet": "600 ml",
			"Buses publiées": "1.4, 1.7, 2.0mm"
		}
	},
	"editorial": {
		"overview": "Hymair AS4001B. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Capacité du godet : 600 ml. Buses publiées : 1.4, 1.7, 2.0mm.",
		"verifiedFacts": [
			"Capacité du godet : 600 ml.",
			"Buses publiées : 1.4, 1.7, 2.0mm.",
			"Plage de consommation publiée, hors calcul : 7-12 cfm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité du godet",
			"value": "600 ml",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		},
		{
			"label": "Buses publiées",
			"value": "1.4, 1.7, 2.0mm",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		},
		{
			"label": "Plage de consommation publiée, hors calcul",
			"value": "7-12 cfm",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 3.5-5 Bar",
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
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
