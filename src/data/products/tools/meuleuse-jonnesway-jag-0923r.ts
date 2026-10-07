import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-jonnesway-jag-0923r",
	"slug": "meuleuse-jonnesway-jag-0923r",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Jonnesway JAG-0923R",
	"brand": "Jonnesway",
	"model": "JAG-0923R",
	"mpn": "JAG-0923R",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-jonnesway-jag-0923r.webp",
		"alt": "Repères techniques : Jonnesway JAG-0923R",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAG-0923R_0923RM_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jag-0923r",
		"label": "Référence JAG-0923R",
		"distinguishingAttributes": {
			"reference": "JAG-0923R",
			"Free Speed": "25,000(грm)",
			"Overall Length": "5.9\" (150mm)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAG-0923R. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed : 25,000(грm). Overall Length : 5.9\" (150mm).",
		"verifiedFacts": [
			"Free Speed : 25,000(грm).",
			"Overall Length : 5.9\" (150mm).",
			"Weight : 0.8 Ibs (0.36 kgs).",
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
			"value": "25,000(грm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-51-spec29-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "5.9\" (150mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-51-spec29-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.8 Ibs (0.36 kgs)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-51-spec29-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-51-spec29-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-51-spec29-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90(psi)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-51-spec29-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "2.7 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-51-spec29-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-27-pdp-51-spec29-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAG-0923R_0923RM_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAG-0923R_0923RM_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 935b6a1aa36efbc881f363f6d4fbf92c03c6020217ad8048c9fb263d93aafd94. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-27-pdp-51-spec29-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-27-pdp-51-spec29-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-27-pdp-51-spec29-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
