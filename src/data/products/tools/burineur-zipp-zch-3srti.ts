import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zch-3srti",
	"slug": "burineur-zipp-zch-3srti",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZCH-3SRTI",
	"brand": "ZIPP",
	"model": "ZCH-3SRTI",
	"mpn": "ZCH-3SRTI",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-zipp-zch-3srti.webp",
		"alt": "Repères techniques : ZIPP ZCH-3SRTI",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zch-3srti",
		"label": "Référence ZCH-3SRTI",
		"distinguishingAttributes": {
			"reference": "ZCH-3SRTI",
			"Cadence": "1900 coups/min",
			"Masse": "9.54 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZCH-3SRTI. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 1900 coups/min. Masse : 9.54 kg.",
		"verifiedFacts": [
			"Cadence : 1900 coups/min.",
			"Masse : 9.54 kg.",
			"Référence constructeur : ZCH-3SRTI."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "1900 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p178"
			]
		},
		{
			"label": "Masse",
			"value": "9.54 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p178"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZCH-3SRTI",
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
			"value": "900 L/min",
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
