import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-bande-puma-at-7109",
	"slug": "lime-bande-puma-at-7109",
	"categoryId": "lime-bande",
	"category": "lime-bande",
	"label": "PUMA AT-7109",
	"brand": "PUMA",
	"model": "AT-7109",
	"mpn": "AT-7109",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-bande-puma-at-7109.webp",
		"alt": "Repères techniques : PUMA AT-7109",
		"sourceUrl": "https://www.pumaair.com/product-Air-Belt-Sander-AirBeltSander.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-7109",
		"label": "Référence AT-7109",
		"distinguishingAttributes": {
			"reference": "AT-7109",
			"Sanding BeltSize / inch": "1-3/16×21-1/4",
			"Sanding BeltSize / mm": "30×540"
		}
	},
	"editorial": {
		"overview": "PUMA AT-7109. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Sanding BeltSize / inch : 1-3/16×21-1/4. Sanding BeltSize / mm : 30×540.",
		"verifiedFacts": [
			"Sanding BeltSize / inch : 1-3/16×21-1/4.",
			"Sanding BeltSize / mm : 30×540.",
			"Free SpeedRPM : 12000.",
			"Overall Length / inch : 14.96.",
			"Overall Length / mm : 380.",
			"Net Weight / lb : 4.41.",
			"Net Weight / kg : 2.0."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Sanding BeltSize / inch",
			"value": "1-3/16×21-1/4",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Sanding BeltSize / mm",
			"value": "30×540",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Free SpeedRPM",
			"value": "12000",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "14.96",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "380",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Net Weight / lb",
			"value": "4.41",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Net Weight / kg",
			"value": "2.0",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du débit n’est pas explicitée dans cette fiche.",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "368 L/min",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-39-pdp-275-p1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Belt-Sander-AirBeltSander.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-Air-Belt-Sander-AirBeltSander.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 7d4a583bc6e978ed46f634796f2d5adc5dfad734de318eaf9c230fb12b7a6c98. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-puma-cat-39-pdp-275-p1"
		],
		"workingPressureBar": [
			"october2-tools-puma-cat-39-pdp-275-p1"
		],
		"demandExplanation": [
			"october2-tools-puma-cat-39-pdp-275-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
