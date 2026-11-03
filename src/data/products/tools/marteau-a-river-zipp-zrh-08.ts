import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-zipp-zrh-08",
	"slug": "marteau-a-river-zipp-zrh-08",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "ZIPP ZRH-08",
	"brand": "ZIPP",
	"model": "ZRH-08",
	"mpn": "ZRH-08",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-zipp-zrh-08.webp",
		"alt": "Repères techniques : ZIPP ZRH-08",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zrh-08",
		"label": "Référence ZRH-08",
		"distinguishingAttributes": {
			"reference": "ZRH-08",
			"Cadence": "1440 coups/min",
			"Masse": "1.33 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZRH-08. La ZRH-08 possède course 137 mm et cadence 1 440 coups/min, contre 102 mm et 2 160 coups/min pour la ZRH-06. Les deux acceptent la queue 0,401 pouce et annoncent 1,33 kg. La capacité de rivetage du tableau dépend de la matière ; elle ne se déduit pas de la seule cadence.",
		"verifiedFacts": [
			"Queue de burin : 0,401 pouce (10,2 mm).",
			"Course : 137 mm.",
			"Cadence : 1 440 coups/min.",
			"Longueur : 280 mm.",
			"Masse : 1,33 kg."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Queue de burin",
			"value": "0,401 pouce (10,2 mm)",
			"evidenceIds": [
				"marteau-a-river-zipp-zrh-08-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "137 mm",
			"evidenceIds": [
				"marteau-a-river-zipp-zrh-08-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "1 440 coups/min",
			"evidenceIds": [
				"marteau-a-river-zipp-zrh-08-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "280 mm",
			"evidenceIds": [
				"marteau-a-river-zipp-zrh-08-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,33 kg",
			"evidenceIds": [
				"marteau-a-river-zipp-zrh-08-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p91",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=91",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 91",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "marteau-a-river-zipp-zrh-08-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=91",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZRH-08 possède course 137 mm et cadence 1 440 coups/min, contre 102 mm et 2 160 coups/min pour la ZRH-06. Les deux acceptent la queue 0,401 pouce et annoncent 1,33 kg. La capacité de rivetage du tableau dépend de la matière ; elle ne se déduit pas de la seule cadence."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p91"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p91"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p91"
		],
		"editorial": [
			"marteau-a-river-zipp-zrh-08-reserved-20261103-1"
		],
		"specifications": [
			"marteau-a-river-zipp-zrh-08-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
