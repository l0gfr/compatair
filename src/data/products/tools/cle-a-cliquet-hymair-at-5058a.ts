import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-hymair-at-5058a",
	"slug": "cle-a-cliquet-hymair-at-5058a",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Hymair AT-5058A",
	"brand": "Hymair",
	"model": "AT-5058A",
	"mpn": "AT-5058A",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-hymair-at-5058a.webp",
		"alt": "Repères techniques : Hymair AT-5058A",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-5058a",
		"label": "Référence AT-5058A",
		"distinguishingAttributes": {
			"reference": "AT-5058A",
			"Vitesse à vide": "180 rpm",
			"Masse publiée (kg/lb)": "1.21/2.67"
		}
	},
	"editorial": {
		"overview": "Hymair AT-5058A. La AT-5058A reçoit le carré 3/8 pouce ; la AT-5059A reçoit 1/2 pouce pour la même vitesse 180 tr/min et la même longueur 275 mm. Le tableau publie 60 ft-lb et 85 Nm, valeurs qui ne sont pas une conversion exacte ; elles restent attribuées à leurs colonnes. Aucun débit maximal n’est dérivé des 4 CFM moyens.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Couple maximal, colonne Nm : 85 Nm.",
			"Couple maximal, colonne ft-lb : 60 ft-lb.",
			"Vitesse : 180 tr/min.",
			"Longueur : 275 mm.",
			"Consommation moyenne publiée : 4 CFM."
		],
		"limitations": [
			"Consommation moyenne publiée conservée dans les spécifications ; aucun débit maximal ni volume par action déduit.",
			"Catalogue constructeur identifié ; configuration et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"cle-a-cliquet-hymair-at-5058a-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal, colonne Nm",
			"value": "85 Nm",
			"evidenceIds": [
				"cle-a-cliquet-hymair-at-5058a-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal, colonne ft-lb",
			"value": "60 ft-lb",
			"evidenceIds": [
				"cle-a-cliquet-hymair-at-5058a-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "180 tr/min",
			"evidenceIds": [
				"cle-a-cliquet-hymair-at-5058a-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "275 mm",
			"evidenceIds": [
				"cle-a-cliquet-hymair-at-5058a-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "4 CFM",
			"evidenceIds": [
				"cle-a-cliquet-hymair-at-5058a-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p16",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=16",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-cliquet-hymair-at-5058a-reserved-20261103-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=16",
			"sourceLabel": "Hymair : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. La AT-5058A reçoit le carré 3/8 pouce ; la AT-5059A reçoit 1/2 pouce pour la même vitesse 180 tr/min et la même longueur 275 mm. Le tableau publie 60 ft-lb et 85 Nm, valeurs qui ne sont pas une conversion exacte ; elles restent attribuées à leurs colonnes. Aucun débit maximal n’est dérivé des 4 CFM moyens."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p16"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p16"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p16"
		],
		"editorial": [
			"cle-a-cliquet-hymair-at-5058a-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-cliquet-hymair-at-5058a-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
