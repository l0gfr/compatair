import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-hymair-at-4039b",
	"slug": "perceuse-hymair-at-4039b",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Hymair AT-4039B",
	"brand": "Hymair",
	"model": "AT-4039B",
	"mpn": "AT-4039B",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-hymair-at-4039b.webp",
		"alt": "Repères techniques : Hymair AT-4039B",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-4039b",
		"label": "Référence AT-4039B",
		"distinguishingAttributes": {
			"reference": "AT-4039B",
			"Vitesse à vide": "20,000 rpm",
			"Masse publiée (kg/lb)": "0.70/1.50"
		}
	},
	"editorial": {
		"overview": "Hymair AT-4039B. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 20,000 rpm. Masse publiée (kg/lb) : 0.70/1.50.",
		"verifiedFacts": [
			"Vitesse à vide : 20,000 rpm.",
			"Masse publiée (kg/lb) : 0.70/1.50.",
			"Longueur × hauteur : 190x68 mm."
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
				"october2-tools-steed-3-p7"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.70/1.50",
			"evidenceIds": [
				"october2-tools-steed-3-p7"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "190x68 mm",
			"evidenceIds": [
				"october2-tools-steed-3-p7"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-3-p7"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "5 cfm",
			"evidenceIds": [
				"october2-tools-steed-3-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-3-p7",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=7",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Good Level, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-3-p7"
		],
		"workingPressureBar": [
			"october2-tools-steed-3-p7"
		],
		"demandExplanation": [
			"october2-tools-steed-3-p7"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
