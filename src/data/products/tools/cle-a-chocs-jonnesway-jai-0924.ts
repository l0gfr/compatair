import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-jonnesway-jai-0924",
	"slug": "cle-a-chocs-jonnesway-jai-0924",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Jonnesway JAI-0924",
	"brand": "Jonnesway",
	"model": "JAI-0924",
	"mpn": "JAI-0924",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-jonnesway-jai-0924.webp",
		"alt": "Repères techniques : Jonnesway JAI-0924",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAI-0924_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jai-0924",
		"label": "Référence JAI-0924",
		"distinguishingAttributes": {
			"reference": "JAI-0924",
			"Square Drive": "1/2\"",
			"Working Torque": "681NM (510FT-LBS)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAI-0924. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Square Drive : 1/2\". Working Torque : 681NM (510FT-LBS).",
		"verifiedFacts": [
			"Square Drive : 1/2\".",
			"Working Torque : 681NM (510FT-LBS).",
			"Max Torque : 746NM (550FT-LBS).",
			"Free Speed : 8,500RPM.",
			"Std. Bolt Size : M16 (5/8\").",
			"Overall Length : 191MM (7.52\").",
			"Weight : 1.94KGS (4.27LBS).",
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
			"label": "Square Drive",
			"value": "1/2\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
			]
		},
		{
			"label": "Working Torque",
			"value": "681NM (510FT-LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "746NM (550FT-LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "8,500RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
			]
		},
		{
			"label": "Std. Bolt Size",
			"value": "M16 (5/8\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "191MM (7.52\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.94KGS (4.27LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "133 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-29-pdp-54-spec61-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAI-0924_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAI-0924_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 420afe0ea2e915a69948728fd7fd9da3a5129acb807b2a3a0ed55b9c565e7061. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-29-pdp-54-spec61-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
