import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-hymair-h891",
	"slug": "pistolet-peinture-hvlp-hymair-h891",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Hymair H891",
	"brand": "Hymair",
	"model": "H891",
	"mpn": "H891",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 1.5,
		"max": 2.5
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-hymair-h891.webp",
		"alt": "Repères techniques : Hymair H891",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-h891",
		"label": "Référence H891",
		"distinguishingAttributes": {
			"reference": "H891",
			"Capacité du godet": "250 ml",
			"Largeur de jet publiée": "100 mm"
		}
	},
	"editorial": {
		"overview": "Hymair H891. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Capacité du godet : 250 ml. Largeur de jet publiée : 100 mm.",
		"verifiedFacts": [
			"Capacité du godet : 250 ml.",
			"Largeur de jet publiée : 100 mm.",
			"Buses publiées : 0.8-1.0-1.2 mm.",
			"Plage de consommation publiée, hors calcul : 4.5-6 cfm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité du godet",
			"value": "250 ml",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Largeur de jet publiée",
			"value": "100 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Buses publiées",
			"value": "0.8-1.0-1.2 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Plage de consommation publiée, hors calcul",
			"value": "4.5-6 cfm",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Pressure: 1.5-2.5 Bar",
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
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
