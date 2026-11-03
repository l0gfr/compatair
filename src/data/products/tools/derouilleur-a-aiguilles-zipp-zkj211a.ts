import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-zipp-zkj211a",
	"slug": "derouilleur-a-aiguilles-zipp-zkj211a",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "ZIPP ZKJ211A",
	"brand": "ZIPP",
	"model": "ZKJ211A",
	"mpn": "ZKJ211A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-zipp-zkj211a.webp",
		"alt": "Repères techniques : ZIPP ZKJ211A",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zkj211a",
		"label": "Référence ZKJ211A",
		"distinguishingAttributes": {
			"reference": "ZKJ211A",
			"Cadence": "3700 coups/min",
			"Masse": "2.8 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZKJ211A. La ZKJ211A est la version Vacuum Type de la famille droite ; la ligne laisse le nombre et les dimensions d’aiguilles indéterminés. La ZKJ211-2B-29 documente 29 aiguilles de 2 × 180 mm. La ZKJ221A est à poignée pistolet : un carter d’aspiration ne définit ni le jeu d’aiguilles livré, ni une consommation maximale.",
		"verifiedFacts": [
			"Configuration : ZKJ211A Vacuum Type.",
			"Cadence : 3 700 coups/min.",
			"Course piston : 33 mm.",
			"Longueur : 375 mm.",
			"Masse : 2,8 kg.",
			"Consommation moyenne documentaire : 85 L/min ; pression de mesure non explicite."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "ZKJ211A Vacuum Type",
			"evidenceIds": [
				"derouilleur-a-aiguilles-zipp-zkj211a-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "3 700 coups/min",
			"evidenceIds": [
				"derouilleur-a-aiguilles-zipp-zkj211a-reserved-20261103-1"
			]
		},
		{
			"label": "Course piston",
			"value": "33 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-zipp-zkj211a-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "375 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-zipp-zkj211a-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,8 kg",
			"evidenceIds": [
				"derouilleur-a-aiguilles-zipp-zkj211a-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne documentaire",
			"value": "85 L/min ; pression de mesure non explicite",
			"evidenceIds": [
				"derouilleur-a-aiguilles-zipp-zkj211a-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p166",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=166",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 166",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "derouilleur-a-aiguilles-zipp-zkj211a-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=166",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZKJ211A est la version Vacuum Type de la famille droite ; la ligne laisse le nombre et les dimensions d’aiguilles indéterminés. La ZKJ211-2B-29 documente 29 aiguilles de 2 × 180 mm. La ZKJ221A est à poignée pistolet : un carter d’aspiration ne définit ni le jeu d’aiguilles livré, ni une consommation maximale."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p166"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p166"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p166"
		],
		"editorial": [
			"derouilleur-a-aiguilles-zipp-zkj211a-reserved-20261103-1"
		],
		"specifications": [
			"derouilleur-a-aiguilles-zipp-zkj211a-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
