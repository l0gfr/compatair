import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zkj41s",
	"slug": "burineur-zipp-zkj41s",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZKJ41S",
	"brand": "ZIPP",
	"model": "ZKJ41S",
	"mpn": "ZKJ41S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-zipp-zkj41s.webp",
		"alt": "Repères techniques : ZIPP ZKJ41S",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zkj41s",
		"label": "Référence ZKJ41S",
		"distinguishingAttributes": {
			"reference": "ZKJ41S",
			"Cadence": "1000 coups/min",
			"Masse": "24.6 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZKJ41S. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 1000 coups/min. Masse : 24.6 kg.",
		"verifiedFacts": [
			"Cadence : 1000 coups/min.",
			"Masse : 24.6 kg.",
			"Référence constructeur : ZKJ41S."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "1000 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p179"
			]
		},
		{
			"label": "Masse",
			"value": "24.6 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p179"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZKJ41S",
			"evidenceIds": [
				"october-b-zipp-tools-p179"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended air pressure must equal or below @90psi (6.2 bar).",
			"evidenceIds": [
				"october-b-zipp-tools-p179"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "1 189 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p179"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 179",
			"evidenceIds": [
				"october-b-zipp-tools-p179"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p179",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=179",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 179",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p179"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p179"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p179"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
