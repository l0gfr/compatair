import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-bande-puma-at-7222p",
	"slug": "lime-bande-puma-at-7222p",
	"categoryId": "lime-bande",
	"category": "lime-bande",
	"label": "PUMA AT-7222P",
	"brand": "PUMA",
	"model": "AT-7222P",
	"mpn": "AT-7222P",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-bande-puma-at-7222p.webp",
		"alt": "Repères techniques : PUMA AT-7222P",
		"sourceUrl": "https://www.pumaair.com/product-Air-Belt-Sander-AirBeltSander.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-7222p",
		"label": "Référence AT-7222P",
		"distinguishingAttributes": {
			"reference": "AT-7222P",
			"Sanding BeltSize / inch": "25/32х20",
			"Sanding BeltSize / mm": "20×520"
		}
	},
	"editorial": {
		"overview": "PUMA AT-7222P. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Sanding BeltSize / inch : 25/32х20. Sanding BeltSize / mm : 20×520.",
		"verifiedFacts": [
			"Sanding BeltSize / inch : 25/32х20.",
			"Sanding BeltSize / mm : 20×520.",
			"Free SpeedRPM : 16000.",
			"Overall Length / inch : 16.02.",
			"Overall Length / mm : 407.",
			"Net Weight / lb : 2.87.",
			"Net Weight / kg : 1.3."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Sanding BeltSize / inch",
			"value": "25/32х20",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Sanding BeltSize / mm",
			"value": "20×520",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Free SpeedRPM",
			"value": "16000",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "16.02",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "407",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Net Weight / lb",
			"value": "2.87",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Net Weight / kg",
			"value": "1.3",
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
			"value": "226 L/min",
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
