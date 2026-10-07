import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-hymair-nst-380f",
	"slug": "ponceuse-orbitale-hymair-nst-380f",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Hymair NST-380F",
	"brand": "Hymair",
	"model": "NST-380F",
	"mpn": "NST-380F",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-hymair-nst-380f.webp",
		"alt": "Repères techniques : Hymair NST-380F",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-380f",
		"label": "Référence NST-380F",
		"distinguishingAttributes": {
			"reference": "NST-380F",
			"Vitesse à vide": "10,000 rpm",
			"Masse publiée (kg/lb)": "1.83/4.03"
		}
	},
	"editorial": {
		"overview": "Hymair NST-380F. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 10,000 rpm. Masse publiée (kg/lb) : 1.83/4.03.",
		"verifiedFacts": [
			"Vitesse à vide : 10,000 rpm.",
			"Masse publiée (kg/lb) : 1.83/4.03.",
			"Longueur × hauteur : 250x143 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "10,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p8"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.83/4.03",
			"evidenceIds": [
				"october2-tools-steed-2-p8"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "250x143 mm",
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
			"value": "5.25 cfm",
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
