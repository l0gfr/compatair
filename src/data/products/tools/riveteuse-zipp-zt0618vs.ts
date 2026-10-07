import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zt0618vs",
	"slug": "riveteuse-zipp-zt0618vs",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZT0618VS",
	"brand": "ZIPP",
	"model": "ZT0618VS",
	"mpn": "ZT0618VS",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zt0618vs.webp",
		"alt": "Repères techniques : ZIPP ZT0618VS",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zt0618vs",
		"label": "Référence ZT0618VS",
		"distinguishingAttributes": {
			"reference": "ZT0618VS",
			"Masse": "1.55 kg",
			"Référence constructeur": "ZT0618VS"
		}
	},
	"editorial": {
		"overview": "ZIPP ZT0618VS. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Masse : 1.55 kg. Référence constructeur : ZT0618VS.",
		"verifiedFacts": [
			"Masse : 1.55 kg.",
			"Référence constructeur : ZT0618VS."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.55 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p41"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZT0618VS",
			"evidenceIds": [
				"october-b-zipp-tools-p41"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "DO NOT apply air pressure over 110 psi / 7.5 bar to these tools.",
			"evidenceIds": [
				"october-b-zipp-tools-p41"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 41",
			"evidenceIds": [
				"october-b-zipp-tools-p41"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p41",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=41",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 41",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p41"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p41"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p41"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
