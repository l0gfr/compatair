import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-zipp-zp338",
	"slug": "ponceuse-vibrante-zipp-zp338",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "ZIPP ZP338",
	"brand": "ZIPP",
	"model": "ZP338",
	"mpn": "ZP338",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-zipp-zp338.webp",
		"alt": "Repères techniques : ZIPP ZP338",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp338",
		"label": "Référence ZP338",
		"distinguishingAttributes": {
			"reference": "ZP338",
			"Vitesse à vide": "10000 tr/min",
			"Masse": "0.7 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP338. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 10000 tr/min. Masse : 0.7 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 10000 tr/min.",
			"Masse : 0.7 kg.",
			"Référence constructeur : ZP338."
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
				"october-b-zipp-tools-p147"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p147"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP338",
			"evidenceIds": [
				"october-b-zipp-tools-p147"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p147"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "45,307 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p147"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 147",
			"evidenceIds": [
				"october-b-zipp-tools-p147"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p147",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=147",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 147",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p147"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p147"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p147"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
