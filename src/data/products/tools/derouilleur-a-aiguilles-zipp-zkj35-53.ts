import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-zipp-zkj35-53",
	"slug": "derouilleur-a-aiguilles-zipp-zkj35-53",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "ZIPP ZKJ35-53",
	"brand": "ZIPP",
	"model": "ZKJ35-53",
	"mpn": "ZKJ35-53",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-zipp-zkj35-53.webp",
		"alt": "Repères techniques : ZIPP ZKJ35-53",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zkj35-53",
		"label": "Référence ZKJ35-53",
		"distinguishingAttributes": {
			"reference": "ZKJ35-53",
			"Cadence": "4000 coups/min",
			"Masse": "2.8 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZKJ35-53. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 4000 coups/min. Masse : 2.8 kg.",
		"verifiedFacts": [
			"Cadence : 4000 coups/min.",
			"Masse : 2.8 kg.",
			"Référence constructeur : ZKJ35-53."
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
			"value": "2.8 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p168"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZKJ35-53",
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
			"value": "198 L/min",
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
