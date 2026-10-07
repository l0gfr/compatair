import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-puma-at-7017s",
	"slug": "ponceuse-orbitale-puma-at-7017s",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "PUMA AT-7017S",
	"brand": "PUMA",
	"model": "AT-7017S",
	"mpn": "AT-7017S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-puma-at-7017s.webp",
		"alt": "Repères techniques : PUMA AT-7017S",
		"sourceUrl": "https://www.pumaair.com/product-Air-Sander-AirSander-.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-7017s",
		"label": "Référence AT-7017S",
		"distinguishingAttributes": {
			"reference": "AT-7017S",
			"Free Speed RPM": "15000",
			"Orbit Dia. (mm)": "1.2"
		}
	},
	"editorial": {
		"overview": "PUMA AT-7017S. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed RPM : 15000. Orbit Dia. (mm) : 1.2.",
		"verifiedFacts": [
			"Free Speed RPM : 15000.",
			"Orbit Dia. (mm) : 1.2.",
			"Sanding Pad Size / inch : 3×3.23.",
			"Sanding Pad Size / mm : 75×82.",
			"Overall Length / inch : 6.1.",
			"Overall Length / mm : 155.",
			"Net Weight / lb : 0.93.",
			"Net Weight / kg : 0.42."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Free Speed RPM",
			"value": "15000",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Orbit Dia. (mm)",
			"value": "1.2",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Sanding Pad Size / inch",
			"value": "3×3.23",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Sanding Pad Size / mm",
			"value": "75×82",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "6.1",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "155",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Net Weight / lb",
			"value": "0.93",
			"evidenceIds": [
				"october2-tools-puma-cat-39-pdp-263-p1"
			]
		},
		{
			"label": "Net Weight / kg",
			"value": "0.42",
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
			"value": "85 L/min",
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
