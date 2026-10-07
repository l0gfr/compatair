import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zch-2srti",
	"slug": "burineur-zipp-zch-2srti",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZCH-2SRTI",
	"brand": "ZIPP",
	"model": "ZCH-2SRTI",
	"mpn": "ZCH-2SRTI",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-zipp-zch-2srti.webp",
		"alt": "Repères techniques : ZIPP ZCH-2SRTI",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zch-2srti",
		"label": "Référence ZCH-2SRTI",
		"distinguishingAttributes": {
			"reference": "ZCH-2SRTI",
			"Cadence": "2150 coups/min",
			"Masse": "8.71 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZCH-2SRTI. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 2150 coups/min. Masse : 8.71 kg.",
		"verifiedFacts": [
			"Cadence : 2150 coups/min.",
			"Masse : 8.71 kg.",
			"Référence constructeur : ZCH-2SRTI."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "2150 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p178"
			]
		},
		{
			"label": "Masse",
			"value": "8.71 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p178"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZCH-2SRTI",
			"evidenceIds": [
				"october-b-zipp-tools-p178"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p178"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "850 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p178"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 178",
			"evidenceIds": [
				"october-b-zipp-tools-p178"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p178",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=178",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 178",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p178"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p178"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p178"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
