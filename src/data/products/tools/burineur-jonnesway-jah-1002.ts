import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-jonnesway-jah-1002",
	"slug": "burineur-jonnesway-jah-1002",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Jonnesway JAH-1002",
	"brand": "Jonnesway",
	"model": "JAH-1002",
	"mpn": "JAH-1002",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-jonnesway-jah-1002.webp",
		"alt": "Repères techniques : Jonnesway JAH-1002",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAH-1002%201002H_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jah-1002",
		"label": "Référence JAH-1002",
		"distinguishingAttributes": {
			"reference": "JAH-1002",
			"Piston Diameter (I.D.)": "1-1/8\" (28.5mm)",
			"Piston Stroke Length": "3.03\" (77mm)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAH-1002. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Piston Diameter (I.D.) : 1-1/8\" (28.5mm). Piston Stroke Length : 3.03\" (77mm).",
		"verifiedFacts": [
			"Piston Diameter (I.D.) : 1-1/8\" (28.5mm).",
			"Piston Stroke Length : 3.03\" (77mm).",
			"Overall Length : 9.5\" (241 mm).",
			"Air Inlet Size : 3/8\".",
			"Air Hose (I.D.) : 3/8\"."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Piston Diameter (I.D.)",
			"value": "1-1/8\" (28.5mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-52-spec47-p1"
			]
		},
		{
			"label": "Piston Stroke Length",
			"value": "3.03\" (77mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-52-spec47-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "9.5\" (241 mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-52-spec47-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-52-spec47-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-52-spec47-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90(psi)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-52-spec47-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "33.9 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-52-spec47-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-28-pdp-52-spec47-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAH-1002%201002H_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAH-1002%201002H_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 6f0a81584f695a501c66e7df42d497d0f6dec8b97219698d9342d8b1deadbc46. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-28-pdp-52-spec47-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-28-pdp-52-spec47-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-28-pdp-52-spec47-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
