import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-jonnesway-jah-1004",
	"slug": "burineur-jonnesway-jah-1004",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Jonnesway JAH-1004",
	"brand": "Jonnesway",
	"model": "JAH-1004",
	"mpn": "JAH-1004",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-jonnesway-jah-1004.webp",
		"alt": "Repères techniques : Jonnesway JAH-1004",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAH-1004%201004H_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jah-1004",
		"label": "Référence JAH-1004",
		"distinguishingAttributes": {
			"reference": "JAH-1004",
			"Piston Diameter (I.D.)": "1-1/8\" (28.5mm)",
			"Piston Stroke Length": "4.02\" (102mm)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAH-1004. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Piston Diameter (I.D.) : 1-1/8\" (28.5mm). Piston Stroke Length : 4.02\" (102mm).",
		"verifiedFacts": [
			"Piston Diameter (I.D.) : 1-1/8\" (28.5mm).",
			"Piston Stroke Length : 4.02\" (102mm).",
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
				"october2-tools-jonnes-cat-28-pdp-54-spec49-p1"
			]
		},
		{
			"label": "Piston Stroke Length",
			"value": "4.02\" (102mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-54-spec49-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "9.5\" (241 mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-54-spec49-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-54-spec49-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-54-spec49-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90(psi)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-54-spec49-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "30.4 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-28-pdp-54-spec49-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-28-pdp-54-spec49-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAH-1004%201004H_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAH-1004%201004H_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a59fe19dba018dc86201aedaf86fbb72db7c4cc775943247e4b85b5a61e87347. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-28-pdp-54-spec49-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-28-pdp-54-spec49-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-28-pdp-54-spec49-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
