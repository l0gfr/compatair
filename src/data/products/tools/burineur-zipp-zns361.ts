import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zns361",
	"slug": "burineur-zipp-zns361",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZNS361",
	"brand": "ZIPP",
	"model": "ZNS361",
	"mpn": "ZNS361",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-zipp-zns361.webp",
		"alt": "Repères techniques : ZIPP ZNS361",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zns361",
		"label": "Référence ZNS361",
		"distinguishingAttributes": {
			"reference": "ZNS361",
			"Cadence": "4000 coups/min",
			"Masse": "2.6 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZNS361. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 4000 coups/min. Masse : 2.6 kg.",
		"verifiedFacts": [
			"Cadence : 4000 coups/min.",
			"Masse : 2.6 kg.",
			"Référence constructeur : ZNS361."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "4000 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p169"
			]
		},
		{
			"label": "Masse",
			"value": "2.6 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p169"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZNS361",
			"evidenceIds": [
				"october-b-zipp-tools-p169"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended air pressure must equal or below @90psi (6.2 bar). lAir Inlet Size: 1/4 inch-NPT/PT",
			"evidenceIds": [
				"october-b-zipp-tools-p169"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "392 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p169"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 169",
			"evidenceIds": [
				"october-b-zipp-tools-p169"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p169",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=169",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 169",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p169"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p169"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p169"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
