import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-zipp-zd2335l",
	"slug": "perceuse-zipp-zd2335l",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "ZIPP ZD2335L",
	"brand": "ZIPP",
	"model": "ZD2335L",
	"mpn": "ZD2335L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-zipp-zd2335l.webp",
		"alt": "Repères techniques : ZIPP ZD2335L",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zd2335l",
		"label": "Référence ZD2335L",
		"distinguishingAttributes": {
			"reference": "ZD2335L",
			"Vitesse à vide": "3600 tr/min",
			"Masse": "1 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZD2335L. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 3600 tr/min. Masse : 1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 3600 tr/min.",
			"Masse : 1 kg.",
			"Référence constructeur : ZD2335L."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "3600 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p111"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p111"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZD2335L",
			"evidenceIds": [
				"october-b-zipp-tools-p111"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p111"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 111",
			"evidenceIds": [
				"october-b-zipp-tools-p111"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p111",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=111",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 111",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p111"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p111"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p111"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
