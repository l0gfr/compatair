import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-puma-at-4032",
	"slug": "perceuse-puma-at-4032",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "PUMA AT-4032",
	"brand": "PUMA",
	"model": "AT-4032",
	"mpn": "AT-4032",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-puma-at-4032.webp",
		"alt": "Repères techniques : PUMA AT-4032",
		"sourceUrl": "https://www.pumaair.com/product-3-8----1-4--Air-Drill-3-8-1-4AirDrill.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-4032",
		"label": "Référence AT-4032",
		"distinguishingAttributes": {
			"reference": "AT-4032",
			"Chuck Size / inch": "3/8",
			"Chuck Size / mm": "10"
		}
	},
	"editorial": {
		"overview": "PUMA AT-4032. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Chuck Size / inch : 3/8. Chuck Size / mm : 10.",
		"verifiedFacts": [
			"Chuck Size / inch : 3/8.",
			"Chuck Size / mm : 10.",
			"Free Speed R.P.M. : 2600.",
			"Spindle : 3/8”-24.",
			"OverallLength / inch : 6.5.",
			"OverallLength / mm : 165.",
			"Air Inlet (PT) : 1/4”.",
			"Air Hose (ID) : 3/8”.",
			"Net Weight / lb : 2.2.",
			"Net Weight / kg : 1."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Chuck Size / inch",
			"value": "3/8",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-267-p1"
			]
		},
		{
			"label": "Chuck Size / mm",
			"value": "10",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-267-p1"
			]
		},
		{
			"label": "Free Speed R.P.M.",
			"value": "2600",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-267-p1"
			]
		},
		{
			"label": "Spindle",
			"value": "3/8”-24",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-267-p1"
			]
		},
		{
			"label": "OverallLength / inch",
			"value": "6.5",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-267-p1"
			]
		},
		{
			"label": "OverallLength / mm",
			"value": "165",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-267-p1"
			]
		},
		{
			"label": "Air Inlet (PT)",
			"value": "1/4”",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-267-p1"
			]
		},
		{
			"label": "Air Hose (ID)",
			"value": "3/8”",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-267-p1"
			]
		},
		{
			"label": "Net Weight / lb",
			"value": "2.2",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-267-p1"
			]
		},
		{
			"label": "Net Weight / kg",
			"value": "1",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-267-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du débit n’est pas explicitée dans cette fiche.",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-267-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "198 L/min",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-267-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-36-pdp-267-p1",
			"sourceUrl": "https://www.pumaair.com/product-3-8----1-4--Air-Drill-3-8-1-4AirDrill.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-3-8----1-4--Air-Drill-3-8-1-4AirDrill.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 78df930e44470c4e289afc479656b929991d1fda5d136820c59619bc173068bc. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-puma-cat-36-pdp-267-p1"
		],
		"workingPressureBar": [
			"october2-tools-puma-cat-36-pdp-267-p1"
		],
		"demandExplanation": [
			"october2-tools-puma-cat-36-pdp-267-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
