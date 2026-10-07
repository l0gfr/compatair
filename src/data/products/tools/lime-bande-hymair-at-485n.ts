import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-bande-hymair-at-485n",
	"slug": "lime-bande-hymair-at-485n",
	"categoryId": "lime-bande",
	"category": "lime-bande",
	"label": "Hymair AT-485N",
	"brand": "Hymair",
	"model": "AT-485N",
	"mpn": "AT-485N",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-bande-hymair-at-485n.webp",
		"alt": "Repères techniques : Hymair AT-485N",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-485n",
		"label": "Référence AT-485N",
		"distinguishingAttributes": {
			"reference": "AT-485N",
			"Vitesse à vide": "18,000 rpm",
			"Masse publiée (kg/lb)": "1.10/2.42"
		}
	},
	"editorial": {
		"overview": "Hymair AT-485N. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 18,000 rpm. Masse publiée (kg/lb) : 1.10/2.42.",
		"verifiedFacts": [
			"Vitesse à vide : 18,000 rpm.",
			"Masse publiée (kg/lb) : 1.10/2.42.",
			"Longueur × hauteur : 350x90 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "18,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-3-p17"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.10/2.42",
			"evidenceIds": [
				"october2-tools-steed-3-p17"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "350x90 mm",
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
			"value": "7 cfm",
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
