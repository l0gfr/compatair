import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-zipp-zd2340",
	"slug": "perceuse-zipp-zd2340",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "ZIPP ZD2340",
	"brand": "ZIPP",
	"model": "ZD2340",
	"mpn": "ZD2340",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-zipp-zd2340.webp",
		"alt": "Repères techniques : ZIPP ZD2340",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zd2340",
		"label": "Référence ZD2340",
		"distinguishingAttributes": {
			"reference": "ZD2340",
			"Vitesse à vide": "4000 tr/min",
			"Masse": "0.64 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZD2340. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 4000 tr/min. Masse : 0.64 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 4000 tr/min.",
			"Masse : 0.64 kg.",
			"Référence constructeur : ZD2340."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p110"
			]
		},
		{
			"label": "Masse",
			"value": "0.64 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p110"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZD2340",
			"evidenceIds": [
				"october-b-zipp-tools-p110"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p110"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 110",
			"evidenceIds": [
				"october-b-zipp-tools-p110"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p110",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=110",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 110",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p110"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p110"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p110"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
