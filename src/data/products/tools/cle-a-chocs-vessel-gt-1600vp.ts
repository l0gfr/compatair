import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-vessel-gt-1600vp",
	"slug": "cle-a-chocs-vessel-gt-1600vp",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-1600VP",
	"brand": "VESSEL",
	"model": "GT-1600VP",
	"mpn": "GT-1600VP",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-vessel-gt-1600vp-technical-20261116-reviews.svg",
		"alt": "Repères techniques : VESSEL GT-1600VP",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "vessel-gt-1600vp",
		"label": "Référence GT-1600VP",
		"distinguishingAttributes": {
			"reference": "GT-1600VP",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "8,500 tr/min",
			"Code EDP publié": "336010"
		}
	},
	"editorial": {
		"overview": "La GT-1600VP reçoit un carré 12,7 mm à bague de retenue, avec quatre positions de réglage. La VPL prolonge la broche de 50 mm ; la VPH est la version à mécanisme sans huilage.",
		"verifiedFacts": [
			"Carré : 12,7 mm ; bague de retenue.",
			"Couple de travail et maximum : 49–304 Nm ; maximum 366,7 Nm.",
			"Vitesse à vide : 8 500 tr/min.",
			"Longueur et masse hors accessoires : 171 mm ; 1,91 kg.",
			"Consommation documentaire : 0,4 m³/min ; régime non précisé.",
			"Pression de service : 0,6 MPa."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "12,7 mm ; bague de retenue",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-chocs-vessel-gt-1600vp:0"
			]
		},
		{
			"label": "Couple de travail et maximum",
			"value": "49–304 Nm ; maximum 366,7 Nm",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-chocs-vessel-gt-1600vp:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8 500 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-chocs-vessel-gt-1600vp:0"
			]
		},
		{
			"label": "Longueur et masse hors accessoires",
			"value": "171 mm ; 1,91 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-chocs-vessel-gt-1600vp:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "0,4 m³/min ; régime non précisé",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-chocs-vessel-gt-1600vp:0"
			]
		},
		{
			"label": "Pression de service",
			"value": "0,6 MPa",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-chocs-vessel-gt-1600vp:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p17",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=17",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-chocs-vessel-gt-1600vp:0",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
			"sourceLabel": "VESSEL, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La GT-1600VP reçoit un carré 12,7 mm à bague de retenue, avec quatre positions de réglage. La VPL prolonge la broche de 50 mm ; la VPH est la version à mécanisme sans huilage. GET complet SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Pages PDF lues : 17."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:cle-a-chocs-vessel-gt-1600vp:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:cle-a-chocs-vessel-gt-1600vp:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:cle-a-chocs-vessel-gt-1600vp:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
