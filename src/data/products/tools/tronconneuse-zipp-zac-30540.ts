import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-zipp-zac-30540",
	"slug": "tronconneuse-zipp-zac-30540",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "ZIPP ZAC-30540",
	"brand": "ZIPP",
	"model": "ZAC-30540",
	"mpn": "ZAC-30540",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-zipp-zac-30540.webp",
		"alt": "Repères techniques : ZIPP ZAC-30540",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zac-30540",
		"label": "Référence ZAC-30540",
		"distinguishingAttributes": {
			"reference": "ZAC-30540",
			"Vitesse à vide": "14000 tr/min",
			"Masse": "1.4 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAC-30540. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 14000 tr/min. Masse : 1.4 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 14000 tr/min.",
			"Masse : 1.4 kg.",
			"Référence constructeur : ZAC-30540."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "14000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p122"
			]
		},
		{
			"label": "Masse",
			"value": "1.4 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p122"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAC-30540",
			"evidenceIds": [
				"october-b-zipp-tools-p122"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p122"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "116,099 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p122"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 122",
			"evidenceIds": [
				"october-b-zipp-tools-p122"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p122",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=122",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 122",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p122"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p122"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p122"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
