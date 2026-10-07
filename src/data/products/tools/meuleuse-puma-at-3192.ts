import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-puma-at-3192",
	"slug": "meuleuse-puma-at-3192",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PUMA AT-3192",
	"brand": "PUMA",
	"model": "AT-3192",
	"mpn": "AT-3192",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-puma-at-3192.webp",
		"alt": "Repères techniques : PUMA AT-3192",
		"sourceUrl": "https://www.pumaair.com/product-Air-Micro-Die-Grinder-AirMicroDieGrinder.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-3192",
		"label": "Référence AT-3192",
		"distinguishingAttributes": {
			"reference": "AT-3192",
			"Free Speed RPM": "35000",
			"Cup Wheel Size mm": "20"
		}
	},
	"editorial": {
		"overview": "PUMA AT-3192. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed RPM : 35000. Cup Wheel Size mm : 20.",
		"verifiedFacts": [
			"Free Speed RPM : 35000.",
			"Cup Wheel Size mm : 20.",
			"Overall Length / inch : 5.2.",
			"Overall Length / mm : 132.",
			"Air Inlet PT(NPT) : 1/4”.",
			"Air Hose (ID) : 1/4”.",
			"Net Weight / lb : 0.3.",
			"Net Weight / kg : 0.14."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Free Speed RPM",
			"value": "35000",
			"evidenceIds": [
				"october2-tools-puma-cat-41-pdp-271-p1"
			]
		},
		{
			"label": "Cup Wheel Size mm",
			"value": "20",
			"evidenceIds": [
				"october2-tools-puma-cat-41-pdp-271-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "5.2",
			"evidenceIds": [
				"october2-tools-puma-cat-41-pdp-271-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "132",
			"evidenceIds": [
				"october2-tools-puma-cat-41-pdp-271-p1"
			]
		},
		{
			"label": "Air Inlet PT(NPT)",
			"value": "1/4”",
			"evidenceIds": [
				"october2-tools-puma-cat-41-pdp-271-p1"
			]
		},
		{
			"label": "Air Hose (ID)",
			"value": "1/4”",
			"evidenceIds": [
				"october2-tools-puma-cat-41-pdp-271-p1"
			]
		},
		{
			"label": "Net Weight / lb",
			"value": "0.3",
			"evidenceIds": [
				"october2-tools-puma-cat-41-pdp-271-p1"
			]
		},
		{
			"label": "Net Weight / kg",
			"value": "0.14",
			"evidenceIds": [
				"october2-tools-puma-cat-41-pdp-271-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Air Pressure ; psi : 90 psi.",
			"evidenceIds": [
				"october2-tools-puma-cat-41-pdp-271-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "142 L/min",
			"evidenceIds": [
				"october2-tools-puma-cat-41-pdp-271-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-41-pdp-271-p1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Micro-Die-Grinder-AirMicroDieGrinder.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-Air-Micro-Die-Grinder-AirMicroDieGrinder.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3d4b460c5947122d7edf2357daa9ebccb069735c81af7229a11089f80a3ecf15. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-puma-cat-41-pdp-271-p1"
		],
		"workingPressureBar": [
			"october2-tools-puma-cat-41-pdp-271-p1"
		],
		"demandExplanation": [
			"october2-tools-puma-cat-41-pdp-271-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
