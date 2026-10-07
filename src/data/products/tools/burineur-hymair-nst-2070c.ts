import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-hymair-nst-2070c",
	"slug": "burineur-hymair-nst-2070c",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Hymair NST-2070C",
	"brand": "Hymair",
	"model": "NST-2070C",
	"mpn": "NST-2070C",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-hymair-nst-2070c.webp",
		"alt": "Repères techniques : Hymair NST-2070C",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=RUpfAKgFCVcq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-2070c",
		"label": "Référence NST-2070C",
		"distinguishingAttributes": {
			"reference": "NST-2070C",
			"Masse publiée (kg/lb)": "1.43/3.15",
			"Longueur × hauteur": "165x165 mm"
		}
	},
	"editorial": {
		"overview": "Hymair NST-2070C. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée (kg/lb) : 1.43/3.15. Longueur × hauteur : 165x165 mm.",
		"verifiedFacts": [
			"Masse publiée (kg/lb) : 1.43/3.15.",
			"Longueur × hauteur : 165x165 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.43/3.15",
			"evidenceIds": [
				"october2-tools-steed-1-p4"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "165x165 mm",
			"evidenceIds": [
				"october2-tools-steed-1-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-1-p4"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "5 cfm",
			"evidenceIds": [
				"october2-tools-steed-1-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-1-p4",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=RUpfAKgFCVcq&dp=GvUApKfKKUAU#page=4",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Composite Body, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 47d13da4c5b0263c82d7e669236b74a7dd1e71b7669074c79e9f5cb13b499b9b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-1-p4"
		],
		"workingPressureBar": [
			"october2-tools-steed-1-p4"
		],
		"demandExplanation": [
			"october2-tools-steed-1-p4"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
