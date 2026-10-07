import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-jonnesway-jad-6234a",
	"slug": "perceuse-jonnesway-jad-6234a",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Jonnesway JAD-6234A",
	"brand": "Jonnesway",
	"model": "JAD-6234A",
	"mpn": "JAD-6234A",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-jonnesway-jad-6234a.webp",
		"alt": "Repères techniques : Jonnesway JAD-6234A",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAD-6234A%206234AQ_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jad-6234a",
		"label": "Référence JAD-6234A",
		"distinguishingAttributes": {
			"reference": "JAD-6234A",
			"Free Speed": "1,800RPM",
			"Overall Length": "165MM (6.5\")"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAD-6234A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed : 1,800RPM. Overall Length : 165MM (6.5\").",
		"verifiedFacts": [
			"Free Speed : 1,800RPM.",
			"Overall Length : 165MM (6.5\").",
			"Weight : 1.1KGS (2.5LBS).",
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
			"value": "1,800RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-62-spec25-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "165MM (6.5\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-62-spec25-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.1KGS (2.5LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-62-spec25-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-62-spec25-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-62-spec25-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-62-spec25-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "113 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-62-spec25-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-26-pdp-62-spec25-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAD-6234A%206234AQ_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAD-6234A%206234AQ_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : bf1900c7a9828559a621331fb0a4f11e2913e7a9f32b1b8f5fca8c10bbe72ea9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-26-pdp-62-spec25-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-26-pdp-62-spec25-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-26-pdp-62-spec25-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
