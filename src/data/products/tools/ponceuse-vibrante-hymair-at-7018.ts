import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-hymair-at-7018",
	"slug": "ponceuse-vibrante-hymair-at-7018",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Hymair AT-7018",
	"brand": "Hymair",
	"model": "AT-7018",
	"mpn": "AT-7018",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-hymair-at-7018.webp",
		"alt": "Repères techniques : Hymair AT-7018",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-7018",
		"label": "Référence AT-7018",
		"distinguishingAttributes": {
			"reference": "AT-7018",
			"Masse publiée (kg/lb)": "1.89/4.16",
			"Longueur × hauteur": "187x125 mm"
		}
	},
	"editorial": {
		"overview": "Hymair AT-7018. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée (kg/lb) : 1.89/4.16. Longueur × hauteur : 187x125 mm.",
		"verifiedFacts": [
			"Masse publiée (kg/lb) : 1.89/4.16.",
			"Longueur × hauteur : 187x125 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.89/4.16",
			"evidenceIds": [
				"october2-tools-steed-3-p16"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "187x125 mm",
			"evidenceIds": [
				"october2-tools-steed-3-p16"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-3-p16"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "5.75 cfm",
			"evidenceIds": [
				"october2-tools-steed-3-p16"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-3-p16",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=16",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Good Level, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-3-p16"
		],
		"workingPressureBar": [
			"october2-tools-steed-3-p16"
		],
		"demandExplanation": [
			"october2-tools-steed-3-p16"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
