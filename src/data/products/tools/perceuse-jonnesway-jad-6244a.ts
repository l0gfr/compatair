import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-jonnesway-jad-6244a",
	"slug": "perceuse-jonnesway-jad-6244a",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Jonnesway JAD-6244A",
	"brand": "Jonnesway",
	"model": "JAD-6244A",
	"mpn": "JAD-6244A",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-jonnesway-jad-6244a.webp",
		"alt": "Repères techniques : Jonnesway JAD-6244A",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAD-6243%206244%20Serise_666-2.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jad-6244a",
		"label": "Référence JAD-6244A",
		"distinguishingAttributes": {
			"reference": "JAD-6244A",
			"Free Speed": "800гpm",
			"Overall Length": "7\" (178mm)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAD-6244A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed : 800гpm. Overall Length : 7\" (178mm).",
		"verifiedFacts": [
			"Free Speed : 800гpm.",
			"Overall Length : 7\" (178mm).",
			"Weight : 4lbs (1.82kgs).",
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
				"october2-tools-jonnes-cat-26-pdp-63-spec27-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "7\" (178mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-63-spec27-p1"
			]
		},
		{
			"label": "Weight",
			"value": "4lbs (1.82kgs)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-63-spec27-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-63-spec27-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-63-spec27-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90psi",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-63-spec27-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-63-spec27-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-26-pdp-63-spec27-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAD-6243%206244%20Serise_666-2.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAD-6243%206244%20Serise_666-2.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0a8f5d6e60750dd6f8b5b6ec5f7fc9d580b09ef879cb7a065438ab22fe5b8cfa. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-26-pdp-63-spec27-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-26-pdp-63-spec27-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-26-pdp-63-spec27-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
