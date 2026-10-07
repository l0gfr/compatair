import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-zipp-zrc-361r",
	"slug": "tronconneuse-zipp-zrc-361r",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "ZIPP ZRC-361R",
	"brand": "ZIPP",
	"model": "ZRC-361R",
	"mpn": "ZRC-361R",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-zipp-zrc-361r.webp",
		"alt": "Repères techniques : ZIPP ZRC-361R",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zrc-361r",
		"label": "Référence ZRC-361R",
		"distinguishingAttributes": {
			"reference": "ZRC-361R",
			"Vitesse à vide": "18000 tr/min",
			"Masse": "0.9 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZRC-361R. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 18000 tr/min. Masse : 0.9 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 18000 tr/min.",
			"Masse : 0.9 kg.",
			"Référence constructeur : ZRC-361R."
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
				"october-b-zipp-tools-p125"
			]
		},
		{
			"label": "Masse",
			"value": "0.9 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p125"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZRC-361R",
			"evidenceIds": [
				"october-b-zipp-tools-p125"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p125"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "101,941 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p125"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 125",
			"evidenceIds": [
				"october-b-zipp-tools-p125"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p125",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=125",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 125",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p125"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p125"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p125"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
