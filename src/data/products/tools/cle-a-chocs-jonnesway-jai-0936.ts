import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-jonnesway-jai-0936",
	"slug": "cle-a-chocs-jonnesway-jai-0936",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Jonnesway JAI-0936",
	"brand": "Jonnesway",
	"model": "JAI-0936",
	"mpn": "JAI-0936",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-jonnesway-jai-0936.webp",
		"alt": "Repères techniques : Jonnesway JAI-0936",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAI-0936_0938_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jai-0936",
		"label": "Référence JAI-0936",
		"distinguishingAttributes": {
			"reference": "JAI-0936",
			"Square Drive": "3/4\"",
			"Working Torque": "1,620NM (1,200FT-LBS)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAI-0936. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Square Drive : 3/4\". Working Torque : 1,620NM (1,200FT-LBS).",
		"verifiedFacts": [
			"Square Drive : 3/4\".",
			"Working Torque : 1,620NM (1,200FT-LBS).",
			"Max Torque : 2,025NM (1,500FT-LBS).",
			"Free Speed : 6,500RPM.",
			"Std. Bolt Size : M25 (1\").",
			"Overall Length : 225MM (8.85\").",
			"Weight : 3,89KGS (8,58LBS).",
			"Air Inlet Size : 3/8\".",
			"Air Hose (I.D.) : 1/2\"."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Square Drive",
			"value": "3/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
			]
		},
		{
			"label": "Working Torque",
			"value": "1,620NM (1,200FT-LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "2,025NM (1,500FT-LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "6,500RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
			]
		},
		{
			"label": "Std. Bolt Size",
			"value": "M25 (1\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "225MM (8.85\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
			]
		},
		{
			"label": "Weight",
			"value": "3,89KGS (8,58LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "1/2\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "190 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-29-pdp-56-spec65-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAI-0936_0938_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAI-0936_0938_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 055343e18e41a5d8f43612f8e2c8ec7cac55fe5b1210f5a7f2545b06c8d1e117. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-29-pdp-56-spec65-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
