import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-zipp-zd2320",
	"slug": "perceuse-zipp-zd2320",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "ZIPP ZD2320",
	"brand": "ZIPP",
	"model": "ZD2320",
	"mpn": "ZD2320",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-zipp-zd2320.webp",
		"alt": "Repères techniques : ZIPP ZD2320",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zd2320",
		"label": "Référence ZD2320",
		"distinguishingAttributes": {
			"reference": "ZD2320",
			"Référence constructeur": "ZD2320",
			"Configuration publiée": "/ ZD2320L ZD2349 / ZD2349L ZD2340 / ZD2340L"
		}
	},
	"editorial": {
		"overview": "ZIPP ZD2320. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Référence constructeur : ZD2320. Configuration publiée : / ZD2320L ZD2349 / ZD2349L ZD2340 / ZD2340L.",
		"verifiedFacts": [
			"Référence constructeur : ZD2320.",
			"Configuration publiée : / ZD2320L ZD2349 / ZD2349L ZD2340 / ZD2340L."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZD2320",
			"evidenceIds": [
				"october-b-zipp-tools-p110"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "/ ZD2320L ZD2349 / ZD2349L ZD2340 / ZD2340L",
			"evidenceIds": [
				"october-b-zipp-tools-p110"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p110"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 110",
			"evidenceIds": [
				"october-b-zipp-tools-p110"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p110",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=110",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 110",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p110"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p110"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p110"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
