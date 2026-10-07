import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-zipp-zns1919c",
	"slug": "derouilleur-a-aiguilles-zipp-zns1919c",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "ZIPP ZNS1919C",
	"brand": "ZIPP",
	"model": "ZNS1919C",
	"mpn": "ZNS1919C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-zipp-zns1919c.webp",
		"alt": "Repères techniques : ZIPP ZNS1919C",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zns1919c",
		"label": "Référence ZNS1919C",
		"distinguishingAttributes": {
			"reference": "ZNS1919C",
			"Cadence": "4000 coups/min",
			"Masse": "2.2 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZNS1919C. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 4000 coups/min. Masse : 2.2 kg.",
		"verifiedFacts": [
			"Cadence : 4000 coups/min.",
			"Masse : 2.2 kg.",
			"Référence constructeur : ZNS1919C."
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
				"october-b-zipp-tools-p168"
			]
		},
		{
			"label": "Masse",
			"value": "2.2 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p168"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZNS1919C",
			"evidenceIds": [
				"october-b-zipp-tools-p168"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended air pressure must equal or below @90psi (6.2 bar). lAir Inlet Size: 1/4 inch-NPT/PT",
			"evidenceIds": [
				"october-b-zipp-tools-p168"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "210 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p168"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 168",
			"evidenceIds": [
				"october-b-zipp-tools-p168"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p168",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=168",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 168",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p168"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p168"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p168"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
