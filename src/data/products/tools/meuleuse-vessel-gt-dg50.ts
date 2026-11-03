import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-vessel-gt-dg50",
	"slug": "meuleuse-vessel-gt-dg50",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "VESSEL GT-DG50",
	"brand": "VESSEL",
	"model": "GT-DG50",
	"mpn": "GT-DG50",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 570,
		"typical": 570,
		"max": 570
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-vessel-gt-dg50.webp",
		"alt": "Repères techniques : VESSEL GT-DG50",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-dg50",
		"label": "Référence GT-DG50",
		"distinguishingAttributes": {
			"reference": "GT-DG50",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "15,000 tr/min",
			"Code EDP publié": "310639"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-DG50. La GT-DG50 reçoit la meule 50 × 4 × 9,5 mm et possède un blocage de broche. La GT-DG100 est un autre diamètre, tandis que les GT-DS50A/B sont des ponceuses à disque avec leurs propres montages. La dimension de meule complète est utile au choix du consommable ; les 0,57 m³/min restent de régime non précisé.",
		"verifiedFacts": [
			"Meule, diamètre × épaisseur × alésage : 50 × 4 × 9,5 mm.",
			"Montage : Blocage de broche.",
			"Vitesse à vide : 15 000 tr/min.",
			"Longueur : 164 mm.",
			"Masse hors accessoires : 800 g.",
			"Consommation, régime non précisé : 0,57 m³/min."
		],
		"limitations": [
			"La consommation n’a pas de régime de charge explicite ; elle reste non dimensionnante malgré la pression nominale publiée."
		]
	},
	"specifications": [
		{
			"label": "Meule, diamètre × épaisseur × alésage",
			"value": "50 × 4 × 9,5 mm",
			"evidenceIds": [
				"meuleuse-vessel-gt-dg50-reserved-20261103-1"
			]
		},
		{
			"label": "Montage",
			"value": "Blocage de broche",
			"evidenceIds": [
				"meuleuse-vessel-gt-dg50-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"meuleuse-vessel-gt-dg50-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "164 mm",
			"evidenceIds": [
				"meuleuse-vessel-gt-dg50-reserved-20261103-1"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "800 g",
			"evidenceIds": [
				"meuleuse-vessel-gt-dg50-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "0,57 m³/min",
			"evidenceIds": [
				"meuleuse-vessel-gt-dg50-reserved-20261103-1"
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
			"id": "meuleuse-vessel-gt-dg50-reserved-20261103-1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airtools_sander2/310639",
			"sourceLabel": "VESSEL : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 390e1f9f9b23566006b984b5461dde56e30d895bcfdfe8507258c570d7fa4299. La GT-DG50 reçoit la meule 50 × 4 × 9,5 mm et possède un blocage de broche. La GT-DG100 est un autre diamètre, tandis que les GT-DS50A/B sont des ponceuses à disque avec leurs propres montages. La dimension de meule complète est utile au choix du consommable ; les 0,57 m³/min restent de régime non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p34"
		],
		"workingPressureBar": [
			"meuleuse-vessel-gt-dg50-reserved-20261103-1"
		],
		"airflowLpm": [
			"meuleuse-vessel-gt-dg50-reserved-20261103-1"
		],
		"airflowBasis": [
			"meuleuse-vessel-gt-dg50-reserved-20261103-1"
		],
		"editorial": [
			"meuleuse-vessel-gt-dg50-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-vessel-gt-dg50-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 570 L/min à 6 bar."
	]
};

export default product;
