import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-bande-puma-at-7126",
	"slug": "lime-bande-puma-at-7126",
	"categoryId": "lime-bande",
	"category": "lime-bande",
	"label": "PUMA AT-7126",
	"brand": "PUMA",
	"model": "AT-7126",
	"mpn": "AT-7126",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-bande-puma-at-7126.webp",
		"alt": "Repères techniques : PUMA AT-7126",
		"sourceUrl": "https://www.pumaair.com/product-Air-Belt-Sander-AirBeltSander.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-7126",
		"label": "Référence AT-7126",
		"distinguishingAttributes": {
			"reference": "AT-7126",
			"Sanding Belt Size / inch": "25/32×20",
			"Sanding Belt Size / mm": "20×520"
		}
	},
	"editorial": {
		"overview": "PUMA AT-7126. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Sanding Belt Size / inch : 25/32×20. Sanding Belt Size / mm : 20×520.",
		"verifiedFacts": [
			"Sanding Belt Size / inch : 25/32×20.",
			"Sanding Belt Size / mm : 20×520.",
			"Free Speed RPM : 16000.",
			"Overall Length / inch : 16.93.",
			"Overall Length / mm : 430.",
			"Air Inlet (PT) : 1/4”.",
			"Air Hose (ID) : 3/8”.",
			"Net Weight / lb : 3.09.",
			"Net Weight / kg : 1.4."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Sanding Belt Size / inch",
			"value": "25/32×20",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Sanding Belt Size / mm",
			"value": "20×520",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Free Speed RPM",
			"value": "16000",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "16.93",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "430",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Air Inlet (PT)",
			"value": "1/4”",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Air Hose (ID)",
			"value": "3/8”",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Net Weight / lb",
			"value": "3.09",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Net Weight / kg",
			"value": "1.4",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-275-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Air Pressure ; psi : 90 psi.",
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
