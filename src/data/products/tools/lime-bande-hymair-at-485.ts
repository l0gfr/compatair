import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-bande-hymair-at-485",
	"slug": "lime-bande-hymair-at-485",
	"categoryId": "lime-bande",
	"category": "lime-bande",
	"label": "Hymair AT-485",
	"brand": "Hymair",
	"model": "AT-485",
	"mpn": "AT-485",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-bande-hymair-at-485.webp",
		"alt": "Repères techniques : Hymair AT-485",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-485",
		"label": "Référence AT-485",
		"distinguishingAttributes": {
			"reference": "AT-485",
			"Vitesse à vide": "18,000 rpm",
			"Masse publiée (kg/lb)": "1.10/2.42"
		}
	},
	"editorial": {
		"overview": "Hymair AT-485. La AT-485 utilise la bande 20 × 520 mm ; la AT-480N utilise 10 × 330 mm et mesure 280 mm contre 350 mm. La AT-485N conserve les mêmes dimensions de bande et performances publiées, avec une poignée décrite comme gainée. La largeur de bande guide le choix du consommable ; le débit moyen ne devient pas une valeur en charge.",
		"verifiedFacts": [
			"Bande : 20 × 520 mm.",
			"Vitesse à vide : 18 000 tr/min.",
			"Longueur : 350 mm.",
			"Masse : 1,10 kg.",
			"Consommation moyenne publiée : 7 CFM."
		],
		"limitations": [
			"Consommation moyenne publiée conservée dans les spécifications ; aucun débit maximal ni volume par action déduit.",
			"Catalogue constructeur identifié ; configuration et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Bande",
			"value": "20 × 520 mm",
			"evidenceIds": [
				"lime-bande-hymair-at-485-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "18 000 tr/min",
			"evidenceIds": [
				"lime-bande-hymair-at-485-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "350 mm",
			"evidenceIds": [
				"lime-bande-hymair-at-485-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,10 kg",
			"evidenceIds": [
				"lime-bande-hymair-at-485-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "7 CFM",
			"evidenceIds": [
				"lime-bande-hymair-at-485-reserved-20261103-1"
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
		},
		{
			"id": "lime-bande-hymair-at-485-reserved-20261103-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=17",
			"sourceLabel": "Hymair : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. La AT-485 utilise la bande 20 × 520 mm ; la AT-480N utilise 10 × 330 mm et mesure 280 mm contre 350 mm. La AT-485N conserve les mêmes dimensions de bande et performances publiées, avec une poignée décrite comme gainée. La largeur de bande guide le choix du consommable ; le débit moyen ne devient pas une valeur en charge."
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
		],
		"editorial": [
			"lime-bande-hymair-at-485-reserved-20261103-1"
		],
		"specifications": [
			"lime-bande-hymair-at-485-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
