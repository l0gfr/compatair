import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-hymair-at-6020",
	"slug": "riveteuse-hymair-at-6020",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Hymair AT-6020",
	"brand": "Hymair",
	"model": "AT-6020",
	"mpn": "AT-6020",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-hymair-at-6020.webp",
		"alt": "Repères techniques : Hymair AT-6020",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-6020",
		"label": "Référence AT-6020",
		"distinguishingAttributes": {
			"reference": "AT-6020",
			"Masse publiée (kg/lb)": "1.60/3.52",
			"Longueur × hauteur": "295x118 mm"
		}
	},
	"editorial": {
		"overview": "Hymair AT-6020. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée (kg/lb) : 1.60/3.52. Longueur × hauteur : 295x118 mm.",
		"verifiedFacts": [
			"Masse publiée (kg/lb) : 1.60/3.52.",
			"Longueur × hauteur : 295x118 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.60/3.52",
			"evidenceIds": [
				"october2-tools-steed-2-p35"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "295x118 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p35"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure non établie.",
			"evidenceIds": [
				"october2-tools-steed-2-p35"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "0.03 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p35"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p35",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=35",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p35"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p35"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p35"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
