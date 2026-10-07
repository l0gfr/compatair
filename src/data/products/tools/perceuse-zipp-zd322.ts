import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-zipp-zd322",
	"slug": "perceuse-zipp-zd322",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "ZIPP ZD322",
	"brand": "ZIPP",
	"model": "ZD322",
	"mpn": "ZD322",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-zipp-zd322.webp",
		"alt": "Repères techniques : ZIPP ZD322",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zd322",
		"label": "Référence ZD322",
		"distinguishingAttributes": {
			"reference": "ZD322",
			"Vitesse à vide": "2600 tr/min",
			"Masse": "0.9 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZD322. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 2600 tr/min. Masse : 0.9 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 2600 tr/min.",
			"Masse : 0.9 kg.",
			"Référence constructeur : ZD322."
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
				"october-b-zipp-tools-p106"
			]
		},
		{
			"label": "Masse",
			"value": "0.9 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p106"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZD322",
			"evidenceIds": [
				"october-b-zipp-tools-p106"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p106"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "104,772 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p106"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 106",
			"evidenceIds": [
				"october-b-zipp-tools-p106"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p106",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=106",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p106"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p106"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p106"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
