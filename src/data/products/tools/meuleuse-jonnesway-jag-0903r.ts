import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-jonnesway-jag-0903r",
	"slug": "meuleuse-jonnesway-jag-0903r",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Jonnesway JAG-0903R",
	"brand": "Jonnesway",
	"model": "JAG-0903R",
	"mpn": "JAG-0903R",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-jonnesway-jag-0903r.webp",
		"alt": "Repères techniques : Jonnesway JAG-0903R",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAG-0903series_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jag-0903r",
		"label": "Référence JAG-0903R",
		"distinguishingAttributes": {
			"reference": "JAG-0903R",
			"Free Speed": "25,000RPM",
			"Overall Length": "152MM (6\")"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAG-0903R. JAG-0903RM utilise une pince 6 mm. JAG-0903R est la version 1/4 pouce ; ces deux dimensions ne sont pas assimilées malgré une géométrie proche. Pince de serrage : 1/4 pouce.",
		"verifiedFacts": [
			"Free Speed : 25,000RPM.",
			"Overall Length : 152MM (6\").",
			"Weight : 0.35KGS (0.77LBS).",
			"Air Inlet Size : 1/4\".",
			"Air Hose (I.D.) : 3/8\".",
			"Pince de serrage : 1/4 pouce."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Free Speed",
			"value": "25,000RPM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-60-spec38-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "152MM (6\")",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-60-spec38-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.35KGS (0.77LBS)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-60-spec38-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-60-spec38-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-60-spec38-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90 PSI",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-60-spec38-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "113 L/min",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-60-spec38-p1"
			]
		},
		{
			"label": "Pince de serrage",
			"value": "1/4 pouce",
			"evidenceIds": [
				"meuleuse-jonnesway-jag-0903r-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-27-pdp-60-spec38-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAG-0903series_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAG-0903series_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8fa60628046148f6a51676022eb4ea9a31139a2ac76fb539f631648ddeb90692. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "meuleuse-jonnesway-jag-0903r-reserved-20261101-1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAG-0903series_666.jpg",
			"sourceLabel": "Jonnesway : revue factuelle du 1 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 8fa60628046148f6a51676022eb4ea9a31139a2ac76fb539f631648ddeb90692. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-27-pdp-60-spec38-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-27-pdp-60-spec38-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-27-pdp-60-spec38-p1"
		],
		"editorial": [
			"meuleuse-jonnesway-jag-0903r-reserved-20261101-1"
		],
		"specifications": [
			"meuleuse-jonnesway-jag-0903r-reserved-20261101-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
