import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zpd412",
	"slug": "meuleuse-zipp-zpd412",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZPD412",
	"brand": "ZIPP",
	"model": "ZPD412",
	"mpn": "ZPD412",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zpd412.webp",
		"alt": "Repères techniques : ZIPP ZPD412",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zpd412",
		"label": "Référence ZPD412",
		"distinguishingAttributes": {
			"reference": "ZPD412",
			"Vitesse à vide": "70000 tr/min",
			"Référence constructeur": "ZPD412"
		}
	},
	"editorial": {
		"overview": "ZIPP ZPD412. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 70000 tr/min. Référence constructeur : ZPD412.",
		"verifiedFacts": [
			"Vitesse à vide : 70000 tr/min.",
			"Référence constructeur : ZPD412."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "70000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p119"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZPD412",
			"evidenceIds": [
				"october-b-zipp-tools-p119"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Collet Size Free Speed Air Cons. Air Pressure Tool Dimension Tool Length Hose Length Net Weight",
			"evidenceIds": [
				"october-b-zipp-tools-p119"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 119",
			"evidenceIds": [
				"october-b-zipp-tools-p119"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p119",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=119",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 119",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p119"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p119"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p119"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
