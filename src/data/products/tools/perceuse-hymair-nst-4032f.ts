import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-hymair-nst-4032f",
	"slug": "perceuse-hymair-nst-4032f",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Hymair NST-4032F",
	"brand": "Hymair",
	"model": "NST-4032F",
	"mpn": "NST-4032F",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-hymair-nst-4032f.webp",
		"alt": "Repères techniques : Hymair NST-4032F",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-4032f",
		"label": "Référence NST-4032F",
		"distinguishingAttributes": {
			"reference": "NST-4032F",
			"Vitesse à vide": "2,200 rpm",
			"Masse publiée (kg/lb)": "1.48/3.26"
		}
	},
	"editorial": {
		"overview": "Hymair NST-4032F. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 2,200 rpm. Masse publiée (kg/lb) : 1.48/3.26.",
		"verifiedFacts": [
			"Vitesse à vide : 2,200 rpm.",
			"Masse publiée (kg/lb) : 1.48/3.26.",
			"Longueur × hauteur : 185x155 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "2,200 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p8"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.48/3.26",
			"evidenceIds": [
				"october2-tools-steed-2-p8"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "185x155 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p8"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "5.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p8",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=8",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p8"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p8"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p8"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
