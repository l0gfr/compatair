import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zag9060an",
	"slug": "meuleuse-zipp-zag9060an",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZAG9060AN",
	"brand": "ZIPP",
	"model": "ZAG9060AN",
	"mpn": "ZAG9060AN",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zag9060an.webp",
		"alt": "Repères techniques : ZIPP ZAG9060AN",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zag9060an",
		"label": "Référence ZAG9060AN",
		"distinguishingAttributes": {
			"reference": "ZAG9060AN",
			"Vitesse à vide": "5900 tr/min",
			"Masse": "4.32 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAG9060AN. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 5900 tr/min. Masse : 4.32 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 5900 tr/min.",
			"Masse : 4.32 kg.",
			"Référence constructeur : ZAG9060AN."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "5900 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p161"
			]
		},
		{
			"label": "Masse",
			"value": "4.32 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p161"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAG9060AN",
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
			"value": "1 900 L/min",
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
