import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-jonnesway-jar-1113",
	"slug": "cle-a-cliquet-jonnesway-jar-1113",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Jonnesway JAR-1113",
	"brand": "Jonnesway",
	"model": "JAR-1113",
	"mpn": "JAR-1113",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-jonnesway-jar-1113.webp",
		"alt": "Repères techniques : Jonnesway JAR-1113",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAR-1113_1114_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jar-1113",
		"label": "Référence JAR-1113",
		"distinguishingAttributes": {
			"reference": "JAR-1113",
			"Square Drive": "3/8\"",
			"Max Torque": "108NM (80FT-LBS)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAR-1113. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Square Drive : 3/8\". Max Torque : 108NM (80FT-LBS).",
		"verifiedFacts": [
			"Square Drive : 3/8\".",
			"Max Torque : 108NM (80FT-LBS).",
			"Free Speed : 280RPM.",
			"Std. Bolt Size : M10 (3/8\").",
			"Overall Length : 260MM (10.23\").",
			"Weight : 1.3KGS (2.9LBS).",
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
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "108NM (80FT-LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "280RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
			]
		},
		{
			"label": "Std. Bolt Size",
			"value": "M10 (3/8\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "260MM (10.23\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.3KGS (2.9LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "140 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-30-pdp-57-spec83-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAR-1113_1114_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAR-1113_1114_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 44142c34249e10041323c3174f2271da1288353ca41a06944d9e170d9ad796f9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-30-pdp-57-spec83-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
