import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hymair-at-296",
	"slug": "cle-a-chocs-hymair-at-296",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Hymair AT-296",
	"brand": "Hymair",
	"model": "AT-296",
	"mpn": "AT-296",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hymair-at-296.webp",
		"alt": "Repères techniques : Hymair AT-296",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-296",
		"label": "Référence AT-296",
		"distinguishingAttributes": {
			"reference": "AT-296",
			"Vitesse à vide": "4,300 rpm",
			"Masse publiée (kg/lb)": "7.30/16.09"
		}
	},
	"editorial": {
		"overview": "Hymair AT-296. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 4,300 rpm. Masse publiée (kg/lb) : 7.30/16.09.",
		"verifiedFacts": [
			"Vitesse à vide : 4,300 rpm.",
			"Masse publiée (kg/lb) : 7.30/16.09.",
			"Longueur × hauteur : 250x320 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4,300 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p29"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "7.30/16.09",
			"evidenceIds": [
				"october2-tools-steed-2-p29"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "250x320 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p29"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure non établie.",
			"evidenceIds": [
				"october2-tools-steed-2-p29"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "9.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p29"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p29",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=29",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p29"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p29"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p29"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
