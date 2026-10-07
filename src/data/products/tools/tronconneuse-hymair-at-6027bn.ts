import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-hymair-at-6027bn",
	"slug": "tronconneuse-hymair-at-6027bn",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Hymair AT-6027BN",
	"brand": "Hymair",
	"model": "AT-6027BN",
	"mpn": "AT-6027BN",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-hymair-at-6027bn.webp",
		"alt": "Repères techniques : Hymair AT-6027BN",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-6027bn",
		"label": "Référence AT-6027BN",
		"distinguishingAttributes": {
			"reference": "AT-6027BN",
			"Vitesse à vide": "20,000 rpm",
			"Masse publiée (kg/lb)": "0.78/1.70"
		}
	},
	"editorial": {
		"overview": "Hymair AT-6027BN. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 20,000 rpm. Masse publiée (kg/lb) : 0.78/1.70.",
		"verifiedFacts": [
			"Vitesse à vide : 20,000 rpm.",
			"Masse publiée (kg/lb) : 0.78/1.70.",
			"Longueur × hauteur : 185x80 mm."
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
				"october2-tools-steed-2-p18"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.78/1.70",
			"evidenceIds": [
				"october2-tools-steed-2-p18"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "185x80 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p18"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p18"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "5 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p18",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=18",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p18"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p18"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p18"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
