import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-jonnesway-jai-0923",
	"slug": "cle-a-chocs-jonnesway-jai-0923",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Jonnesway JAI-0923",
	"brand": "Jonnesway",
	"model": "JAI-0923",
	"mpn": "JAI-0923",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-jonnesway-jai-0923.webp",
		"alt": "Repères techniques : Jonnesway JAI-0923",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAI-0923_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jai-0923",
		"label": "Référence JAI-0923",
		"distinguishingAttributes": {
			"reference": "JAI-0923",
			"Square Drive": "3/8\"",
			"Working Torque": "335NM (250FT-LBS)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAI-0923. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Square Drive : 3/8\". Working Torque : 335NM (250FT-LBS).",
		"verifiedFacts": [
			"Square Drive : 3/8\".",
			"Working Torque : 335NM (250FT-LBS).",
			"Max Torque : 380NM (280FT-LBS).",
			"Free Speed : 10,000 RPM.",
			"Std. Bolt Size : M13 (1/2\").",
			"Overall Length : 166.5MM (6.56\").",
			"Weight : 1.2KGS (2.6LBS).",
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
			"label": "Square Drive",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
			]
		},
		{
			"label": "Working Torque",
			"value": "335NM (250FT-LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "380NM (280FT-LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "10,000 RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
			]
		},
		{
			"label": "Std. Bolt Size",
			"value": "M13 (1/2\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "166.5MM (6.56\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.2KGS (2.6LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "128 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-29-pdp-53-spec59-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAI-0923_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAI-0923_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3c1f886a933d0e28f81887aad4bb12b9cbfccb3f1a6db5c7027135d0fe87da57. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-29-pdp-53-spec59-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
