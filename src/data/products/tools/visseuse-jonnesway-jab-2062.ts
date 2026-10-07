import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-jonnesway-jab-2062",
	"slug": "visseuse-jonnesway-jab-2062",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Jonnesway JAB-2062",
	"brand": "Jonnesway",
	"model": "JAB-2062",
	"mpn": "JAB-2062",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-jonnesway-jab-2062.webp",
		"alt": "Repères techniques : Jonnesway JAB-2062",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAB-2061_2062_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jab-2062",
		"label": "Référence JAB-2062",
		"distinguishingAttributes": {
			"reference": "JAB-2062",
			"Capacity (Bolt Size)": "M5",
			"Free Speed": "800RPM"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAB-2062. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacity (Bolt Size) : M5. Free Speed : 800RPM.",
		"verifiedFacts": [
			"Capacity (Bolt Size) : M5.",
			"Free Speed : 800RPM.",
			"Overall Length : 340MM (13.38\").",
			"Weight : 1.22KGS (2.7LBS).",
			"Air Inlet Size : 1/4\".",
			"Air Hose (I.D.) : 1/4\"."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacity (Bolt Size)",
			"value": "M5",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-52-spec5-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "800RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-52-spec5-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "340MM (13.38\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-52-spec5-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.22KGS (2.7LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-52-spec5-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-52-spec5-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-52-spec5-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-52-spec5-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "170 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-52-spec5-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-25-pdp-52-spec5-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAB-2061_2062_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAB-2061_2062_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2a20746d2311634fd343d860eeff6ba595ef7c341f04989653f9a24505c8c63. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-25-pdp-52-spec5-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-25-pdp-52-spec5-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-25-pdp-52-spec5-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
