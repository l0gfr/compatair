import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-hymair-nst-5058f",
	"slug": "cle-a-cliquet-hymair-nst-5058f",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Hymair NST-5058F",
	"brand": "Hymair",
	"model": "NST-5058F",
	"mpn": "NST-5058F",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-hymair-nst-5058f.webp",
		"alt": "Repères techniques : Hymair NST-5058F",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-5058f",
		"label": "Référence NST-5058F",
		"distinguishingAttributes": {
			"reference": "NST-5058F",
			"Vitesse à vide": "180 rpm",
			"Masse publiée (kg/lb)": "1.21/2.67"
		}
	},
	"editorial": {
		"overview": "Hymair NST-5058F. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 180 rpm. Masse publiée (kg/lb) : 1.21/2.67.",
		"verifiedFacts": [
			"Vitesse à vide : 180 rpm.",
			"Masse publiée (kg/lb) : 1.21/2.67.",
			"Longueur × hauteur : 275x57 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "180 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p6"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.21/2.67",
			"evidenceIds": [
				"october2-tools-steed-2-p6"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "275x57 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p6"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p6",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=6",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p6"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p6"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p6"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
