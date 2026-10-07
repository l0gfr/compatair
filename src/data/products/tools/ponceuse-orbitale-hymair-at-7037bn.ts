import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-hymair-at-7037bn",
	"slug": "ponceuse-orbitale-hymair-at-7037bn",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Hymair AT-7037BN",
	"brand": "Hymair",
	"model": "AT-7037BN",
	"mpn": "AT-7037BN",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-hymair-at-7037bn.webp",
		"alt": "Repères techniques : Hymair AT-7037BN",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-7037bn",
		"label": "Référence AT-7037BN",
		"distinguishingAttributes": {
			"reference": "AT-7037BN",
			"Vitesse à vide": "15,000 rpm",
			"Masse publiée (kg/lb)": "0.63/1.40"
		}
	},
	"editorial": {
		"overview": "Hymair AT-7037BN. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 15,000 rpm. Masse publiée (kg/lb) : 0.63/1.40.",
		"verifiedFacts": [
			"Vitesse à vide : 15,000 rpm.",
			"Masse publiée (kg/lb) : 0.63/1.40.",
			"Longueur × hauteur : 163x92 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "15,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p19"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.63/1.40",
			"evidenceIds": [
				"october2-tools-steed-2-p19"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "163x92 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p19"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p19"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p19",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=19",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p19"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p19"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p19"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
