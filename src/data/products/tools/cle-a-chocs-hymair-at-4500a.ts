import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hymair-at-4500a",
	"slug": "cle-a-chocs-hymair-at-4500a",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Hymair AT-4500A",
	"brand": "Hymair",
	"model": "AT-4500A",
	"mpn": "AT-4500A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hymair-at-4500a.webp",
		"alt": "Repères techniques : Hymair AT-4500A",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-4500a",
		"label": "Référence AT-4500A",
		"distinguishingAttributes": {
			"reference": "AT-4500A",
			"Vitesse à vide": "3,900 rpm",
			"Masse publiée (kg/lb)": "12.70/27.94"
		}
	},
	"editorial": {
		"overview": "Hymair AT-4500A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 3,900 rpm. Masse publiée (kg/lb) : 12.70/27.94.",
		"verifiedFacts": [
			"Vitesse à vide : 3,900 rpm.",
			"Masse publiée (kg/lb) : 12.70/27.94.",
			"Longueur × hauteur : 350x185 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "3,900 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p30"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "12.70/27.94",
			"evidenceIds": [
				"october2-tools-steed-2-p30"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "350x185 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p30"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure non établie.",
			"evidenceIds": [
				"october2-tools-steed-2-p30"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "40 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p30"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p30",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=30",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p30"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p30"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p30"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
