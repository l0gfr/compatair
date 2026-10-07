import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-zipp-ziw818l",
	"slug": "cle-a-chocs-zipp-ziw818l",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ZIPP ZIW818L",
	"brand": "ZIPP",
	"model": "ZIW818L",
	"mpn": "ZIW818L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-zipp-ziw818l.webp",
		"alt": "Repères techniques : ZIPP ZIW818L",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-ziw818l",
		"label": "Référence ZIW818L",
		"distinguishingAttributes": {
			"reference": "ZIW818L",
			"Vitesse à vide": "4500 tr/min",
			"Masse": "6.3 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZIW818L. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 4500 tr/min. Masse : 6.3 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 4500 tr/min.",
			"Masse : 6.3 kg.",
			"Référence constructeur : ZIW818L."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4500 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p5"
			]
		},
		{
			"label": "Masse",
			"value": "6.3 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p5"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZIW818L",
			"evidenceIds": [
				"october-b-zipp-tools-p5"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p5"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "320 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p5"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 5",
			"evidenceIds": [
				"october-b-zipp-tools-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p5",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=5",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p5"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p5"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p5"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
