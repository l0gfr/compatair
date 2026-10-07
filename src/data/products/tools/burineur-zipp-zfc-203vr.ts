import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zfc-203vr",
	"slug": "burineur-zipp-zfc-203vr",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZFC-203VR",
	"brand": "ZIPP",
	"model": "ZFC-203VR",
	"mpn": "ZFC-203VR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-zipp-zfc-203vr.webp",
		"alt": "Repères techniques : ZIPP ZFC-203VR",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zfc-203vr",
		"label": "Référence ZFC-203VR",
		"distinguishingAttributes": {
			"reference": "ZFC-203VR",
			"Cadence": "2400 coups/min",
			"Masse": "3.2 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZFC-203VR. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 2400 coups/min. Masse : 3.2 kg.",
		"verifiedFacts": [
			"Cadence : 2400 coups/min.",
			"Masse : 3.2 kg.",
			"Référence constructeur : ZFC-203VR."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "2400 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p170"
			]
		},
		{
			"label": "Masse",
			"value": "3.2 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p170"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZFC-203VR",
			"evidenceIds": [
				"october-b-zipp-tools-p170"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended air pressure must equal or below @90psi (6.2 bar). lAir Inlet Size: 1/4 inch-NPT/PT",
			"evidenceIds": [
				"october-b-zipp-tools-p170"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "113 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p170"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 170",
			"evidenceIds": [
				"october-b-zipp-tools-p170"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p170",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=170",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 170",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p170"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p170"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p170"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
