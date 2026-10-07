import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hymair-nst-5040c",
	"slug": "cle-a-chocs-hymair-nst-5040c",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Hymair NST-5040C",
	"brand": "Hymair",
	"model": "NST-5040C",
	"mpn": "NST-5040C",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hymair-nst-5040c.webp",
		"alt": "Repères techniques : Hymair NST-5040C",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=RUpfAKgFCVcq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-5040c",
		"label": "Référence NST-5040C",
		"distinguishingAttributes": {
			"reference": "NST-5040C",
			"Vitesse à vide": "8,000 rpm",
			"Masse publiée (kg/lb)": "2.14/4.72"
		}
	},
	"editorial": {
		"overview": "Hymair NST-5040C. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 8,000 rpm. Masse publiée (kg/lb) : 2.14/4.72.",
		"verifiedFacts": [
			"Vitesse à vide : 8,000 rpm.",
			"Masse publiée (kg/lb) : 2.14/4.72.",
			"Longueur × hauteur : 195x185 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-1-p2"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "2.14/4.72",
			"evidenceIds": [
				"october2-tools-steed-1-p2"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "195x185 mm",
			"evidenceIds": [
				"october2-tools-steed-1-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-1-p2"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-1-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-1-p2",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=RUpfAKgFCVcq&dp=GvUApKfKKUAU#page=2",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Composite Body, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 47d13da4c5b0263c82d7e669236b74a7dd1e71b7669074c79e9f5cb13b499b9b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-1-p2"
		],
		"workingPressureBar": [
			"october2-tools-steed-1-p2"
		],
		"demandExplanation": [
			"october2-tools-steed-1-p2"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
