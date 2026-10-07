import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-jonnesway-jab-2077",
	"slug": "visseuse-jonnesway-jab-2077",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Jonnesway JAB-2077",
	"brand": "Jonnesway",
	"model": "JAB-2077",
	"mpn": "JAB-2077",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-jonnesway-jab-2077.webp",
		"alt": "Repères techniques : Jonnesway JAB-2077",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAB-2077_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jab-2077",
		"label": "Référence JAB-2077",
		"distinguishingAttributes": {
			"reference": "JAB-2077",
			"Capacity (Bolt Size)": "13/64\" (M5)",
			"Torque Range": "14.1-35.2 in-Ibs (1.6-4 N.M.)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAB-2077. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacity (Bolt Size) : 13/64\" (M5). Torque Range : 14.1-35.2 in-Ibs (1.6-4 N.M.).",
		"verifiedFacts": [
			"Capacity (Bolt Size) : 13/64\" (M5).",
			"Torque Range : 14.1-35.2 in-Ibs (1.6-4 N.M.).",
			"Free Speed : 800 (rpm).",
			"Overall Length : 8.23\" (209mm).",
			"Weight : 1.43 lbs (0.65 kgs).",
			"Air Inlet Size : 1/4\".",
			"Air Hose (I.D.) : 1/4\"."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacity (Bolt Size)",
			"value": "13/64\" (M5)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-57-spec10-p1"
			]
		},
		{
			"label": "Torque Range",
			"value": "14.1-35.2 in-Ibs (1.6-4 N.M.)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-57-spec10-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "800 (rpm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-57-spec10-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "8.23\" (209mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-57-spec10-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.43 lbs (0.65 kgs)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-57-spec10-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-57-spec10-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-57-spec10-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90(psi)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-57-spec10-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "10.5 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-25-pdp-57-spec10-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-25-pdp-57-spec10-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAB-2077_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAB-2077_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 46fac4726ccaed80baf1db628ad2b7f1dc1bcdeeb2e7d1e05b8469357883ebdd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-25-pdp-57-spec10-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-25-pdp-57-spec10-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-25-pdp-57-spec10-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
