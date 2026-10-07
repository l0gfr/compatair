import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-jonnesway-jai-1044l",
	"slug": "cle-a-chocs-jonnesway-jai-1044l",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Jonnesway JAI-1044L",
	"brand": "Jonnesway",
	"model": "JAI-1044L",
	"mpn": "JAI-1044L",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-jonnesway-jai-1044l.webp",
		"alt": "Repères techniques : Jonnesway JAI-1044L",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAI-1044_1044L_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jai-1044l",
		"label": "Référence JAI-1044L",
		"distinguishingAttributes": {
			"reference": "JAI-1044L",
			"Square Drive": "1/2\"",
			"Working Torque": "650NM (480FT-LBS)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAI-1044L. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Square Drive : 1/2\". Working Torque : 650NM (480FT-LBS).",
		"verifiedFacts": [
			"Square Drive : 1/2\".",
			"Working Torque : 650NM (480FT-LBS).",
			"Max Torque : 780NM (580FT-LBS).",
			"Free Speed : 8,000RPM.",
			"Std. Bolt Size : M16 (5/8\").",
			"Overall Length : 252MM (9.93\").",
			"Weight : 2.88KGS (6.3LBS).",
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
				"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
			]
		},
		{
			"label": "Working Torque",
			"value": "650NM (480FT-LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "780NM (580FT-LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "8,000RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
			]
		},
		{
			"label": "Std. Bolt Size",
			"value": "M16 (5/8\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "252MM (9.93\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
			]
		},
		{
			"label": "Weight",
			"value": "2.88KGS (6.3LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "119 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-29-pdp-62-spec74-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAI-1044_1044L_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAI-1044_1044L_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c8cd7c560d4e84a579cb552bcdd2ed78ba0332d18c628b33c92e1142d4cdc7eb. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-29-pdp-62-spec74-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
