import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-puma-at-4343",
	"slug": "perceuse-puma-at-4343",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "PUMA AT-4343",
	"brand": "PUMA",
	"model": "AT-4343",
	"mpn": "AT-4343",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-puma-at-4343.webp",
		"alt": "Repères techniques : PUMA AT-4343",
		"sourceUrl": "https://www.pumaair.com/product-5-8----1-2--Air-Drill-5-8-1-2AirDrill.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-4343",
		"label": "Référence AT-4343",
		"distinguishingAttributes": {
			"reference": "AT-4343",
			"Chuck Size / inch": "1/2",
			"Chuck Size / mm": "13"
		}
	},
	"editorial": {
		"overview": "PUMA AT-4343. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Chuck Size / inch : 1/2. Chuck Size / mm : 13.",
		"verifiedFacts": [
			"Chuck Size / inch : 1/2.",
			"Chuck Size / mm : 13.",
			"Free Speed R.P.M. : 600.",
			"Spindle : 1/2”-20.",
			"OverallLength / inch : 10.16.",
			"OverallLength / mm : 258.",
			"Air Inlet (PT) : 1/4”.",
			"Air Hose (ID) : 3/8”.",
			"Net Weight / lb : 3.31.",
			"Net Weight / kg : 1.5."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Chuck Size / inch",
			"value": "1/2",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-271-p1"
			]
		},
		{
			"label": "Chuck Size / mm",
			"value": "13",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-271-p1"
			]
		},
		{
			"label": "Free Speed R.P.M.",
			"value": "600",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-271-p1"
			]
		},
		{
			"label": "Spindle",
			"value": "1/2”-20",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-271-p1"
			]
		},
		{
			"label": "OverallLength / inch",
			"value": "10.16",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-271-p1"
			]
		},
		{
			"label": "OverallLength / mm",
			"value": "258",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-271-p1"
			]
		},
		{
			"label": "Air Inlet (PT)",
			"value": "1/4”",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-271-p1"
			]
		},
		{
			"label": "Air Hose (ID)",
			"value": "3/8”",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-271-p1"
			]
		},
		{
			"label": "Net Weight / lb",
			"value": "3.31",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-271-p1"
			]
		},
		{
			"label": "Net Weight / kg",
			"value": "1.5",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-271-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du débit n’est pas explicitée dans cette fiche.",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-271-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "368 L/min",
			"evidenceIds": [
				"october2-tools-puma-cat-36-pdp-271-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-36-pdp-271-p1",
			"sourceUrl": "https://www.pumaair.com/product-5-8----1-2--Air-Drill-5-8-1-2AirDrill.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-5-8----1-2--Air-Drill-5-8-1-2AirDrill.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 782d28c1f95d33211b2de72f5f6133f200383f8df9bf1b44879e84d347f52df2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-puma-cat-36-pdp-271-p1"
		],
		"workingPressureBar": [
			"october2-tools-puma-cat-36-pdp-271-p1"
		],
		"demandExplanation": [
			"october2-tools-puma-cat-36-pdp-271-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
