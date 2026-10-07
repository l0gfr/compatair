import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-jonnesway-jar-1082",
	"slug": "cle-a-cliquet-jonnesway-jar-1082",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Jonnesway JAR-1082",
	"brand": "Jonnesway",
	"model": "JAR-1082",
	"mpn": "JAR-1082",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-jonnesway-jar-1082.webp",
		"alt": "Repères techniques : Jonnesway JAR-1082",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAR-1082_1083_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jar-1082",
		"label": "Référence JAR-1082",
		"distinguishingAttributes": {
			"reference": "JAR-1082",
			"Square Drive": "1/4\"",
			"Max Torque": "27NM (20FT-LBS)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAR-1082. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Square Drive : 1/4\". Max Torque : 27NM (20FT-LBS).",
		"verifiedFacts": [
			"Square Drive : 1/4\".",
			"Max Torque : 27NM (20FT-LBS).",
			"Free Speed : 240RPM.",
			"Std. Bolt Size : M6 (1/4\").",
			"Overall Length : 135.2MM (5.32\").",
			"Weight : 0.5KGS (1.1LBS).",
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
			"label": "Square Drive",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "27NM (20FT-LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "240RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
			]
		},
		{
			"label": "Std. Bolt Size",
			"value": "M6 (1/4\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "135.2MM (5.32\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.5KGS (1.1LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "103 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-30-pdp-55-spec81-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAR-1082_1083_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAR-1082_1083_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ba91bcb051e72de1a1702fd72bfc59c7701b855350a3a85aaacf5dc9e8146583. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-30-pdp-55-spec81-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
