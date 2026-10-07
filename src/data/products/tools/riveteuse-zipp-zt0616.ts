import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zt0616",
	"slug": "riveteuse-zipp-zt0616",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZT0616",
	"brand": "ZIPP",
	"model": "ZT0616",
	"mpn": "ZT0616",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zt0616.webp",
		"alt": "Repères techniques : ZIPP ZT0616",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zt0616",
		"label": "Référence ZT0616",
		"distinguishingAttributes": {
			"reference": "ZT0616",
			"Masse": "1.4 kg",
			"Référence constructeur": "ZT0616"
		}
	},
	"editorial": {
		"overview": "ZIPP ZT0616. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Masse : 1.4 kg. Référence constructeur : ZT0616.",
		"verifiedFacts": [
			"Masse : 1.4 kg.",
			"Référence constructeur : ZT0616."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.4 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p50"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZT0616",
			"evidenceIds": [
				"october-b-zipp-tools-p50"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Model Traction Power Stroke Length Net Weight Air Pressure Min. Hose Size Noise Level Vibration Equipped",
			"evidenceIds": [
				"october-b-zipp-tools-p50"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 50",
			"evidenceIds": [
				"october-b-zipp-tools-p50"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p50",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=50",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 50",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p50"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p50"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p50"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
