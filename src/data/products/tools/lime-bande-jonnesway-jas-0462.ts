import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-bande-jonnesway-jas-0462",
	"slug": "lime-bande-jonnesway-jas-0462",
	"categoryId": "lime-bande",
	"category": "lime-bande",
	"label": "Jonnesway JAS-0462",
	"brand": "Jonnesway",
	"model": "JAS-0462",
	"mpn": "JAS-0462",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-bande-jonnesway-jas-0462.webp",
		"alt": "Repères techniques : Jonnesway JAS-0462",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAS-0462_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jas-0462",
		"label": "Référence JAS-0462",
		"distinguishingAttributes": {
			"reference": "JAS-0462",
			"Free Speed": "16,000RPM",
			"Overall Length": "370MM (14.6\")"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAS-0462. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed : 16,000RPM. Overall Length : 370MM (14.6\").",
		"verifiedFacts": [
			"Free Speed : 16,000RPM.",
			"Overall Length : 370MM (14.6\").",
			"Weight : 1.4KGS (3.1LBS).",
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
			"value": "16,000RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-31-pdp-59-spec94-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "370MM (14.6\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-31-pdp-59-spec94-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.4KGS (3.1LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-31-pdp-59-spec94-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-31-pdp-59-spec94-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-31-pdp-59-spec94-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-31-pdp-59-spec94-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "113 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-31-pdp-59-spec94-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-31-pdp-59-spec94-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAS-0462_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAS-0462_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e7b04bd6ad18e3be9a019d204da8d25971b9d8709bd4411c3392b21025e334a3. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-31-pdp-59-spec94-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-31-pdp-59-spec94-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-31-pdp-59-spec94-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
