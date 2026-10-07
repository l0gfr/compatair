import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-zipp-zp219",
	"slug": "tronconneuse-zipp-zp219",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "ZIPP ZP219",
	"brand": "ZIPP",
	"model": "ZP219",
	"mpn": "ZP219",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-zipp-zp219.webp",
		"alt": "Repères techniques : ZIPP ZP219",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp219",
		"label": "Référence ZP219",
		"distinguishingAttributes": {
			"reference": "ZP219",
			"Vitesse à vide": "2600 tr/min",
			"Masse": "1 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP219. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 2600 tr/min. Masse : 1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 2600 tr/min.",
			"Masse : 1 kg.",
			"Référence constructeur : ZP219."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "2600 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p120"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p120"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP219",
			"evidenceIds": [
				"october-b-zipp-tools-p120"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p120"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "104,772 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p120"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 120",
			"evidenceIds": [
				"october-b-zipp-tools-p120"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p120",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=120",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 120",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p120"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p120"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p120"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
