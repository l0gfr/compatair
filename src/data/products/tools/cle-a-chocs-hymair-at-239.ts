import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hymair-at-239",
	"slug": "cle-a-chocs-hymair-at-239",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Hymair AT-239",
	"brand": "Hymair",
	"model": "AT-239",
	"mpn": "AT-239",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hymair-at-239.webp",
		"alt": "Repères techniques : Hymair AT-239",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-239",
		"label": "Référence AT-239",
		"distinguishingAttributes": {
			"reference": "AT-239",
			"Vitesse à vide": "7,000 rpm",
			"Masse publiée (kg/lb)": "2.79/6.15"
		}
	},
	"editorial": {
		"overview": "Hymair AT-239. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 7,000 rpm. Masse publiée (kg/lb) : 2.79/6.15.",
		"verifiedFacts": [
			"Vitesse à vide : 7,000 rpm.",
			"Masse publiée (kg/lb) : 2.79/6.15.",
			"Longueur × hauteur : 195x193 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "7,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p27"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "2.79/6.15",
			"evidenceIds": [
				"october2-tools-steed-2-p27"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "195x193 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p27"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p27"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "8 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p27",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=27",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p27"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p27"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p27"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
