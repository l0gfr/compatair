import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zp319",
	"slug": "meuleuse-zipp-zp319",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZP319",
	"brand": "ZIPP",
	"model": "ZP319",
	"mpn": "ZP319",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zp319.webp",
		"alt": "Repères techniques : ZIPP ZP319",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp319",
		"label": "Référence ZP319",
		"distinguishingAttributes": {
			"reference": "ZP319",
			"Vitesse à vide": "18000 tr/min",
			"Masse": "0.7 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP319. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 18000 tr/min. Masse : 0.7 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 18000 tr/min.",
			"Masse : 0.7 kg.",
			"Référence constructeur : ZP319."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "18000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP319",
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
