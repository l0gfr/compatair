import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-vessel-gt-d100-15k",
	"slug": "perceuse-vessel-gt-d100-15k",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "VESSEL GT-D100-15K",
	"brand": "VESSEL",
	"model": "GT-D100-15K",
	"mpn": "GT-D100-15K",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-vessel-gt-d100-15k-technical-20261116-reviews.svg",
		"alt": "Repères techniques : VESSEL GT-D100-15K",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "vessel-gt-d100-15k",
		"label": "Référence GT-D100-15K",
		"distinguishingAttributes": {
			"reference": "GT-D100-15K",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "1,500 tr/min",
			"Code EDP publié": "310607"
		}
	},
	"editorial": {
		"overview": "La GT-D100-15K perce l’acier jusqu’à 10 mm avec un mandrin sans clé et un échappement arrière. La D100-15 emploie une clé ; la D60-45 limite le perçage à 6 mm pour 4 500 tr/min.",
		"verifiedFacts": [
			"Mandrin : 10 mm ; sans clé.",
			"Vitesse à vide : 1 500 tr/min.",
			"Longueur et masse hors accessoires : 195 mm ; 1 300 g.",
			"Consommation documentaire : 0,54 m³/min ; régime non précisé.",
			"Pression de service : 0,6 MPa."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Mandrin",
			"value": "10 mm ; sans clé",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-vessel-gt-d100-15k:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 500 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-vessel-gt-d100-15k:0"
			]
		},
		{
			"label": "Longueur et masse hors accessoires",
			"value": "195 mm ; 1 300 g",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-vessel-gt-d100-15k:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "0,54 m³/min ; régime non précisé",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-vessel-gt-d100-15k:0"
			]
		},
		{
			"label": "Pression de service",
			"value": "0,6 MPa",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-vessel-gt-d100-15k:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p39",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=39",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:perceuse-vessel-gt-d100-15k:0",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
			"sourceLabel": "VESSEL, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La GT-D100-15K perce l’acier jusqu’à 10 mm avec un mandrin sans clé et un échappement arrière. La D100-15 emploie une clé ; la D60-45 limite le perçage à 6 mm pour 4 500 tr/min. GET complet SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Pages PDF lues : 39."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:perceuse-vessel-gt-d100-15k:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:perceuse-vessel-gt-d100-15k:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:perceuse-vessel-gt-d100-15k:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
