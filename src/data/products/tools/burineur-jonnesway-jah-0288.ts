import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-jonnesway-jah-0288",
	"slug": "burineur-jonnesway-jah-0288",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Jonnesway JAH-0288",
	"brand": "Jonnesway",
	"model": "JAH-0288",
	"mpn": "JAH-0288",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-jonnesway-jah-0288.webp",
		"alt": "Repères techniques : Jonnesway JAH-0288",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAH-0288_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jah-0288",
		"label": "Référence JAH-0288",
		"distinguishingAttributes": {
			"reference": "JAH-0288",
			"Needle Diameter": "Ø3 X 125MM",
			"Piston Diameter (I.D.)": "18 X 47MM (0.7\" X 1.9\")"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAH-0288. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Needle Diameter : Ø3 X 125MM. Piston Diameter (I.D.) : 18 X 47MM (0.7\" X 1.9\").",
		"verifiedFacts": [
			"Needle Diameter : Ø3 X 125MM.",
			"Piston Diameter (I.D.) : 18 X 47MM (0.7\" X 1.9\").",
			"Piston Stroke Length : 28MM (1.1\").",
			"Overall Length : 291MM (11.5\").",
			"Weight : 1.3KGS (2.86LBS).",
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
			"label": "Needle Diameter",
			"value": "Ø3 X 125MM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-51-spec46-p1"
			]
		},
		{
			"label": "Piston Diameter (I.D.)",
			"value": "18 X 47MM (0.7\" X 1.9\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-51-spec46-p1"
			]
		},
		{
			"label": "Piston Stroke Length",
			"value": "28MM (1.1\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-51-spec46-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "291MM (11.5\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-51-spec46-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.3KGS (2.86LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-51-spec46-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-51-spec46-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-51-spec46-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-51-spec46-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "48 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-51-spec46-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-28-pdp-51-spec46-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAH-0288_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAH-0288_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5b67784fc4576a48f8b025af0a7d5733b90aa4e65bf51a3f9902caf4f0f2843b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-28-pdp-51-spec46-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-28-pdp-51-spec46-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-28-pdp-51-spec46-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
