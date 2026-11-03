import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-sp-air-sp-1513ah",
	"slug": "perceuse-sp-air-sp-1513ah",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "SP AIR SP-1513AH",
	"brand": "SP AIR",
	"model": "SP-1513AH",
	"mpn": "SP-1513AH",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-sp-air-sp-1513ah.webp",
		"alt": "Repères techniques : SP AIR SP-1513AH",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1513ah",
		"label": "Référence SP-1513AH",
		"distinguishingAttributes": {
			"reference": "SP-1513AH",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1.53 kg",
			"Longueur hors tout": "222 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1513AH. La SP-1513AH est la perceuse à mandrin 13 mm et 220 tr/min. La SP-1510AH utilise 10 mm et donne 1 800 tr/min ; la SP-1514AH est à 1 700 tr/min. Le diamètre de mandrin et la vitesse basse différencient cette référence ; les 0,3 m³/min restent de régime non précisé.",
		"verifiedFacts": [
			"Mandrin : 13 mm (1/2 pouce).",
			"Puissance : 1 HP, colonne constructeur.",
			"Vitesse à vide : 220 tr/min.",
			"Longueur : 222 mm.",
			"Masse : 1,53 kg."
		],
		"limitations": [
			"Le catalogue ne précise pas le régime du débit ; la valeur reste non dimensionnante, sans maximum supposé.",
			"Source constructeur historique ; disponibilité actuelle et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Mandrin",
			"value": "13 mm (1/2 pouce)",
			"evidenceIds": [
				"perceuse-sp-air-sp-1513ah-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "1 HP, colonne constructeur",
			"evidenceIds": [
				"perceuse-sp-air-sp-1513ah-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "220 tr/min",
			"evidenceIds": [
				"perceuse-sp-air-sp-1513ah-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "222 mm",
			"evidenceIds": [
				"perceuse-sp-air-sp-1513ah-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,53 kg",
			"evidenceIds": [
				"perceuse-sp-air-sp-1513ah-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p13",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=13",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "perceuse-sp-air-sp-1513ah-reserved-20261103-1",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=13",
			"sourceLabel": "SP AIR : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. La SP-1513AH est la perceuse à mandrin 13 mm et 220 tr/min. La SP-1510AH utilise 10 mm et donne 1 800 tr/min ; la SP-1514AH est à 1 700 tr/min. Le diamètre de mandrin et la vitesse basse différencient cette référence ; les 0,3 m³/min restent de régime non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p13"
		],
		"workingPressureBar": [
			"october-sp-air-p13"
		],
		"airflowLpm": [
			"october-sp-air-p13"
		],
		"airflowBasis": [
			"october-sp-air-p13"
		],
		"editorial": [
			"perceuse-sp-air-sp-1513ah-reserved-20261103-1"
		],
		"specifications": [
			"perceuse-sp-air-sp-1513ah-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 300 L/min à 6,2 bar."
	]
};

export default product;
