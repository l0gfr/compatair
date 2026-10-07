import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zrg540",
	"slug": "riveteuse-zipp-zrg540",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZRG540",
	"brand": "ZIPP",
	"model": "ZRG540",
	"mpn": "ZRG540",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zrg540.webp",
		"alt": "Repères techniques : ZIPP ZRG540",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zrg540",
		"label": "Référence ZRG540",
		"distinguishingAttributes": {
			"reference": "ZRG540",
			"Masse": "2.04 kg",
			"Référence constructeur": "ZRG540"
		}
	},
	"editorial": {
		"overview": "ZIPP ZRG540. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Masse : 2.04 kg. Référence constructeur : ZRG540.",
		"verifiedFacts": [
			"Masse : 2.04 kg.",
			"Référence constructeur : ZRG540."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "2.04 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p51"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZRG540",
			"evidenceIds": [
				"october-b-zipp-tools-p51"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Model Air Pressure",
			"evidenceIds": [
				"october-b-zipp-tools-p51"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 51",
			"evidenceIds": [
				"october-b-zipp-tools-p51"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p51",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=51",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 51",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p51"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p51"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p51"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
