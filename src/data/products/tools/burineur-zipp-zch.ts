import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zch",
	"slug": "burineur-zipp-zch",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZCH",
	"brand": "ZIPP",
	"model": "ZCH",
	"mpn": "ZCH",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-zipp-zch.webp",
		"alt": "Repères techniques : ZIPP ZCH",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zch",
		"label": "Référence ZCH",
		"distinguishingAttributes": {
			"reference": "ZCH",
			"Référence constructeur": "ZCH",
			"Configuration publiée": "2, 3, and 4\" stroke chipper has a durable 4 bolt D lInlet 3/8\" with bushing, 7/8\" with out bushing"
		}
	},
	"editorial": {
		"overview": "ZIPP ZCH. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Référence constructeur : ZCH. Configuration publiée : 2, 3, and 4\" stroke chipper has a durable 4 bolt D lInlet 3/8\" with bushing, 7/8\" with out bushing.",
		"verifiedFacts": [
			"Référence constructeur : ZCH.",
			"Configuration publiée : 2, 3, and 4\" stroke chipper has a durable 4 bolt D lInlet 3/8\" with bushing, 7/8\" with out bushing."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZCH",
			"evidenceIds": [
				"october-b-zipp-tools-p180"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "2, 3, and 4\" stroke chipper has a durable 4 bolt D lInlet 3/8\" with bushing, 7/8\" with out bushing",
			"evidenceIds": [
				"october-b-zipp-tools-p180"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "DO NOT apply air pressure over 100 psi / 7 bar to these tools.",
			"evidenceIds": [
				"october-b-zipp-tools-p180"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 180",
			"evidenceIds": [
				"october-b-zipp-tools-p180"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p180",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=180",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 180",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p180"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p180"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p180"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
