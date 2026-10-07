import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-puma-at-4520a",
	"slug": "perceuse-puma-at-4520a",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "PUMA AT-4520A",
	"brand": "PUMA",
	"model": "AT-4520A",
	"mpn": "AT-4520A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-puma-at-4520a.webp",
		"alt": "Repères techniques : PUMA AT-4520A",
		"sourceUrl": "https://www.pumaair.com/product-1-4--Angle-Head-Drill-1-4AngleHeadDrill.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-4520a",
		"label": "Référence AT-4520A",
		"distinguishingAttributes": {
			"reference": "AT-4520A",
			"FreeSpeed R.P.M.": "4500",
			"ThreadedDrill Bits": "1/4”-28"
		}
	},
	"editorial": {
		"overview": "PUMA AT-4520A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. FreeSpeed R.P.M. : 4500. ThreadedDrill Bits : 1/4”-28.",
		"verifiedFacts": [
			"FreeSpeed R.P.M. : 4500.",
			"ThreadedDrill Bits : 1/4”-28.",
			"Power / hp : 0.3.",
			"Power / W : 225.",
			"OverallLength / inch : 10.24.",
			"OverallLength / mm : 260.",
			"Air Inlet (PT) : 1/4”.",
			"Air Hose (ID) : 3/8”.",
			"Net Weight / lb : 1.81.",
			"Net Weight / kg : 0.82."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "FreeSpeed R.P.M.",
			"value": "4500",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-263-p1"
			]
		},
		{
			"label": "ThreadedDrill Bits",
			"value": "1/4”-28",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-263-p1"
			]
		},
		{
			"label": "Power / hp",
			"value": "0.3",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-263-p1"
			]
		},
		{
			"label": "Power / W",
			"value": "225",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-263-p1"
			]
		},
		{
			"label": "OverallLength / inch",
			"value": "10.24",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-263-p1"
			]
		},
		{
			"label": "OverallLength / mm",
			"value": "260",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-263-p1"
			]
		},
		{
			"label": "Air Inlet (PT)",
			"value": "1/4”",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-263-p1"
			]
		},
		{
			"label": "Air Hose (ID)",
			"value": "3/8”",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-263-p1"
			]
		},
		{
			"label": "Net Weight / lb",
			"value": "1.81",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-263-p1"
			]
		},
		{
			"label": "Net Weight / kg",
			"value": "0.82",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-263-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du débit n’est pas explicitée dans cette fiche.",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-263-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "226 L/min",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-263-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-36-pdp-263-p1",
			"sourceUrl": "https://www.pumaair.com/product-1-4--Angle-Head-Drill-1-4AngleHeadDrill.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-1-4--Angle-Head-Drill-1-4AngleHeadDrill.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 41cf33f2526eaac00873acd86faef840b954658db7ed30172fde79d8f3d26f63. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-puma-cat-36-pdp-263-p1"
		],
		"workingPressureBar": [
			"october2-tools-puma-cat-36-pdp-263-p1"
		],
		"demandExplanation": [
			"october2-tools-puma-cat-36-pdp-263-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
