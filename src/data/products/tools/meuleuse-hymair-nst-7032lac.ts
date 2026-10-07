import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hymair-nst-7032lac",
	"slug": "meuleuse-hymair-nst-7032lac",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Hymair NST-7032LAC",
	"brand": "Hymair",
	"model": "NST-7032LAC",
	"mpn": "NST-7032LAC",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hymair-nst-7032lac.webp",
		"alt": "Repères techniques : Hymair NST-7032LAC",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=RUpfAKgFCVcq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-7032lac",
		"label": "Référence NST-7032LAC",
		"distinguishingAttributes": {
			"reference": "NST-7032LAC",
			"Vitesse à vide": "25,000 rpm",
			"Masse publiée (kg/lb)": "0.53/1.17"
		}
	},
	"editorial": {
		"overview": "Hymair NST-7032LAC. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 25,000 rpm. Masse publiée (kg/lb) : 0.53/1.17.",
		"verifiedFacts": [
			"Vitesse à vide : 25,000 rpm.",
			"Masse publiée (kg/lb) : 0.53/1.17.",
			"Longueur × hauteur : 215x40 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "25,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-1-p3"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.53/1.17",
			"evidenceIds": [
				"october2-tools-steed-1-p3"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "215x40 mm",
			"evidenceIds": [
				"october2-tools-steed-1-p3"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-1-p3"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-steed-1-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-1-p3",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=RUpfAKgFCVcq&dp=GvUApKfKKUAU#page=3",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Composite Body, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 47d13da4c5b0263c82d7e669236b74a7dd1e71b7669074c79e9f5cb13b499b9b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-1-p3"
		],
		"workingPressureBar": [
			"october2-tools-steed-1-p3"
		],
		"demandExplanation": [
			"october2-tools-steed-1-p3"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
