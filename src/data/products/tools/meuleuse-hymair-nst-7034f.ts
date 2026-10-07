import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hymair-nst-7034f",
	"slug": "meuleuse-hymair-nst-7034f",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Hymair NST-7034F",
	"brand": "Hymair",
	"model": "NST-7034F",
	"mpn": "NST-7034F",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hymair-nst-7034f.webp",
		"alt": "Repères techniques : Hymair NST-7034F",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-7034f",
		"label": "Référence NST-7034F",
		"distinguishingAttributes": {
			"reference": "NST-7034F",
			"Vitesse à vide": "20,000 rpm",
			"Masse publiée (kg/lb)": "0.53/1.20"
		}
	},
	"editorial": {
		"overview": "Hymair NST-7034F. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 20,000 rpm. Masse publiée (kg/lb) : 0.53/1.20.",
		"verifiedFacts": [
			"Vitesse à vide : 20,000 rpm.",
			"Masse publiée (kg/lb) : 0.53/1.20.",
			"Longueur × hauteur : 180x106 mm."
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
				"october2-tools-steed-2-p7"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.53/1.20",
			"evidenceIds": [
				"october2-tools-steed-2-p7"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "180x106 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p7"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p7"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p7",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=7",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p7"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p7"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p7"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
