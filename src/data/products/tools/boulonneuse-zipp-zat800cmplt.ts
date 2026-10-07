import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-zipp-zat800cmplt",
	"slug": "boulonneuse-zipp-zat800cmplt",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "ZIPP ZAT800CMPLT",
	"brand": "ZIPP",
	"model": "ZAT800CMPLT",
	"mpn": "ZAT800CMPLT",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-zipp-zat800cmplt.webp",
		"alt": "Repères techniques : ZIPP ZAT800CMPLT",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zat800cmplt",
		"label": "Référence ZAT800CMPLT",
		"distinguishingAttributes": {
			"reference": "ZAT800CMPLT",
			"Masse": "5.4 kg",
			"Référence constructeur": "ZAT800CMPLT"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAT800CMPLT. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Masse : 5.4 kg. Référence constructeur : ZAT800CMPLT.",
		"verifiedFacts": [
			"Masse : 5.4 kg.",
			"Référence constructeur : ZAT800CMPLT."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "5.4 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p39"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAT800CMPLT",
			"evidenceIds": [
				"october-b-zipp-tools-p39"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p39"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 39",
			"evidenceIds": [
				"october-b-zipp-tools-p39"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p39",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=39",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p39"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p39"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p39"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
