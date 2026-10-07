import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hymair-h827s",
	"slug": "pistolet-peinture-hymair-h827s",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Hymair H827S",
	"brand": "Hymair",
	"model": "H827S",
	"mpn": "H827S",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 3,
		"max": 3.5
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hymair-h827s.webp",
		"alt": "Repères techniques : Hymair H827S",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-h827s",
		"label": "Référence H827S",
		"distinguishingAttributes": {
			"reference": "H827S",
			"Capacité du godet": "1000 ml",
			"Masse publiée": "920 g"
		}
	},
	"editorial": {
		"overview": "Hymair H827S. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Capacité du godet : 1000 ml. Masse publiée : 920 g.",
		"verifiedFacts": [
			"Capacité du godet : 1000 ml.",
			"Masse publiée : 920 g.",
			"Buses publiées : 1.4 mm, 1.7 mm, 2.0 mm.",
			"Distance de peinture publiée : 17-22 cm.",
			"Plage de consommation publiée, hors calcul : 6-10 SCFM."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité du godet",
			"value": "1000 ml",
			"evidenceIds": [
				"october2-tools-steed-7-p3"
			]
		},
		{
			"label": "Masse publiée",
			"value": "920 g",
			"evidenceIds": [
				"october2-tools-steed-7-p3"
			]
		},
		{
			"label": "Buses publiées",
			"value": "1.4 mm, 1.7 mm, 2.0 mm",
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
			"label": "Plage de consommation publiée, hors calcul",
			"value": "6-10 SCFM",
			"evidenceIds": [
				"october2-tools-steed-7-p3"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Pressure: 3-3.5 bar",
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
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
