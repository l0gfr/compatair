import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-jonnesway-jad-0522",
	"slug": "perceuse-jonnesway-jad-0522",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Jonnesway JAD-0522",
	"brand": "Jonnesway",
	"model": "JAD-0522",
	"mpn": "JAD-0522",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-jonnesway-jad-0522.webp",
		"alt": "Repères techniques : Jonnesway JAD-0522",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAD-0522_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jad-0522",
		"label": "Référence JAD-0522",
		"distinguishingAttributes": {
			"reference": "JAD-0522",
			"Free Speed": "25,000гpm",
			"Overall Length": "5.51\" (140mm)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAD-0522. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed : 25,000гpm. Overall Length : 5.51\" (140mm).",
		"verifiedFacts": [
			"Free Speed : 25,000гpm.",
			"Overall Length : 5.51\" (140mm).",
			"Weight : 1.6lbs (0.74kgs).",
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
			"value": "25,000гpm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-54-spec17-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "5.51\" (140mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-54-spec17-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.6lbs (0.74kgs)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-54-spec17-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-54-spec17-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-54-spec17-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90psi",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-54-spec17-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-54-spec17-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-26-pdp-54-spec17-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAD-0522_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAD-0522_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 489421866adb0fa0873bfd3091b8cd84a33754463ecb65a0b883ea221f9e99e2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-26-pdp-54-spec17-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-26-pdp-54-spec17-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-26-pdp-54-spec17-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
