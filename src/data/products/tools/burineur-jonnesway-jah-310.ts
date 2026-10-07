import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-jonnesway-jah-310",
	"slug": "burineur-jonnesway-jah-310",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Jonnesway JAH-310",
	"brand": "Jonnesway",
	"model": "JAH-310",
	"mpn": "JAH-310",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-jonnesway-jah-310.webp",
		"alt": "Repères techniques : Jonnesway JAH-310",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAH-310_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jah-310",
		"label": "Référence JAH-310",
		"distinguishingAttributes": {
			"reference": "JAH-310",
			"Piston Diameter (I.D.)": "3/4\" (19mm)",
			"Piston Stroke Length": "3.5\"(900mm)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAH-310. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Piston Diameter (I.D.) : 3/4\" (19mm). Piston Stroke Length : 3.5\"(900mm).",
		"verifiedFacts": [
			"Piston Diameter (I.D.) : 3/4\" (19mm).",
			"Piston Stroke Length : 3.5\"(900mm).",
			"Overall Length : 8.7\"(220mm).",
			"Weight : 4.4 Ibs (2 kgs).",
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
				"october2-tools-jonnes-cat-28-pdp-63-spec55-p1"
			]
		},
		{
			"label": "Piston Stroke Length",
			"value": "3.5\"(900mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-63-spec55-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "8.7\"(220mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-63-spec55-p1"
			]
		},
		{
			"label": "Weight",
			"value": "4.4 Ibs (2 kgs)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-63-spec55-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-63-spec55-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-63-spec55-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90(psi)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-63-spec55-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "7.4 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-63-spec55-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-28-pdp-63-spec55-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAH-310_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAH-310_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 029b7686ca72b907bfb3f89f72c5227152c3c108f506a5e77d6839012e6efd10. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-28-pdp-63-spec55-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-28-pdp-63-spec55-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-28-pdp-63-spec55-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
