import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hymair-nst-500m",
	"slug": "cle-a-chocs-hymair-nst-500m",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Hymair NST-500M",
	"brand": "Hymair",
	"model": "NST-500M",
	"mpn": "NST-500M",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hymair-nst-500m.webp",
		"alt": "Repères techniques : Hymair NST-500M",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-500m",
		"label": "Référence NST-500M",
		"distinguishingAttributes": {
			"reference": "NST-500M",
			"Vitesse à vide": "10,000 rpm",
			"Masse publiée (kg/lb)": "1.61/3.56"
		}
	},
	"editorial": {
		"overview": "Hymair NST-500M. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 10,000 rpm. Masse publiée (kg/lb) : 1.61/3.56.",
		"verifiedFacts": [
			"Vitesse à vide : 10,000 rpm.",
			"Masse publiée (kg/lb) : 1.61/3.56.",
			"Longueur × hauteur : 145x180 mm."
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
				"october2-tools-steed-2-p28"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.61/3.56",
			"evidenceIds": [
				"october2-tools-steed-2-p28"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "145x180 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p28"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p28"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "5.8 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p28"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p28",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=28",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 28",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p28"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p28"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p28"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
