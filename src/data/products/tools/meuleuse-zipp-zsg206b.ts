import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zsg206b",
	"slug": "meuleuse-zipp-zsg206b",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZSG206B",
	"brand": "ZIPP",
	"model": "ZSG206B",
	"mpn": "ZSG206B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zsg206b.webp",
		"alt": "Repères techniques : ZIPP ZSG206B",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zsg206b",
		"label": "Référence ZSG206B",
		"distinguishingAttributes": {
			"reference": "ZSG206B",
			"Vitesse à vide": "6300 tr/min",
			"Masse": "1.48 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZSG206B. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 6300 tr/min. Masse : 1.48 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 6300 tr/min.",
			"Masse : 1.48 kg.",
			"Référence constructeur : ZSG206B."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "6300 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p164"
			]
		},
		{
			"label": "Masse",
			"value": "1.48 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p164"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZSG206B",
			"evidenceIds": [
				"october-b-zipp-tools-p164"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p164"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 164",
			"evidenceIds": [
				"october-b-zipp-tools-p164"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p164",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=164",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 164",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p164"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p164"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p164"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
