import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-hymair-nst-6027f",
	"slug": "tronconneuse-hymair-nst-6027f",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Hymair NST-6027F",
	"brand": "Hymair",
	"model": "NST-6027F",
	"mpn": "NST-6027F",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-hymair-nst-6027f.webp",
		"alt": "Repères techniques : Hymair NST-6027F",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-6027f",
		"label": "Référence NST-6027F",
		"distinguishingAttributes": {
			"reference": "NST-6027F",
			"Vitesse à vide": "20,000 rpm",
			"Masse publiée (kg/lb)": "0.84/1.84"
		}
	},
	"editorial": {
		"overview": "Hymair NST-6027F. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 20,000 rpm. Masse publiée (kg/lb) : 0.84/1.84.",
		"verifiedFacts": [
			"Vitesse à vide : 20,000 rpm.",
			"Masse publiée (kg/lb) : 0.84/1.84.",
			"Longueur × hauteur : 208x95 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "20,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p8"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.84/1.84",
			"evidenceIds": [
				"october2-tools-steed-2-p8"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "208x95 mm",
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
			"value": "5 cfm",
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
