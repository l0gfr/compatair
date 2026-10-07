import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-puma-at-7030",
	"slug": "ponceuse-orbitale-puma-at-7030",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "PUMA AT-7030",
	"brand": "PUMA",
	"model": "AT-7030",
	"mpn": "AT-7030",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-puma-at-7030.webp",
		"alt": "Repères techniques : PUMA AT-7030",
		"sourceUrl": "https://www.pumaair.com/product-Air-Sander-AirSander-.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-7030",
		"label": "Référence AT-7030",
		"distinguishingAttributes": {
			"reference": "AT-7030",
			"Free Speed RPM": "8000",
			"Orbit Dia. (mm)": "5"
		}
	},
	"editorial": {
		"overview": "PUMA AT-7030. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed RPM : 8000. Orbit Dia. (mm) : 5.",
		"verifiedFacts": [
			"Free Speed RPM : 8000.",
			"Orbit Dia. (mm) : 5.",
			"Sanding Pad Size / inch : 3×6.",
			"Sanding Pad Size / mm : 75×145.",
			"Overall Length / inch : 6.69.",
			"Overall Length / mm : 170.",
			"Net Weight / lb : 2.73.",
			"Net Weight / kg : 1.24."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Free Speed RPM",
			"value": "8000",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Orbit Dia. (mm)",
			"value": "5",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Sanding Pad Size / inch",
			"value": "3×6",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Sanding Pad Size / mm",
			"value": "75×145",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "6.69",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "170",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Net Weight / lb",
			"value": "2.73",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Net Weight / kg",
			"value": "1.24",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du débit n’est pas explicitée dans cette fiche.",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "170 L/min",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-39-pdp-263-p1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Sander-AirSander-.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-Air-Sander-AirSander-.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 21ecff76fe740eda6c83b9320c3c76c76c6a187a0fe2da351e918a894a3b99ad. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-puma-cat-39-pdp-263-p1"
		],
		"workingPressureBar": [
			"october2-tools-puma-cat-39-pdp-263-p1"
		],
		"demandExplanation": [
			"october2-tools-puma-cat-39-pdp-263-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
