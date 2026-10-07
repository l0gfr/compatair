import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-puma-at-6319",
	"slug": "riveteuse-puma-at-6319",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "PUMA AT-6319",
	"brand": "PUMA",
	"model": "AT-6319",
	"mpn": "AT-6319",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-puma-at-6319.webp",
		"alt": "Repères techniques : PUMA AT-6319",
		"sourceUrl": "https://www.pumaair.com/product-Air-Hydraulic-Riveter-AirHydraulicRiveter.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-6319",
		"label": "Référence AT-6319",
		"distinguishingAttributes": {
			"reference": "AT-6319",
			"Blind Rivet Setting Capacity (inch)": "1/4",
			"Traction Power / lbs": "3800"
		}
	},
	"editorial": {
		"overview": "PUMA AT-6319. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Blind Rivet Setting Capacity (inch) : 1/4. Traction Power / lbs : 3800.",
		"verifiedFacts": [
			"Blind Rivet Setting Capacity (inch) : 1/4.",
			"Traction Power / lbs : 3800.",
			"Traction Power / kgs : 1723.",
			"Stroke Length / inch : 0.89.",
			"Stroke Length / mm : 22.5.",
			"Overall Length / inch : 12.",
			"Overall Length / mm : 305.",
			"Air Inlet (PT) : 1/4”.",
			"Air Hose (ID) : 3/8”.",
			"Net Weight / lb : 3.97.",
			"Net Weight / kg : 1.8."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Blind Rivet Setting Capacity (inch)",
			"value": "1/4",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		},
		{
			"label": "Traction Power / lbs",
			"value": "3800",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		},
		{
			"label": "Traction Power / kgs",
			"value": "1723",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		},
		{
			"label": "Stroke Length / inch",
			"value": "0.89",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		},
		{
			"label": "Stroke Length / mm",
			"value": "22.5",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "12",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "305",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		},
		{
			"label": "Air Inlet (PT)",
			"value": "1/4”",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		},
		{
			"label": "Air Hose (ID)",
			"value": "3/8”",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		},
		{
			"label": "Net Weight / lb",
			"value": "3.97",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		},
		{
			"label": "Net Weight / kg",
			"value": "1.8",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Air Pressure ; psi : 90 psi.",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "113 L/min",
			"evidenceIds": [
				"october2-tools-puma-cat-48-pdp-263-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-48-pdp-263-p1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Hydraulic-Riveter-AirHydraulicRiveter.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-Air-Hydraulic-Riveter-AirHydraulicRiveter.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9f17a09a737a59b7aa18143d377640146018b846b1db68fd8efb2f4c238ca2b1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-puma-cat-48-pdp-263-p1"
		],
		"workingPressureBar": [
			"october2-tools-puma-cat-48-pdp-263-p1"
		],
		"demandExplanation": [
			"october2-tools-puma-cat-48-pdp-263-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
