import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-sp-air-sp-1762l",
	"slug": "cle-a-cliquet-sp-air-sp-1762l",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "SP AIR SP-1762L",
	"brand": "SP AIR",
	"model": "SP-1762L",
	"mpn": "SP-1762L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-sp-air-sp-1762l-technical-20261115-followup.svg",
		"alt": "Repères techniques : SP AIR SP-1762L",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "sp-air-sp-1762l",
		"label": "Référence SP-1762L",
		"distinguishingAttributes": {
			"reference": "SP-1762L",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.6 kg",
			"Longueur hors tout": "210 mm"
		}
	},
	"editorial": {
		"overview": "La SP-1762L mesure 210 mm et conserve le carré 3/8, 310 tr/min et 20 Nm. La 1762 standard mesure 165 mm ; la 1762N ralentit à 200 tr/min pour 185 mm.",
		"verifiedFacts": [
			"Carré : 3/8 in.",
			"Couple publié : 20 Nm.",
			"Vitesse à vide : 310 tr/min.",
			"Longueur et masse : 210 mm ; 0,6 kg.",
			"Consommation documentaire : 0,2 m³/min ; régime non précisé.",
			"Raccord : 1/4 NPT."
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
				"review:2026-11-12-technical:cle-a-cliquet-sp-air-sp-1762l:0"
			]
		},
		{
			"label": "Couple publié",
			"value": "20 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-cliquet-sp-air-sp-1762l:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "310 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-cliquet-sp-air-sp-1762l:0"
			]
		},
		{
			"label": "Longueur et masse",
			"value": "210 mm ; 0,6 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-cliquet-sp-air-sp-1762l:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "0,2 m³/min ; régime non précisé",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-cliquet-sp-air-sp-1762l:0"
			]
		},
		{
			"label": "Raccord",
			"value": "1/4 NPT",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-cliquet-sp-air-sp-1762l:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p5",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=5",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:cle-a-cliquet-sp-air-sp-1762l:0",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
			"sourceLabel": "SP AIR, document fabricant, pages PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "La SP-1762L mesure 210 mm et conserve le carré 3/8, 310 tr/min et 20 Nm. La 1762 standard mesure 165 mm ; la 1762N ralentit à 200 tr/min pour 185 mm. GET complet : SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:cle-a-cliquet-sp-air-sp-1762l:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:cle-a-cliquet-sp-air-sp-1762l:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:cle-a-cliquet-sp-air-sp-1762l:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
