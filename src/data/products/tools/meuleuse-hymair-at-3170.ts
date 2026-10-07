import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hymair-at-3170",
	"slug": "meuleuse-hymair-at-3170",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Hymair AT-3170",
	"brand": "Hymair",
	"model": "AT-3170",
	"mpn": "AT-3170",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hymair-at-3170.webp",
		"alt": "Repères techniques : Hymair AT-3170",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-3170",
		"label": "Référence AT-3170",
		"distinguishingAttributes": {
			"reference": "AT-3170",
			"Vitesse à vide": "54,000 rpm",
			"Masse publiée (kg/lb)": "0.20/0.44"
		}
	},
	"editorial": {
		"overview": "Hymair AT-3170. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 54,000 rpm. Masse publiée (kg/lb) : 0.20/0.44.",
		"verifiedFacts": [
			"Vitesse à vide : 54,000 rpm.",
			"Masse publiée (kg/lb) : 0.20/0.44.",
			"Longueur × hauteur : 134x16 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "54,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-3-p17"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.20/0.44",
			"evidenceIds": [
				"october2-tools-steed-3-p17"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "134x16 mm",
			"evidenceIds": [
				"october2-tools-steed-3-p17"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-3-p17"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "2.25 cfm",
			"evidenceIds": [
				"october2-tools-steed-3-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-3-p17",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=17",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Good Level, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-3-p17"
		],
		"workingPressureBar": [
			"october2-tools-steed-3-p17"
		],
		"demandExplanation": [
			"october2-tools-steed-3-p17"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
