import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-hymair-nst-7037df",
	"slug": "ponceuse-rotative-hymair-nst-7037df",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Hymair NST-7037DF",
	"brand": "Hymair",
	"model": "NST-7037DF",
	"mpn": "NST-7037DF",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-hymair-nst-7037df.webp",
		"alt": "Repères techniques : Hymair NST-7037DF",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-nst-7037df",
		"label": "Référence NST-7037DF",
		"distinguishingAttributes": {
			"reference": "NST-7037DF",
			"Vitesse à vide": "15,000 rpm",
			"Masse publiée (kg/lb)": "0.70/1.54"
		}
	},
	"editorial": {
		"overview": "Hymair NST-7037DF. La NST-7037DF est la ponceuse à plateau caoutchouc 2 pouces. La version NST-7037BF est décrite avec plateau autoagrippant ; une même vitesse et une même moyenne de consommation ne rendent pas leurs fixations interchangeables. La consommation moyenne 4 CFM reste hors du calcul de demande maximale.",
		"verifiedFacts": [
			"Plateau : 2 pouces (50 mm), caoutchouc.",
			"Vitesse à vide : 15 000 tr/min.",
			"Dimensions : 185 × 95 mm.",
			"Masse : 0,70 kg.",
			"Consommation moyenne publiée : 4 CFM."
		],
		"limitations": [
			"Consommation moyenne publiée conservée dans les spécifications ; aucun débit maximal ni volume par action déduit.",
			"Catalogue constructeur identifié ; configuration et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "2 pouces (50 mm), caoutchouc",
			"evidenceIds": [
				"ponceuse-rotative-hymair-nst-7037df-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"ponceuse-rotative-hymair-nst-7037df-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions",
			"value": "185 × 95 mm",
			"evidenceIds": [
				"ponceuse-rotative-hymair-nst-7037df-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,70 kg",
			"evidenceIds": [
				"ponceuse-rotative-hymair-nst-7037df-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "4 CFM",
			"evidenceIds": [
				"ponceuse-rotative-hymair-nst-7037df-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p10",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=10",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-rotative-hymair-nst-7037df-reserved-20261103-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=10",
			"sourceLabel": "Hymair : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. La NST-7037DF est la ponceuse à plateau caoutchouc 2 pouces. La version NST-7037BF est décrite avec plateau autoagrippant ; une même vitesse et une même moyenne de consommation ne rendent pas leurs fixations interchangeables. La consommation moyenne 4 CFM reste hors du calcul de demande maximale."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p10"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p10"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p10"
		],
		"editorial": [
			"ponceuse-rotative-hymair-nst-7037df-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-rotative-hymair-nst-7037df-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
