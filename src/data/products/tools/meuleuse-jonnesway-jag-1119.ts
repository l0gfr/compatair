import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-jonnesway-jag-1119",
	"slug": "meuleuse-jonnesway-jag-1119",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Jonnesway JAG-1119",
	"brand": "Jonnesway",
	"model": "JAG-1119",
	"mpn": "JAG-1119",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-jonnesway-jag-1119.webp",
		"alt": "Repères techniques : Jonnesway JAG-1119",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAG-1119_1129_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jag-1119",
		"label": "Référence JAG-1119",
		"distinguishingAttributes": {
			"reference": "JAG-1119",
			"Free Speed": "6,000(грm)",
			"Overall Length": "13.15\"x12.2\"x7.7\" (334x310x196mm)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAG-1119. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed : 6,000(грm). Overall Length : 13.15\"x12.2\"x7.7\" (334x310x196mm).",
		"verifiedFacts": [
			"Free Speed : 6,000(грm).",
			"Overall Length : 13.15\"x12.2\"x7.7\" (334x310x196mm).",
			"Weight : 14.55 Ibs (6.6 kgs).",
			"Air Inlet Size : 1/2\".",
			"Air Hose (I.D.) : 3/4\"."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Free Speed",
			"value": "6,000(грm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-58-spec36-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "13.15\"x12.2\"x7.7\" (334x310x196mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-58-spec36-p1"
			]
		},
		{
			"label": "Weight",
			"value": "14.55 Ibs (6.6 kgs)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-58-spec36-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/2\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-58-spec36-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-58-spec36-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90(psi)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-58-spec36-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4.2 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-58-spec36-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-27-pdp-58-spec36-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAG-1119_1129_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAG-1119_1129_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a925d65311d3cf7f41818cfeb728a90d343a2e9722585cef2421fcdf9a643ce7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-27-pdp-58-spec36-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-27-pdp-58-spec36-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-27-pdp-58-spec36-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
