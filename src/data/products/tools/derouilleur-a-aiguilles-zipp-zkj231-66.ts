import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-zipp-zkj231-66",
	"slug": "derouilleur-a-aiguilles-zipp-zkj231-66",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "ZIPP ZKJ231-66",
	"brand": "ZIPP",
	"model": "ZKJ231-66",
	"mpn": "ZKJ231-66",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-zipp-zkj231-66.webp",
		"alt": "Repères techniques : ZIPP ZKJ231-66",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zkj231-66",
		"label": "Référence ZKJ231-66",
		"distinguishingAttributes": {
			"reference": "ZKJ231-66",
			"Cadence": "2500 coups/min",
			"Masse": "6 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZKJ231-66. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 2500 coups/min. Masse : 6 kg.",
		"verifiedFacts": [
			"Cadence : 2500 coups/min.",
			"Masse : 6 kg.",
			"Référence constructeur : ZKJ231-66."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "2500 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p171"
			]
		},
		{
			"label": "Masse",
			"value": "6 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p171"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZKJ231-66",
			"evidenceIds": [
				"october-b-zipp-tools-p171"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended air pressure must equal or below @90psi (6.2 bar). lAir Inlet Size: 1/4 inch-NPT/PT",
			"evidenceIds": [
				"october-b-zipp-tools-p171"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "210 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p171"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 171",
			"evidenceIds": [
				"october-b-zipp-tools-p171"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p171",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=171",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 171",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p171"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p171"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p171"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
