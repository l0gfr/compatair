import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-jonnesway-jag-0913f",
	"slug": "meuleuse-jonnesway-jag-0913f",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Jonnesway JAG-0913F",
	"brand": "Jonnesway",
	"model": "JAG-0913F",
	"mpn": "JAG-0913F",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-jonnesway-jag-0913f-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Jonnesway JAG-0913F",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAG-0913series_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "jonnesway-jag-0913f",
		"label": "Référence JAG-0913F",
		"distinguishingAttributes": {
			"reference": "JAG-0913F",
			"Free Speed": "18,000RPM",
			"Overall Length": "124MM (4.9\")"
		}
	},
	"editorial": {
		"overview": "La JAG-0913F est la mini-meuleuse coudée à pince1/4 et échappement avant,124 mm et0,4 kg. La FM emploie une pince6 mm ; la R évacue à l’arrière et mesure 155 mm. F/FM/R ne sont donc pas des montages interchangeables.",
		"verifiedFacts": [
			"Free Speed : 18,000RPM.",
			"Overall Length : 124MM (4.9\").",
			"Weight : 0.4KGS (0.88LBS).",
			"Air Inlet Size : 1/4\".",
			"Air Hose (I.D.) : 3/8\".",
			"Pince de cette référence : 1/4 pouce ; la FM utilise6 mm.",
			"Échappement : Avant.",
			"Puissance publiée : 0,3 hp."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Free Speed",
			"value": "18,000RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-62-spec40-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "124MM (4.9\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-62-spec40-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.4KGS (0.88LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-62-spec40-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-62-spec40-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-62-spec40-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-62-spec40-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "85 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-62-spec40-p1"
			]
		},
		{
			"label": "Pince de cette référence",
			"value": "1/4 pouce ; la FM utilise6 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-jonnesway-jag-0913f:0"
			]
		},
		{
			"label": "Échappement",
			"value": "Avant",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-jonnesway-jag-0913f:0"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,3 hp",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-jonnesway-jag-0913f:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-27-pdp-62-spec40-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAG-0913series_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAG-0913series_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c67907b08f1f1294dffde123b72c150af7f1a376f8aaeb2507a51e0a9163b8fe. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:meuleuse-jonnesway-jag-0913f:0",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAG-0913series_666.jpg",
			"sourceLabel": "Jonnesway, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La JAG-0913F est la mini-meuleuse coudée à pince1/4 et échappement avant,124 mm et0,4 kg. La FM emploie une pince6 mm ; la R évacue à l’arrière et mesure 155 mm. F/FM/R ne sont donc pas des montages interchangeables. GET complet SHA-256 c67907b08f1f1294dffde123b72c150af7f1a376f8aaeb2507a51e0a9163b8fe. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-27-pdp-62-spec40-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-27-pdp-62-spec40-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-27-pdp-62-spec40-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
