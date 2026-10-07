import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hymair-at-120m",
	"slug": "cle-a-chocs-hymair-at-120m",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Hymair AT-120M",
	"brand": "Hymair",
	"model": "AT-120M",
	"mpn": "AT-120M",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hymair-at-120m.webp",
		"alt": "Repères techniques : Hymair AT-120M",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=RUpfAKgFCVcq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-120m",
		"label": "Référence AT-120M",
		"distinguishingAttributes": {
			"reference": "AT-120M",
			"Vitesse à vide": "9,000 rpm",
			"Masse publiée (kg/lb)": "1.50/3.31"
		}
	},
	"editorial": {
		"overview": "Hymair AT-120M. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 9,000 rpm. Masse publiée (kg/lb) : 1.50/3.31.",
		"verifiedFacts": [
			"Vitesse à vide : 9,000 rpm.",
			"Masse publiée (kg/lb) : 1.50/3.31.",
			"Longueur × hauteur : 130x190 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "9,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-1-p2"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.50/3.31",
			"evidenceIds": [
				"october2-tools-steed-1-p2"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "130x190 mm",
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
			"value": "5.8 cfm",
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
