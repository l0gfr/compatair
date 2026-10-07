import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-jonnesway-jad-1020",
	"slug": "perceuse-jonnesway-jad-1020",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Jonnesway JAD-1020",
	"brand": "Jonnesway",
	"model": "JAD-1020",
	"mpn": "JAD-1020",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-jonnesway-jad-1020.webp",
		"alt": "Repères techniques : Jonnesway JAD-1020",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAD-1020_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jad-1020",
		"label": "Référence JAD-1020",
		"distinguishingAttributes": {
			"reference": "JAD-1020",
			"Free Speed": "800гpm",
			"Overall Length": "8.66\" (220mm)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAD-1020. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed : 800гpm. Overall Length : 8.66\" (220mm).",
		"verifiedFacts": [
			"Free Speed : 800гpm.",
			"Overall Length : 8.66\" (220mm).",
			"Weight : 2.86lbs (1.3kgs).",
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
			"value": "800гpm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-60-spec23-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "8.66\" (220mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-60-spec23-p1"
			]
		},
		{
			"label": "Weight",
			"value": "2.86lbs (1.3kgs)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-60-spec23-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-60-spec23-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-60-spec23-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90psi",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-60-spec23-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-60-spec23-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-26-pdp-60-spec23-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAD-1020_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAD-1020_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5751f9d566e8677bc7f92634cd38b2fe7c5b9f52a967b1adb473f025185455a4. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-26-pdp-60-spec23-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-26-pdp-60-spec23-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-26-pdp-60-spec23-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
