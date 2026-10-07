import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zvg5120-bp",
	"slug": "meuleuse-zipp-zvg5120-bp",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZVG5120-BP",
	"brand": "ZIPP",
	"model": "ZVG5120-BP",
	"mpn": "ZVG5120-BP",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zvg5120-bp.webp",
		"alt": "Repères techniques : ZIPP ZVG5120-BP",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zvg5120-bp",
		"label": "Référence ZVG5120-BP",
		"distinguishingAttributes": {
			"reference": "ZVG5120-BP",
			"Référence constructeur": "ZVG5120-BP",
			"Configuration publiée": "1.4HP M14 x 2.0P ZVG784-BC 2.0HP 5/8-11UNC"
		}
	},
	"editorial": {
		"overview": "ZIPP ZVG5120-BP. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Référence constructeur : ZVG5120-BP. Configuration publiée : 1.4HP M14 x 2.0P ZVG784-BC 2.0HP 5/8-11UNC.",
		"verifiedFacts": [
			"Référence constructeur : ZVG5120-BP.",
			"Configuration publiée : 1.4HP M14 x 2.0P ZVG784-BC 2.0HP 5/8-11UNC."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZVG5120-BP",
			"evidenceIds": [
				"october-b-zipp-tools-p163"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "1.4HP M14 x 2.0P ZVG784-BC 2.0HP 5/8-11UNC",
			"evidenceIds": [
				"october-b-zipp-tools-p163"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p163"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 163",
			"evidenceIds": [
				"october-b-zipp-tools-p163"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p163",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=163",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 163",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p163"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p163"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p163"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
