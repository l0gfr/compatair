import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zp321r",
	"slug": "meuleuse-zipp-zp321r",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZP321R",
	"brand": "ZIPP",
	"model": "ZP321R",
	"mpn": "ZP321R",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zp321r.webp",
		"alt": "Repères techniques : ZIPP ZP321R",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp321r",
		"label": "Référence ZP321R",
		"distinguishingAttributes": {
			"reference": "ZP321R",
			"Vitesse à vide": "10000 tr/min",
			"Masse": "1.4 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP321R. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 10000 tr/min. Masse : 1.4 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 10000 tr/min.",
			"Masse : 1.4 kg.",
			"Référence constructeur : ZP321R."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "10000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p123"
			]
		},
		{
			"label": "Masse",
			"value": "1.4 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p123"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP321R",
			"evidenceIds": [
				"october-b-zipp-tools-p123"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p123"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "99,109 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p123"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 123",
			"evidenceIds": [
				"october-b-zipp-tools-p123"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p123",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=123",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 123",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p123"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p123"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p123"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
