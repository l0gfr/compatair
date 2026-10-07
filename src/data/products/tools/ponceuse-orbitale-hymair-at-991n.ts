import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-hymair-at-991n",
	"slug": "ponceuse-orbitale-hymair-at-991n",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Hymair AT-991N",
	"brand": "Hymair",
	"model": "AT-991N",
	"mpn": "AT-991N",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-hymair-at-991n.webp",
		"alt": "Repères techniques : Hymair AT-991N",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-991n",
		"label": "Référence AT-991N",
		"distinguishingAttributes": {
			"reference": "AT-991N",
			"Vitesse à vide": "10,000 rpm",
			"Masse publiée (kg/lb)": "1.11/2.45"
		}
	},
	"editorial": {
		"overview": "Hymair AT-991N. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 10,000 rpm. Masse publiée (kg/lb) : 1.11/2.45.",
		"verifiedFacts": [
			"Vitesse à vide : 10,000 rpm.",
			"Masse publiée (kg/lb) : 1.11/2.45.",
			"Longueur × hauteur : 219x134 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "10,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p31"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.11/2.45",
			"evidenceIds": [
				"october2-tools-steed-2-p31"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "219x134 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p31"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p31"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p31"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p31",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=31",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p31"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p31"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p31"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
