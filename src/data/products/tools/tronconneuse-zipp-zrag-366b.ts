import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-zipp-zrag-366b",
	"slug": "tronconneuse-zipp-zrag-366b",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "ZIPP ZRAG-366B",
	"brand": "ZIPP",
	"model": "ZRAG-366B",
	"mpn": "ZRAG-366B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-zipp-zrag-366b.webp",
		"alt": "Repères techniques : ZIPP ZRAG-366B",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zrag-366b",
		"label": "Référence ZRAG-366B",
		"distinguishingAttributes": {
			"reference": "ZRAG-366B",
			"Masse": "1.1 kg",
			"Référence constructeur": "ZRAG-366B"
		}
	},
	"editorial": {
		"overview": "ZIPP ZRAG-366B. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Masse : 1.1 kg. Référence constructeur : ZRAG-366B.",
		"verifiedFacts": [
			"Masse : 1.1 kg.",
			"Référence constructeur : ZRAG-366B."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.1 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p125"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZRAG-366B",
			"evidenceIds": [
				"october-b-zipp-tools-p125"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p125"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "101,941 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p125"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 125",
			"evidenceIds": [
				"october-b-zipp-tools-p125"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p125",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=125",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 125",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p125"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p125"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p125"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
