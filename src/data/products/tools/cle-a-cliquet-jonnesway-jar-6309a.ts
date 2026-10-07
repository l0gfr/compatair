import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-jonnesway-jar-6309a",
	"slug": "cle-a-cliquet-jonnesway-jar-6309a",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Jonnesway JAR-6309A",
	"brand": "Jonnesway",
	"model": "JAR-6309A",
	"mpn": "JAR-6309A",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-jonnesway-jar-6309a.webp",
		"alt": "Repères techniques : Jonnesway JAR-6309A",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAR-6309A_6310A_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jar-6309a",
		"label": "Référence JAR-6309A",
		"distinguishingAttributes": {
			"reference": "JAR-6309A",
			"Square Drive": "1/2\"",
			"Max Torque": "100NM (75FT-LBS)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAR-6309A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Square Drive : 1/2\". Max Torque : 100NM (75FT-LBS).",
		"verifiedFacts": [
			"Square Drive : 1/2\".",
			"Max Torque : 100NM (75FT-LBS).",
			"Free Speed : 170RPM.",
			"Std. Bolt Size : M10 (3/8\").",
			"Overall Length : 275MM (10.75\").",
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
			"label": "Square Drive",
			"value": "1/2\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "100NM (75FT-LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "170RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
			]
		},
		{
			"label": "Std. Bolt Size",
			"value": "M10 (3/8\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "275MM (10.75\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.4KGS (3.1LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "113 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-30-pdp-60-spec86-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAR-6309A_6310A_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAR-6309A_6310A_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : fd62c5b430277ea814092059d1ae8dceae3ee7c54ed4bf449f937148b99c15f6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-30-pdp-60-spec86-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
