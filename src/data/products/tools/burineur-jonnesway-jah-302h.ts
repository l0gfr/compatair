import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-jonnesway-jah-302h",
	"slug": "burineur-jonnesway-jah-302h",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Jonnesway JAH-302H",
	"brand": "Jonnesway",
	"model": "JAH-302H",
	"mpn": "JAH-302H",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-jonnesway-jah-302h.webp",
		"alt": "Repères techniques : Jonnesway JAH-302H",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAH-302%20302H_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jah-302h",
		"label": "Référence JAH-302H",
		"distinguishingAttributes": {
			"reference": "JAH-302H",
			"Piston Diameter (I.D.)": "3/4\" (19mm)",
			"Piston Stroke Length": "2-5/8\" (66mm)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAH-302H. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Piston Diameter (I.D.) : 3/4\" (19mm). Piston Stroke Length : 2-5/8\" (66mm).",
		"verifiedFacts": [
			"Piston Diameter (I.D.) : 3/4\" (19mm).",
			"Piston Stroke Length : 2-5/8\" (66mm).",
			"Weight : 3.74 Ibs (1.7 kgs).",
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
			"label": "Piston Diameter (I.D.)",
			"value": "3/4\" (19mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-57-spec52-p1"
			]
		},
		{
			"label": "Piston Stroke Length",
			"value": "2-5/8\" (66mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-57-spec52-p1"
			]
		},
		{
			"label": "Weight",
			"value": "3.74 Ibs (1.7 kgs)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-57-spec52-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-57-spec52-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-57-spec52-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90(psi)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-57-spec52-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-57-spec52-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-28-pdp-57-spec52-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAH-302%20302H_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAH-302%20302H_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a1eeb0d967f1369919e1fb9fd3d683c368e3db3cb1fe76bd865d470aa94c4fef. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-28-pdp-57-spec52-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-28-pdp-57-spec52-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-28-pdp-57-spec52-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
