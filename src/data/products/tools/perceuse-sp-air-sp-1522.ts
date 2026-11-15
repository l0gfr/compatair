import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-sp-air-sp-1522",
	"slug": "perceuse-sp-air-sp-1522",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "SP AIR SP-1522",
	"brand": "SP AIR",
	"model": "SP-1522",
	"mpn": "SP-1522",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-sp-air-sp-1522-technical-20261115-followup.svg",
		"alt": "Repères techniques : SP AIR SP-1522",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "sp-air-sp-1522",
		"label": "Référence SP-1522",
		"distinguishingAttributes": {
			"reference": "SP-1522",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1.23 kg",
			"Longueur hors tout": "175 mm"
		}
	},
	"editorial": {
		"overview": "La SP-1522 associe un mandrin de 1 à 10 mm à 2 500 tr/min pour 175 mm. La SP-1525 tourne à 2 200 tr/min pour 195 mm ; la SP-1527 accepte 13 mm mais tourne à 500 tr/min.",
		"verifiedFacts": [
			"Mandrin : 1–10 mm.",
			"Vitesse à vide : 2 500 tr/min.",
			"Longueur et masse : 175 mm ; 1,23 kg.",
			"Consommation documentaire : 0,4 m³/min ; régime non précisé.",
			"Raccord : 1/4 NPT."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Mandrin",
			"value": "1–10 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:perceuse-sp-air-sp-1522:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 500 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:perceuse-sp-air-sp-1522:0"
			]
		},
		{
			"label": "Longueur et masse",
			"value": "175 mm ; 1,23 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:perceuse-sp-air-sp-1522:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "0,4 m³/min ; régime non précisé",
			"evidenceIds": [
				"review:2026-11-12-technical:perceuse-sp-air-sp-1522:0"
			]
		},
		{
			"label": "Raccord",
			"value": "1/4 NPT",
			"evidenceIds": [
				"review:2026-11-12-technical:perceuse-sp-air-sp-1522:0"
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
			"id": "review:2026-11-12-technical:perceuse-sp-air-sp-1522:0",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
			"sourceLabel": "SP AIR, document fabricant, pages PDF 12, 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "La SP-1522 associe un mandrin de 1 à 10 mm à 2 500 tr/min pour 175 mm. La SP-1525 tourne à 2 200 tr/min pour 195 mm ; la SP-1527 accepte 13 mm mais tourne à 500 tr/min. GET complet : SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:perceuse-sp-air-sp-1522:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:perceuse-sp-air-sp-1522:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:perceuse-sp-air-sp-1522:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
