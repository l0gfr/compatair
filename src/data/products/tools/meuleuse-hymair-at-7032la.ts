import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hymair-at-7032la",
	"slug": "meuleuse-hymair-at-7032la",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Hymair AT-7032LA",
	"brand": "Hymair",
	"model": "AT-7032LA",
	"mpn": "AT-7032LA",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hymair-at-7032la.webp",
		"alt": "Repères techniques : Hymair AT-7032LA",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-7032la",
		"label": "Référence AT-7032LA",
		"distinguishingAttributes": {
			"reference": "AT-7032LA",
			"Vitesse à vide": "25,000 rpm",
			"Masse publiée (kg/lb)": "0.52/1.10"
		}
	},
	"editorial": {
		"overview": "Hymair AT-7032LA. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 25,000 rpm. Masse publiée (kg/lb) : 0.52/1.10.",
		"verifiedFacts": [
			"Vitesse à vide : 25,000 rpm.",
			"Masse publiée (kg/lb) : 0.52/1.10.",
			"Longueur × hauteur : 198x63 mm."
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
				"october2-tools-steed-3-p3"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.52/1.10",
			"evidenceIds": [
				"october2-tools-steed-3-p3"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "198x63 mm",
			"evidenceIds": [
				"october2-tools-steed-3-p3"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-3-p3"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-3-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-3-p3",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=3",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Good Level, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-3-p3"
		],
		"workingPressureBar": [
			"october2-tools-steed-3-p3"
		],
		"demandExplanation": [
			"october2-tools-steed-3-p3"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
