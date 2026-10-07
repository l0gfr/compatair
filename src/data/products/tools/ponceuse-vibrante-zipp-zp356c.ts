import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-zipp-zp356c",
	"slug": "ponceuse-vibrante-zipp-zp356c",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "ZIPP ZP356C",
	"brand": "ZIPP",
	"model": "ZP356C",
	"mpn": "ZP356C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-zipp-zp356c.webp",
		"alt": "Repères techniques : ZIPP ZP356C",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp356c",
		"label": "Référence ZP356C",
		"distinguishingAttributes": {
			"reference": "ZP356C",
			"Vitesse à vide": "8500 tr/min",
			"Masse": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP356C. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 8500 tr/min. Masse : 1.2 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 8500 tr/min.",
			"Masse : 1.2 kg.",
			"Référence constructeur : ZP356C."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8500 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p148"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p148"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP356C",
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
			"label": "Consommation hors calcul, pression non établie",
			"value": "45,307 L/min",
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
