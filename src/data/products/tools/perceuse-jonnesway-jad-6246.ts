import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-jonnesway-jad-6246",
	"slug": "perceuse-jonnesway-jad-6246",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Jonnesway JAD-6246",
	"brand": "Jonnesway",
	"model": "JAD-6246",
	"mpn": "JAD-6246",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-jonnesway-jad-6246.webp",
		"alt": "Repères techniques : Jonnesway JAD-6246",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAD-6246_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jad-6246",
		"label": "Référence JAD-6246",
		"distinguishingAttributes": {
			"reference": "JAD-6246",
			"Free Speed": "1,800rpm",
			"Overall Length": "10\" (254mm)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAD-6246. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed : 1,800rpm. Overall Length : 10\" (254mm).",
		"verifiedFacts": [
			"Free Speed : 1,800rpm.",
			"Overall Length : 10\" (254mm).",
			"Weight : 3.74lbs (1.7kgs).",
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
			"value": "1,800rpm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-64-spec28-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "10\" (254mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-64-spec28-p1"
			]
		},
		{
			"label": "Weight",
			"value": "3.74lbs (1.7kgs)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-64-spec28-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-64-spec28-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-64-spec28-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90psi",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-64-spec28-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "10 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-64-spec28-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-26-pdp-64-spec28-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAD-6246_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAD-6246_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 7308f8556cbfd4fbedbd9f51bd92848dd5346d49312d77912bd1fd50c38dfe5c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-26-pdp-64-spec28-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-26-pdp-64-spec28-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-26-pdp-64-spec28-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
