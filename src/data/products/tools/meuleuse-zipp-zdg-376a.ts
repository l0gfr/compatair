import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zdg-376a",
	"slug": "meuleuse-zipp-zdg-376a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZDG-376A",
	"brand": "ZIPP",
	"model": "ZDG-376A",
	"mpn": "ZDG-376A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zdg-376a.webp",
		"alt": "Repères techniques : ZIPP ZDG-376A",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zdg-376a",
		"label": "Référence ZDG-376A",
		"distinguishingAttributes": {
			"reference": "ZDG-376A",
			"Masse": "0.7 kg",
			"Référence constructeur": "ZDG-376A"
		}
	},
	"editorial": {
		"overview": "ZIPP ZDG-376A. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Masse : 0.7 kg. Référence constructeur : ZDG-376A.",
		"verifiedFacts": [
			"Masse : 0.7 kg.",
			"Référence constructeur : ZDG-376A.",
			"Vitesse à vide : 3600 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZDG-376A",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3600 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "104,772 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 114",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p114",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=114",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 114",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p114"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p114"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p114"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
