import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sp-air-sp-1261g",
	"slug": "meuleuse-sp-air-sp-1261g",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "SP AIR SP-1261G",
	"brand": "SP AIR",
	"model": "SP-1261G",
	"mpn": "SP-1261G",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sp-air-sp-1261g-technical-20261115-followup.svg",
		"alt": "Repères techniques : SP AIR SP-1261G",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "sp-air-sp-1261g",
		"label": "Référence SP-1261G",
		"distinguishingAttributes": {
			"reference": "SP-1261G",
			"Raccord publié": "3/8\"NPT",
			"Masse publiée": "3.8 kg"
		}
	},
	"editorial": {
		"overview": "La SP-1261G monte un disque de 180 mm sur filetage M16 × 2 et mesure 270 mm. La SP-1261L14 utilise M14 × 2 pour 320 mm ; cette différence commande le choix des accessoires.",
		"verifiedFacts": [
			"Disque : 180 mm.",
			"Filetage : M16 × 2.",
			"Vitesse à vide : 7 500 tr/min.",
			"Longueur et masse : 270 mm ; 3,8 kg.",
			"Consommation documentaire : 0,8 m³/min ; régime non précisé.",
			"Montage : Écrou de disque ; clés H17 mm et à ergots indiquées."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Disque",
			"value": "180 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-sp-air-sp-1261g:0"
			]
		},
		{
			"label": "Filetage",
			"value": "M16 × 2",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-sp-air-sp-1261g:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7 500 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-sp-air-sp-1261g:0"
			]
		},
		{
			"label": "Longueur et masse",
			"value": "270 mm ; 3,8 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-sp-air-sp-1261g:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "0,8 m³/min ; régime non précisé",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-sp-air-sp-1261g:0"
			]
		},
		{
			"label": "Montage",
			"value": "Écrou de disque ; clés H17 mm et à ergots indiquées",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-sp-air-sp-1261g:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p18",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=18",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:meuleuse-sp-air-sp-1261g:0",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
			"sourceLabel": "SP AIR, document fabricant, pages PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "La SP-1261G monte un disque de 180 mm sur filetage M16 × 2 et mesure 270 mm. La SP-1261L14 utilise M14 × 2 pour 320 mm ; cette différence commande le choix des accessoires. GET complet : SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:meuleuse-sp-air-sp-1261g:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:meuleuse-sp-air-sp-1261g:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:meuleuse-sp-air-sp-1261g:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
