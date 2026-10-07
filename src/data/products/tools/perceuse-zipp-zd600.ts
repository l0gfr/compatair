import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-zipp-zd600",
	"slug": "perceuse-zipp-zd600",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "ZIPP ZD600",
	"brand": "ZIPP",
	"model": "ZD600",
	"mpn": "ZD600",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-zipp-zd600.webp",
		"alt": "Repères techniques : ZIPP ZD600",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zd600",
		"label": "Référence ZD600",
		"distinguishingAttributes": {
			"reference": "ZD600",
			"Référence constructeur": "ZD600",
			"Configuration publiée": "/ ZD600 / ZD900 0.7HP ZD3600 ZRD220 0.7HP"
		}
	},
	"editorial": {
		"overview": "ZIPP ZD600. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Référence constructeur : ZD600. Configuration publiée : / ZD600 / ZD900 0.7HP ZD3600 ZRD220 0.7HP.",
		"verifiedFacts": [
			"Référence constructeur : ZD600.",
			"Configuration publiée : / ZD600 / ZD900 0.7HP ZD3600 ZRD220 0.7HP."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZD600",
			"evidenceIds": [
				"october-b-zipp-tools-p105"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "/ ZD600 / ZD900 0.7HP ZD3600 ZRD220 0.7HP",
			"evidenceIds": [
				"october-b-zipp-tools-p105"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p105"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 105",
			"evidenceIds": [
				"october-b-zipp-tools-p105"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p105",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=105",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 105",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p105"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p105"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p105"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
