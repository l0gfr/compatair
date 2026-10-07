import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-jonnesway-jat-1045",
	"slug": "tronconneuse-jonnesway-jat-1045",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Jonnesway JAT-1045",
	"brand": "Jonnesway",
	"model": "JAT-1045",
	"mpn": "JAT-1045",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-jonnesway-jat-1045.webp",
		"alt": "Repères techniques : Jonnesway JAT-1045",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAT-1045_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jat-1045",
		"label": "Référence JAT-1045",
		"distinguishingAttributes": {
			"reference": "JAT-1045",
			"Free Speed": "15,000RPM",
			"Overall Length": "210MM (8.26\")"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAT-1045. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed : 15,000RPM. Overall Length : 210MM (8.26\").",
		"verifiedFacts": [
			"Free Speed : 15,000RPM.",
			"Overall Length : 210MM (8.26\").",
			"Weight : 0.93KGS (2.04LBS).",
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
			"value": "15,000RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-33-pdp-51-spec116-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "210MM (8.26\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-33-pdp-51-spec116-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.93KGS (2.04LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-33-pdp-51-spec116-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-33-pdp-51-spec116-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-33-pdp-51-spec116-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-33-pdp-51-spec116-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "113 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-33-pdp-51-spec116-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-33-pdp-51-spec116-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAT-1045_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAT-1045_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 636697005451851d4c251181e75a3156f54df6ab31ba8005726fd34ce8fb3d55. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-33-pdp-51-spec116-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-33-pdp-51-spec116-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-33-pdp-51-spec116-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
