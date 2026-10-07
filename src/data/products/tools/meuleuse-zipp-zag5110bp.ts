import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zag5110bp",
	"slug": "meuleuse-zipp-zag5110bp",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZAG5110BP",
	"brand": "ZIPP",
	"model": "ZAG5110BP",
	"mpn": "ZAG5110BP",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zag5110bp.webp",
		"alt": "Repères techniques : ZIPP ZAG5110BP",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zag5110bp",
		"label": "Référence ZAG5110BP",
		"distinguishingAttributes": {
			"reference": "ZAG5110BP",
			"Vitesse à vide": "10900 tr/min",
			"Masse": "2.1 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAG5110BP. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 10900 tr/min. Masse : 2.1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 10900 tr/min.",
			"Masse : 2.1 kg.",
			"Référence constructeur : ZAG5110BP."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "10900 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p161"
			]
		},
		{
			"label": "Masse",
			"value": "2.1 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p161"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAG5110BP",
			"evidenceIds": [
				"october-b-zipp-tools-p161"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p161"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "950 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p161"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 161",
			"evidenceIds": [
				"october-b-zipp-tools-p161"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p161",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=161",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 161",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p161"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p161"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p161"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
