import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zkj311",
	"slug": "burineur-zipp-zkj311",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZKJ311",
	"brand": "ZIPP",
	"model": "ZKJ311",
	"mpn": "ZKJ311",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-zipp-zkj311.webp",
		"alt": "Repères techniques : ZIPP ZKJ311",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zkj311",
		"label": "Référence ZKJ311",
		"distinguishingAttributes": {
			"reference": "ZKJ311",
			"Cadence": "7000 coups/min",
			"Masse": "2.3 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZKJ311. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 7000 coups/min. Masse : 2.3 kg.",
		"verifiedFacts": [
			"Cadence : 7000 coups/min.",
			"Masse : 2.3 kg.",
			"Référence constructeur : ZKJ311."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "7000 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p172"
			]
		},
		{
			"label": "Masse",
			"value": "2.3 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p172"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZKJ311",
			"evidenceIds": [
				"october-b-zipp-tools-p172"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended air pressure must equal or below @90psi (6.2 bar).",
			"evidenceIds": [
				"october-b-zipp-tools-p172"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "94 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p172"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 172",
			"evidenceIds": [
				"october-b-zipp-tools-p172"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p172",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=172",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 172",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p172"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p172"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p172"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
