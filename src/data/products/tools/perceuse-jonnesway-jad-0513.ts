import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-jonnesway-jad-0513",
	"slug": "perceuse-jonnesway-jad-0513",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Jonnesway JAD-0513",
	"brand": "Jonnesway",
	"model": "JAD-0513",
	"mpn": "JAD-0513",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-jonnesway-jad-0513.webp",
		"alt": "Repères techniques : Jonnesway JAD-0513",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAD-0513_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jad-0513",
		"label": "Référence JAD-0513",
		"distinguishingAttributes": {
			"reference": "JAD-0513",
			"Free Speed": "2,800rpm",
			"Overall Length": "7.87\" (200mm)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAD-0513. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed : 2,800rpm. Overall Length : 7.87\" (200mm).",
		"verifiedFacts": [
			"Free Speed : 2,800rpm.",
			"Overall Length : 7.87\" (200mm).",
			"Weight : 2.2lbs (1kgs).",
			"Air Inlet Size : 1/4\".",
			"Air Hose (I.D.) : 3/8\"."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Free Speed",
			"value": "2,800rpm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-53-spec16-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "7.87\" (200mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-53-spec16-p1"
			]
		},
		{
			"label": "Weight",
			"value": "2.2lbs (1kgs)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-53-spec16-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-53-spec16-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-53-spec16-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90psi",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-53-spec16-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-53-spec16-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-26-pdp-53-spec16-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAD-0513_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAD-0513_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0e5386ad0a935c1d0370b7e6ed0c1af708d95b2407604d4df95371e81f8537f0. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-26-pdp-53-spec16-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-26-pdp-53-spec16-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-26-pdp-53-spec16-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
