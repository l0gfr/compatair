import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-zipp-zap-882",
	"slug": "polisseuse-zipp-zap-882",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "ZIPP ZAP-882",
	"brand": "ZIPP",
	"model": "ZAP-882",
	"mpn": "ZAP-882",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-zipp-zap-882.webp",
		"alt": "Repères techniques : ZIPP ZAP-882",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zap-882",
		"label": "Référence ZAP-882",
		"distinguishingAttributes": {
			"reference": "ZAP-882",
			"Vitesse à vide": "2500 tr/min",
			"Masse": "1.7 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAP-882. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 2500 tr/min. Masse : 1.7 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 2500 tr/min.",
			"Masse : 1.7 kg.",
			"Référence constructeur : ZAP-882."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "2500 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p137"
			]
		},
		{
			"label": "Masse",
			"value": "1.7 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p137"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAP-882",
			"evidenceIds": [
				"october-b-zipp-tools-p137"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p137"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "107,604 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p137"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 137",
			"evidenceIds": [
				"october-b-zipp-tools-p137"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p137",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=137",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 137",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p137"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p137"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p137"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
