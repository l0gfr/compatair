import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zrn1907e",
	"slug": "riveteuse-zipp-zrn1907e",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZRN1907E",
	"brand": "ZIPP",
	"model": "ZRN1907E",
	"mpn": "ZRN1907E",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zrn1907e.webp",
		"alt": "Repères techniques : ZIPP ZRN1907E",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zrn1907e",
		"label": "Référence ZRN1907E",
		"distinguishingAttributes": {
			"reference": "ZRN1907E",
			"Masse": "1.9 kg",
			"Référence constructeur": "ZRN1907E"
		}
	},
	"editorial": {
		"overview": "ZIPP ZRN1907E. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Masse : 1.9 kg. Référence constructeur : ZRN1907E.",
		"verifiedFacts": [
			"Masse : 1.9 kg.",
			"Référence constructeur : ZRN1907E."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.9 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p61"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZRN1907E",
			"evidenceIds": [
				"october-b-zipp-tools-p61"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "DO NOT apply air pressure over 110 psi / 7.5 bar to these tools.",
			"evidenceIds": [
				"october-b-zipp-tools-p61"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 61",
			"evidenceIds": [
				"october-b-zipp-tools-p61"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p61",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=61",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 61",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p61"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p61"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p61"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
