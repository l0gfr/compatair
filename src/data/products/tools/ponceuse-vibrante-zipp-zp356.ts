import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-zipp-zp356",
	"slug": "ponceuse-vibrante-zipp-zp356",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "ZIPP ZP356",
	"brand": "ZIPP",
	"model": "ZP356",
	"mpn": "ZP356",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-zipp-zp356.webp",
		"alt": "Repères techniques : ZIPP ZP356",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp356",
		"label": "Référence ZP356",
		"distinguishingAttributes": {
			"reference": "ZP356",
			"Référence constructeur": "ZP356",
			"Configuration publiée": "/ ZP356A ZP356C ZP356S"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP356. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Référence constructeur : ZP356. Configuration publiée : / ZP356A ZP356C ZP356S.",
		"verifiedFacts": [
			"Référence constructeur : ZP356.",
			"Configuration publiée : / ZP356A ZP356C ZP356S."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZP356",
			"evidenceIds": [
				"october-b-zipp-tools-p148"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "/ ZP356A ZP356C ZP356S",
			"evidenceIds": [
				"october-b-zipp-tools-p148"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p148"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 148",
			"evidenceIds": [
				"october-b-zipp-tools-p148"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p148",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=148",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 148",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p148"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p148"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p148"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
