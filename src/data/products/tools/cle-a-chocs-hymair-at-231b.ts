import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hymair-at-231b",
	"slug": "cle-a-chocs-hymair-at-231b",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Hymair AT-231B",
	"brand": "Hymair",
	"model": "AT-231B",
	"mpn": "AT-231B",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hymair-at-231b.webp",
		"alt": "Repères techniques : Hymair AT-231B",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-231b",
		"label": "Référence AT-231B",
		"distinguishingAttributes": {
			"reference": "AT-231B",
			"Vitesse à vide": "7,000 rpm",
			"Masse publiée (kg/lb)": "2.46/5.42"
		}
	},
	"editorial": {
		"overview": "Hymair AT-231B. La AT-231B est la clé 1/2 pouce de 185 mm, 2,46 kg et 576 Nm dans la colonne métrique. La AT-239 annonce 680 Nm et 2,79 kg à la même vitesse ; la AT-238 L allonge l’enclume et atteint 242 mm. Les 8 CFM sont une moyenne, exclue d’un verdict maximal en charge.",
		"verifiedFacts": [
			"Carré : 1/2 pouce.",
			"Couple maximal, colonne Nm : 576 Nm.",
			"Vitesse à vide : 7 000 tr/min.",
			"Masse : 2,46 kg.",
			"Consommation moyenne publiée : 8 CFM."
		],
		"limitations": [
			"Consommation moyenne publiée conservée dans les spécifications ; aucun débit maximal ni volume par action déduit.",
			"Catalogue constructeur identifié ; configuration et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"cle-a-chocs-hymair-at-231b-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal, colonne Nm",
			"value": "576 Nm",
			"evidenceIds": [
				"cle-a-chocs-hymair-at-231b-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7 000 tr/min",
			"evidenceIds": [
				"cle-a-chocs-hymair-at-231b-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,46 kg",
			"evidenceIds": [
				"cle-a-chocs-hymair-at-231b-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "8 CFM",
			"evidenceIds": [
				"cle-a-chocs-hymair-at-231b-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p27",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=27",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-chocs-hymair-at-231b-reserved-20261103-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=27",
			"sourceLabel": "Hymair : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. La AT-231B est la clé 1/2 pouce de 185 mm, 2,46 kg et 576 Nm dans la colonne métrique. La AT-239 annonce 680 Nm et 2,79 kg à la même vitesse ; la AT-238 L allonge l’enclume et atteint 242 mm. Les 8 CFM sont une moyenne, exclue d’un verdict maximal en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p27"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p27"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p27"
		],
		"editorial": [
			"cle-a-chocs-hymair-at-231b-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-hymair-at-231b-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
