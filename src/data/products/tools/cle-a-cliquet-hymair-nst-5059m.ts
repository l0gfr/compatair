import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-hymair-nst-5059m",
	"slug": "cle-a-cliquet-hymair-nst-5059m",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Hymair NST-5059M",
	"brand": "Hymair",
	"model": "NST-5059M",
	"mpn": "NST-5059M",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-hymair-nst-5059m.webp",
		"alt": "Repères techniques : Hymair NST-5059M",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-5059m",
		"label": "Référence NST-5059M",
		"distinguishingAttributes": {
			"reference": "NST-5059M",
			"Vitesse à vide": "180 rpm",
			"Masse publiée (kg/lb)": "1.28/2.81"
		}
	},
	"editorial": {
		"overview": "Hymair NST-5059M. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 180 rpm. Masse publiée (kg/lb) : 1.28/2.81.",
		"verifiedFacts": [
			"Vitesse à vide : 180 rpm.",
			"Masse publiée (kg/lb) : 1.28/2.81.",
			"Longueur × hauteur : 283x58 mm."
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
				"october2-tools-steed-2-p2"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.28/2.81",
			"evidenceIds": [
				"october2-tools-steed-2-p2"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "283x58 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p2"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p2",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=2",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p2"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p2"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p2"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
