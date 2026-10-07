import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-zipp-zd323p",
	"slug": "perceuse-zipp-zd323p",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "ZIPP ZD323P",
	"brand": "ZIPP",
	"model": "ZD323P",
	"mpn": "ZD323P",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-zipp-zd323p.webp",
		"alt": "Repères techniques : ZIPP ZD323P",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zd323p",
		"label": "Référence ZD323P",
		"distinguishingAttributes": {
			"reference": "ZD323P",
			"Vitesse à vide": "900 tr/min",
			"Masse": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZD323P. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 900 tr/min. Masse : 1.2 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 900 tr/min.",
			"Masse : 1.2 kg.",
			"Référence constructeur : ZD323P."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "900 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p106"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p106"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZD323P",
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
