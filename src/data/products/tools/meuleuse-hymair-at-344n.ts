import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hymair-at-344n",
	"slug": "meuleuse-hymair-at-344n",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Hymair AT-344N",
	"brand": "Hymair",
	"model": "AT-344N",
	"mpn": "AT-344N",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hymair-at-344n.webp",
		"alt": "Repères techniques : Hymair AT-344N",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-344n",
		"label": "Référence AT-344N",
		"distinguishingAttributes": {
			"reference": "AT-344N",
			"Vitesse à vide": "25,000 rpm",
			"Masse publiée (kg/lb)": "0.32/0.71"
		}
	},
	"editorial": {
		"overview": "Hymair AT-344N. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 25,000 rpm. Masse publiée (kg/lb) : 0.32/0.71.",
		"verifiedFacts": [
			"Vitesse à vide : 25,000 rpm.",
			"Masse publiée (kg/lb) : 0.32/0.71.",
			"Longueur × hauteur : 122x67 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "25,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p17"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.32/0.71",
			"evidenceIds": [
				"october2-tools-steed-2-p17"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "122x67 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p17"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p17"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p17",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=17",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p17"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p17"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p17"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
