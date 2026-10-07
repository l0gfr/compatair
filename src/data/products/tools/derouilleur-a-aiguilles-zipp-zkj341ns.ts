import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-zipp-zkj341ns",
	"slug": "derouilleur-a-aiguilles-zipp-zkj341ns",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "ZIPP ZKJ341NS",
	"brand": "ZIPP",
	"model": "ZKJ341NS",
	"mpn": "ZKJ341NS",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-zipp-zkj341ns.webp",
		"alt": "Repères techniques : ZIPP ZKJ341NS",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zkj341ns",
		"label": "Référence ZKJ341NS",
		"distinguishingAttributes": {
			"reference": "ZKJ341NS",
			"Cadence": "2400 coups/min",
			"Masse": "3.7 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZKJ341NS. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 2400 coups/min. Masse : 3.7 kg.",
		"verifiedFacts": [
			"Cadence : 2400 coups/min.",
			"Masse : 3.7 kg.",
			"Référence constructeur : ZKJ341NS."
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
				"october-b-zipp-tools-p174"
			]
		},
		{
			"label": "Masse",
			"value": "3.7 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p174"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZKJ341NS",
			"evidenceIds": [
				"october-b-zipp-tools-p174"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended air pressure must equal or below @90psi (6.2 bar). lAir Inlet Size: 1/4 inch-NPT/PT",
			"evidenceIds": [
				"october-b-zipp-tools-p174"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "80 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p174"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 174",
			"evidenceIds": [
				"october-b-zipp-tools-p174"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p174",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=174",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 174",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p174"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p174"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p174"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
