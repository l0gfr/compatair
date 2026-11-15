import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-sp-air-sp-3605-a5m",
	"slug": "ponceuse-orbitale-sp-air-sp-3605-a5m",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "SP AIR SP-3605-A5M",
	"brand": "SP AIR",
	"model": "SP-3605-A5M",
	"mpn": "SP-3605-A5M",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-sp-air-sp-3605-a5m-technical-20261115-followup.svg",
		"alt": "Repères techniques : SP AIR SP-3605-A5M",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "sp-air-sp-3605-a5m",
		"label": "Référence SP-3605-A5M",
		"distinguishingAttributes": {
			"reference": "SP-3605-A5M",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1.23 kg"
		}
	},
	"editorial": {
		"overview": "La SP-3605-A5M reçoit un plateau autoagrippant de 125 mm et une orbite de 5 mm. La version DF ajoute le tuyau et le sac à poussières ; la 3606 passe à 150 mm et 228 mm de longueur.",
		"verifiedFacts": [
			"Plateau : 125 mm ; autoagrippant.",
			"Orbite : 5 mm.",
			"Vitesse à vide : 10 000 tr/min.",
			"Longueur et masse : 215 mm ; 1,23 kg.",
			"Filetage : 5/16-24 UNF.",
			"Consommation documentaire : 0,3 m³/min ; régime non précisé."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "125 mm ; autoagrippant",
			"evidenceIds": [
				"review:2026-11-12-technical:ponceuse-orbitale-sp-air-sp-3605-a5m:0"
			]
		},
		{
			"label": "Orbite",
			"value": "5 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:ponceuse-orbitale-sp-air-sp-3605-a5m:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:ponceuse-orbitale-sp-air-sp-3605-a5m:0"
			]
		},
		{
			"label": "Longueur et masse",
			"value": "215 mm ; 1,23 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:ponceuse-orbitale-sp-air-sp-3605-a5m:0"
			]
		},
		{
			"label": "Filetage",
			"value": "5/16-24 UNF",
			"evidenceIds": [
				"review:2026-11-12-technical:ponceuse-orbitale-sp-air-sp-3605-a5m:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "0,3 m³/min ; régime non précisé",
			"evidenceIds": [
				"review:2026-11-12-technical:ponceuse-orbitale-sp-air-sp-3605-a5m:0"
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
			"id": "review:2026-11-12-technical:ponceuse-orbitale-sp-air-sp-3605-a5m:0",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
			"sourceLabel": "SP AIR, document fabricant, pages PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "La SP-3605-A5M reçoit un plateau autoagrippant de 125 mm et une orbite de 5 mm. La version DF ajoute le tuyau et le sac à poussières ; la 3606 passe à 150 mm et 228 mm de longueur. GET complet : SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:ponceuse-orbitale-sp-air-sp-3605-a5m:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:ponceuse-orbitale-sp-air-sp-3605-a5m:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:ponceuse-orbitale-sp-air-sp-3605-a5m:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
