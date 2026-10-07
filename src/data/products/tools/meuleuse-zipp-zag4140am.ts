import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zag4140am",
	"slug": "meuleuse-zipp-zag4140am",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZAG4140AM",
	"brand": "ZIPP",
	"model": "ZAG4140AM",
	"mpn": "ZAG4140AM",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zag4140am.webp",
		"alt": "Repères techniques : ZIPP ZAG4140AM",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zag4140am",
		"label": "Référence ZAG4140AM",
		"distinguishingAttributes": {
			"reference": "ZAG4140AM",
			"Référence constructeur": "ZAG4140AM",
			"Configuration publiée": "/ ZAG4140AM ZAG4140BF / ZAG4140BM ZAG7075AC"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAG4140AM. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Référence constructeur : ZAG4140AM. Configuration publiée : / ZAG4140AM ZAG4140BF / ZAG4140BM ZAG7075AC.",
		"verifiedFacts": [
			"Référence constructeur : ZAG4140AM.",
			"Configuration publiée : / ZAG4140AM ZAG4140BF / ZAG4140BM ZAG7075AC."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZAG4140AM",
			"evidenceIds": [
				"october-b-zipp-tools-p161"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "/ ZAG4140AM ZAG4140BF / ZAG4140BM ZAG7075AC",
			"evidenceIds": [
				"october-b-zipp-tools-p161"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p161"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 161",
			"evidenceIds": [
				"october-b-zipp-tools-p161"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p161",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=161",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 161",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p161"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p161"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p161"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
