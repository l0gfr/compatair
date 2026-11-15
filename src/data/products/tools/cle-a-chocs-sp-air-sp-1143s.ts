import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sp-air-sp-1143s",
	"slug": "cle-a-chocs-sp-air-sp-1143s",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "SP AIR SP-1143S",
	"brand": "SP AIR",
	"model": "SP-1143S",
	"mpn": "SP-1143S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sp-air-sp-1143s-technical-20261115-followup.svg",
		"alt": "Repères techniques : SP AIR SP-1143S",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "sp-air-sp-1143s",
		"label": "Référence SP-1143S",
		"distinguishingAttributes": {
			"reference": "SP-1143S",
			"Raccord publié": "3/8\"NPT",
			"Masse publiée": "1.6 kg",
			"Longueur hors tout": "163 mm"
		}
	},
	"editorial": {
		"overview": "La SP-1143S reçoit un carré 3/8 et un raccord 3/8 NPT. La SP-1143 est en carré 1/2 et raccord 1/4 NPT, malgré les mêmes 50–320 Nm et 8 000 tr/min.",
		"verifiedFacts": [
			"Carré : 3/8 in.",
			"Couple publié : 50–320 Nm.",
			"Vitesse à vide : 8 000 tr/min.",
			"Longueur et masse : 163 mm ; 1,6 kg.",
			"Consommation documentaire : 0,4 m³/min ; régime non précisé.",
			"Raccord : 3/8 NPT."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 in",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-chocs-sp-air-sp-1143s:0"
			]
		},
		{
			"label": "Couple publié",
			"value": "50–320 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-chocs-sp-air-sp-1143s:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8 000 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-chocs-sp-air-sp-1143s:0"
			]
		},
		{
			"label": "Longueur et masse",
			"value": "163 mm ; 1,6 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-chocs-sp-air-sp-1143s:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "0,4 m³/min ; régime non précisé",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-chocs-sp-air-sp-1143s:0"
			]
		},
		{
			"label": "Raccord",
			"value": "3/8 NPT",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-chocs-sp-air-sp-1143s:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p9",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=9",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:cle-a-chocs-sp-air-sp-1143s:0",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
			"sourceLabel": "SP AIR, document fabricant, pages PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "La SP-1143S reçoit un carré 3/8 et un raccord 3/8 NPT. La SP-1143 est en carré 1/2 et raccord 1/4 NPT, malgré les mêmes 50–320 Nm et 8 000 tr/min. GET complet : SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:cle-a-chocs-sp-air-sp-1143s:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:cle-a-chocs-sp-air-sp-1143s:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:cle-a-chocs-sp-air-sp-1143s:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
