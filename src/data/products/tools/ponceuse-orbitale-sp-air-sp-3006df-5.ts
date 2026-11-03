import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-sp-air-sp-3006df-5",
	"slug": "ponceuse-orbitale-sp-air-sp-3006df-5",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "SP AIR SP-3006DF-5",
	"brand": "SP AIR",
	"model": "SP-3006DF-5",
	"mpn": "SP-3006DF-5",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 470,
		"typical": 470,
		"max": 470
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-sp-air-sp-3006df-5.webp",
		"alt": "Repères techniques : SP AIR SP-3006DF-5",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-3006df-5",
		"label": "Référence SP-3006DF-5",
		"distinguishingAttributes": {
			"reference": "SP-3006DF-5",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.65 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-3006DF-5. La SP-3006DF-5 est la ponceuse 125 mm à orbite 5 mm, fournie dans la table avec tuyau et sac de poussière. La SP-3606DF-A5M reçoit 150 mm et pèse 1,3 kg contre 0,65 kg ; la SP-3605DF-A5M conserve 125 mm mais pèse 1,23 kg. Les 0,47 m³/min restent non qualifiés en charge.",
		"verifiedFacts": [
			"Plateau : 125 mm, autoagrippant.",
			"Orbite : 5 mm.",
			"Filetage : 5/16-24 UNF.",
			"Vitesse à vide : 10 000 tr/min.",
			"Longueur : 210 mm.",
			"Masse : 0,65 kg."
		],
		"limitations": [
			"Le catalogue ne précise pas le régime du débit ; la valeur reste non dimensionnante, sans maximum supposé.",
			"Source constructeur historique ; disponibilité actuelle et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "125 mm, autoagrippant",
			"evidenceIds": [
				"ponceuse-orbitale-sp-air-sp-3006df-5-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite",
			"value": "5 mm",
			"evidenceIds": [
				"ponceuse-orbitale-sp-air-sp-3006df-5-reserved-20261103-1"
			]
		},
		{
			"label": "Filetage",
			"value": "5/16-24 UNF",
			"evidenceIds": [
				"ponceuse-orbitale-sp-air-sp-3006df-5-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"ponceuse-orbitale-sp-air-sp-3006df-5-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "210 mm",
			"evidenceIds": [
				"ponceuse-orbitale-sp-air-sp-3006df-5-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,65 kg",
			"evidenceIds": [
				"ponceuse-orbitale-sp-air-sp-3006df-5-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p14",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=14",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-orbitale-sp-air-sp-3006df-5-reserved-20261103-1",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=14",
			"sourceLabel": "SP AIR : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. La SP-3006DF-5 est la ponceuse 125 mm à orbite 5 mm, fournie dans la table avec tuyau et sac de poussière. La SP-3606DF-A5M reçoit 150 mm et pèse 1,3 kg contre 0,65 kg ; la SP-3605DF-A5M conserve 125 mm mais pèse 1,23 kg. Les 0,47 m³/min restent non qualifiés en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p14"
		],
		"workingPressureBar": [
			"october-sp-air-p14"
		],
		"airflowLpm": [
			"october-sp-air-p14"
		],
		"airflowBasis": [
			"october-sp-air-p14"
		],
		"editorial": [
			"ponceuse-orbitale-sp-air-sp-3006df-5-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-orbitale-sp-air-sp-3006df-5-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 470 L/min à 6,2 bar."
	]
};

export default product;
