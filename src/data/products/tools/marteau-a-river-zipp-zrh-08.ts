import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-zipp-zrh-08",
	"slug": "marteau-a-river-zipp-zrh-08",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "ZIPP ZRH-08",
	"brand": "ZIPP",
	"model": "ZRH-08",
	"mpn": "ZRH-08",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-zipp-zrh-08.webp",
		"alt": "Repères techniques : ZIPP ZRH-08",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zrh-08",
		"label": "Référence ZRH-08",
		"distinguishingAttributes": {
			"reference": "ZRH-08",
			"Cadence": "1440 coups/min",
			"Masse": "1.33 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZRH-08. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 1440 coups/min. Masse : 1.33 kg.",
		"verifiedFacts": [
			"Cadence : 1440 coups/min.",
			"Masse : 1.33 kg.",
			"Référence constructeur : ZRH-08."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "1440 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p91"
			]
		},
		{
			"label": "Masse",
			"value": "1.33 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p91"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZRH-08",
			"evidenceIds": [
				"october-b-zipp-tools-p91"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p91"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "594,654 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p91"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 91",
			"evidenceIds": [
				"october-b-zipp-tools-p91"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p91",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=91",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 91",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p91"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p91"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p91"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
