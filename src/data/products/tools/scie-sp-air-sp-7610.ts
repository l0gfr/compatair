import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-sp-air-sp-7610",
	"slug": "scie-sp-air-sp-7610",
	"categoryId": "scie",
	"category": "scie",
	"label": "SP AIR SP-7610",
	"brand": "SP AIR",
	"model": "SP-7610",
	"mpn": "SP-7610",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-sp-air-sp-7610.webp",
		"alt": "Repères techniques : SP AIR SP-7610",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-7610",
		"label": "Référence SP-7610",
		"distinguishingAttributes": {
			"reference": "SP-7610",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.6 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-7610. La SP-7610 est la scie de capacité acier 4 mm, course 12 mm et 5 300 courses/min. La SP-7620 donne 2 mm, course 6 mm et 11 000 courses/min, pour la même masse 0,6 kg. La SP-1720 est limitée à 1,5 mm d’acier. Les 0,5 m³/min ne définissent pas un volume par course.",
		"verifiedFacts": [
			"Capacité acier publiée : 4 mm.",
			"Course : 12 mm.",
			"Cadence : 5 300 courses/min.",
			"Longueur : 207 mm.",
			"Masse : 0,6 kg."
		],
		"limitations": [
			"Le catalogue ne précise pas le régime du débit ; la valeur reste non dimensionnante, sans maximum supposé.",
			"Source constructeur historique ; disponibilité actuelle et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Capacité acier publiée",
			"value": "4 mm",
			"evidenceIds": [
				"scie-sp-air-sp-7610-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "12 mm",
			"evidenceIds": [
				"scie-sp-air-sp-7610-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "5 300 courses/min",
			"evidenceIds": [
				"scie-sp-air-sp-7610-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "207 mm",
			"evidenceIds": [
				"scie-sp-air-sp-7610-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,6 kg",
			"evidenceIds": [
				"scie-sp-air-sp-7610-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p21",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=21",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "scie-sp-air-sp-7610-reserved-20261103-1",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=21",
			"sourceLabel": "SP AIR : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. La SP-7610 est la scie de capacité acier 4 mm, course 12 mm et 5 300 courses/min. La SP-7620 donne 2 mm, course 6 mm et 11 000 courses/min, pour la même masse 0,6 kg. La SP-1720 est limitée à 1,5 mm d’acier. Les 0,5 m³/min ne définissent pas un volume par course."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p21"
		],
		"workingPressureBar": [
			"october-sp-air-p21"
		],
		"airflowLpm": [
			"october-sp-air-p21"
		],
		"airflowBasis": [
			"october-sp-air-p21"
		],
		"editorial": [
			"scie-sp-air-sp-7610-reserved-20261103-1"
		],
		"specifications": [
			"scie-sp-air-sp-7610-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 500 L/min à 6,2 bar."
	]
};

export default product;
