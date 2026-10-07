import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-alternative-hymair-at-6070",
	"slug": "lime-alternative-hymair-at-6070",
	"categoryId": "lime-alternative",
	"category": "lime-alternative",
	"label": "Hymair AT-6070",
	"brand": "Hymair",
	"model": "AT-6070",
	"mpn": "AT-6070",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-alternative-hymair-at-6070.webp",
		"alt": "Repères techniques : Hymair AT-6070",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-6070",
		"label": "Référence AT-6070",
		"distinguishingAttributes": {
			"reference": "AT-6070",
			"Masse publiée (kg/lb)": "0.50/1.10",
			"Longueur × hauteur": "163x62 mm"
		}
	},
	"editorial": {
		"overview": "Hymair AT-6070. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée (kg/lb) : 0.50/1.10. Longueur × hauteur : 163x62 mm.",
		"verifiedFacts": [
			"Masse publiée (kg/lb) : 0.50/1.10.",
			"Longueur × hauteur : 163x62 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.50/1.10",
			"evidenceIds": [
				"october2-tools-steed-2-p38"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "163x62 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p38"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p38"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "2 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p38"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p38",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=38",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 38",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p38"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p38"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p38"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
