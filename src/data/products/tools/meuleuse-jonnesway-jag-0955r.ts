import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-jonnesway-jag-0955r",
	"slug": "meuleuse-jonnesway-jag-0955r",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Jonnesway JAG-0955R",
	"brand": "Jonnesway",
	"model": "JAG-0955R",
	"mpn": "JAG-0955R",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-jonnesway-jag-0955r.webp",
		"alt": "Repères techniques : Jonnesway JAG-0955R",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAG-0955R_0955RM_666.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jag-0955r",
		"label": "Référence JAG-0955R",
		"distinguishingAttributes": {
			"reference": "JAG-0955R",
			"Free Speed": "20,000(гpm)",
			"Overall Length": "10.2\" (260mm)"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAG-0955R. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Free Speed : 20,000(гpm). Overall Length : 10.2\" (260mm).",
		"verifiedFacts": [
			"Free Speed : 20,000(гpm).",
			"Overall Length : 10.2\" (260mm).",
			"Weight : 1.54 lbs (0.7 kgs).",
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
			"label": "Free Speed",
			"value": "20,000(гpm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-55-spec33-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "10.2\" (260mm)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-55-spec33-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.54 lbs (0.7 kgs)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-55-spec33-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-55-spec33-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-55-spec33-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90(psi)",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-55-spec33-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-27-pdp-55-spec33-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-27-pdp-55-spec33-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAG-0955R_0955RM_666.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAG-0955R_0955RM_666.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b7e1b4ad1aa79886de13529b3ea372d4dbbf3bb2de51c3d16d3ec6b670740dba. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-27-pdp-55-spec33-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-27-pdp-55-spec33-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-27-pdp-55-spec33-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
