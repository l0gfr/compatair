import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-sp-air-sp-1470fc",
	"slug": "burineur-sp-air-sp-1470fc",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "SP AIR SP-1470FC",
	"brand": "SP AIR",
	"model": "SP-1470FC",
	"mpn": "SP-1470FC",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-sp-air-sp-1470fc.webp",
		"alt": "Repères techniques : SP AIR SP-1470FC",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1470fc",
		"label": "Référence SP-1470FC",
		"distinguishingAttributes": {
			"reference": "SP-1470FC",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1.7 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1470FC. Le SP-1470FC est le burineur plat coudé, piston 25 mm et course 22 mm. Le SP-1460FC est la version plus petite, piston 20 mm, course 12 mm et 5 000 coups/min. Ces différences expliquent l’écart de masse 1,7 contre 0,9 kg ; le régime du débit publié reste non précisé.",
		"verifiedFacts": [
			"Forme du burin : Plat coudé, famille 12,7 mm.",
			"Piston : 25 mm.",
			"Course : 22 mm.",
			"Cadence : 4 000 coups/min.",
			"Longueur : 215 mm."
		],
		"limitations": [
			"Le catalogue ne précise pas le régime du débit ; la valeur reste non dimensionnante, sans maximum supposé.",
			"Source constructeur historique ; disponibilité actuelle et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Forme du burin",
			"value": "Plat coudé, famille 12,7 mm",
			"evidenceIds": [
				"burineur-sp-air-sp-1470fc-reserved-20261103-1"
			]
		},
		{
			"label": "Piston",
			"value": "25 mm",
			"evidenceIds": [
				"burineur-sp-air-sp-1470fc-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "22 mm",
			"evidenceIds": [
				"burineur-sp-air-sp-1470fc-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "4 000 coups/min",
			"evidenceIds": [
				"burineur-sp-air-sp-1470fc-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "215 mm",
			"evidenceIds": [
				"burineur-sp-air-sp-1470fc-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p23",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=23",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "burineur-sp-air-sp-1470fc-reserved-20261103-1",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=23",
			"sourceLabel": "SP AIR : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Le SP-1470FC est le burineur plat coudé, piston 25 mm et course 22 mm. Le SP-1460FC est la version plus petite, piston 20 mm, course 12 mm et 5 000 coups/min. Ces différences expliquent l’écart de masse 1,7 contre 0,9 kg ; le régime du débit publié reste non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p23"
		],
		"workingPressureBar": [
			"october-sp-air-p23"
		],
		"airflowLpm": [
			"october-sp-air-p23"
		],
		"airflowBasis": [
			"october-sp-air-p23"
		],
		"editorial": [
			"burineur-sp-air-sp-1470fc-reserved-20261103-1"
		],
		"specifications": [
			"burineur-sp-air-sp-1470fc-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6,2 bar."
	]
};

export default product;
