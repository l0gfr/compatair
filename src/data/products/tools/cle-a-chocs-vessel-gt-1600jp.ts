import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-vessel-gt-1600jp",
	"slug": "cle-a-chocs-vessel-gt-1600jp",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-1600JP",
	"brand": "VESSEL",
	"model": "GT-1600JP",
	"mpn": "GT-1600JP",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-vessel-gt-1600jp.webp",
		"alt": "Repères techniques : VESSEL GT-1600JP",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-1600jp",
		"label": "Référence GT-1600JP",
		"distinguishingAttributes": {
			"reference": "GT-1600JP",
			"Raccord publié": "Rc1/4",
			"Vitesse à vide": "10,000 tr/min",
			"Code EDP publié": "336014"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-1600JP. La GT-1600JP est la clé courte de 109 mm, carré 12,7 mm et plage utile 50–220 Nm. Le flyer identifie un mécanisme à deux marteaux et le réglage trois positions dans les deux sens. Les GT-1600P et VP restent d’autres références ; leurs vitesses ne sont pas transférées. Le code JAN et les dimensions sont confirmés sur la fiche fabricant chinoise, sans régime de consommation inventé.",
		"verifiedFacts": [
			"Carré : 12,7 mm (SQ12.7).",
			"Capacité boulon ordinaire : 16 mm.",
			"Plage de couple utile : 50–220 Nm.",
			"Vitesse à vide : 10 000 tr/min.",
			"Longueur : 109 mm.",
			"Masse hors accessoires : 1 400 g.",
			"Consommation, régime non précisé : 0,6 m³/min."
		],
		"limitations": [
			"La consommation n’a pas de régime de charge explicite ; elle reste non dimensionnante malgré la pression nominale publiée."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "12,7 mm (SQ12.7)",
			"evidenceIds": [
				"cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité boulon ordinaire",
			"value": "16 mm",
			"evidenceIds": [
				"cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de couple utile",
			"value": "50–220 Nm",
			"evidenceIds": [
				"cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "109 mm",
			"evidenceIds": [
				"cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "1 400 g",
			"evidenceIds": [
				"cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "0,6 m³/min",
			"evidenceIds": [
				"cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p25",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=25",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1",
			"sourceUrl": "https://www.vessel.co.jp/chinese/product/airtools_wrench/336014",
			"sourceLabel": "VESSEL : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a9125d159a34ff492c31bf8bfbd112ab239d082769b34d2ce6f1dacb69318e03. La GT-1600JP est la clé courte de 109 mm, carré 12,7 mm et plage utile 50–220 Nm. Le flyer identifie un mécanisme à deux marteaux et le réglage trois positions dans les deux sens. Les GT-1600P et VP restent d’autres références ; leurs vitesses ne sont pas transférées. Le code JAN et les dimensions sont confirmés sur la fiche fabricant chinoise, sans régime de consommation inventé."
		},
		{
			"id": "cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1-2",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/GT1600JP_fl.pdf#page=1",
			"sourceLabel": "VESSEL : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a9125d159a34ff492c31bf8bfbd112ab239d082769b34d2ce6f1dacb69318e03. La GT-1600JP est la clé courte de 109 mm, carré 12,7 mm et plage utile 50–220 Nm. Le flyer identifie un mécanisme à deux marteaux et le réglage trois positions dans les deux sens. Les GT-1600P et VP restent d’autres références ; leurs vitesses ne sont pas transférées. Le code JAN et les dimensions sont confirmés sur la fiche fabricant chinoise, sans régime de consommation inventé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p25"
		],
		"workingPressureBar": [
			"cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1"
		],
		"airflowLpm": [
			"cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1"
		],
		"airflowBasis": [
			"cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1"
		],
		"editorial": [
			"cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-vessel-gt-1600jp-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 600 L/min à 6 bar."
	]
};

export default product;
