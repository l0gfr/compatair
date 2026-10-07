import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-jonnesway-jar-1172",
	"slug": "cle-a-cliquet-jonnesway-jar-1172",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Jonnesway JAR-1172",
	"brand": "Jonnesway",
	"model": "JAR-1172",
	"mpn": "JAR-1172",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-jonnesway-jar-1172.webp",
		"alt": "Repères techniques : Jonnesway JAR-1172",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAR-1172.73_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jar-1172",
		"label": "Référence JAR-1172",
		"distinguishingAttributes": {
			"reference": "JAR-1172",
			"Square Drive": "1/4\"",
			"Max Torque": "30NM (22FT-LB)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAR-1172. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Square Drive : 1/4\". Max Torque : 30NM (22FT-LB).",
		"verifiedFacts": [
			"Square Drive : 1/4\".",
			"Max Torque : 30NM (22FT-LB).",
			"Free Speed : 210RPM.",
			"Std. Bolt Size : M10 (3/8\").",
			"Overall Length : 141MM (5.5\").",
			"Weight : 0.49KGS (1.1LBS).",
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
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "30NM (22FT-LB)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "210RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
			]
		},
		{
			"label": "Std. Bolt Size",
			"value": "M10 (3/8\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "141MM (5.5\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.49KGS (1.1LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "63 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-30-pdp-59-spec85-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAR-1172.73_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAR-1172.73_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2bc9f98c8dfb60bb4d1480bc2b7d8683d439f6f81956cf99c40e06473a34859. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-30-pdp-59-spec85-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
