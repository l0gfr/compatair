import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hymair-w-400g",
	"slug": "pistolet-peinture-hymair-w-400g",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Hymair W-400G",
	"brand": "Hymair",
	"model": "W-400G",
	"mpn": "W-400G",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2,
		"typical": 2,
		"max": 2
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hymair-w-400g.webp",
		"alt": "Repères techniques : Hymair W-400G",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-w-400g",
		"label": "Référence W-400G",
		"distinguishingAttributes": {
			"reference": "W-400G",
			"Capacité du godet": "600 ml",
			"Largeur de jet publiée": "120-180 mm"
		}
	},
	"editorial": {
		"overview": "Hymair W-400G. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Capacité du godet : 600 ml. Largeur de jet publiée : 120-180 mm.",
		"verifiedFacts": [
			"Capacité du godet : 600 ml.",
			"Largeur de jet publiée : 120-180 mm.",
			"Buses publiées : 1.2, 1.4, 1.5, 1.7, 1.8, 2.0 mm.",
			"Plage de consommation publiée, hors calcul : 270-420 l/min."
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
				"october2-tools-steed-7-p4"
			]
		},
		{
			"label": "Largeur de jet publiée",
			"value": "120-180 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p4"
			]
		},
		{
			"label": "Buses publiées",
			"value": "1.2, 1.4, 1.5, 1.7, 1.8, 2.0 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p4"
			]
		},
		{
			"label": "Plage de consommation publiée, hors calcul",
			"value": "270-420 l/min",
			"evidenceIds": [
				"october2-tools-steed-7-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure at Inlet: 2.0 Bar",
			"evidenceIds": [
				"october2-tools-steed-7-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-7-p4",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU#page=4",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 971e9f3f662af10d3c638d5e9c29c8847ee04672c40e29957ad4ca4eb13d61c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-7-p4"
		],
		"workingPressureBar": [
			"october2-tools-steed-7-p4"
		],
		"demandExplanation": [
			"october2-tools-steed-7-p4"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
