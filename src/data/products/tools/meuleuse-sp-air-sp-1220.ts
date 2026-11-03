import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sp-air-sp-1220",
	"slug": "meuleuse-sp-air-sp-1220",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "SP AIR SP-1220",
	"brand": "SP AIR",
	"model": "SP-1220",
	"mpn": "SP-1220",
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
		"src": "/images/products/meuleuse-sp-air-sp-1220.webp",
		"alt": "Repères techniques : SP AIR SP-1220",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1220",
		"label": "Référence SP-1220",
		"distinguishingAttributes": {
			"reference": "SP-1220",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.56 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1220. La SP-1220 est la meuleuse à pince 6 mm, 23 000 tr/min et longueur 164 mm. La SP-1200 atteint 28 000 tr/min pour 120 mm et 0,3 kg ; la SP-1523 est à 3 800 tr/min. La fraise doit respecter la pince et la vitesse du modèle choisi. Les 0,4 m³/min restent de régime non précisé.",
		"verifiedFacts": [
			"Pince : 6 mm.",
			"Vitesse à vide : 23 000 tr/min.",
			"Diamètre de poignée : 40 mm.",
			"Longueur : 164 mm.",
			"Masse : 0,56 kg."
		],
		"limitations": [
			"Le catalogue ne précise pas le régime du débit ; la valeur reste non dimensionnante, sans maximum supposé.",
			"Source constructeur historique ; disponibilité actuelle et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Pince",
			"value": "6 mm",
			"evidenceIds": [
				"meuleuse-sp-air-sp-1220-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "23 000 tr/min",
			"evidenceIds": [
				"meuleuse-sp-air-sp-1220-reserved-20261103-1"
			]
		},
		{
			"label": "Diamètre de poignée",
			"value": "40 mm",
			"evidenceIds": [
				"meuleuse-sp-air-sp-1220-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "164 mm",
			"evidenceIds": [
				"meuleuse-sp-air-sp-1220-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,56 kg",
			"evidenceIds": [
				"meuleuse-sp-air-sp-1220-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p20",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=20",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "meuleuse-sp-air-sp-1220-reserved-20261103-1",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=20",
			"sourceLabel": "SP AIR : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. La SP-1220 est la meuleuse à pince 6 mm, 23 000 tr/min et longueur 164 mm. La SP-1200 atteint 28 000 tr/min pour 120 mm et 0,3 kg ; la SP-1523 est à 3 800 tr/min. La fraise doit respecter la pince et la vitesse du modèle choisi. Les 0,4 m³/min restent de régime non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p20"
		],
		"workingPressureBar": [
			"october-sp-air-p20"
		],
		"airflowLpm": [
			"october-sp-air-p20"
		],
		"airflowBasis": [
			"october-sp-air-p20"
		],
		"editorial": [
			"meuleuse-sp-air-sp-1220-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-sp-air-sp-1220-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6,2 bar."
	]
};

export default product;
