import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-hymair-nst-4032c",
	"slug": "perceuse-hymair-nst-4032c",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Hymair NST-4032C",
	"brand": "Hymair",
	"model": "NST-4032C",
	"mpn": "NST-4032C",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-hymair-nst-4032c.webp",
		"alt": "Repères techniques : Hymair NST-4032C",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=RUpfAKgFCVcq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-4032c",
		"label": "Référence NST-4032C",
		"distinguishingAttributes": {
			"reference": "NST-4032C",
			"Vitesse à vide": "2,200 rpm",
			"Masse publiée (kg/lb)": "1.05/2.31"
		}
	},
	"editorial": {
		"overview": "Hymair NST-4032C. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 2,200 rpm. Masse publiée (kg/lb) : 1.05/2.31.",
		"verifiedFacts": [
			"Vitesse à vide : 2,200 rpm.",
			"Masse publiée (kg/lb) : 1.05/2.31.",
			"Longueur × hauteur : 207x150 mm."
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
				"october2-tools-steed-1-p6"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.05/2.31",
			"evidenceIds": [
				"october2-tools-steed-1-p6"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "207x150 mm",
			"evidenceIds": [
				"october2-tools-steed-1-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-1-p6"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-1-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-1-p6",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=RUpfAKgFCVcq&dp=GvUApKfKKUAU#page=6",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Composite Body, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 47d13da4c5b0263c82d7e669236b74a7dd1e71b7669074c79e9f5cb13b499b9b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-1-p6"
		],
		"workingPressureBar": [
			"october2-tools-steed-1-p6"
		],
		"demandExplanation": [
			"october2-tools-steed-1-p6"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
