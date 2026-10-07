import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-zipp-zat3000cmplt",
	"slug": "boulonneuse-zipp-zat3000cmplt",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "ZIPP ZAT3000CMPLT",
	"brand": "ZIPP",
	"model": "ZAT3000CMPLT",
	"mpn": "ZAT3000CMPLT",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-zipp-zat3000cmplt.webp",
		"alt": "Repères techniques : ZIPP ZAT3000CMPLT",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zat3000cmplt",
		"label": "Référence ZAT3000CMPLT",
		"distinguishingAttributes": {
			"reference": "ZAT3000CMPLT",
			"Masse": "10.3 kg",
			"Référence constructeur": "ZAT3000CMPLT"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAT3000CMPLT. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Masse : 10.3 kg. Référence constructeur : ZAT3000CMPLT.",
		"verifiedFacts": [
			"Masse : 10.3 kg.",
			"Référence constructeur : ZAT3000CMPLT."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "10.3 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p39"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAT3000CMPLT",
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
