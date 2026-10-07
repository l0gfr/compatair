import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-jonnesway-jad-0414",
	"slug": "perceuse-jonnesway-jad-0414",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Jonnesway JAD-0414",
	"brand": "Jonnesway",
	"model": "JAD-0414",
	"mpn": "JAD-0414",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-jonnesway-jad-0414.webp",
		"alt": "Repères techniques : Jonnesway JAD-0414",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAD-0404_0414_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jad-0414",
		"label": "Référence JAD-0414",
		"distinguishingAttributes": {
			"reference": "JAD-0414",
			"Free Speed (rpm)": "800",
			"Overall Length": "245 mm"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAD-0414. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed (rpm) : 800. Overall Length : 245 mm.",
		"verifiedFacts": [
			"Free Speed (rpm) : 800.",
			"Overall Length : 245 mm.",
			"Net Weight : 1.4kg.",
			"Air Inlet Size : 1/4\".",
			"Air Hose (I.D) : 3/8\" 10 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Free Speed (rpm)",
			"value": "800",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-51-spec14-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "245 mm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-51-spec14-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.4kg",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-51-spec14-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-51-spec14-p1"
			]
		},
		{
			"label": "Air Hose (I.D)",
			"value": "3/8\" 10 mm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-51-spec14-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure non établie dans le tableau.",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-51-spec14-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-26-pdp-51-spec14-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-26-pdp-51-spec14-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAD-0404_0414_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAD-0404_0414_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5e2d34925a94b229961daa2a5ee5c195f005b3d8c93fe66d18a4f5e56239d55e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-26-pdp-51-spec14-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-26-pdp-51-spec14-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-26-pdp-51-spec14-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
