import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-hymair-at-2030rbsg",
	"slug": "burineur-hymair-at-2030rbsg",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Hymair AT-2030RBSG",
	"brand": "Hymair",
	"model": "AT-2030RBSG",
	"mpn": "AT-2030RBSG",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-hymair-at-2030rbsg.webp",
		"alt": "Repères techniques : Hymair AT-2030RBSG",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-2030rbsg",
		"label": "Référence AT-2030RBSG",
		"distinguishingAttributes": {
			"reference": "AT-2030RBSG",
			"Masse publiée (kg/lb)": "1.75/3.86",
			"Longueur × hauteur": "237x150 mm"
		}
	},
	"editorial": {
		"overview": "Hymair AT-2030RBSG. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée (kg/lb) : 1.75/3.86. Longueur × hauteur : 237x150 mm.",
		"verifiedFacts": [
			"Masse publiée (kg/lb) : 1.75/3.86.",
			"Longueur × hauteur : 237x150 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.75/3.86",
			"evidenceIds": [
				"october2-tools-steed-3-p5"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "237x150 mm",
			"evidenceIds": [
				"october2-tools-steed-3-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-3-p5"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6.25 cfm",
			"evidenceIds": [
				"october2-tools-steed-3-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-3-p5",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=5",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Good Level, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-3-p5"
		],
		"workingPressureBar": [
			"october2-tools-steed-3-p5"
		],
		"demandExplanation": [
			"october2-tools-steed-3-p5"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
