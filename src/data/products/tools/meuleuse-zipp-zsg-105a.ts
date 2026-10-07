import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zsg-105a",
	"slug": "meuleuse-zipp-zsg-105a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZSG-105A",
	"brand": "ZIPP",
	"model": "ZSG-105A",
	"mpn": "ZSG-105A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zsg-105a.webp",
		"alt": "Repères techniques : ZIPP ZSG-105A",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zsg-105a",
		"label": "Référence ZSG-105A",
		"distinguishingAttributes": {
			"reference": "ZSG-105A",
			"Vitesse à vide": "7600 tr/min",
			"Masse": "1.27 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZSG-105A. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 7600 tr/min. Masse : 1.27 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 7600 tr/min.",
			"Masse : 1.27 kg.",
			"Référence constructeur : ZSG-105A."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "7600 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p164"
			]
		},
		{
			"label": "Masse",
			"value": "1.27 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p164"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZSG-105A",
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
