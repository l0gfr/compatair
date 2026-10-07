import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-hymair-nst-7037df",
	"slug": "ponceuse-rotative-hymair-nst-7037df",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Hymair NST-7037DF",
	"brand": "Hymair",
	"model": "NST-7037DF",
	"mpn": "NST-7037DF",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-hymair-nst-7037df.webp",
		"alt": "Repères techniques : Hymair NST-7037DF",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-7037df",
		"label": "Référence NST-7037DF",
		"distinguishingAttributes": {
			"reference": "NST-7037DF",
			"Vitesse à vide": "15,000 rpm",
			"Masse publiée (kg/lb)": "0.70/1.54"
		}
	},
	"editorial": {
		"overview": "Hymair NST-7037DF. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 15,000 rpm. Masse publiée (kg/lb) : 0.70/1.54.",
		"verifiedFacts": [
			"Vitesse à vide : 15,000 rpm.",
			"Masse publiée (kg/lb) : 0.70/1.54.",
			"Longueur × hauteur : 185x95 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "15,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p10"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.70/1.54",
			"evidenceIds": [
				"october2-tools-steed-2-p10"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "185x95 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p10"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p10"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p10"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p10",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=10",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p10"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p10"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p10"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
