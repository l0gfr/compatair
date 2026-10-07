import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-jonnesway-jai-1024",
	"slug": "cle-a-chocs-jonnesway-jai-1024",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Jonnesway JAI-1024",
	"brand": "Jonnesway",
	"model": "JAI-1024",
	"mpn": "JAI-1024",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-jonnesway-jai-1024.webp",
		"alt": "Repères techniques : Jonnesway JAI-1024",
		"sourceUrl": "https://www.jonnesway.com/pImages/JAI-1024_666_2.jpg",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jonnesway-jai-1024",
		"label": "Référence JAI-1024",
		"distinguishingAttributes": {
			"reference": "JAI-1024",
			"Square Drive": "1/2\"",
			"Working Torque": "380Ft-Ib 510NM"
		}
	},
	"editorial": {
		"overview": "Jonnesway JAI-1024. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Square Drive : 1/2\". Working Torque : 380Ft-Ib 510NM.",
		"verifiedFacts": [
			"Square Drive : 1/2\".",
			"Working Torque : 380Ft-Ib 510NM.",
			"Max Torque : 420Ft-Ib 570NM.",
			"Free Speed : 10,000гpm.",
			"Std. Bolt Size : 5/8\" M16.",
			"Overall Length : 3.9\" 99mm.",
			"Weight : 3.1lbs 1.4kgs.",
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
				"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
			]
		},
		{
			"label": "Working Torque",
			"value": "380Ft-Ib 510NM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "420Ft-Ib 570NM",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "10,000гpm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
			]
		},
		{
			"label": "Std. Bolt Size",
			"value": "5/8\" M16",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "3.9\" 99mm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
			]
		},
		{
			"label": "Weight",
			"value": "3.1lbs 1.4kgs",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
			]
		},
		{
			"label": "Air Inlet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
			]
		},
		{
			"label": "Air Hose (I.D.)",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90psi",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "7 cfm",
			"evidenceIds": [
				"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-jonnes-cat-29-pdp-50-spec57-p1",
			"sourceUrl": "https://www.jonnesway.com/pImages/JAI-1024_666_2.jpg",
			"sourceLabel": "Jonnesway, tableau technique fabricant JAI-1024_666_2.jpg",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : de161c7bd4eb0f154a0bedeb881ff8788291baa562397920059324f8c602db49. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
		],
		"workingPressureBar": [
			"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
		],
		"demandExplanation": [
			"october2-tools-jonnes-cat-29-pdp-50-spec57-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
