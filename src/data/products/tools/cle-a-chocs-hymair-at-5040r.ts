import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hymair-at-5040r",
	"slug": "cle-a-chocs-hymair-at-5040r",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Hymair AT-5040R",
	"brand": "Hymair",
	"model": "AT-5040R",
	"mpn": "AT-5040R",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hymair-at-5040r.webp",
		"alt": "Repères techniques : Hymair AT-5040R",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-5040r",
		"label": "Référence AT-5040R",
		"distinguishingAttributes": {
			"reference": "AT-5040R",
			"Vitesse à vide": "8,000 rpm",
			"Masse publiée (kg/lb)": "2.59/5.71"
		}
	},
	"editorial": {
		"overview": "Hymair AT-5040R. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 8,000 rpm. Masse publiée (kg/lb) : 2.59/5.71.",
		"verifiedFacts": [
			"Vitesse à vide : 8,000 rpm.",
			"Masse publiée (kg/lb) : 2.59/5.71.",
			"Longueur × hauteur : 205x185 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p15"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "2.59/5.71",
			"evidenceIds": [
				"october2-tools-steed-2-p15"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "205x185 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p15"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p15"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p15",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=15",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p15"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p15"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p15"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
