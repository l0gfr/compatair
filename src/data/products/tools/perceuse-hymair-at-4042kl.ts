import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-hymair-at-4042kl",
	"slug": "perceuse-hymair-at-4042kl",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Hymair AT-4042KL",
	"brand": "Hymair",
	"model": "AT-4042KL",
	"mpn": "AT-4042KL",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-hymair-at-4042kl.webp",
		"alt": "Repères techniques : Hymair AT-4042KL",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-4042kl",
		"label": "Référence AT-4042KL",
		"distinguishingAttributes": {
			"reference": "AT-4042KL",
			"Vitesse à vide": "700 rpm",
			"Masse publiée (kg/lb)": "1.66/3.66"
		}
	},
	"editorial": {
		"overview": "Hymair AT-4042KL. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 700 rpm. Masse publiée (kg/lb) : 1.66/3.66.",
		"verifiedFacts": [
			"Vitesse à vide : 700 rpm.",
			"Masse publiée (kg/lb) : 1.66/3.66.",
			"Longueur × hauteur : 213x155 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "700 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p20"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.66/3.66",
			"evidenceIds": [
				"october2-tools-steed-2-p20"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "213x155 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p20"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p20"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p20"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p20",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=20",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p20"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p20"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p20"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
