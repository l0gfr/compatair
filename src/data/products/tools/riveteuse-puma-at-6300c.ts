import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-puma-at-6300c",
	"slug": "riveteuse-puma-at-6300c",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "PUMA AT-6300C",
	"brand": "PUMA",
	"model": "AT-6300C",
	"mpn": "AT-6300C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-puma-at-6300c.webp",
		"alt": "Repères techniques : PUMA AT-6300C",
		"sourceUrl": "https://www.pumaair.com/product-Air-Spin-Pull-Tool-AirSpinPullTool.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-6300c",
		"label": "Référence AT-6300C",
		"distinguishingAttributes": {
			"reference": "AT-6300C",
			"Rivet Nut Setting Capacity": "M5",
			"Free Speed": "2100"
		}
	},
	"editorial": {
		"overview": "PUMA AT-6300C. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Rivet Nut Setting Capacity : M5. Free Speed : 2100.",
		"verifiedFacts": [
			"Rivet Nut Setting Capacity : M5.",
			"Free Speed : 2100.",
			"OverallLength / inch : 7.95.",
			"OverallLength / mm : 202.",
			"Air Inlet (PT) : 1/4”.",
			"Air Hose (ID) : 3/8”.",
			"Net Weight / lb : 2.45.",
			"Net Weight / kg : 1.11."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Rivet Nut Setting Capacity",
			"value": "M5",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-267-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "2100",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-267-p1"
			]
		},
		{
			"label": "OverallLength / inch",
			"value": "7.95",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-267-p1"
			]
		},
		{
			"label": "OverallLength / mm",
			"value": "202",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-267-p1"
			]
		},
		{
			"label": "Air Inlet (PT)",
			"value": "1/4”",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-267-p1"
			]
		},
		{
			"label": "Air Hose (ID)",
			"value": "3/8”",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-267-p1"
			]
		},
		{
			"label": "Net Weight / lb",
			"value": "2.45",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-267-p1"
			]
		},
		{
			"label": "Net Weight / kg",
			"value": "1.11",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-267-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Air Pressure ; psi : 80~90 ; plage de fonctionnement, point de mesure non établi.",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-267-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "283 L/min",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-267-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-48-pdp-267-p1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Spin-Pull-Tool-AirSpinPullTool.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-Air-Spin-Pull-Tool-AirSpinPullTool.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 6dc6efda72ed3ec8481a9fa4b1247316f568d94ce93e229b6c5a9735f5022bf2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-puma-cat-48-pdp-267-p1"
		],
		"workingPressureBar": [
			"october2-tools-puma-cat-48-pdp-267-p1"
		],
		"demandExplanation": [
			"october2-tools-puma-cat-48-pdp-267-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
