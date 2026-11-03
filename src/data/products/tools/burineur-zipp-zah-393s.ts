import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zah-393s",
	"slug": "burineur-zipp-zah-393s",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZAH-393S",
	"brand": "ZIPP",
	"model": "ZAH-393S",
	"mpn": "ZAH-393S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 140,
		"typical": 140,
		"max": 140
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-zipp-zah-393s.webp",
		"alt": "Repères techniques : ZIPP ZAH-393S",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zah-393s",
		"label": "Référence ZAH-393S",
		"distinguishingAttributes": {
			"reference": "ZAH-393S",
			"Cadence": "3000 coups/min",
			"Masse": "1.8 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAH-393S. La ZAH-393S a une course 66 mm à 3 000 coups/min. La ZAH-394S garde la queue 0,401 pouce mais passe à 89 mm et 2 100 coups/min, pour 2,1 kg contre 1,8 kg ici. La consommation moyenne de 140 L/min ne décrit pas la pointe en charge.",
		"verifiedFacts": [
			"Queue de burin : 0,401 pouce (10,2 mm).",
			"Course : 66 mm.",
			"Cadence : 3 000 coups/min.",
			"Masse : 1,8 kg.",
			"Consommation moyenne : 140 L/min."
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
				"burineur-zipp-zah-393s-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "66 mm",
			"evidenceIds": [
				"burineur-zipp-zah-393s-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "3 000 coups/min",
			"evidenceIds": [
				"burineur-zipp-zah-393s-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,8 kg",
			"evidenceIds": [
				"burineur-zipp-zah-393s-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne",
			"value": "140 L/min",
			"evidenceIds": [
				"burineur-zipp-zah-393s-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p89",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=89",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 89",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "burineur-zipp-zah-393s-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=89",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZAH-393S a une course 66 mm à 3 000 coups/min. La ZAH-394S garde la queue 0,401 pouce mais passe à 89 mm et 2 100 coups/min, pour 2,1 kg contre 1,8 kg ici. La consommation moyenne de 140 L/min ne décrit pas la pointe en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p89"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p89"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p89"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p89"
		],
		"editorial": [
			"burineur-zipp-zah-393s-reserved-20261103-1"
		],
		"specifications": [
			"burineur-zipp-zah-393s-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation moyenne : 140 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
