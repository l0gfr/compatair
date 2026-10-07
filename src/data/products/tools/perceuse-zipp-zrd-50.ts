import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-zipp-zrd-50",
	"slug": "perceuse-zipp-zrd-50",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "ZIPP ZRD-50",
	"brand": "ZIPP",
	"model": "ZRD-50",
	"mpn": "ZRD-50",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-zipp-zrd-50.webp",
		"alt": "Repères techniques : ZIPP ZRD-50",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zrd-50",
		"label": "Référence ZRD-50",
		"distinguishingAttributes": {
			"reference": "ZRD-50",
			"Cadence": "2300 coups/min",
			"Masse": "23 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZRD-50. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 2300 coups/min. Masse : 23 kg.",
		"verifiedFacts": [
			"Cadence : 2300 coups/min.",
			"Masse : 23 kg.",
			"Référence constructeur : ZRD-50."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "2300 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p182"
			]
		},
		{
			"label": "Masse",
			"value": "23 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p182"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZRD-50",
			"evidenceIds": [
				"october-b-zipp-tools-p182"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p182"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "2 600 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p182"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 182",
			"evidenceIds": [
				"october-b-zipp-tools-p182"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p182",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=182",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 182",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p182"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p182"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p182"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
