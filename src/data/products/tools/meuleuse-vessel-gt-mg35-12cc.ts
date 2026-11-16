import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-vessel-gt-mg35-12cc",
	"slug": "meuleuse-vessel-gt-mg35-12cc",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "VESSEL GT-MG35-12CC",
	"brand": "VESSEL",
	"model": "GT-MG35-12CC",
	"mpn": "GT-MG35-12CC",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-vessel-gt-mg35-12cc-technical-20261116-reviews.svg",
		"alt": "Repères techniques : VESSEL GT-MG35-12CC",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "vessel-gt-mg35-12cc",
		"label": "Référence GT-MG35-12CC",
		"distinguishingAttributes": {
			"reference": "GT-MG35-12CC",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "35,000 tr/min",
			"Code EDP publié": "310774"
		}
	},
	"editorial": {
		"overview": "La GT-MG35-12CC combine une tête coudée, une poignée souple et une pince standard de 3 mm. La 12CR conserve une tête coudée mais mesure 151 mm contre 183 mm ; la MG35SAR est droite et accepte 6 mm.",
		"verifiedFacts": [
			"Pince standard : 3 mm.",
			"Vitesse à vide : 35 000 tr/min.",
			"Longueur hors accessoires et tuyau : 183 mm.",
			"Masse hors accessoires : 305 g.",
			"Consommation documentaire : 0,20 m³/min ; régime non précisé.",
			"Pression de service : 0,6 MPa.",
			"Options de pince : 2,35 mm et 1/8 pouce ; options distinctes de la pince standard."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Pince standard",
			"value": "3 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-vessel-gt-mg35-12cc:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "35 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-vessel-gt-mg35-12cc:0"
			]
		},
		{
			"label": "Longueur hors accessoires et tuyau",
			"value": "183 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-vessel-gt-mg35-12cc:0"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "305 g",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-vessel-gt-mg35-12cc:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "0,20 m³/min ; régime non précisé",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-vessel-gt-mg35-12cc:0"
			]
		},
		{
			"label": "Pression de service",
			"value": "0,6 MPa",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-vessel-gt-mg35-12cc:0"
			]
		},
		{
			"label": "Options de pince",
			"value": "2,35 mm et 1/8 pouce ; options distinctes de la pince standard",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-vessel-gt-mg35-12cc:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p34",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=34",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:meuleuse-vessel-gt-mg35-12cc:0",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
			"sourceLabel": "VESSEL, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La GT-MG35-12CC combine une tête coudée, une poignée souple et une pince standard de 3 mm. La 12CR conserve une tête coudée mais mesure 151 mm contre 183 mm ; la MG35SAR est droite et accepte 6 mm. GET complet SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Pages PDF lues : 34."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:meuleuse-vessel-gt-mg35-12cc:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:meuleuse-vessel-gt-mg35-12cc:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:meuleuse-vessel-gt-mg35-12cc:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
