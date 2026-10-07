import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-hymair-nst-6027c",
	"slug": "tronconneuse-hymair-nst-6027c",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Hymair NST-6027C",
	"brand": "Hymair",
	"model": "NST-6027C",
	"mpn": "NST-6027C",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-hymair-nst-6027c.webp",
		"alt": "Repères techniques : Hymair NST-6027C",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=RUpfAKgFCVcq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-6027c",
		"label": "Référence NST-6027C",
		"distinguishingAttributes": {
			"reference": "NST-6027C",
			"Vitesse à vide": "20,000 rpm",
			"Masse publiée (kg/lb)": "0.81/1.78"
		}
	},
	"editorial": {
		"overview": "Hymair NST-6027C. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 20,000 rpm. Masse publiée (kg/lb) : 0.81/1.78.",
		"verifiedFacts": [
			"Vitesse à vide : 20,000 rpm.",
			"Masse publiée (kg/lb) : 0.81/1.78.",
			"Longueur × hauteur : 210x90 mm."
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
				"october2-tools-steed-1-p6"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.81/1.78",
			"evidenceIds": [
				"october2-tools-steed-1-p6"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "210x90 mm",
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
			"value": "6.75 cfm",
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
