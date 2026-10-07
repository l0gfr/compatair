import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-jonnesway-jag-0976rm",
	"slug": "meuleuse-jonnesway-jag-0976rm",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Jonnesway JAG-0976RM",
	"brand": "Jonnesway",
	"model": "JAG-0976RM",
	"mpn": "JAG-0976RM",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-jonnesway-jag-0976rm.webp",
		"alt": "Repères techniques : Jonnesway JAG-0976RM",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAG-0976R_0976RM_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jag-0976rm",
		"label": "Référence JAG-0976RM",
		"distinguishingAttributes": {
			"reference": "JAG-0976RM",
			"Free Speed (RPM)": "22000",
			"Overall Length": "260 MM"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAG-0976RM. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed (RPM) : 22000. Overall Length : 260 MM.",
		"verifiedFacts": [
			"Free Speed (RPM) : 22000.",
			"Overall Length : 260 MM.",
			"Air Inlet : 1/4\".",
			"Air Hose (I.D.) : 3/8\".",
			"Weight : 0.64 KGS."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Free Speed (RPM)",
			"value": "22000",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-64-spec42-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "260 MM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-64-spec42-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-64-spec42-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-64-spec42-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.64 KGS",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-64-spec42-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 6.2 BAR",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-64-spec42-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "112 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-64-spec42-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-27-pdp-64-spec42-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAG-0976R_0976RM_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAG-0976R_0976RM_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 16dccf2011d704ad3beed3787f83d7857fb3e707aae36f9d2f845e62ed95b9ea. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-27-pdp-64-spec42-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-27-pdp-64-spec42-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-27-pdp-64-spec42-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
