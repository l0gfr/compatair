import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hymair-at-276",
	"slug": "cle-a-chocs-hymair-at-276",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Hymair AT-276",
	"brand": "Hymair",
	"model": "AT-276",
	"mpn": "AT-276",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hymair-at-276.webp",
		"alt": "Repères techniques : Hymair AT-276",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-276",
		"label": "Référence AT-276",
		"distinguishingAttributes": {
			"reference": "AT-276",
			"Vitesse à vide": "6,000 rpm",
			"Masse publiée (kg/lb)": "5.00/11.02"
		}
	},
	"editorial": {
		"overview": "Hymair AT-276. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 6,000 rpm. Masse publiée (kg/lb) : 5.00/11.02.",
		"verifiedFacts": [
			"Vitesse à vide : 6,000 rpm.",
			"Masse publiée (kg/lb) : 5.00/11.02.",
			"Longueur × hauteur : 235x230 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "6,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p29"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "5.00/11.02",
			"evidenceIds": [
				"october2-tools-steed-2-p29"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "235x230 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p29"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
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
