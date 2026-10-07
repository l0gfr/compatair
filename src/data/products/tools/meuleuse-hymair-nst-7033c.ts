import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hymair-nst-7033c",
	"slug": "meuleuse-hymair-nst-7033c",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Hymair NST-7033C",
	"brand": "Hymair",
	"model": "NST-7033C",
	"mpn": "NST-7033C",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hymair-nst-7033c.webp",
		"alt": "Repères techniques : Hymair NST-7033C",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=RUpfAKgFCVcq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-7033c",
		"label": "Référence NST-7033C",
		"distinguishingAttributes": {
			"reference": "NST-7033C",
			"Vitesse à vide": "22,000 rpm",
			"Masse publiée (kg/lb)": "0.59/1.30"
		}
	},
	"editorial": {
		"overview": "Hymair NST-7033C. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 22,000 rpm. Masse publiée (kg/lb) : 0.59/1.30.",
		"verifiedFacts": [
			"Vitesse à vide : 22,000 rpm.",
			"Masse publiée (kg/lb) : 0.59/1.30.",
			"Longueur × hauteur : 190x45 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "22,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-1-p3"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.59/1.30",
			"evidenceIds": [
				"october2-tools-steed-1-p3"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "190x45 mm",
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
			"value": "5 cfm",
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
